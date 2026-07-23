// Resolves and applies the theme before first paint, so there's no flash
// of the wrong theme. Runs as a blocking inline script in <head> — must
// stay dependency-free and safe if localStorage/matchMedia are unavailable.
// Dark is the site's default (terminal aesthetic); an explicit user choice
// in localStorage still wins.
export const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;
