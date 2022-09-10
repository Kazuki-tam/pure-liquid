import { test, expect } from "@playwright/test";
import { webkit } from "playwright";

test("Visual regression testing of top page", async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("http://localhost:8080");

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});
