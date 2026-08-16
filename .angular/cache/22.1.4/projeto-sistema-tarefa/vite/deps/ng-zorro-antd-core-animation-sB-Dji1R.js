import { n as _defineProperty, t as _objectSpread2 } from "./objectSpread2-C_IE-bIJ.js";
import { Bt as computed, Dl as ɵɵdefineInjectable, En as ElementRef, Fn as Injectable, In as Input, Jo as ɵɵlistener, O as booleanAttribute, Ol as ɵɵdefineInjector, Qc as assertInInjectionContext, Sl as signal, Ui as setClassMetadata, X as input, ba as ɵɵclassProp, cl as inject, fa as ɵɵanimateEnterListener, ma as ɵɵanimateLeaveListener, nl as effect, no as ɵɵdefineNgModule, qn as NgModule, to as ɵɵdefineDirective, uc as ANIMATION_MODULE_TYPE, wn as Directive } from "./core-CXNTKvTk.js";
import { Ct as take, Qn as Subject, Tt as debounceTime } from "./esm5-BupzNxh_.js";
//#region node_modules/@angular/cdk/fesm2022/_css-pixel-value-chunk.mjs
function coerceCssPixelValue(value) {
	if (value == null) return "";
	return typeof value === "string" ? value : `${value}px`;
}
//#endregion
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-polyfill.mjs
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var requestAnimationFrame = typeof globalThis.requestAnimationFrame === "function" ? globalThis.requestAnimationFrame : globalThis.setTimeout;
var cancelAnimationFrame = typeof globalThis.requestAnimationFrame === "function" ? globalThis.cancelAnimationFrame : globalThis.clearTimeout;
//#endregion
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-animation.mjs
var _NzNoAnimationDirective;
var _NzNoAnimationModule;
var _NzAnimationCollapseDirective;
var _NzAnimationTreeCollapseService;
var _NzAnimationTreeCollapseDirective;
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var AnimationDuration = class {};
_defineProperty(AnimationDuration, "SLOW", "0.3s");
_defineProperty(AnimationDuration, "BASE", "0.2s");
_defineProperty(AnimationDuration, "FAST", "0.1s");
var AnimationCurves = class {};
_defineProperty(AnimationCurves, "EASE_BASE_OUT", "cubic-bezier(0.7, 0.3, 0.1, 1)");
_defineProperty(AnimationCurves, "EASE_BASE_IN", "cubic-bezier(0.9, 0, 0.3, 0.7)");
_defineProperty(AnimationCurves, "EASE_OUT", "cubic-bezier(0.215, 0.61, 0.355, 1)");
_defineProperty(AnimationCurves, "EASE_IN", "cubic-bezier(0.55, 0.055, 0.675, 0.19)");
_defineProperty(AnimationCurves, "EASE_IN_OUT", "cubic-bezier(0.645, 0.045, 0.355, 1)");
_defineProperty(AnimationCurves, "EASE_OUT_BACK", "cubic-bezier(0.12, 0.4, 0.29, 1.46)");
_defineProperty(AnimationCurves, "EASE_IN_BACK", "cubic-bezier(0.71, -0.46, 0.88, 0.6)");
_defineProperty(AnimationCurves, "EASE_IN_OUT_BACK", "cubic-bezier(0.71, -0.46, 0.29, 1.46)");
_defineProperty(AnimationCurves, "EASE_OUT_CIRC", "cubic-bezier(0.08, 0.82, 0.17, 1)");
_defineProperty(AnimationCurves, "EASE_IN_CIRC", "cubic-bezier(0.6, 0.04, 0.98, 0.34)");
_defineProperty(AnimationCurves, "EASE_IN_OUT_CIRC", "cubic-bezier(0.78, 0.14, 0.15, 0.86)");
_defineProperty(AnimationCurves, "EASE_OUT_QUINT", "cubic-bezier(0.23, 1, 0.32, 1)");
_defineProperty(AnimationCurves, "EASE_IN_QUINT", "cubic-bezier(0.755, 0.05, 0.855, 0.06)");
_defineProperty(AnimationCurves, "EASE_IN_OUT_QUINT", "cubic-bezier(0.86, 0, 0.07, 1)");
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NZ_NO_ANIMATION_CLASS = "nz-animate-disabled";
var NzNoAnimationDirective = class {
	constructor() {
		_defineProperty(this, "animationType", inject(ANIMATION_MODULE_TYPE, { optional: true }));
		_defineProperty(this, "nzNoAnimation", input(false, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "nzNoAnimation" } : 		/* istanbul ignore next */ {}), {}, { transform: booleanAttribute })));
	}
};
_NzNoAnimationDirective = NzNoAnimationDirective;
_defineProperty(NzNoAnimationDirective, "ɵfac", function NzNoAnimationDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzNoAnimationDirective)();
});
_defineProperty(NzNoAnimationDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzNoAnimationDirective,
	selectors: [[
		"",
		"nzNoAnimation",
		""
	]],
	hostVars: 2,
	hostBindings: function NzNoAnimationDirective_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵclassProp("nz-animate-disabled", ctx.nzNoAnimation() || ctx.animationType === "NoopAnimations");
	},
	inputs: { nzNoAnimation: [1, "nzNoAnimation"] },
	exportAs: ["nzNoAnimation"]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNoAnimationDirective, [{
		type: Directive,
		args: [{
			selector: "[nzNoAnimation]",
			exportAs: "nzNoAnimation",
			host: { [`[class.nz-animate-disabled]`]: `nzNoAnimation() || animationType === 'NoopAnimations'` }
		}]
	}], null, { nzNoAnimation: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "nzNoAnimation",
			required: false
		}]
	}] });
})();
/**
* @deprecated Will be removed in v23, please use {@link NzNoAnimationDirective} instead.
*/
var NzNoAnimationModule = class {};
_NzNoAnimationModule = NzNoAnimationModule;
_defineProperty(NzNoAnimationModule, "ɵfac", function NzNoAnimationModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzNoAnimationModule)();
});
_defineProperty(NzNoAnimationModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NzNoAnimationModule,
	imports: [NzNoAnimationDirective],
	exports: [NzNoAnimationDirective]
}));
_defineProperty(NzNoAnimationModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNoAnimationModule, [{
		type: NgModule,
		args: [{
			imports: [NzNoAnimationDirective],
			exports: [NzNoAnimationDirective]
		}]
	}], null, null);
})();
function _internalAnimationEnabled() {
	return inject(ANIMATION_MODULE_TYPE, { optional: true }) !== "NoopAnimations";
}
/**
* If the current animation mode is `NoopAnimations`, returns the false as a signal.
* Otherwise, returns the result of the provided getter as a computed signal.
* @param getter A function that returns the outer logic for whether animations are enabled.
*/
function isAnimationEnabled(getter) {
	if (typeof ngDevMode !== "undefined" && ngDevMode) assertInInjectionContext(isAnimationEnabled);
	return _internalAnimationEnabled() ? computed(getter) : signal(false);
}
/**
* If the current animation mode is `NoopAnimations`, returns the no-animation class as a signal.
* Otherwise, returns the result of the provided class name getter as a computed signal.
* @param classNameGetter A function that returns the class name string.
*/
function withAnimationCheck(classNameGetter) {
	if (typeof ngDevMode !== "undefined" && ngDevMode) assertInInjectionContext(withAnimationCheck);
	return _internalAnimationEnabled() ? computed(classNameGetter) : signal(NZ_NO_ANIMATION_CLASS);
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var COLLAPSE_MOTION_CLASS = "ant-motion-collapse";
var NzAnimationCollapseDirective = class {
	constructor() {
		_defineProperty(this, "elementRef", inject(ElementRef));
		_defineProperty(this, "noAnimation", inject(NzNoAnimationDirective, {
			optional: true,
			host: true
		}));
		_defineProperty(this, "animationEnabled", isAnimationEnabled(() => {
			var _this$noAnimation;
			return !((_this$noAnimation = this.noAnimation) === null || _this$noAnimation === void 0 ? void 0 : _this$noAnimation.nzNoAnimation());
		}));
		_defineProperty(this, "open", input(false, ...ngDevMode ? [{ debugName: "open" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "leavedClassName", input("", ...ngDevMode ? [{ debugName: "leavedClassName" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "firstRender", true);
		effect(() => {
			const open = this.open();
			const animationEnabled = this.animationEnabled() && !this.firstRender;
			const element = this.elementRef.nativeElement;
			const leavedClassName = this.leavedClassName();
			if (open && leavedClassName) element.classList.remove(leavedClassName);
			if (animationEnabled) {
				/**
				* | open  | animation stage | height | opacity |
				* | ----  | --------------- | ------ | ------- |
				* | true  | before          | 0            | 1 |
				* | true  | active          | scrollHeight | 1 |
				* | true  | end             | auto         | 1 |
				* | false | before          | scrollHeight | 0 |
				* | false | active          | 0            | 0 |
				* | false | end             | 0            | 0 |
				*/
				element.classList.add(COLLAPSE_MOTION_CLASS);
				if (open) requestAnimationFrame(() => {
					const scrollHeight = this.getActualScrollHeight(element);
					element.style.height = coerceCssPixelValue(scrollHeight);
					element.style.opacity = "1";
				});
				else {
					const scrollHeight = this.getActualScrollHeight(element);
					element.style.height = coerceCssPixelValue(scrollHeight);
					requestAnimationFrame(() => {
						element.style.height = coerceCssPixelValue(0);
						element.style.opacity = "0";
					});
				}
			} else if (open) {
				element.style.height = "auto";
				element.style.opacity = "1";
			} else {
				element.style.height = coerceCssPixelValue(0);
				element.style.opacity = "0";
				if (leavedClassName) element.classList.add(leavedClassName);
			}
			this.firstRender = false;
		});
	}
	getActualScrollHeight(element) {
		return Array.from(element.children).reduce((acc, child) => acc + child.offsetHeight, 0);
	}
	onTransitionEnd(event) {
		if (!this.animationEnabled() || event.target !== this.elementRef.nativeElement) return;
		if (this.open()) this.elementRef.nativeElement.style.height = "auto";
		else if (this.leavedClassName()) this.elementRef.nativeElement.classList.add(this.leavedClassName());
		this.elementRef.nativeElement.classList.remove(COLLAPSE_MOTION_CLASS);
	}
};
_NzAnimationCollapseDirective = NzAnimationCollapseDirective;
_defineProperty(NzAnimationCollapseDirective, "ɵfac", function NzAnimationCollapseDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzAnimationCollapseDirective)();
});
_defineProperty(NzAnimationCollapseDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzAnimationCollapseDirective,
	selectors: [[
		"",
		"animation-collapse",
		""
	]],
	hostBindings: function NzAnimationCollapseDirective_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("transitionend", function NzAnimationCollapseDirective_transitionend_HostBindingHandler($event) {
			return ctx.onTransitionEnd($event);
		});
	},
	inputs: {
		open: [1, "open"],
		leavedClassName: [1, "leavedClassName"]
	}
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAnimationCollapseDirective, [{
		type: Directive,
		args: [{
			selector: "[animation-collapse]",
			host: { "(transitionend)": "onTransitionEnd($event)" }
		}]
	}], () => [], {
		open: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "open",
				required: false
			}]
		}],
		leavedClassName: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "leavedClassName",
				required: false
			}]
		}]
	});
})();
var NzAnimationTreeCollapseService = class {
	constructor() {
		_defineProperty(this, "firstRender", true);
		_defineProperty(this, "virtualScroll", false);
		_defineProperty(this, "animationDone$", new Subject());
		this.animationDone$.pipe(debounceTime(50), take(1)).subscribe(() => {
			this.firstRender = false;
		});
	}
};
_NzAnimationTreeCollapseService = NzAnimationTreeCollapseService;
_defineProperty(NzAnimationTreeCollapseService, "ɵfac", function NzAnimationTreeCollapseService_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzAnimationTreeCollapseService)();
});
_defineProperty(NzAnimationTreeCollapseService, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NzAnimationTreeCollapseService,
	factory: _NzAnimationTreeCollapseService.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAnimationTreeCollapseService, [{ type: Injectable }], () => [], null);
})();
var NzAnimationTreeCollapseDirective = class {
	constructor() {
		_defineProperty(this, "treeCollapseService", inject(NzAnimationTreeCollapseService, { optional: true }));
		_defineProperty(this, "noAnimation", inject(NzNoAnimationDirective, {
			optional: true,
			host: true
		}));
		_defineProperty(this, "animationEnabled", isAnimationEnabled(() => {
			var _this$noAnimation2, _this$treeCollapseSer, _this$treeCollapseSer2;
			return !((_this$noAnimation2 = this.noAnimation) === null || _this$noAnimation2 === void 0 ? void 0 : _this$noAnimation2.nzNoAnimation()) && !((_this$treeCollapseSer = (_this$treeCollapseSer2 = this.treeCollapseService) === null || _this$treeCollapseSer2 === void 0 ? void 0 : _this$treeCollapseSer2.virtualScroll) !== null && _this$treeCollapseSer !== void 0 ? _this$treeCollapseSer : false);
		}));
	}
	get firstRender() {
		var _this$treeCollapseSer3, _this$treeCollapseSer4;
		return (_this$treeCollapseSer3 = (_this$treeCollapseSer4 = this.treeCollapseService) === null || _this$treeCollapseSer4 === void 0 ? void 0 : _this$treeCollapseSer4.firstRender) !== null && _this$treeCollapseSer3 !== void 0 ? _this$treeCollapseSer3 : false;
	}
	onAnimationEnter(event) {
		if (!this.animationEnabled() || this.firstRender) {
			var _this$treeCollapseSer5;
			(_this$treeCollapseSer5 = this.treeCollapseService) === null || _this$treeCollapseSer5 === void 0 || _this$treeCollapseSer5.animationDone$.next();
			event.animationComplete();
			return;
		}
		const element = event.target;
		element.style.height = coerceCssPixelValue(0);
		element.style.opacity = "0";
		element.classList.add(COLLAPSE_MOTION_CLASS);
		const onTransitionEnd = (e) => {
			if (e.propertyName !== "height") return;
			element.removeEventListener("transitionend", onTransitionEnd);
			element.style.height = "auto";
			element.classList.remove(COLLAPSE_MOTION_CLASS);
			event.animationComplete();
		};
		requestAnimationFrame(() => {
			element.style.height = coerceCssPixelValue(element.scrollHeight);
			element.style.opacity = "1";
		});
		element.addEventListener("transitionend", onTransitionEnd);
	}
	onAnimationLeave(event) {
		if (!this.animationEnabled()) {
			event.animationComplete();
			return;
		}
		const element = event.target;
		element.style.height = coerceCssPixelValue(element.scrollHeight);
		element.style.opacity = "1";
		element.classList.add(COLLAPSE_MOTION_CLASS);
		const onTransitionEnd = (e) => {
			if (e.propertyName !== "height") return;
			element.removeEventListener("transitionend", onTransitionEnd);
			event.animationComplete();
		};
		requestAnimationFrame(() => {
			element.style.height = coerceCssPixelValue(0);
			element.style.opacity = "0";
			element.style.marginBottom = "0";
		});
		element.addEventListener("transitionend", onTransitionEnd);
	}
};
_NzAnimationTreeCollapseDirective = NzAnimationTreeCollapseDirective;
_defineProperty(NzAnimationTreeCollapseDirective, "ɵfac", function NzAnimationTreeCollapseDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzAnimationTreeCollapseDirective)();
});
_defineProperty(NzAnimationTreeCollapseDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzAnimationTreeCollapseDirective,
	selectors: [[
		"",
		"animation-tree-collapse",
		""
	]],
	hostBindings: function NzAnimationTreeCollapseDirective_HostBindings(rf, ctx) {
		if (rf & 1) {
			ɵɵanimateEnterListener(function NzAnimationTreeCollapseDirective_animateenter_HostBindingHandler($event) {
				return ctx.onAnimationEnter($event);
			});
			ɵɵanimateLeaveListener(function NzAnimationTreeCollapseDirective_animateleave_HostBindingHandler($event) {
				return ctx.onAnimationLeave($event);
			});
		}
	}
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAnimationTreeCollapseDirective, [{
		type: Directive,
		args: [{
			selector: "[animation-tree-collapse]",
			host: {
				"(animate.enter)": "onAnimationEnter($event)",
				"(animate.leave)": "onAnimationLeave($event)"
			}
		}]
	}], null, null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var SLIDE_UP_ANIMATION_CLASS = {
	enter: "ant-slide-up-enter ant-slide-up-enter-active",
	leave: "ant-slide-up-leave ant-slide-up-leave-active"
};
var SLIDE_DOWN_ANIMATION_CLASS = {
	enter: "ant-slide-down-enter ant-slide-down-enter-active",
	leave: "ant-slide-down-leave ant-slide-down-leave-active"
};
function slideAnimationEnter(directionFn = () => "up") {
	return withAnimationCheck(() => {
		if (directionFn() === "up") return SLIDE_UP_ANIMATION_CLASS.enter;
		else return SLIDE_DOWN_ANIMATION_CLASS.enter;
	});
}
function slideAnimationLeave(directionFn = () => "up") {
	return withAnimationCheck(() => {
		if (directionFn() === "up") return SLIDE_UP_ANIMATION_CLASS.leave;
		else return SLIDE_DOWN_ANIMATION_CLASS.leave;
	});
}
//#endregion
export { slideAnimationLeave as a, requestAnimationFrame as c, slideAnimationEnter as i, coerceCssPixelValue as l, NzNoAnimationDirective as n, withAnimationCheck as o, SLIDE_UP_ANIMATION_CLASS as r, cancelAnimationFrame as s, NzAnimationCollapseDirective as t };
