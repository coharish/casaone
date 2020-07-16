import { RulesListComponent } from "./rule-list/rule-list.component";

export const RuleBuilderModule = (() => {
  // Private declarations goes here
  function init() {
    initComponents();
  }

  function initComponents() {
    RulesListComponent.init();
  }

  /** Expose all the methods that needs to accessed outside */

  return {
    init: () => init()
  };
})();
