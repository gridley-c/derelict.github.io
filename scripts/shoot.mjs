// Playwright screenshot matrix for the derelict photoblog.
// Devices chosen per the landscape-triggers-height lesson:
//   - iPhone SE (small portrait + landscape)
//   - iPhone 14 Pro Max (wide landscape, ~932px, that broke the old width-only matcher)
//   - Pixel 7 (Android portrait + landscape)
// Shots saved to shots/<device>_<orientation>_<view>.png for download as a CI artifact.
import { chromium, devices } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = process.env.SHOOT_BASE ?? 'http://localhost:4000';
const OUT = 'shots';
mkdirSync(OUT, { recursive: true });

const MATRIX = [
  { name: 'iphone-se-portrait',    device: devices['iPhone SE'] },
  { name: 'iphone-se-landscape',   device: { ...devices['iPhone SE'], viewport: { width: 667, height: 375 }, isLandscape: true } },
  { name: 'promax-portrait',       device: devices['iPhone 14 Pro Max'] },
  { name: 'promax-landscape',      device: { ...devices['iPhone 14 Pro Max'], viewport: { width: 932, height: 430 }, isLandscape: true } },
  { name: 'pixel7-portrait',       device: devices['Pixel 7'] },
  { name: 'pixel7-landscape',      device: { ...devices['Pixel 7'], viewport: { width: 915, height: 412 }, isLandscape: true } },
];

const VIEWS = [
  { name: 'gallery',  goto: BASE },
  { name: 'lightbox', goto: BASE, clickFirstItem: true, scrollY: 400 },
];

const browser = await chromium.launch();
let failed = 0;

for (const { name, device } of MATRIX) {
  for (const view of VIEWS) {
    const ctx = await browser.newContext(device);
    const page = await ctx.newPage();
    try {
      await page.goto(view.goto, { waitUntil: 'networkidle' });
      if (view.clickFirstItem) await page.click('.gallery-item');
      if (view.scrollY != null) await page.evaluate((y) => window.scrollBy(0, y), view.scrollY);
      await page.screenshot({ path: `${OUT}/${name}_${view.name}.png`, fullPage: false });
    } catch (e) {
      console.error(`FAILED ${name}/${view.name}: ${e.message}`);
      failed++;
    }
    await ctx.close();
  }
}

await browser.close();
process.exit(failed > 0 ? 1 : 0);
