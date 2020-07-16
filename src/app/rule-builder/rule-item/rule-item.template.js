export const ruleItemTemplate = (rule, mode) => `

    <tr>
        <td>${rule.name}</td>
        <td>${rule.condition.attribute}</td>
        <td>${rule.condition.operator}</td>
        <td>${rule.value}</td>
        <td>
            <button data-rule_id="${rule.id}" class="delete-btn delete-rule-btn" title="Delete"> Delete </button>
            <button data-rule_id="${rule.id}" class="edit-btn edit-rule-btn"> Edit </button>
        </td>
    </tr>
`;
