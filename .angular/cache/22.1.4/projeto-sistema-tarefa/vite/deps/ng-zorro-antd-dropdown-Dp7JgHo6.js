import { n as _defineProperty, t as _objectSpread2 } from "./objectSpread2-C_IE-bIJ.js";
import { $n as Output, Bt as computed, Dc as InjectionToken, Dl as ɵɵdefineInjectable, Do as ɵɵgetInheritedFactory, Dr as ViewEncapsulation, En as ElementRef, Eo as ɵɵgetCurrentView, Er as ViewContainerRef, Fn as Injectable, Hs as ɵɵtemplateRefExtractor, Ic as NgZone, Il as ɵɵresetView, In as Input, Jo as ɵɵlistener, Ll as ɵɵrestoreView, Ls as ɵɵstyleMap, M as createComponent, Mr as afterNextRender, O as booleanAttribute, Oc as Injector, Ol as ɵɵdefineInjector, Rs as ɵɵstyleProp, S as ViewChild, Sa as ɵɵconditional, Sl as signal, Ta as ɵɵcontentQuery, Ui as setClassMetadata, Us as ɵɵtext, Vs as ɵɵtemplate, Ws as ɵɵtextInterpolate, X as input, Xo as ɵɵnextContext, Yo as ɵɵloadQuery, Zn as NgModuleRef$1, _o as ɵɵelementContainerEnd, _s as ɵɵqueryRefresh, a as ContentChildren, ar as RendererFactory2, as as ɵɵproperty, at as output, ba as ɵɵclassProp, bo as ɵɵelementStart, ca as ɵɵNgOnChangesFeature, cl as inject, cn as Component, da as ɵɵanimateEnter, dc as APP_ID, do as ɵɵdomElementStart, dr as Service, eo as ɵɵdefineComponent, gc as DestroyRef, hc as DOCUMENT, ho as ɵɵelement, il as forwardRef, io as ɵɵdefineService, ir as Renderer2, is as ɵɵprojectionDef, la as ɵɵProvidersFeature, ma as ɵɵanimateLeaveListener, nl as effect, no as ɵɵdefineNgModule, oa as ɵɵHostDirectivesFeature, oc as ɵɵviewQuery, oo as ɵɵdomElement, p as IterableDiffers, pa as ɵɵanimateLeave, qn as NgModule, qt as untracked, r as ChangeDetectorRef, rs as ɵɵprojection, sa as ɵɵInheritDefinitionFeature, tn as ApplicationRef, to as ɵɵdefineDirective, ua as ɵɵadvance, uc as ANIMATION_MODULE_TYPE, uo as ɵɵdomElementEnd, vo as ɵɵelementContainerStart, vr as TemplateRef, wa as ɵɵconditionalCreate, wn as Directive, xc as EventEmitter, ya as ɵɵclassMap, yc as EnvironmentInjector, yo as ɵɵelementEnd, ys as ɵɵreference } from "./core-CXNTKvTk.js";
import { D as shareReplay, Dn as isObservable, In as EMPTY, Qn as Subject, U as pairwise, Ut as auditTime, Vn as animationFrameScheduler, Xt as filter, Zn as BehaviorSubject, b as switchMap, fr as __esDecorate, g as takeUntil, gt as distinctUntilChanged, h as takeWhile, hn as combineLatest, jn as of, mn as mergeMap, pr as __runInitializers, qn as asapScheduler, rr as Observable, rt as first, sn as fromEvent, tn as merge, tr as ConnectableObservable, ur as Subscription, vn as map, x as startWith } from "./esm5-BupzNxh_.js";
import { Y as NgTemplateOutlet, jt as Location } from "./common-C7YlTbb3.js";
import { G as NavigationEnd, f as RouterLink, st as Router } from "./router-toFbJjoz.js";
import { n as Directionality, t as BidiModule } from "./bidi-CMsMKfPk.js";
import { f as NzConfigService, o as NzIconDirective, p as WithConfig, s as NzIconModule, y as takeUntilDestroyed } from "./ng-zorro-antd-icon-DGQmdhvo.js";
import { S as coerceNumberProperty, a as getClassListFromValue, g as numberAttributeWithZeroFallback, i as generateClassName, r as fromEventOutsideAngular, x as coerceElement } from "./ng-zorro-antd-core-util-DcoCxePB.js";
import { a as coerceArray, n as _getEventTarget, t as _CdkPrivateStyleLoader } from "./_style-loader-chunk-DorWkqSA.js";
import { a as slideAnimationLeave, i as slideAnimationEnter, l as coerceCssPixelValue, n as NzNoAnimationDirective, o as withAnimationCheck, r as SLIDE_UP_ANIMATION_CLASS, t as NzAnimationCollapseDirective } from "./ng-zorro-antd-core-animation-sB-Dji1R.js";
import { t as Platform } from "./platform-1F_4KXs4.js";
import { n as NzStringTemplateOutletDirective, t as NzOutletModule } from "./ng-zorro-antd-core-outlet-CjP2t4ku.js";
//#region node_modules/@angular/cdk/fesm2022/_scrolling-chunk.mjs
var RtlScrollAxisType;
(function(RtlScrollAxisType) {
	RtlScrollAxisType[RtlScrollAxisType["NORMAL"] = 0] = "NORMAL";
	RtlScrollAxisType[RtlScrollAxisType["NEGATED"] = 1] = "NEGATED";
	RtlScrollAxisType[RtlScrollAxisType["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported$1;
function supportsScrollBehavior() {
	if (scrollBehaviorSupported$1 == null) {
		var _document$documentEle;
		if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
			scrollBehaviorSupported$1 = false;
			return scrollBehaviorSupported$1;
		}
		if (((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.style) && "scrollBehavior" in document.documentElement.style) scrollBehaviorSupported$1 = true;
		else {
			const scrollToFunction = Element.prototype.scrollTo;
			if (scrollToFunction) scrollBehaviorSupported$1 = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
			else scrollBehaviorSupported$1 = false;
		}
	}
	return scrollBehaviorSupported$1;
}
function getRtlScrollAxisType() {
	if (typeof document !== "object" || !document) return RtlScrollAxisType.NORMAL;
	if (rtlScrollAxisType == null) {
		const scrollContainer = document.createElement("div");
		const containerStyle = scrollContainer.style;
		scrollContainer.dir = "rtl";
		containerStyle.width = "1px";
		containerStyle.overflow = "auto";
		containerStyle.visibility = "hidden";
		containerStyle.pointerEvents = "none";
		containerStyle.position = "absolute";
		const content = document.createElement("div");
		const contentStyle = content.style;
		contentStyle.width = "2px";
		contentStyle.height = "1px";
		scrollContainer.appendChild(content);
		document.body.appendChild(scrollContainer);
		rtlScrollAxisType = RtlScrollAxisType.NORMAL;
		if (scrollContainer.scrollLeft === 0) {
			scrollContainer.scrollLeft = 1;
			rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
		}
		scrollContainer.remove();
	}
	return rtlScrollAxisType;
}
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_test-environment-chunk.mjs
function _isTestEnvironment() {
	return typeof __karma__ !== "undefined" && !!__karma__ || typeof jasmine !== "undefined" && !!jasmine || typeof jest !== "undefined" && !!jest || typeof Mocha !== "undefined" && !!Mocha;
}
//#endregion
//#region node_modules/@angular/cdk/fesm2022/keycodes.mjs
function hasModifierKey(event, ...modifiers) {
	if (modifiers.length) return modifiers.some((modifier) => event[modifier]);
	return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_data-source-chunk.mjs
var DataSource = class {};
function isDataSource(value) {
	return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_recycle-view-repeater-strategy-chunk.mjs
var ArrayDataSource = class extends DataSource {
	constructor(_data) {
		super();
		_defineProperty(this, "_data", void 0);
		this._data = _data;
	}
	connect() {
		return isObservable(this._data) ? this._data : of(this._data);
	}
	disconnect() {}
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation) {
	_ViewRepeaterOperation[_ViewRepeaterOperation["REPLACED"] = 0] = "REPLACED";
	_ViewRepeaterOperation[_ViewRepeaterOperation["INSERTED"] = 1] = "INSERTED";
	_ViewRepeaterOperation[_ViewRepeaterOperation["MOVED"] = 2] = "MOVED";
	_ViewRepeaterOperation[_ViewRepeaterOperation["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _RecycleViewRepeaterStrategy = class {
	constructor() {
		_defineProperty(this, "viewCacheSize", 20);
		_defineProperty(this, "_viewCache", []);
	}
	applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
		changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
			let view;
			let operation;
			if (record.previousIndex == null) {
				const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
				view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
				operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
			} else if (currentIndex == null) {
				this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
				operation = _ViewRepeaterOperation.REMOVED;
			} else {
				view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
				operation = _ViewRepeaterOperation.MOVED;
			}
			if (itemViewChanged) itemViewChanged({
				context: view === null || view === void 0 ? void 0 : view.context,
				operation,
				record
			});
		});
	}
	detach() {
		for (const view of this._viewCache) view.destroy();
		this._viewCache = [];
	}
	_insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
		const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
		if (cachedView) {
			cachedView.context.$implicit = value;
			return;
		}
		const viewArgs = viewArgsFactory();
		return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
	}
	_detachAndCacheView(index, viewContainerRef) {
		const detachedView = viewContainerRef.detach(index);
		this._maybeCacheView(detachedView, viewContainerRef);
	}
	_moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
		const view = viewContainerRef.get(adjustedPreviousIndex);
		viewContainerRef.move(view, currentIndex);
		view.context.$implicit = value;
		return view;
	}
	_maybeCacheView(view, viewContainerRef) {
		if (this._viewCache.length < this.viewCacheSize) this._viewCache.push(view);
		else {
			const index = viewContainerRef.indexOf(view);
			if (index === -1) view.destroy();
			else viewContainerRef.remove(index);
		}
	}
	_insertViewFromCache(index, viewContainerRef) {
		const cachedView = this._viewCache.pop();
		if (cachedView) viewContainerRef.insert(cachedView, index);
		return cachedView || null;
	}
};
//#endregion
//#region node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _CdkFixedSizeVirtualScroll;
var _ScrollDispatcher;
var _CdkScrollable;
var _ViewportRuler;
var _CdkVirtualScrollable;
var _CdkVirtualScrollViewport;
var _CdkVirtualForOf;
var _CdkVirtualScrollableElement;
var _CdkVirtualScrollableWindow;
var _CdkScrollableModule;
var _ScrollingModule;
var _c0$2 = ["contentWrapper"];
var _c1$1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
	constructor(itemSize, minBufferPx, maxBufferPx) {
		_defineProperty(this, "_scrolledIndexChange", new Subject());
		_defineProperty(this, "scrolledIndexChange", this._scrolledIndexChange.pipe(distinctUntilChanged()));
		_defineProperty(this, "_viewport", null);
		_defineProperty(this, "_itemSize", void 0);
		_defineProperty(this, "_minBufferPx", void 0);
		_defineProperty(this, "_maxBufferPx", void 0);
		this._itemSize = itemSize;
		this._minBufferPx = minBufferPx;
		this._maxBufferPx = maxBufferPx;
	}
	attach(viewport) {
		this._viewport = viewport;
		this._updateTotalContentSize();
		this._updateRenderedRange();
	}
	detach() {
		this._scrolledIndexChange.complete();
		this._viewport = null;
	}
	updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
		if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
		this._itemSize = itemSize;
		this._minBufferPx = minBufferPx;
		this._maxBufferPx = maxBufferPx;
		this._updateTotalContentSize();
		this._updateRenderedRange();
	}
	onContentScrolled() {
		this._updateRenderedRange();
	}
	onDataLengthChanged() {
		this._updateTotalContentSize();
		this._updateRenderedRange();
	}
	onContentRendered() {}
	onRenderedOffsetChanged() {}
	scrollToIndex(index, behavior) {
		if (this._viewport) this._viewport.scrollToOffset(index * this._itemSize, behavior);
	}
	_updateTotalContentSize() {
		if (!this._viewport) return;
		this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
	}
	_updateRenderedRange() {
		if (!this._viewport) return;
		const renderedRange = this._viewport.getRenderedRange();
		const newRange = {
			start: renderedRange.start,
			end: renderedRange.end
		};
		const viewportSize = this._viewport.getViewportSize();
		const dataLength = this._viewport.getDataLength();
		let scrollOffset = this._viewport.measureScrollOffset();
		let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
		if (newRange.end > dataLength) {
			const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
			const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
			if (firstVisibleIndex != newVisibleIndex) {
				firstVisibleIndex = newVisibleIndex;
				scrollOffset = newVisibleIndex * this._itemSize;
				newRange.start = Math.floor(firstVisibleIndex);
			}
			newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
		}
		const startBuffer = scrollOffset - newRange.start * this._itemSize;
		if (startBuffer < this._minBufferPx && newRange.start != 0) {
			const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
			newRange.start = Math.max(0, newRange.start - expandStart);
			newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
		} else {
			const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
			if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
				const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
				if (expandEnd > 0) {
					newRange.end = Math.min(dataLength, newRange.end + expandEnd);
					newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
				}
			}
		}
		this._viewport.setRenderedRange(newRange);
		this._viewport.setRenderedContentOffset(Math.round(this._itemSize * newRange.start));
		this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
	}
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
	return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class {
	constructor() {
		_defineProperty(this, "_itemSize", 20);
		_defineProperty(this, "_minBufferPx", 100);
		_defineProperty(this, "_maxBufferPx", 200);
		_defineProperty(this, "_scrollStrategy", new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx));
	}
	get itemSize() {
		return this._itemSize;
	}
	set itemSize(value) {
		this._itemSize = coerceNumberProperty(value);
	}
	get minBufferPx() {
		return this._minBufferPx;
	}
	set minBufferPx(value) {
		this._minBufferPx = coerceNumberProperty(value);
	}
	get maxBufferPx() {
		return this._maxBufferPx;
	}
	set maxBufferPx(value) {
		this._maxBufferPx = coerceNumberProperty(value);
	}
	ngOnChanges() {
		this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
	}
};
_CdkFixedSizeVirtualScroll = CdkFixedSizeVirtualScroll;
_defineProperty(CdkFixedSizeVirtualScroll, "ɵfac", function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
});
_defineProperty(CdkFixedSizeVirtualScroll, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _CdkFixedSizeVirtualScroll,
	selectors: [[
		"cdk-virtual-scroll-viewport",
		"itemSize",
		""
	]],
	inputs: {
		itemSize: "itemSize",
		minBufferPx: "minBufferPx",
		maxBufferPx: "maxBufferPx"
	},
	features: [ɵɵProvidersFeature([{
		provide: VIRTUAL_SCROLL_STRATEGY,
		useFactory: _fixedSizeVirtualScrollStrategyFactory,
		deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
	}]), ɵɵNgOnChangesFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
		type: Directive,
		args: [{
			selector: "cdk-virtual-scroll-viewport[itemSize]",
			providers: [{
				provide: VIRTUAL_SCROLL_STRATEGY,
				useFactory: _fixedSizeVirtualScrollStrategyFactory,
				deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
			}]
		}]
	}], null, {
		itemSize: [{ type: Input }],
		minBufferPx: [{ type: Input }],
		maxBufferPx: [{ type: Input }]
	});
})();
var ScrollDispatcher = class {
	constructor() {
		_defineProperty(this, "_ngZone", inject(NgZone));
		_defineProperty(this, "_platform", inject(Platform));
		_defineProperty(this, "_renderer", inject(RendererFactory2).createRenderer(null, null));
		_defineProperty(this, "_cleanupGlobalListener", void 0);
		_defineProperty(this, "_scrolled", new Subject());
		_defineProperty(this, "_scrolledCount", 0);
		_defineProperty(this, "scrollContainers", /* @__PURE__ */ new Map());
	}
	register(target) {
		if (!this.scrollContainers.has(target)) this.scrollContainers.set(target, target.elementScrolled().subscribe(() => this._scrolled.next(target)));
	}
	deregister(target) {
		const ref = this.scrollContainers.get(target);
		if (ref) {
			ref.unsubscribe();
			this.scrollContainers.delete(target);
		}
	}
	scrolled(auditTimeInMs = 20) {
		if (!this._platform.isBrowser) return of();
		return new Observable((observer) => {
			if (!this._cleanupGlobalListener) this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
			const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
			this._scrolledCount++;
			return () => {
				subscription.unsubscribe();
				this._scrolledCount--;
				if (!this._scrolledCount) {
					var _this$_cleanupGlobalL;
					(_this$_cleanupGlobalL = this._cleanupGlobalListener) === null || _this$_cleanupGlobalL === void 0 || _this$_cleanupGlobalL.call(this);
					this._cleanupGlobalListener = void 0;
				}
			};
		});
	}
	ngOnDestroy() {
		var _this$_cleanupGlobalL2;
		(_this$_cleanupGlobalL2 = this._cleanupGlobalListener) === null || _this$_cleanupGlobalL2 === void 0 || _this$_cleanupGlobalL2.call(this);
		this._cleanupGlobalListener = void 0;
		this.scrollContainers.forEach((_, container) => this.deregister(container));
		this._scrolled.complete();
	}
	ancestorScrolled(elementOrElementRef, auditTimeInMs) {
		const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
		return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
	}
	getAncestorScrollContainers(elementOrElementRef) {
		const scrollingContainers = [];
		this.scrollContainers.forEach((_, target) => {
			if (this._targetContainsElement(target, elementOrElementRef)) scrollingContainers.push(target);
		});
		return scrollingContainers;
	}
	_targetContainsElement(scrollable, elementOrElementRef) {
		let element = coerceElement(elementOrElementRef);
		let targetElement = scrollable.getElementRef().nativeElement;
		do
			if (element == targetElement) return true;
		while (element = element.parentElement);
		return false;
	}
};
_ScrollDispatcher = ScrollDispatcher;
_defineProperty(ScrollDispatcher, "ɵfac", function ScrollDispatcher_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ScrollDispatcher)();
});
_defineProperty(ScrollDispatcher, "ɵprov", /* @__PURE__ */ ɵɵdefineService({
	token: _ScrollDispatcher,
	factory: _ScrollDispatcher.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{ type: Service }], null, null);
})();
var CdkScrollable = class {
	constructor() {
		_defineProperty(this, "elementRef", inject(ElementRef));
		_defineProperty(this, "scrollDispatcher", inject(ScrollDispatcher));
		_defineProperty(this, "ngZone", inject(NgZone));
		_defineProperty(this, "dir", inject(Directionality, { optional: true }));
		_defineProperty(this, "_scrollElement", this.elementRef.nativeElement);
		_defineProperty(this, "_destroyed", new Subject());
		_defineProperty(this, "_renderer", inject(Renderer2));
		_defineProperty(this, "_cleanupScroll", void 0);
		_defineProperty(this, "_elementScrolled", new Subject());
	}
	ngOnInit() {
		this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
		this.scrollDispatcher.register(this);
	}
	ngOnDestroy() {
		var _this$_cleanupScroll;
		(_this$_cleanupScroll = this._cleanupScroll) === null || _this$_cleanupScroll === void 0 || _this$_cleanupScroll.call(this);
		this._elementScrolled.complete();
		this.scrollDispatcher.deregister(this);
		this._destroyed.next();
		this._destroyed.complete();
	}
	elementScrolled() {
		return this._elementScrolled;
	}
	getElementRef() {
		return this.elementRef;
	}
	scrollTo(options) {
		const el = this.elementRef.nativeElement;
		const isRtl = this.dir && this.dir.value == "rtl";
		if (options.left == null) options.left = isRtl ? options.end : options.start;
		if (options.right == null) options.right = isRtl ? options.start : options.end;
		if (options.bottom != null) options.top = el.scrollHeight - el.clientHeight - options.bottom;
		if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
			if (options.left != null) options.right = el.scrollWidth - el.clientWidth - options.left;
			if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) options.left = options.right;
			else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) options.left = options.right ? -options.right : options.right;
		} else if (options.right != null) options.left = el.scrollWidth - el.clientWidth - options.right;
		this._applyScrollToOptions(options);
	}
	_applyScrollToOptions(options) {
		const el = this.elementRef.nativeElement;
		if (supportsScrollBehavior()) el.scrollTo(options);
		else {
			if (options.top != null) el.scrollTop = options.top;
			if (options.left != null) el.scrollLeft = options.left;
		}
	}
	measureScrollOffset(from) {
		const LEFT = "left";
		const RIGHT = "right";
		const el = this.elementRef.nativeElement;
		if (from == "top") return el.scrollTop;
		if (from == "bottom") return el.scrollHeight - el.clientHeight - el.scrollTop;
		const isRtl = this.dir && this.dir.value == "rtl";
		if (from == "start") from = isRtl ? RIGHT : LEFT;
		else if (from == "end") from = isRtl ? LEFT : RIGHT;
		if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) if (from == LEFT) return el.scrollWidth - el.clientWidth - el.scrollLeft;
		else return el.scrollLeft;
		else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) if (from == LEFT) return el.scrollLeft + el.scrollWidth - el.clientWidth;
		else return -el.scrollLeft;
		else if (from == LEFT) return el.scrollLeft;
		else return el.scrollWidth - el.clientWidth - el.scrollLeft;
	}
};
_CdkScrollable = CdkScrollable;
_defineProperty(CdkScrollable, "ɵfac", function CdkScrollable_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _CdkScrollable)();
});
_defineProperty(CdkScrollable, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _CdkScrollable,
	selectors: [[
		"",
		"cdk-scrollable",
		""
	], [
		"",
		"cdkScrollable",
		""
	]]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
		type: Directive,
		args: [{ selector: "[cdk-scrollable], [cdkScrollable]" }]
	}], null, null);
})();
var ViewportRuler = class {
	constructor() {
		_defineProperty(this, "_platform", inject(Platform));
		_defineProperty(this, "_listeners", void 0);
		_defineProperty(this, "_viewportSize", null);
		_defineProperty(this, "_change", new Subject());
		_defineProperty(this, "_document", inject(DOCUMENT));
		const ngZone = inject(NgZone);
		const renderer = inject(RendererFactory2).createRenderer(null, null);
		ngZone.runOutsideAngular(() => {
			if (this._platform.isBrowser) {
				const changeListener = (event) => this._change.next(event);
				this._listeners = [renderer.listen("window", "resize", changeListener), renderer.listen("window", "orientationchange", changeListener)];
			}
			this.change().subscribe(() => this._viewportSize = null);
		});
	}
	ngOnDestroy() {
		var _this$_listeners;
		(_this$_listeners = this._listeners) === null || _this$_listeners === void 0 || _this$_listeners.forEach((cleanup) => cleanup());
		this._change.complete();
	}
	getViewportSize() {
		if (!this._viewportSize) this._updateViewportSize();
		const output = {
			width: this._viewportSize.width,
			height: this._viewportSize.height
		};
		if (!this._platform.isBrowser) this._viewportSize = null;
		return output;
	}
	getViewportRect() {
		const scrollPosition = this.getViewportScrollPosition();
		const { width, height } = this.getViewportSize();
		return {
			top: scrollPosition.top,
			left: scrollPosition.left,
			bottom: scrollPosition.top + height,
			right: scrollPosition.left + width,
			height,
			width
		};
	}
	getViewportScrollPosition() {
		var _document$body, _document$body2;
		if (!this._platform.isBrowser) return {
			top: 0,
			left: 0
		};
		const document = this._document;
		const window = this._getWindow();
		const documentElement = document.documentElement;
		const documentRect = documentElement.getBoundingClientRect();
		return {
			top: -documentRect.top || ((_document$body = document.body) === null || _document$body === void 0 ? void 0 : _document$body.scrollTop) || window.scrollY || documentElement.scrollTop || 0,
			left: -documentRect.left || ((_document$body2 = document.body) === null || _document$body2 === void 0 ? void 0 : _document$body2.scrollLeft) || window.scrollX || documentElement.scrollLeft || 0
		};
	}
	change(throttleTime = 20) {
		return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
	}
	_getWindow() {
		return this._document.defaultView || window;
	}
	_updateViewportSize() {
		const window = this._getWindow();
		this._viewportSize = this._platform.isBrowser ? {
			width: window.innerWidth,
			height: window.innerHeight
		} : {
			width: 0,
			height: 0
		};
	}
};
_ViewportRuler = ViewportRuler;
_defineProperty(ViewportRuler, "ɵfac", function ViewportRuler_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ViewportRuler)();
});
_defineProperty(ViewportRuler, "ɵprov", /* @__PURE__ */ ɵɵdefineService({
	token: _ViewportRuler,
	factory: _ViewportRuler.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{ type: Service }], () => [], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class extends CdkScrollable {
	measureViewportSize(orientation) {
		const viewportEl = this.elementRef.nativeElement;
		return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
	}
};
_CdkVirtualScrollable = CdkVirtualScrollable;
_defineProperty(CdkVirtualScrollable, "ɵfac", /* @__PURE__ */ (() => {
	let ɵCdkVirtualScrollable_BaseFactory;
	return function CdkVirtualScrollable_Factory(__ngFactoryType__) {
		return (ɵCdkVirtualScrollable_BaseFactory || (ɵCdkVirtualScrollable_BaseFactory = ɵɵgetInheritedFactory(_CdkVirtualScrollable)))(__ngFactoryType__ || _CdkVirtualScrollable);
	};
})());
_defineProperty(CdkVirtualScrollable, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _CdkVirtualScrollable,
	features: [ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{ type: Directive }], null, null);
})();
function rangesEqual(r1, r2) {
	return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CDK_VIRTUAL_SCROLL_VIEWPORT = new InjectionToken("CDK_VIRTUAL_SCROLL_VIEWPORT");
var CdkVirtualScrollViewport = class extends CdkVirtualScrollable {
	get orientation() {
		return this._orientation;
	}
	set orientation(orientation) {
		if (this._orientation !== orientation) {
			this._orientation = orientation;
			this._calculateSpacerSize();
		}
	}
	constructor() {
		super();
		_defineProperty(this, "elementRef", inject(ElementRef));
		_defineProperty(this, "_changeDetectorRef", inject(ChangeDetectorRef));
		_defineProperty(this, "_scrollStrategy", inject(VIRTUAL_SCROLL_STRATEGY, { optional: true }));
		_defineProperty(this, "scrollable", inject(VIRTUAL_SCROLLABLE, { optional: true }));
		_defineProperty(this, "_platform", inject(Platform));
		_defineProperty(this, "_detachedSubject", new Subject());
		_defineProperty(this, "_renderedRangeSubject", new Subject());
		_defineProperty(this, "_renderedContentOffsetSubject", new Subject());
		_defineProperty(this, "_orientation", "vertical");
		_defineProperty(this, "appendOnly", false);
		_defineProperty(this, "scrolledIndexChange", new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index))))));
		_defineProperty(this, "_contentWrapper", void 0);
		_defineProperty(this, "renderedRangeStream", this._renderedRangeSubject);
		_defineProperty(this, "renderedContentOffset", this._renderedContentOffsetSubject.pipe(filter((offset) => offset !== null), distinctUntilChanged()));
		_defineProperty(this, "_totalContentSize", 0);
		_defineProperty(this, "_totalContentWidth", signal("", ...ngDevMode ? [{ debugName: "_totalContentWidth" }] : []));
		_defineProperty(this, "_totalContentHeight", signal("", ...ngDevMode ? [{ debugName: "_totalContentHeight" }] : []));
		_defineProperty(this, "_renderedContentTransform", void 0);
		_defineProperty(this, "_renderedRange", {
			start: 0,
			end: 0
		});
		_defineProperty(this, "_dataLength", 0);
		_defineProperty(this, "_viewportSize", 0);
		_defineProperty(this, "_forOf", null);
		_defineProperty(this, "_renderedContentOffset", 0);
		_defineProperty(this, "_renderedContentOffsetNeedsRewrite", false);
		_defineProperty(this, "_changeDetectionNeeded", signal(false, ...ngDevMode ? [{ debugName: "_changeDetectionNeeded" }] : []));
		_defineProperty(this, "_runAfterChangeDetection", []);
		_defineProperty(this, "_viewportChanges", Subscription.EMPTY);
		_defineProperty(this, "_injector", inject(Injector));
		_defineProperty(this, "_isDestroyed", false);
		const viewportRuler = inject(ViewportRuler);
		if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) throw Error("Error: cdk-virtual-scroll-viewport requires the \"itemSize\" property to be set.");
		this._viewportChanges = viewportRuler.change().subscribe(() => {
			this.checkViewportSize();
		});
		if (!this.scrollable) {
			this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
			this.scrollable = this;
		}
		const ref = effect(() => {
			if (this._changeDetectionNeeded()) this._doChangeDetection();
		}, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "ref" } : {}), {}, { injector: inject(ApplicationRef).injector }));
		inject(DestroyRef).onDestroy(() => void ref.destroy());
	}
	ngOnInit() {
		if (!this._platform.isBrowser) return;
		if (this.scrollable === this) super.ngOnInit();
		this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
			this._measureViewportSize();
			this._scrollStrategy.attach(this);
			this.scrollable.elementScrolled().pipe(startWith(null), auditTime(0, SCROLL_SCHEDULER), takeUntil(this._destroyed)).subscribe(() => this._scrollStrategy.onContentScrolled());
			this._markChangeDetectionNeeded();
		}));
	}
	ngOnDestroy() {
		this.detach();
		this._scrollStrategy.detach();
		this._renderedRangeSubject.complete();
		this._detachedSubject.complete();
		this._viewportChanges.unsubscribe();
		this._isDestroyed = true;
		super.ngOnDestroy();
	}
	attach(forOf) {
		if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) throw Error("CdkVirtualScrollViewport is already attached.");
		this.ngZone.runOutsideAngular(() => {
			this._forOf = forOf;
			this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
				const newLength = data.length;
				if (newLength !== this._dataLength) {
					this._dataLength = newLength;
					this._scrollStrategy.onDataLengthChanged();
				}
				this._doChangeDetection();
			});
		});
	}
	detach() {
		this._forOf = null;
		this._detachedSubject.next();
	}
	getDataLength() {
		return this._dataLength;
	}
	getViewportSize() {
		return this._viewportSize;
	}
	getRenderedRange() {
		return this._renderedRange;
	}
	measureBoundingClientRectWithScrollOffset(from) {
		return this.getElementRef().nativeElement.getBoundingClientRect()[from];
	}
	setTotalContentSize(size) {
		if (this._totalContentSize !== size) {
			this._totalContentSize = size;
			this._calculateSpacerSize();
			this._markChangeDetectionNeeded();
		}
	}
	setRenderedRange(range) {
		if (!rangesEqual(this._renderedRange, range)) {
			if (this.appendOnly) range = {
				start: 0,
				end: Math.max(this._renderedRange.end, range.end)
			};
			this._renderedRangeSubject.next(this._renderedRange = range);
			this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
		}
	}
	getOffsetToRenderedContentStart() {
		return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
	}
	setRenderedContentOffset(offset, to = "to-start") {
		offset = this.appendOnly && to === "to-start" ? 0 : offset;
		const isRtl = this.dir && this.dir.value == "rtl";
		const isHorizontal = this.orientation == "horizontal";
		const axis = isHorizontal ? "X" : "Y";
		let transform = `translate${axis}(${Number((isHorizontal && isRtl ? -1 : 1) * offset)}px)`;
		this._renderedContentOffset = offset;
		if (to === "to-end") {
			transform += ` translate${axis}(-100%)`;
			this._renderedContentOffsetNeedsRewrite = true;
		}
		if (this._renderedContentTransform != transform) {
			this._renderedContentTransform = transform;
			this._markChangeDetectionNeeded(() => {
				if (this._renderedContentOffsetNeedsRewrite) {
					this._renderedContentOffset -= this.measureRenderedContentSize();
					this._renderedContentOffsetNeedsRewrite = false;
					this.setRenderedContentOffset(this._renderedContentOffset);
				} else this._scrollStrategy.onRenderedOffsetChanged();
			});
		}
	}
	scrollToOffset(offset, behavior = "auto") {
		const options = { behavior };
		if (this.orientation === "horizontal") options.start = offset;
		else options.top = offset;
		this.scrollable.scrollTo(options);
	}
	scrollToIndex(index, behavior = "auto") {
		this._scrollStrategy.scrollToIndex(index, behavior);
	}
	measureScrollOffset(from) {
		let measureScrollOffset;
		if (this.scrollable == this) measureScrollOffset = (_from) => super.measureScrollOffset(_from);
		else measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
		return Math.max(0, measureScrollOffset(from !== null && from !== void 0 ? from : this.orientation === "horizontal" ? "start" : "top") - this.measureViewportOffset());
	}
	measureViewportOffset(from) {
		var _this$dir;
		let fromRect;
		const LEFT = "left";
		const RIGHT = "right";
		const isRtl = ((_this$dir = this.dir) === null || _this$dir === void 0 ? void 0 : _this$dir.value) == "rtl";
		if (from == "start") fromRect = isRtl ? RIGHT : LEFT;
		else if (from == "end") fromRect = isRtl ? LEFT : RIGHT;
		else if (from) fromRect = from;
		else fromRect = this.orientation === "horizontal" ? "left" : "top";
		const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
		return this.elementRef.nativeElement.getBoundingClientRect()[fromRect] - scrollerClientRect;
	}
	measureRenderedContentSize() {
		const contentEl = this._contentWrapper.nativeElement;
		return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
	}
	measureRangeSize(range) {
		if (!this._forOf) return 0;
		return this._forOf.measureRangeSize(range, this.orientation);
	}
	checkViewportSize() {
		this._measureViewportSize();
		this._scrollStrategy.onDataLengthChanged();
	}
	_measureViewportSize() {
		this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
	}
	_markChangeDetectionNeeded(runAfter) {
		if (runAfter) this._runAfterChangeDetection.push(runAfter);
		if (untracked(this._changeDetectionNeeded)) return;
		this.ngZone.runOutsideAngular(() => {
			Promise.resolve().then(() => {
				this.ngZone.run(() => {
					this._changeDetectionNeeded.set(true);
				});
			});
		});
	}
	_doChangeDetection() {
		if (this._isDestroyed) return;
		this.ngZone.run(() => {
			this._changeDetectorRef.markForCheck();
			this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
			this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart());
			afterNextRender(() => {
				this._changeDetectionNeeded.set(false);
				const runAfterChangeDetection = this._runAfterChangeDetection;
				this._runAfterChangeDetection = [];
				for (const fn of runAfterChangeDetection) fn();
			}, { injector: this._injector });
		});
	}
	_calculateSpacerSize() {
		this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
		this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
	}
};
_CdkVirtualScrollViewport = CdkVirtualScrollViewport;
_defineProperty(CdkVirtualScrollViewport, "ɵfac", function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _CdkVirtualScrollViewport)();
});
_defineProperty(CdkVirtualScrollViewport, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _CdkVirtualScrollViewport,
	selectors: [["cdk-virtual-scroll-viewport"]],
	viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
		if (rf & 1) ɵɵviewQuery(_c0$2, 7);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentWrapper = _t.first);
		}
	},
	hostAttrs: [1, "cdk-virtual-scroll-viewport"],
	hostVars: 4,
	hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵclassProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
	},
	inputs: {
		orientation: "orientation",
		appendOnly: [
			2,
			"appendOnly",
			"appendOnly",
			booleanAttribute
		]
	},
	outputs: { scrolledIndexChange: "scrolledIndexChange" },
	features: [ɵɵProvidersFeature([{
		provide: CdkScrollable,
		useFactory: () => inject(VIRTUAL_SCROLLABLE, { optional: true }) || inject(_CdkVirtualScrollViewport)
	}, {
		provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
		useExisting: _CdkVirtualScrollViewport
	}]), ɵɵInheritDefinitionFeature],
	ngContentSelectors: _c1$1,
	decls: 4,
	vars: 4,
	consts: [
		["contentWrapper", ""],
		[1, "cdk-virtual-scroll-content-wrapper"],
		[1, "cdk-virtual-scroll-spacer"]
	],
	template: function CdkVirtualScrollViewport_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵdomElementStart(0, "div", 1, 0);
			ɵɵprojection(2);
			ɵɵdomElementEnd();
			ɵɵdomElement(3, "div", 2);
		}
		if (rf & 2) {
			ɵɵadvance(3);
			ɵɵstyleProp("width", ctx._totalContentWidth())("height", ctx._totalContentHeight());
		}
	},
	styles: ["cdk-virtual-scroll-viewport {\n  display: block;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.cdk-virtual-scrollable {\n  overflow: auto;\n  will-change: scroll-position;\n  contain: strict;\n  overflow-anchor: none;\n  scroll-behavior: auto;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  contain: content;\n}\n[dir=rtl] .cdk-virtual-scroll-content-wrapper {\n  right: 0;\n  left: auto;\n}\n\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {\n  min-height: 100%;\n}\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {\n  min-width: 100%;\n}\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-spacer {\n  height: 1px;\n  transform-origin: 0 0;\n  flex: 0 0 auto;\n}\n[dir=rtl] .cdk-virtual-scroll-spacer {\n  transform-origin: 100% 0;\n}\n"],
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
		type: Component,
		args: [{
			selector: "cdk-virtual-scroll-viewport",
			host: {
				"class": "cdk-virtual-scroll-viewport",
				"[class.cdk-virtual-scroll-orientation-horizontal]": "orientation === \"horizontal\"",
				"[class.cdk-virtual-scroll-orientation-vertical]": "orientation !== \"horizontal\""
			},
			encapsulation: ViewEncapsulation.None,
			providers: [{
				provide: CdkScrollable,
				useFactory: () => inject(VIRTUAL_SCROLLABLE, { optional: true }) || inject(CdkVirtualScrollViewport)
			}, {
				provide: CDK_VIRTUAL_SCROLL_VIEWPORT,
				useExisting: CdkVirtualScrollViewport
			}],
			template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth()\" [style.height]=\"_totalContentHeight()\"></div>\n",
			styles: ["cdk-virtual-scroll-viewport {\n  display: block;\n  position: relative;\n  transform: translateZ(0);\n}\n\n.cdk-virtual-scrollable {\n  overflow: auto;\n  will-change: scroll-position;\n  contain: strict;\n  overflow-anchor: none;\n  scroll-behavior: auto;\n}\n\n.cdk-virtual-scroll-content-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  contain: content;\n}\n[dir=rtl] .cdk-virtual-scroll-content-wrapper {\n  right: 0;\n  left: auto;\n}\n\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {\n  min-height: 100%;\n}\n.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {\n  min-width: 100%;\n}\n.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  outline: none;\n}\n\n.cdk-virtual-scroll-spacer {\n  height: 1px;\n  transform-origin: 0 0;\n  flex: 0 0 auto;\n}\n[dir=rtl] .cdk-virtual-scroll-spacer {\n  transform-origin: 100% 0;\n}\n"]
		}]
	}], () => [], {
		orientation: [{ type: Input }],
		appendOnly: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		scrolledIndexChange: [{ type: Output }],
		_contentWrapper: [{
			type: ViewChild,
			args: ["contentWrapper", { static: true }]
		}]
	});
})();
function getOffset(orientation, direction, node) {
	const el = node;
	if (!el.getBoundingClientRect) return 0;
	const rect = el.getBoundingClientRect();
	if (orientation === "horizontal") return direction === "start" ? rect.left : rect.right;
	return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class {
	get cdkVirtualForOf() {
		return this._cdkVirtualForOf;
	}
	set cdkVirtualForOf(value) {
		this._cdkVirtualForOf = value;
		if (isDataSource(value)) this._dataSourceChanges.next(value);
		else this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
	}
	get cdkVirtualForTrackBy() {
		return this._cdkVirtualForTrackBy;
	}
	set cdkVirtualForTrackBy(fn) {
		this._needsUpdate = true;
		this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
	}
	set cdkVirtualForTemplate(value) {
		if (value) {
			this._needsUpdate = true;
			this._template = value;
		}
	}
	get cdkVirtualForTemplateCacheSize() {
		return this._viewRepeater.viewCacheSize;
	}
	set cdkVirtualForTemplateCacheSize(size) {
		this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
	}
	constructor() {
		_defineProperty(this, "_viewContainerRef", inject(ViewContainerRef));
		_defineProperty(this, "_template", inject(TemplateRef));
		_defineProperty(this, "_differs", inject(IterableDiffers));
		_defineProperty(this, "_viewRepeater", new _RecycleViewRepeaterStrategy());
		_defineProperty(this, "_viewport", inject(CDK_VIRTUAL_SCROLL_VIEWPORT, { skipSelf: true }));
		_defineProperty(this, "viewChange", new Subject());
		_defineProperty(this, "_dataSourceChanges", new Subject());
		_defineProperty(this, "_cdkVirtualForOf", void 0);
		_defineProperty(this, "_cdkVirtualForTrackBy", void 0);
		_defineProperty(this, "dataStream", this._dataSourceChanges.pipe(startWith(null), pairwise(), switchMap(([prev, cur]) => this._changeDataSource(prev, cur)), shareReplay(1)));
		_defineProperty(this, "_differ", null);
		_defineProperty(this, "_data", []);
		_defineProperty(this, "_renderedItems", []);
		_defineProperty(this, "_renderedRange", {
			start: 0,
			end: 0
		});
		_defineProperty(this, "_needsUpdate", false);
		_defineProperty(this, "_destroyed", new Subject());
		const ngZone = inject(NgZone);
		this.dataStream.subscribe((data) => {
			this._data = data;
			this._onRenderedDataChange();
		});
		this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
			this._renderedRange = range;
			if (this.viewChange.observers.length) ngZone.run(() => this.viewChange.next(this._renderedRange));
			this._onRenderedDataChange();
		});
		this._viewport.attach(this);
	}
	measureRangeSize(range, orientation) {
		if (range.start >= range.end) return 0;
		if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) throw Error(`Error: attempted to measure an item that isn't rendered.`);
		const renderedStartIndex = range.start - this._renderedRange.start;
		const rangeLen = range.end - range.start;
		let firstNode;
		let lastNode;
		for (let i = 0; i < rangeLen; i++) {
			const view = this._viewContainerRef.get(i + renderedStartIndex);
			if (view && view.rootNodes.length) {
				firstNode = lastNode = view.rootNodes[0];
				break;
			}
		}
		for (let i = rangeLen - 1; i > -1; i--) {
			const view = this._viewContainerRef.get(i + renderedStartIndex);
			if (view && view.rootNodes.length) {
				lastNode = view.rootNodes[view.rootNodes.length - 1];
				break;
			}
		}
		return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
	}
	ngDoCheck() {
		if (this._differ && this._needsUpdate) {
			const changes = this._differ.diff(this._renderedItems);
			if (!changes) this._updateContext();
			else this._applyChanges(changes);
			this._needsUpdate = false;
		}
	}
	ngOnDestroy() {
		this._viewport.detach();
		this._dataSourceChanges.next(void 0);
		this._dataSourceChanges.complete();
		this.viewChange.complete();
		this._destroyed.next();
		this._destroyed.complete();
		this._viewRepeater.detach();
	}
	_onRenderedDataChange() {
		if (!this._renderedRange) return;
		this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
		if (!this._differ) this._differ = this._differs.find(this._renderedItems).create((index, item) => {
			return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
		});
		this._needsUpdate = true;
	}
	_changeDataSource(oldDs, newDs) {
		if (oldDs) oldDs.disconnect(this);
		this._needsUpdate = true;
		return newDs ? newDs.connect(this) : of();
	}
	_updateContext() {
		const count = this._data.length;
		let i = this._viewContainerRef.length;
		while (i--) {
			const view = this._viewContainerRef.get(i);
			view.context.index = this._renderedRange.start + i;
			view.context.count = count;
			this._updateComputedContextProperties(view.context);
			view.detectChanges();
		}
	}
	_applyChanges(changes) {
		this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
		changes.forEachIdentityChange((record) => {
			const view = this._viewContainerRef.get(record.currentIndex);
			view.context.$implicit = record.item;
		});
		const count = this._data.length;
		let i = this._viewContainerRef.length;
		while (i--) {
			const view = this._viewContainerRef.get(i);
			view.context.index = this._renderedRange.start + i;
			view.context.count = count;
			this._updateComputedContextProperties(view.context);
		}
	}
	_updateComputedContextProperties(context) {
		context.first = context.index === 0;
		context.last = context.index === context.count - 1;
		context.even = context.index % 2 === 0;
		context.odd = !context.even;
	}
	_getEmbeddedViewArgs(record, index) {
		return {
			templateRef: this._template,
			context: {
				$implicit: record.item,
				cdkVirtualForOf: this._cdkVirtualForOf,
				index: -1,
				count: -1,
				first: false,
				last: false,
				odd: false,
				even: false
			},
			index
		};
	}
	static ngTemplateContextGuard(directive, context) {
		return true;
	}
};
_CdkVirtualForOf = CdkVirtualForOf;
_defineProperty(CdkVirtualForOf, "ɵfac", function CdkVirtualForOf_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _CdkVirtualForOf)();
});
_defineProperty(CdkVirtualForOf, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _CdkVirtualForOf,
	selectors: [[
		"",
		"cdkVirtualFor",
		"",
		"cdkVirtualForOf",
		""
	]],
	inputs: {
		cdkVirtualForOf: "cdkVirtualForOf",
		cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
		cdkVirtualForTemplate: "cdkVirtualForTemplate",
		cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
	}
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
		type: Directive,
		args: [{ selector: "[cdkVirtualFor][cdkVirtualForOf]" }]
	}], () => [], {
		cdkVirtualForOf: [{ type: Input }],
		cdkVirtualForTrackBy: [{ type: Input }],
		cdkVirtualForTemplate: [{ type: Input }],
		cdkVirtualForTemplateCacheSize: [{ type: Input }]
	});
})();
var CdkVirtualScrollableElement = class extends CdkVirtualScrollable {
	measureBoundingClientRectWithScrollOffset(from) {
		return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
	}
};
_CdkVirtualScrollableElement = CdkVirtualScrollableElement;
_defineProperty(CdkVirtualScrollableElement, "ɵfac", /* @__PURE__ */ (() => {
	let ɵCdkVirtualScrollableElement_BaseFactory;
	return function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
		return (ɵCdkVirtualScrollableElement_BaseFactory || (ɵCdkVirtualScrollableElement_BaseFactory = ɵɵgetInheritedFactory(_CdkVirtualScrollableElement)))(__ngFactoryType__ || _CdkVirtualScrollableElement);
	};
})());
_defineProperty(CdkVirtualScrollableElement, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _CdkVirtualScrollableElement,
	selectors: [[
		"",
		"cdkVirtualScrollingElement",
		""
	]],
	hostAttrs: [1, "cdk-virtual-scrollable"],
	features: [ɵɵProvidersFeature([{
		provide: VIRTUAL_SCROLLABLE,
		useExisting: _CdkVirtualScrollableElement
	}]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
		type: Directive,
		args: [{
			selector: "[cdkVirtualScrollingElement]",
			providers: [{
				provide: VIRTUAL_SCROLLABLE,
				useExisting: CdkVirtualScrollableElement
			}],
			host: { "class": "cdk-virtual-scrollable" }
		}]
	}], null, null);
})();
var CdkVirtualScrollableWindow = class extends CdkVirtualScrollable {
	constructor() {
		super();
		const document = inject(DOCUMENT);
		this.elementRef = new ElementRef(document.documentElement);
		this._scrollElement = document;
	}
	measureBoundingClientRectWithScrollOffset(from) {
		return this.getElementRef().nativeElement.getBoundingClientRect()[from];
	}
};
_CdkVirtualScrollableWindow = CdkVirtualScrollableWindow;
_defineProperty(CdkVirtualScrollableWindow, "ɵfac", function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)();
});
_defineProperty(CdkVirtualScrollableWindow, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _CdkVirtualScrollableWindow,
	selectors: [[
		"cdk-virtual-scroll-viewport",
		"scrollWindow",
		""
	]],
	features: [ɵɵProvidersFeature([{
		provide: VIRTUAL_SCROLLABLE,
		useExisting: _CdkVirtualScrollableWindow
	}]), ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
		type: Directive,
		args: [{
			selector: "cdk-virtual-scroll-viewport[scrollWindow]",
			providers: [{
				provide: VIRTUAL_SCROLLABLE,
				useExisting: CdkVirtualScrollableWindow
			}]
		}]
	}], () => [], null);
})();
var CdkScrollableModule = class {};
_CdkScrollableModule = CdkScrollableModule;
_defineProperty(CdkScrollableModule, "ɵfac", function CdkScrollableModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _CdkScrollableModule)();
});
_defineProperty(CdkScrollableModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _CdkScrollableModule,
	imports: [CdkScrollable],
	exports: [CdkScrollable]
}));
_defineProperty(CdkScrollableModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
		type: NgModule,
		args: [{
			exports: [CdkScrollable],
			imports: [CdkScrollable]
		}]
	}], null, null);
})();
var ScrollingModule = class {};
_ScrollingModule = ScrollingModule;
_defineProperty(ScrollingModule, "ɵfac", function ScrollingModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ScrollingModule)();
});
_defineProperty(ScrollingModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _ScrollingModule,
	imports: [
		BidiModule,
		CdkScrollableModule,
		CdkVirtualScrollViewport,
		CdkFixedSizeVirtualScroll,
		CdkVirtualForOf,
		CdkVirtualScrollableWindow,
		CdkVirtualScrollableElement
	],
	exports: [
		BidiModule,
		CdkScrollableModule,
		CdkFixedSizeVirtualScroll,
		CdkVirtualForOf,
		CdkVirtualScrollViewport,
		CdkVirtualScrollableWindow,
		CdkVirtualScrollableElement
	]
}));
_defineProperty(ScrollingModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({ imports: [
	BidiModule,
	CdkScrollableModule,
	BidiModule,
	CdkScrollableModule
] }));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
		type: NgModule,
		args: [{
			imports: [
				BidiModule,
				CdkScrollableModule,
				CdkVirtualScrollViewport,
				CdkFixedSizeVirtualScroll,
				CdkVirtualForOf,
				CdkVirtualScrollableWindow,
				CdkVirtualScrollableElement
			],
			exports: [
				BidiModule,
				CdkScrollableModule,
				CdkFixedSizeVirtualScroll,
				CdkVirtualForOf,
				CdkVirtualScrollViewport,
				CdkVirtualScrollableWindow,
				CdkVirtualScrollableElement
			]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_id-generator-chunk.mjs
var _IdGenerator2;
var counters = /* @__PURE__ */ new Map();
var _IdGenerator = class _IdGenerator {
	constructor() {
		_defineProperty(this, "_appId", inject(APP_ID));
	}
	getId(prefix, randomize = false) {
		if (this._appId !== "ng") prefix += this._appId;
		let count = counters.get(prefix);
		if (count === void 0) count = 0;
		else count++;
		counters.set(prefix, count);
		return `${prefix}${randomize ? _IdGenerator._infix + "-" : ""}${count}`;
	}
};
_IdGenerator2 = _IdGenerator;
_defineProperty(_IdGenerator, "_infix", `a${Math.floor(Math.random() * 1e5).toString()}`);
_defineProperty(_IdGenerator, "ɵfac", function _IdGenerator_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _IdGenerator2)();
});
_defineProperty(_IdGenerator, "ɵprov", /* @__PURE__ */ ɵɵdefineService({
	token: _IdGenerator2,
	factory: _IdGenerator2.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_IdGenerator, [{ type: Service }], null, null);
})();
//#endregion
//#region node_modules/@angular/cdk/fesm2022/portal.mjs
var _CdkPortal;
var _CdkPortalOutlet;
var _PortalModule;
function throwNullPortalError() {
	throw Error("Must provide a portal to attach");
}
function throwPortalAlreadyAttachedError() {
	throw Error("Host already has a portal attached");
}
function throwPortalOutletAlreadyDisposedError() {
	throw Error("This PortalOutlet has already been disposed");
}
function throwUnknownPortalTypeError() {
	throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.");
}
function throwNullPortalOutletError() {
	throw Error("Attempting to attach a portal to a null PortalOutlet");
}
function throwNoPortalAttachedError() {
	throw Error("Attempting to detach a portal that is not attached to a host");
}
var Portal = class {
	constructor() {
		_defineProperty(this, "_attachedHost", null);
	}
	attach(host) {
		if (typeof ngDevMode === "undefined" || ngDevMode) {
			if (host == null) throwNullPortalOutletError();
			if (host.hasAttached()) throwPortalAlreadyAttachedError();
		}
		this._attachedHost = host;
		return host.attach(this);
	}
	detach() {
		let host = this._attachedHost;
		if (host != null) {
			this._attachedHost = null;
			host.detach();
		} else if (typeof ngDevMode === "undefined" || ngDevMode) throwNoPortalAttachedError();
	}
	get isAttached() {
		return this._attachedHost != null;
	}
	setAttachedHost(host) {
		this._attachedHost = host;
	}
};
var ComponentPortal = class extends Portal {
	constructor(component, viewContainerRef, injector, projectableNodes, bindings, directives) {
		super();
		_defineProperty(this, "component", void 0);
		_defineProperty(this, "viewContainerRef", void 0);
		_defineProperty(this, "injector", void 0);
		_defineProperty(this, "projectableNodes", void 0);
		_defineProperty(this, "bindings", void 0);
		_defineProperty(this, "directives", void 0);
		this.component = component;
		this.viewContainerRef = viewContainerRef;
		this.injector = injector;
		this.projectableNodes = projectableNodes;
		this.bindings = bindings || null;
		this.directives = directives || null;
	}
};
var TemplatePortal = class extends Portal {
	constructor(templateRef, viewContainerRef, context, injector) {
		super();
		_defineProperty(this, "templateRef", void 0);
		_defineProperty(this, "viewContainerRef", void 0);
		_defineProperty(this, "context", void 0);
		_defineProperty(this, "injector", void 0);
		this.templateRef = templateRef;
		this.viewContainerRef = viewContainerRef;
		this.context = context;
		this.injector = injector;
	}
	get origin() {
		return this.templateRef.elementRef;
	}
	attach(host, context = this.context) {
		this.context = context;
		return super.attach(host);
	}
	detach() {
		this.context = void 0;
		return super.detach();
	}
};
var DomPortal = class extends Portal {
	constructor(element) {
		super();
		_defineProperty(this, "element", void 0);
		this.element = element instanceof ElementRef ? element.nativeElement : element;
	}
};
var BasePortalOutlet = class {
	constructor() {
		_defineProperty(this, "_attachedPortal", null);
		_defineProperty(this, "_disposeFn", null);
		_defineProperty(this, "_isDisposed", false);
		_defineProperty(this, "attachDomPortal", null);
	}
	hasAttached() {
		return !!this._attachedPortal;
	}
	attach(portal) {
		if (typeof ngDevMode === "undefined" || ngDevMode) {
			if (!portal) throwNullPortalError();
			if (this.hasAttached()) throwPortalAlreadyAttachedError();
			if (this._isDisposed) throwPortalOutletAlreadyDisposedError();
		}
		if (portal instanceof ComponentPortal) {
			this._attachedPortal = portal;
			return this.attachComponentPortal(portal);
		} else if (portal instanceof TemplatePortal) {
			this._attachedPortal = portal;
			return this.attachTemplatePortal(portal);
		} else if (this.attachDomPortal && portal instanceof DomPortal) {
			this._attachedPortal = portal;
			return this.attachDomPortal(portal);
		}
		if (typeof ngDevMode === "undefined" || ngDevMode) throwUnknownPortalTypeError();
	}
	detach() {
		if (this._attachedPortal) {
			this._attachedPortal.setAttachedHost(null);
			this._attachedPortal = null;
		}
		this._invokeDisposeFn();
	}
	dispose() {
		if (this.hasAttached()) this.detach();
		this._invokeDisposeFn();
		this._isDisposed = true;
	}
	setDisposeFn(fn) {
		this._disposeFn = fn;
	}
	_invokeDisposeFn() {
		if (this._disposeFn) {
			this._disposeFn();
			this._disposeFn = null;
		}
	}
};
var DomPortalOutlet = class extends BasePortalOutlet {
	constructor(outletElement, _appRef, _defaultInjector) {
		super();
		_defineProperty(this, "outletElement", void 0);
		_defineProperty(this, "_appRef", void 0);
		_defineProperty(this, "_defaultInjector", void 0);
		_defineProperty(this, "attachDomPortal", (portal) => {
			const element = portal.element;
			if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) throw Error("DOM portal content must be attached to a parent node.");
			const anchorNode = this.outletElement.ownerDocument.createComment("dom-portal");
			element.parentNode.insertBefore(anchorNode, element);
			this.outletElement.appendChild(element);
			this._attachedPortal = portal;
			super.setDisposeFn(() => {
				if (anchorNode.parentNode) anchorNode.parentNode.replaceChild(element, anchorNode);
			});
		});
		this.outletElement = outletElement;
		this._appRef = _appRef;
		this._defaultInjector = _defaultInjector;
	}
	attachComponentPortal(portal) {
		let componentRef;
		if (portal.viewContainerRef) {
			const injector = portal.injector || portal.viewContainerRef.injector;
			const ngModuleRef = injector.get(NgModuleRef$1, null, { optional: true }) || void 0;
			componentRef = portal.viewContainerRef.createComponent(portal.component, {
				index: portal.viewContainerRef.length,
				injector,
				ngModuleRef,
				projectableNodes: portal.projectableNodes || void 0,
				bindings: portal.bindings || void 0,
				directives: portal.directives || void 0
			});
			this.setDisposeFn(() => componentRef.destroy());
		} else {
			if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._appRef) throw Error("Cannot attach component portal to outlet without an ApplicationRef.");
			const appRef = this._appRef;
			const elementInjector = portal.injector || this._defaultInjector || Injector.NULL;
			const environmentInjector = elementInjector.get(EnvironmentInjector, appRef.injector);
			componentRef = createComponent(portal.component, {
				elementInjector,
				environmentInjector,
				projectableNodes: portal.projectableNodes || void 0,
				bindings: portal.bindings || void 0,
				directives: portal.directives || void 0
			});
			appRef.attachView(componentRef.hostView);
			this.setDisposeFn(() => {
				if (appRef.viewCount > 0) appRef.detachView(componentRef.hostView);
				componentRef.destroy();
			});
		}
		this.outletElement.appendChild(this._getComponentRootNode(componentRef));
		this._attachedPortal = portal;
		return componentRef;
	}
	attachTemplatePortal(portal) {
		let viewContainer = portal.viewContainerRef;
		let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, { injector: portal.injector });
		viewRef.rootNodes.forEach((rootNode) => this.outletElement.appendChild(rootNode));
		viewRef.detectChanges();
		this.setDisposeFn(() => {
			let index = viewContainer.indexOf(viewRef);
			if (index !== -1) viewContainer.remove(index);
		});
		this._attachedPortal = portal;
		return viewRef;
	}
	dispose() {
		super.dispose();
		this.outletElement.remove();
	}
	_getComponentRootNode(componentRef) {
		return componentRef.hostView.rootNodes[0];
	}
};
var CdkPortal = class extends TemplatePortal {
	constructor() {
		const templateRef = inject(TemplateRef);
		const viewContainerRef = inject(ViewContainerRef);
		super(templateRef, viewContainerRef);
	}
};
_CdkPortal = CdkPortal;
_defineProperty(CdkPortal, "ɵfac", function CdkPortal_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _CdkPortal)();
});
_defineProperty(CdkPortal, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _CdkPortal,
	selectors: [[
		"",
		"cdkPortal",
		""
	]],
	exportAs: ["cdkPortal"],
	features: [ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortal, [{
		type: Directive,
		args: [{
			selector: "[cdkPortal]",
			exportAs: "cdkPortal"
		}]
	}], () => [], null);
})();
var CdkPortalOutlet = class extends BasePortalOutlet {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "_moduleRef", inject(NgModuleRef$1, { optional: true }));
		_defineProperty(this, "_document", inject(DOCUMENT));
		_defineProperty(this, "_viewContainerRef", inject(ViewContainerRef));
		_defineProperty(this, "_isInitialized", false);
		_defineProperty(this, "_attachedRef", null);
		_defineProperty(this, "attached", new EventEmitter());
		_defineProperty(this, "attachDomPortal", (portal) => {
			const element = portal.element;
			if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) throw Error("DOM portal content must be attached to a parent node.");
			const anchorNode = this._document.createComment("dom-portal");
			portal.setAttachedHost(this);
			element.parentNode.insertBefore(anchorNode, element);
			this._getRootNode().appendChild(element);
			this._attachedPortal = portal;
			super.setDisposeFn(() => {
				if (anchorNode.parentNode) anchorNode.parentNode.replaceChild(element, anchorNode);
			});
		});
	}
	get portal() {
		return this._attachedPortal;
	}
	set portal(portal) {
		if (this.hasAttached() && !portal && !this._isInitialized) return;
		if (this.hasAttached()) super.detach();
		if (portal) super.attach(portal);
		this._attachedPortal = portal || null;
	}
	get attachedRef() {
		return this._attachedRef;
	}
	ngOnInit() {
		this._isInitialized = true;
	}
	ngOnDestroy() {
		super.dispose();
		this._attachedRef = this._attachedPortal = null;
	}
	attachComponentPortal(portal) {
		portal.setAttachedHost(this);
		const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
		const ref = viewContainerRef.createComponent(portal.component, {
			index: viewContainerRef.length,
			injector: portal.injector || viewContainerRef.injector,
			projectableNodes: portal.projectableNodes || void 0,
			ngModuleRef: this._moduleRef || void 0,
			bindings: portal.bindings || void 0,
			directives: portal.directives || void 0
		});
		if (viewContainerRef !== this._viewContainerRef) this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
		super.setDisposeFn(() => ref.destroy());
		this._attachedPortal = portal;
		this._attachedRef = ref;
		this.attached.emit(ref);
		return ref;
	}
	attachTemplatePortal(portal) {
		portal.setAttachedHost(this);
		const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, { injector: portal.injector });
		super.setDisposeFn(() => this._viewContainerRef.clear());
		this._attachedPortal = portal;
		this._attachedRef = viewRef;
		this.attached.emit(viewRef);
		return viewRef;
	}
	_getRootNode() {
		const nativeElement = this._viewContainerRef.element.nativeElement;
		return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
	}
};
_CdkPortalOutlet = CdkPortalOutlet;
_defineProperty(CdkPortalOutlet, "ɵfac", /* @__PURE__ */ (() => {
	let ɵCdkPortalOutlet_BaseFactory;
	return function CdkPortalOutlet_Factory(__ngFactoryType__) {
		return (ɵCdkPortalOutlet_BaseFactory || (ɵCdkPortalOutlet_BaseFactory = ɵɵgetInheritedFactory(_CdkPortalOutlet)))(__ngFactoryType__ || _CdkPortalOutlet);
	};
})());
_defineProperty(CdkPortalOutlet, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _CdkPortalOutlet,
	selectors: [[
		"",
		"cdkPortalOutlet",
		""
	]],
	inputs: { portal: [
		0,
		"cdkPortalOutlet",
		"portal"
	] },
	outputs: { attached: "attached" },
	exportAs: ["cdkPortalOutlet"],
	features: [ɵɵInheritDefinitionFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortalOutlet, [{
		type: Directive,
		args: [{
			selector: "[cdkPortalOutlet]",
			exportAs: "cdkPortalOutlet"
		}]
	}], null, {
		portal: [{
			type: Input,
			args: ["cdkPortalOutlet"]
		}],
		attached: [{ type: Output }]
	});
})();
var PortalModule = class {};
_PortalModule = PortalModule;
_defineProperty(PortalModule, "ɵfac", function PortalModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _PortalModule)();
});
_defineProperty(PortalModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _PortalModule,
	imports: [CdkPortal, CdkPortalOutlet],
	exports: [CdkPortal, CdkPortalOutlet]
}));
_defineProperty(PortalModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalModule, [{
		type: NgModule,
		args: [{
			imports: [CdkPortal, CdkPortalOutlet],
			exports: [CdkPortal, CdkPortalOutlet]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@angular/cdk/fesm2022/_overlay-module-chunk.mjs
var _ScrollStrategyOptions;
var _BaseOverlayDispatcher;
var _OverlayKeyboardDispatcher;
var _OverlayOutsideClickDispatcher;
var _CdkOverlayStyleLoader2;
var _OverlayContainer;
var _OverlayPositionBuilder;
var _Overlay;
var _CdkOverlayOrigin;
var _CdkConnectedOverlay;
var _OverlayModule;
var scrollBehaviorSupported = supportsScrollBehavior();
function createBlockScrollStrategy(injector) {
	return new BlockScrollStrategy(injector.get(ViewportRuler), injector.get(DOCUMENT));
}
var BlockScrollStrategy = class {
	constructor(_viewportRuler, document) {
		_defineProperty(this, "_viewportRuler", void 0);
		_defineProperty(this, "_previousHTMLStyles", {
			top: "",
			left: ""
		});
		_defineProperty(this, "_previousScrollPosition", void 0);
		_defineProperty(this, "_isEnabled", false);
		_defineProperty(this, "_document", void 0);
		this._viewportRuler = _viewportRuler;
		this._document = document;
	}
	attach() {}
	enable() {
		if (this._canBeEnabled()) {
			const root = this._document.documentElement;
			this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
			this._previousHTMLStyles.left = root.style.left || "";
			this._previousHTMLStyles.top = root.style.top || "";
			root.style.left = coerceCssPixelValue(-this._previousScrollPosition.left);
			root.style.top = coerceCssPixelValue(-this._previousScrollPosition.top);
			root.classList.add("cdk-global-scrollblock");
			this._isEnabled = true;
		}
	}
	disable() {
		if (this._isEnabled) {
			const html = this._document.documentElement;
			const body = this._document.body;
			const htmlStyle = html.style;
			const bodyStyle = body.style;
			const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || "";
			const previousBodyScrollBehavior = bodyStyle.scrollBehavior || "";
			this._isEnabled = false;
			htmlStyle.left = this._previousHTMLStyles.left;
			htmlStyle.top = this._previousHTMLStyles.top;
			html.classList.remove("cdk-global-scrollblock");
			if (scrollBehaviorSupported) htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = "auto";
			window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
			if (scrollBehaviorSupported) {
				htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
				bodyStyle.scrollBehavior = previousBodyScrollBehavior;
			}
		}
	}
	_canBeEnabled() {
		if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled) return false;
		const rootElement = this._document.documentElement;
		const viewport = this._viewportRuler.getViewportSize();
		return rootElement.scrollHeight > viewport.height || rootElement.scrollWidth > viewport.width;
	}
};
function getMatScrollStrategyAlreadyAttachedError() {
	return Error(`Scroll strategy has already been attached.`);
}
function createCloseScrollStrategy(injector, config) {
	return new CloseScrollStrategy(injector.get(ScrollDispatcher), injector.get(NgZone), injector.get(ViewportRuler), config);
}
var CloseScrollStrategy = class {
	constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
		_defineProperty(this, "_scrollDispatcher", void 0);
		_defineProperty(this, "_ngZone", void 0);
		_defineProperty(this, "_viewportRuler", void 0);
		_defineProperty(this, "_config", void 0);
		_defineProperty(this, "_scrollSubscription", null);
		_defineProperty(this, "_overlayRef", void 0);
		_defineProperty(this, "_initialScrollPosition", void 0);
		_defineProperty(this, "_detach", () => {
			this.disable();
			if (this._overlayRef.hasAttached()) this._ngZone.run(() => this._overlayRef.detach());
		});
		this._scrollDispatcher = _scrollDispatcher;
		this._ngZone = _ngZone;
		this._viewportRuler = _viewportRuler;
		this._config = _config;
	}
	attach(overlayRef) {
		if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) throw getMatScrollStrategyAlreadyAttachedError();
		this._overlayRef = overlayRef;
	}
	enable() {
		if (this._scrollSubscription) return;
		const stream = this._scrollDispatcher.scrolled(0).pipe(filter((scrollable) => {
			return !scrollable || !this._overlayRef.overlayElement.contains(scrollable.getElementRef().nativeElement);
		}));
		if (this._config && this._config.threshold && this._config.threshold > 1) {
			this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
			this._scrollSubscription = stream.subscribe(() => {
				const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
				if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) this._detach();
				else this._overlayRef.updatePosition();
			});
		} else this._scrollSubscription = stream.subscribe(this._detach);
	}
	disable() {
		if (this._scrollSubscription) {
			this._scrollSubscription.unsubscribe();
			this._scrollSubscription = null;
		}
	}
	detach() {
		this.disable();
		this._overlayRef = null;
	}
};
var NoopScrollStrategy = class {
	enable() {}
	disable() {}
	attach() {}
};
function isElementScrolledOutsideView(element, scrollContainers) {
	return scrollContainers.some((containerBounds) => {
		const outsideAbove = element.bottom < containerBounds.top;
		const outsideBelow = element.top > containerBounds.bottom;
		const outsideLeft = element.right < containerBounds.left;
		const outsideRight = element.left > containerBounds.right;
		return outsideAbove || outsideBelow || outsideLeft || outsideRight;
	});
}
function isElementClippedByScrolling(element, scrollContainers) {
	return scrollContainers.some((scrollContainerRect) => {
		const clippedAbove = element.top < scrollContainerRect.top;
		const clippedBelow = element.bottom > scrollContainerRect.bottom;
		const clippedLeft = element.left < scrollContainerRect.left;
		const clippedRight = element.right > scrollContainerRect.right;
		return clippedAbove || clippedBelow || clippedLeft || clippedRight;
	});
}
function createRepositionScrollStrategy(injector, config) {
	return new RepositionScrollStrategy(injector.get(ScrollDispatcher), injector.get(ViewportRuler), injector.get(NgZone), config);
}
var RepositionScrollStrategy = class {
	constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
		_defineProperty(this, "_scrollDispatcher", void 0);
		_defineProperty(this, "_viewportRuler", void 0);
		_defineProperty(this, "_ngZone", void 0);
		_defineProperty(this, "_config", void 0);
		_defineProperty(this, "_scrollSubscription", null);
		_defineProperty(this, "_overlayRef", void 0);
		this._scrollDispatcher = _scrollDispatcher;
		this._viewportRuler = _viewportRuler;
		this._ngZone = _ngZone;
		this._config = _config;
	}
	attach(overlayRef) {
		if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) throw getMatScrollStrategyAlreadyAttachedError();
		this._overlayRef = overlayRef;
	}
	enable() {
		if (!this._scrollSubscription) {
			const throttle = this._config ? this._config.scrollThrottle : 0;
			this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
				this._overlayRef.updatePosition();
				if (this._config && this._config.autoClose) {
					const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
					const { width, height } = this._viewportRuler.getViewportSize();
					if (isElementScrolledOutsideView(overlayRect, [{
						width,
						height,
						bottom: height,
						right: width,
						top: 0,
						left: 0
					}])) {
						this.disable();
						this._ngZone.run(() => this._overlayRef.detach());
					}
				}
			});
		}
	}
	disable() {
		if (this._scrollSubscription) {
			this._scrollSubscription.unsubscribe();
			this._scrollSubscription = null;
		}
	}
	detach() {
		this.disable();
		this._overlayRef = null;
	}
};
var ScrollStrategyOptions = class {
	constructor() {
		_defineProperty(this, "_injector", inject(Injector));
		_defineProperty(this, "noop", () => new NoopScrollStrategy());
		_defineProperty(this, "close", (config) => createCloseScrollStrategy(this._injector, config));
		_defineProperty(this, "block", () => createBlockScrollStrategy(this._injector));
		_defineProperty(this, "reposition", (config) => createRepositionScrollStrategy(this._injector, config));
	}
};
_ScrollStrategyOptions = ScrollStrategyOptions;
_defineProperty(ScrollStrategyOptions, "ɵfac", function ScrollStrategyOptions_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _ScrollStrategyOptions)();
});
_defineProperty(ScrollStrategyOptions, "ɵprov", /* @__PURE__ */ ɵɵdefineService({
	token: _ScrollStrategyOptions,
	factory: _ScrollStrategyOptions.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollStrategyOptions, [{ type: Service }], null, null);
})();
var OverlayConfig = class {
	constructor(config) {
		_defineProperty(this, "positionStrategy", void 0);
		_defineProperty(this, "scrollStrategy", new NoopScrollStrategy());
		_defineProperty(this, "panelClass", "");
		_defineProperty(this, "hasBackdrop", false);
		_defineProperty(this, "backdropClass", "cdk-overlay-dark-backdrop");
		_defineProperty(this, "disableAnimations", void 0);
		_defineProperty(this, "width", void 0);
		_defineProperty(this, "height", void 0);
		_defineProperty(this, "minWidth", void 0);
		_defineProperty(this, "minHeight", void 0);
		_defineProperty(this, "maxWidth", void 0);
		_defineProperty(this, "maxHeight", void 0);
		_defineProperty(this, "direction", void 0);
		_defineProperty(this, "disposeOnNavigation", false);
		_defineProperty(this, "usePopover", void 0);
		_defineProperty(this, "eventPredicate", void 0);
		if (config) {
			const configKeys = Object.keys(config);
			for (const key of configKeys) if (config[key] !== void 0) this[key] = config[key];
		}
	}
};
var ConnectionPositionPair = class {
	constructor(origin, overlay, offsetX, offsetY, panelClass) {
		_defineProperty(this, "offsetX", void 0);
		_defineProperty(this, "offsetY", void 0);
		_defineProperty(this, "panelClass", void 0);
		_defineProperty(this, "originX", void 0);
		_defineProperty(this, "originY", void 0);
		_defineProperty(this, "overlayX", void 0);
		_defineProperty(this, "overlayY", void 0);
		this.offsetX = offsetX;
		this.offsetY = offsetY;
		this.panelClass = panelClass;
		this.originX = origin.originX;
		this.originY = origin.originY;
		this.overlayX = overlay.overlayX;
		this.overlayY = overlay.overlayY;
	}
};
var ConnectedOverlayPositionChange = class {
	constructor(connectionPair, scrollableViewProperties) {
		_defineProperty(this, "connectionPair", void 0);
		_defineProperty(this, "scrollableViewProperties", void 0);
		this.connectionPair = connectionPair;
		this.scrollableViewProperties = scrollableViewProperties;
	}
};
function validateVerticalPosition(property, value) {
	if (value !== "top" && value !== "bottom" && value !== "center") throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "top", "bottom" or "center".`);
}
function validateHorizontalPosition(property, value) {
	if (value !== "start" && value !== "end" && value !== "center") throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "start", "end" or "center".`);
}
var BaseOverlayDispatcher = class {
	constructor() {
		_defineProperty(this, "_attachedOverlays", []);
		_defineProperty(this, "_document", inject(DOCUMENT));
		_defineProperty(this, "_isAttached", false);
	}
	ngOnDestroy() {
		this.detach();
	}
	add(overlayRef) {
		this.remove(overlayRef);
		this._attachedOverlays.push(overlayRef);
	}
	remove(overlayRef) {
		const index = this._attachedOverlays.indexOf(overlayRef);
		if (index > -1) this._attachedOverlays.splice(index, 1);
		if (this._attachedOverlays.length === 0) this.detach();
	}
	canReceiveEvent(overlayRef, event, stream) {
		if (stream.observers.length < 1) return false;
		if (overlayRef.eventPredicate) return overlayRef.eventPredicate(event);
		return true;
	}
};
_BaseOverlayDispatcher = BaseOverlayDispatcher;
_defineProperty(BaseOverlayDispatcher, "ɵfac", function BaseOverlayDispatcher_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _BaseOverlayDispatcher)();
});
_defineProperty(BaseOverlayDispatcher, "ɵprov", /* @__PURE__ */ ɵɵdefineService({
	token: _BaseOverlayDispatcher,
	factory: _BaseOverlayDispatcher.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseOverlayDispatcher, [{ type: Service }], null, null);
})();
var OverlayKeyboardDispatcher = class extends BaseOverlayDispatcher {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "_ngZone", inject(NgZone));
		_defineProperty(this, "_renderer", inject(RendererFactory2).createRenderer(null, null));
		_defineProperty(this, "_cleanupKeydown", void 0);
		_defineProperty(this, "_keydownListener", (event) => {
			const overlays = this._attachedOverlays;
			for (let i = overlays.length - 1; i > -1; i--) {
				const overlayRef = overlays[i];
				if (this.canReceiveEvent(overlayRef, event, overlayRef._keydownEvents)) {
					this._ngZone.run(() => overlayRef._keydownEvents.next(event));
					break;
				}
			}
		});
	}
	add(overlayRef) {
		super.add(overlayRef);
		if (!this._isAttached) {
			this._ngZone.runOutsideAngular(() => {
				this._cleanupKeydown = this._renderer.listen("body", "keydown", this._keydownListener);
			});
			this._isAttached = true;
		}
	}
	detach() {
		if (this._isAttached) {
			var _this$_cleanupKeydown;
			(_this$_cleanupKeydown = this._cleanupKeydown) === null || _this$_cleanupKeydown === void 0 || _this$_cleanupKeydown.call(this);
			this._isAttached = false;
		}
	}
};
_OverlayKeyboardDispatcher = OverlayKeyboardDispatcher;
_defineProperty(OverlayKeyboardDispatcher, "ɵfac", function OverlayKeyboardDispatcher_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _OverlayKeyboardDispatcher)();
});
_defineProperty(OverlayKeyboardDispatcher, "ɵprov", /* @__PURE__ */ ɵɵdefineService({
	token: _OverlayKeyboardDispatcher,
	factory: _OverlayKeyboardDispatcher.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayKeyboardDispatcher, [{ type: Service }], null, null);
})();
var OverlayOutsideClickDispatcher = class extends BaseOverlayDispatcher {
	constructor(..._args2) {
		super(..._args2);
		_defineProperty(this, "_platform", inject(Platform));
		_defineProperty(this, "_ngZone", inject(NgZone));
		_defineProperty(this, "_renderer", inject(RendererFactory2).createRenderer(null, null));
		_defineProperty(this, "_cursorOriginalValue", void 0);
		_defineProperty(this, "_cursorStyleIsSet", false);
		_defineProperty(this, "_pointerDownEventTarget", null);
		_defineProperty(this, "_cleanups", void 0);
		_defineProperty(this, "_pointerDownListener", (event) => {
			this._pointerDownEventTarget = _getEventTarget(event);
		});
		_defineProperty(this, "_clickListener", (event) => {
			const target = _getEventTarget(event);
			const origin = event.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : target;
			this._pointerDownEventTarget = null;
			const overlays = this._attachedOverlays.slice();
			for (let i = overlays.length - 1; i > -1; i--) {
				const overlayRef = overlays[i];
				const outsidePointerEvents = overlayRef._outsidePointerEvents;
				if (!overlayRef.hasAttached() || !this.canReceiveEvent(overlayRef, event, outsidePointerEvents)) continue;
				if (containsPierceShadowDom(overlayRef.overlayElement, target) || containsPierceShadowDom(overlayRef.overlayElement, origin)) break;
				if (this._ngZone) this._ngZone.run(() => outsidePointerEvents.next(event));
				else outsidePointerEvents.next(event);
			}
		});
	}
	add(overlayRef) {
		super.add(overlayRef);
		if (!this._isAttached) {
			const body = this._document.body;
			const eventOptions = { capture: true };
			const renderer = this._renderer;
			this._cleanups = this._ngZone.runOutsideAngular(() => [
				renderer.listen(body, "pointerdown", this._pointerDownListener, eventOptions),
				renderer.listen(body, "click", this._clickListener, eventOptions),
				renderer.listen(body, "auxclick", this._clickListener, eventOptions),
				renderer.listen(body, "contextmenu", this._clickListener, eventOptions)
			]);
			if (this._platform.IOS && !this._cursorStyleIsSet) {
				this._cursorOriginalValue = body.style.cursor;
				body.style.cursor = "pointer";
				this._cursorStyleIsSet = true;
			}
			this._isAttached = true;
		}
	}
	detach() {
		if (this._isAttached) {
			var _this$_cleanups;
			(_this$_cleanups = this._cleanups) === null || _this$_cleanups === void 0 || _this$_cleanups.forEach((cleanup) => cleanup());
			this._cleanups = void 0;
			if (this._platform.IOS && this._cursorStyleIsSet) {
				this._document.body.style.cursor = this._cursorOriginalValue;
				this._cursorStyleIsSet = false;
			}
			this._isAttached = false;
		}
	}
};
_OverlayOutsideClickDispatcher = OverlayOutsideClickDispatcher;
_defineProperty(OverlayOutsideClickDispatcher, "ɵfac", function OverlayOutsideClickDispatcher_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _OverlayOutsideClickDispatcher)();
});
_defineProperty(OverlayOutsideClickDispatcher, "ɵprov", /* @__PURE__ */ ɵɵdefineService({
	token: _OverlayOutsideClickDispatcher,
	factory: _OverlayOutsideClickDispatcher.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayOutsideClickDispatcher, [{ type: Service }], null, null);
})();
function containsPierceShadowDom(parent, child) {
	const supportsShadowRoot = typeof ShadowRoot !== "undefined" && ShadowRoot;
	let current = child;
	while (current) {
		if (current === parent) return true;
		current = supportsShadowRoot && current instanceof ShadowRoot ? current.host : current.parentNode;
	}
	return false;
}
var _CdkOverlayStyleLoader = class {};
_CdkOverlayStyleLoader2 = _CdkOverlayStyleLoader;
_defineProperty(_CdkOverlayStyleLoader, "ɵfac", function _CdkOverlayStyleLoader_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _CdkOverlayStyleLoader2)();
});
_defineProperty(_CdkOverlayStyleLoader, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _CdkOverlayStyleLoader2,
	selectors: [["ng-component"]],
	hostAttrs: ["cdk-overlay-style-loader", ""],
	decls: 0,
	vars: 0,
	template: function _CdkOverlayStyleLoader_Template(rf, ctx) {},
	styles: [".cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container {\n  position: fixed;\n}\n@layer cdk-overlay {\n  .cdk-overlay-container {\n    z-index: 1000;\n  }\n}\n.cdk-overlay-container:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n}\n@layer cdk-overlay {\n  .cdk-global-overlay-wrapper {\n    z-index: 1000;\n  }\n}\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n@layer cdk-overlay {\n  .cdk-overlay-pane {\n    z-index: 1000;\n  }\n}\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  opacity: 0;\n  touch-action: manipulation;\n}\n@layer cdk-overlay {\n  .cdk-overlay-backdrop {\n    z-index: 1000;\n    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  }\n}\n@media (prefers-reduced-motion) {\n  .cdk-overlay-backdrop {\n    transition-duration: 1ms;\n  }\n}\n\n.cdk-overlay-backdrop-showing {\n  opacity: 1;\n}\n@media (forced-colors: active) {\n  .cdk-overlay-backdrop-showing {\n    opacity: 0.6;\n  }\n}\n\n@layer cdk-overlay {\n  .cdk-overlay-dark-backdrop {\n    background: rgba(0, 0, 0, 0.32);\n  }\n}\n\n.cdk-overlay-transparent-backdrop {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n@layer cdk-overlay {\n  .cdk-overlay-connected-position-bounding-box {\n    z-index: 1000;\n  }\n}\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\n.cdk-overlay-popover {\n  background: none;\n  border: none;\n  padding: 0;\n  outline: 0;\n  overflow: visible;\n  position: fixed;\n  pointer-events: none;\n  white-space: normal;\n  color: inherit;\n  text-decoration: none;\n  width: 100%;\n  height: 100%;\n  inset: auto;\n  top: 0;\n  left: 0;\n}\n.cdk-overlay-popover::backdrop {\n  display: none;\n}\n.cdk-overlay-popover .cdk-overlay-backdrop {\n  position: fixed;\n  z-index: auto;\n}\n"],
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkOverlayStyleLoader, [{
		type: Component,
		args: [{
			template: "",
			encapsulation: ViewEncapsulation.None,
			host: { "cdk-overlay-style-loader": "" },
			styles: [".cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container {\n  position: fixed;\n}\n@layer cdk-overlay {\n  .cdk-overlay-container {\n    z-index: 1000;\n  }\n}\n.cdk-overlay-container:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n}\n@layer cdk-overlay {\n  .cdk-global-overlay-wrapper {\n    z-index: 1000;\n  }\n}\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n@layer cdk-overlay {\n  .cdk-overlay-pane {\n    z-index: 1000;\n  }\n}\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  opacity: 0;\n  touch-action: manipulation;\n}\n@layer cdk-overlay {\n  .cdk-overlay-backdrop {\n    z-index: 1000;\n    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  }\n}\n@media (prefers-reduced-motion) {\n  .cdk-overlay-backdrop {\n    transition-duration: 1ms;\n  }\n}\n\n.cdk-overlay-backdrop-showing {\n  opacity: 1;\n}\n@media (forced-colors: active) {\n  .cdk-overlay-backdrop-showing {\n    opacity: 0.6;\n  }\n}\n\n@layer cdk-overlay {\n  .cdk-overlay-dark-backdrop {\n    background: rgba(0, 0, 0, 0.32);\n  }\n}\n\n.cdk-overlay-transparent-backdrop {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n@layer cdk-overlay {\n  .cdk-overlay-connected-position-bounding-box {\n    z-index: 1000;\n  }\n}\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\n.cdk-overlay-popover {\n  background: none;\n  border: none;\n  padding: 0;\n  outline: 0;\n  overflow: visible;\n  position: fixed;\n  pointer-events: none;\n  white-space: normal;\n  color: inherit;\n  text-decoration: none;\n  width: 100%;\n  height: 100%;\n  inset: auto;\n  top: 0;\n  left: 0;\n}\n.cdk-overlay-popover::backdrop {\n  display: none;\n}\n.cdk-overlay-popover .cdk-overlay-backdrop {\n  position: fixed;\n  z-index: auto;\n}\n"]
		}]
	}], null, null);
})();
var OverlayContainer = class {
	constructor() {
		_defineProperty(this, "_platform", inject(Platform));
		_defineProperty(this, "_containerElement", void 0);
		_defineProperty(this, "_document", inject(DOCUMENT));
		_defineProperty(this, "_styleLoader", inject(_CdkPrivateStyleLoader));
	}
	ngOnDestroy() {
		var _this$_containerEleme;
		(_this$_containerEleme = this._containerElement) === null || _this$_containerEleme === void 0 || _this$_containerEleme.remove();
	}
	getContainerElement() {
		this._loadStyles();
		if (!this._containerElement) this._createContainer();
		return this._containerElement;
	}
	_createContainer() {
		const containerClass = "cdk-overlay-container";
		if (this._platform.isBrowser || _isTestEnvironment()) {
			const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], .${containerClass}[platform="test"]`);
			for (let i = 0; i < oppositePlatformContainers.length; i++) oppositePlatformContainers[i].remove();
		}
		const container = this._document.createElement("div");
		container.classList.add(containerClass);
		if (_isTestEnvironment()) container.setAttribute("platform", "test");
		else if (!this._platform.isBrowser) container.setAttribute("platform", "server");
		this._document.body.appendChild(container);
		this._containerElement = container;
	}
	_loadStyles() {
		this._styleLoader.load(_CdkOverlayStyleLoader);
	}
};
_OverlayContainer = OverlayContainer;
_defineProperty(OverlayContainer, "ɵfac", function OverlayContainer_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _OverlayContainer)();
});
_defineProperty(OverlayContainer, "ɵprov", /* @__PURE__ */ ɵɵdefineService({
	token: _OverlayContainer,
	factory: _OverlayContainer.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayContainer, [{ type: Service }], null, null);
})();
var BackdropRef = class {
	constructor(document, _renderer, _ngZone, onClick) {
		_defineProperty(this, "_renderer", void 0);
		_defineProperty(this, "_ngZone", void 0);
		_defineProperty(this, "element", void 0);
		_defineProperty(this, "_cleanupClick", void 0);
		_defineProperty(this, "_cleanupTransitionEnd", void 0);
		_defineProperty(this, "_fallbackTimeout", void 0);
		_defineProperty(this, "dispose", () => {
			var _this$_cleanupClick, _this$_cleanupTransit;
			clearTimeout(this._fallbackTimeout);
			(_this$_cleanupClick = this._cleanupClick) === null || _this$_cleanupClick === void 0 || _this$_cleanupClick.call(this);
			(_this$_cleanupTransit = this._cleanupTransitionEnd) === null || _this$_cleanupTransit === void 0 || _this$_cleanupTransit.call(this);
			this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = void 0;
			this.element.remove();
		});
		this._renderer = _renderer;
		this._ngZone = _ngZone;
		this.element = document.createElement("div");
		this.element.classList.add("cdk-overlay-backdrop");
		this._cleanupClick = _renderer.listen(this.element, "click", onClick);
	}
	detach() {
		this._ngZone.runOutsideAngular(() => {
			var _this$_cleanupTransit2;
			const element = this.element;
			clearTimeout(this._fallbackTimeout);
			(_this$_cleanupTransit2 = this._cleanupTransitionEnd) === null || _this$_cleanupTransit2 === void 0 || _this$_cleanupTransit2.call(this);
			this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this.dispose);
			this._fallbackTimeout = setTimeout(this.dispose, 500);
			element.style.pointerEvents = "none";
			element.classList.remove("cdk-overlay-backdrop-showing");
		});
	}
};
function isElement(value) {
	return value && value.nodeType === 1;
}
var OverlayRef = class {
	constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher, _animationsDisabled = false, _injector, _renderer) {
		_defineProperty(this, "_portalOutlet", void 0);
		_defineProperty(this, "_host", void 0);
		_defineProperty(this, "_pane", void 0);
		_defineProperty(this, "_config", void 0);
		_defineProperty(this, "_ngZone", void 0);
		_defineProperty(this, "_keyboardDispatcher", void 0);
		_defineProperty(this, "_document", void 0);
		_defineProperty(this, "_location", void 0);
		_defineProperty(this, "_outsideClickDispatcher", void 0);
		_defineProperty(this, "_animationsDisabled", void 0);
		_defineProperty(this, "_injector", void 0);
		_defineProperty(this, "_renderer", void 0);
		_defineProperty(this, "_backdropClick", new Subject());
		_defineProperty(this, "_attachments", new Subject());
		_defineProperty(this, "_detachments", new Subject());
		_defineProperty(this, "_positionStrategy", void 0);
		_defineProperty(this, "_scrollStrategy", void 0);
		_defineProperty(this, "_locationChanges", Subscription.EMPTY);
		_defineProperty(this, "_backdropRef", null);
		_defineProperty(this, "_detachContentMutationObserver", void 0);
		_defineProperty(this, "_detachContentAfterRenderRef", void 0);
		_defineProperty(this, "_disposed", false);
		_defineProperty(this, "_previousHostParent", void 0);
		_defineProperty(this, "_keydownEvents", new Subject());
		_defineProperty(this, "_outsidePointerEvents", new Subject());
		_defineProperty(this, "_afterNextRenderRef", void 0);
		this._portalOutlet = _portalOutlet;
		this._host = _host;
		this._pane = _pane;
		this._config = _config;
		this._ngZone = _ngZone;
		this._keyboardDispatcher = _keyboardDispatcher;
		this._document = _document;
		this._location = _location;
		this._outsideClickDispatcher = _outsideClickDispatcher;
		this._animationsDisabled = _animationsDisabled;
		this._injector = _injector;
		this._renderer = _renderer;
		if (_config.scrollStrategy) {
			this._scrollStrategy = _config.scrollStrategy;
			this._scrollStrategy.attach(this);
		}
		this._positionStrategy = _config.positionStrategy;
	}
	get overlayElement() {
		return this._pane;
	}
	get backdropElement() {
		var _this$_backdropRef;
		return ((_this$_backdropRef = this._backdropRef) === null || _this$_backdropRef === void 0 ? void 0 : _this$_backdropRef.element) || null;
	}
	get hostElement() {
		return this._host;
	}
	get eventPredicate() {
		var _this$_config;
		return ((_this$_config = this._config) === null || _this$_config === void 0 ? void 0 : _this$_config.eventPredicate) || null;
	}
	attach(portal) {
		var _this$_positionStrate, _this$_afterNextRende;
		if (this._disposed) return null;
		this._attachHost();
		const attachResult = this._portalOutlet.attach(portal);
		(_this$_positionStrate = this._positionStrategy) === null || _this$_positionStrate === void 0 || _this$_positionStrate.attach(this);
		this._updateStackingOrder();
		this._updateElementSize();
		this._updateElementDirection();
		if (this._scrollStrategy) this._scrollStrategy.enable();
		(_this$_afterNextRende = this._afterNextRenderRef) === null || _this$_afterNextRende === void 0 || _this$_afterNextRende.destroy();
		this._afterNextRenderRef = afterNextRender(() => {
			if (this.hasAttached()) this.updatePosition();
		}, { injector: this._injector });
		this._togglePointerEvents(true);
		if (this._config.hasBackdrop) this._attachBackdrop();
		if (this._config.panelClass) this._toggleClasses(this._pane, this._config.panelClass, true);
		this._attachments.next();
		this._completeDetachContent();
		this._keyboardDispatcher.add(this);
		if (this._config.disposeOnNavigation) this._locationChanges = this._location.subscribe(() => this.dispose());
		this._outsideClickDispatcher.add(this);
		if (typeof (attachResult === null || attachResult === void 0 ? void 0 : attachResult.onDestroy) === "function") attachResult.onDestroy(() => {
			if (this.hasAttached()) this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
		});
		return attachResult;
	}
	detach() {
		if (!this.hasAttached()) return;
		this.detachBackdrop();
		this._togglePointerEvents(false);
		if (this._positionStrategy && this._positionStrategy.detach) this._positionStrategy.detach();
		if (this._scrollStrategy) this._scrollStrategy.disable();
		const detachmentResult = this._portalOutlet.detach();
		this._detachments.next();
		this._completeDetachContent();
		this._keyboardDispatcher.remove(this);
		this._detachContentWhenEmpty();
		this._locationChanges.unsubscribe();
		this._outsideClickDispatcher.remove(this);
		return detachmentResult;
	}
	dispose() {
		var _this$_backdropRef2, _this$_host, _this$_afterNextRende2;
		if (this._disposed) return;
		const isAttached = this.hasAttached();
		if (this._positionStrategy) this._positionStrategy.dispose();
		this._disposeScrollStrategy();
		(_this$_backdropRef2 = this._backdropRef) === null || _this$_backdropRef2 === void 0 || _this$_backdropRef2.dispose();
		this._locationChanges.unsubscribe();
		this._keyboardDispatcher.remove(this);
		this._portalOutlet.dispose();
		this._attachments.complete();
		this._backdropClick.complete();
		this._keydownEvents.complete();
		this._outsidePointerEvents.complete();
		this._outsideClickDispatcher.remove(this);
		(_this$_host = this._host) === null || _this$_host === void 0 || _this$_host.remove();
		(_this$_afterNextRende2 = this._afterNextRenderRef) === null || _this$_afterNextRende2 === void 0 || _this$_afterNextRende2.destroy();
		this._previousHostParent = this._pane = this._host = this._backdropRef = null;
		if (isAttached) this._detachments.next();
		this._detachments.complete();
		this._completeDetachContent();
		this._disposed = true;
	}
	hasAttached() {
		return this._portalOutlet.hasAttached();
	}
	backdropClick() {
		return this._backdropClick;
	}
	attachments() {
		return this._attachments;
	}
	detachments() {
		return this._detachments;
	}
	keydownEvents() {
		return this._keydownEvents;
	}
	outsidePointerEvents() {
		return this._outsidePointerEvents;
	}
	getConfig() {
		return this._config;
	}
	updatePosition() {
		if (this._positionStrategy) this._positionStrategy.apply();
	}
	updatePositionStrategy(strategy) {
		if (strategy === this._positionStrategy) return;
		if (this._positionStrategy) this._positionStrategy.dispose();
		this._positionStrategy = strategy;
		if (this.hasAttached()) {
			strategy.attach(this);
			this.updatePosition();
		}
	}
	updateSize(sizeConfig) {
		this._config = _objectSpread2(_objectSpread2({}, this._config), sizeConfig);
		this._updateElementSize();
	}
	setDirection(dir) {
		this._config = _objectSpread2(_objectSpread2({}, this._config), {}, { direction: dir });
		this._updateElementDirection();
	}
	addPanelClass(classes) {
		if (this._pane) this._toggleClasses(this._pane, classes, true);
	}
	removePanelClass(classes) {
		if (this._pane) this._toggleClasses(this._pane, classes, false);
	}
	getDirection() {
		const direction = this._config.direction;
		if (!direction) return "ltr";
		return typeof direction === "string" ? direction : direction.value;
	}
	updateScrollStrategy(strategy) {
		if (strategy === this._scrollStrategy) return;
		this._disposeScrollStrategy();
		this._scrollStrategy = strategy;
		if (this.hasAttached()) {
			strategy.attach(this);
			strategy.enable();
		}
	}
	_updateElementDirection() {
		this._host.setAttribute("dir", this.getDirection());
	}
	_updateElementSize() {
		if (!this._pane) return;
		const style = this._pane.style;
		style.width = coerceCssPixelValue(this._config.width);
		style.height = coerceCssPixelValue(this._config.height);
		style.minWidth = coerceCssPixelValue(this._config.minWidth);
		style.minHeight = coerceCssPixelValue(this._config.minHeight);
		style.maxWidth = coerceCssPixelValue(this._config.maxWidth);
		style.maxHeight = coerceCssPixelValue(this._config.maxHeight);
	}
	_togglePointerEvents(enablePointer) {
		this._pane.style.pointerEvents = enablePointer ? "" : "none";
	}
	_attachHost() {
		if (!this._host.parentElement) {
			var _this$_positionStrate2, _this$_positionStrate3;
			const customInsertionPoint = this._config.usePopover ? (_this$_positionStrate2 = this._positionStrategy) === null || _this$_positionStrate2 === void 0 || (_this$_positionStrate3 = _this$_positionStrate2.getPopoverInsertionPoint) === null || _this$_positionStrate3 === void 0 ? void 0 : _this$_positionStrate3.call(_this$_positionStrate2) : null;
			if (isElement(customInsertionPoint)) customInsertionPoint.after(this._host);
			else if ((customInsertionPoint === null || customInsertionPoint === void 0 ? void 0 : customInsertionPoint.type) === "parent") customInsertionPoint.element.appendChild(this._host);
			else {
				var _this$_previousHostPa;
				(_this$_previousHostPa = this._previousHostParent) === null || _this$_previousHostPa === void 0 || _this$_previousHostPa.appendChild(this._host);
			}
		}
		if (this._config.usePopover) try {
			this._host["showPopover"]();
		} catch (_unused) {}
	}
	_attachBackdrop() {
		var _this$_backdropRef3;
		const showingClass = "cdk-overlay-backdrop-showing";
		(_this$_backdropRef3 = this._backdropRef) === null || _this$_backdropRef3 === void 0 || _this$_backdropRef3.dispose();
		this._backdropRef = new BackdropRef(this._document, this._renderer, this._ngZone, (event) => {
			this._backdropClick.next(event);
		});
		if (this._animationsDisabled) this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation");
		if (this._config.backdropClass) this._toggleClasses(this._backdropRef.element, this._config.backdropClass, true);
		if (this._config.usePopover) this._host.prepend(this._backdropRef.element);
		else this._host.parentElement.insertBefore(this._backdropRef.element, this._host);
		if (!this._animationsDisabled && typeof requestAnimationFrame !== "undefined") this._ngZone.runOutsideAngular(() => {
			requestAnimationFrame(() => {
				var _this$_backdropRef4;
				return (_this$_backdropRef4 = this._backdropRef) === null || _this$_backdropRef4 === void 0 ? void 0 : _this$_backdropRef4.element.classList.add(showingClass);
			});
		});
		else this._backdropRef.element.classList.add(showingClass);
	}
	_updateStackingOrder() {
		if (!this._config.usePopover && this._host.nextSibling) this._host.parentNode.appendChild(this._host);
	}
	detachBackdrop() {
		if (this._animationsDisabled) {
			var _this$_backdropRef5;
			(_this$_backdropRef5 = this._backdropRef) === null || _this$_backdropRef5 === void 0 || _this$_backdropRef5.dispose();
			this._backdropRef = null;
		} else {
			var _this$_backdropRef6;
			(_this$_backdropRef6 = this._backdropRef) === null || _this$_backdropRef6 === void 0 || _this$_backdropRef6.detach();
		}
	}
	_toggleClasses(element, cssClasses, isAdd) {
		const classes = coerceArray(cssClasses || []).filter((c) => !!c);
		if (classes.length) isAdd ? element.classList.add(...classes) : element.classList.remove(...classes);
	}
	_detachContentWhenEmpty() {
		let rethrow = false;
		try {
			this._detachContentAfterRenderRef = afterNextRender(() => {
				rethrow = true;
				this._detachContent();
			}, { injector: this._injector });
		} catch (e) {
			if (rethrow) throw e;
			this._detachContent();
		}
		if (globalThis.MutationObserver && this._pane) {
			this._detachContentMutationObserver || (this._detachContentMutationObserver = new globalThis.MutationObserver(() => {
				this._detachContent();
			}));
			this._detachContentMutationObserver.observe(this._pane, { childList: true });
		}
	}
	_detachContent() {
		if (!this._pane || !this._host || this._pane.children.length === 0) {
			if (this._pane && this._config.panelClass) this._toggleClasses(this._pane, this._config.panelClass, false);
			if (this._host && this._host.parentElement) {
				this._previousHostParent = this._host.parentElement;
				this._host.remove();
			}
			this._completeDetachContent();
		}
	}
	_completeDetachContent() {
		var _this$_detachContentA, _this$_detachContentM;
		(_this$_detachContentA = this._detachContentAfterRenderRef) === null || _this$_detachContentA === void 0 || _this$_detachContentA.destroy();
		this._detachContentAfterRenderRef = void 0;
		(_this$_detachContentM = this._detachContentMutationObserver) === null || _this$_detachContentM === void 0 || _this$_detachContentM.disconnect();
	}
	_disposeScrollStrategy() {
		var _scrollStrategy$detac;
		const scrollStrategy = this._scrollStrategy;
		scrollStrategy === null || scrollStrategy === void 0 || scrollStrategy.disable();
		scrollStrategy === null || scrollStrategy === void 0 || (_scrollStrategy$detac = scrollStrategy.detach) === null || _scrollStrategy$detac === void 0 || _scrollStrategy$detac.call(scrollStrategy);
	}
};
var boundingBoxClass = "cdk-overlay-connected-position-bounding-box";
var cssUnitPattern = /([A-Za-z%]+)$/;
function createFlexibleConnectedPositionStrategy(injector, origin) {
	return new FlexibleConnectedPositionStrategy(origin, injector.get(ViewportRuler), injector.get(DOCUMENT), injector.get(Platform), injector.get(OverlayContainer));
}
var FlexibleConnectedPositionStrategy = class {
	get positions() {
		return this._preferredPositions;
	}
	constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
		_defineProperty(this, "_viewportRuler", void 0);
		_defineProperty(this, "_document", void 0);
		_defineProperty(this, "_platform", void 0);
		_defineProperty(this, "_overlayContainer", void 0);
		_defineProperty(this, "_overlayRef", void 0);
		_defineProperty(this, "_isInitialRender", false);
		_defineProperty(this, "_lastBoundingBoxSize", {
			width: 0,
			height: 0
		});
		_defineProperty(this, "_isPushed", false);
		_defineProperty(this, "_canPush", true);
		_defineProperty(this, "_growAfterOpen", false);
		_defineProperty(this, "_hasFlexibleDimensions", true);
		_defineProperty(this, "_positionLocked", false);
		_defineProperty(this, "_originRect", void 0);
		_defineProperty(this, "_overlayRect", void 0);
		_defineProperty(this, "_viewportRect", void 0);
		_defineProperty(this, "_containerRect", void 0);
		_defineProperty(this, "_viewportMargin", 0);
		_defineProperty(this, "_scrollables", []);
		_defineProperty(this, "_preferredPositions", []);
		_defineProperty(this, "_origin", void 0);
		_defineProperty(this, "_pane", void 0);
		_defineProperty(this, "_isDisposed", false);
		_defineProperty(this, "_boundingBox", null);
		_defineProperty(this, "_lastPosition", null);
		_defineProperty(this, "_lastScrollVisibility", null);
		_defineProperty(this, "_positionChanges", new Subject());
		_defineProperty(this, "_resizeSubscription", Subscription.EMPTY);
		_defineProperty(this, "_offsetX", 0);
		_defineProperty(this, "_offsetY", 0);
		_defineProperty(this, "_transformOriginSelector", void 0);
		_defineProperty(this, "_appliedPanelClasses", []);
		_defineProperty(this, "_previousPushAmount", null);
		_defineProperty(this, "_popoverLocation", "global");
		_defineProperty(this, "positionChanges", this._positionChanges);
		this._viewportRuler = _viewportRuler;
		this._document = _document;
		this._platform = _platform;
		this._overlayContainer = _overlayContainer;
		this.setOrigin(connectedTo);
	}
	attach(overlayRef) {
		if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) throw Error("This position strategy is already attached to an overlay");
		this._validatePositions();
		overlayRef.hostElement.classList.add(boundingBoxClass);
		this._overlayRef = overlayRef;
		this._boundingBox = overlayRef.hostElement;
		this._pane = overlayRef.overlayElement;
		this._isDisposed = false;
		this._isInitialRender = true;
		this._lastPosition = null;
		this._resizeSubscription.unsubscribe();
		this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
			this._isInitialRender = true;
			this.apply();
		});
	}
	apply() {
		if (this._isDisposed || !this._platform.isBrowser) return;
		if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
			this.reapplyLastPosition();
			return;
		}
		this._clearPanelClasses();
		this._resetOverlayElementStyles();
		this._resetBoundingBoxStyles();
		this._viewportRect = this._getNarrowedViewportRect();
		this._originRect = this._getOriginRect();
		this._overlayRect = this._pane.getBoundingClientRect();
		this._containerRect = this._getContainerRect();
		const originRect = this._originRect;
		const overlayRect = this._overlayRect;
		const viewportRect = this._viewportRect;
		const containerRect = this._containerRect;
		const flexibleFits = [];
		let fallback;
		for (let pos of this._preferredPositions) {
			let originPoint = this._getOriginPoint(originRect, containerRect, pos);
			let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
			let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
			if (overlayFit.isCompletelyWithinViewport) {
				this._isPushed = false;
				this._applyPosition(pos, originPoint);
				return;
			}
			if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
				flexibleFits.push({
					position: pos,
					origin: originPoint,
					overlayRect,
					boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
				});
				continue;
			}
			if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) fallback = {
				overlayFit,
				overlayPoint,
				originPoint,
				position: pos,
				overlayRect
			};
		}
		if (flexibleFits.length) {
			let bestFit = null;
			let bestScore = -1;
			for (const fit of flexibleFits) {
				const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
				if (score > bestScore) {
					bestScore = score;
					bestFit = fit;
				}
			}
			this._isPushed = false;
			this._applyPosition(bestFit.position, bestFit.origin);
			return;
		}
		if (this._canPush) {
			this._isPushed = true;
			this._applyPosition(fallback.position, fallback.originPoint);
			return;
		}
		this._applyPosition(fallback.position, fallback.originPoint);
	}
	detach() {
		this._clearPanelClasses();
		this._lastPosition = null;
		this._previousPushAmount = null;
		this._resizeSubscription.unsubscribe();
	}
	dispose() {
		if (this._isDisposed) return;
		if (this._boundingBox) extendStyles(this._boundingBox.style, {
			top: "",
			left: "",
			right: "",
			bottom: "",
			height: "",
			width: "",
			alignItems: "",
			justifyContent: ""
		});
		if (this._pane) this._resetOverlayElementStyles();
		if (this._overlayRef) this._overlayRef.hostElement.classList.remove(boundingBoxClass);
		this.detach();
		this._positionChanges.complete();
		this._overlayRef = this._boundingBox = null;
		this._isDisposed = true;
	}
	reapplyLastPosition() {
		if (this._isDisposed || !this._platform.isBrowser) return;
		const lastPosition = this._lastPosition;
		if (lastPosition) {
			this._originRect = this._getOriginRect();
			this._overlayRect = this._pane.getBoundingClientRect();
			this._viewportRect = this._getNarrowedViewportRect();
			this._containerRect = this._getContainerRect();
			this._applyPosition(lastPosition, this._getOriginPoint(this._originRect, this._containerRect, lastPosition));
		} else this.apply();
	}
	withScrollableContainers(scrollables) {
		this._scrollables = scrollables;
		return this;
	}
	withPositions(positions) {
		this._preferredPositions = positions;
		if (positions.indexOf(this._lastPosition) === -1) this._lastPosition = null;
		this._validatePositions();
		return this;
	}
	withViewportMargin(margin) {
		this._viewportMargin = margin;
		return this;
	}
	withFlexibleDimensions(flexibleDimensions = true) {
		this._hasFlexibleDimensions = flexibleDimensions;
		return this;
	}
	withGrowAfterOpen(growAfterOpen = true) {
		this._growAfterOpen = growAfterOpen;
		return this;
	}
	withPush(canPush = true) {
		this._canPush = canPush;
		return this;
	}
	withLockedPosition(isLocked = true) {
		this._positionLocked = isLocked;
		return this;
	}
	setOrigin(origin) {
		this._origin = origin;
		return this;
	}
	withDefaultOffsetX(offset) {
		this._offsetX = offset;
		return this;
	}
	withDefaultOffsetY(offset) {
		this._offsetY = offset;
		return this;
	}
	withTransformOriginOn(selector) {
		this._transformOriginSelector = selector;
		return this;
	}
	withPopoverLocation(location) {
		this._popoverLocation = location;
		return this;
	}
	getPopoverInsertionPoint() {
		if (this._popoverLocation === "global") return null;
		else if (this._popoverLocation !== "inline") return this._popoverLocation;
		if (this._origin instanceof ElementRef) return this._origin.nativeElement;
		else if (isElement(this._origin)) return this._origin;
		else return null;
	}
	_getOriginPoint(originRect, containerRect, pos) {
		let x;
		if (pos.originX == "center") x = originRect.left + originRect.width / 2;
		else {
			const startX = this._isRtl() ? originRect.right : originRect.left;
			const endX = this._isRtl() ? originRect.left : originRect.right;
			x = pos.originX == "start" ? startX : endX;
		}
		if (containerRect.left < 0) x -= containerRect.left;
		let y;
		if (pos.originY == "center") y = originRect.top + originRect.height / 2;
		else y = pos.originY == "top" ? originRect.top : originRect.bottom;
		if (containerRect.top < 0) y -= containerRect.top;
		return {
			x,
			y
		};
	}
	_getOverlayPoint(originPoint, overlayRect, pos) {
		let overlayStartX;
		if (pos.overlayX == "center") overlayStartX = -overlayRect.width / 2;
		else if (pos.overlayX === "start") overlayStartX = this._isRtl() ? -overlayRect.width : 0;
		else overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
		let overlayStartY;
		if (pos.overlayY == "center") overlayStartY = -overlayRect.height / 2;
		else overlayStartY = pos.overlayY == "top" ? 0 : -overlayRect.height;
		return {
			x: originPoint.x + overlayStartX,
			y: originPoint.y + overlayStartY
		};
	}
	_getOverlayFit(point, rawOverlayRect, viewport, position) {
		const overlay = getRoundedBoundingClientRect(rawOverlayRect);
		let { x, y } = point;
		let offsetX = this._getOffset(position, "x");
		let offsetY = this._getOffset(position, "y");
		if (offsetX) x += offsetX;
		if (offsetY) y += offsetY;
		let leftOverflow = 0 - x;
		let rightOverflow = x + overlay.width - viewport.width;
		let topOverflow = 0 - y;
		let bottomOverflow = y + overlay.height - viewport.height;
		let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
		let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
		let visibleArea = visibleWidth * visibleHeight;
		return {
			visibleArea,
			isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
			fitsInViewportVertically: visibleHeight === overlay.height,
			fitsInViewportHorizontally: visibleWidth == overlay.width
		};
	}
	_canFitWithFlexibleDimensions(fit, point, viewport) {
		if (this._hasFlexibleDimensions) {
			const availableHeight = viewport.bottom - point.y;
			const availableWidth = viewport.right - point.x;
			const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
			const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
			const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
			const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
			return verticalFit && horizontalFit;
		}
		return false;
	}
	_pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
		if (this._previousPushAmount && this._positionLocked) return {
			x: start.x + this._previousPushAmount.x,
			y: start.y + this._previousPushAmount.y
		};
		const overlay = getRoundedBoundingClientRect(rawOverlayRect);
		const viewport = this._viewportRect;
		const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
		const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
		const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
		const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
		let pushX = 0;
		let pushY = 0;
		if (overlay.width <= viewport.width) pushX = overflowLeft || -overflowRight;
		else pushX = start.x < this._getViewportMarginStart() ? viewport.left - scrollPosition.left - start.x : 0;
		if (overlay.height <= viewport.height) pushY = overflowTop || -overflowBottom;
		else pushY = start.y < this._getViewportMarginTop() ? viewport.top - scrollPosition.top - start.y : 0;
		this._previousPushAmount = {
			x: pushX,
			y: pushY
		};
		return {
			x: start.x + pushX,
			y: start.y + pushY
		};
	}
	_applyPosition(position, originPoint) {
		this._setTransformOrigin(position);
		this._setOverlayElementStyles(originPoint, position);
		this._setBoundingBoxStyles(originPoint, position);
		if (position.panelClass) this._addPanelClasses(position.panelClass);
		if (this._positionChanges.observers.length) {
			const scrollVisibility = this._getScrollVisibility();
			if (position !== this._lastPosition || !this._lastScrollVisibility || !compareScrollVisibility(this._lastScrollVisibility, scrollVisibility)) {
				const changeEvent = new ConnectedOverlayPositionChange(position, scrollVisibility);
				this._positionChanges.next(changeEvent);
			}
			this._lastScrollVisibility = scrollVisibility;
		}
		this._lastPosition = position;
		this._isInitialRender = false;
	}
	_setTransformOrigin(position) {
		if (!this._transformOriginSelector) return;
		const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
		let xOrigin;
		let yOrigin = position.overlayY;
		if (position.overlayX === "center") xOrigin = "center";
		else if (this._isRtl()) xOrigin = position.overlayX === "start" ? "right" : "left";
		else xOrigin = position.overlayX === "start" ? "left" : "right";
		for (let i = 0; i < elements.length; i++) elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
	}
	_calculateBoundingBoxRect(origin, position) {
		const viewport = this._viewportRect;
		const isRtl = this._isRtl();
		let height, top, bottom;
		if (position.overlayY === "top") {
			top = origin.y;
			height = viewport.height - top + this._getViewportMarginBottom();
		} else if (position.overlayY === "bottom") {
			bottom = viewport.height - origin.y + this._getViewportMarginTop() + this._getViewportMarginBottom();
			height = viewport.height - bottom + this._getViewportMarginTop();
		} else {
			const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
			const previousHeight = this._lastBoundingBoxSize.height;
			height = smallestDistanceToViewportEdge * 2;
			top = origin.y - smallestDistanceToViewportEdge;
			if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) top = origin.y - previousHeight / 2;
		}
		const isBoundedByRightViewportEdge = position.overlayX === "start" && !isRtl || position.overlayX === "end" && isRtl;
		const isBoundedByLeftViewportEdge = position.overlayX === "end" && !isRtl || position.overlayX === "start" && isRtl;
		let width, left, right;
		if (isBoundedByLeftViewportEdge) {
			right = viewport.width - origin.x + this._getViewportMarginStart() + this._getViewportMarginEnd();
			width = origin.x - this._getViewportMarginStart();
		} else if (isBoundedByRightViewportEdge) {
			left = origin.x;
			width = viewport.right - origin.x - this._getViewportMarginEnd();
		} else {
			const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
			const previousWidth = this._lastBoundingBoxSize.width;
			width = smallestDistanceToViewportEdge * 2;
			left = origin.x - smallestDistanceToViewportEdge;
			if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) left = origin.x - previousWidth / 2;
		}
		return {
			top,
			left,
			bottom,
			right,
			width,
			height
		};
	}
	_setBoundingBoxStyles(origin, position) {
		const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
		if (!this._isInitialRender && !this._growAfterOpen) {
			boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
			boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
		}
		const styles = {};
		if (this._hasExactPosition()) {
			styles.top = styles.left = "0";
			styles.bottom = styles.right = "auto";
			styles.maxHeight = styles.maxWidth = "";
			styles.width = styles.height = "100%";
		} else {
			const maxHeight = this._overlayRef.getConfig().maxHeight;
			const maxWidth = this._overlayRef.getConfig().maxWidth;
			styles.width = coerceCssPixelValue(boundingBoxRect.width);
			styles.height = coerceCssPixelValue(boundingBoxRect.height);
			styles.top = coerceCssPixelValue(boundingBoxRect.top) || "auto";
			styles.bottom = coerceCssPixelValue(boundingBoxRect.bottom) || "auto";
			styles.left = coerceCssPixelValue(boundingBoxRect.left) || "auto";
			styles.right = coerceCssPixelValue(boundingBoxRect.right) || "auto";
			if (position.overlayX === "center") styles.alignItems = "center";
			else styles.alignItems = position.overlayX === "end" ? "flex-end" : "flex-start";
			if (position.overlayY === "center") styles.justifyContent = "center";
			else styles.justifyContent = position.overlayY === "bottom" ? "flex-end" : "flex-start";
			if (maxHeight) styles.maxHeight = coerceCssPixelValue(maxHeight);
			if (maxWidth) styles.maxWidth = coerceCssPixelValue(maxWidth);
		}
		this._lastBoundingBoxSize = boundingBoxRect;
		extendStyles(this._boundingBox.style, styles);
	}
	_resetBoundingBoxStyles() {
		extendStyles(this._boundingBox.style, {
			top: "0",
			left: "0",
			right: "0",
			bottom: "0",
			height: "",
			width: "",
			alignItems: "",
			justifyContent: ""
		});
	}
	_resetOverlayElementStyles() {
		extendStyles(this._pane.style, {
			top: "",
			left: "",
			bottom: "",
			right: "",
			position: "",
			transform: ""
		});
	}
	_setOverlayElementStyles(originPoint, position) {
		const styles = {};
		const hasExactPosition = this._hasExactPosition();
		const hasFlexibleDimensions = this._hasFlexibleDimensions;
		const config = this._overlayRef.getConfig();
		if (hasExactPosition) {
			const scrollPosition = this._viewportRuler.getViewportScrollPosition();
			extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
			extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
		} else styles.position = "static";
		let transformString = "";
		let offsetX = this._getOffset(position, "x");
		let offsetY = this._getOffset(position, "y");
		if (offsetX) transformString += `translateX(${offsetX}px) `;
		if (offsetY) transformString += `translateY(${offsetY}px)`;
		styles.transform = transformString.trim();
		if (config.maxHeight) {
			if (hasExactPosition) styles.maxHeight = coerceCssPixelValue(config.maxHeight);
			else if (hasFlexibleDimensions) styles.maxHeight = "";
		}
		if (config.maxWidth) {
			if (hasExactPosition) styles.maxWidth = coerceCssPixelValue(config.maxWidth);
			else if (hasFlexibleDimensions) styles.maxWidth = "";
		}
		extendStyles(this._pane.style, styles);
	}
	_getExactOverlayY(position, originPoint, scrollPosition) {
		let styles = {
			top: "",
			bottom: ""
		};
		let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
		if (this._isPushed) overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
		if (position.overlayY === "bottom") styles.bottom = `${this._document.documentElement.clientHeight - (overlayPoint.y + this._overlayRect.height)}px`;
		else styles.top = coerceCssPixelValue(overlayPoint.y);
		return styles;
	}
	_getExactOverlayX(position, originPoint, scrollPosition) {
		let styles = {
			left: "",
			right: ""
		};
		let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
		if (this._isPushed) overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
		let horizontalStyleProperty;
		if (this._isRtl()) horizontalStyleProperty = position.overlayX === "end" ? "left" : "right";
		else horizontalStyleProperty = position.overlayX === "end" ? "right" : "left";
		if (horizontalStyleProperty === "right") styles.right = `${this._document.documentElement.clientWidth - (overlayPoint.x + this._overlayRect.width)}px`;
		else styles.left = coerceCssPixelValue(overlayPoint.x);
		return styles;
	}
	_getScrollVisibility() {
		const originBounds = this._getOriginRect();
		const overlayBounds = this._pane.getBoundingClientRect();
		const scrollContainerBounds = this._scrollables.map((scrollable) => {
			return scrollable.getElementRef().nativeElement.getBoundingClientRect();
		});
		return {
			isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
			isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
			isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
			isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
		};
	}
	_subtractOverflows(length, ...overflows) {
		return overflows.reduce((currentValue, currentOverflow) => {
			return currentValue - Math.max(currentOverflow, 0);
		}, length);
	}
	_getNarrowedViewportRect() {
		const width = this._document.documentElement.clientWidth;
		const height = this._document.documentElement.clientHeight;
		const scrollPosition = this._viewportRuler.getViewportScrollPosition();
		return {
			top: scrollPosition.top + this._getViewportMarginTop(),
			left: scrollPosition.left + this._getViewportMarginStart(),
			right: scrollPosition.left + width - this._getViewportMarginEnd(),
			bottom: scrollPosition.top + height - this._getViewportMarginBottom(),
			width: width - this._getViewportMarginStart() - this._getViewportMarginEnd(),
			height: height - this._getViewportMarginTop() - this._getViewportMarginBottom()
		};
	}
	_isRtl() {
		return this._overlayRef.getDirection() === "rtl";
	}
	_hasExactPosition() {
		return !this._hasFlexibleDimensions || this._isPushed;
	}
	_getOffset(position, axis) {
		if (axis === "x") return position.offsetX == null ? this._offsetX : position.offsetX;
		return position.offsetY == null ? this._offsetY : position.offsetY;
	}
	_validatePositions() {
		if (typeof ngDevMode === "undefined" || ngDevMode) {
			if (!this._preferredPositions.length) throw Error("FlexibleConnectedPositionStrategy: At least one position is required.");
			this._preferredPositions.forEach((pair) => {
				validateHorizontalPosition("originX", pair.originX);
				validateVerticalPosition("originY", pair.originY);
				validateHorizontalPosition("overlayX", pair.overlayX);
				validateVerticalPosition("overlayY", pair.overlayY);
			});
		}
	}
	_addPanelClasses(cssClasses) {
		if (this._pane) coerceArray(cssClasses).forEach((cssClass) => {
			if (cssClass !== "" && this._appliedPanelClasses.indexOf(cssClass) === -1) {
				this._appliedPanelClasses.push(cssClass);
				this._pane.classList.add(cssClass);
			}
		});
	}
	_clearPanelClasses() {
		if (this._pane) {
			this._appliedPanelClasses.forEach((cssClass) => {
				this._pane.classList.remove(cssClass);
			});
			this._appliedPanelClasses = [];
		}
	}
	_getViewportMarginStart() {
		var _this$_viewportMargin, _this$_viewportMargin2;
		if (typeof this._viewportMargin === "number") return this._viewportMargin;
		return (_this$_viewportMargin = (_this$_viewportMargin2 = this._viewportMargin) === null || _this$_viewportMargin2 === void 0 ? void 0 : _this$_viewportMargin2.start) !== null && _this$_viewportMargin !== void 0 ? _this$_viewportMargin : 0;
	}
	_getViewportMarginEnd() {
		var _this$_viewportMargin3, _this$_viewportMargin4;
		if (typeof this._viewportMargin === "number") return this._viewportMargin;
		return (_this$_viewportMargin3 = (_this$_viewportMargin4 = this._viewportMargin) === null || _this$_viewportMargin4 === void 0 ? void 0 : _this$_viewportMargin4.end) !== null && _this$_viewportMargin3 !== void 0 ? _this$_viewportMargin3 : 0;
	}
	_getViewportMarginTop() {
		var _this$_viewportMargin5, _this$_viewportMargin6;
		if (typeof this._viewportMargin === "number") return this._viewportMargin;
		return (_this$_viewportMargin5 = (_this$_viewportMargin6 = this._viewportMargin) === null || _this$_viewportMargin6 === void 0 ? void 0 : _this$_viewportMargin6.top) !== null && _this$_viewportMargin5 !== void 0 ? _this$_viewportMargin5 : 0;
	}
	_getViewportMarginBottom() {
		var _this$_viewportMargin7, _this$_viewportMargin8;
		if (typeof this._viewportMargin === "number") return this._viewportMargin;
		return (_this$_viewportMargin7 = (_this$_viewportMargin8 = this._viewportMargin) === null || _this$_viewportMargin8 === void 0 ? void 0 : _this$_viewportMargin8.bottom) !== null && _this$_viewportMargin7 !== void 0 ? _this$_viewportMargin7 : 0;
	}
	_getOriginRect() {
		const origin = this._origin;
		if (origin instanceof ElementRef) return origin.nativeElement.getBoundingClientRect();
		if (origin instanceof Element) return origin.getBoundingClientRect();
		const width = origin.width || 0;
		const height = origin.height || 0;
		return {
			top: origin.y,
			bottom: origin.y + height,
			left: origin.x,
			right: origin.x + width,
			height,
			width
		};
	}
	_getContainerRect() {
		const isInlinePopover = this._overlayRef.getConfig().usePopover && this._popoverLocation !== "global";
		const element = this._overlayContainer.getContainerElement();
		if (isInlinePopover) element.style.display = "block";
		const dimensions = element.getBoundingClientRect();
		if (isInlinePopover) element.style.display = "";
		return dimensions;
	}
};
function extendStyles(destination, source) {
	for (let key in source) if (source.hasOwnProperty(key)) destination[key] = source[key];
	return destination;
}
function getPixelValue(input) {
	if (typeof input !== "number" && input != null) {
		const [value, units] = input.split(cssUnitPattern);
		return !units || units === "px" ? parseFloat(value) : null;
	}
	return input || null;
}
function getRoundedBoundingClientRect(clientRect) {
	return {
		top: Math.floor(clientRect.top),
		right: Math.floor(clientRect.right),
		bottom: Math.floor(clientRect.bottom),
		left: Math.floor(clientRect.left),
		width: Math.floor(clientRect.width),
		height: Math.floor(clientRect.height)
	};
}
function compareScrollVisibility(a, b) {
	if (a === b) return true;
	return a.isOriginClipped === b.isOriginClipped && a.isOriginOutsideView === b.isOriginOutsideView && a.isOverlayClipped === b.isOverlayClipped && a.isOverlayOutsideView === b.isOverlayOutsideView;
}
var wrapperClass = "cdk-global-overlay-wrapper";
function createGlobalPositionStrategy(_injector) {
	return new GlobalPositionStrategy();
}
var GlobalPositionStrategy = class {
	constructor() {
		_defineProperty(this, "_overlayRef", void 0);
		_defineProperty(this, "_cssPosition", "static");
		_defineProperty(this, "_topOffset", "");
		_defineProperty(this, "_bottomOffset", "");
		_defineProperty(this, "_alignItems", "");
		_defineProperty(this, "_xPosition", "");
		_defineProperty(this, "_xOffset", "");
		_defineProperty(this, "_width", "");
		_defineProperty(this, "_height", "");
		_defineProperty(this, "_isDisposed", false);
	}
	attach(overlayRef) {
		const config = overlayRef.getConfig();
		this._overlayRef = overlayRef;
		if (this._width && !config.width) overlayRef.updateSize({ width: this._width });
		if (this._height && !config.height) overlayRef.updateSize({ height: this._height });
		overlayRef.hostElement.classList.add(wrapperClass);
		this._isDisposed = false;
	}
	top(value = "") {
		this._bottomOffset = "";
		this._topOffset = value;
		this._alignItems = "flex-start";
		return this;
	}
	left(value = "") {
		this._xOffset = value;
		this._xPosition = "left";
		return this;
	}
	bottom(value = "") {
		this._topOffset = "";
		this._bottomOffset = value;
		this._alignItems = "flex-end";
		return this;
	}
	right(value = "") {
		this._xOffset = value;
		this._xPosition = "right";
		return this;
	}
	start(value = "") {
		this._xOffset = value;
		this._xPosition = "start";
		return this;
	}
	end(value = "") {
		this._xOffset = value;
		this._xPosition = "end";
		return this;
	}
	width(value = "") {
		if (this._overlayRef) this._overlayRef.updateSize({ width: value });
		else this._width = value;
		return this;
	}
	height(value = "") {
		if (this._overlayRef) this._overlayRef.updateSize({ height: value });
		else this._height = value;
		return this;
	}
	centerHorizontally(offset = "") {
		this.left(offset);
		this._xPosition = "center";
		return this;
	}
	centerVertically(offset = "") {
		this.top(offset);
		this._alignItems = "center";
		return this;
	}
	apply() {
		if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
		const styles = this._overlayRef.overlayElement.style;
		const parentStyles = this._overlayRef.hostElement.style;
		const { width, height, maxWidth, maxHeight } = this._overlayRef.getConfig();
		const shouldBeFlushHorizontally = (width === "100%" || width === "100vw") && (!maxWidth || maxWidth === "100%" || maxWidth === "100vw");
		const shouldBeFlushVertically = (height === "100%" || height === "100vh") && (!maxHeight || maxHeight === "100%" || maxHeight === "100vh");
		const xPosition = this._xPosition;
		const xOffset = this._xOffset;
		const isRtl = this._overlayRef.getConfig().direction === "rtl";
		let marginLeft = "";
		let marginRight = "";
		let justifyContent = "";
		if (shouldBeFlushHorizontally) justifyContent = "flex-start";
		else if (xPosition === "center") {
			justifyContent = "center";
			if (isRtl) marginRight = xOffset;
			else marginLeft = xOffset;
		} else if (isRtl) {
			if (xPosition === "left" || xPosition === "end") {
				justifyContent = "flex-end";
				marginLeft = xOffset;
			} else if (xPosition === "right" || xPosition === "start") {
				justifyContent = "flex-start";
				marginRight = xOffset;
			}
		} else if (xPosition === "left" || xPosition === "start") {
			justifyContent = "flex-start";
			marginLeft = xOffset;
		} else if (xPosition === "right" || xPosition === "end") {
			justifyContent = "flex-end";
			marginRight = xOffset;
		}
		styles.position = this._cssPosition;
		styles.marginLeft = shouldBeFlushHorizontally ? "0" : marginLeft;
		styles.marginTop = shouldBeFlushVertically ? "0" : this._topOffset;
		styles.marginBottom = this._bottomOffset;
		styles.marginRight = shouldBeFlushHorizontally ? "0" : marginRight;
		parentStyles.justifyContent = justifyContent;
		parentStyles.alignItems = shouldBeFlushVertically ? "flex-start" : this._alignItems;
	}
	dispose() {
		if (this._isDisposed || !this._overlayRef) return;
		const styles = this._overlayRef.overlayElement.style;
		const parent = this._overlayRef.hostElement;
		const parentStyles = parent.style;
		parent.classList.remove(wrapperClass);
		parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = "";
		this._overlayRef = null;
		this._isDisposed = true;
	}
};
var OverlayPositionBuilder = class {
	constructor() {
		_defineProperty(this, "_injector", inject(Injector));
	}
	global() {
		return createGlobalPositionStrategy();
	}
	flexibleConnectedTo(origin) {
		return createFlexibleConnectedPositionStrategy(this._injector, origin);
	}
};
_OverlayPositionBuilder = OverlayPositionBuilder;
_defineProperty(OverlayPositionBuilder, "ɵfac", function OverlayPositionBuilder_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _OverlayPositionBuilder)();
});
_defineProperty(OverlayPositionBuilder, "ɵprov", /* @__PURE__ */ ɵɵdefineService({
	token: _OverlayPositionBuilder,
	factory: _OverlayPositionBuilder.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayPositionBuilder, [{ type: Service }], null, null);
})();
var OVERLAY_DEFAULT_CONFIG = new InjectionToken("OVERLAY_DEFAULT_CONFIG");
function createOverlayRef(injector, config) {
	var _injector$get$usePopo, _injector$get, _overlayConfig$positi, _overlayConfig$positi2, _config$disableAnimat;
	injector.get(_CdkPrivateStyleLoader).load(_CdkOverlayStyleLoader);
	const overlayContainer = injector.get(OverlayContainer);
	const doc = injector.get(DOCUMENT);
	const idGenerator = injector.get(_IdGenerator);
	const appRef = injector.get(ApplicationRef);
	const directionality = injector.get(Directionality);
	const renderer = injector.get(Renderer2, null, { optional: true }) || injector.get(RendererFactory2).createRenderer(null, null);
	const overlayConfig = new OverlayConfig(config);
	const defaultUsePopover = (_injector$get$usePopo = (_injector$get = injector.get(OVERLAY_DEFAULT_CONFIG, null, { optional: true })) === null || _injector$get === void 0 ? void 0 : _injector$get.usePopover) !== null && _injector$get$usePopo !== void 0 ? _injector$get$usePopo : true;
	overlayConfig.direction = overlayConfig.direction || directionality.value;
	if (!doc.body || !("showPopover" in doc.body)) overlayConfig.usePopover = false;
	else {
		var _config$usePopover;
		overlayConfig.usePopover = (_config$usePopover = config === null || config === void 0 ? void 0 : config.usePopover) !== null && _config$usePopover !== void 0 ? _config$usePopover : defaultUsePopover;
	}
	const pane = doc.createElement("div");
	const host = doc.createElement("div");
	pane.id = idGenerator.getId("cdk-overlay-");
	pane.classList.add("cdk-overlay-pane");
	host.appendChild(pane);
	if (overlayConfig.usePopover) {
		host.setAttribute("popover", "manual");
		host.classList.add("cdk-overlay-popover");
	}
	const customInsertionPoint = overlayConfig.usePopover ? (_overlayConfig$positi = overlayConfig.positionStrategy) === null || _overlayConfig$positi === void 0 || (_overlayConfig$positi2 = _overlayConfig$positi.getPopoverInsertionPoint) === null || _overlayConfig$positi2 === void 0 ? void 0 : _overlayConfig$positi2.call(_overlayConfig$positi) : null;
	if (isElement(customInsertionPoint)) customInsertionPoint.after(host);
	else if ((customInsertionPoint === null || customInsertionPoint === void 0 ? void 0 : customInsertionPoint.type) === "parent") customInsertionPoint.element.appendChild(host);
	else overlayContainer.getContainerElement().appendChild(host);
	return new OverlayRef(new DomPortalOutlet(pane, appRef, injector), host, pane, overlayConfig, injector.get(NgZone), injector.get(OverlayKeyboardDispatcher), doc, injector.get(Location), injector.get(OverlayOutsideClickDispatcher), (_config$disableAnimat = config === null || config === void 0 ? void 0 : config.disableAnimations) !== null && _config$disableAnimat !== void 0 ? _config$disableAnimat : injector.get(ANIMATION_MODULE_TYPE, null, { optional: true }) === "NoopAnimations", injector.get(EnvironmentInjector), renderer);
}
var Overlay = class {
	constructor() {
		_defineProperty(this, "scrollStrategies", inject(ScrollStrategyOptions));
		_defineProperty(this, "_positionBuilder", inject(OverlayPositionBuilder));
		_defineProperty(this, "_injector", inject(Injector));
	}
	create(config) {
		return createOverlayRef(this._injector, config);
	}
	position() {
		return this._positionBuilder;
	}
};
_Overlay = Overlay;
_defineProperty(Overlay, "ɵfac", function Overlay_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _Overlay)();
});
_defineProperty(Overlay, "ɵprov", /* @__PURE__ */ ɵɵdefineService({
	token: _Overlay,
	factory: _Overlay.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{ type: Service }], null, null);
})();
var defaultPositionList = [
	{
		originX: "start",
		originY: "bottom",
		overlayX: "start",
		overlayY: "top"
	},
	{
		originX: "start",
		originY: "top",
		overlayX: "start",
		overlayY: "bottom"
	},
	{
		originX: "end",
		originY: "top",
		overlayX: "end",
		overlayY: "bottom"
	},
	{
		originX: "end",
		originY: "bottom",
		overlayX: "end",
		overlayY: "top"
	}
];
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new InjectionToken("cdk-connected-overlay-scroll-strategy", {
	providedIn: "root",
	factory: () => {
		const injector = inject(Injector);
		return () => createRepositionScrollStrategy(injector);
	}
});
var CdkOverlayOrigin = class {
	constructor() {
		_defineProperty(this, "elementRef", inject(ElementRef));
	}
};
_CdkOverlayOrigin = CdkOverlayOrigin;
_defineProperty(CdkOverlayOrigin, "ɵfac", function CdkOverlayOrigin_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _CdkOverlayOrigin)();
});
_defineProperty(CdkOverlayOrigin, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _CdkOverlayOrigin,
	selectors: [
		[
			"",
			"cdk-overlay-origin",
			""
		],
		[
			"",
			"overlay-origin",
			""
		],
		[
			"",
			"cdkOverlayOrigin",
			""
		]
	],
	exportAs: ["cdkOverlayOrigin"]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkOverlayOrigin, [{
		type: Directive,
		args: [{
			selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]",
			exportAs: "cdkOverlayOrigin"
		}]
	}], null, null);
})();
var CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG = new InjectionToken("cdk-connected-overlay-default-config");
var CdkConnectedOverlay = class {
	get offsetX() {
		return this._offsetX;
	}
	set offsetX(offsetX) {
		this._offsetX = offsetX;
		if (this._position) this._updatePositionStrategy(this._position);
	}
	get offsetY() {
		return this._offsetY;
	}
	set offsetY(offsetY) {
		this._offsetY = offsetY;
		if (this._position) this._updatePositionStrategy(this._position);
	}
	set _config(value) {
		if (typeof value !== "string") this._assignConfig(value);
	}
	constructor() {
		_defineProperty(this, "_dir", inject(Directionality, { optional: true }));
		_defineProperty(this, "_injector", inject(Injector));
		_defineProperty(this, "_overlayRef", void 0);
		_defineProperty(this, "_templatePortal", void 0);
		_defineProperty(this, "_backdropSubscription", Subscription.EMPTY);
		_defineProperty(this, "_attachSubscription", Subscription.EMPTY);
		_defineProperty(this, "_detachSubscription", Subscription.EMPTY);
		_defineProperty(this, "_positionSubscription", Subscription.EMPTY);
		_defineProperty(this, "_offsetX", void 0);
		_defineProperty(this, "_offsetY", void 0);
		_defineProperty(this, "_position", void 0);
		_defineProperty(this, "_scrollStrategyFactory", inject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY));
		_defineProperty(this, "_ngZone", inject(NgZone));
		_defineProperty(this, "origin", void 0);
		_defineProperty(this, "positions", void 0);
		_defineProperty(this, "positionStrategy", void 0);
		_defineProperty(this, "width", void 0);
		_defineProperty(this, "height", void 0);
		_defineProperty(this, "minWidth", void 0);
		_defineProperty(this, "minHeight", void 0);
		_defineProperty(this, "backdropClass", void 0);
		_defineProperty(this, "panelClass", void 0);
		_defineProperty(this, "viewportMargin", 0);
		_defineProperty(this, "scrollStrategy", void 0);
		_defineProperty(this, "open", false);
		_defineProperty(this, "disableClose", false);
		_defineProperty(this, "transformOriginSelector", void 0);
		_defineProperty(this, "hasBackdrop", false);
		_defineProperty(this, "lockPosition", false);
		_defineProperty(this, "flexibleDimensions", false);
		_defineProperty(this, "growAfterOpen", false);
		_defineProperty(this, "push", false);
		_defineProperty(this, "disposeOnNavigation", false);
		_defineProperty(this, "usePopover", void 0);
		_defineProperty(this, "matchWidth", false);
		_defineProperty(this, "backdropClick", new EventEmitter());
		_defineProperty(this, "positionChange", new EventEmitter());
		_defineProperty(this, "attach", new EventEmitter());
		_defineProperty(this, "detach", new EventEmitter());
		_defineProperty(this, "overlayKeydown", new EventEmitter());
		_defineProperty(this, "overlayOutsideClick", new EventEmitter());
		const templateRef = inject(TemplateRef);
		const viewContainerRef = inject(ViewContainerRef);
		const defaultConfig = inject(CDK_CONNECTED_OVERLAY_DEFAULT_CONFIG, { optional: true });
		const globalConfig = inject(OVERLAY_DEFAULT_CONFIG, { optional: true });
		this.usePopover = (globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.usePopover) === false ? null : "global";
		this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
		this.scrollStrategy = this._scrollStrategyFactory();
		if (defaultConfig) this._assignConfig(defaultConfig);
	}
	get overlayRef() {
		return this._overlayRef;
	}
	get dir() {
		return this._dir ? this._dir.value : "ltr";
	}
	ngOnDestroy() {
		var _this$_overlayRef;
		this._attachSubscription.unsubscribe();
		this._detachSubscription.unsubscribe();
		this._backdropSubscription.unsubscribe();
		this._positionSubscription.unsubscribe();
		(_this$_overlayRef = this._overlayRef) === null || _this$_overlayRef === void 0 || _this$_overlayRef.dispose();
	}
	ngOnChanges(changes) {
		if (this._position) {
			var _this$_overlayRef2;
			this._updatePositionStrategy(this._position);
			(_this$_overlayRef2 = this._overlayRef) === null || _this$_overlayRef2 === void 0 || _this$_overlayRef2.updateSize({
				width: this._getWidth(),
				minWidth: this.minWidth,
				height: this.height,
				minHeight: this.minHeight
			});
			if (changes["origin"] && this.open) this._position.apply();
		}
		if (changes["open"]) this.open ? this.attachOverlay() : this.detachOverlay();
	}
	_createOverlay() {
		if (!this.positions || !this.positions.length) this.positions = defaultPositionList;
		const overlayRef = this._overlayRef = createOverlayRef(this._injector, this._buildConfig());
		this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
		this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
		overlayRef.keydownEvents().subscribe((event) => {
			this.overlayKeydown.next(event);
			if (event.keyCode === 27 && !this.disableClose && !hasModifierKey(event)) {
				event.preventDefault();
				this.detachOverlay();
			}
		});
		this._overlayRef.outsidePointerEvents().subscribe((event) => {
			const origin = this._getOriginElement();
			const target = _getEventTarget(event);
			if (!origin || origin !== target && !origin.contains(target)) this.overlayOutsideClick.next(event);
		});
	}
	_buildConfig() {
		const positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
		const overlayConfig = new OverlayConfig({
			direction: this._dir || "ltr",
			positionStrategy,
			scrollStrategy: this.scrollStrategy,
			hasBackdrop: this.hasBackdrop,
			disposeOnNavigation: this.disposeOnNavigation,
			usePopover: !!this.usePopover
		});
		if (this.height || this.height === 0) overlayConfig.height = this.height;
		if (this.minWidth || this.minWidth === 0) overlayConfig.minWidth = this.minWidth;
		if (this.minHeight || this.minHeight === 0) overlayConfig.minHeight = this.minHeight;
		if (this.backdropClass) overlayConfig.backdropClass = this.backdropClass;
		if (this.panelClass) overlayConfig.panelClass = this.panelClass;
		return overlayConfig;
	}
	_updatePositionStrategy(positionStrategy) {
		const positions = this.positions.map((currentPosition) => ({
			originX: currentPosition.originX,
			originY: currentPosition.originY,
			overlayX: currentPosition.overlayX,
			overlayY: currentPosition.overlayY,
			offsetX: currentPosition.offsetX || this.offsetX,
			offsetY: currentPosition.offsetY || this.offsetY,
			panelClass: currentPosition.panelClass || void 0
		}));
		return positionStrategy.setOrigin(this._getOrigin()).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover === null ? "global" : this.usePopover);
	}
	_createPositionStrategy() {
		const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getOrigin());
		this._updatePositionStrategy(strategy);
		return strategy;
	}
	_getOrigin() {
		if (this.origin instanceof CdkOverlayOrigin) return this.origin.elementRef;
		else return this.origin;
	}
	_getOriginElement() {
		if (this.origin instanceof CdkOverlayOrigin) return this.origin.elementRef.nativeElement;
		if (this.origin instanceof ElementRef) return this.origin.nativeElement;
		if (typeof Element !== "undefined" && this.origin instanceof Element) return this.origin;
		return null;
	}
	_getWidth() {
		var _this$_getOriginEleme, _this$_getOriginEleme2;
		if (this.width) return this.width;
		return this.matchWidth ? (_this$_getOriginEleme = this._getOriginElement()) === null || _this$_getOriginEleme === void 0 || (_this$_getOriginEleme2 = _this$_getOriginEleme.getBoundingClientRect) === null || _this$_getOriginEleme2 === void 0 ? void 0 : _this$_getOriginEleme2.call(_this$_getOriginEleme).width : void 0;
	}
	attachOverlay() {
		if (!this._overlayRef) this._createOverlay();
		const ref = this._overlayRef;
		ref.getConfig().hasBackdrop = this.hasBackdrop;
		ref.updateSize({ width: this._getWidth() });
		if (!ref.hasAttached()) ref.attach(this._templatePortal);
		if (this.hasBackdrop) this._backdropSubscription = ref.backdropClick().subscribe((event) => this.backdropClick.emit(event));
		else this._backdropSubscription.unsubscribe();
		this._positionSubscription.unsubscribe();
		if (this.positionChange.observers.length > 0) this._positionSubscription = this._position.positionChanges.pipe(takeWhile(() => this.positionChange.observers.length > 0)).subscribe((position) => {
			this._ngZone.run(() => this.positionChange.emit(position));
			if (this.positionChange.observers.length === 0) this._positionSubscription.unsubscribe();
		});
		this.open = true;
	}
	detachOverlay() {
		var _this$_overlayRef3;
		(_this$_overlayRef3 = this._overlayRef) === null || _this$_overlayRef3 === void 0 || _this$_overlayRef3.detach();
		this._backdropSubscription.unsubscribe();
		this._positionSubscription.unsubscribe();
		this.open = false;
	}
	_assignConfig(config) {
		var _config$origin, _config$positions, _config$positionStrat, _config$offsetX, _config$offsetY, _config$width, _config$height, _config$minWidth, _config$minHeight, _config$backdropClass, _config$panelClass, _config$viewportMargi, _config$scrollStrateg, _config$disableClose, _config$transformOrig, _config$hasBackdrop, _config$lockPosition, _config$flexibleDimen, _config$growAfterOpen, _config$push, _config$disposeOnNavi, _config$usePopover2, _config$matchWidth;
		this.origin = (_config$origin = config.origin) !== null && _config$origin !== void 0 ? _config$origin : this.origin;
		this.positions = (_config$positions = config.positions) !== null && _config$positions !== void 0 ? _config$positions : this.positions;
		this.positionStrategy = (_config$positionStrat = config.positionStrategy) !== null && _config$positionStrat !== void 0 ? _config$positionStrat : this.positionStrategy;
		this.offsetX = (_config$offsetX = config.offsetX) !== null && _config$offsetX !== void 0 ? _config$offsetX : this.offsetX;
		this.offsetY = (_config$offsetY = config.offsetY) !== null && _config$offsetY !== void 0 ? _config$offsetY : this.offsetY;
		this.width = (_config$width = config.width) !== null && _config$width !== void 0 ? _config$width : this.width;
		this.height = (_config$height = config.height) !== null && _config$height !== void 0 ? _config$height : this.height;
		this.minWidth = (_config$minWidth = config.minWidth) !== null && _config$minWidth !== void 0 ? _config$minWidth : this.minWidth;
		this.minHeight = (_config$minHeight = config.minHeight) !== null && _config$minHeight !== void 0 ? _config$minHeight : this.minHeight;
		this.backdropClass = (_config$backdropClass = config.backdropClass) !== null && _config$backdropClass !== void 0 ? _config$backdropClass : this.backdropClass;
		this.panelClass = (_config$panelClass = config.panelClass) !== null && _config$panelClass !== void 0 ? _config$panelClass : this.panelClass;
		this.viewportMargin = (_config$viewportMargi = config.viewportMargin) !== null && _config$viewportMargi !== void 0 ? _config$viewportMargi : this.viewportMargin;
		this.scrollStrategy = (_config$scrollStrateg = config.scrollStrategy) !== null && _config$scrollStrateg !== void 0 ? _config$scrollStrateg : this.scrollStrategy;
		this.disableClose = (_config$disableClose = config.disableClose) !== null && _config$disableClose !== void 0 ? _config$disableClose : this.disableClose;
		this.transformOriginSelector = (_config$transformOrig = config.transformOriginSelector) !== null && _config$transformOrig !== void 0 ? _config$transformOrig : this.transformOriginSelector;
		this.hasBackdrop = (_config$hasBackdrop = config.hasBackdrop) !== null && _config$hasBackdrop !== void 0 ? _config$hasBackdrop : this.hasBackdrop;
		this.lockPosition = (_config$lockPosition = config.lockPosition) !== null && _config$lockPosition !== void 0 ? _config$lockPosition : this.lockPosition;
		this.flexibleDimensions = (_config$flexibleDimen = config.flexibleDimensions) !== null && _config$flexibleDimen !== void 0 ? _config$flexibleDimen : this.flexibleDimensions;
		this.growAfterOpen = (_config$growAfterOpen = config.growAfterOpen) !== null && _config$growAfterOpen !== void 0 ? _config$growAfterOpen : this.growAfterOpen;
		this.push = (_config$push = config.push) !== null && _config$push !== void 0 ? _config$push : this.push;
		this.disposeOnNavigation = (_config$disposeOnNavi = config.disposeOnNavigation) !== null && _config$disposeOnNavi !== void 0 ? _config$disposeOnNavi : this.disposeOnNavigation;
		this.usePopover = (_config$usePopover2 = config.usePopover) !== null && _config$usePopover2 !== void 0 ? _config$usePopover2 : this.usePopover;
		this.matchWidth = (_config$matchWidth = config.matchWidth) !== null && _config$matchWidth !== void 0 ? _config$matchWidth : this.matchWidth;
	}
};
_CdkConnectedOverlay = CdkConnectedOverlay;
_defineProperty(CdkConnectedOverlay, "ɵfac", function CdkConnectedOverlay_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _CdkConnectedOverlay)();
});
_defineProperty(CdkConnectedOverlay, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _CdkConnectedOverlay,
	selectors: [
		[
			"",
			"cdk-connected-overlay",
			""
		],
		[
			"",
			"connected-overlay",
			""
		],
		[
			"",
			"cdkConnectedOverlay",
			""
		]
	],
	inputs: {
		origin: [
			0,
			"cdkConnectedOverlayOrigin",
			"origin"
		],
		positions: [
			0,
			"cdkConnectedOverlayPositions",
			"positions"
		],
		positionStrategy: [
			0,
			"cdkConnectedOverlayPositionStrategy",
			"positionStrategy"
		],
		offsetX: [
			0,
			"cdkConnectedOverlayOffsetX",
			"offsetX"
		],
		offsetY: [
			0,
			"cdkConnectedOverlayOffsetY",
			"offsetY"
		],
		width: [
			0,
			"cdkConnectedOverlayWidth",
			"width"
		],
		height: [
			0,
			"cdkConnectedOverlayHeight",
			"height"
		],
		minWidth: [
			0,
			"cdkConnectedOverlayMinWidth",
			"minWidth"
		],
		minHeight: [
			0,
			"cdkConnectedOverlayMinHeight",
			"minHeight"
		],
		backdropClass: [
			0,
			"cdkConnectedOverlayBackdropClass",
			"backdropClass"
		],
		panelClass: [
			0,
			"cdkConnectedOverlayPanelClass",
			"panelClass"
		],
		viewportMargin: [
			0,
			"cdkConnectedOverlayViewportMargin",
			"viewportMargin"
		],
		scrollStrategy: [
			0,
			"cdkConnectedOverlayScrollStrategy",
			"scrollStrategy"
		],
		open: [
			0,
			"cdkConnectedOverlayOpen",
			"open"
		],
		disableClose: [
			0,
			"cdkConnectedOverlayDisableClose",
			"disableClose"
		],
		transformOriginSelector: [
			0,
			"cdkConnectedOverlayTransformOriginOn",
			"transformOriginSelector"
		],
		hasBackdrop: [
			2,
			"cdkConnectedOverlayHasBackdrop",
			"hasBackdrop",
			booleanAttribute
		],
		lockPosition: [
			2,
			"cdkConnectedOverlayLockPosition",
			"lockPosition",
			booleanAttribute
		],
		flexibleDimensions: [
			2,
			"cdkConnectedOverlayFlexibleDimensions",
			"flexibleDimensions",
			booleanAttribute
		],
		growAfterOpen: [
			2,
			"cdkConnectedOverlayGrowAfterOpen",
			"growAfterOpen",
			booleanAttribute
		],
		push: [
			2,
			"cdkConnectedOverlayPush",
			"push",
			booleanAttribute
		],
		disposeOnNavigation: [
			2,
			"cdkConnectedOverlayDisposeOnNavigation",
			"disposeOnNavigation",
			booleanAttribute
		],
		usePopover: [
			0,
			"cdkConnectedOverlayUsePopover",
			"usePopover"
		],
		matchWidth: [
			2,
			"cdkConnectedOverlayMatchWidth",
			"matchWidth",
			booleanAttribute
		],
		_config: [
			0,
			"cdkConnectedOverlay",
			"_config"
		]
	},
	outputs: {
		backdropClick: "backdropClick",
		positionChange: "positionChange",
		attach: "attach",
		detach: "detach",
		overlayKeydown: "overlayKeydown",
		overlayOutsideClick: "overlayOutsideClick"
	},
	exportAs: ["cdkConnectedOverlay"],
	features: [ɵɵNgOnChangesFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkConnectedOverlay, [{
		type: Directive,
		args: [{
			selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
			exportAs: "cdkConnectedOverlay"
		}]
	}], () => [], {
		origin: [{
			type: Input,
			args: ["cdkConnectedOverlayOrigin"]
		}],
		positions: [{
			type: Input,
			args: ["cdkConnectedOverlayPositions"]
		}],
		positionStrategy: [{
			type: Input,
			args: ["cdkConnectedOverlayPositionStrategy"]
		}],
		offsetX: [{
			type: Input,
			args: ["cdkConnectedOverlayOffsetX"]
		}],
		offsetY: [{
			type: Input,
			args: ["cdkConnectedOverlayOffsetY"]
		}],
		width: [{
			type: Input,
			args: ["cdkConnectedOverlayWidth"]
		}],
		height: [{
			type: Input,
			args: ["cdkConnectedOverlayHeight"]
		}],
		minWidth: [{
			type: Input,
			args: ["cdkConnectedOverlayMinWidth"]
		}],
		minHeight: [{
			type: Input,
			args: ["cdkConnectedOverlayMinHeight"]
		}],
		backdropClass: [{
			type: Input,
			args: ["cdkConnectedOverlayBackdropClass"]
		}],
		panelClass: [{
			type: Input,
			args: ["cdkConnectedOverlayPanelClass"]
		}],
		viewportMargin: [{
			type: Input,
			args: ["cdkConnectedOverlayViewportMargin"]
		}],
		scrollStrategy: [{
			type: Input,
			args: ["cdkConnectedOverlayScrollStrategy"]
		}],
		open: [{
			type: Input,
			args: ["cdkConnectedOverlayOpen"]
		}],
		disableClose: [{
			type: Input,
			args: ["cdkConnectedOverlayDisableClose"]
		}],
		transformOriginSelector: [{
			type: Input,
			args: ["cdkConnectedOverlayTransformOriginOn"]
		}],
		hasBackdrop: [{
			type: Input,
			args: [{
				alias: "cdkConnectedOverlayHasBackdrop",
				transform: booleanAttribute
			}]
		}],
		lockPosition: [{
			type: Input,
			args: [{
				alias: "cdkConnectedOverlayLockPosition",
				transform: booleanAttribute
			}]
		}],
		flexibleDimensions: [{
			type: Input,
			args: [{
				alias: "cdkConnectedOverlayFlexibleDimensions",
				transform: booleanAttribute
			}]
		}],
		growAfterOpen: [{
			type: Input,
			args: [{
				alias: "cdkConnectedOverlayGrowAfterOpen",
				transform: booleanAttribute
			}]
		}],
		push: [{
			type: Input,
			args: [{
				alias: "cdkConnectedOverlayPush",
				transform: booleanAttribute
			}]
		}],
		disposeOnNavigation: [{
			type: Input,
			args: [{
				alias: "cdkConnectedOverlayDisposeOnNavigation",
				transform: booleanAttribute
			}]
		}],
		usePopover: [{
			type: Input,
			args: [{ alias: "cdkConnectedOverlayUsePopover" }]
		}],
		matchWidth: [{
			type: Input,
			args: [{
				alias: "cdkConnectedOverlayMatchWidth",
				transform: booleanAttribute
			}]
		}],
		_config: [{
			type: Input,
			args: ["cdkConnectedOverlay"]
		}],
		backdropClick: [{ type: Output }],
		positionChange: [{ type: Output }],
		attach: [{ type: Output }],
		detach: [{ type: Output }],
		overlayKeydown: [{ type: Output }],
		overlayOutsideClick: [{ type: Output }]
	});
})();
var OverlayModule = class {};
_OverlayModule = OverlayModule;
_defineProperty(OverlayModule, "ɵfac", function OverlayModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _OverlayModule)();
});
_defineProperty(OverlayModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _OverlayModule,
	imports: [
		BidiModule,
		PortalModule,
		ScrollingModule,
		CdkConnectedOverlay,
		CdkOverlayOrigin
	],
	exports: [
		CdkConnectedOverlay,
		CdkOverlayOrigin,
		ScrollingModule
	]
}));
_defineProperty(OverlayModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({
	providers: [Overlay],
	imports: [
		BidiModule,
		PortalModule,
		ScrollingModule,
		ScrollingModule
	]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayModule, [{
		type: NgModule,
		args: [{
			imports: [
				BidiModule,
				PortalModule,
				ScrollingModule,
				CdkConnectedOverlay,
				CdkOverlayOrigin
			],
			exports: [
				CdkConnectedOverlay,
				CdkOverlayOrigin,
				ScrollingModule
			],
			providers: [Overlay]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@angular/cdk/fesm2022/overlay.mjs
var _FullscreenOverlayContainer;
var FullscreenOverlayContainer = class extends OverlayContainer {
	constructor(..._args) {
		super(..._args);
		_defineProperty(this, "_renderer", inject(RendererFactory2).createRenderer(null, null));
		_defineProperty(this, "_fullScreenEventName", void 0);
		_defineProperty(this, "_cleanupFullScreenListener", void 0);
	}
	ngOnDestroy() {
		var _this$_cleanupFullScr;
		super.ngOnDestroy();
		(_this$_cleanupFullScr = this._cleanupFullScreenListener) === null || _this$_cleanupFullScr === void 0 || _this$_cleanupFullScr.call(this);
	}
	_createContainer() {
		const eventName = this._getEventName();
		super._createContainer();
		this._adjustParentForFullscreenChange();
		if (eventName) {
			var _this$_cleanupFullScr2;
			(_this$_cleanupFullScr2 = this._cleanupFullScreenListener) === null || _this$_cleanupFullScr2 === void 0 || _this$_cleanupFullScr2.call(this);
			this._cleanupFullScreenListener = this._renderer.listen("document", eventName, () => {
				this._adjustParentForFullscreenChange();
			});
		}
	}
	_adjustParentForFullscreenChange() {
		if (this._containerElement) (this.getFullscreenElement() || this._document.body).appendChild(this._containerElement);
	}
	_getEventName() {
		if (!this._fullScreenEventName) {
			const _document = this._document;
			if (_document.fullscreenEnabled) this._fullScreenEventName = "fullscreenchange";
			else if (_document.webkitFullscreenEnabled) this._fullScreenEventName = "webkitfullscreenchange";
			else if (_document.mozFullScreenEnabled) this._fullScreenEventName = "mozfullscreenchange";
			else if (_document.msFullscreenEnabled) this._fullScreenEventName = "MSFullscreenChange";
		}
		return this._fullScreenEventName;
	}
	getFullscreenElement() {
		const _document = this._document;
		return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
	}
};
_FullscreenOverlayContainer = FullscreenOverlayContainer;
_defineProperty(FullscreenOverlayContainer, "ɵfac", function FullscreenOverlayContainer_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _FullscreenOverlayContainer)();
});
_defineProperty(FullscreenOverlayContainer, "ɵprov", /* @__PURE__ */ ɵɵdefineService({
	token: _FullscreenOverlayContainer,
	factory: _FullscreenOverlayContainer.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullscreenOverlayContainer, [{ type: Service }], null, null);
})();
//#endregion
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-overlay.mjs
var _NzConnectedOverlayDirective;
var _NzOverlayModule;
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var POSITION_MAP = {
	top: new ConnectionPositionPair({
		originX: "center",
		originY: "top"
	}, {
		overlayX: "center",
		overlayY: "bottom"
	}),
	topCenter: new ConnectionPositionPair({
		originX: "center",
		originY: "top"
	}, {
		overlayX: "center",
		overlayY: "bottom"
	}),
	topLeft: new ConnectionPositionPair({
		originX: "start",
		originY: "top"
	}, {
		overlayX: "start",
		overlayY: "bottom"
	}),
	topRight: new ConnectionPositionPair({
		originX: "end",
		originY: "top"
	}, {
		overlayX: "end",
		overlayY: "bottom"
	}),
	right: new ConnectionPositionPair({
		originX: "end",
		originY: "center"
	}, {
		overlayX: "start",
		overlayY: "center"
	}),
	rightTop: new ConnectionPositionPair({
		originX: "end",
		originY: "top"
	}, {
		overlayX: "start",
		overlayY: "top"
	}),
	rightBottom: new ConnectionPositionPair({
		originX: "end",
		originY: "bottom"
	}, {
		overlayX: "start",
		overlayY: "bottom"
	}),
	bottom: new ConnectionPositionPair({
		originX: "center",
		originY: "bottom"
	}, {
		overlayX: "center",
		overlayY: "top"
	}),
	bottomCenter: new ConnectionPositionPair({
		originX: "center",
		originY: "bottom"
	}, {
		overlayX: "center",
		overlayY: "top"
	}),
	bottomLeft: new ConnectionPositionPair({
		originX: "start",
		originY: "bottom"
	}, {
		overlayX: "start",
		overlayY: "top"
	}),
	bottomRight: new ConnectionPositionPair({
		originX: "end",
		originY: "bottom"
	}, {
		overlayX: "end",
		overlayY: "top"
	}),
	left: new ConnectionPositionPair({
		originX: "start",
		originY: "center"
	}, {
		overlayX: "end",
		overlayY: "center"
	}),
	leftTop: new ConnectionPositionPair({
		originX: "start",
		originY: "top"
	}, {
		overlayX: "end",
		overlayY: "top"
	}),
	leftBottom: new ConnectionPositionPair({
		originX: "start",
		originY: "bottom"
	}, {
		overlayX: "end",
		overlayY: "bottom"
	})
};
/**
* @internal
* @param offset offset in pixels which should not be less than 0.
* The default value is `12`, which means `(arrow-size / 2) + 4`
*/
var positionOffsetMapFactory = (offset = 12) => ({
	top: [0, -offset],
	topCenter: [0, -offset],
	topLeft: [0, -offset],
	topRight: [0, -offset],
	right: [offset, 0],
	rightTop: [offset, 0],
	rightBottom: [offset, 0],
	bottom: [0, offset],
	bottomCenter: [0, offset],
	bottomLeft: [0, offset],
	bottomRight: [0, offset],
	left: [-offset, 0],
	leftTop: [-offset, 0],
	leftBottom: [-offset, 0]
});
var TOOLTIP_OFFSET_MAP = positionOffsetMapFactory();
setConnectedPositionOffset(POSITION_MAP.top, TOOLTIP_OFFSET_MAP.top), setConnectedPositionOffset(POSITION_MAP.right, TOOLTIP_OFFSET_MAP.right), setConnectedPositionOffset(POSITION_MAP.bottom, TOOLTIP_OFFSET_MAP.bottom), setConnectedPositionOffset(POSITION_MAP.left, TOOLTIP_OFFSET_MAP.left);
POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topLeft, POSITION_MAP.topRight;
new ConnectionPositionPair({
	originX: "start",
	originY: "bottom"
}, {
	overlayX: "start",
	overlayY: "bottom"
}), new ConnectionPositionPair({
	originX: "start",
	originY: "bottom"
}, {
	overlayX: "end",
	overlayY: "bottom"
});
POSITION_MAP.bottomLeft, new ConnectionPositionPair({
	originX: "start",
	originY: "bottom"
}, {
	overlayX: "end",
	overlayY: "top"
});
function getPlacementName(position) {
	for (const placement in POSITION_MAP) if (position.connectionPair.originX === POSITION_MAP[placement].originX && position.connectionPair.originY === POSITION_MAP[placement].originY && position.connectionPair.overlayX === POSITION_MAP[placement].overlayX && position.connectionPair.overlayY === POSITION_MAP[placement].overlayY) return placement;
}
var DATE_PICKER_POSITION_MAP = {
	bottomLeft: new ConnectionPositionPair({
		originX: "start",
		originY: "bottom"
	}, {
		overlayX: "start",
		overlayY: "top"
	}, void 0, 2),
	topLeft: new ConnectionPositionPair({
		originX: "start",
		originY: "top"
	}, {
		overlayX: "start",
		overlayY: "bottom"
	}, void 0, -2),
	bottomRight: new ConnectionPositionPair({
		originX: "end",
		originY: "bottom"
	}, {
		overlayX: "end",
		overlayY: "top"
	}, void 0, 2),
	topRight: new ConnectionPositionPair({
		originX: "end",
		originY: "top"
	}, {
		overlayX: "end",
		overlayY: "bottom"
	}, void 0, -2)
};
DATE_PICKER_POSITION_MAP.bottomLeft, DATE_PICKER_POSITION_MAP.topLeft, DATE_PICKER_POSITION_MAP.bottomRight, DATE_PICKER_POSITION_MAP.topRight;
function normalizeConnectedPositionOffset(offset) {
	return Array.isArray(offset) ? offset : [offset, offset];
}
function setConnectedPositionOffset(position, offset) {
	const [offsetX, offsetY] = normalizeConnectedPositionOffset(offset);
	return _objectSpread2(_objectSpread2({}, position), {}, {
		offsetX,
		offsetY
	});
}
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzConnectedOverlayDirective = class {
	constructor() {
		_defineProperty(this, "cdkConnectedOverlay", inject(CdkConnectedOverlay));
		_defineProperty(this, "nzArrowPointAtCenter", false);
		this.cdkConnectedOverlay.backdropClass = "nz-overlay-transparent-backdrop";
		this.cdkConnectedOverlay.positionChange.pipe(takeUntilDestroyed()).subscribe((position) => {
			if (this.nzArrowPointAtCenter) this.updateArrowPosition(position);
		});
	}
	updateArrowPosition(position) {
		const originRect = this.getOriginRect();
		const placement = getPlacementName(position);
		let offsetX = 0;
		let offsetY = 0;
		if (placement === "topLeft" || placement === "bottomLeft") offsetX = originRect.width / 2 - 14;
		else if (placement === "topRight" || placement === "bottomRight") offsetX = -(originRect.width / 2 - 14);
		else if (placement === "leftTop" || placement === "rightTop") offsetY = originRect.height / 2 - 10;
		else if (placement === "leftBottom" || placement === "rightBottom") offsetY = -(originRect.height / 2 - 10);
		if (this.cdkConnectedOverlay.offsetX !== offsetX || this.cdkConnectedOverlay.offsetY !== offsetY) {
			this.cdkConnectedOverlay.offsetY = offsetY;
			this.cdkConnectedOverlay.offsetX = offsetX;
			this.cdkConnectedOverlay.overlayRef.updatePosition();
		}
	}
	getFlexibleConnectedPositionStrategyOrigin() {
		if (this.cdkConnectedOverlay.origin instanceof CdkOverlayOrigin) return this.cdkConnectedOverlay.origin.elementRef;
		else return this.cdkConnectedOverlay.origin;
	}
	getOriginRect() {
		const origin = this.getFlexibleConnectedPositionStrategyOrigin();
		if (origin instanceof ElementRef) return origin.nativeElement.getBoundingClientRect();
		if (origin instanceof Element) return origin.getBoundingClientRect();
		const width = origin.width || 0;
		const height = origin.height || 0;
		return {
			top: origin.y,
			bottom: origin.y + height,
			left: origin.x,
			right: origin.x + width,
			height,
			width
		};
	}
};
_NzConnectedOverlayDirective = NzConnectedOverlayDirective;
_defineProperty(NzConnectedOverlayDirective, "ɵfac", function NzConnectedOverlayDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzConnectedOverlayDirective)();
});
_defineProperty(NzConnectedOverlayDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzConnectedOverlayDirective,
	selectors: [[
		"",
		"cdkConnectedOverlay",
		"",
		"nzConnectedOverlay",
		""
	]],
	inputs: { nzArrowPointAtCenter: [
		2,
		"nzArrowPointAtCenter",
		"nzArrowPointAtCenter",
		booleanAttribute
	] },
	exportAs: ["nzConnectedOverlay"]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzConnectedOverlayDirective, [{
		type: Directive,
		args: [{
			selector: "[cdkConnectedOverlay][nzConnectedOverlay]",
			exportAs: "nzConnectedOverlay"
		}]
	}], () => [], { nzArrowPointAtCenter: [{
		type: Input,
		args: [{ transform: booleanAttribute }]
	}] });
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzOverlayModule = class {};
_NzOverlayModule = NzOverlayModule;
_defineProperty(NzOverlayModule, "ɵfac", function NzOverlayModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzOverlayModule)();
});
_defineProperty(NzOverlayModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NzOverlayModule,
	imports: [NzConnectedOverlayDirective],
	exports: [NzConnectedOverlayDirective]
}));
_defineProperty(NzOverlayModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOverlayModule, [{
		type: NgModule,
		args: [{
			imports: [NzConnectedOverlayDirective],
			exports: [NzConnectedOverlayDirective]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-menu.mjs
var _MenuService;
var _NzSubmenuService;
var _NzMenuItemComponent;
var _NzSubmenuInlineChildComponent;
var _NzSubmenuNoneInlineChildComponent;
var _NzSubMenuTitleComponent;
var _NzSubMenuComponent;
var _NzMenuDirective;
var _NzMenuGroupComponent;
var _NzMenuDividerDirective;
var _NzMenuModule;
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var _c0$1 = ["*"];
function NzSubMenuTitleComponent_Conditional_0_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "nz-icon", 0);
	if (rf & 2) ɵɵproperty("nzType", ɵɵnextContext().nzIcon);
}
function NzSubMenuTitleComponent_ng_container_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵelementStart(1, "span", 4);
		ɵɵtext(2);
		ɵɵelementEnd();
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵadvance(2);
		ɵɵtextInterpolate(ctx_r0.nzTitle);
	}
}
function NzSubMenuTitleComponent_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 2);
		ɵɵelement(1, "nz-icon", 5);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵproperty("nzType", ctx_r0.dir() === "rtl" ? "left" : "right");
	}
}
function NzSubMenuTitleComponent_Conditional_4_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "span", 3);
}
var _c1 = [[[
	"",
	"title",
	""
]], "*"];
var _c2 = ["[title]", "*"];
function NzSubMenuComponent_Conditional_2_Template(rf, ctx) {
	if (rf & 1) ɵɵprojection(0);
}
function NzSubMenuComponent_Conditional_3_ng_template_1_Template(rf, ctx) {}
function NzSubMenuComponent_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 3);
		ɵɵtemplate(1, NzSubMenuComponent_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 5);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		const subMenuTemplate_r2 = ɵɵreference(6);
		ɵɵproperty("open", ctx_r0.nzOpen)("menuClass", ctx_r0.nzMenuClassName);
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", subMenuTemplate_r2);
	}
}
function NzSubMenuComponent_Conditional_4_ng_template_0_ng_template_1_Template(rf, ctx) {}
function NzSubMenuComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
	if (rf & 1) {
		const _r4 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "div", 7);
		ɵɵlistener("subMenuMouseState", function NzSubMenuComponent_Conditional_4_ng_template_0_Template_div_subMenuMouseState_0_listener($event) {
			ɵɵrestoreView(_r4);
			return ɵɵresetView(ɵɵnextContext(2).setMouseEnterState($event));
		});
		ɵɵtemplate(1, NzSubMenuComponent_Conditional_4_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 5);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		var _ctx_r0$noAnimation, _ctx_r0$noAnimation$n;
		const ctx_r0 = ɵɵnextContext(2);
		const subMenuTemplate_r2 = ɵɵreference(6);
		ɵɵproperty("theme", ctx_r0.theme)("mode", ctx_r0.mode)("open", ctx_r0.nzOpen)("position", ctx_r0.position)("menuClass", ctx_r0.nzMenuClassName)("nzDisabled", ctx_r0.nzDisabled)("nzTriggerSubMenuAction", ctx_r0.nzTriggerSubMenuAction)("nzNoAnimation", (_ctx_r0$noAnimation = ctx_r0.noAnimation) === null || _ctx_r0$noAnimation === void 0 || (_ctx_r0$noAnimation$n = _ctx_r0$noAnimation.nzNoAnimation) === null || _ctx_r0$noAnimation$n === void 0 ? void 0 : _ctx_r0$noAnimation$n.call(_ctx_r0$noAnimation));
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", subMenuTemplate_r2);
	}
}
function NzSubMenuComponent_Conditional_4_Template(rf, ctx) {
	if (rf & 1) {
		const _r3 = ɵɵgetCurrentView();
		ɵɵtemplate(0, NzSubMenuComponent_Conditional_4_ng_template_0_Template, 2, 9, "ng-template", 6);
		ɵɵlistener("positionChange", function NzSubMenuComponent_Conditional_4_Template_ng_template_positionChange_0_listener($event) {
			ɵɵrestoreView(_r3);
			return ɵɵresetView(ɵɵnextContext().onPositionChange($event));
		})("overlayOutsideClick", function NzSubMenuComponent_Conditional_4_Template_ng_template_overlayOutsideClick_0_listener() {
			ɵɵrestoreView(_r3);
			return ɵɵresetView(ɵɵnextContext().setMouseEnterState(false));
		});
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		const origin_r5 = ɵɵreference(1);
		ɵɵproperty("cdkConnectedOverlayPositions", ctx_r0.overlayPositions)("cdkConnectedOverlayOrigin", origin_r5)("cdkConnectedOverlayWidth", ctx_r0.triggerWidth)("cdkConnectedOverlayOpen", ctx_r0.nzOpen);
	}
}
function NzSubMenuComponent_ng_template_5_Template(rf, ctx) {
	if (rf & 1) ɵɵprojection(0, 1);
}
var _c3 = ["titleElement"];
var _c4 = ["*", [[
	"",
	"title",
	""
]]];
var _c5 = ["*", "[title]"];
function NzMenuGroupComponent_ng_container_2_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵtext(1);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵtextInterpolate(ctx_r0.nzTitle);
	}
}
function NzMenuGroupComponent_Conditional_3_Template(rf, ctx) {
	if (rf & 1) ɵɵprojection(0, 1);
}
var MenuService = class {
	constructor() {
		_defineProperty(
			this,
			/** all descendant menu click **/
			"descendantMenuItemClick$",
			new Subject()
		);
		_defineProperty(
			this,
			/** child menu item click **/
			"childMenuItemClick$",
			new Subject()
		);
		_defineProperty(this, "theme$", new BehaviorSubject("light"));
		_defineProperty(this, "mode$", new BehaviorSubject("vertical"));
		_defineProperty(this, "inlineIndent$", new BehaviorSubject(24));
		_defineProperty(this, "isChildSubMenuOpen$", new BehaviorSubject(false));
	}
	onDescendantMenuItemClick(menu) {
		this.descendantMenuItemClick$.next(menu);
	}
	onChildMenuItemClick(menu) {
		this.childMenuItemClick$.next(menu);
	}
	setMode(mode) {
		this.mode$.next(mode);
	}
	setTheme(theme) {
		this.theme$.next(theme);
	}
	setInlineIndent(indent) {
		this.inlineIndent$.next(indent);
	}
};
_MenuService = MenuService;
_defineProperty(MenuService, "ɵfac", function MenuService_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _MenuService)();
});
_defineProperty(MenuService, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({
	token: _MenuService,
	factory: _MenuService.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuService, [{ type: Injectable }], null, null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
/**
* A flag to mark if the menu is inside a dropdown.
* @note Internally used only, please do not use it.
*/
var NzIsMenuInsideDropdownToken = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-is-in-dropdown-menu" : "");
/**
* A token to hold the local {@link MenuService} instance. This is used for nested menu.
* @note Internally used only, please do not use it.
*/
var NzMenuServiceLocalToken = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-menu-service-local" : "");
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzSubmenuService = class NzSubmenuService {
	/**
	* menu item inside submenu clicked
	*/
	onChildMenuItemClick(menu) {
		this.childMenuItemClick$.next(menu);
	}
	setOpenStateWithoutDebounce(value) {
		this.isCurrentSubMenuOpen$.next(value);
	}
	setMouseEnterTitleOrOverlayState(value) {
		this.isMouseEnterTitleOrOverlay$.next(value);
	}
	constructor() {
		_defineProperty(this, "nzMenuService", inject(MenuService));
		_defineProperty(this, "isMenuInsideDropdown", inject(NzIsMenuInsideDropdownToken));
		_defineProperty(this, "nzHostSubmenuService", inject(NzSubmenuService, {
			optional: true,
			skipSelf: true
		}));
		_defineProperty(this, "mode$", this.nzMenuService.mode$.pipe(map((mode) => {
			if (mode === "inline") return "inline";
			else if (mode === "vertical" || this.nzHostSubmenuService) return "vertical";
			else return "horizontal";
		})));
		_defineProperty(this, "level", 1);
		_defineProperty(this, "isCurrentSubMenuOpen$", new BehaviorSubject(false));
		_defineProperty(this, "isChildSubMenuOpen$", new BehaviorSubject(false));
		_defineProperty(
			this,
			/** submenu title & overlay mouse enter status **/
			"isMouseEnterTitleOrOverlay$",
			new Subject()
		);
		_defineProperty(this, "childMenuItemClick$", new Subject());
		if (this.nzHostSubmenuService) this.level = this.nzHostSubmenuService.level + 1;
		/** close if menu item clicked **/
		const isClosedByMenuItemClick = this.childMenuItemClick$.pipe(mergeMap(() => this.mode$), filter((mode) => mode !== "inline" || this.isMenuInsideDropdown), map(() => false));
		const isCurrentSubmenuOpen$ = merge(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
		combineLatest([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(map(([isChildSubMenuOpen, isCurrentSubmenuOpen]) => isChildSubMenuOpen || isCurrentSubmenuOpen), auditTime(150)).pipe(distinctUntilChanged(), takeUntilDestroyed()).subscribe((data) => {
			this.setOpenStateWithoutDebounce(data);
			if (this.nzHostSubmenuService)
 /** set parent submenu's child submenu open status **/
			this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
			else this.nzMenuService.isChildSubMenuOpen$.next(data);
		});
	}
};
_NzSubmenuService = NzSubmenuService;
_defineProperty(NzSubmenuService, "ɵfac", function NzSubmenuService_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzSubmenuService)();
});
_defineProperty(NzSubmenuService, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NzSubmenuService,
	factory: _NzSubmenuService.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuService, [{ type: Injectable }], () => [], null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzMenuItemComponent = class {
	/** clear all item selected status except this */
	clickMenuItem(e) {
		if (this.nzDisabled) {
			e.preventDefault();
			e.stopPropagation();
			return;
		}
		this.nzMenuService.onDescendantMenuItemClick(this);
		if (this.nzSubmenuService)
 /** menu item inside the submenu **/
		this.nzSubmenuService.onChildMenuItemClick(this);
		else
 /** menu item inside the root menu **/
		this.nzMenuService.onChildMenuItemClick(this);
	}
	setSelectedState(value) {
		this.nzSelected = value;
		this.selected$.next(value);
	}
	updateRouterActive() {
		if (!this.listOfRouterLink || !this.router || !this.router.navigated || !this.nzMatchRouter) return;
		Promise.resolve().then(() => {
			const hasActiveLinks = this.hasActiveLinks();
			if (this.nzSelected !== hasActiveLinks) {
				this.nzSelected = hasActiveLinks;
				this.setSelectedState(this.nzSelected);
				this.cdr.markForCheck();
			}
		});
	}
	hasActiveLinks() {
		const isActiveCheckFn = this.isLinkActive(this.router);
		return this.routerLink && isActiveCheckFn(this.routerLink) || this.listOfRouterLink.some(isActiveCheckFn);
	}
	isLinkActive(router) {
		return (link) => router.isActive(link.urlTree || "", {
			paths: this.nzMatchRouterExact ? "exact" : "subset",
			queryParams: this.nzMatchRouterExact ? "exact" : "subset",
			fragment: "ignored",
			matrixParams: "ignored"
		});
	}
	constructor() {
		var _this$router;
		_defineProperty(this, "nzMenuService", inject(MenuService));
		_defineProperty(this, "destroyRef", inject(DestroyRef));
		_defineProperty(this, "cdr", inject(ChangeDetectorRef));
		_defineProperty(this, "nzSubmenuService", inject(NzSubmenuService, { optional: true }));
		_defineProperty(this, "routerLink", inject(RouterLink, { optional: true }));
		_defineProperty(this, "router", inject(Router, { optional: true }));
		_defineProperty(this, "isMenuInsideDropdown", inject(NzIsMenuInsideDropdownToken));
		_defineProperty(this, "level", this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1);
		_defineProperty(this, "selected$", new Subject());
		_defineProperty(this, "inlinePaddingLeft", null);
		_defineProperty(this, "nzPaddingLeft", void 0);
		_defineProperty(this, "nzDisabled", false);
		_defineProperty(this, "nzSelected", false);
		_defineProperty(this, "nzDanger", false);
		_defineProperty(this, "nzMatchRouterExact", false);
		_defineProperty(this, "nzMatchRouter", false);
		_defineProperty(this, "listOfRouterLink", void 0);
		(_this$router = this.router) === null || _this$router === void 0 || _this$router.events.pipe(takeUntilDestroyed(), filter((e) => e instanceof NavigationEnd)).subscribe(() => this.updateRouterActive());
	}
	ngOnInit() {
		/** store origin padding in padding */
		combineLatest([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(([mode, inlineIndent]) => {
			this.inlinePaddingLeft = mode === "inline" ? this.level * inlineIndent : null;
		});
	}
	ngAfterContentInit() {
		this.listOfRouterLink.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.updateRouterActive());
		this.updateRouterActive();
	}
	ngOnChanges(changes) {
		const { nzSelected } = changes;
		if (nzSelected) this.setSelectedState(this.nzSelected);
	}
};
_NzMenuItemComponent = NzMenuItemComponent;
_defineProperty(NzMenuItemComponent, "ɵfac", function NzMenuItemComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzMenuItemComponent)();
});
_defineProperty(NzMenuItemComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _NzMenuItemComponent,
	selectors: [[
		"",
		"nz-menu-item",
		""
	]],
	contentQueries: function NzMenuItemComponent_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuery(dirIndex, RouterLink, 5);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfRouterLink = _t);
		}
	},
	hostVars: 18,
	hostBindings: function NzMenuItemComponent_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("click", function NzMenuItemComponent_click_HostBindingHandler($event) {
			return ctx.clickMenuItem($event);
		});
		if (rf & 2) {
			ɵɵstyleProp("padding-inline-start", ctx.nzPaddingLeft || ctx.inlinePaddingLeft, "px");
			ɵɵclassProp("ant-dropdown-menu-item", ctx.isMenuInsideDropdown)("ant-dropdown-menu-item-selected", ctx.isMenuInsideDropdown && ctx.nzSelected)("ant-dropdown-menu-item-danger", ctx.isMenuInsideDropdown && ctx.nzDanger)("ant-dropdown-menu-item-disabled", ctx.isMenuInsideDropdown && ctx.nzDisabled)("ant-menu-item", !ctx.isMenuInsideDropdown)("ant-menu-item-selected", !ctx.isMenuInsideDropdown && ctx.nzSelected)("ant-menu-item-danger", !ctx.isMenuInsideDropdown && ctx.nzDanger)("ant-menu-item-disabled", !ctx.isMenuInsideDropdown && ctx.nzDisabled);
		}
	},
	inputs: {
		nzPaddingLeft: [
			2,
			"nzPaddingLeft",
			"nzPaddingLeft",
			numberAttributeWithZeroFallback
		],
		nzDisabled: [
			2,
			"nzDisabled",
			"nzDisabled",
			booleanAttribute
		],
		nzSelected: [
			2,
			"nzSelected",
			"nzSelected",
			booleanAttribute
		],
		nzDanger: [
			2,
			"nzDanger",
			"nzDanger",
			booleanAttribute
		],
		nzMatchRouterExact: [
			2,
			"nzMatchRouterExact",
			"nzMatchRouterExact",
			booleanAttribute
		],
		nzMatchRouter: [
			2,
			"nzMatchRouter",
			"nzMatchRouter",
			booleanAttribute
		]
	},
	exportAs: ["nzMenuItem"],
	features: [ɵɵNgOnChangesFeature],
	ngContentSelectors: _c0$1,
	decls: 2,
	vars: 0,
	consts: [[1, "ant-menu-title-content"]],
	template: function NzMenuItemComponent_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵdomElementStart(0, "span", 0);
			ɵɵprojection(1);
			ɵɵdomElementEnd();
		}
	},
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuItemComponent, [{
		type: Component,
		args: [{
			selector: "[nz-menu-item]",
			exportAs: "nzMenuItem",
			encapsulation: ViewEncapsulation.None,
			template: `
    <span class="ant-menu-title-content">
      <ng-content />
    </span>
  `,
			host: {
				"[class.ant-dropdown-menu-item]": `isMenuInsideDropdown`,
				"[class.ant-dropdown-menu-item-selected]": `isMenuInsideDropdown && nzSelected`,
				"[class.ant-dropdown-menu-item-danger]": `isMenuInsideDropdown && nzDanger`,
				"[class.ant-dropdown-menu-item-disabled]": `isMenuInsideDropdown && nzDisabled`,
				"[class.ant-menu-item]": `!isMenuInsideDropdown`,
				"[class.ant-menu-item-selected]": `!isMenuInsideDropdown && nzSelected`,
				"[class.ant-menu-item-danger]": `!isMenuInsideDropdown && nzDanger`,
				"[class.ant-menu-item-disabled]": `!isMenuInsideDropdown && nzDisabled`,
				"[style.padding-inline-start.px]": "nzPaddingLeft || inlinePaddingLeft",
				"(click)": "clickMenuItem($event)"
			}
		}]
	}], () => [], {
		nzPaddingLeft: [{
			type: Input,
			args: [{ transform: numberAttributeWithZeroFallback }]
		}],
		nzDisabled: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzSelected: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzDanger: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzMatchRouterExact: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzMatchRouter: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		listOfRouterLink: [{
			type: ContentChildren,
			args: [RouterLink, { descendants: true }]
		}]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var MENU_PREFIX$1 = "ant-menu";
var NzSubmenuInlineChildComponent = class {
	constructor() {
		_defineProperty(this, "dir", inject(Directionality).valueSignal);
		_defineProperty(this, "menuClass", input("", ...ngDevMode ? [{ debugName: "menuClass" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "open", input(false, ...ngDevMode ? [{ debugName: "open" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "leavedClassName", input(generateClassName(MENU_PREFIX$1, "submenu-hidden"), ...ngDevMode ? [{ debugName: "leavedClassName" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "mergedClass", computed(() => {
			const customCls = getClassListFromValue(this.menuClass()) || [];
			const cls = [
				MENU_PREFIX$1,
				generateClassName(MENU_PREFIX$1, "inline"),
				generateClassName(MENU_PREFIX$1, "sub"),
				...customCls
			];
			if (this.dir() === "rtl") cls.push(generateClassName(MENU_PREFIX$1, "rtl"));
			return cls;
		}, ...ngDevMode ? [{ debugName: "mergedClass" }] : 		/* istanbul ignore next */ []));
	}
};
_NzSubmenuInlineChildComponent = NzSubmenuInlineChildComponent;
_defineProperty(NzSubmenuInlineChildComponent, "ɵfac", function NzSubmenuInlineChildComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzSubmenuInlineChildComponent)();
});
_defineProperty(NzSubmenuInlineChildComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _NzSubmenuInlineChildComponent,
	selectors: [[
		"",
		"nz-submenu-inline-child",
		""
	]],
	hostVars: 2,
	hostBindings: function NzSubmenuInlineChildComponent_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵclassMap(ctx.mergedClass());
	},
	inputs: {
		menuClass: [1, "menuClass"],
		open: [1, "open"],
		leavedClassName: [1, "leavedClassName"]
	},
	exportAs: ["nzSubmenuInlineChild"],
	features: [ɵɵHostDirectivesFeature([{
		directive: NzAnimationCollapseDirective,
		inputs: [
			"open",
			"open",
			"leavedClassName",
			"leavedClassName"
		]
	}])],
	ngContentSelectors: _c0$1,
	decls: 1,
	vars: 0,
	template: function NzSubmenuInlineChildComponent_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵprojection(0);
		}
	},
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuInlineChildComponent, [{
		type: Component,
		args: [{
			selector: "[nz-submenu-inline-child]",
			exportAs: "nzSubmenuInlineChild",
			encapsulation: ViewEncapsulation.None,
			template: `<ng-content />`,
			hostDirectives: [{
				directive: NzAnimationCollapseDirective,
				inputs: ["open", "leavedClassName"]
			}],
			host: { "[class]": "mergedClass()" }
		}]
	}], null, {
		menuClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "menuClass",
				required: false
			}]
		}],
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
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var ANT_PREFIX = "ant";
var MENU_PREFIX = `${ANT_PREFIX}-menu`;
var SUBMENU_PREFIX = `${MENU_PREFIX}-submenu`;
var DROPDOWN_PREFIX = `${ANT_PREFIX}-dropdown`;
var ANIMATION_PREFIX = `${ANT_PREFIX}-zoom-big`;
var ANIMATION_CLASS = {
	vertical: {
		enter: `${ANIMATION_PREFIX}-enter ${ANIMATION_PREFIX}-enter-active`,
		leave: `${ANIMATION_PREFIX}-leave ${ANIMATION_PREFIX}-leave-active`
	},
	horizontal: SLIDE_UP_ANIMATION_CLASS
};
var NzSubmenuNoneInlineChildComponent = class {
	constructor() {
		_defineProperty(this, "isMenuInsideDropdown", inject(NzIsMenuInsideDropdownToken));
		_defineProperty(this, "dir", inject(Directionality).valueSignal);
		_defineProperty(this, "menuClass", input("", ...ngDevMode ? [{ debugName: "menuClass" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "theme", input("light", ...ngDevMode ? [{ debugName: "theme" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "mode", input("vertical", ...ngDevMode ? [{ debugName: "mode" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "position", input("right", ...ngDevMode ? [{ debugName: "position" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "open", input(false, ...ngDevMode ? [{ debugName: "open" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzDisabled", input(false, ...ngDevMode ? [{ debugName: "nzDisabled" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzTriggerSubMenuAction", input("hover", ...ngDevMode ? [{ debugName: "nzTriggerSubMenuAction" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "subMenuMouseState", output());
		_defineProperty(this, "animationEnter", withAnimationCheck(() => ANIMATION_CLASS[this.mode()].enter));
		_defineProperty(this, "animationLeave", withAnimationCheck(() => ANIMATION_CLASS[this.mode()].leave));
		_defineProperty(this, "submenuClass", computed(() => {
			const cls = [
				SUBMENU_PREFIX,
				generateClassName(SUBMENU_PREFIX, "popup"),
				generateClassName(MENU_PREFIX, this.theme() === "dark" ? "dark" : "light")
			];
			const mode = this.mode();
			const position = this.position() === "left" ? "left" : "right";
			if (mode === "horizontal") cls.push(generateClassName(SUBMENU_PREFIX, "placement-bottom"));
			else if (mode === "vertical") cls.push(generateClassName(SUBMENU_PREFIX, `placement-${position}`));
			if (this.dir() === "rtl") cls.push(generateClassName(SUBMENU_PREFIX, "rtl"));
			return cls;
		}, ...ngDevMode ? [{ debugName: "submenuClass" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "mergedMenuClass", computed(() => {
			const cls = getClassListFromValue(this.menuClass()) || [];
			if (this.isMenuInsideDropdown) cls.push(generateClassName(DROPDOWN_PREFIX, "menu"), generateClassName(DROPDOWN_PREFIX, "menu-sub"), generateClassName(DROPDOWN_PREFIX, "menu-vertical"));
			else cls.push(MENU_PREFIX, generateClassName(MENU_PREFIX, "sub"), generateClassName(MENU_PREFIX, "vertical"));
			if (this.dir() === "rtl") cls.push(generateClassName(MENU_PREFIX, "rtl"));
			return cls;
		}, ...ngDevMode ? [{ debugName: "mergedMenuClass" }] : 		/* istanbul ignore next */ []));
	}
	setMouseState(state) {
		if (!this.nzDisabled() && this.nzTriggerSubMenuAction() === "hover") this.subMenuMouseState.emit(state);
	}
};
_NzSubmenuNoneInlineChildComponent = NzSubmenuNoneInlineChildComponent;
_defineProperty(NzSubmenuNoneInlineChildComponent, "ɵfac", function NzSubmenuNoneInlineChildComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzSubmenuNoneInlineChildComponent)();
});
_defineProperty(NzSubmenuNoneInlineChildComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _NzSubmenuNoneInlineChildComponent,
	selectors: [[
		"",
		"nz-submenu-none-inline-child",
		""
	]],
	hostVars: 2,
	hostBindings: function NzSubmenuNoneInlineChildComponent_HostBindings(rf, ctx) {
		if (rf & 1) {
			ɵɵlistener("mouseenter", function NzSubmenuNoneInlineChildComponent_mouseenter_HostBindingHandler() {
				return ctx.setMouseState(true);
			})("mouseleave", function NzSubmenuNoneInlineChildComponent_mouseleave_HostBindingHandler() {
				return ctx.setMouseState(false);
			});
			ɵɵanimateEnter(function NzSubmenuNoneInlineChildComponent_HostBindings_animateenter_cb() {
				return ctx.animationEnter();
			});
			ɵɵanimateLeave(function NzSubmenuNoneInlineChildComponent_HostBindings_animateleave_cb() {
				return ctx.animationLeave();
			});
		}
		if (rf & 2) ɵɵclassMap(ctx.submenuClass());
	},
	inputs: {
		menuClass: [1, "menuClass"],
		theme: [1, "theme"],
		mode: [1, "mode"],
		position: [1, "position"],
		open: [1, "open"],
		nzDisabled: [1, "nzDisabled"],
		nzTriggerSubMenuAction: [1, "nzTriggerSubMenuAction"]
	},
	outputs: { subMenuMouseState: "subMenuMouseState" },
	exportAs: ["nzSubmenuNoneInlineChild"],
	ngContentSelectors: _c0$1,
	decls: 2,
	vars: 2,
	template: function NzSubmenuNoneInlineChildComponent_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵdomElementStart(0, "div");
			ɵɵprojection(1);
			ɵɵdomElementEnd();
		}
		if (rf & 2) ɵɵclassMap(ctx.mergedMenuClass());
	},
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuNoneInlineChildComponent, [{
		type: Component,
		args: [{
			selector: "[nz-submenu-none-inline-child]",
			exportAs: "nzSubmenuNoneInlineChild",
			encapsulation: ViewEncapsulation.None,
			template: `
    <div [class]="mergedMenuClass()">
      <ng-content />
    </div>
  `,
			host: {
				"[class]": "submenuClass()",
				"(mouseenter)": "setMouseState(true)",
				"(mouseleave)": "setMouseState(false)",
				"[animate.enter]": `animationEnter()`,
				"[animate.leave]": `animationLeave()`
			}
		}]
	}], null, {
		menuClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "menuClass",
				required: false
			}]
		}],
		theme: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "theme",
				required: false
			}]
		}],
		mode: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "mode",
				required: false
			}]
		}],
		position: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "position",
				required: false
			}]
		}],
		open: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "open",
				required: false
			}]
		}],
		nzDisabled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzDisabled",
				required: false
			}]
		}],
		nzTriggerSubMenuAction: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzTriggerSubMenuAction",
				required: false
			}]
		}],
		subMenuMouseState: [{
			type: Output,
			args: ["subMenuMouseState"]
		}]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzSubMenuTitleComponent = class {
	constructor() {
		_defineProperty(this, "isMenuInsideDropdown", inject(NzIsMenuInsideDropdownToken));
		_defineProperty(this, "dir", inject(Directionality).valueSignal);
		_defineProperty(this, "nzIcon", null);
		_defineProperty(this, "nzTitle", null);
		_defineProperty(this, "nzDisabled", false);
		_defineProperty(this, "paddingLeft", null);
		_defineProperty(this, "mode", "vertical");
		_defineProperty(this, "nzTriggerSubMenuAction", "hover");
		_defineProperty(this, "toggleSubMenu", new EventEmitter());
		_defineProperty(this, "subMenuMouseState", new EventEmitter());
	}
	setMouseState(state) {
		if (!this.nzDisabled && this.nzTriggerSubMenuAction === "hover") this.subMenuMouseState.next(state);
	}
	clickTitle() {
		if ((this.mode === "inline" || this.nzTriggerSubMenuAction === "click") && !this.nzDisabled) {
			this.subMenuMouseState.next(true);
			this.toggleSubMenu.emit();
		}
	}
};
_NzSubMenuTitleComponent = NzSubMenuTitleComponent;
_defineProperty(NzSubMenuTitleComponent, "ɵfac", function NzSubMenuTitleComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzSubMenuTitleComponent)();
});
_defineProperty(NzSubMenuTitleComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _NzSubMenuTitleComponent,
	selectors: [[
		"",
		"nz-submenu-title",
		""
	]],
	hostVars: 6,
	hostBindings: function NzSubMenuTitleComponent_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("click", function NzSubMenuTitleComponent_click_HostBindingHandler() {
			return ctx.clickTitle();
		})("mouseenter", function NzSubMenuTitleComponent_mouseenter_HostBindingHandler() {
			return ctx.setMouseState(true);
		})("mouseleave", function NzSubMenuTitleComponent_mouseleave_HostBindingHandler() {
			return ctx.setMouseState(false);
		});
		if (rf & 2) {
			ɵɵstyleProp("padding-inline-start", ctx.paddingLeft, "px");
			ɵɵclassProp("ant-dropdown-menu-submenu-title", ctx.isMenuInsideDropdown)("ant-menu-submenu-title", !ctx.isMenuInsideDropdown);
		}
	},
	inputs: {
		nzIcon: "nzIcon",
		nzTitle: "nzTitle",
		nzDisabled: "nzDisabled",
		paddingLeft: "paddingLeft",
		mode: "mode",
		nzTriggerSubMenuAction: "nzTriggerSubMenuAction"
	},
	outputs: {
		toggleSubMenu: "toggleSubMenu",
		subMenuMouseState: "subMenuMouseState"
	},
	exportAs: ["nzSubmenuTitle"],
	ngContentSelectors: _c0$1,
	decls: 5,
	vars: 3,
	consts: [
		[3, "nzType"],
		[4, "nzStringTemplateOutlet"],
		[1, "ant-dropdown-menu-submenu-expand-icon"],
		[1, "ant-menu-submenu-arrow"],
		[1, "ant-menu-title-content"],
		[
			1,
			"ant-dropdown-menu-submenu-arrow-icon",
			3,
			"nzType"
		]
	],
	template: function NzSubMenuTitleComponent_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵconditionalCreate(0, NzSubMenuTitleComponent_Conditional_0_Template, 1, 1, "nz-icon", 0);
			ɵɵtemplate(1, NzSubMenuTitleComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
			ɵɵprojection(2);
			ɵɵconditionalCreate(3, NzSubMenuTitleComponent_Conditional_3_Template, 2, 1, "span", 2)(4, NzSubMenuTitleComponent_Conditional_4_Template, 1, 0, "span", 3);
		}
		if (rf & 2) {
			ɵɵconditional(ctx.nzIcon ? 0 : -1);
			ɵɵadvance();
			ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
			ɵɵadvance(2);
			ɵɵconditional(ctx.isMenuInsideDropdown ? 3 : 4);
		}
	},
	dependencies: [
		NzIconModule,
		NzIconDirective,
		NzOutletModule,
		NzStringTemplateOutletDirective
	],
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubMenuTitleComponent, [{
		type: Component,
		args: [{
			selector: "[nz-submenu-title]",
			exportAs: "nzSubmenuTitle",
			encapsulation: ViewEncapsulation.None,
			template: `
    @if (nzIcon) {
      <nz-icon [nzType]="nzIcon" />
    }
    <ng-container *nzStringTemplateOutlet="nzTitle">
      <span class="ant-menu-title-content">{{ nzTitle }}</span>
    </ng-container>
    <ng-content />
    @if (isMenuInsideDropdown) {
      <span class="ant-dropdown-menu-submenu-expand-icon">
        <nz-icon [nzType]="dir() === 'rtl' ? 'left' : 'right'" class="ant-dropdown-menu-submenu-arrow-icon" />
      </span>
    } @else {
      <span class="ant-menu-submenu-arrow"></span>
    }
  `,
			host: {
				"[class.ant-dropdown-menu-submenu-title]": "isMenuInsideDropdown",
				"[class.ant-menu-submenu-title]": "!isMenuInsideDropdown",
				"[style.padding-inline-start.px]": "paddingLeft",
				"(click)": "clickTitle()",
				"(mouseenter)": "setMouseState(true)",
				"(mouseleave)": "setMouseState(false)"
			},
			imports: [NzIconModule, NzOutletModule]
		}]
	}], null, {
		nzIcon: [{ type: Input }],
		nzTitle: [{ type: Input }],
		nzDisabled: [{ type: Input }],
		paddingLeft: [{ type: Input }],
		mode: [{ type: Input }],
		nzTriggerSubMenuAction: [{ type: Input }],
		toggleSubMenu: [{ type: Output }],
		subMenuMouseState: [{ type: Output }]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var listOfVerticalPositions = [
	POSITION_MAP.rightTop,
	POSITION_MAP.right,
	POSITION_MAP.rightBottom,
	POSITION_MAP.leftTop,
	POSITION_MAP.left,
	POSITION_MAP.leftBottom
];
var listOfHorizontalPositions = [
	POSITION_MAP.bottomLeft,
	POSITION_MAP.bottomRight,
	POSITION_MAP.topRight,
	POSITION_MAP.topLeft
];
var NzSubMenuComponent = class {
	constructor() {
		_defineProperty(this, "nzSubmenuService", inject(NzSubmenuService));
		_defineProperty(this, "isMenuInsideDropdown", inject(NzIsMenuInsideDropdownToken));
		_defineProperty(this, "noAnimation", inject(NzNoAnimationDirective, {
			optional: true,
			host: true
		}));
		_defineProperty(this, "dir", inject(Directionality).valueSignal);
		_defineProperty(this, "destroyRef", inject(DestroyRef));
		_defineProperty(this, "nzMenuService", inject(MenuService));
		_defineProperty(this, "cdr", inject(ChangeDetectorRef));
		_defineProperty(this, "platform", inject(Platform));
		_defineProperty(this, "nzMenuClassName", "");
		_defineProperty(this, "nzPaddingLeft", null);
		_defineProperty(this, "nzTitle", null);
		_defineProperty(this, "nzIcon", null);
		_defineProperty(this, "nzTriggerSubMenuAction", "hover");
		_defineProperty(this, "nzOpen", false);
		_defineProperty(this, "nzDisabled", false);
		_defineProperty(this, "nzPlacement", "bottomLeft");
		_defineProperty(this, "nzOpenChange", new EventEmitter());
		_defineProperty(this, "cdkOverlayOrigin", null);
		_defineProperty(this, "listOfNzSubMenuComponent", null);
		_defineProperty(this, "listOfNzMenuItemDirective", null);
		_defineProperty(this, "level", this.nzSubmenuService.level);
		_defineProperty(this, "position", "right");
		_defineProperty(this, "triggerWidth", null);
		_defineProperty(this, "theme", "light");
		_defineProperty(this, "mode", "vertical");
		_defineProperty(this, "inlinePaddingLeft", null);
		_defineProperty(this, "overlayPositions", listOfVerticalPositions);
		_defineProperty(this, "isSelected", false);
		_defineProperty(this, "isActive", false);
	}
	/** set the submenu host open status directly **/
	setOpenStateWithoutDebounce(open) {
		this.nzSubmenuService.setOpenStateWithoutDebounce(open);
	}
	toggleSubMenu() {
		this.setOpenStateWithoutDebounce(!this.nzOpen);
	}
	setMouseEnterState(value) {
		this.isActive = value;
		if (this.mode !== "inline") this.nzSubmenuService.setMouseEnterTitleOrOverlayState(value);
	}
	setTriggerWidth() {
		if (this.mode === "horizontal" && this.platform.isBrowser && this.cdkOverlayOrigin && this.nzPlacement === "bottomLeft")
 /** TODO: fast dom */
		this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
	}
	onPositionChange(position) {
		const placement = getPlacementName(position);
		if (placement === "rightTop" || placement === "rightBottom" || placement === "right") this.position = "right";
		else if (placement === "leftTop" || placement === "leftBottom" || placement === "left") this.position = "left";
	}
	ngOnInit() {
		/** submenu theme update **/
		this.nzMenuService.theme$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((theme) => {
			this.theme = theme;
			this.cdr.markForCheck();
		});
		/** submenu mode update **/
		this.nzSubmenuService.mode$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((mode) => {
			this.mode = mode;
			if (mode === "horizontal") this.overlayPositions = [POSITION_MAP[this.nzPlacement], ...listOfHorizontalPositions];
			else if (mode === "vertical") this.overlayPositions = listOfVerticalPositions;
			this.cdr.markForCheck();
		});
		/** inlineIndent update **/
		combineLatest([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(([mode, inlineIndent]) => {
			this.inlinePaddingLeft = mode === "inline" ? this.level * inlineIndent : null;
			this.cdr.markForCheck();
		});
		/** current submenu open status **/
		this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((open) => {
			this.isActive = open;
			if (open !== this.nzOpen) {
				this.setTriggerWidth();
				this.nzOpen = open;
				this.nzOpenChange.emit(this.nzOpen);
				this.cdr.markForCheck();
			}
		});
	}
	ngAfterContentInit() {
		this.setTriggerWidth();
		const listOfNzMenuItemDirective = this.listOfNzMenuItemDirective;
		const changes = listOfNzMenuItemDirective.changes;
		const mergedObservable = merge(changes, ...listOfNzMenuItemDirective.map((menu) => menu.selected$));
		changes.pipe(startWith(listOfNzMenuItemDirective), switchMap(() => mergedObservable), startWith(true), map(() => listOfNzMenuItemDirective.some((e) => e.nzSelected)), takeUntilDestroyed(this.destroyRef)).subscribe((selected) => {
			this.isSelected = selected;
			this.cdr.markForCheck();
		});
	}
	ngOnChanges(changes) {
		const { nzOpen } = changes;
		if (nzOpen) {
			this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen);
			this.setTriggerWidth();
		}
	}
};
_NzSubMenuComponent = NzSubMenuComponent;
_defineProperty(NzSubMenuComponent, "ɵfac", function NzSubMenuComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzSubMenuComponent)();
});
_defineProperty(NzSubMenuComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _NzSubMenuComponent,
	selectors: [[
		"",
		"nz-submenu",
		""
	]],
	contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuery(dirIndex, _NzSubMenuComponent, 5)(dirIndex, NzMenuItemComponent, 5);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
		}
	},
	viewQuery: function NzSubMenuComponent_Query(rf, ctx) {
		if (rf & 1) ɵɵviewQuery(CdkOverlayOrigin, 7, ElementRef);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
		}
	},
	hostVars: 34,
	hostBindings: function NzSubMenuComponent_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵclassProp("ant-dropdown-menu-submenu", ctx.isMenuInsideDropdown)("ant-dropdown-menu-submenu-disabled", ctx.isMenuInsideDropdown && ctx.nzDisabled)("ant-dropdown-menu-submenu-open", ctx.isMenuInsideDropdown && ctx.nzOpen)("ant-dropdown-menu-submenu-selected", ctx.isMenuInsideDropdown && ctx.isSelected)("ant-dropdown-menu-submenu-vertical", ctx.isMenuInsideDropdown && ctx.mode === "vertical")("ant-dropdown-menu-submenu-horizontal", ctx.isMenuInsideDropdown && ctx.mode === "horizontal")("ant-dropdown-menu-submenu-inline", ctx.isMenuInsideDropdown && ctx.mode === "inline")("ant-dropdown-menu-submenu-active", ctx.isMenuInsideDropdown && ctx.isActive)("ant-menu-submenu", !ctx.isMenuInsideDropdown)("ant-menu-submenu-disabled", !ctx.isMenuInsideDropdown && ctx.nzDisabled)("ant-menu-submenu-open", !ctx.isMenuInsideDropdown && ctx.nzOpen)("ant-menu-submenu-selected", !ctx.isMenuInsideDropdown && ctx.isSelected)("ant-menu-submenu-vertical", !ctx.isMenuInsideDropdown && ctx.mode === "vertical")("ant-menu-submenu-horizontal", !ctx.isMenuInsideDropdown && ctx.mode === "horizontal")("ant-menu-submenu-inline", !ctx.isMenuInsideDropdown && ctx.mode === "inline")("ant-menu-submenu-active", !ctx.isMenuInsideDropdown && ctx.isActive)("ant-menu-submenu-rtl", ctx.dir() === "rtl");
	},
	inputs: {
		nzMenuClassName: "nzMenuClassName",
		nzPaddingLeft: "nzPaddingLeft",
		nzTitle: "nzTitle",
		nzIcon: "nzIcon",
		nzTriggerSubMenuAction: "nzTriggerSubMenuAction",
		nzOpen: [
			2,
			"nzOpen",
			"nzOpen",
			booleanAttribute
		],
		nzDisabled: [
			2,
			"nzDisabled",
			"nzDisabled",
			booleanAttribute
		],
		nzPlacement: "nzPlacement"
	},
	outputs: { nzOpenChange: "nzOpenChange" },
	exportAs: ["nzSubmenu"],
	features: [ɵɵProvidersFeature([NzSubmenuService]), ɵɵNgOnChangesFeature],
	ngContentSelectors: _c2,
	decls: 7,
	vars: 8,
	consts: [
		["origin", "cdkOverlayOrigin"],
		["subMenuTemplate", ""],
		[
			"nz-submenu-title",
			"",
			"cdkOverlayOrigin",
			"",
			3,
			"subMenuMouseState",
			"toggleSubMenu",
			"nzIcon",
			"nzTitle",
			"mode",
			"nzDisabled",
			"paddingLeft",
			"nzTriggerSubMenuAction"
		],
		[
			"nz-submenu-inline-child",
			"",
			"leavedClassName",
			"ant-menu-submenu-hidden",
			3,
			"open",
			"menuClass"
		],
		[
			"cdkConnectedOverlay",
			"",
			"cdkConnectedOverlayTransformOriginOn",
			".ant-menu-submenu",
			3,
			"cdkConnectedOverlayPositions",
			"cdkConnectedOverlayOrigin",
			"cdkConnectedOverlayWidth",
			"cdkConnectedOverlayOpen"
		],
		[3, "ngTemplateOutlet"],
		[
			"cdkConnectedOverlay",
			"",
			"cdkConnectedOverlayTransformOriginOn",
			".ant-menu-submenu",
			3,
			"positionChange",
			"overlayOutsideClick",
			"cdkConnectedOverlayPositions",
			"cdkConnectedOverlayOrigin",
			"cdkConnectedOverlayWidth",
			"cdkConnectedOverlayOpen"
		],
		[
			"nz-submenu-none-inline-child",
			"",
			3,
			"subMenuMouseState",
			"theme",
			"mode",
			"open",
			"position",
			"menuClass",
			"nzDisabled",
			"nzTriggerSubMenuAction",
			"nzNoAnimation"
		]
	],
	template: function NzSubMenuComponent_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef(_c1);
			ɵɵelementStart(0, "div", 2, 0);
			ɵɵlistener("subMenuMouseState", function NzSubMenuComponent_Template_div_subMenuMouseState_0_listener($event) {
				return ctx.setMouseEnterState($event);
			})("toggleSubMenu", function NzSubMenuComponent_Template_div_toggleSubMenu_0_listener() {
				return ctx.toggleSubMenu();
			});
			ɵɵconditionalCreate(2, NzSubMenuComponent_Conditional_2_Template, 1, 0);
			ɵɵelementEnd();
			ɵɵconditionalCreate(3, NzSubMenuComponent_Conditional_3_Template, 2, 3, "div", 3)(4, NzSubMenuComponent_Conditional_4_Template, 1, 4, null, 4);
			ɵɵtemplate(5, NzSubMenuComponent_ng_template_5_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
		}
		if (rf & 2) {
			ɵɵproperty("nzIcon", ctx.nzIcon)("nzTitle", ctx.nzTitle)("mode", ctx.mode)("nzDisabled", ctx.nzDisabled)("paddingLeft", ctx.nzPaddingLeft || ctx.inlinePaddingLeft)("nzTriggerSubMenuAction", ctx.nzTriggerSubMenuAction);
			ɵɵadvance(2);
			ɵɵconditional(!ctx.nzTitle ? 2 : -1);
			ɵɵadvance();
			ɵɵconditional(ctx.mode === "inline" ? 3 : 4);
		}
	},
	dependencies: [
		NgTemplateOutlet,
		NzSubMenuTitleComponent,
		NzSubmenuInlineChildComponent,
		NzNoAnimationDirective,
		NzSubmenuNoneInlineChildComponent,
		OverlayModule,
		CdkConnectedOverlay,
		CdkOverlayOrigin
	],
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubMenuComponent, [{
		type: Component,
		args: [{
			selector: "[nz-submenu]",
			exportAs: "nzSubmenu",
			providers: [NzSubmenuService],
			encapsulation: ViewEncapsulation.None,
			template: `
    <div
      nz-submenu-title
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzIcon]="nzIcon"
      [nzTitle]="nzTitle"
      [mode]="mode"
      [nzDisabled]="nzDisabled"
      [paddingLeft]="nzPaddingLeft || inlinePaddingLeft"
      [nzTriggerSubMenuAction]="nzTriggerSubMenuAction"
      (subMenuMouseState)="setMouseEnterState($event)"
      (toggleSubMenu)="toggleSubMenu()"
    >
      @if (!nzTitle) {
        <ng-content select="[title]" />
      }
    </div>
    @if (mode === 'inline') {
      <div
        nz-submenu-inline-child
        [open]="nzOpen"
        [menuClass]="nzMenuClassName"
        leavedClassName="ant-menu-submenu-hidden"
      >
        <ng-template [ngTemplateOutlet]="subMenuTemplate" />
      </div>
    } @else {
      <ng-template
        cdkConnectedOverlay
        (positionChange)="onPositionChange($event)"
        [cdkConnectedOverlayPositions]="overlayPositions"
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayWidth]="triggerWidth!"
        [cdkConnectedOverlayOpen]="nzOpen"
        cdkConnectedOverlayTransformOriginOn=".ant-menu-submenu"
        (overlayOutsideClick)="setMouseEnterState(false)"
      >
        <div
          nz-submenu-none-inline-child
          [theme]="theme"
          [mode]="mode"
          [open]="nzOpen"
          [position]="position"
          [menuClass]="nzMenuClassName"
          [nzDisabled]="nzDisabled"
          [nzTriggerSubMenuAction]="nzTriggerSubMenuAction"
          [nzNoAnimation]="noAnimation?.nzNoAnimation?.()"
          (subMenuMouseState)="setMouseEnterState($event)"
        >
          <ng-template [ngTemplateOutlet]="subMenuTemplate" />
        </div>
      </ng-template>
    }

    <ng-template #subMenuTemplate>
      <ng-content />
    </ng-template>
  `,
			host: {
				"[class.ant-dropdown-menu-submenu]": `isMenuInsideDropdown`,
				"[class.ant-dropdown-menu-submenu-disabled]": `isMenuInsideDropdown && nzDisabled`,
				"[class.ant-dropdown-menu-submenu-open]": `isMenuInsideDropdown && nzOpen`,
				"[class.ant-dropdown-menu-submenu-selected]": `isMenuInsideDropdown && isSelected`,
				"[class.ant-dropdown-menu-submenu-vertical]": `isMenuInsideDropdown && mode === 'vertical'`,
				"[class.ant-dropdown-menu-submenu-horizontal]": `isMenuInsideDropdown && mode === 'horizontal'`,
				"[class.ant-dropdown-menu-submenu-inline]": `isMenuInsideDropdown && mode === 'inline'`,
				"[class.ant-dropdown-menu-submenu-active]": `isMenuInsideDropdown && isActive`,
				"[class.ant-menu-submenu]": `!isMenuInsideDropdown`,
				"[class.ant-menu-submenu-disabled]": `!isMenuInsideDropdown && nzDisabled`,
				"[class.ant-menu-submenu-open]": `!isMenuInsideDropdown && nzOpen`,
				"[class.ant-menu-submenu-selected]": `!isMenuInsideDropdown && isSelected`,
				"[class.ant-menu-submenu-vertical]": `!isMenuInsideDropdown && mode === 'vertical'`,
				"[class.ant-menu-submenu-horizontal]": `!isMenuInsideDropdown && mode === 'horizontal'`,
				"[class.ant-menu-submenu-inline]": `!isMenuInsideDropdown && mode === 'inline'`,
				"[class.ant-menu-submenu-active]": `!isMenuInsideDropdown && isActive`,
				"[class.ant-menu-submenu-rtl]": `dir() === 'rtl'`
			},
			imports: [
				NgTemplateOutlet,
				NzSubMenuTitleComponent,
				NzSubmenuInlineChildComponent,
				NzNoAnimationDirective,
				NzSubmenuNoneInlineChildComponent,
				OverlayModule
			]
		}]
	}], null, {
		nzMenuClassName: [{ type: Input }],
		nzPaddingLeft: [{ type: Input }],
		nzTitle: [{ type: Input }],
		nzIcon: [{ type: Input }],
		nzTriggerSubMenuAction: [{ type: Input }],
		nzOpen: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzDisabled: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzPlacement: [{ type: Input }],
		nzOpenChange: [{ type: Output }],
		cdkOverlayOrigin: [{
			type: ViewChild,
			args: [CdkOverlayOrigin, {
				static: true,
				read: ElementRef
			}]
		}],
		listOfNzSubMenuComponent: [{
			type: ContentChildren,
			args: [forwardRef(() => NzSubMenuComponent), { descendants: true }]
		}],
		listOfNzMenuItemDirective: [{
			type: ContentChildren,
			args: [NzMenuItemComponent, { descendants: true }]
		}]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
function MenuServiceFactory() {
	const serviceInsideDropdown = inject(MenuService, {
		skipSelf: true,
		optional: true
	});
	const serviceOutsideDropdown = inject(NzMenuServiceLocalToken);
	return serviceInsideDropdown !== null && serviceInsideDropdown !== void 0 ? serviceInsideDropdown : serviceOutsideDropdown;
}
function MenuDropdownTokenFactory() {
	const isMenuInsideDropdownToken = inject(NzIsMenuInsideDropdownToken, {
		skipSelf: true,
		optional: true
	});
	return isMenuInsideDropdownToken !== null && isMenuInsideDropdownToken !== void 0 ? isMenuInsideDropdownToken : false;
}
var NzMenuDirective = class {
	constructor() {
		_defineProperty(this, "nzMenuService", inject(MenuService));
		_defineProperty(this, "destroyRef", inject(DestroyRef));
		_defineProperty(this, "cdr", inject(ChangeDetectorRef));
		_defineProperty(this, "dir", inject(Directionality).valueSignal);
		_defineProperty(this, "isMenuInsideDropdown", inject(NzIsMenuInsideDropdownToken));
		_defineProperty(this, "listOfNzMenuItemDirective", void 0);
		_defineProperty(this, "listOfNzSubMenuComponent", void 0);
		_defineProperty(this, "nzInlineIndent", 24);
		_defineProperty(this, "nzTheme", "light");
		_defineProperty(this, "nzMode", "vertical");
		_defineProperty(this, "nzInlineCollapsed", false);
		_defineProperty(this, "nzSelectable", !this.isMenuInsideDropdown);
		_defineProperty(this, "nzClick", new EventEmitter());
		_defineProperty(this, "actualMode", "vertical");
		_defineProperty(this, "inlineCollapsed$", new BehaviorSubject(this.nzInlineCollapsed));
		_defineProperty(this, "mode$", new BehaviorSubject(this.nzMode));
		_defineProperty(this, "listOfOpenedNzSubMenuComponent", []);
	}
	setInlineCollapsed(inlineCollapsed) {
		this.nzInlineCollapsed = inlineCollapsed;
		this.inlineCollapsed$.next(inlineCollapsed);
	}
	updateInlineCollapse() {
		if (this.listOfNzMenuItemDirective) if (this.nzInlineCollapsed) {
			this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter((submenu) => submenu.nzOpen);
			this.listOfNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(false));
		} else {
			this.listOfOpenedNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(true));
			this.listOfOpenedNzSubMenuComponent = [];
		}
	}
	ngOnInit() {
		combineLatest([this.inlineCollapsed$, this.mode$]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(([inlineCollapsed, mode]) => {
			this.actualMode = inlineCollapsed ? "vertical" : mode;
			this.nzMenuService.setMode(this.actualMode);
			this.cdr.markForCheck();
		});
		this.nzMenuService.descendantMenuItemClick$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((menu) => {
			this.nzClick.emit(menu);
			if (this.nzSelectable && !menu.nzMatchRouter) this.listOfNzMenuItemDirective.forEach((item) => item.setSelectedState(item === menu));
		});
	}
	ngAfterContentInit() {
		this.inlineCollapsed$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
			this.updateInlineCollapse();
			this.cdr.markForCheck();
		});
	}
	ngOnChanges(changes) {
		const { nzInlineCollapsed, nzInlineIndent, nzTheme, nzMode } = changes;
		if (nzInlineCollapsed) this.inlineCollapsed$.next(this.nzInlineCollapsed);
		if (nzInlineIndent) this.nzMenuService.setInlineIndent(this.nzInlineIndent);
		if (nzTheme) this.nzMenuService.setTheme(this.nzTheme);
		if (nzMode) {
			this.mode$.next(this.nzMode);
			if (!nzMode.isFirstChange() && this.listOfNzSubMenuComponent) this.listOfNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(false));
		}
	}
};
_NzMenuDirective = NzMenuDirective;
_defineProperty(NzMenuDirective, "ɵfac", function NzMenuDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzMenuDirective)();
});
_defineProperty(NzMenuDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzMenuDirective,
	selectors: [[
		"",
		"nz-menu",
		""
	]],
	contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuery(dirIndex, NzMenuItemComponent, 5)(dirIndex, NzSubMenuComponent, 5);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
		}
	},
	hostVars: 34,
	hostBindings: function NzMenuDirective_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵclassProp("ant-dropdown-menu", ctx.isMenuInsideDropdown)("ant-dropdown-menu-root", ctx.isMenuInsideDropdown)("ant-dropdown-menu-light", ctx.isMenuInsideDropdown && ctx.nzTheme === "light")("ant-dropdown-menu-dark", ctx.isMenuInsideDropdown && ctx.nzTheme === "dark")("ant-dropdown-menu-vertical", ctx.isMenuInsideDropdown && ctx.actualMode === "vertical")("ant-dropdown-menu-horizontal", ctx.isMenuInsideDropdown && ctx.actualMode === "horizontal")("ant-dropdown-menu-inline", ctx.isMenuInsideDropdown && ctx.actualMode === "inline")("ant-dropdown-menu-inline-collapsed", ctx.isMenuInsideDropdown && ctx.nzInlineCollapsed)("ant-menu", !ctx.isMenuInsideDropdown)("ant-menu-root", !ctx.isMenuInsideDropdown)("ant-menu-light", !ctx.isMenuInsideDropdown && ctx.nzTheme === "light")("ant-menu-dark", !ctx.isMenuInsideDropdown && ctx.nzTheme === "dark")("ant-menu-vertical", !ctx.isMenuInsideDropdown && ctx.actualMode === "vertical")("ant-menu-horizontal", !ctx.isMenuInsideDropdown && ctx.actualMode === "horizontal")("ant-menu-inline", !ctx.isMenuInsideDropdown && ctx.actualMode === "inline")("ant-menu-inline-collapsed", !ctx.isMenuInsideDropdown && ctx.nzInlineCollapsed)("ant-menu-rtl", ctx.dir() === "rtl");
	},
	inputs: {
		nzInlineIndent: "nzInlineIndent",
		nzTheme: "nzTheme",
		nzMode: "nzMode",
		nzInlineCollapsed: [
			2,
			"nzInlineCollapsed",
			"nzInlineCollapsed",
			booleanAttribute
		],
		nzSelectable: [
			2,
			"nzSelectable",
			"nzSelectable",
			booleanAttribute
		]
	},
	outputs: { nzClick: "nzClick" },
	exportAs: ["nzMenu"],
	features: [ɵɵProvidersFeature([
		{
			provide: NzMenuServiceLocalToken,
			useClass: MenuService
		},
		{
			provide: MenuService,
			useFactory: MenuServiceFactory
		},
		{
			provide: NzIsMenuInsideDropdownToken,
			useFactory: MenuDropdownTokenFactory
		}
	]), ɵɵNgOnChangesFeature]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuDirective, [{
		type: Directive,
		args: [{
			selector: "[nz-menu]",
			exportAs: "nzMenu",
			providers: [
				{
					provide: NzMenuServiceLocalToken,
					useClass: MenuService
				},
				{
					provide: MenuService,
					useFactory: MenuServiceFactory
				},
				{
					provide: NzIsMenuInsideDropdownToken,
					useFactory: MenuDropdownTokenFactory
				}
			],
			host: {
				"[class.ant-dropdown-menu]": `isMenuInsideDropdown`,
				"[class.ant-dropdown-menu-root]": `isMenuInsideDropdown`,
				"[class.ant-dropdown-menu-light]": `isMenuInsideDropdown && nzTheme === 'light'`,
				"[class.ant-dropdown-menu-dark]": `isMenuInsideDropdown && nzTheme === 'dark'`,
				"[class.ant-dropdown-menu-vertical]": `isMenuInsideDropdown && actualMode === 'vertical'`,
				"[class.ant-dropdown-menu-horizontal]": `isMenuInsideDropdown && actualMode === 'horizontal'`,
				"[class.ant-dropdown-menu-inline]": `isMenuInsideDropdown && actualMode === 'inline'`,
				"[class.ant-dropdown-menu-inline-collapsed]": `isMenuInsideDropdown && nzInlineCollapsed`,
				"[class.ant-menu]": `!isMenuInsideDropdown`,
				"[class.ant-menu-root]": `!isMenuInsideDropdown`,
				"[class.ant-menu-light]": `!isMenuInsideDropdown && nzTheme === 'light'`,
				"[class.ant-menu-dark]": `!isMenuInsideDropdown && nzTheme === 'dark'`,
				"[class.ant-menu-vertical]": `!isMenuInsideDropdown && actualMode === 'vertical'`,
				"[class.ant-menu-horizontal]": `!isMenuInsideDropdown && actualMode === 'horizontal'`,
				"[class.ant-menu-inline]": `!isMenuInsideDropdown && actualMode === 'inline'`,
				"[class.ant-menu-inline-collapsed]": `!isMenuInsideDropdown && nzInlineCollapsed`,
				"[class.ant-menu-rtl]": `dir() === 'rtl'`
			}
		}]
	}], null, {
		listOfNzMenuItemDirective: [{
			type: ContentChildren,
			args: [NzMenuItemComponent, { descendants: true }]
		}],
		listOfNzSubMenuComponent: [{
			type: ContentChildren,
			args: [NzSubMenuComponent, { descendants: true }]
		}],
		nzInlineIndent: [{ type: Input }],
		nzTheme: [{ type: Input }],
		nzMode: [{ type: Input }],
		nzInlineCollapsed: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzSelectable: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzClick: [{ type: Output }]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
function MenuGroupFactory() {
	const isMenuInsideDropdownToken = inject(NzIsMenuInsideDropdownToken, {
		optional: true,
		skipSelf: true
	});
	return isMenuInsideDropdownToken !== null && isMenuInsideDropdownToken !== void 0 ? isMenuInsideDropdownToken : false;
}
var NzMenuGroupComponent = class {
	constructor() {
		_defineProperty(this, "renderer", inject(Renderer2));
		_defineProperty(this, "isMenuInsideDropdown", inject(NzIsMenuInsideDropdownToken));
		_defineProperty(this, "nzTitle", void 0);
		_defineProperty(this, "titleElement", void 0);
	}
	ngAfterViewInit() {
		const ulElement = this.titleElement.nativeElement.nextElementSibling;
		if (ulElement) {
			/** add classname to ul **/
			const className = this.isMenuInsideDropdown ? "ant-dropdown-menu-item-group-list" : "ant-menu-item-group-list";
			this.renderer.addClass(ulElement, className);
		}
	}
};
_NzMenuGroupComponent = NzMenuGroupComponent;
_defineProperty(NzMenuGroupComponent, "ɵfac", function NzMenuGroupComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzMenuGroupComponent)();
});
_defineProperty(NzMenuGroupComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _NzMenuGroupComponent,
	selectors: [[
		"",
		"nz-menu-group",
		""
	]],
	viewQuery: function NzMenuGroupComponent_Query(rf, ctx) {
		if (rf & 1) ɵɵviewQuery(_c3, 5);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleElement = _t.first);
		}
	},
	hostVars: 4,
	hostBindings: function NzMenuGroupComponent_HostBindings(rf, ctx) {
		if (rf & 2) ɵɵclassProp("ant-menu-item-group", !ctx.isMenuInsideDropdown)("ant-dropdown-menu-item-group", ctx.isMenuInsideDropdown);
	},
	inputs: { nzTitle: "nzTitle" },
	exportAs: ["nzMenuGroup"],
	features: [ɵɵProvidersFeature([{
		provide: NzIsMenuInsideDropdownToken,
		useFactory: MenuGroupFactory
	}])],
	ngContentSelectors: _c5,
	decls: 5,
	vars: 6,
	consts: [["titleElement", ""], [4, "nzStringTemplateOutlet"]],
	template: function NzMenuGroupComponent_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef(_c4);
			ɵɵelementStart(0, "div", null, 0);
			ɵɵtemplate(2, NzMenuGroupComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
			ɵɵconditionalCreate(3, NzMenuGroupComponent_Conditional_3_Template, 1, 0);
			ɵɵelementEnd();
			ɵɵprojection(4);
		}
		if (rf & 2) {
			ɵɵclassProp("ant-menu-item-group-title", !ctx.isMenuInsideDropdown)("ant-dropdown-menu-item-group-title", ctx.isMenuInsideDropdown);
			ɵɵadvance(2);
			ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
			ɵɵadvance();
			ɵɵconditional(!ctx.nzTitle ? 3 : -1);
		}
	},
	dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuGroupComponent, [{
		type: Component,
		args: [{
			selector: "[nz-menu-group]",
			exportAs: "nzMenuGroup",
			providers: [{
				provide: NzIsMenuInsideDropdownToken,
				useFactory: MenuGroupFactory
			}],
			template: `
    <div
      [class.ant-menu-item-group-title]="!isMenuInsideDropdown"
      [class.ant-dropdown-menu-item-group-title]="isMenuInsideDropdown"
      #titleElement
    >
      <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      @if (!nzTitle) {
        <ng-content select="[title]" />
      }
    </div>
    <ng-content />
  `,
			imports: [NzOutletModule],
			host: {
				"[class.ant-menu-item-group]": "!isMenuInsideDropdown",
				"[class.ant-dropdown-menu-item-group]": "isMenuInsideDropdown"
			},
			encapsulation: ViewEncapsulation.None
		}]
	}], null, {
		nzTitle: [{ type: Input }],
		titleElement: [{
			type: ViewChild,
			args: ["titleElement"]
		}]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzMenuDividerDirective = class {};
_NzMenuDividerDirective = NzMenuDividerDirective;
_defineProperty(NzMenuDividerDirective, "ɵfac", function NzMenuDividerDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzMenuDividerDirective)();
});
_defineProperty(NzMenuDividerDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzMenuDividerDirective,
	selectors: [[
		"",
		"nz-menu-divider",
		""
	]],
	hostAttrs: [1, "ant-dropdown-menu-item-divider"],
	exportAs: ["nzMenuDivider"]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuDividerDirective, [{
		type: Directive,
		args: [{
			selector: "[nz-menu-divider]",
			exportAs: "nzMenuDivider",
			host: { class: "ant-dropdown-menu-item-divider" }
		}]
	}], null, null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzMenuModule = class {};
_NzMenuModule = NzMenuModule;
_defineProperty(NzMenuModule, "ɵfac", function NzMenuModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzMenuModule)();
});
_defineProperty(NzMenuModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NzMenuModule,
	imports: [
		NzMenuDirective,
		NzMenuItemComponent,
		NzSubMenuComponent,
		NzMenuDividerDirective,
		NzMenuGroupComponent,
		NzSubMenuTitleComponent,
		NzSubmenuInlineChildComponent,
		NzSubmenuNoneInlineChildComponent
	],
	exports: [
		NzMenuDirective,
		NzMenuItemComponent,
		NzSubMenuComponent,
		NzMenuDividerDirective,
		NzMenuGroupComponent
	]
}));
_defineProperty(NzMenuModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({ imports: [
	NzSubMenuComponent,
	NzMenuGroupComponent,
	NzSubMenuTitleComponent
] }));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuModule, [{
		type: NgModule,
		args: [{
			imports: [
				NzMenuDirective,
				NzMenuItemComponent,
				NzSubMenuComponent,
				NzMenuDividerDirective,
				NzMenuGroupComponent,
				NzSubMenuTitleComponent,
				NzSubmenuInlineChildComponent,
				NzSubmenuNoneInlineChildComponent
			],
			exports: [
				NzMenuDirective,
				NzMenuItemComponent,
				NzSubMenuComponent,
				NzMenuDividerDirective,
				NzMenuGroupComponent
			]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-dropdown.mjs
var _NzContextMenuServiceModule;
var _NzDropdownADirective;
var _NzDropdownMenuComponent;
var _NzDropdownModule;
var _NzContextMenuService;
var _c0 = ["*"];
function NzDropdownMenuComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "div", 1);
}
function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "div", 0);
		ɵɵanimateLeave(function NzDropdownMenuComponent_ng_template_0_Template_animateleave_cb() {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().slideAnimationLeave());
		});
		ɵɵanimateEnter(function NzDropdownMenuComponent_ng_template_0_Template_animateenter_cb() {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().slideAnimationEnter());
		});
		ɵɵanimateLeaveListener(function NzDropdownMenuComponent_ng_template_0_Template_div_animateleave_0_listener($event) {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onAnimationEvent($event));
		});
		ɵɵlistener("mouseenter", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().setMouseState(true));
		})("mouseleave", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().setMouseState(false));
		});
		ɵɵconditionalCreate(1, NzDropdownMenuComponent_ng_template_0_Conditional_1_Template, 1, 0, "div", 1);
		ɵɵprojection(2);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		var _ctx_r1$noAnimation, _ctx_r1$noAnimation$n;
		const ctx_r1 = ɵɵnextContext();
		ɵɵstyleMap(ctx_r1.nzOverlayStyle);
		ɵɵclassMap(ctx_r1.nzOverlayClassName);
		ɵɵclassProp("ant-dropdown-rtl", ctx_r1.dir() === "rtl")("ant-dropdown-show-arrow", ctx_r1.nzArrow)("ant-dropdown-placement-bottomLeft", ctx_r1.placement() === "bottomLeft")("ant-dropdown-placement-bottomRight", ctx_r1.placement() === "bottomRight")("ant-dropdown-placement-bottom", ctx_r1.placement() === "bottomCenter")("ant-dropdown-placement-topLeft", ctx_r1.placement() === "topLeft")("ant-dropdown-placement-topRight", ctx_r1.placement() === "topRight")("ant-dropdown-placement-top", ctx_r1.placement() === "topCenter");
		ɵɵproperty("nzNoAnimation", !!((_ctx_r1$noAnimation = ctx_r1.noAnimation) === null || _ctx_r1$noAnimation === void 0 || (_ctx_r1$noAnimation$n = _ctx_r1$noAnimation.nzNoAnimation) === null || _ctx_r1$noAnimation$n === void 0 ? void 0 : _ctx_r1$noAnimation$n.call(_ctx_r1$noAnimation)));
		ɵɵadvance();
		ɵɵconditional(ctx_r1.nzArrow ? 1 : -1);
	}
}
var NZ_CONFIG_MODULE_NAME = "dropdown";
var listOfPositions = [
	"bottomLeft",
	"bottomRight",
	"topRight",
	"topLeft"
];
var NzDropdownDirective = (() => {
	var _NzDropdownDirective;
	let _nzBackdrop_decorators;
	let _nzBackdrop_initializers = [];
	let _nzBackdrop_extraInitializers = [];
	return _NzDropdownDirective = class NzDropdownDirective {
		constructor() {
			_defineProperty(this, "nzConfigService", inject(NzConfigService));
			_defineProperty(this, "renderer", inject(Renderer2));
			_defineProperty(this, "viewContainerRef", inject(ViewContainerRef));
			_defineProperty(this, "platform", inject(Platform));
			_defineProperty(this, "destroyRef", inject(DestroyRef));
			_defineProperty(this, "_nzModuleName", NZ_CONFIG_MODULE_NAME);
			_defineProperty(this, "elementRef", inject(ElementRef));
			_defineProperty(this, "injector", inject(Injector));
			_defineProperty(this, "portal", void 0);
			_defineProperty(this, "overlayRef", null);
			_defineProperty(this, "inputVisible$", new BehaviorSubject(false));
			_defineProperty(this, "nzTrigger$", new BehaviorSubject("hover"));
			_defineProperty(this, "overlayClose$", new Subject());
			_defineProperty(this, "nzDropdownMenu", null);
			_defineProperty(this, "nzTrigger", "hover");
			_defineProperty(this, "nzMatchWidthElement", null);
			_defineProperty(this, "nzBackdrop", __runInitializers(this, _nzBackdrop_initializers, false));
			_defineProperty(this, "nzClickHide", (__runInitializers(this, _nzBackdrop_extraInitializers), true));
			_defineProperty(this, "nzDisabled", false);
			_defineProperty(this, "nzVisible", false);
			_defineProperty(this, "nzArrow", false);
			_defineProperty(this, "nzOverlayClassName", "");
			_defineProperty(this, "nzOverlayStyle", {});
			_defineProperty(this, "nzPlacement", "bottomLeft");
			_defineProperty(this, "nzVisibleChange", new EventEmitter());
			this.destroyRef.onDestroy(() => {
				var _this$overlayRef;
				(_this$overlayRef = this.overlayRef) === null || _this$overlayRef === void 0 || _this$overlayRef.dispose();
				this.overlayRef = null;
			});
		}
		setDropdownMenuValue(key, value) {
			var _this$nzDropdownMenu;
			(_this$nzDropdownMenu = this.nzDropdownMenu) === null || _this$nzDropdownMenu === void 0 || _this$nzDropdownMenu.setValue(key, value);
		}
		ngAfterViewInit() {
			if (this.nzDropdownMenu) {
				const nativeElement = this.elementRef.nativeElement;
				/** host mouse state **/
				const hostMouseState$ = merge(fromEvent(nativeElement, "mouseenter").pipe(map(() => true)), fromEvent(nativeElement, "mouseleave").pipe(map(() => false)));
				/** menu mouse state **/
				const menuMouseState$ = this.nzDropdownMenu.mouseState$;
				/** merged mouse state **/
				const mergedMouseState$ = merge(menuMouseState$, hostMouseState$);
				/** host click state **/
				const hostClickState$ = fromEvent(nativeElement, "click").pipe(map(() => !this.nzVisible));
				const domTriggerVisible$ = merge(this.nzTrigger$.pipe(switchMap((trigger) => {
					if (trigger === "hover") return mergedMouseState$;
					else if (trigger === "click") return hostClickState$;
					else return EMPTY;
				})), this.nzDropdownMenu.descendantMenuItemClick$.pipe(filter(() => this.nzClickHide), map(() => false)), this.overlayClose$).pipe(filter(() => !this.nzDisabled));
				combineLatest([merge(this.inputVisible$, domTriggerVisible$), this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(map(([visible, sub]) => visible || sub), auditTime(150), distinctUntilChanged(), filter(() => this.platform.isBrowser), takeUntilDestroyed(this.destroyRef)).subscribe((visible) => {
					const triggerWidth = (this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : nativeElement).getBoundingClientRect().width;
					if (this.nzVisible !== visible) this.nzVisibleChange.emit(visible);
					this.nzVisible = visible;
					if (visible) {
						var _this$nzDropdownMenu3;
						const positionStrategy = createFlexibleConnectedPositionStrategy(this.injector, this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown");
						positionStrategy.positionChanges.pipe(filter(() => Boolean(this.overlayRef)), map((change) => getPlacementName(change)), takeUntilDestroyed(this.destroyRef)).subscribe((placement) => {
							if (placement) {
								var _this$nzDropdownMenu2;
								(_this$nzDropdownMenu2 = this.nzDropdownMenu) === null || _this$nzDropdownMenu2 === void 0 || _this$nzDropdownMenu2.placement.set(this.nzPlacement);
							}
						});
						/** set up overlayRef **/
						if (!this.overlayRef) {
							/** new overlay **/
							this.overlayRef = createOverlayRef(this.injector, {
								positionStrategy,
								minWidth: triggerWidth,
								disposeOnNavigation: true,
								hasBackdrop: this.nzBackdrop && this.nzTrigger === "click",
								scrollStrategy: createRepositionScrollStrategy(this.injector)
							});
							merge(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef.outsidePointerEvents().pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))), this.overlayRef.keydownEvents().pipe(filter((e) => e.keyCode === 27 && !hasModifierKey(e)))).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
								this.overlayClose$.next(false);
							});
						} else {
							/** update overlay config **/
							const overlayConfig = this.overlayRef.getConfig();
							overlayConfig.minWidth = triggerWidth;
						}
						/** open dropdown with animation **/
						const positions = [this.nzPlacement, ...listOfPositions].map((position) => {
							return this.nzArrow ? setConnectedPositionOffset(POSITION_MAP[position], TOOLTIP_OFFSET_MAP[position]) : POSITION_MAP[position];
						});
						positionStrategy.withPositions(positions);
						/** reset portal if needed **/
						if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
						this.setDropdownMenuValue("nzArrow", this.nzArrow);
						(_this$nzDropdownMenu3 = this.nzDropdownMenu) === null || _this$nzDropdownMenu3 === void 0 || _this$nzDropdownMenu3.placement.set(this.nzPlacement);
						this.overlayRef.attach(this.portal);
					} else {
						var _this$overlayRef2;
						/** detach overlayRef if needed **/
						(_this$overlayRef2 = this.overlayRef) === null || _this$overlayRef2 === void 0 || _this$overlayRef2.detach();
					}
				});
				this.nzDropdownMenu.animationStateChange$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
					var _this$overlayRef3;
					(_this$overlayRef3 = this.overlayRef) === null || _this$overlayRef3 === void 0 || _this$overlayRef3.dispose();
					this.overlayRef = null;
					event.animationComplete();
				});
			}
		}
		ngOnChanges(changes) {
			const { nzVisible, nzDisabled, nzOverlayClassName, nzOverlayStyle, nzTrigger, nzArrow, nzPlacement } = changes;
			if (nzTrigger) this.nzTrigger$.next(this.nzTrigger);
			if (nzVisible) this.inputVisible$.next(this.nzVisible);
			if (nzDisabled) {
				const nativeElement = this.elementRef.nativeElement;
				if (this.nzDisabled) {
					this.renderer.setAttribute(nativeElement, "disabled", "");
					this.inputVisible$.next(false);
				} else this.renderer.removeAttribute(nativeElement, "disabled");
			}
			if (nzOverlayClassName) this.setDropdownMenuValue("nzOverlayClassName", this.nzOverlayClassName);
			if (nzOverlayStyle) this.setDropdownMenuValue("nzOverlayStyle", this.nzOverlayStyle);
			if (nzArrow) this.setDropdownMenuValue("nzArrow", this.nzArrow);
			if (nzPlacement) {
				var _this$nzDropdownMenu4;
				(_this$nzDropdownMenu4 = this.nzDropdownMenu) === null || _this$nzDropdownMenu4 === void 0 || _this$nzDropdownMenu4.placement.set(this.nzPlacement);
			}
		}
	}, (() => {
		const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
		_nzBackdrop_decorators = [WithConfig()];
		__esDecorate(null, null, _nzBackdrop_decorators, {
			kind: "field",
			name: "nzBackdrop",
			static: false,
			private: false,
			access: {
				has: (obj) => "nzBackdrop" in obj,
				get: (obj) => obj.nzBackdrop,
				set: (obj, value) => {
					obj.nzBackdrop = value;
				}
			},
			metadata: _metadata
		}, _nzBackdrop_initializers, _nzBackdrop_extraInitializers);
		if (_metadata) Object.defineProperty(_NzDropdownDirective, Symbol.metadata, {
			enumerable: true,
			configurable: true,
			writable: true,
			value: _metadata
		});
	})(), _defineProperty(_NzDropdownDirective, "ɵfac", function NzDropdownDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || _NzDropdownDirective)();
	}), _defineProperty(_NzDropdownDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
		type: _NzDropdownDirective,
		selectors: [[
			"",
			"nz-dropdown",
			""
		]],
		hostAttrs: [1, "ant-dropdown-trigger"],
		inputs: {
			nzDropdownMenu: "nzDropdownMenu",
			nzTrigger: "nzTrigger",
			nzMatchWidthElement: "nzMatchWidthElement",
			nzBackdrop: [
				2,
				"nzBackdrop",
				"nzBackdrop",
				booleanAttribute
			],
			nzClickHide: [
				2,
				"nzClickHide",
				"nzClickHide",
				booleanAttribute
			],
			nzDisabled: [
				2,
				"nzDisabled",
				"nzDisabled",
				booleanAttribute
			],
			nzVisible: [
				2,
				"nzVisible",
				"nzVisible",
				booleanAttribute
			],
			nzArrow: [
				2,
				"nzArrow",
				"nzArrow",
				booleanAttribute
			],
			nzOverlayClassName: "nzOverlayClassName",
			nzOverlayStyle: "nzOverlayStyle",
			nzPlacement: "nzPlacement"
		},
		outputs: { nzVisibleChange: "nzVisibleChange" },
		exportAs: ["nzDropdown"],
		features: [ɵɵNgOnChangesFeature]
	})), _NzDropdownDirective;
})();
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownDirective, [{
		type: Directive,
		args: [{
			selector: "[nz-dropdown]",
			exportAs: "nzDropdown",
			host: { class: "ant-dropdown-trigger" }
		}]
	}], () => [], {
		nzDropdownMenu: [{ type: Input }],
		nzTrigger: [{ type: Input }],
		nzMatchWidthElement: [{ type: Input }],
		nzBackdrop: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzClickHide: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzDisabled: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzVisible: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzArrow: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzOverlayClassName: [{ type: Input }],
		nzOverlayStyle: [{ type: Input }],
		nzPlacement: [{ type: Input }],
		nzVisibleChange: [{ type: Output }]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzContextMenuServiceModule = class {};
_NzContextMenuServiceModule = NzContextMenuServiceModule;
_defineProperty(NzContextMenuServiceModule, "ɵfac", function NzContextMenuServiceModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzContextMenuServiceModule)();
});
_defineProperty(NzContextMenuServiceModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({ type: _NzContextMenuServiceModule }));
_defineProperty(NzContextMenuServiceModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContextMenuServiceModule, [{ type: NgModule }], null, null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzDropdownADirective = class {};
_NzDropdownADirective = NzDropdownADirective;
_defineProperty(NzDropdownADirective, "ɵfac", function NzDropdownADirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzDropdownADirective)();
});
_defineProperty(NzDropdownADirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzDropdownADirective,
	selectors: [[
		"a",
		"nz-dropdown",
		""
	]],
	hostAttrs: [1, "ant-dropdown-link"]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownADirective, [{
		type: Directive,
		args: [{
			selector: "a[nz-dropdown]",
			host: { class: "ant-dropdown-link" }
		}]
	}], null, null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzDropdownMenuComponent = class {
	constructor() {
		_defineProperty(this, "viewContainerRef", inject(ViewContainerRef));
		_defineProperty(this, "nzMenuService", inject(MenuService));
		_defineProperty(this, "cdr", inject(ChangeDetectorRef));
		_defineProperty(this, "elementRef", inject(ElementRef));
		_defineProperty(this, "renderer", inject(Renderer2));
		_defineProperty(this, "dir", inject(Directionality).valueSignal);
		_defineProperty(this, "noAnimation", inject(NzNoAnimationDirective, {
			host: true,
			optional: true
		}));
		_defineProperty(this, "isChildSubMenuOpen$", this.nzMenuService.isChildSubMenuOpen$);
		_defineProperty(this, "descendantMenuItemClick$", this.nzMenuService.descendantMenuItemClick$);
		_defineProperty(this, "mouseState$", new BehaviorSubject(false));
		_defineProperty(this, "animationStateChange$", new EventEmitter());
		_defineProperty(this, "templateRef", void 0);
		_defineProperty(this, "nzOverlayClassName", "");
		_defineProperty(this, "nzOverlayStyle", {});
		_defineProperty(this, "nzArrow", false);
		_defineProperty(this, "placement", signal("bottomLeft", ...ngDevMode ? [{ debugName: "placement" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "slideAnimationEnter", slideAnimationEnter(() => this.placement().startsWith("top") ? "down" : "up"));
		_defineProperty(this, "slideAnimationLeave", slideAnimationLeave(() => this.placement().startsWith("top") ? "down" : "up"));
	}
	onAnimationEvent(event) {
		const element = event.target;
		const onAnimationEnd = () => {
			element.removeEventListener("animationend", onAnimationEnd);
			this.animationStateChange$.emit(event);
		};
		element.addEventListener("animationend", onAnimationEnd);
	}
	setMouseState(visible) {
		this.mouseState$.next(visible);
	}
	setValue(key, value) {
		this[key] = value;
		this.cdr.markForCheck();
	}
	ngAfterContentInit() {
		this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
	}
};
_NzDropdownMenuComponent = NzDropdownMenuComponent;
_defineProperty(NzDropdownMenuComponent, "ɵfac", function NzDropdownMenuComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzDropdownMenuComponent)();
});
_defineProperty(NzDropdownMenuComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _NzDropdownMenuComponent,
	selectors: [["nz-dropdown-menu"]],
	viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) {
		if (rf & 1) ɵɵviewQuery(TemplateRef, 7);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
		}
	},
	exportAs: ["nzDropdownMenu"],
	features: [ɵɵProvidersFeature([MenuService, {
		provide: NzIsMenuInsideDropdownToken,
		useValue: true
	}])],
	ngContentSelectors: _c0,
	decls: 1,
	vars: 0,
	consts: [[
		1,
		"ant-dropdown",
		3,
		"mouseenter",
		"mouseleave",
		"nzNoAnimation"
	], [1, "ant-dropdown-arrow"]],
	template: function NzDropdownMenuComponent_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef();
			ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_Template, 3, 22, "ng-template");
		}
	},
	dependencies: [NzNoAnimationDirective],
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownMenuComponent, [{
		type: Component,
		args: [{
			selector: `nz-dropdown-menu`,
			exportAs: `nzDropdownMenu`,
			providers: [MenuService, {
				provide: NzIsMenuInsideDropdownToken,
				useValue: true
			}],
			imports: [NzNoAnimationDirective],
			template: `
    <ng-template>
      <div
        class="ant-dropdown"
        [class.ant-dropdown-rtl]="dir() === 'rtl'"
        [class.ant-dropdown-show-arrow]="nzArrow"
        [class.ant-dropdown-placement-bottomLeft]="placement() === 'bottomLeft'"
        [class.ant-dropdown-placement-bottomRight]="placement() === 'bottomRight'"
        [class.ant-dropdown-placement-bottom]="placement() === 'bottomCenter'"
        [class.ant-dropdown-placement-topLeft]="placement() === 'topLeft'"
        [class.ant-dropdown-placement-topRight]="placement() === 'topRight'"
        [class.ant-dropdown-placement-top]="placement() === 'topCenter'"
        [class]="nzOverlayClassName"
        [style]="nzOverlayStyle"
        [animate.enter]="slideAnimationEnter()"
        [animate.leave]="slideAnimationLeave()"
        (animate.leave)="onAnimationEvent($event)"
        [nzNoAnimation]="!!noAnimation?.nzNoAnimation?.()"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        @if (nzArrow) {
          <div class="ant-dropdown-arrow"></div>
        }
        <ng-content />
      </div>
    </ng-template>
  `,
			encapsulation: ViewEncapsulation.None
		}]
	}], null, { templateRef: [{
		type: ViewChild,
		args: [TemplateRef, { static: true }]
	}] });
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzDropdownModule = class {};
_NzDropdownModule = NzDropdownModule;
_defineProperty(NzDropdownModule, "ɵfac", function NzDropdownModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzDropdownModule)();
});
_defineProperty(NzDropdownModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NzDropdownModule,
	imports: [
		NzDropdownDirective,
		NzDropdownADirective,
		NzDropdownMenuComponent,
		NzContextMenuServiceModule
	],
	exports: [
		NzMenuModule,
		NzDropdownDirective,
		NzDropdownADirective,
		NzDropdownMenuComponent
	]
}));
_defineProperty(NzDropdownModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({ imports: [NzContextMenuServiceModule, NzMenuModule] }));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownModule, [{
		type: NgModule,
		args: [{
			imports: [
				NzDropdownDirective,
				NzDropdownADirective,
				NzDropdownMenuComponent,
				NzContextMenuServiceModule
			],
			exports: [
				NzMenuModule,
				NzDropdownDirective,
				NzDropdownADirective,
				NzDropdownMenuComponent
			]
		}]
	}], null, null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var LIST_OF_POSITIONS = [
	new ConnectionPositionPair({
		originX: "start",
		originY: "top"
	}, {
		overlayX: "start",
		overlayY: "top"
	}),
	new ConnectionPositionPair({
		originX: "start",
		originY: "top"
	}, {
		overlayX: "start",
		overlayY: "bottom"
	}),
	new ConnectionPositionPair({
		originX: "start",
		originY: "top"
	}, {
		overlayX: "end",
		overlayY: "bottom"
	}),
	new ConnectionPositionPair({
		originX: "start",
		originY: "top"
	}, {
		overlayX: "end",
		overlayY: "top"
	})
];
var NzContextMenuService = class {
	constructor() {
		_defineProperty(this, "ngZone", inject(NgZone));
		_defineProperty(this, "injector", inject(Injector));
		_defineProperty(this, "overlayRef", null);
		_defineProperty(this, "closeSubscription", Subscription.EMPTY);
	}
	create($event, nzDropdownMenuComponent) {
		this.close(true);
		const { x, y } = $event;
		if ($event instanceof MouseEvent) $event.preventDefault();
		this.overlayRef = createOverlayRef(this.injector, {
			positionStrategy: createFlexibleConnectedPositionStrategy(this.injector, {
				x,
				y
			}).withPositions(LIST_OF_POSITIONS).withTransformOriginOn(".ant-dropdown"),
			disposeOnNavigation: true,
			scrollStrategy: createCloseScrollStrategy(this.injector)
		});
		this.closeSubscription = new Subscription();
		this.closeSubscription.add(nzDropdownMenuComponent.descendantMenuItemClick$.subscribe(() => this.close()));
		this.closeSubscription.add(merge(fromEventOutsideAngular(document, "click").pipe(filter((event) => !!this.overlayRef && !this.overlayRef.overlayElement.contains(event.target)), filter((event) => event.button !== 2)), fromEventOutsideAngular(document, "keydown").pipe(filter((event) => event.key === "Escape"))).pipe(first()).subscribe(() => this.ngZone.run(() => this.close())));
		return this.overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
	}
	close(clear = false) {
		if (this.overlayRef) {
			this.overlayRef.detach();
			if (clear) this.overlayRef.dispose();
			this.overlayRef = null;
			this.closeSubscription.unsubscribe();
		}
	}
};
_NzContextMenuService = NzContextMenuService;
_defineProperty(NzContextMenuService, "ɵfac", function NzContextMenuService_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzContextMenuService)();
});
_defineProperty(NzContextMenuService, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({
	token: _NzContextMenuService,
	factory: _NzContextMenuService.ɵfac,
	providedIn: NzContextMenuServiceModule
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContextMenuService, [{
		type: Injectable,
		args: [{ providedIn: NzContextMenuServiceModule }]
	}], null, null);
})();
//#endregion
export { ScrollingModule as C, CdkVirtualScrollViewport as S, ComponentPortal as _, NzDropdownMenuComponent as a, CdkScrollable as b, NzMenuItemComponent as c, POSITION_MAP as d, getPlacementName as f, CdkPortalOutlet as g, OverlayModule as h, NzDropdownDirective as i, NzConnectedOverlayDirective as l, CdkOverlayOrigin as m, NzContextMenuServiceModule as n, NzDropdownModule as o, CdkConnectedOverlay as p, NzDropdownADirective as r, NzMenuDirective as s, NzContextMenuService as t, NzOverlayModule as u, PortalModule as v, CdkVirtualForOf as x, CdkFixedSizeVirtualScroll as y };
