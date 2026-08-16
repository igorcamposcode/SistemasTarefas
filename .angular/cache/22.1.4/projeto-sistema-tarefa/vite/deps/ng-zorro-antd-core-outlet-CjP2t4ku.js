import { n as _defineProperty } from "./objectSpread2-C_IE-bIJ.js";
import { Er as ViewContainerRef, In as Input, Ol as ɵɵdefineInjector, Ui as setClassMetadata, ca as ɵɵNgOnChangesFeature, cl as inject, no as ɵɵdefineNgModule, qn as NgModule, to as ɵɵdefineDirective, vr as TemplateRef, wn as Directive } from "./core-CXNTKvTk.js";
import { f as isTemplateRef } from "./ng-zorro-antd-core-util-DcoCxePB.js";
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-outlet.mjs
var _NzStringTemplateOutletDirective;
var _NzOutletModule;
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzStringTemplateOutletDirective = class {
	constructor() {
		_defineProperty(this, "viewContainer", inject(ViewContainerRef));
		_defineProperty(this, "templateRef", inject(TemplateRef));
		_defineProperty(this, "embeddedViewRef", null);
		_defineProperty(this, "context", new NzStringTemplateOutletContext());
		_defineProperty(this, "nzStringTemplateOutletContext", null);
		_defineProperty(this, "nzStringTemplateOutlet", null);
	}
	static ngTemplateContextGuard(_dir, _ctx) {
		return true;
	}
	recreateView() {
		this.viewContainer.clear();
		if (isTemplateRef(this.nzStringTemplateOutlet)) this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.nzStringTemplateOutlet, this.nzStringTemplateOutletContext);
		else this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.templateRef, this.context);
	}
	updateContext() {
		const newCtx = isTemplateRef(this.nzStringTemplateOutlet) ? this.nzStringTemplateOutletContext : this.context;
		const oldCtx = this.embeddedViewRef.context;
		if (newCtx) for (const propName of Object.keys(newCtx)) oldCtx[propName] = newCtx[propName];
	}
	ngOnChanges(changes) {
		const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
		const shouldRecreateView = () => {
			let shouldOutletRecreate = false;
			if (nzStringTemplateOutlet) shouldOutletRecreate = nzStringTemplateOutlet.firstChange || isTemplateRef(nzStringTemplateOutlet.previousValue) || isTemplateRef(nzStringTemplateOutlet.currentValue);
			const hasContextShapeChanged = (ctxChange) => {
				const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
				const currCtxKeys = Object.keys(ctxChange.currentValue || {});
				if (prevCtxKeys.length === currCtxKeys.length) {
					for (const propName of currCtxKeys) if (prevCtxKeys.indexOf(propName) === -1) return true;
					return false;
				} else return true;
			};
			return nzStringTemplateOutletContext && hasContextShapeChanged(nzStringTemplateOutletContext) || shouldOutletRecreate;
		};
		if (nzStringTemplateOutlet) this.context.$implicit = nzStringTemplateOutlet.currentValue;
		if (shouldRecreateView())
 /** recreate view when context shape or outlet change **/
		this.recreateView();
		else
 /** update context **/
		this.updateContext();
	}
};
_NzStringTemplateOutletDirective = NzStringTemplateOutletDirective;
_defineProperty(NzStringTemplateOutletDirective, "ɵfac", function NzStringTemplateOutletDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzStringTemplateOutletDirective)();
});
_defineProperty(NzStringTemplateOutletDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzStringTemplateOutletDirective,
	selectors: [[
		"",
		"nzStringTemplateOutlet",
		""
	]],
	inputs: {
		nzStringTemplateOutletContext: "nzStringTemplateOutletContext",
		nzStringTemplateOutlet: "nzStringTemplateOutlet"
	},
	exportAs: ["nzStringTemplateOutlet"],
	features: [ɵɵNgOnChangesFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStringTemplateOutletDirective, [{
		type: Directive,
		args: [{
			selector: "[nzStringTemplateOutlet]",
			exportAs: "nzStringTemplateOutlet"
		}]
	}], null, {
		nzStringTemplateOutletContext: [{ type: Input }],
		nzStringTemplateOutlet: [{ type: Input }]
	});
})();
var NzStringTemplateOutletContext = class {
	constructor() {
		_defineProperty(this, "$implicit", void 0);
	}
};
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzOutletModule = class {};
_NzOutletModule = NzOutletModule;
_defineProperty(NzOutletModule, "ɵfac", function NzOutletModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzOutletModule)();
});
_defineProperty(NzOutletModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NzOutletModule,
	imports: [NzStringTemplateOutletDirective],
	exports: [NzStringTemplateOutletDirective]
}));
_defineProperty(NzOutletModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOutletModule, [{
		type: NgModule,
		args: [{
			imports: [NzStringTemplateOutletDirective],
			exports: [NzStringTemplateOutletDirective]
		}]
	}], null, null);
})();
//#endregion
export { NzStringTemplateOutletDirective as n, NzOutletModule as t };
