import { $ as isDevMode, En as ElementRef, rt as numberAttribute, vr as TemplateRef } from "./core-CXNTKvTk.js";
import { Dn as isObservable, In as EMPTY, jn as of, rr as Observable, sn as fromEvent } from "./esm5-BupzNxh_.js";
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-environments.mjs
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var environment = { isTestMode: false };
//#endregion
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-logger.mjs
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var record = {};
var PREFIX = "[NG-ZORRO]:";
function notRecorded(...args) {
	const asRecord = args.reduce((acc, c) => acc + c.toString(), "");
	if (record[asRecord]) return false;
	else {
		record[asRecord] = true;
		return true;
	}
}
function consoleCommonBehavior(consoleFunc, ...args) {
	if (environment.isTestMode || isDevMode() && notRecorded(...args)) consoleFunc(...args);
}
var warn = (...args) => consoleCommonBehavior((...arg) => console.warn(PREFIX, ...arg), ...args);
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
	if (_isNumberValue(value)) return Number(value);
	return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
	return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
	return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}
//#endregion
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-util.mjs
function arraysEqual(array1, array2) {
	if (!array1 || !array2 || array1.length !== array2.length) return false;
	const len = array1.length;
	for (let i = 0; i < len; i++) if (array1[i] !== array2[i]) return false;
	return true;
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
function isNotNil(value) {
	return typeof value !== "undefined" && value !== null;
}
function isNil(value) {
	return typeof value === "undefined" || value === null;
}
function isTemplateRef(value) {
	return value instanceof TemplateRef;
}
function numberAttributeWithZeroFallback(value) {
	return numberAttribute(value, 0);
}
function numberAttributeWithInfinityFallback(value) {
	return numberAttribute(value, Infinity);
}
function toNumber(value, fallbackValue = 0) {
	return coerceNumberProperty(value, fallbackValue);
}
/**
* Investigate if an event is a `TouchEvent`.
*/
function isTouchEvent(event) {
	return event.type.startsWith("touch");
}
function getEventPosition(event) {
	return isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
function isPromise(obj) {
	return !!obj && typeof obj.then === "function" && typeof obj.catch === "function";
}
function isNumberFinite(value) {
	return typeof value === "number" && isFinite(value);
}
typeof window !== "undefined" && window.mozInnerScreenX;
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var scrollbarVerticalSize;
var scrollbarHorizontalSize;
var scrollbarMeasure = {
	position: "absolute",
	top: "-9999px",
	width: "50px",
	height: "50px"
};
function measureScrollbar(direction = "vertical", prefix = "ant") {
	if (typeof document === "undefined" || typeof window === "undefined") return 0;
	const isVertical = direction === "vertical";
	if (isVertical && scrollbarVerticalSize) return scrollbarVerticalSize;
	else if (!isVertical && scrollbarHorizontalSize) return scrollbarHorizontalSize;
	const scrollDiv = document.createElement("div");
	Object.keys(scrollbarMeasure).forEach((scrollProp) => {
		scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
	});
	scrollDiv.className = `${prefix}-hide-scrollbar scroll-div-append-to-body`;
	if (isVertical) scrollDiv.style.overflowY = "scroll";
	else scrollDiv.style.overflowX = "scroll";
	document.body.appendChild(scrollDiv);
	let size = 0;
	if (isVertical) {
		size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
		scrollbarVerticalSize = size;
	} else {
		size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
		scrollbarHorizontalSize = size;
	}
	document.body.removeChild(scrollDiv);
	return size;
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
function wrapIntoObservable(value) {
	if (isObservable(value)) return value;
	if (isPromise(value)) return new Observable((subscriber) => {
		Promise.resolve(value).then((result) => {
			subscriber.next(result);
			subscriber.complete();
		}).catch((error) => subscriber.error(error));
	});
	return of(value);
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
/**
* Sync from rc-util [https://github.com/react-component/util]
*/
function canUseDom() {
	return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
/**
* Sync from rc-util [https://github.com/react-component/util]
*/
var MARK_KEY = `rc-util-key`;
function getMark({ mark } = {}) {
	if (mark) return mark.startsWith("data-") ? mark : `data-${mark}`;
	return MARK_KEY;
}
function getContainer(option) {
	if (option.attachTo) return option.attachTo;
	return document.querySelector("head") || document.body;
}
function injectCSS(css, options = {}) {
	if (!canUseDom()) return null;
	const styleNode = document.createElement("style");
	if (options.cspNonce) styleNode.nonce = options.cspNonce;
	styleNode.innerHTML = css;
	const container = getContainer(options);
	const { firstChild } = container;
	if (options.prepend && container.prepend) container.prepend(styleNode);
	else if (options.prepend && firstChild) container.insertBefore(styleNode, firstChild);
	else container.appendChild(styleNode);
	return styleNode;
}
var containerCache = /* @__PURE__ */ new Map();
function findExistNode(key, option = {}) {
	var _containerCache$get;
	const container = getContainer(option);
	return Array.from(((_containerCache$get = containerCache.get(container)) === null || _containerCache$get === void 0 ? void 0 : _containerCache$get.children) || []).find((node) => node.tagName === "STYLE" && node.getAttribute(getMark(option)) === key);
}
function updateCSS(css, key, options = {}) {
	const container = getContainer(options);
	if (!containerCache.has(container)) {
		const placeholderStyle = injectCSS("", options);
		const { parentNode } = placeholderStyle;
		containerCache.set(container, parentNode);
		parentNode.removeChild(placeholderStyle);
	}
	const existNode = findExistNode(key, options);
	if (existNode) {
		if (options.cspNonce && existNode.nonce !== options.cspNonce) existNode.nonce = options.cspNonce;
		if (existNode.innerHTML !== css) existNode.innerHTML = css;
		return existNode;
	}
	const newNode = injectCSS(css, options);
	newNode === null || newNode === void 0 || newNode.setAttribute(getMark(options), key);
	return newNode;
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
function getStatusClassNames(prefixCls, status, hasFeedback) {
	return {
		[`${prefixCls}-status-success`]: status === "success",
		[`${prefixCls}-status-warning`]: status === "warning",
		[`${prefixCls}-status-error`]: status === "error",
		[`${prefixCls}-status-validating`]: status === "validating",
		[`${prefixCls}-has-feedback`]: hasFeedback
	};
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
function runOutsideAngular(fn) {
	return typeof Zone !== "undefined" ? Zone.root.run(fn) : fn();
}
/**
* This function replaces `runOutsideAngular` with `fromEvent`, introducing a
* lot of boilerplate where we need to inject the `NgZone` service and then subscribe
* to `fromEvent` within the `runOutsideAngular` callback.
*/
function fromEventOutsideAngular(target, name, options) {
	if (!target) return EMPTY;
	return new Observable((subscriber) => {
		return runOutsideAngular(() => fromEvent(target, name, options).subscribe(subscriber));
	});
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
function getVariantClassNames(prefixCls, variant) {
	return {
		[`${prefixCls}-outlined`]: variant === "outlined",
		[`${prefixCls}-borderless`]: variant === "borderless",
		[`${prefixCls}-filled`]: variant === "filled",
		[`${prefixCls}-underlined`]: variant === "underlined"
	};
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
function generateClassName(prefix, suffix) {
	return `${prefix}-${suffix}`;
}
function getClassListFromValue(value) {
	let classList = Array.isArray(value) ? value.filter(Boolean) : null;
	if (typeof value === "string") classList = value.trim().split(/\s+/).filter(Boolean);
	return classList;
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
function triggerFocus(element, option) {
	element.focus(option);
	const { cursor } = option || {};
	if (cursor) {
		const len = element.value.length;
		switch (cursor) {
			case "start":
				element.setSelectionRange(0, 0);
				break;
			case "end":
				element.setSelectionRange(len, len);
				break;
			default: element.setSelectionRange(0, len);
		}
	}
}
//#endregion
export { warn as C, coerceNumberProperty as S, toNumber as _, getClassListFromValue as a, wrapIntoObservable as b, getVariantClassNames as c, isNumberFinite as d, isTemplateRef as f, numberAttributeWithZeroFallback as g, numberAttributeWithInfinityFallback as h, generateClassName as i, isNil as l, measureScrollbar as m, canUseDom as n, getEventPosition as o, isTouchEvent as p, fromEventOutsideAngular as r, getStatusClassNames as s, arraysEqual as t, isNotNil as u, triggerFocus as v, environment as w, coerceElement as x, updateCSS as y };
