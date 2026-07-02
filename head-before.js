(function () {
  function start() {
    window.PixieLoader.loadStyles(window.PIXIE.styles.beforeForumCSS);
    window.PixieLoader.loadStyles(window.PIXIE.themeStyles?.beforeForumCSS, window.PIXIE.themeBase);
  }

  if (window.PixieLoader) start();
})();
