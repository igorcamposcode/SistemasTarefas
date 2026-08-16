import { n as _defineProperty, t as _objectSpread2 } from "./objectSpread2-C_IE-bIJ.js";
import { $n as Output, Dr as ViewEncapsulation, En as ElementRef, Ic as NgZone, In as Input, O as booleanAttribute, Ol as ɵɵdefineInjector, S as ViewChild, Sa as ɵɵconditional, Ui as setClassMetadata, Us as ɵɵtext, Vs as ɵɵtemplate, Ws as ɵɵtextInterpolate, Wt as linkedSignal, X as input, Xo as ɵɵnextContext, _o as ɵɵelementContainerEnd, as as ɵɵproperty, at as output, ba as ɵɵclassProp, bo as ɵɵelementStart, cl as inject, cn as Component, eo as ɵɵdefineComponent, gc as DestroyRef, gs as ɵɵqueryAdvance, gt as viewChild, ho as ɵɵelement, is as ɵɵprojectionDef, no as ɵɵdefineNgModule, qn as NgModule, r as ChangeDetectorRef, rs as ɵɵprojection, sc as ɵɵviewQuerySignal, ua as ɵɵadvance, va as ɵɵattribute, vo as ɵɵelementContainerStart, wa as ɵɵconditionalCreate, yo as ɵɵelementEnd } from "./core-CXNTKvTk.js";
import { Xt as filter, fr as __esDecorate, pr as __runInitializers } from "./esm5-BupzNxh_.js";
import { n as Directionality } from "./bidi-CMsMKfPk.js";
import { m as onConfigChangeEventForComponent, o as NzIconDirective, p as WithConfig, s as NzIconModule, y as takeUntilDestroyed } from "./ng-zorro-antd-icon-DGQmdhvo.js";
import { r as fromEventOutsideAngular } from "./ng-zorro-antd-core-util-DcoCxePB.js";
import { t as NzAnimationCollapseDirective } from "./ng-zorro-antd-core-animation-sB-Dji1R.js";
import { n as NzStringTemplateOutletDirective, t as NzOutletModule } from "./ng-zorro-antd-core-outlet-CjP2t4ku.js";
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-collapse.mjs
var _NzCollapseModule;
var _c0 = ["*"];
var _c1 = ["collapseHeader"];
var _c2 = ["collapseIcon"];
function NzCollapsePanelComponent_Conditional_2_ng_container_2_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵelement(1, "nz-icon", 9);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const expandedIcon_r1 = ctx.$implicit;
		const ctx_r1 = ɵɵnextContext(2);
		ɵɵadvance();
		ɵɵproperty("nzType", expandedIcon_r1 || "right")("nzRotate", ctx_r1.active() ? 90 : 0);
	}
}
function NzCollapsePanelComponent_Conditional_2_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 3, 1);
		ɵɵtemplate(2, NzCollapsePanelComponent_Conditional_2_ng_container_2_Template, 2, 2, "ng-container", 5);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵadvance(2);
		ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzExpandedIcon);
	}
}
function NzCollapsePanelComponent_ng_container_4_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵtext(1);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵtextInterpolate(ctx_r1.nzHeader);
	}
}
function NzCollapsePanelComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵtext(1);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(2);
		ɵɵadvance();
		ɵɵtextInterpolate(ctx_r1.nzExtra);
	}
}
function NzCollapsePanelComponent_Conditional_5_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 6);
		ɵɵtemplate(1, NzCollapsePanelComponent_Conditional_5_ng_container_1_Template, 2, 1, "ng-container", 5);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzExtra);
	}
}
var NZ_CONFIG_MODULE_NAME$1 = "collapse";
var NzCollapseComponent = (() => {
	var _NzCollapseComponent;
	let _nzAccordion_decorators;
	let _nzAccordion_initializers = [];
	let _nzAccordion_extraInitializers = [];
	let _nzBordered_decorators;
	let _nzBordered_initializers = [];
	let _nzBordered_extraInitializers = [];
	let _nzGhost_decorators;
	let _nzGhost_initializers = [];
	let _nzGhost_extraInitializers = [];
	return _NzCollapseComponent = class NzCollapseComponent {
		constructor() {
			_defineProperty(this, "cdr", inject(ChangeDetectorRef));
			_defineProperty(this, "dir", inject(Directionality).valueSignal);
			_defineProperty(this, "_nzModuleName", NZ_CONFIG_MODULE_NAME$1);
			_defineProperty(this, "nzAccordion", __runInitializers(this, _nzAccordion_initializers, false));
			_defineProperty(this, "nzBordered", (__runInitializers(this, _nzAccordion_extraInitializers), __runInitializers(this, _nzBordered_initializers, true)));
			_defineProperty(this, "nzGhost", (__runInitializers(this, _nzBordered_extraInitializers), __runInitializers(this, _nzGhost_initializers, false)));
			_defineProperty(this, "nzExpandIconPosition", (__runInitializers(this, _nzGhost_extraInitializers), "start"));
			_defineProperty(this, "nzSize", "middle");
			_defineProperty(this, "listOfNzCollapsePanelComponent", []);
			onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME$1, () => this.cdr.markForCheck());
		}
		addPanel(value) {
			this.listOfNzCollapsePanelComponent.push(value);
		}
		removePanel(value) {
			this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
		}
		click(collapse) {
			const active = collapse.active();
			if (this.nzAccordion && !active) this.listOfNzCollapsePanelComponent.filter((item) => item !== collapse && item.active()).forEach((item) => item.activate(false));
			collapse.activate(!active);
		}
	}, (() => {
		const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
		_nzAccordion_decorators = [WithConfig()];
		_nzBordered_decorators = [WithConfig()];
		_nzGhost_decorators = [WithConfig()];
		__esDecorate(null, null, _nzAccordion_decorators, {
			kind: "field",
			name: "nzAccordion",
			static: false,
			private: false,
			access: {
				has: (obj) => "nzAccordion" in obj,
				get: (obj) => obj.nzAccordion,
				set: (obj, value) => {
					obj.nzAccordion = value;
				}
			},
			metadata: _metadata
		}, _nzAccordion_initializers, _nzAccordion_extraInitializers);
		__esDecorate(null, null, _nzBordered_decorators, {
			kind: "field",
			name: "nzBordered",
			static: false,
			private: false,
			access: {
				has: (obj) => "nzBordered" in obj,
				get: (obj) => obj.nzBordered,
				set: (obj, value) => {
					obj.nzBordered = value;
				}
			},
			metadata: _metadata
		}, _nzBordered_initializers, _nzBordered_extraInitializers);
		__esDecorate(null, null, _nzGhost_decorators, {
			kind: "field",
			name: "nzGhost",
			static: false,
			private: false,
			access: {
				has: (obj) => "nzGhost" in obj,
				get: (obj) => obj.nzGhost,
				set: (obj, value) => {
					obj.nzGhost = value;
				}
			},
			metadata: _metadata
		}, _nzGhost_initializers, _nzGhost_extraInitializers);
		if (_metadata) Object.defineProperty(_NzCollapseComponent, Symbol.metadata, {
			enumerable: true,
			configurable: true,
			writable: true,
			value: _metadata
		});
	})(), _defineProperty(_NzCollapseComponent, "ɵfac", function NzCollapseComponent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || _NzCollapseComponent)();
	}), _defineProperty(_NzCollapseComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
		type: _NzCollapseComponent,
		selectors: [["nz-collapse"]],
		hostAttrs: [1, "ant-collapse"],
		hostVars: 14,
		hostBindings: function NzCollapseComponent_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassProp("ant-collapse-icon-placement-start", ctx.nzExpandIconPosition === "start")("ant-collapse-icon-placement-end", ctx.nzExpandIconPosition === "end")("ant-collapse-ghost", ctx.nzGhost)("ant-collapse-borderless", !ctx.nzBordered)("ant-collapse-rtl", ctx.dir() === "rtl")("ant-collapse-small", ctx.nzSize === "small")("ant-collapse-large", ctx.nzSize === "large");
		},
		inputs: {
			nzAccordion: [
				2,
				"nzAccordion",
				"nzAccordion",
				booleanAttribute
			],
			nzBordered: [
				2,
				"nzBordered",
				"nzBordered",
				booleanAttribute
			],
			nzGhost: [
				2,
				"nzGhost",
				"nzGhost",
				booleanAttribute
			],
			nzExpandIconPosition: "nzExpandIconPosition",
			nzSize: "nzSize"
		},
		exportAs: ["nzCollapse"],
		ngContentSelectors: _c0,
		decls: 1,
		vars: 0,
		template: function NzCollapseComponent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		encapsulation: 2
	})), _NzCollapseComponent;
})();
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapseComponent, [{
		type: Component,
		args: [{
			selector: "nz-collapse",
			exportAs: "nzCollapse",
			encapsulation: ViewEncapsulation.None,
			template: `<ng-content />`,
			host: {
				class: "ant-collapse",
				"[class.ant-collapse-icon-placement-start]": `nzExpandIconPosition === 'start'`,
				"[class.ant-collapse-icon-placement-end]": `nzExpandIconPosition === 'end'`,
				"[class.ant-collapse-ghost]": `nzGhost`,
				"[class.ant-collapse-borderless]": "!nzBordered",
				"[class.ant-collapse-rtl]": `dir() === 'rtl'`,
				"[class.ant-collapse-small]": `nzSize === 'small'`,
				"[class.ant-collapse-large]": `nzSize === 'large'`
			}
		}]
	}], () => [], {
		nzAccordion: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzBordered: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzGhost: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzExpandIconPosition: [{ type: Input }],
		nzSize: [{ type: Input }]
	});
})();
var NZ_CONFIG_MODULE_NAME = "collapsePanel";
var NzCollapsePanelComponent = (() => {
	var _NzCollapsePanelComponent;
	let _nzShowArrow_decorators;
	let _nzShowArrow_initializers = [];
	let _nzShowArrow_extraInitializers = [];
	return _NzCollapsePanelComponent = class NzCollapsePanelComponent {
		get disabled() {
			return this.nzCollapsible === "disabled";
		}
		constructor() {
			_defineProperty(this, "ngZone", inject(NgZone));
			_defineProperty(this, "cdr", inject(ChangeDetectorRef));
			_defineProperty(this, "destroyRef", inject(DestroyRef));
			_defineProperty(this, "nzCollapseComponent", inject(NzCollapseComponent, { host: true }));
			_defineProperty(this, "_nzModuleName", NZ_CONFIG_MODULE_NAME);
			_defineProperty(this, "nzActive", input(false, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "nzActive" } : 			/* istanbul ignore next */ {}), {}, { transform: booleanAttribute })));
			_defineProperty(this, "nzShowArrow", __runInitializers(this, _nzShowArrow_initializers, true));
			_defineProperty(this, "nzExtra", __runInitializers(this, _nzShowArrow_extraInitializers));
			_defineProperty(this, "nzHeader", void 0);
			_defineProperty(this, "nzExpandedIcon", void 0);
			_defineProperty(this, "nzCollapsible", void 0);
			_defineProperty(this, "nzActiveChange", output());
			_defineProperty(
				this,
				/**
				* @description Actual active state of the panel.
				*/
				"active",
				linkedSignal(() => this.nzActive(), ...ngDevMode ? [{ debugName: "active" }] : 				/* istanbul ignore next */ [])
			);
			_defineProperty(this, "collapseHeader", viewChild.required("collapseHeader", _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "collapseHeader" } : 			/* istanbul ignore next */ {}), {}, { read: ElementRef })));
			_defineProperty(this, "collapseIcon", viewChild("collapseIcon", _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "collapseIcon" } : 			/* istanbul ignore next */ {}), {}, { read: ElementRef })));
			onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME, () => this.cdr.markForCheck());
			this.nzCollapseComponent.addPanel(this);
			this.destroyRef.onDestroy(() => {
				this.nzCollapseComponent.removePanel(this);
			});
		}
		ngAfterViewInit() {
			const icon = this.collapseIcon();
			const header = this.collapseHeader();
			fromEventOutsideAngular(this.nzShowArrow && this.nzCollapsible === "icon" && icon ? icon.nativeElement : header.nativeElement, "click").pipe(filter(() => !this.disabled), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
				this.ngZone.run(() => {
					this.nzCollapseComponent.click(this);
				});
			});
		}
		activate(active) {
			this.active.set(active);
			this.nzActiveChange.emit(active);
		}
	}, (() => {
		const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
		_nzShowArrow_decorators = [WithConfig()];
		__esDecorate(null, null, _nzShowArrow_decorators, {
			kind: "field",
			name: "nzShowArrow",
			static: false,
			private: false,
			access: {
				has: (obj) => "nzShowArrow" in obj,
				get: (obj) => obj.nzShowArrow,
				set: (obj, value) => {
					obj.nzShowArrow = value;
				}
			},
			metadata: _metadata
		}, _nzShowArrow_initializers, _nzShowArrow_extraInitializers);
		if (_metadata) Object.defineProperty(_NzCollapsePanelComponent, Symbol.metadata, {
			enumerable: true,
			configurable: true,
			writable: true,
			value: _metadata
		});
	})(), _defineProperty(_NzCollapsePanelComponent, "ɵfac", function NzCollapsePanelComponent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || _NzCollapsePanelComponent)();
	}), _defineProperty(_NzCollapsePanelComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
		type: _NzCollapsePanelComponent,
		selectors: [["nz-collapse-panel"]],
		viewQuery: function NzCollapsePanelComponent_Query(rf, ctx) {
			if (rf & 1) ɵɵviewQuerySignal(ctx.collapseHeader, _c1, 5, ElementRef)(ctx.collapseIcon, _c2, 5, ElementRef);
			if (rf & 2) ɵɵqueryAdvance(2);
		},
		hostAttrs: [1, "ant-collapse-item"],
		hostVars: 6,
		hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassProp("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.active())("ant-collapse-item-disabled", ctx.disabled);
		},
		inputs: {
			nzActive: [1, "nzActive"],
			nzShowArrow: [
				2,
				"nzShowArrow",
				"nzShowArrow",
				booleanAttribute
			],
			nzExtra: "nzExtra",
			nzHeader: "nzHeader",
			nzExpandedIcon: "nzExpandedIcon",
			nzCollapsible: "nzCollapsible"
		},
		outputs: { nzActiveChange: "nzActiveChange" },
		exportAs: ["nzCollapsePanel"],
		ngContentSelectors: _c0,
		decls: 9,
		vars: 13,
		consts: [
			["collapseHeader", ""],
			["collapseIcon", ""],
			[
				"role",
				"button",
				1,
				"ant-collapse-header"
			],
			[
				"role",
				"button",
				1,
				"ant-collapse-expand-icon"
			],
			[1, "ant-collapse-title"],
			[4, "nzStringTemplateOutlet"],
			[1, "ant-collapse-extra"],
			[
				"animation-collapse",
				"",
				"leavedClassName",
				"ant-collapse-panel-hidden",
				1,
				"ant-collapse-panel",
				3,
				"open"
			],
			[1, "ant-collapse-body"],
			[
				1,
				"ant-collapse-arrow",
				3,
				"nzType",
				"nzRotate"
			]
		],
		template: function NzCollapsePanelComponent_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵelementStart(0, "div", 2, 0);
				ɵɵconditionalCreate(2, NzCollapsePanelComponent_Conditional_2_Template, 3, 1, "div", 3);
				ɵɵelementStart(3, "span", 4);
				ɵɵtemplate(4, NzCollapsePanelComponent_ng_container_4_Template, 2, 1, "ng-container", 5);
				ɵɵelementEnd();
				ɵɵconditionalCreate(5, NzCollapsePanelComponent_Conditional_5_Template, 2, 1, "div", 6);
				ɵɵelementEnd();
				ɵɵelementStart(6, "div", 7)(7, "div", 8);
				ɵɵprojection(8);
				ɵɵelementEnd()();
			}
			if (rf & 2) {
				ɵɵclassProp("ant-collapse-collapsible-icon", ctx.nzCollapsible === "icon")("ant-collapse-collapsible-header", ctx.nzCollapsible === "header");
				ɵɵattribute("aria-expanded", ctx.active())("aria-disabled", ctx.disabled)("tabindex", ctx.disabled ? -1 : 0);
				ɵɵadvance(2);
				ɵɵconditional(ctx.nzShowArrow ? 2 : -1);
				ɵɵadvance(2);
				ɵɵproperty("nzStringTemplateOutlet", ctx.nzHeader);
				ɵɵadvance();
				ɵɵconditional(ctx.nzExtra ? 5 : -1);
				ɵɵadvance();
				ɵɵclassProp("ant-collapse-panel-active", ctx.active());
				ɵɵproperty("open", ctx.active());
			}
		},
		dependencies: [
			NzOutletModule,
			NzStringTemplateOutletDirective,
			NzIconModule,
			NzIconDirective,
			NzAnimationCollapseDirective
		],
		encapsulation: 2
	})), _NzCollapsePanelComponent;
})();
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapsePanelComponent, [{
		type: Component,
		args: [{
			selector: "nz-collapse-panel",
			exportAs: "nzCollapsePanel",
			encapsulation: ViewEncapsulation.None,
			template: `
    <div
      #collapseHeader
      role="button"
      [attr.aria-expanded]="active()"
      [attr.aria-disabled]="disabled"
      [attr.tabindex]="disabled ? -1 : 0"
      class="ant-collapse-header"
      [class.ant-collapse-collapsible-icon]="nzCollapsible === 'icon'"
      [class.ant-collapse-collapsible-header]="nzCollapsible === 'header'"
    >
      @if (nzShowArrow) {
        <div role="button" #collapseIcon class="ant-collapse-expand-icon">
          <ng-container *nzStringTemplateOutlet="nzExpandedIcon; let expandedIcon">
            <nz-icon [nzType]="expandedIcon || 'right'" class="ant-collapse-arrow" [nzRotate]="active() ? 90 : 0" />
          </ng-container>
        </div>
      }
      <span class="ant-collapse-title">
        <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
      </span>
      @if (nzExtra) {
        <div class="ant-collapse-extra">
          <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
        </div>
      }
    </div>
    <div
      class="ant-collapse-panel"
      [class.ant-collapse-panel-active]="active()"
      animation-collapse
      [open]="active()"
      leavedClassName="ant-collapse-panel-hidden"
    >
      <div class="ant-collapse-body">
        <ng-content />
      </div>
    </div>
  `,
			host: {
				class: "ant-collapse-item",
				"[class.ant-collapse-no-arrow]": "!nzShowArrow",
				"[class.ant-collapse-item-active]": "active()",
				"[class.ant-collapse-item-disabled]": `disabled`
			},
			imports: [
				NzOutletModule,
				NzIconModule,
				NzAnimationCollapseDirective
			]
		}]
	}], () => [], {
		nzActive: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzActive",
				required: false
			}]
		}],
		nzShowArrow: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzExtra: [{ type: Input }],
		nzHeader: [{ type: Input }],
		nzExpandedIcon: [{ type: Input }],
		nzCollapsible: [{ type: Input }],
		nzActiveChange: [{
			type: Output,
			args: ["nzActiveChange"]
		}],
		collapseHeader: [{
			type: ViewChild,
			args: ["collapseHeader", _objectSpread2(_objectSpread2({}, { read: ElementRef }), {}, { isSignal: true })]
		}],
		collapseIcon: [{
			type: ViewChild,
			args: ["collapseIcon", _objectSpread2(_objectSpread2({}, { read: ElementRef }), {}, { isSignal: true })]
		}]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzCollapseModule = class {};
_NzCollapseModule = NzCollapseModule;
_defineProperty(NzCollapseModule, "ɵfac", function NzCollapseModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzCollapseModule)();
});
_defineProperty(NzCollapseModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NzCollapseModule,
	imports: [NzCollapsePanelComponent, NzCollapseComponent],
	exports: [NzCollapsePanelComponent, NzCollapseComponent]
}));
_defineProperty(NzCollapseModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({ imports: [NzCollapsePanelComponent] }));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapseModule, [{
		type: NgModule,
		args: [{
			imports: [NzCollapsePanelComponent, NzCollapseComponent],
			exports: [NzCollapsePanelComponent, NzCollapseComponent]
		}]
	}], null, null);
})();
//#endregion
export { NzCollapseComponent, NzCollapseModule, NzCollapsePanelComponent };
