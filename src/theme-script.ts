// Resolves and applies the theme before first paint, so there's no flash
// of the wrong theme. Runs as a blocking inline script in <head> — must
// stay dependency-free and safe if localStorage/matchMedia are unavailable.
export const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;
