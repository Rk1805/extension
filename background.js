chrome.webRequest.onCompleted.addListener(
    (details) => {
      const visitedUrl = details.url;
      const timestamp = new Date().toISOString();
  
      // Store the URL and timestamp in local storage
      chrome.storage.local.get("history", (data) => {
        const history = data.history || [];
        history.push({ url: visitedUrl, timestamp });
  
        chrome.storage.local.set({ history }, () => {
          console.log("URL logged:", visitedUrl);
        });
      });
    },
    { urls: ["<all_urls>"] } // Monitor all URLs
  );
  