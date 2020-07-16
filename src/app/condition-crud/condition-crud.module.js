import { ConditionFormComponent } from "./condition-form/condition-form.component";

export const ConditionCrudModule = (() => {
  // Private declarations goes here
  function initComponents() {
    // Load ConditionForm
    ConditionFormComponent.init();
  }

  /** Expose all the methods that needs to accessed outside */
  return {
    init: () => initComponents()
  };
})();
