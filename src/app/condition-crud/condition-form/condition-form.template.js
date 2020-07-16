import {
  Attributes,
  AttributeOperators
} from "../../shared/models/app-constants";

export const conditionFormTemplate = (condition) => `
    <section class="add-condition-section">

        <div class="row">
            <div class="col">
                <label for="name">Name</label>
            </div>
            <div class="col">
                <input autocomplete="off" type="text" value="${
                  condition.name
                }" id="condition-name" name="name" placeholder="Enter condition name">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="attribute">Attribute</label>
            </div>
            <div class="col">
                <select id="condition-attribute" name="attribute">
                    <option value="0" selected disabled>Select Attribute</option>
                    ${Attributes.map((attr) => {
                      return `<option value="${attr.key}">${attr.value}</option>`;
                    })}
                </select>
            </div>
        </div>
        
        <div class="row">
            <div class="col">
                <label for="operator">Operator</label>
            </div>
            <div class="col">
                <select id="condition-operator" name="operaator">
                    <option value="0" disabled selected>Select Operator</option>
                    ${
                      condition.attribute
                        ? `
                        ${AttributeOperators[condition.attribute].map(
                          (opertator) => {
                            if (opertator.id === condition.operator) {
                              return `<option value="${opertator.id}" selected>${opertator.name}</option>`;
                            } else {
                              return `<option value="${opertator.id}">${opertator.name}</option>`;
                            }
                          }
                        )}
                        `
                        : ``
                    }
                </select>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <label for="value">Value</label>
            </div>
            <div class="col">
                <input type="text" autocomplete="off" value="${
                  condition.value
                }" id="condition-value" name="condition-value" placeholder="Enter condition value">
            </div>
        </div>
        <div class="row form-actions">
            <div class="col" style="margin-top: 3%;">
                <a class="btn delete-btn" href="/">Cancel</a>
                <a id="createorUpdateCondition" class="btn-create-new-condition btn edit-btn">Save Condition</a>
            </div>
        </div>
    </section>
`;
