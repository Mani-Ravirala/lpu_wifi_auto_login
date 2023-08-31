chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url) {
      // Check if the URL matches the captive portal URL
      if (
        tab.url.includes("https://10.10.0.1/") ||
        tab.url.includes("https://internet.lpu.in/")
      ) {
        // Change to the captive portal URL
        // Inject content script into the tab
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ["content.js"],
        });
      }
    }
  });
  