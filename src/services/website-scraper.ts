import puppeteer from "puppeteer";

export class WebsiteScraper {
  public async scrapeDoublesStatsForAllPlayers() {
    const browser = await puppeteer.launch({
      headless: true,
      timeout: 20000,
      ignoreHTTPSErrors: true,
      slowMo: 0,
      args: [
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-first-run",
        "--no-sandbox",
        "--no-zygote",
        "--window-size=1280,720",
      ],
    });

    try {
      const page = await browser.newPage();
      await page.setRequestInterception(true);
      page.on("request", (interceptedRequest) => {
        const blockResources = [
          "script",
          "stylesheet",
          "image",
          "media",
          "font",
        ];
        if (blockResources.includes(interceptedRequest.resourceType())) {
          interceptedRequest.abort();
        } else {
          interceptedRequest.continue();
        }
      });

      await page.goto("http://ntfv.de/braunschweig-150/statistiken-bs?task=spielerstatistik&id=273", {
        waitUntil: "domcontentloaded",
      });

      const selector: string = "table.sectiontableentry1_tsl"

    } catch (error) {
      console.log(error);
    } finally {
      if (browser) {
        await browser.close();
      }
    }

    return "";
  }
}
