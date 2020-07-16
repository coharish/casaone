import { conditionFormTemplate } from "./condition-form.template";
import { ConditionCrudModel } from "./condition-form.model";
import { LocalStorageService } from "../../shared/local-storage.service";
import {
  CONDITION_LS,
  AttributeOperators,
  Attributes
} from "../../shared/models/app-constants";
import { Utilities } from "../../shared/services/utilities";

export const ConditionFormComponent = (() => {
  // Private declarations goes here
  let params;
  const ls = new LocalStorageService();
  let conditions;
  let appElement;

  // Do initialisation on page load
  function init() {
    appElement = Utilities.querySelector("#app");
    conditions = ls.getItem(CONDITION_LS) || [];
    params = Utilities.getQueryParams();
    render();
  }

  // Display Condition form UI ( Add, Edit cases)
  function render() {
    let condition = new ConditionCrudModel();

    if (params && params.id) {
      // Edit mode
      condition = conditions.find((cond) => cond.id === params.id);
    }
    appElement.innerHTML = conditionFormTemplate(condition);
    afterRender(condition);
  }

  // Register all the event handlers after form in rendered
  function afterRender(condition) {
    const conditionAttributeEl = Utilities.querySelector(
      "#condition-attribute"
    );

    const selectedConditionIndex = Attributes.findIndex(
      (attr) => attr.key === condition.attribute
    );
    conditionAttributeEl.selectedIndex = selectedConditionIndex + 1 || 0;

    conditionAttributeEl.addEventListener("change", (event) => {
      onConditionAttributeChange(event);
    });

    const createNewConditionEl = Utilities.querySelector(
      "#createorUpdateCondition"
    );

    createNewConditionEl.addEventListener(
      "click",
      saveOrUpdateCondition.bind(this, condition)
    );
  }

  function onConditionAttributeChange(event) {
    const conditionOperatorEl = Utilities.querySelector("#condition-operator");

    let operatorOptions = AttributeOperators[event.target.value].reduce(
      (html, operator) =>
        html + `<option value="${operator.id}">${operator.name}</option>`,
      `<option selected disabled value="0">Select Operator</option>`
    );

    conditionOperatorEl.innerHTML = operatorOptions;
  }

  // Save or update the condition based on user action
  function saveOrUpdateCondition(condition, event) {
    if (event.target.id === "createorUpdateCondition") {
      condition.name = Utilities.querySelector("#condition-name").value;
      condition.attribute = Utilities.querySelector(
        "#condition-attribute"
      ).value;
      condition.operator = Utilities.querySelector("#condition-operator").value;
      condition.value = Utilities.querySelector("#condition-value").value;

      // Check form validations
      if (!validateCondition(condition)) {
        return;
      }

      if (params && params.id) {
        // Update condiiton in edit mode
        condition.id = params.id;
        updateCondition(condition);
      } else {
        // Create a new condiiton
        saveCondition(condition);
      }
    }
  }

  // Update the condition & redirect to listing page
  function updateCondition(condition) {
    conditions = conditions.map((cond) => {
      if (cond.id === condition.id) {
        cond = { ...condition };
      }
      return cond;
    });
    ls.setItem(CONDITION_LS, conditions);
    location.hash = "/";
  }

  // Create a condition & redirect to listing page
  function saveCondition(condition) {
    conditions.push(condition);
    ls.setItem(CONDITION_LS, conditions);
    location.hash = "/";
  }

  // Validate the condition
  function validateCondition(condition) {
    if (
      !condition.name ||
      !condition.operator ||
      !condition.attribute ||
      condition.attribute === "0" ||
      !condition.value
    ) {
      alert("Error validating form.");
      return false;
    }
    return true;
  }

  /** Expose all the methods that needs to be accessed outside */
  return {
    init: () => init()
  };
})();
