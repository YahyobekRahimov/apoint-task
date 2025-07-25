// Add keyboard navigation tracking for accessibility
export function initializeKeyboardNavigation() {
  // Track if user is using keyboard for navigation
  let userIsTabbing = false;

  // Listen for the tab key
  window.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      if (!userIsTabbing) {
        userIsTabbing = true;
        document.body.classList.add("user-is-tabbing");
      }
    }
  });

  // Listen for mouse events to remove keyboard navigation mode
  window.addEventListener("mousedown", () => {
    if (userIsTabbing) {
      userIsTabbing = false;
      document.body.classList.remove("user-is-tabbing");
    }
  });

  // Also listen for click events
  window.addEventListener("click", () => {
    if (userIsTabbing) {
      userIsTabbing = false;
      document.body.classList.remove("user-is-tabbing");
    }
  });
}

// Initialize on DOM content loaded
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeKeyboardNavigation
    );
  } else {
    initializeKeyboardNavigation();
  }
}
