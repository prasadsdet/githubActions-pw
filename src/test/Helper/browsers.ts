import { chromium, firefox, webkit, LaunchOptions } from "@playwright/test";
const headlessEnv = (process.env.PLAYWRIGHT_HEADLESS ?? process.env.HEADLESS ?? "").toLowerCase();
const headless = headlessEnv ? headlessEnv === "true" : true; // default to headless=true


const options:LaunchOptions={
    headless,
}

export const invokeBrowser = ()=>{
    const browserType = process.env.npm_config_BROWSER || "chrome";
    switch(browserType){
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options)
        default:
            throw new Error("please provide valid Brower")
    }
}
