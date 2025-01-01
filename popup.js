document.addEventListener("DOMContentLoaded", () => {
    const historyList = document.getElementById("history-list");
  
    chrome.storage.local.get("history", (data) => {
      const history = data.history || [];
      history.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.timestamp}: ${item.url}`;
        historyList.appendChild(listItem);
      });
    });
  });
  