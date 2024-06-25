const blockList = [
    "*://*.doubleclick.net/*",
    "*://*.googlesyndication.com/*",
    "*://*.googleadservices.com/*",
    "*://*.adservice.google.com/*",
    "*://*.ads-twitter.com/*",
    "*://*.facebook.com/ads/*",
    "*://*.youtube.com/*ad*",
    "*://*.youtube.com/*ads*",
    "*://*.youtube.com/get_video_info?*ad*",
    "*://*.youtube.com/api/stats/ads?*"
  ];
  
  const rules = blockList.map((pattern, id) => ({
    id: id + 1,
    priority: 1,
    action: { type: 'block' },
    condition: { urlFilter: pattern }
  }));
  
  chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: rules,
      removeRuleIds: rules.map(rule => rule.id)
    });
  });

