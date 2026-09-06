// 1. The Throttle Helper
function throttle(fn, interval) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// 2. The Action You Want to Run
const logScrollActivity = throttle(() => {
  console.log("Scrolling actively! Timestamp:", new Date().toLocaleTimeString());
  // Add your analytics tracking, lazy loading, or animation logic here
}, 2000);

// 3. Attach the Listener
window.addEventListener("mouseover", logScrollActivity);