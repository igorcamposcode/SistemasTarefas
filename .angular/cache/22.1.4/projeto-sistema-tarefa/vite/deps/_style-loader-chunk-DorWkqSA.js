import { n as _defineProperty } from "./objectSpread2-C_IE-bIJ.js";
import { M as createComponent, Oc as Injector, Ui as setClassMetadata, cl as inject, dr as Service, io as ɵɵdefineService, tn as ApplicationRef, yc as EnvironmentInjector } from "./core-CXNTKvTk.js";
//#region node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
	return Array.isArray(value) ? value : [value];
}
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_shadow-dom-chunk.mjs
var shadowDomIsSupported;
function _supportsShadowDom() {
	if (shadowDomIsSupported == null) {
		const head = typeof document !== "undefined" ? document.head : null;
		shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
	}
	return shadowDomIsSupported;
}
function _getShadowRoot(element) {
	if (_supportsShadowDom()) {
		const rootNode = element.getRootNode ? element.getRootNode() : null;
		if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) return rootNode;
	}
	return null;
}
function _getFocusedElementPierceShadowDom() {
	let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
	while (activeElement && activeElement.shadowRoot) {
		const newActiveElement = activeElement.shadowRoot.activeElement;
		if (newActiveElement === activeElement) break;
		else activeElement = newActiveElement;
	}
	return activeElement;
}
function _getEventTarget(event) {
	if (event.composedPath) try {
		return event.composedPath()[0];
	} catch (_unused) {}
	return event.target;
}
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_style-loader-chunk.mjs
var _CdkPrivateStyleLoader2;
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class {
	constructor() {
		_defineProperty(this, "_appRef", void 0);
		_defineProperty(this, "_injector", inject(Injector));
		_defineProperty(this, "_environmentInjector", inject(EnvironmentInjector));
	}
	load(loader) {
		const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
		let data = appsWithLoaders.get(appRef);
		if (!data) {
			data = {
				loaders: /* @__PURE__ */ new Set(),
				refs: []
			};
			appsWithLoaders.set(appRef, data);
			appRef.onDestroy(() => {
				var _appsWithLoaders$get;
				(_appsWithLoaders$get = appsWithLoaders.get(appRef)) === null || _appsWithLoaders$get === void 0 || _appsWithLoaders$get.refs.forEach((ref) => ref.destroy());
				appsWithLoaders.delete(appRef);
			});
		}
		if (!data.loaders.has(loader)) {
			data.loaders.add(loader);
			data.refs.push(createComponent(loader, { environmentInjector: this._environmentInjector }));
		}
	}
};
_CdkPrivateStyleLoader2 = _CdkPrivateStyleLoader;
_defineProperty(_CdkPrivateStyleLoader, "ɵfac", function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _CdkPrivateStyleLoader2)();
});
_defineProperty(_CdkPrivateStyleLoader, "ɵprov", /* @__PURE__ */ ɵɵdefineService({
	token: _CdkPrivateStyleLoader2,
	factory: _CdkPrivateStyleLoader2.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkPrivateStyleLoader, [{ type: Service }], null, null);
})();
//#endregion
export { coerceArray as a, _getShadowRoot as i, _getEventTarget as n, _getFocusedElementPierceShadowDom as r, _CdkPrivateStyleLoader as t };
