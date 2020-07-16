export const conditionItemTemplate = (condition) => `

    <tr>
        <td>${condition.name}</td>
        <td>${condition.attribute}</td>
        <td>${condition.operator}</td>
        <td>${condition.value}</td>
        <td>
            <button data-condition_id="${condition.id}" class="btn-delete-todo delete-btn"> Delete </button>
            <button data-condition_id="${condition.id}" class="btn-edit-todo edit-btn"> Edit </button>
        </td>
    </tr>
`;
