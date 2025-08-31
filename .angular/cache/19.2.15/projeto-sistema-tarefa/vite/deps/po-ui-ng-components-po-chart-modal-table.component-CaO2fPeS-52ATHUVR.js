import {
  PoModalComponent,
  PoModalModule,
  PoTableComponent,
  PoTableModule
} from "./chunk-JMMPIOVD.js";
import "./chunk-NQ6SMJWQ.js";
import "./chunk-TCX65JD6.js";
import "./chunk-QXD5L5VW.js";
import "./chunk-VIZW6SZL.js";
import "./chunk-PD4FPJ6G.js";
import "./chunk-NC5JODL6.js";
import "./chunk-N2DQ4UBE.js";
import "./chunk-6FDT7XU7.js";
import "./chunk-A5QAH54P.js";
import "./chunk-UMNSRAPH.js";
import {
  Component,
  Input,
  ViewChild,
  setClassMetadata,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-YICQVKWL.js";
import "./chunk-GG4OJJKW.js";
import "./chunk-XWLXMCJQ.js";

// node_modules/@po-ui/ng-components/fesm2022/po-ui-ng-components-po-chart-modal-table.component-CaO2fPeS.mjs
var _c0 = ["modalComponent"];
var PoChartModalTableComponent = class _PoChartModalTableComponent {
  modalComponent;
  title;
  itemsTable;
  columnsTable;
  actionModal;
  static ɵfac = function PoChartModalTableComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoChartModalTableComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PoChartModalTableComponent,
    selectors: [["po-chart-modal-table"]],
    viewQuery: function PoChartModalTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalComponent = _t.first);
      }
    },
    inputs: {
      title: "title",
      itemsTable: "itemsTable",
      columnsTable: "columnsTable",
      actionModal: "actionModal"
    },
    decls: 3,
    vars: 6,
    consts: [["modalComponent", ""], [3, "p-click-out", "p-title", "p-primary-action"], [3, "p-hide-columns-manager", "p-items", "p-columns"]],
    template: function PoChartModalTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "po-modal", 1, 0);
        ɵɵelement(2, "po-table", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("p-click-out", true)("p-title", ctx.title)("p-primary-action", ctx.actionModal);
        ɵɵadvance(2);
        ɵɵproperty("p-hide-columns-manager", true)("p-items", ctx.itemsTable)("p-columns", ctx.columnsTable);
      }
    },
    dependencies: [PoModalModule, PoModalComponent, PoTableModule, PoTableComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoChartModalTableComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [PoModalModule, PoTableModule],
      selector: "po-chart-modal-table",
      template: `
    <po-modal #modalComponent [p-click-out]="true" [p-title]="title" [p-primary-action]="actionModal">
      <po-table [p-hide-columns-manager]="true" [p-items]="itemsTable" [p-columns]="columnsTable"></po-table>
    </po-modal>
  `
    }]
  }], null, {
    modalComponent: [{
      type: ViewChild,
      args: ["modalComponent", {
        static: true
      }]
    }],
    title: [{
      type: Input
    }],
    itemsTable: [{
      type: Input
    }],
    columnsTable: [{
      type: Input
    }],
    actionModal: [{
      type: Input
    }]
  });
})();
export {
  PoChartModalTableComponent
};
//# sourceMappingURL=po-ui-ng-components-po-chart-modal-table.component-CaO2fPeS-52ATHUVR.js.map
