import puppeteer, { Browser } from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export const handle = async () => {
  let browser: Browser | undefined;
  try {
    browser = await createBrowser();
    const page = await browser.newPage();
    await page.goto("https://google.com");
    const pageTitle = await page.title();

    console.log('ページタイトル: ', pageTitle)
  } catch (error) {
    const msg = `エラー: ${error instanceof Error ? error.message : 'unknown error'}`;
    console.error(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: msg,
      }),
    };
  } finally {
    if (browser != undefined) {
      await browser.close();
      console.log('ブラウザをクローズしました。')
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({message: 'fire!!'}),
  };
};

export const createBrowser = async (): Promise<Browser> => {
  console.log('ブラウザを作成します。');
  const options = {
    args: [...chromium.args, '--lang=ja-JP'],
    defaultViewport: chromium.defaultViewport,
    headless: true,
    executablePath: await chromium.executablePath(),
  };
  const browser: Browser = await puppeteer.launch(options);
  console.log('ブラウザを作成しました。');
  return browser;
};
