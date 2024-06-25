document.addEventListener('DOMContentLoaded', function() {
    const adSelectors = [
      'iframe[src*="doubleclick.net"]',
      'iframe[src*="googlesyndication.com"]',
      'iframe[src*="googleadservices.com"]',
      '[id^=ad_]',
      '[class*="ad-"]',
      '[class^="ad-"]',
      '[id*="google_ads_"]',
      '[class*="ad_container"]',
      '.ytp-ad-module',          // YouTube ad module
      '.video-ads',              // YouTube video ads container
      '.ytp-ad-player-overlay',  // YouTube ad overlay
      '.ytp-ad-text',            // YouTube ad text
      '.ytp-ad-skip-button',     // YouTube ad skip button
      '.ytp-ad-preview-container',// YouTube ad preview container
      '.ytp-ad-overlay-slot',    // YouTube overlay ads
      '.ytp-cued-thumbnail-overlay-ad-info', // YouTube cued thumbnail overlay ad info
      '.ytp-ad-overlay-image'    // YouTube ad overlay image
    ];
  
    function removeAds() {
      adSelectors.forEach(selector => {
        const ads = document.querySelectorAll(selector);
        ads.forEach(ad => ad.remove());
      });
    }
  
    removeAds();
  
    // Monitor for changes and remove ads dynamically
    const observer = new MutationObserver(() => {
      removeAds();
    });
  
    observer.observe(document.body, { childList: true, subtree: true });
  
    // Also periodically check and remove ads to cover cases MutationObserver might miss
    setInterval(removeAds, 1000);
  });
  