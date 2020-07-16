import { ConditionListComponent } from "./condition-list/condition-list.component";
import { LocalStorageService } from "../shared/local-storage.service";
import { CONDITION_LS } from "../shared/models/app-constants";
import { Utilities } from "../shared/services/utilities";

export const ConditionComponent = (() => {
  // All private declaration goes here

  let appElement;
  const ls = new LocalStorageService();
  let conditions;

  function init() {
    appElement = Utilities.querySelector("#app");
    conditions = ls.getItem(CONDITION_LS) || [];
    render();
  }

  // Render condiitons list
  function render() {
    let conditionComponentViewHTML = '<section class="condition-list">';
    conditionComponentViewHTML += ConditionListComponent.render(conditions);
    conditionComponentViewHTML += "</section>";

    appElement.innerHTML = conditionComponentViewHTML;
    afterRender();
  }

  // Delete a condition
  function deleteCondition(conditionId) {
    const conditionIndex = conditions.findIndex(
      (cond) => cond.id === conditionId
    );
    conditions.splice(conditionIndex, 1);
    ls.setItem(CONDITION_LS, conditions);
    init(); // Reset the ui
  }

  // Redirect to condition edit page
  function editCondition(conditionId) {
    location.hash = `#create-condition?id=${conditionId}`;
  }

  // Register all the event handlers after template is rendered
  function afterRender() {
    const conditionList = Utilities.querySelector(".conditions-list-table");

    conditionList.addEventListener("click", (event) => {
      const conditionId = event.target.dataset.condition_id;
      if (event.target.className.indexOf("delete-btn") !== -1) {
        deleteCondition(conditionId);
      } else if (event.target.className.indexOf("edit-btn") !== -1) {
        editCondition(conditionId);
      }
    });
  }

  /** Expose all the methods that needs to accessed outside */
  return {
    init: () => init()
  };
})();
