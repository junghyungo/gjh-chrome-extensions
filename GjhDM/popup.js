let popupWindowId = null;
const popupWidth = 740;
chrome.windows.getCurrent({}, function(currentWindow) {
  const left = currentWindow.left + currentWindow.width - popupWidth;
  chrome.windows.create({
    url: "https://www.instagram.com/direct/inbox/",
    type: "popup",
    width: popupWidth,
    height: 844,
    left: left,
    top: 120
  }, function(win) {
    popupWindowId = win.id;
    chrome.windows.update(win.id, { focused: true });
  });
});
