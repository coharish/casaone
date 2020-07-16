import { Attributes } from "../../shared/models/app-constants";

export class ConditionCrudModel {
  constructor() {
    return {
      name: "",
      attribute: null,
      operator: "",
      value: "",
      id: Math.random().toString(36).substr(2, 5) // Generate condition id
    };
  }
}
