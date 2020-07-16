export const rulesListTemplate = (conditionsHtml) => `

    <section class="condition-list">
        <div class="table-container">
            <div class="table-top">
                <h4>Rules</h4>
                <div class="action-buttons">
                    <a class="btn build-rule-btn"> Add Rule </a>
                </div>
            </div>
            <table class="conditions-list-table rules-list-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Attribute</th>
                        <th>Operator</th>
                        <th>Value</th>
                        <th>Actions</th>
                    </tr>
                <thead>

                <tbody>
                    ${
                      conditionsHtml
                        ? conditionsHtml
                        : `<tr><td colspan="5" class="error">No Rules Avaialble</td></tr>`
                    }
                </tbody>
            </table>
        </div>
    </section>
`;
