// After CSS

(function () {
  function start() {
    window.PixieLoader.loadStyles(window.PIXIE.styles.afterForumCSS);
    window.PixieLoader.loadStyles(window.PIXIE.themeStyles?.afterForumCSS, window.PIXIE.themeBase);
  }

  if (window.PixieLoader) start();
})();
