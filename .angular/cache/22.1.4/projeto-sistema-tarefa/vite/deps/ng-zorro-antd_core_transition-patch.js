import { n as _defineProperty } from "./objectSpread2-C_IE-bIJ.js";
import { En as ElementRef, In as Input, Ol as ɵɵdefineInjector, Ui as setClassMetadata, ca as ɵɵNgOnChangesFeature, cl as inject, ir as Renderer2, no as ɵɵdefineNgModule, qn as NgModule, to as ɵɵdefineDirective, wn as Directive } from "./core-CXNTKvTk.js";
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-transition-patch.mjs
var _NzTransitionPatchDirective;
var _NzTransitionPatchModule;
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
/**
* hack the bug
* angular router change with unexpected transition trigger after calling applicationRef.attachView
* https://github.com/angular/angular/issues/34718
*/
var NzTransitionPatchDirective = class {
	setHiddenAttribute() {
		if (this.hidden) if (typeof this.hidden === "string") this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", this.hidden);
		else this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", "");
		else this.renderer.removeAttribute(this.elementRef.nativeElement, "hidden");
	}
	constructor() {
		_defineProperty(this, "elementRef", inject(ElementRef));
		_defineProperty(this, "renderer", inject(Renderer2));
		_defineProperty(this, "hidden", null);
		this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", "");
	}
	ngOnChanges() {
		this.setHiddenAttribute();
	}
	ngAfterViewInit() {
		this.setHiddenAttribute();
	}
};
_NzTransitionPatchDirective = NzTransitionPatchDirective;
_defineProperty(NzTransitionPatchDirective, "ɵfac", function NzTransitionPatchDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzTransitionPatchDirective)();
});
_defineProperty(NzTransitionPatchDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzTransitionPatchDirective,
	selectors: [
		[
			"",
			"nz-button",
			""
		],
		[
			"",
			"nz-icon",
			""
		],
		["nz-icon"],
		[
			"",
			"nz-menu-item",
			""
		],
		[
			"",
			"nz-submenu",
			""
		],
		["nz-select-top-control"],
		["nz-select-placeholder"],
		["nz-input-group"]
	],
	inputs: { hidden: "hidden" },
	features: [ɵɵNgOnChangesFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransitionPatchDirective, [{
		type: Directive,
		args: [{ selector: "[nz-button], [nz-icon], nz-icon, [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group" }]
	}], () => [], { hidden: [{ type: Input }] });
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzTransitionPatchModule = class {};
_NzTransitionPatchModule = NzTransitionPatchModule;
_defineProperty(NzTransitionPatchModule, "ɵfac", function NzTransitionPatchModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzTransitionPatchModule)();
});
_defineProperty(NzTransitionPatchModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NzTransitionPatchModule,
	imports: [NzTransitionPatchDirective],
	exports: [NzTransitionPatchDirective]
}));
_defineProperty(NzTransitionPatchModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransitionPatchModule, [{
		type: NgModule,
		args: [{
			imports: [NzTransitionPatchDirective],
			exports: [NzTransitionPatchDirective]
		}]
	}], null, null);
})();
//#endregion
export { NzTransitionPatchDirective as ɵNzTransitionPatchDirective, NzTransitionPatchModule as ɵNzTransitionPatchModule };
