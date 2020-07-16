import { ConditionComponent } from "./condition.component";

export const ConditionModule = (() => {
  // Private declarations goes here
  function init() {
    initComponents();
  }

  function initComponents() {
    ConditionComponent.init();
  }

  /** Expose all the methods that needs to accessed outside */

  return {
    init: () => init()
  };
})();
