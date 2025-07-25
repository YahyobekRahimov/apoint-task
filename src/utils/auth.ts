/**
 * Set a cookie
 * @param name Cookie name
 * @param value Cookie value
 * @param days Number of days until the cookie expires
 */
export const setCookie = (name: string, value: string, days = 10) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
};

/**
 * Get a cookie by name
 * @param name Cookie name
 * @returns Cookie value or null if not found
 */
export const getCookie = (name: string): string | null => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, ...rest] = cookie.split("=");
    if (decodeURIComponent(key) === name) {
      return decodeURIComponent(rest.join("="));
    }
  }
  return null;
};

/**
 * Delete a cookie by name
 * @param name Cookie name
 */
export const deleteCookie = (name: string) => {
  document.cookie = `${encodeURIComponent(
    name
  )}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};
