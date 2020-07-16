export const conditionListTemplate = (conditionsHtml) => `

    <div class="table-container">
        <div class="table-top">
            <h4>Conditions</h4>
            <div class="action-buttons">
                <a class="btn-create-rule btn" href="#rules">Create Rule</a>
                <a class="btn-create-condition btn" href="#create-condition">Create Condition</a>
            </div>
        </div>
        <table class="conditions-list-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Attribute</th>
                    <th>Operator</th>
                    <th>Value</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${
                  conditionsHtml
                    ? conditionsHtml
                    : `<tr><td colspan="5" class="error">No Conditions Avaialble.</td></tr>`
                }
            </tbody>
        </table>
    </div>
`;
