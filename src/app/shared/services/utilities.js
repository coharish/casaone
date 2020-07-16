export const Utilities = (() => {
  function getQueryParams() {
    const href = window.location.hash;
    const params = href.split("?")[1];

    // Be sure url params exist
    let result;
    if (params && params !== "") {
      result = params.split("&").reduce(function (res, item) {
        const parts = item.split("=");
        res[parts[0]] = parts[1] ? parts[1].split("#")[0] : null;
        return res;
      }, {});
    }

    return result;
  }

  function querySelector(selector) {
    return document.querySelector(selector);
  }

  return {
    getQueryParams: () => getQueryParams(),
    querySelector: (selector) => querySelector(selector)
  };
})();
