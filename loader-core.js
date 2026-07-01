(function () {
  const config = window.PIXIE || {};

  function join(base, file) {
    return String(base || "").replace(/\/$/, "") + "/" + String(file || "").replace(/^\//, "");
  }

  function loadStyle(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  window.PixieLoader = {
    loadStyles(list = [], base = config.base) {
      list.forEach((file) => loadStyle(join(base, file)));
    },

    async loadScripts(list = [], base = config.base) {
      for (const file of list) {
        await loadScript(join(base, file));
      }
    }
  };
})();
