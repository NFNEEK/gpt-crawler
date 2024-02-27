import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://photofinish.live/races", 
  match: "https://photofinish.live/races/**",
  selector: '.container',
  maxPagesToCrawl: 100,
  outputFileName: "PFrace.json",
  maxTokens: 2000000,
  waitForSelectorTimeout: 5000, // Increase timeout to 5000ms
};