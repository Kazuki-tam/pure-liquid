import { test, expect, webkit } from "@playwright/test";

test("Visual regression testing of docs page", async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://localhost:8080/docs/");
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});
