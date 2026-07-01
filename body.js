(function () {
  async function start() {
    window.PixieLoader.loadStyles(window.PIXIE.styles.body);
    window.PixieLoader.loadStyles(window.PIXIE.themeStyles.body, window.PIXIE.themeBase);
    await window.PixieLoader.loadScripts(window.PIXIE.scripts);
  }

  if (window.PixieLoader) start();
})();
