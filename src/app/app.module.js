import { AppComponent } from "./app.component";
import { ConditionListComponent } from "./condition/condition-list/condition-list.component";
import { ConditionComponent } from "./condition/condition.component";

export const App = (() => {
  // Private declarations goes here

  function onHashChange() {
    var theHash = window.location.hash;
    AppComponent.init(theHash);
  }

  function routeHashListeners() {
    window.addEventListener("hashchange", () => {
      console.log("hashchange event");
      onHashChange();
    });

    window.addEventListener("load", (ev) => {
      console.log("DOMContentLoaded event");
      onHashChange();
    });
  }

  /** Expose all the methods that needs to accessed outside */
  return {
    init: () => routeHashListeners()
  };
})();
