import { n as _defineProperty } from "./objectSpread2-C_IE-bIJ.js";
import { $n as Output, Dr as ViewEncapsulation, En as ElementRef, Eo as ɵɵgetCurrentView, Il as ɵɵresetView, In as Input, Jo as ɵɵlistener, Ll as ɵɵrestoreView, O as booleanAttribute, Ol as ɵɵdefineInjector, Rs as ɵɵstyleProp, Sa as ɵɵconditional, Ui as setClassMetadata, Xo as ɵɵnextContext, ba as ɵɵclassProp, bo as ɵɵelementStart, ca as ɵɵNgOnChangesFeature, cl as inject, cn as Component, eo as ɵɵdefineComponent, ir as Renderer2, is as ɵɵprojectionDef, no as ɵɵdefineNgModule, qn as NgModule, rs as ɵɵprojection, ua as ɵɵadvance, wa as ɵɵconditionalCreate, xc as EventEmitter, yo as ɵɵelementEnd } from "./core-CXNTKvTk.js";
import { n as Directionality } from "./bidi-CMsMKfPk.js";
import { _ as presetColors, g as isStatusColor, h as isPresetColor, o as NzIconDirective, s as NzIconModule, v as statusColors } from "./ng-zorro-antd-icon-DGQmdhvo.js";
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tag.mjs
var _NzTagComponent;
var _NzTagModule;
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var _c0 = ["*"];
function NzTagComponent_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "nz-icon", 1);
		ɵɵlistener("click", function NzTagComponent_Conditional_1_Template_nz_icon_click_0_listener($event) {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().closeTag($event));
		});
		ɵɵelementEnd();
	}
}
var NzTagComponent = class {
	constructor() {
		_defineProperty(this, "renderer", inject(Renderer2));
		_defineProperty(this, "el", inject(ElementRef).nativeElement);
		_defineProperty(this, "dir", inject(Directionality).valueSignal);
		_defineProperty(this, "nzMode", "default");
		_defineProperty(this, "nzColor", void 0);
		_defineProperty(this, "nzChecked", false);
		_defineProperty(this, "nzBordered", true);
		_defineProperty(this, "nzOnClose", new EventEmitter());
		_defineProperty(this, "nzCheckedChange", new EventEmitter());
		_defineProperty(this, "isPresetColor", false);
	}
	updateCheckedStatus() {
		if (this.nzMode === "checkable") {
			this.nzChecked = !this.nzChecked;
			this.nzCheckedChange.emit(this.nzChecked);
		}
	}
	closeTag(e) {
		this.nzOnClose.emit(e);
		if (!e.defaultPrevented) this.renderer.removeChild(this.renderer.parentNode(this.el), this.el);
	}
	clearPresetColor() {
		const regexp = new RegExp(`(ant-tag-(?:${[...presetColors, ...statusColors].join("|")}))`, "g");
		const classname = this.el.classList.toString();
		const matches = [];
		let match = regexp.exec(classname);
		while (match !== null) {
			matches.push(match[1]);
			match = regexp.exec(classname);
		}
		this.el.classList.remove(...matches);
	}
	setPresetColor() {
		this.clearPresetColor();
		if (!this.nzColor) this.isPresetColor = false;
		else this.isPresetColor = isPresetColor(this.nzColor) || isStatusColor(this.nzColor);
		if (this.isPresetColor) this.el.classList.add(`ant-tag-${this.nzColor}`);
	}
	ngOnChanges(changes) {
		const { nzColor } = changes;
		if (nzColor) this.setPresetColor();
	}
};
_NzTagComponent = NzTagComponent;
_defineProperty(NzTagComponent, "ɵfac", function NzTagComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzTagComponent)();
});
_defineProperty(NzTagComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _NzTagComponent,
	selectors: [["nz-tag"]],
	hostAttrs: [1, "ant-tag"],
	hostVars: 12,
	hostBindings: function NzTagComponent_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("click", function NzTagComponent_click_HostBindingHandler() {
			return ctx.updateCheckedStatus();
		});
		if (rf & 2) {
			ɵɵstyleProp("background-color", ctx.isPresetColor ? "" : ctx.nzColor);
			ɵɵclassProp("ant-tag-has-color", ctx.nzColor && !ctx.isPresetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked)("ant-tag-rtl", ctx.dir() === "rtl")("ant-tag-borderless", !ctx.nzBordered);
		}
	},
	inputs: {
		nzMode: "nzMode",
		nzColor: "nzColor",
		nzChecked: [
			2,
			"nzChecked",
			"nzChecked",
			booleanAttribute
		],
		nzBordered: [
			2,
			"nzBordered",
			"nzBordered",
			booleanAttribute
		]
	},
	outputs: {
		nzOnClose: "nzOnClose",
		nzCheckedChange: "nzCheckedChange"
	},
	exportAs: ["nzTag"],
	features: [ɵɵNgOnChangesFeature],
	ngContentSelectors: _c0,
	decls: 2,
	vars: 1,
	consts: [[
		"nzType",
		"close",
		"tabindex",
		"-1",
		1,
		"ant-tag-close-icon"
	], [
		"nzType",
		"close",
		"tabindex",
		"-1",
		1,
		"ant-tag-close-icon",
		3,
		"click"
	]],
	template: function NzTagComponent_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵprojection(0);
			ɵɵconditionalCreate(1, NzTagComponent_Conditional_1_Template, 1, 0, "nz-icon", 0);
		}
		if (rf & 2) {
			ɵɵadvance();
			ɵɵconditional(ctx.nzMode === "closeable" ? 1 : -1);
		}
	},
	dependencies: [NzIconModule, NzIconDirective],
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTagComponent, [{
		type: Component,
		args: [{
			selector: "nz-tag",
			exportAs: "nzTag",
			template: `
    <ng-content />
    @if (nzMode === 'closeable') {
      <nz-icon nzType="close" class="ant-tag-close-icon" tabindex="-1" (click)="closeTag($event)" />
    }
  `,
			encapsulation: ViewEncapsulation.None,
			host: {
				class: "ant-tag",
				"[style.background-color]": `isPresetColor ? '' : nzColor`,
				"[class.ant-tag-has-color]": `nzColor && !isPresetColor`,
				"[class.ant-tag-checkable]": `nzMode === 'checkable'`,
				"[class.ant-tag-checkable-checked]": `nzChecked`,
				"[class.ant-tag-rtl]": `dir() === 'rtl'`,
				"[class.ant-tag-borderless]": `!nzBordered`,
				"(click)": "updateCheckedStatus()"
			},
			imports: [NzIconModule]
		}]
	}], null, {
		nzMode: [{ type: Input }],
		nzColor: [{ type: Input }],
		nzChecked: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzBordered: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzOnClose: [{ type: Output }],
		nzCheckedChange: [{ type: Output }]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzTagModule = class {};
_NzTagModule = NzTagModule;
_defineProperty(NzTagModule, "ɵfac", function NzTagModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzTagModule)();
});
_defineProperty(NzTagModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NzTagModule,
	imports: [NzTagComponent],
	exports: [NzTagComponent]
}));
_defineProperty(NzTagModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({ imports: [NzTagComponent] }));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTagModule, [{
		type: NgModule,
		args: [{
			imports: [NzTagComponent],
			exports: [NzTagComponent]
		}]
	}], null, null);
})();
//#endregion
export { NzTagComponent, NzTagModule };
