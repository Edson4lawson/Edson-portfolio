// Unified theme utility for dark/light mode

export const initTheme = () => {
  const saved = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  
  if (saved === 'light' || (!saved && prefersLight)) {
    document.documentElement.classList.add('light-theme');
  } else {
    document.documentElement.classList.remove('light-theme');
  }
};

export const toggleTheme = () => {
  const isLight = document.documentElement.classList.toggle('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  window.dispatchEvent(new CustomEvent('theme-changed', { detail: { isLight } }));
  return isLight;
};

export const isLightThemeActive = () => {
  return document.documentElement.classList.contains('light-theme');
};
