import { conditionListTemplate } from "./condition-list.template";
import { conditionItemTemplate } from "../condition-item/condition-item.template";

export const ConditionListComponent = (() => {
  // All private declaration goes here

  function init() {}

  // To render Consitions template
  function render(model) {
    let conditionsHTML = model.reduce(
      (html, condition) => html + conditionItemTemplate(condition),
      ""
    );
    return conditionListTemplate(conditionsHTML);
  }

  /** Expose all the methods that needs to accessed outside */
  return {
    render: (model) => {
      return render(model);
    }
  };
})();
