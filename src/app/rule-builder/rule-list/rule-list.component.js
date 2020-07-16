import { LocalStorageService } from "../../shared/local-storage.service";
import { CONDITION_LS, RULES_LS } from "../../shared/models/app-constants";
import { ruleItemTemplate } from "../rule-item/rule-item.template";
import { rulesListTemplate } from "./rule-list.template";
import { Utilities } from "../../shared/services/utilities";
import { addRuleItemTemplate } from "../rule-item/add-rule-item.template";

export const RulesListComponent = (() => {
  // Private methods & Variables goes here

  const ls = new LocalStorageService();
  let conditions;
  let rules;
  let appElement;
  let condition;
  let rule;
  let addRuleBtn;

  function init() {
    appElement = Utilities.querySelector("#app");
    conditions = ls.getItem(CONDITION_LS) || [];
    rules = ls.getItem(RULES_LS) || [];
    render();
  }

  // Render the template for Rules
  function render() {
    const rulesHTML = rules.reduce(
      (html, rule) => html + ruleItemTemplate(rule),
      ""
    );

    appElement.innerHTML = rulesListTemplate(rulesHTML);
    afterRender();
  }

  // Refister all the event handlers when template is rendered
  function afterRender() {
    const rulesEl = Utilities.querySelector(".rules-list-table");
    addRuleBtn = Utilities.querySelector(".build-rule-btn");

    addRuleBtn.addEventListener("click", (event) => {
      addRuleBtn.disabled = true;
      addRule();
    });

    rulesEl.addEventListener("click", (event) => {
      const ruleId = event.target.dataset.rule_id;
      if (event.target.className.indexOf("delete-rule-btn") !== -1) {
        deleteRule(event, ruleId);
        addRuleBtn.disabled = false;
      } else if (event.target.className.indexOf("edit-rule-btn") !== -1) {
        editRule(event, ruleId);
      } else if (event.target.className.indexOf("save-rule-btn") !== -1) {
        saveRule(event, ruleId);
        addRuleBtn.disabled = false;
      } else if (event.target.className.indexOf("cancel-rule-btn") !== -1) {
        cancelRule(event, ruleId);
        addRuleBtn.disabled = false;
      }
    });

    rulesEl.addEventListener("change", (event) => {
      if (event.target.className.indexOf(`rule-condition-${rule.id}`) !== -1) {
        onConditionNameChange(event);
      }
    });
  }

  // Update the values based on the condiiton selected by user
  function onConditionNameChange(event) {
    const rowToEdit = event.target.parentElement.parentElement.children;
    condition = conditions.find((cond) => cond.id === event.target.value);

    rowToEdit[1].innerHTML = condition.attribute;
    rowToEdit[2].innerHTML = condition.operator;
    rowToEdit[3].innerHTML = `<input type="text" value="${condition.value}" id="rule-value" name="rule-value" placeholder="Enter value">`;
    rowToEdit[4].innerHTML = `<button data-rule_id="${rule.id}" class="delete-btn delete-rule-btn"> Remove </button>
      <button data-rule_id="${rule.id}" class="edit-btn save-rule-btn"> Save </button>  
    `;
  }

  // Create a new Rule when user clicks on CreateRule
  function addRule() {
    const rulesList = Utilities.querySelector(".rules-list-table");
    if (!rules || rules.length === 0) {
      rulesList.tBodies[0].children[0].remove(); // Clear No data text
    }
    rule = {
      id: Math.random().toString(36).substr(2, 5), // Generate an id for a rule
      conditionId: ""
    };

    const tpl = addRuleItemTemplate(rule);
    rulesList.innerHTML += tpl; // Display new rule
  }

  // Delete a Rule
  function deleteRule(event, ruleId) {
    const ruleIndex = rules.findIndex((rule) => rule.id === ruleId);
    const rowToEdit = event.target.parentElement.parentElement;
    rowToEdit.remove();

    // If rule exists, update the data
    if (ruleIndex !== -1) {
      rules.splice(ruleIndex, 1);
      ls.setItem(RULES_LS, rules);
    }

    if (rules.length === 0) {
      init();
    }
  }

  // Reset the rule to previous state when user clicks on Cancel
  function cancelRule(event, ruleId) {
    const rowToEdit = event.target.parentElement.parentElement.children;
    rowToEdit[0].innerHTML = condition.name;
    rowToEdit[3].innerHTML = Utilities.querySelector("#rule-value").value;
    rule.name = condition.name;
    rule.value = rule.value;
    rowToEdit[4].innerHTML = `
      <button class="delete-btn delete-rule-btn"> Delete </button>
      <button data-rule_id="${rule.id}" class="edit-btn edit-rule-btn"> Edit </button>
    `;
  }

  // Make the row editable when user clicks on Edit
  function editRule(event, ruleId) {
    const rowToEdit = event.target.parentElement.parentElement.children;
    rule = rules.find((rule) => rule.id === ruleId);
    condition = conditions.find((cond) => cond.id === rule.conditionId);

    rowToEdit[0].innerHTML = `<select id="condition-name" name="condition">
        ${conditions.map((condition) => {
          if (condition.id === rule.conditionId) {
            return `<option value="${condition.id}" selected>${condition.name}</option>`;
          }
          return `<option value="${condition.id}">${condition.name}</option>`;
        })}
      </select>`;

    rowToEdit[3].innerHTML = `<input type="text" value="${rule.value}" id="rule-value" name="rule-value" placeholder="Enter value">`;

    rowToEdit[4].innerHTML = `<button data-rule_id="${rule.id}" class="delete-btn cancel-rule-btn"> Cancel </button>
      <button data-rule_id="${rule.id}" class="edit-btn save-rule-btn"> Save </button>
    `;
  }

  // Save the Role
  function saveRule(event, ruleId) {
    const rowToEdit = event.target.parentElement.parentElement.children;

    const ruleIndex = rules.findIndex((rule) => rule.id === ruleId);

    // Update the rule and save the data
    rule.name = condition.name;
    rule.value = Utilities.querySelector("#rule-value").value;
    rule.conditionId = condition.id;
    rule.condition = condition;

    // Update the rule and save the data
    rowToEdit[0].innerHTML = condition.name;
    rowToEdit[3].innerHTML = Utilities.querySelector("#rule-value").value;
    rowToEdit[4].innerHTML = `
      <button class="delete-btn delete-rule-btn"> Delete </button>
      <button data-rule_id="${rule.id}" class="edit-btn edit-rule-btn"> Edit </button>
    `;

    if (ruleIndex === -1) {
      rules.push(rule);
    } else {
      rules[ruleIndex] = rule;
    }

    ls.setItem(RULES_LS, rules);

    addRuleBtn.disabled = false;
    init();
  }

  /** Expose all the methods that needs to accessed outside */
  return {
    init: () => init()
  };
})();
