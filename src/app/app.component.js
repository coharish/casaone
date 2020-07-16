import { appTemplate } from "./app.template";
import { AppModel } from "./app.model";

export const AppComponent = (() => {
  function initEvents(hash) {
    const hashValue = hash.split("?")[0] || hash;
    switch (hashValue) {
      case "#rules":
        import("./rule-builder/rule-builder.module.js")
          .then((lazyModule) => {
            lazyModule.RuleBuilderModule.init();
          })
          .catch((error) => console.error(error));
        break;
      case "#create-condition":
        import("./condition-crud/condition-crud.module")
          .then((lazyModule) => {
            lazyModule.ConditionCrudModule.init();
          })
          .catch((error) => console.error(error));
        break;
      case "#conditions":
      default:
        console.log("default");
        import("./condition/condition.module")
          .then((lazyModule) => {
            lazyModule.ConditionModule.init();
          })
          .catch((error) => console.error(error));
    }
  }

  return {
    init: (hash) => initEvents(hash)
  };
})();
