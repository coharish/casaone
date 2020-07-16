export const CONDITION_LS = "casaoneCondition";
export const RULES_LS = "casaoneRules";

export const Attributes = [
  {
    key: "rental_amount",
    value: "Rental Amount",
    attributeValueTransformer: (value) =>
      `<input type="text" id="condition-value" name="condition-value" placeholder="Enter condition value" value="${value}">`
  },
  {
    key: "rental_tenure",
    value: "Rental Tenure",
    attributeValueTransformer: (value) =>
      `<input type="text" id="condition-value" name="condition-value" placeholder="Enter condition value" value="${value}">`
  },
  {
    key: "age",
    value: "Customer Age",
    attributeValueTransformer: (value) =>
      `<input type="text" id="condition-value" name="condition-value" placeholder="Enter condition value" value="${value}">`
  },

  {
    key: "zip_code",
    value: "Zip Code",
    attributeValueTransformer: (value) =>
      `<input type="text" id="condition-value" name="condition-value" placeholder="Enter condition value" value="${value}">`
  },

  {
    key: "order_item",
    value: "Order Item",
    attributeValueTransformer: (value) =>
      `<input type="text" id="condition-value" name="condition-value" placeholder="Enter condition value" value="${value}">`
  }
];

// TODO: Use the Facade to generate AttributeValueConfig
export const AttributeValueConfig = {
  rental_amount: {
    attributeValueTransformer: (value) =>
      `<input type="text" id="condition-value" name="condition-value" placeholder="Enter condition value" value="${value}">`
  },
  rental_tenure: {
    attributeValueTransformer: (value) =>
      `<input type="text" id="condition-value" name="condition-value" placeholder="Enter condition value" value="${value}">`
  },
  age: {
    attributeValueTransformer: (value) =>
      `<input type="text" id="condition-value" name="condition-value" placeholder="Enter condition value" value="${value}">`
  },

  zip_code: {
    attributeValueTransformer: (value) =>
      `<input type="text" id="condition-value" name="condition-value" placeholder="Enter condition value" value="${value}">`
  },

  order_item: {
    attributeValueTransformer: (value) =>
      `<input type="text" id="condition-value" name="condition-value" placeholder="Enter condition value" value="${value}">`
  }
};

export const Operators = [
  {
    id: "<",
    name: "Less than (<)"
  },
  {
    id: "<=",
    name: "Less than or Equal (<=)"
  },
  {
    id: ">",
    name: "Greater than (>)"
  },
  {
    id: ">=",
    name: "Greater than or Equal (>=)"
  },
  {
    id: "=",
    name: "Equals (=)"
  },

  {
    id: "has",
    name: "Has"
  },

  {
    id: "between",
    name: "Between"
  }
];

export const AttributeOperators = {
  rental_amount: [
    {
      id: "<",
      name: "Less than (<)"
    },
    {
      id: "<=",
      name: "Less than or Equal (<=)"
    },
    {
      id: ">",
      name: "Greater than (>)"
    },
    {
      id: ">=",
      name: "Greater than or Equal (>=)"
    },
    {
      id: "=",
      name: "Equals (=)"
    }
  ],
  rental_tenure: [
    {
      id: "=",
      name: "Equals (=)"
    },
    {
      id: "<",
      name: "Less than (<)"
    },
    {
      id: ">",
      name: "Greater than (>)"
    }
  ],
  age: [
    {
      id: "=",
      name: "Equals (=)"
    },
    {
      id: "between",
      name: "Between"
    }
  ],
  zip_code: [
    {
      id: "in",
      name: "In"
    }
  ],
  order_item: [
    {
      id: "has",
      name: "Has"
    },
    {
      id: "=",
      name: "Equals (=)"
    }
  ]
};
