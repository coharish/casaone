import { LocalStorageService } from "../../shared/local-storage.service";
import { CONDITION_LS } from "../../shared/models/app-constants";

export const addRuleItemTemplate = (rule) => {
  const ls = new LocalStorageService();
  let conditions = ls.getItem(CONDITION_LS) || [];

  return `

    <tr>
        <td>
            <select class="rule-condition-${rule.id}" name="rule-condition-${
    rule.id
  }">
                <option value="" disabled selected>Select condition</option>
                ${conditions.map((condition) => {
                  return `<option value="${condition.id}">${condition.name}</option>`;
                })}
            </select>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            <button data-rule_id="${
              rule.id
            }" class="delete-btn delete-rule-btn" title="Remove"> Remove </button>
            <button data-rule_id="${
              rule.id
            }" class="edit-btn save-rule-btn"> Save </button>
        </td>
    </tr>
`;
};
