import { n as _defineProperty, t as _objectSpread2 } from "./objectSpread2-C_IE-bIJ.js";
import { $ as isDevMode, $n as Output, A as contentChild, Bt as computed, C as ViewChildren, Cs as ɵɵrepeaterTrackByIndex, Da as ɵɵcontrol, Dc as InjectionToken, Dl as ɵɵdefineInjectable, Do as ɵɵgetInheritedFactory, Dr as ViewEncapsulation, Ea as ɵɵcontentQuerySignal, En as ElementRef, Eo as ɵɵgetCurrentView, Er as ViewContainerRef, Fn as Injectable, Gs as ɵɵtextInterpolate1, Hs as ɵɵtemplateRefExtractor, Il as ɵɵresetView, In as Input, Is as ɵɵstoreLet, Jo as ɵɵlistener, Ll as ɵɵrestoreView, Mr as afterNextRender, O as booleanAttribute, Oa as ɵɵcontrolCreate, Oc as Injector, Ol as ɵɵdefineInjector, Sa as ɵɵconditional, Sl as signal, T as afterRenderEffect, Ta as ɵɵcontentQuery, Ui as setClassMetadata, Us as ɵɵtext, Vs as ɵɵtemplate, Wc as RuntimeError, Ws as ɵɵtextInterpolate, Wt as linkedSignal, X as input, Xo as ɵɵnextContext, Yo as ɵɵloadQuery, _s as ɵɵqueryRefresh, as as ɵɵproperty, at as output, ba as ɵɵclassProp, bo as ɵɵelementStart, bs as ɵɵrepeater, ca as ɵɵNgOnChangesFeature, cl as inject, cn as Component, eo as ɵɵdefineComponent, gc as DestroyRef, gs as ɵɵqueryAdvance, hc as DOCUMENT, ho as ɵɵelement, i as ContentChild, ia as ɵɵControlFeature, il as forwardRef, ir as Renderer2, is as ɵɵprojectionDef, ka as ɵɵdeclareLet, la as ɵɵProvidersFeature, lc as _asyncToGenerator, nl as effect, no as ɵɵdefineNgModule, nt as model, oa as ɵɵHostDirectivesFeature, oc as ɵɵviewQuery, pc as CSP_NONCE, qn as NgModule, qt as untracked, rl as formatRuntimeError, rs as ɵɵprojection, rt as numberAttribute, ss as ɵɵpureFunction1, to as ɵɵdefineDirective, ua as ɵɵadvance, va as ɵɵattribute, vr as TemplateRef, vs as ɵɵreadContextLet, wa as ɵɵconditionalCreate, wn as Directive, xs as ɵɵrepeaterCreate, ya as ɵɵclassMap, yo as ɵɵelementEnd, ys as ɵɵreference } from "./core-CXNTKvTk.js";
import { In as EMPTY$1, b as switchMap, m as tap, vn as map, x as startWith } from "./esm5-BupzNxh_.js";
import { Y as NgTemplateOutlet } from "./common-C7YlTbb3.js";
import { DefaultValueAccessor, FormBuilder, FormControlDirective, MaxLengthValidator, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, ReactiveFormsModule, Validators, ɵFORM_CONTROL_INTEGRATION, ɵelementAcceptsMinMax as elementAcceptsMinMax, ɵisNativeFormElement as isNativeFormElement, ɵisTextualFormElement as isTextualFormElement, ɵselectValueAccessor as selectValueAccessor, ɵsetNativeDomProperty as setNativeDomProperty } from "./@angular_forms.js";
import { n as Directionality } from "./bidi-CMsMKfPk.js";
import { b as toObservable, o as NzIconDirective, s as NzIconModule, x as toSignal, y as takeUntilDestroyed } from "./ng-zorro-antd-icon-DGQmdhvo.js";
import { c as getVariantClassNames, d as isNumberFinite, s as getStatusClassNames, u as isNotNil, v as triggerFocus } from "./ng-zorro-antd-core-util-DcoCxePB.js";
import { n as FocusMonitor } from "./a11y-CBk5XQ9I.js";
import { a as NzSpaceCompactItemDirective, c as NzFormItemFeedbackIconComponent, i as NZ_SPACE_COMPACT_SIZE, l as NzFormStatusService, n as NzButtonModule, o as NZ_FORM_SIZE, r as NZ_SPACE_COMPACT_ITEM_TYPE, s as NZ_FORM_VARIANT, t as NzButtonComponent } from "./ng-zorro-antd-button-B4GLpbW0.js";
import { ɵNzTransitionPatchDirective as NzTransitionPatchDirective } from "./ng-zorro-antd_core_transition-patch.js";
import { NzWaveDirective } from "./ng-zorro-antd_core_wave.js";
//#region node_modules/@angular/forms/fesm2022/_validation_errors-chunk.mjs
/**
* @license Angular v22.1.2
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
function isArray(value) {
	return Array.isArray(value);
}
var MetadataReducer = {
	list() {
		return {
			reduce: (acc, item) => item === void 0 ? acc : [...acc, item],
			getInitial: () => []
		};
	},
	min() {
		return {
			reduce: (acc, item) => {
				if (acc === void 0 || item === void 0) return acc !== null && acc !== void 0 ? acc : item;
				return item < acc ? item : acc;
			},
			getInitial: () => void 0
		};
	},
	max() {
		return {
			reduce: (acc, item) => {
				if (acc === void 0 || item === void 0) return acc !== null && acc !== void 0 ? acc : item;
				return item > acc ? item : acc;
			},
			getInitial: () => void 0
		};
	},
	or() {
		return {
			reduce: (prev, next) => prev || next,
			getInitial: () => false
		};
	},
	and() {
		return {
			reduce: (prev, next) => prev && next,
			getInitial: () => true
		};
	},
	override
};
function override(getInitial) {
	return {
		reduce: (_, item) => item,
		getInitial: () => getInitial === null || getInitial === void 0 ? void 0 : getInitial()
	};
}
var IS_ASYNC_VALIDATION_RESOURCE = Symbol("IS_ASYNC_VALIDATION_RESOURCE");
var MetadataKey = class {
	constructor(reducer, create) {
		_defineProperty(this, "reducer", void 0);
		_defineProperty(this, "create", void 0);
		_defineProperty(this, "brand", void 0);
		_defineProperty(this, IS_ASYNC_VALIDATION_RESOURCE, void 0);
		this.reducer = reducer;
		this.create = create;
	}
};
function createMetadataKey(reducer) {
	return new MetadataKey(reducer !== null && reducer !== void 0 ? reducer : MetadataReducer.override());
}
function createLimitSelectionKey() {
	return createMetadataKey();
}
createMetadataKey(MetadataReducer.or());
createLimitSelectionKey();
createMetadataKey(MetadataReducer.max());
createMetadataKey(MetadataReducer.max());
createLimitSelectionKey();
createMetadataKey(MetadataReducer.min());
createMetadataKey(MetadataReducer.min());
createMetadataKey(MetadataReducer.max());
createMetadataKey(MetadataReducer.min());
createMetadataKey(MetadataReducer.list());
function shallowArrayEquals(a, b) {
	if (a === b) return true;
	if (!a || !b) return false;
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) if (!Object.is(a[i], b[i])) return false;
	return true;
}
function addDefaultField(errors, fieldTree) {
	if (isArray(errors)) for (const error of errors) {
		var _error$fieldTree;
		(_error$fieldTree = error.fieldTree) !== null && _error$fieldTree !== void 0 || (error.fieldTree = fieldTree);
	}
	else if (errors) {
		var _errors$fieldTree;
		(_errors$fieldTree = errors.fieldTree) !== null && _errors$fieldTree !== void 0 || (errors.fieldTree = fieldTree);
	}
	return errors;
}
createMetadataKey();
computed(() => false, ...ngDevMode ? [{ debugName: "FALSE_SIGNAL" }] : []);
computed(() => [], ...ngDevMode ? [{ debugName: "ROOT_PATH_KEYS" }] : []);
computed(() => {
	throw new RuntimeError(1905, ngDevMode && "The top-level field in the form has no parent.");
}, ...ngDevMode ? [{ debugName: "ROOT_KEY_IN_PARENT" }] : []);
computed(() => [], ...ngDevMode ? [{ debugName: "EMPTY" }] : []);
computed(() => false, ...ngDevMode ? [{ debugName: "FALSE" }] : []);
new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "REGISTER_WEBMCP_FORM" : "");
function submit(_x, _x2) {
	return _submit.apply(this, arguments);
}
function _submit() {
	_submit = _asyncToGenerator(function* (form, options) {
		var _options;
		const node = untracked(form);
		if (untracked(node.submitState.submitting)) return false;
		const field = options === void 0 ? node.structure.root.fieldProxy : form;
		const detail = {
			root: node.structure.root.fieldProxy,
			submitted: form
		};
		options = typeof options === "function" ? { action: options } : (_options = options) !== null && _options !== void 0 ? _options : node.structure.fieldManager.submitOptions;
		const action = options === null || options === void 0 ? void 0 : options.action;
		if (!action) throw new RuntimeError(1915, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot submit form with no submit action. Specify the action when creating the form, or as an additional argument to `submit()`.");
		node.markAsTouched();
		const onInvalid = options === null || options === void 0 ? void 0 : options.onInvalid;
		const shouldRun = shouldRunAction(node, options === null || options === void 0 ? void 0 : options.ignoreValidators);
		try {
			if (shouldRun) {
				node.submitState.selfSubmitting.set(true);
				const errors = yield untracked(() => action === null || action === void 0 ? void 0 : action(field, detail));
				errors && setSubmissionErrors(node, errors);
				return !errors || isArray(errors) && errors.length === 0;
			} else untracked(() => onInvalid === null || onInvalid === void 0 ? void 0 : onInvalid(field, detail));
			return false;
		} finally {
			node.submitState.selfSubmitting.set(false);
		}
	});
	return _submit.apply(this, arguments);
}
function shouldRunAction(node, ignoreValidators) {
	switch (ignoreValidators) {
		case "all": return true;
		case "none": return untracked(node.valid);
		default: return !untracked(node.invalid);
	}
}
function setSubmissionErrors(submittedField, errors) {
	if (!isArray(errors)) errors = [errors];
	const errorsByField = /* @__PURE__ */ new Map();
	for (const error of errors) {
		const errorWithField = addDefaultField(error, submittedField.fieldTree);
		const field = errorWithField.fieldTree();
		let fieldErrors = errorsByField.get(field);
		if (!fieldErrors) {
			fieldErrors = [];
			errorsByField.set(field, fieldErrors);
		}
		fieldErrors.push(errorWithField);
	}
	for (const [field, fieldErrors] of errorsByField) field.submitState.submissionErrors.set(fieldErrors);
}
var CompatValidationError = class {
	constructor({ context, kind, control }) {
		_defineProperty(this, "kind", "compat");
		_defineProperty(this, "control", void 0);
		_defineProperty(this, "fieldTree", void 0);
		_defineProperty(this, "context", void 0);
		_defineProperty(this, "message", void 0);
		this.context = context;
		this.kind = kind;
		this.control = control;
	}
};
function signalErrorsToValidationErrors(errors) {
	if (errors.length === 0) return null;
	const errObj = {};
	for (const error of errors) errObj[error.kind] = error instanceof CompatValidationError ? error.context : error;
	return errObj;
}
function reactiveErrorsToSignalErrors(errors, control) {
	if (errors === null) return [];
	return Object.entries(errors).map(([kind, context]) => {
		return new CompatValidationError({
			context,
			kind,
			control
		});
	});
}
//#endregion
//#region node_modules/@angular/forms/fesm2022/signals.mjs
/**
* @license Angular v22.1.2
* (c) 2010-2026 Google LLC. https://angular.dev/
* License: MIT
*/
var _InputValidityMonitor;
var _AnimationInputValidityMonitor;
var _FormField;
var _FormRoot;
var SIGNAL_FORMS_CONFIG = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "SIGNAL_FORMS_CONFIG" : "");
function normalizeErrors(error) {
	if (error === void 0) return [];
	if (Array.isArray(error)) return error;
	return [error];
}
var BaseNgValidationError = class {
	constructor(options) {
		_defineProperty(this, "__brand", void 0);
		_defineProperty(this, "kind", "");
		_defineProperty(this, "fieldTree", void 0);
		_defineProperty(this, "message", void 0);
		if (options) Object.assign(this, options);
	}
};
var NativeInputParseError = class extends BaseNgValidationError {
	constructor(..._args3) {
		super(..._args3);
		_defineProperty(this, "kind", "parse");
	}
};
function createParser(getValue, setValue, parse) {
	const errors = linkedSignal(_objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "errors" } : {}), {}, {
		source: getValue,
		computation: () => [],
		equal: shallowArrayEquals
	}));
	const setRawValue = (rawValue) => {
		const result = parse(rawValue);
		errors.set(normalizeErrors(result.error));
		if (result.value !== void 0) setValue(result.value);
		errors.set(normalizeErrors(result.error));
	};
	const reset = () => {
		errors.set([]);
	};
	return {
		errors: errors.asReadonly(),
		setRawValue,
		reset
	};
}
var InteropNgControl = class {
	constructor(field) {
		_defineProperty(this, "field", void 0);
		_defineProperty(this, "control", this);
		_defineProperty(this, "valueAccessor", null);
		this.field = field;
	}
	get value() {
		return this.field().controlValue();
	}
	get valid() {
		return this.field().valid();
	}
	get invalid() {
		return this.field().invalid();
	}
	get pending() {
		return this.field().pending();
	}
	get disabled() {
		return this.field().disabled();
	}
	get enabled() {
		return !this.field().disabled();
	}
	get errors() {
		return signalErrorsToValidationErrors(this.field().errors());
	}
	get pristine() {
		return !this.field().dirty();
	}
	get dirty() {
		return this.field().dirty();
	}
	get touched() {
		return this.field().touched();
	}
	get untouched() {
		return !this.field().touched();
	}
	get status() {
		if (this.field().disabled()) return "DISABLED";
		if (this.field().valid()) return "VALID";
		if (this.field().invalid()) return "INVALID";
		if (this.field().pending()) return "PENDING";
		throw new RuntimeError(1910, ngDevMode && "Unknown form control status");
	}
	hasValidator(validator) {
		if (validator === Validators.required) return this.field().required();
		return false;
	}
	updateValueAndValidity() {}
};
var FIELD_STATE_KEY_TO_CONTROL_BINDING = {
	disabled: "disabled",
	disabledReasons: "disabledReasons",
	dirty: "dirty",
	errors: "errors",
	hidden: "hidden",
	invalid: "invalid",
	max: "max",
	maxLength: "maxLength",
	min: "min",
	minLength: "minLength",
	name: "name",
	pattern: "pattern",
	pending: "pending",
	readonly: "readonly",
	required: "required",
	touched: "touched"
};
var CONTROL_BINDING_TO_FIELD_STATE_KEY = /* @__PURE__ */ (() => {
	const map = {};
	for (const key of Object.keys(FIELD_STATE_KEY_TO_CONTROL_BINDING)) map[FIELD_STATE_KEY_TO_CONTROL_BINDING[key]] = key;
	return map;
})();
function readFieldStateBindingValue(fieldState, key) {
	var _fieldState$property;
	return (_fieldState$property = fieldState[CONTROL_BINDING_TO_FIELD_STATE_KEY[key]]) === null || _fieldState$property === void 0 ? void 0 : _fieldState$property.call(fieldState);
}
var CONTROL_BINDING_NAMES = /* @__PURE__ */ (() => Object.values(FIELD_STATE_KEY_TO_CONTROL_BINDING))();
function createBindings() {
	return {};
}
function bindingUpdated(bindings, key, value) {
	if (bindings[key] !== value) {
		bindings[key] = value;
		return true;
	}
	return false;
}
function getNativeControlValue(element, currentValue, validityMonitor) {
	let modelValue;
	if (isInput(element) && validityMonitor.isBadInput(element)) return { error: new NativeInputParseError() };
	switch (element.type) {
		case "checkbox": return { value: element.checked };
		case "number":
		case "range":
		case "datetime-local":
			modelValue = untracked(currentValue);
			if (typeof modelValue === "number" || modelValue === null) return { value: element.value === "" ? null : element.valueAsNumber };
			break;
		case "date":
		case "month":
		case "time":
		case "week":
			modelValue = untracked(currentValue);
			if (modelValue === null || modelValue instanceof Date) return { value: element.valueAsDate };
			else if (typeof modelValue === "number") return { value: element.valueAsNumber };
			break;
	}
	if (element.tagName === "INPUT" && element.type === "text") {
		var _modelValue;
		(_modelValue = modelValue) !== null && _modelValue !== void 0 || (modelValue = untracked(currentValue));
		if (typeof modelValue === "number" || modelValue === null) {
			if (element.value === "") return { value: null };
			const parsed = Number(element.value);
			if (Number.isNaN(parsed)) return { error: new NativeInputParseError() };
			return { value: parsed };
		}
	}
	return { value: element.value };
}
function setNativeControlValue(element, value) {
	switch (element.type) {
		case "checkbox":
			element.checked = value;
			return;
		case "radio":
			element.checked = value === element.value;
			return;
		case "number":
		case "range":
		case "datetime-local":
			if (typeof value === "number") {
				setNativeNumberControlValue(element, value);
				return;
			} else if (value === null) {
				element.value = "";
				return;
			}
			break;
		case "date":
		case "month":
		case "time":
		case "week": if (value === null || value instanceof Date) {
			element.valueAsDate = value;
			return;
		} else if (typeof value === "number") {
			setNativeNumberControlValue(element, value);
			return;
		}
	}
	if (element.tagName === "INPUT" && element.type === "text") {
		if (typeof value === "number") {
			element.value = isNaN(value) ? "" : String(value);
			return;
		}
		if (value === null) {
			if (typeof ngDevMode !== "undefined" && ngDevMode) console.warn(formatRuntimeError(1921, `The text input ${element.name} received a null value. Text inputs should use empty strings to represent null values.  The input's value will be set to an empty string instead.`));
			element.value = "";
			return;
		}
	}
	element.value = value;
}
function setNativeNumberControlValue(element, value) {
	if (isNaN(value)) element.value = "";
	else element.valueAsNumber = value;
}
function isInput(element) {
	return element.tagName === "INPUT";
}
function inputRequiresValidityTracking(input) {
	return input.type === "date" || input.type === "datetime-local" || input.type === "month" || input.type === "time" || input.type === "week";
}
function formatDateForInput(date, type) {
	const year = date.getUTCFullYear();
	const month = String(date.getUTCMonth() + 1).padStart(2, "0");
	if (type === "month") return `${year}-${month}`;
	return `${year}-${month}-${String(date.getUTCDate()).padStart(2, "0")}`;
}
function formatDateForMinMax(name, value, type) {
	if (value instanceof Date && (name === "min" || name === "max") && (type === "date" || type === "month")) return formatDateForInput(value, type);
	return value;
}
function customControlCreate(host, parent) {
	host.listenToCustomControlModel((value) => parent.state().controlValue.set(value));
	host.listenToCustomControlOutput("touch", () => parent.state().markAsTouched());
	parent.registerAsBinding(host.customControl);
	const bindings = createBindings();
	return () => {
		const state = parent.state();
		const controlValue = state.controlValue();
		if (bindingUpdated(bindings, "controlValue", controlValue)) host.setCustomControlModelInput(controlValue);
		for (const name of CONTROL_BINDING_NAMES) {
			let value;
			if (name === "errors") value = parent.errors();
			else value = readFieldStateBindingValue(state, name);
			if (bindingUpdated(bindings, name, value)) {
				host.setInputOnDirectives(name, value);
				if (parent.elementAcceptsNativeProperty(name) && !host.customControlHasInput(name)) {
					const domValue = formatDateForMinMax(name, value, parent.nativeFormElement.type);
					setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, domValue);
				}
			}
		}
	};
}
function isValidatorObject(v) {
	return typeof v === "object" && v !== null;
}
function cvaControlCreate(host, parent) {
	const bindings = createBindings();
	parent.controlValueAccessor.registerOnChange((value) => {
		bindings["controlValue"] = value;
		parent.state().controlValue.set(value);
	});
	parent.controlValueAccessor.registerOnTouched(() => parent.state().markAsTouched());
	const legacyValidators = parent.injector.get(NG_VALIDATORS, null, {
		optional: true,
		self: true
	});
	if (legacyValidators) {
		let version;
		for (const v of legacyValidators) if (isValidatorObject(v) && v.registerOnValidatorChange) {
			var _version;
			(_version = version) !== null && _version !== void 0 || (version = signal(0));
			v.registerOnValidatorChange(() => {
				version.update((n) => n + 1);
			});
		}
		const validatorFns = legacyValidators.map((v) => typeof v === "function" ? v : v.validate.bind(v));
		const mergedValidator = Validators.compose(validatorFns);
		const parseErrors = computed(() => {
			version === null || version === void 0 || version();
			return reactiveErrorsToSignalErrors(mergedValidator ? mergedValidator(parent.interopNgControl.control) : null, parent.interopNgControl.control);
		}, ...ngDevMode ? [{ debugName: "parseErrors" }] : []);
		parent.parseErrorsSource.set(parseErrors);
	}
	parent.registerAsBinding({ reset: () => {
		const value = parent.state().value();
		bindings["controlValue"] = value;
		untracked(() => parent.controlValueAccessor.writeValue(value));
	} });
	return () => {
		const fieldState = parent.state();
		const controlValue = fieldState.controlValue();
		if (bindingUpdated(bindings, "controlValue", controlValue)) untracked(() => parent.controlValueAccessor.writeValue(controlValue));
		for (const name of CONTROL_BINDING_NAMES) {
			const value = readFieldStateBindingValue(fieldState, name);
			if (bindingUpdated(bindings, name, value)) {
				const propertyWasSet = host.setInputOnDirectives(name, value);
				if (name === "disabled" && parent.controlValueAccessor.setDisabledState) untracked(() => parent.controlValueAccessor.setDisabledState(value));
				else if (!propertyWasSet && parent.elementAcceptsNativeProperty(name)) setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, value);
			}
		}
	};
}
function observeSelectMutations(select, onMutation, destroyRef) {
	if (typeof MutationObserver !== "function") return;
	const observer = new MutationObserver((mutations) => {
		if (mutations.some((m) => isRelevantSelectMutation(m))) onMutation();
	});
	observer.observe(select, {
		attributes: true,
		attributeFilter: ["value"],
		characterData: true,
		childList: true,
		subtree: true
	});
	destroyRef.onDestroy(() => observer.disconnect());
}
function isRelevantSelectMutation(mutation) {
	if (mutation.type === "childList" || mutation.type === "characterData") {
		if (mutation.target instanceof Comment) return false;
		for (const node of mutation.addedNodes) if (!(node instanceof Comment)) return true;
		for (const node of mutation.removedNodes) if (!(node instanceof Comment)) return true;
		return false;
	}
	if (mutation.type === "attributes" && mutation.target instanceof HTMLOptionElement) return true;
	return false;
}
function nativeControlCreate(host, parent, parseErrorsSource, validityMonitor) {
	let updateMode = false;
	const input = parent.nativeFormElement;
	const parser = createParser(() => parent.state().value(), (rawValue) => parent.state().controlValue.set(rawValue), (_rawValue) => getNativeControlValue(input, parent.state().value, validityMonitor));
	parseErrorsSource.set(parser.errors);
	parent.onReset = () => {
		parser.reset();
		const value = parent.state().value();
		bindings["controlValue"] = value;
		setNativeControlValue(input, value);
	};
	host.listenToDom("input", () => parser.setRawValue(void 0));
	host.listenToDom("blur", () => parent.state().markAsTouched());
	if (isInput(input) && inputRequiresValidityTracking(input)) validityMonitor.watchValidity(parent.destroyRef, input, () => parser.setRawValue(void 0));
	parent.registerAsBinding();
	if (input.tagName === "SELECT") observeSelectMutations(input, () => {
		if (!updateMode) return;
		input.value = parent.state().controlValue();
	}, parent.destroyRef);
	const bindings = createBindings();
	return () => {
		const state = parent.state();
		for (const name of CONTROL_BINDING_NAMES) {
			const value = readFieldStateBindingValue(state, name);
			if (bindingUpdated(bindings, name, value)) {
				host.setInputOnDirectives(name, value);
				if (parent.elementAcceptsNativeProperty(name)) {
					const domValue = formatDateForMinMax(name, value, input.type);
					setNativeDomProperty(parent.renderer, input, name, domValue);
				}
			}
		}
		const controlValue = state.controlValue();
		const controlValueChanged = bindingUpdated(bindings, "controlValue", controlValue);
		const radioValueChanged = input.type === "radio" && bindingUpdated(bindings, "radioValue", input.value);
		if (controlValueChanged || radioValueChanged) setNativeControlValue(input, controlValue);
		updateMode = true;
	};
}
var InputValidityMonitor = class {};
_InputValidityMonitor = InputValidityMonitor;
_defineProperty(InputValidityMonitor, "ɵfac", function InputValidityMonitor_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _InputValidityMonitor)();
});
_defineProperty(InputValidityMonitor, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({
	token: _InputValidityMonitor,
	factory: (__ngFactoryType__) => AnimationInputValidityMonitor.ɵfac(__ngFactoryType__),
	providedIn: "root"
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputValidityMonitor, [{
		type: Injectable,
		args: [{
			providedIn: "root",
			useClass: forwardRef(() => AnimationInputValidityMonitor)
		}]
	}], null, null);
})();
var AnimationInputValidityMonitor = class extends InputValidityMonitor {
	constructor(..._args4) {
		super(..._args4);
		_defineProperty(this, "document", inject(DOCUMENT));
		_defineProperty(this, "cspNonce", inject(CSP_NONCE, { optional: true }));
		_defineProperty(this, "injectedStyles", /* @__PURE__ */ new WeakMap());
	}
	watchValidity(destroyRef, element, callback) {
		const rootNode = element.getRootNode();
		if (!this.injectedStyles.has(rootNode)) this.injectedStyles.set(rootNode, this.createTransitionStyle(rootNode));
		const onAnimationStart = (event) => {
			const animationEvent = event;
			if (animationEvent.animationName === "ng-valid" || animationEvent.animationName === "ng-invalid") callback();
		};
		element.addEventListener("animationstart", onAnimationStart);
		destroyRef.onDestroy(() => {
			element.removeEventListener("animationstart", onAnimationStart);
		});
	}
	isBadInput(element) {
		var _element$validity$bad, _element$validity;
		return (_element$validity$bad = (_element$validity = element.validity) === null || _element$validity === void 0 ? void 0 : _element$validity.badInput) !== null && _element$validity$bad !== void 0 ? _element$validity$bad : false;
	}
	createTransitionStyle(rootNode) {
		const element = this.document.createElement("style");
		if (this.cspNonce) element.nonce = this.cspNonce;
		element.textContent = `
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `;
		if (rootNode.nodeType === 9) {
			var _rootNode$head;
			(_rootNode$head = rootNode.head) === null || _rootNode$head === void 0 || _rootNode$head.appendChild(element);
		} else rootNode.appendChild(element);
		return element;
	}
	ngOnDestroy() {
		var _this$injectedStyles$;
		(_this$injectedStyles$ = this.injectedStyles.get(this.document)) === null || _this$injectedStyles$ === void 0 || _this$injectedStyles$.remove();
	}
};
_AnimationInputValidityMonitor = AnimationInputValidityMonitor;
_defineProperty(AnimationInputValidityMonitor, "ɵfac", /* @__PURE__ */ (() => {
	let ɵAnimationInputValidityMonitor_BaseFactory;
	return function AnimationInputValidityMonitor_Factory(__ngFactoryType__) {
		return (ɵAnimationInputValidityMonitor_BaseFactory || (ɵAnimationInputValidityMonitor_BaseFactory = ɵɵgetInheritedFactory(_AnimationInputValidityMonitor)))(__ngFactoryType__ || _AnimationInputValidityMonitor);
	};
})());
_defineProperty(AnimationInputValidityMonitor, "ɵprov", /* @__PURE__ */ ɵɵdefineInjectable({
	token: _AnimationInputValidityMonitor,
	factory: _AnimationInputValidityMonitor.ɵfac
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationInputValidityMonitor, [{ type: Injectable }], null, null);
})();
var ɵNgFieldDirective = Symbol();
var FORM_FIELD = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FORM_FIELD" : "");
var FormField = class {
	constructor() {
		_defineProperty(this, "field", input.required(_objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "field" } : {}), {}, { alias: "formField" })));
		_defineProperty(this, "state", computed(() => this.field()(), ...ngDevMode ? [{ debugName: "state" }] : []));
		_defineProperty(this, "renderer", inject(Renderer2));
		_defineProperty(this, "destroyRef", inject(DestroyRef));
		_defineProperty(this, "injector", inject(Injector));
		_defineProperty(this, "element", inject(ElementRef).nativeElement);
		_defineProperty(this, "elementIsNativeFormElement", isNativeFormElement(this.element));
		_defineProperty(this, "elementAcceptsTextualValues", isTextualFormElement(this.element));
		_defineProperty(this, "_elementAcceptsMinMax", void 0);
		_defineProperty(this, "nativeFormElement", this.elementIsNativeFormElement ? this.element : void 0);
		_defineProperty(this, "focuser", (options) => this.element.focus(options));
		_defineProperty(this, "controlValueAccessors", inject(NG_VALUE_ACCESSOR, {
			optional: true,
			self: true
		}));
		_defineProperty(this, "config", inject(SIGNAL_FORMS_CONFIG, { optional: true }));
		_defineProperty(this, "validityMonitor", inject(InputValidityMonitor));
		_defineProperty(this, "parseErrorsSource", signal(void 0, ...ngDevMode ? [{ debugName: "parseErrorsSource" }] : []));
		_defineProperty(this, "_interopNgControl", void 0);
		_defineProperty(this, "parseErrors", computed(() => {
			var _this$parseErrorsSour, _this$parseErrorsSour2;
			return (_this$parseErrorsSour = (_this$parseErrorsSour2 = this.parseErrorsSource()) === null || _this$parseErrorsSour2 === void 0 ? void 0 : _this$parseErrorsSour2().map((err) => _objectSpread2(_objectSpread2({}, err), {}, {
				fieldTree: untracked(this.state).fieldTree,
				formField: this
			}))) !== null && _this$parseErrorsSour !== void 0 ? _this$parseErrorsSour : [];
		}, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "parseErrors" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "errors", computed(() => this.state().errors().filter((err) => !err.formField || err.formField === this), _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "errors" } : {}), {}, { equal: shallowArrayEquals })));
		_defineProperty(this, "isFieldBinding", false);
		_defineProperty(this, "resetter", () => {});
		_defineProperty(this, "parseErrorsResetCallback", void 0);
		_defineProperty(this, ɵNgFieldDirective, void 0);
		_defineProperty(this, "ɵngControlUpdate", void 0);
	}
	get interopNgControl() {
		var _this$_interopNgContr;
		return (_this$_interopNgContr = this._interopNgControl) !== null && _this$_interopNgContr !== void 0 ? _this$_interopNgContr : this._interopNgControl = new InteropNgControl(this.state);
	}
	setParseErrors(source) {
		this.parseErrorsSource.set(source);
	}
	set onReset(callback) {
		this.parseErrorsResetCallback = callback;
	}
	get onReset() {
		return this.parseErrorsResetCallback;
	}
	get controlValueAccessor() {
		var _selectValueAccessor2;
		if (!this.controlValueAccessors || this.controlValueAccessors.length === 0) {
			var _this$interopNgContro, _this$interopNgContro2;
			return (_this$interopNgContro = (_this$interopNgContro2 = this.interopNgControl) === null || _this$interopNgContro2 === void 0 ? void 0 : _this$interopNgContro2.valueAccessor) !== null && _this$interopNgContro !== void 0 ? _this$interopNgContro : void 0;
		}
		return (_selectValueAccessor2 = selectValueAccessor(this.interopNgControl, this.controlValueAccessors)) !== null && _selectValueAccessor2 !== void 0 ? _selectValueAccessor2 : void 0;
	}
	installClassBindingEffect() {
		var _this$config$classes, _this$config;
		const classes = Object.entries((_this$config$classes = (_this$config = this.config) === null || _this$config === void 0 ? void 0 : _this$config.classes) !== null && _this$config$classes !== void 0 ? _this$config$classes : {}).map(([className, computation]) => [className, computed(() => computation(this))]);
		if (classes.length === 0) return;
		const bindings = createBindings();
		afterRenderEffect({ write: () => {
			for (const [className, computation] of classes) {
				const active = computation();
				if (bindingUpdated(bindings, className, active)) if (active) this.renderer.addClass(this.element, className);
				else this.renderer.removeClass(this.element, className);
			}
		} }, { injector: this.injector });
	}
	focus(options) {
		this.focuser(options);
	}
	reset() {
		var _this$parseErrorsRese;
		this.resetter();
		(_this$parseErrorsRese = this.parseErrorsResetCallback) === null || _this$parseErrorsRese === void 0 || _this$parseErrorsRese.call(this, this.state().value());
	}
	registerAsBinding(bindingOptions) {
		if (this.isFieldBinding) throw new RuntimeError(1913, typeof ngDevMode !== "undefined" && ngDevMode && "FormField already registered as a binding");
		this.isFieldBinding = true;
		this.installClassBindingEffect();
		if (bindingOptions === null || bindingOptions === void 0 ? void 0 : bindingOptions.focus) this.focuser = (focusOptions) => bindingOptions.focus(focusOptions);
		if (bindingOptions === null || bindingOptions === void 0 ? void 0 : bindingOptions.reset) this.resetter = () => bindingOptions.reset();
		effect((onCleanup) => {
			const fieldNode = this.state();
			fieldNode.nodeState.formFieldBindings.update((controls) => [...controls, this]);
			onCleanup(() => {
				fieldNode.nodeState.formFieldBindings.update((controls) => controls.filter((c) => c !== this));
			});
		}, { injector: this.injector });
		if (typeof ngDevMode !== "undefined" && ngDevMode) effect(() => {
			const fieldNode = this.state();
			if (fieldNode.hidden()) {
				const path = fieldNode.structure.pathKeys().join(".") || "<root>";
				console.warn(formatRuntimeError(1916, `Field '${path}' is hidden but is being rendered. Hidden fields should be removed from the DOM using @if.`));
			}
		}, { injector: this.injector });
	}
	ɵngControlCreate(host) {
		if (host.hasPassThrough) return;
		if (this.controlValueAccessor) this.ɵngControlUpdate = cvaControlCreate(host, this);
		else if (host.customControl) this.ɵngControlUpdate = customControlCreate(host, this);
		else if (this.elementIsNativeFormElement) this.ɵngControlUpdate = nativeControlCreate(host, this, this.parseErrorsSource, this.validityMonitor);
		else throw new RuntimeError(1914, typeof ngDevMode !== "undefined" && ngDevMode && `${host.descriptor} is an invalid [formField] directive host. The host must be a native form control (such as <input>', '<select>', or '<textarea>') or a custom form control with a 'value' or 'checked' model.`);
	}
	elementAcceptsNativeProperty(key) {
		if (!this.elementIsNativeFormElement) return false;
		switch (key) {
			case "min":
			case "max":
				var _this$_elementAccepts;
				return (_this$_elementAccepts = this._elementAcceptsMinMax) !== null && _this$_elementAccepts !== void 0 ? _this$_elementAccepts : this._elementAcceptsMinMax = elementAcceptsMinMax(this.element);
			case "minLength":
			case "maxLength": return this.elementAcceptsTextualValues;
			case "disabled":
			case "required":
			case "readonly":
			case "name": return true;
			default: return false;
		}
	}
};
_FormField = FormField;
_defineProperty(FormField, "ɵfac", function FormField_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _FormField)();
});
_defineProperty(FormField, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _FormField,
	selectors: [[
		"",
		"formField",
		""
	]],
	inputs: { field: [
		1,
		"formField",
		"field"
	] },
	exportAs: ["formField"],
	features: [ɵɵProvidersFeature([
		{
			provide: FORM_FIELD,
			useExisting: _FormField
		},
		{
			provide: NgControl,
			useFactory: () => inject(_FormField).interopNgControl
		},
		{
			provide: ɵFORM_CONTROL_INTEGRATION,
			useFactory: () => inject(FORM_FIELD, { self: true })
		}
	]), ɵɵControlFeature("formField")]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormField, [{
		type: Directive,
		args: [{
			selector: "[formField]",
			exportAs: "formField",
			providers: [
				{
					provide: FORM_FIELD,
					useExisting: FormField
				},
				{
					provide: NgControl,
					useFactory: () => inject(FormField).interopNgControl
				},
				{
					provide: ɵFORM_CONTROL_INTEGRATION,
					useFactory: () => inject(FORM_FIELD, { self: true })
				}
			]
		}]
	}], null, { field: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "formField",
			required: true
		}]
	}] });
})();
var FormRoot = class {
	constructor() {
		_defineProperty(this, "fieldTree", input.required(_objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "fieldTree" } : {}), {}, { alias: "formRoot" })));
	}
	onSubmit(event) {
		event.preventDefault();
		untracked(() => {
			const fieldTree = this.fieldTree();
			if (fieldTree().structure.fieldManager.submitOptions) submit(fieldTree);
		});
	}
};
_FormRoot = FormRoot;
_defineProperty(FormRoot, "ɵfac", function FormRoot_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _FormRoot)();
});
_defineProperty(FormRoot, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _FormRoot,
	selectors: [[
		"form",
		"formRoot",
		""
	]],
	hostAttrs: ["novalidate", ""],
	hostBindings: function FormRoot_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("submit", function FormRoot_submit_HostBindingHandler($event) {
			return ctx.onSubmit($event);
		});
	},
	inputs: { fieldTree: [
		1,
		"formRoot",
		"fieldTree"
	] }
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormRoot, [{
		type: Directive,
		args: [{
			selector: "form[formRoot]",
			host: {
				"novalidate": "",
				"(submit)": "onSubmit($event)"
			}
		}]
	}], null, { fieldTree: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "formRoot",
			required: true
		}]
	}] });
})();
//#endregion
//#region node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-input.mjs
var _NzInputAddonBeforeDirective;
var _NzInputAddonAfterDirective;
var _NzInputPrefixDirective;
var _NzInputSuffixDirective;
var _NzInputPasswordDirective;
var _NzInputPasswordIconDirective;
var _NzInputDirective;
var _NzInputOtpComponent;
var _NzInputSearchDirective;
var _NzInputSearchEnterButtonDirective;
var _NzInputWrapperComponent;
var _NzTextareaCountComponent;
var _NzInputModule;
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var _c0 = ["otpInput"];
function NzInputOtpComponent_For_1_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "input", 2, 0);
		ɵɵlistener("input", function NzInputOtpComponent_For_1_Template_input_input_0_listener($event) {
			const $index_r2 = ɵɵrestoreView(_r1).$index;
			return ɵɵresetView(ɵɵnextContext().onInput($index_r2, $event));
		})("focus", function NzInputOtpComponent_For_1_Template_input_focus_0_listener($event) {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onFocus($event));
		})("keydown", function NzInputOtpComponent_For_1_Template_input_keydown_0_listener($event) {
			const $index_r2 = ɵɵrestoreView(_r1).$index;
			return ɵɵresetView(ɵɵnextContext().onKeyDown($index_r2, $event));
		})("paste", function NzInputOtpComponent_For_1_Template_input_paste_0_listener($event) {
			const $index_r2 = ɵɵrestoreView(_r1).$index;
			return ɵɵresetView(ɵɵnextContext().onPaste($index_r2, $event));
		});
		ɵɵelementEnd();
		ɵɵcontrolCreate();
	}
	if (rf & 2) {
		const item_r4 = ctx.$implicit;
		const ctx_r2 = ɵɵnextContext();
		ɵɵproperty("nzSize", ctx_r2.nzSize)("formControl", item_r4)("nzStatus", ctx_r2.nzStatus);
		ɵɵcontrol();
	}
}
var _c1 = [
	[[
		"",
		"nzInputAddonBefore",
		""
	]],
	[[
		"",
		"nzInputAddonAfter",
		""
	]],
	[[
		"",
		"nzInputSearchEnterButton",
		""
	]],
	[[
		"",
		"nzInputPrefix",
		""
	]],
	[[
		"",
		"nzInputSuffix",
		""
	]],
	[[
		"",
		"nzInputClearIcon",
		""
	]],
	[[
		"",
		"nz-input",
		""
	]]
];
var _c2 = [
	"[nzInputAddonBefore]",
	"[nzInputAddonAfter]",
	"[nzInputSearchEnterButton]",
	"[nzInputPrefix]",
	"[nzInputSuffix]",
	"[nzInputClearIcon]",
	"[nz-input]"
];
var _c3 = (a0) => ({ $implicit: a0 });
function NzInputWrapperComponent_Conditional_0_ng_template_0_Template(rf, ctx) {}
function NzInputWrapperComponent_Conditional_0_Template(rf, ctx) {
	if (rf & 1) ɵɵtemplate(0, NzInputWrapperComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 4);
	if (rf & 2) {
		ɵɵnextContext();
		ɵɵproperty("ngTemplateOutlet", ɵɵreference(4));
	}
}
function NzInputWrapperComponent_Conditional_1_ng_template_0_Template(rf, ctx) {}
function NzInputWrapperComponent_Conditional_1_Template(rf, ctx) {
	if (rf & 1) ɵɵtemplate(0, NzInputWrapperComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 4);
	if (rf & 2) {
		ɵɵnextContext();
		ɵɵproperty("ngTemplateOutlet", ɵɵreference(8));
	}
}
function NzInputWrapperComponent_Conditional_2_ng_template_0_Template(rf, ctx) {}
function NzInputWrapperComponent_Conditional_2_Template(rf, ctx) {
	if (rf & 1) ɵɵtemplate(0, NzInputWrapperComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 4);
	if (rf & 2) {
		ɵɵnextContext();
		ɵɵproperty("ngTemplateOutlet", ɵɵreference(10));
	}
}
function NzInputWrapperComponent_ng_template_3_Conditional_1_ProjectionFallback_1_Template(rf, ctx) {
	if (rf & 1) ɵɵtext(0);
	if (rf & 2) ɵɵtextInterpolate(ɵɵnextContext(3).nzAddonBefore());
}
function NzInputWrapperComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 6);
		ɵɵprojection(1, 0, null, NzInputWrapperComponent_ng_template_3_Conditional_1_ProjectionFallback_1_Template, 1, 1);
		ɵɵelementEnd();
	}
}
function NzInputWrapperComponent_ng_template_3_Conditional_2_ng_template_0_Template(rf, ctx) {}
function NzInputWrapperComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
	if (rf & 1) ɵɵtemplate(0, NzInputWrapperComponent_ng_template_3_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 4);
	if (rf & 2) {
		ɵɵnextContext(2);
		ɵɵproperty("ngTemplateOutlet", ɵɵreference(6));
	}
}
function NzInputWrapperComponent_ng_template_3_Conditional_3_ng_template_0_Template(rf, ctx) {}
function NzInputWrapperComponent_ng_template_3_Conditional_3_Template(rf, ctx) {
	if (rf & 1) ɵɵtemplate(0, NzInputWrapperComponent_ng_template_3_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 4);
	if (rf & 2) {
		ɵɵnextContext(2);
		ɵɵproperty("ngTemplateOutlet", ɵɵreference(10));
	}
}
function NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_ProjectionFallback_2_Conditional_0_Template(rf, ctx) {
	if (rf & 1) ɵɵtext(0);
	if (rf & 2) {
		ɵɵnextContext(2);
		ɵɵtextInterpolate1(" ", ɵɵreadContextLet(0), " ");
	}
}
function NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_ProjectionFallback_2_Conditional_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "nz-icon", 9);
}
function NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_ProjectionFallback_2_Template(rf, ctx) {
	if (rf & 1) ɵɵconditionalCreate(0, NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_ProjectionFallback_2_Conditional_0_Template, 1, 1)(1, NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_ProjectionFallback_2_Conditional_1_Template, 1, 0, "nz-icon", 9);
	if (rf & 2) {
		ɵɵnextContext();
		const nzEnterButton_r7 = ɵɵreadContextLet(0);
		ɵɵconditional(nzEnterButton_r7 && typeof nzEnterButton_r7 === "string" ? 0 : 1);
	}
}
function NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		const _r6 = ɵɵgetCurrentView();
		ɵɵdeclareLet(0);
		ɵɵelementStart(1, "button", 8);
		ɵɵlistener("click", function NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_Template_button_click_1_listener($event) {
			ɵɵrestoreView(_r6);
			return ɵɵresetView(ɵɵnextContext(3).inputSearchDir.search($event));
		});
		ɵɵprojection(2, 2, null, NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_ProjectionFallback_2_Template, 2, 1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		var _ctx_r3$inputSearchEn;
		const ctx_r3 = ɵɵnextContext(3);
		const nzEnterButton_r8 = ɵɵstoreLet(ctx_r3.inputSearchDir.nzEnterButton());
		const hasEnterButton_r9 = (_ctx_r3$inputSearchEn = ctx_r3.inputSearchEnterButton()) !== null && _ctx_r3$inputSearchEn !== void 0 ? _ctx_r3$inputSearchEn : nzEnterButton_r8 !== false;
		ɵɵadvance();
		ɵɵproperty("nzType", hasEnterButton_r9 ? "primary" : "default")("nzSize", ctx_r3.size())("nzLoading", ctx_r3.inputSearchDir.nzLoading());
	}
}
function NzInputWrapperComponent_ng_template_3_Conditional_4_ProjectionFallback_2_Template(rf, ctx) {
	if (rf & 1) ɵɵtext(0);
	if (rf & 2) ɵɵtextInterpolate(ɵɵnextContext(3).nzAddonAfter());
}
function NzInputWrapperComponent_ng_template_3_Conditional_4_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 6);
		ɵɵconditionalCreate(1, NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_Template, 4, 4, "button", 7);
		ɵɵprojection(2, 1, null, NzInputWrapperComponent_ng_template_3_Conditional_4_ProjectionFallback_2_Template, 1, 1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r3 = ɵɵnextContext(2);
		ɵɵadvance();
		ɵɵconditional(ctx_r3.inputSearchDir ? 1 : -1);
	}
}
function NzInputWrapperComponent_ng_template_3_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 5);
		ɵɵconditionalCreate(1, NzInputWrapperComponent_ng_template_3_Conditional_1_Template, 3, 0, "span", 6);
		ɵɵconditionalCreate(2, NzInputWrapperComponent_ng_template_3_Conditional_2_Template, 1, 1, null, 4)(3, NzInputWrapperComponent_ng_template_3_Conditional_3_Template, 1, 1, null, 4);
		ɵɵconditionalCreate(4, NzInputWrapperComponent_ng_template_3_Conditional_4_Template, 4, 1, "span", 6);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r3 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵconditional(ctx_r3.hasAddonBefore() ? 1 : -1);
		ɵɵadvance();
		ɵɵconditional(ctx_r3.hasAffix() ? 2 : 3);
		ɵɵadvance(2);
		ɵɵconditional(ctx_r3.hasAddonAfter() ? 4 : -1);
	}
}
function NzInputWrapperComponent_ng_template_5_ng_template_1_Template(rf, ctx) {}
function NzInputWrapperComponent_ng_template_5_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span");
		ɵɵtemplate(1, NzInputWrapperComponent_ng_template_5_ng_template_1_Template, 0, 0, "ng-template", 4);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r3 = ɵɵnextContext();
		const inputWithAffixInner_r2 = ɵɵreference(8);
		ɵɵclassMap(ctx_r3.affixWrapperClass());
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", inputWithAffixInner_r2);
	}
}
function NzInputWrapperComponent_ng_template_7_Conditional_0_ProjectionFallback_1_Template(rf, ctx) {
	if (rf & 1) ɵɵtext(0);
	if (rf & 2) ɵɵtextInterpolate(ɵɵnextContext(3).nzPrefix());
}
function NzInputWrapperComponent_ng_template_7_Conditional_0_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 10);
		ɵɵprojection(1, 3, null, NzInputWrapperComponent_ng_template_7_Conditional_0_ProjectionFallback_1_Template, 1, 1);
		ɵɵelementEnd();
	}
}
function NzInputWrapperComponent_ng_template_7_ng_template_1_Template(rf, ctx) {}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_1_ProjectionFallback_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "nz-icon", 17);
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_1_Template(rf, ctx) {
	if (rf & 1) {
		const _r10 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "span", 16);
		ɵɵlistener("click", function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_1_Template_span_click_0_listener($event) {
			var _ctx_r3$inputSearchDi;
			ɵɵrestoreView(_r10);
			const ctx_r3 = ɵɵnextContext(3);
			ctx_r3.clear();
			return ɵɵresetView((_ctx_r3$inputSearchDi = ctx_r3.inputSearchDir) === null || _ctx_r3$inputSearchDi === void 0 ? void 0 : _ctx_r3$inputSearchDi.search($event, "clear"));
		});
		ɵɵprojection(1, 5, null, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_1_ProjectionFallback_1_Template, 1, 0);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		var _ctx_r3$inputPassword;
		const ctx_r3 = ɵɵnextContext(3);
		ɵɵclassProp("ant-input-clear-icon-has-suffix", ctx_r3.nzSuffix() || ctx_r3.suffix() || ctx_r3.hasFeedback() || ((_ctx_r3$inputPassword = ctx_r3.inputPasswordDir) === null || _ctx_r3$inputPassword === void 0 ? void 0 : _ctx_r3$inputPassword.nzVisibilityToggle()))("ant-input-clear-icon-hidden", !ctx_r3.inputDir().value() || ctx_r3.disabled() || ctx_r3.readOnly());
	}
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_2_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 13);
		ɵɵtext(1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r3 = ɵɵnextContext(3);
		ɵɵadvance();
		ɵɵtextInterpolate(ctx_r3.dataCount());
	}
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Conditional_1_ng_template_0_Template(rf, ctx) {}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Conditional_1_Template(rf, ctx) {
	if (rf & 1) ɵɵtemplate(0, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 19);
	if (rf & 2) {
		const ctx_r3 = ɵɵnextContext(4);
		ɵɵproperty("ngTemplateOutlet", ctx)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r3.inputPasswordDir.nzVisible()));
	}
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Conditional_2_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "nz-icon", 20);
	if (rf & 2) ɵɵproperty("nzType", ɵɵnextContext(4).inputPasswordDir.nzVisible() ? "eye" : "eye-invisible");
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		const _r11 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "span", 18);
		ɵɵlistener("click", function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Template_span_click_0_listener() {
			ɵɵrestoreView(_r11);
			return ɵɵresetView(ɵɵnextContext(3).inputPasswordDir.toggleVisible());
		});
		ɵɵconditionalCreate(1, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Conditional_1_Template, 1, 4, null, 19)(2, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Conditional_2_Template, 1, 1, "nz-icon", 20);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		let tmp_7_0;
		const ctx_r3 = ɵɵnextContext(3);
		ɵɵadvance();
		ɵɵconditional((tmp_7_0 = ctx_r3.inputPasswordIconTmpl()) ? 1 : 2, tmp_7_0);
	}
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_ProjectionFallback_4_Template(rf, ctx) {
	if (rf & 1) ɵɵtext(0);
	if (rf & 2) ɵɵtextInterpolate(ɵɵnextContext(3).nzSuffix());
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_6_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "nz-form-item-feedback-icon", 15);
	if (rf & 2) ɵɵproperty("status", ɵɵnextContext(3).status());
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 11);
		ɵɵconditionalCreate(1, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_1_Template, 3, 4, "span", 12);
		ɵɵconditionalCreate(2, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_2_Template, 2, 1, "span", 13);
		ɵɵconditionalCreate(3, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Template, 3, 1, "span", 14);
		ɵɵprojection(4, 4, null, NzInputWrapperComponent_ng_template_7_Conditional_2_ProjectionFallback_4_Template, 1, 1);
		ɵɵconditionalCreate(6, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_6_Template, 1, 1, "nz-form-item-feedback-icon", 15);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r3 = ɵɵnextContext(2);
		ɵɵadvance();
		ɵɵconditional(ctx_r3.nzAllowClear() ? 1 : -1);
		ɵɵadvance();
		ɵɵconditional(ctx_r3.nzShowCount() ? 2 : -1);
		ɵɵadvance();
		ɵɵconditional(ctx_r3.inputPasswordDir && ctx_r3.inputPasswordDir.nzVisibilityToggle() ? 3 : -1);
		ɵɵadvance(3);
		ɵɵconditional(ctx_r3.hasFeedback() && ctx_r3.status() ? 6 : -1);
	}
}
function NzInputWrapperComponent_ng_template_7_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵconditionalCreate(0, NzInputWrapperComponent_ng_template_7_Conditional_0_Template, 3, 0, "span", 10);
		ɵɵtemplate(1, NzInputWrapperComponent_ng_template_7_ng_template_1_Template, 0, 0, "ng-template", 4);
		ɵɵconditionalCreate(2, NzInputWrapperComponent_ng_template_7_Conditional_2_Template, 7, 4, "span", 11);
	}
	if (rf & 2) {
		const ctx_r3 = ɵɵnextContext();
		const input_r3 = ɵɵreference(10);
		ɵɵconditional(ctx_r3.hasPrefix() ? 0 : -1);
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", input_r3);
		ɵɵadvance();
		ɵɵconditional(ctx_r3.hasSuffix() ? 2 : -1);
	}
}
function NzInputWrapperComponent_ng_template_9_Template(rf, ctx) {
	if (rf & 1) ɵɵprojection(0, 6);
}
var _c4 = [[[
	"textarea",
	"nz-input",
	""
]]];
var _c5 = ["textarea[nz-input]"];
var NzInputAddonBeforeDirective = class {};
_NzInputAddonBeforeDirective = NzInputAddonBeforeDirective;
_defineProperty(NzInputAddonBeforeDirective, "ɵfac", function NzInputAddonBeforeDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzInputAddonBeforeDirective)();
});
_defineProperty(NzInputAddonBeforeDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzInputAddonBeforeDirective,
	selectors: [[
		"",
		"nzInputAddonBefore",
		""
	]]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputAddonBeforeDirective, [{
		type: Directive,
		args: [{ selector: "[nzInputAddonBefore]" }]
	}], null, null);
})();
var NzInputAddonAfterDirective = class {};
_NzInputAddonAfterDirective = NzInputAddonAfterDirective;
_defineProperty(NzInputAddonAfterDirective, "ɵfac", function NzInputAddonAfterDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzInputAddonAfterDirective)();
});
_defineProperty(NzInputAddonAfterDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzInputAddonAfterDirective,
	selectors: [[
		"",
		"nzInputAddonAfter",
		""
	]]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputAddonAfterDirective, [{
		type: Directive,
		args: [{ selector: "[nzInputAddonAfter]" }]
	}], null, null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzInputPrefixDirective = class {};
_NzInputPrefixDirective = NzInputPrefixDirective;
_defineProperty(NzInputPrefixDirective, "ɵfac", function NzInputPrefixDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzInputPrefixDirective)();
});
_defineProperty(NzInputPrefixDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzInputPrefixDirective,
	selectors: [[
		"",
		"nzInputPrefix",
		""
	]]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputPrefixDirective, [{
		type: Directive,
		args: [{ selector: "[nzInputPrefix]" }]
	}], null, null);
})();
var NzInputSuffixDirective = class {};
_NzInputSuffixDirective = NzInputSuffixDirective;
_defineProperty(NzInputSuffixDirective, "ɵfac", function NzInputSuffixDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzInputSuffixDirective)();
});
_defineProperty(NzInputSuffixDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzInputSuffixDirective,
	selectors: [[
		"",
		"nzInputSuffix",
		""
	]]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputSuffixDirective, [{
		type: Directive,
		args: [{ selector: "[nzInputSuffix]" }]
	}], null, null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzInputPasswordDirective = class {
	constructor() {
		_defineProperty(this, "nzVisibilityToggle", input(true, ...ngDevMode ? [{ debugName: "nzVisibilityToggle" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzVisible", model(false, ...ngDevMode ? [{ debugName: "nzVisible" }] : 		/* istanbul ignore next */ []));
	}
	toggleVisible() {
		this.nzVisible.update((value) => !value);
	}
};
_NzInputPasswordDirective = NzInputPasswordDirective;
_defineProperty(NzInputPasswordDirective, "ɵfac", function NzInputPasswordDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzInputPasswordDirective)();
});
_defineProperty(NzInputPasswordDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzInputPasswordDirective,
	selectors: [["nz-input-password"]],
	hostAttrs: [1, "ant-input-password"],
	inputs: {
		nzVisibilityToggle: [1, "nzVisibilityToggle"],
		nzVisible: [1, "nzVisible"]
	},
	outputs: { nzVisible: "nzVisibleChange" },
	exportAs: ["nzInputPassword"]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputPasswordDirective, [{
		type: Directive,
		args: [{
			selector: "nz-input-password",
			exportAs: "nzInputPassword",
			host: { class: "ant-input-password" }
		}]
	}], null, {
		nzVisibilityToggle: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzVisibilityToggle",
				required: false
			}]
		}],
		nzVisible: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzVisible",
				required: false
			}]
		}, {
			type: Output,
			args: ["nzVisibleChange"]
		}]
	});
})();
var NzInputPasswordIconDirective = class {
	/**
	* @internal
	*/
	static ngTemplateContextGuard(_, context) {
		return true;
	}
};
_NzInputPasswordIconDirective = NzInputPasswordIconDirective;
_defineProperty(NzInputPasswordIconDirective, "ɵfac", function NzInputPasswordIconDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzInputPasswordIconDirective)();
});
_defineProperty(NzInputPasswordIconDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzInputPasswordIconDirective,
	selectors: [[
		"",
		"nzInputPasswordIcon",
		""
	]]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputPasswordIconDirective, [{
		type: Directive,
		args: [{ selector: "[nzInputPasswordIcon]" }]
	}], null, null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NZ_INPUT_WRAPPER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-input-wrapper" : "");
var NZ_INPUT_SEARCH = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-input-search" : "");
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var PREFIX_CLS = "ant-input";
var NzInputDirective = class {
	constructor() {
		var _this$nzFormStatusSer, _this$nzFormStatusSer2;
		_defineProperty(this, "elementRef", inject(ElementRef));
		_defineProperty(this, "compactSize", inject(NZ_SPACE_COMPACT_SIZE, { optional: true }));
		_defineProperty(this, "destroyRef", inject(DestroyRef));
		_defineProperty(this, "nzFormStatusService", inject(NzFormStatusService, { optional: true }));
		_defineProperty(this, "inputWrapper", inject(NZ_INPUT_WRAPPER, {
			host: true,
			optional: true
		}));
		_defineProperty(this, "focusMonitor", inject(FocusMonitor));
		_defineProperty(this, "hostView", inject(ViewContainerRef));
		_defineProperty(this, "inputPasswordDir", inject(NzInputPasswordDirective, {
			host: true,
			optional: true
		}));
		_defineProperty(this, "inputSearchDir", inject(NZ_INPUT_SEARCH, {
			host: true,
			optional: true
		}));
		_defineProperty(this, "formField", inject(FORM_FIELD, {
			self: true,
			optional: true
		}));
		_defineProperty(this, "ngControl", inject(NgControl, {
			self: true,
			optional: true
		}));
		_defineProperty(this, "nativeValue", signal(this.elementRef.nativeElement.value, ...ngDevMode ? [{ debugName: "nativeValue" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "value", computed(() => {
			if (this.formField) {
				var _this$formField$state;
				return String((_this$formField$state = this.formField.state().value()) !== null && _this$formField$state !== void 0 ? _this$formField$state : "");
			}
			return this.nativeValue();
		}, ...ngDevMode ? [{ debugName: "value" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzVariant", input(...ngDevMode ? [void 0, { debugName: "nzVariant" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzSize", input("default", ...ngDevMode ? [{ debugName: "nzSize" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzStatus", input("", ...ngDevMode ? [{ debugName: "nzStatus" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "disabled", input(false, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "disabled" } : 		/* istanbul ignore next */ {}), {}, { transform: booleanAttribute })));
		_defineProperty(this, "readonly", input(false, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "readonly" } : 		/* istanbul ignore next */ {}), {}, { transform: booleanAttribute })));
		_defineProperty(this, "controlDisabled", signal(false, ...ngDevMode ? [{ debugName: "controlDisabled" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "finalDisabled", computed(() => {
			if (this.formField) return this.formField.state().disabled();
			return this.ngControl ? this.controlDisabled() : this.disabled();
		}, ...ngDevMode ? [{ debugName: "finalDisabled" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "dir", inject(Directionality).valueSignal);
		_defineProperty(this, "size", linkedSignal(this.nzSize, ...ngDevMode ? [{ debugName: "size" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "formSize", inject(NZ_FORM_SIZE, { optional: true }));
		_defineProperty(this, "formVariant", inject(NZ_FORM_VARIANT, { optional: true }));
		_defineProperty(this, "status", this.nzFormStatusService ? toSignal(this.nzFormStatusService.formStatusChanges.pipe(map((value) => value.status)), { initialValue: "" }) : this.nzStatus);
		_defineProperty(this, "hasFeedback", toSignal((_this$nzFormStatusSer = (_this$nzFormStatusSer2 = this.nzFormStatusService) === null || _this$nzFormStatusSer2 === void 0 ? void 0 : _this$nzFormStatusSer2.formStatusChanges.pipe(map((value) => value.hasFeedback))) !== null && _this$nzFormStatusSer !== void 0 ? _this$nzFormStatusSer : EMPTY$1, { initialValue: false }));
		_defineProperty(this, "classes", computed(() => getStatusClassNames(PREFIX_CLS, this.status(), this.hasFeedback()), ...ngDevMode ? [{ debugName: "classes" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "type", computed(() => {
			if (this.inputPasswordDir) return this.inputPasswordDir.nzVisible() ? "text" : "password";
			if (this.inputSearchDir) return "search";
			return this.elementRef.nativeElement.getAttribute("type") || "text";
		}, ...ngDevMode ? [{ debugName: "type" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "focused", signal(false, ...ngDevMode ? [{ debugName: "focused" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "finalSize", computed(() => {
			var _this$formSize;
			if ((_this$formSize = this.formSize) === null || _this$formSize === void 0 ? void 0 : _this$formSize.call(this)) return this.formSize();
			if (this.compactSize) return this.compactSize();
			return this.size();
		}, ...ngDevMode ? [{ debugName: "finalSize" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "finalVariant", computed(() => {
			var _this$formVariant;
			return this.nzVariant() || ((_this$formVariant = this.formVariant) === null || _this$formVariant === void 0 ? void 0 : _this$formVariant.call(this)) || "outlined";
		}, ...ngDevMode ? [{ debugName: "finalVariant" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "feedbackRef", null);
		_defineProperty(this, "disabled$", toObservable(this.finalDisabled));
		this.destroyRef.onDestroy(() => {
			this.focusMonitor.stopMonitoring(this.elementRef);
		});
		this.focusMonitor.monitor(this.elementRef, false).pipe(takeUntilDestroyed()).subscribe((origin) => this.focused.set(!!origin));
		effect(() => {
			this.renderFeedbackIcon();
		});
	}
	ngOnInit() {
		var _this$ngControl, _this$ngControl2, _this$ngControl3;
		(_this$ngControl = this.ngControl) === null || _this$ngControl === void 0 || (_this$ngControl = _this$ngControl.statusChanges) === null || _this$ngControl === void 0 || _this$ngControl.pipe(startWith(null), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
			this.controlDisabled.set(!!this.ngControl.disabled);
		});
		(_this$ngControl2 = this.ngControl) === null || _this$ngControl2 === void 0 || (_this$ngControl2 = _this$ngControl2.valueChanges) === null || _this$ngControl2 === void 0 || _this$ngControl2.pipe(startWith((_this$ngControl3 = this.ngControl) === null || _this$ngControl3 === void 0 || (_this$ngControl3 = _this$ngControl3.control) === null || _this$ngControl3 === void 0 ? void 0 : _this$ngControl3.value), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
			this.nativeValue.set(value !== null && value !== void 0 ? value : "");
		});
	}
	onInput(event) {
		this.nativeValue.set(event.target.value);
	}
	renderFeedbackIcon() {
		if (!this.status() || !this.hasFeedback() || this.inputWrapper) {
			this.hostView.clear();
			this.feedbackRef = null;
			return;
		}
		this.feedbackRef = this.feedbackRef || this.hostView.createComponent(NzFormItemFeedbackIconComponent);
		this.feedbackRef.location.nativeElement.classList.add("ant-input-suffix");
		this.feedbackRef.setInput("status", this.status());
	}
	focus(options) {
		triggerFocus(this.elementRef.nativeElement, options);
	}
	blur() {
		this.elementRef.nativeElement.blur();
	}
};
_NzInputDirective = NzInputDirective;
_defineProperty(NzInputDirective, "ɵfac", function NzInputDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzInputDirective)();
});
_defineProperty(NzInputDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzInputDirective,
	selectors: [[
		"input",
		"nz-input",
		""
	], [
		"textarea",
		"nz-input",
		""
	]],
	hostAttrs: [1, "ant-input"],
	hostVars: 23,
	hostBindings: function NzInputDirective_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("input", function NzInputDirective_input_HostBindingHandler($event) {
			return ctx.onInput($event);
		});
		if (rf & 2) {
			ɵɵattribute("type", ctx.type())("disabled", ctx.finalDisabled() || null)("readonly", ctx.readonly() || null);
			ɵɵclassMap(ctx.classes());
			ɵɵclassProp("ant-input-disabled", ctx.finalDisabled())("ant-input-outlined", ctx.finalVariant() === "outlined")("ant-input-borderless", ctx.finalVariant() === "borderless")("ant-input-filled", ctx.finalVariant() === "filled")("ant-input-underlined", ctx.finalVariant() === "underlined")("ant-input-lg", ctx.finalSize() === "large")("ant-input-sm", ctx.finalSize() === "small")("ant-input-rtl", ctx.dir() === "rtl")("ant-input-focused", ctx.focused());
		}
	},
	inputs: {
		nzVariant: [1, "nzVariant"],
		nzSize: [1, "nzSize"],
		nzStatus: [1, "nzStatus"],
		disabled: [1, "disabled"],
		readonly: [1, "readonly"]
	},
	exportAs: ["nzInput"],
	features: [ɵɵProvidersFeature([{
		provide: NZ_SPACE_COMPACT_ITEM_TYPE,
		useValue: "input"
	}]), ɵɵHostDirectivesFeature([NzSpaceCompactItemDirective])]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputDirective, [{
		type: Directive,
		args: [{
			selector: "input[nz-input],textarea[nz-input]",
			exportAs: "nzInput",
			host: {
				class: "ant-input",
				"[attr.type]": "type()",
				"[class]": "classes()",
				"[class.ant-input-disabled]": "finalDisabled()",
				"[class.ant-input-outlined]": `finalVariant() === 'outlined'`,
				"[class.ant-input-borderless]": `finalVariant() === 'borderless'`,
				"[class.ant-input-filled]": `finalVariant() === 'filled'`,
				"[class.ant-input-underlined]": `finalVariant() === 'underlined'`,
				"[class.ant-input-lg]": `finalSize() === 'large'`,
				"[class.ant-input-sm]": `finalSize() === 'small'`,
				"[attr.disabled]": "finalDisabled() || null",
				"[attr.readonly]": "readonly() || null",
				"(input)": "onInput($event)",
				"[class.ant-input-rtl]": `dir() === 'rtl'`,
				"[class.ant-input-focused]": "focused()"
			},
			hostDirectives: [NzSpaceCompactItemDirective],
			providers: [{
				provide: NZ_SPACE_COMPACT_ITEM_TYPE,
				useValue: "input"
			}]
		}]
	}], () => [], {
		nzVariant: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzVariant",
				required: false
			}]
		}],
		nzSize: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzSize",
				required: false
			}]
		}],
		nzStatus: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzStatus",
				required: false
			}]
		}],
		disabled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "disabled",
				required: false
			}]
		}],
		readonly: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "readonly",
				required: false
			}]
		}]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzInputOtpComponent = class {
	constructor() {
		_defineProperty(this, "formBuilder", inject(FormBuilder));
		_defineProperty(this, "destroyRef", inject(DestroyRef));
		_defineProperty(this, "otpInputs", void 0);
		_defineProperty(this, "nzLength", 6);
		_defineProperty(this, "nzSize", "default");
		_defineProperty(this, "disabled", false);
		_defineProperty(this, "nzStatus", "");
		_defineProperty(this, "nzFormatter", (value) => value);
		_defineProperty(this, "nzMask", null);
		_defineProperty(this, "otpArray", void 0);
		_defineProperty(this, "internalValue", []);
		_defineProperty(this, "onChangeCallback", void 0);
		_defineProperty(this, "onTouched", () => {});
		this.createFormArray();
	}
	ngOnChanges(changes) {
		var _changes$nzLength;
		if ((_changes$nzLength = changes["nzLength"]) === null || _changes$nzLength === void 0 ? void 0 : _changes$nzLength.currentValue) this.createFormArray();
		if (changes["disabled"]) this.setDisabledState(this.disabled);
	}
	onInput(index, event) {
		const inputElement = event.target;
		const nextInput = this.otpInputs.toArray()[index + 1];
		if (inputElement.value && nextInput) nextInput.nativeElement.focus();
		else if (!nextInput) this.selectInputBox(index);
	}
	onFocus(event) {
		event.target.select();
	}
	onKeyDown(index, event) {
		const previousInput = this.otpInputs.toArray()[index - 1];
		if (event.keyCode === 8) {
			event.preventDefault();
			this.internalValue[index] = "";
			this.otpArray.at(index).setValue("", { emitEvent: false });
			if (previousInput) this.selectInputBox(index - 1);
			this.emitValue();
		} else if (event.keyCode === 37) {
			event.preventDefault();
			this.selectInputBox(index - 1);
		} else if (event.keyCode === 39) {
			event.preventDefault();
			this.selectInputBox(index + 1);
		}
	}
	writeValue(value) {
		if (!value) {
			this.otpArray.reset();
			return;
		}
		const controlValues = value.split("");
		this.internalValue = controlValues;
		controlValues.forEach((val, i) => {
			const formattedValue = this.nzFormatter(val);
			const value = this.nzMask ? this.nzMask : formattedValue;
			this.otpArray.at(i).setValue(value, { emitEvent: false });
		});
	}
	registerOnChange(fn) {
		this.onChangeCallback = fn;
	}
	registerOnTouched(fn) {
		this.onTouched = fn;
	}
	setDisabledState(isDisabled) {
		if (isDisabled) this.otpArray.disable();
		else this.otpArray.enable();
	}
	onPaste(index, event) {
		var _event$clipboardData;
		const pastedText = ((_event$clipboardData = event.clipboardData) === null || _event$clipboardData === void 0 ? void 0 : _event$clipboardData.getData("text")) || "";
		if (!pastedText) return;
		let currentIndex = index;
		for (const char of pastedText.split("")) if (currentIndex < this.nzLength) {
			const formattedChar = this.nzFormatter(char);
			this.internalValue[currentIndex] = char;
			const maskedValue = this.nzMask ? this.nzMask : formattedChar;
			this.otpArray.at(currentIndex).setValue(maskedValue, { emitEvent: false });
			currentIndex++;
		} else break;
		event.preventDefault();
		this.selectInputBox(currentIndex);
		this.emitValue();
	}
	createFormArray() {
		this.otpArray = this.formBuilder.array([]);
		this.internalValue = new Array(this.nzLength).fill("");
		for (let i = 0; i < this.nzLength; i++) {
			const control = this.formBuilder.nonNullable.control("", [Validators.required]);
			control.valueChanges.pipe(tap((value) => {
				var _this$nzMask;
				const unmaskedValue = this.nzFormatter(value);
				this.internalValue[i] = unmaskedValue;
				control.setValue((_this$nzMask = this.nzMask) !== null && _this$nzMask !== void 0 ? _this$nzMask : unmaskedValue, { emitEvent: false });
				this.emitValue();
			}), takeUntilDestroyed(this.destroyRef)).subscribe();
			this.otpArray.push(control);
		}
	}
	emitValue() {
		const result = this.internalValue.join("");
		if (this.onChangeCallback) this.onChangeCallback(result);
	}
	selectInputBox(index) {
		const otpInputArray = this.otpInputs.toArray();
		if (index <= 0) index = 0;
		if (index >= otpInputArray.length) index = otpInputArray.length - 1;
		otpInputArray[index].nativeElement.select();
	}
};
_NzInputOtpComponent = NzInputOtpComponent;
_defineProperty(NzInputOtpComponent, "ɵfac", function NzInputOtpComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzInputOtpComponent)();
});
_defineProperty(NzInputOtpComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _NzInputOtpComponent,
	selectors: [["nz-input-otp"]],
	viewQuery: function NzInputOtpComponent_Query(rf, ctx) {
		if (rf & 1) ɵɵviewQuery(_c0, 5);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.otpInputs = _t);
		}
	},
	hostAttrs: [1, "ant-otp"],
	inputs: {
		nzLength: [
			2,
			"nzLength",
			"nzLength",
			numberAttribute
		],
		nzSize: "nzSize",
		disabled: [
			2,
			"disabled",
			"disabled",
			booleanAttribute
		],
		nzStatus: "nzStatus",
		nzFormatter: "nzFormatter",
		nzMask: "nzMask"
	},
	exportAs: ["nzInputOtp"],
	features: [ɵɵProvidersFeature([{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => _NzInputOtpComponent),
		multi: true
	}]), ɵɵNgOnChangesFeature],
	decls: 2,
	vars: 0,
	consts: [
		["otpInput", ""],
		[
			"nz-input",
			"",
			"type",
			"text",
			"maxlength",
			"1",
			"size",
			"1",
			1,
			"ant-otp-input",
			3,
			"nzSize",
			"formControl",
			"nzStatus"
		],
		[
			"nz-input",
			"",
			"type",
			"text",
			"maxlength",
			"1",
			"size",
			"1",
			1,
			"ant-otp-input",
			3,
			"input",
			"focus",
			"keydown",
			"paste",
			"nzSize",
			"formControl",
			"nzStatus"
		]
	],
	template: function NzInputOtpComponent_Template(rf, ctx) {
		if (rf & 1) ɵɵrepeaterCreate(0, NzInputOtpComponent_For_1_Template, 2, 3, "input", 1, ɵɵrepeaterTrackByIndex);
		if (rf & 2) ɵɵrepeater(ctx.otpArray.controls);
	},
	dependencies: [
		NzInputDirective,
		ReactiveFormsModule,
		DefaultValueAccessor,
		NgControlStatus,
		MaxLengthValidator,
		FormControlDirective
	],
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputOtpComponent, [{
		type: Component,
		args: [{
			selector: "nz-input-otp",
			exportAs: "nzInputOtp",
			encapsulation: ViewEncapsulation.None,
			template: `
    @for (item of otpArray.controls; track $index) {
      <input
        nz-input
        class="ant-otp-input"
        type="text"
        maxlength="1"
        size="1"
        [nzSize]="nzSize"
        [formControl]="item"
        [nzStatus]="nzStatus"
        (input)="onInput($index, $event)"
        (focus)="onFocus($event)"
        (keydown)="onKeyDown($index, $event)"
        (paste)="onPaste($index, $event)"
        #otpInput
      />
    }
  `,
			host: { class: "ant-otp" },
			providers: [{
				provide: NG_VALUE_ACCESSOR,
				useExisting: forwardRef(() => NzInputOtpComponent),
				multi: true
			}],
			imports: [NzInputDirective, ReactiveFormsModule]
		}]
	}], () => [], {
		otpInputs: [{
			type: ViewChildren,
			args: ["otpInput"]
		}],
		nzLength: [{
			type: Input,
			args: [{ transform: numberAttribute }]
		}],
		nzSize: [{ type: Input }],
		disabled: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		nzStatus: [{ type: Input }],
		nzFormatter: [{ type: Input }],
		nzMask: [{ type: Input }]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzInputSearchDirective = class {
	constructor() {
		_defineProperty(this, "inputDir", contentChild.required(NzInputDirective, ...ngDevMode ? [{ debugName: "inputDir" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "inputRef", contentChild.required(NzInputDirective, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "inputRef" } : 		/* istanbul ignore next */ {}), {}, { read: ElementRef })));
		_defineProperty(this, "nzEnterButton", input(false, ...ngDevMode ? [{ debugName: "nzEnterButton" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzLoading", input(false, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "nzLoading" } : 		/* istanbul ignore next */ {}), {}, { transform: booleanAttribute })));
		_defineProperty(this, "nzSearch", output());
		_defineProperty(this, "size", computed(() => this.inputDir().nzSize(), ...ngDevMode ? [{ debugName: "size" }] : 		/* istanbul ignore next */ []));
	}
	search(event, source = "input") {
		if (!this.nzLoading()) this.nzSearch.emit({
			value: this.inputRef().nativeElement.value,
			event,
			source
		});
	}
	onEnter(event) {
		if (event.target === this.inputRef().nativeElement) this.search(event);
	}
};
_NzInputSearchDirective = NzInputSearchDirective;
_defineProperty(NzInputSearchDirective, "ɵfac", function NzInputSearchDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzInputSearchDirective)();
});
_defineProperty(NzInputSearchDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzInputSearchDirective,
	selectors: [["nz-input-search"]],
	contentQueries: function NzInputSearchDirective_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.inputDir, NzInputDirective, 5)(dirIndex, ctx.inputRef, NzInputDirective, 5, ElementRef);
		if (rf & 2) ɵɵqueryAdvance(2);
	},
	hostAttrs: [1, "ant-input-search"],
	hostVars: 6,
	hostBindings: function NzInputSearchDirective_HostBindings(rf, ctx) {
		if (rf & 1) ɵɵlistener("keydown.enter", function NzInputSearchDirective_keydown_enter_HostBindingHandler($event) {
			return ctx.onEnter($event);
		});
		if (rf & 2) ɵɵclassProp("ant-input-search-large", ctx.size() === "large")("ant-input-search-small", ctx.size() === "small")("ant-input-search-with-button", ctx.nzEnterButton() !== false);
	},
	inputs: {
		nzEnterButton: [1, "nzEnterButton"],
		nzLoading: [1, "nzLoading"]
	},
	outputs: { nzSearch: "nzSearch" },
	exportAs: ["nzInputSearch"],
	features: [ɵɵProvidersFeature([{
		provide: NZ_INPUT_SEARCH,
		useExisting: forwardRef(() => _NzInputSearchDirective)
	}])]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputSearchDirective, [{
		type: Directive,
		args: [{
			selector: "nz-input-search",
			exportAs: "nzInputSearch",
			providers: [{
				provide: NZ_INPUT_SEARCH,
				useExisting: forwardRef(() => NzInputSearchDirective)
			}],
			host: {
				class: "ant-input-search",
				"[class.ant-input-search-large]": `size() === 'large'`,
				"[class.ant-input-search-small]": `size() === 'small'`,
				"[class.ant-input-search-with-button]": "nzEnterButton() !== false",
				"(keydown.enter)": "onEnter($any($event))"
			}
		}]
	}], null, {
		inputDir: [{
			type: ContentChild,
			args: [forwardRef(() => NzInputDirective), { isSignal: true }]
		}],
		inputRef: [{
			type: ContentChild,
			args: [forwardRef(() => NzInputDirective), _objectSpread2(_objectSpread2({}, { read: ElementRef }), {}, { isSignal: true })]
		}],
		nzEnterButton: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzEnterButton",
				required: false
			}]
		}],
		nzLoading: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzLoading",
				required: false
			}]
		}],
		nzSearch: [{
			type: Output,
			args: ["nzSearch"]
		}]
	});
})();
var NzInputSearchEnterButtonDirective = class {};
_NzInputSearchEnterButtonDirective = NzInputSearchEnterButtonDirective;
_defineProperty(NzInputSearchEnterButtonDirective, "ɵfac", function NzInputSearchEnterButtonDirective_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzInputSearchEnterButtonDirective)();
});
_defineProperty(NzInputSearchEnterButtonDirective, "ɵdir", /* @__PURE__ */ ɵɵdefineDirective({
	type: _NzInputSearchEnterButtonDirective,
	selectors: [[
		"",
		"nzInputSearchEnterButton",
		""
	]]
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputSearchEnterButtonDirective, [{
		type: Directive,
		args: [{ selector: "[nzInputSearchEnterButton]" }]
	}], null, null);
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzInputWrapperComponent = class {
	constructor() {
		_defineProperty(this, "focusMonitor", inject(FocusMonitor));
		_defineProperty(this, "inputPasswordDir", inject(NzInputPasswordDirective, {
			self: true,
			optional: true
		}));
		_defineProperty(this, "inputSearchDir", inject(NzInputSearchDirective, {
			self: true,
			optional: true
		}));
		_defineProperty(this, "inputRef", contentChild.required(NzInputDirective, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "inputRef" } : 		/* istanbul ignore next */ {}), {}, { read: ElementRef })));
		_defineProperty(this, "inputDir", contentChild.required(NzInputDirective, ...ngDevMode ? [{ debugName: "inputDir" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "prefix", contentChild(NzInputPrefixDirective, ...ngDevMode ? [{ debugName: "prefix" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "suffix", contentChild(NzInputSuffixDirective, ...ngDevMode ? [{ debugName: "suffix" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "addonBefore", contentChild(NzInputAddonBeforeDirective, ...ngDevMode ? [{ debugName: "addonBefore" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "addonAfter", contentChild(NzInputAddonAfterDirective, ...ngDevMode ? [{ debugName: "addonAfter" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "inputPasswordIconTmpl", contentChild(NzInputPasswordIconDirective, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "inputPasswordIconTmpl" } : 		/* istanbul ignore next */ {}), {}, { read: TemplateRef })));
		_defineProperty(this, "inputSearchEnterButton", contentChild(NzInputSearchEnterButtonDirective, ...ngDevMode ? [{ debugName: "inputSearchEnterButton" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzAllowClear", input(false, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "nzAllowClear" } : 		/* istanbul ignore next */ {}), {}, { transform: booleanAttribute })));
		_defineProperty(this, "nzPrefix", input(...ngDevMode ? [void 0, { debugName: "nzPrefix" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzSuffix", input(...ngDevMode ? [void 0, { debugName: "nzSuffix" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzAddonBefore", input(...ngDevMode ? [void 0, { debugName: "nzAddonBefore" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzAddonAfter", input(...ngDevMode ? [void 0, { debugName: "nzAddonAfter" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzShowCount", input(false, _objectSpread2(_objectSpread2({}, ngDevMode ? { debugName: "nzShowCount" } : 		/* istanbul ignore next */ {}), {}, { transform: booleanAttribute })));
		_defineProperty(this, "nzCount", input(...ngDevMode ? [void 0, { debugName: "nzCount" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "nzClear", output());
		_defineProperty(this, "size", computed(() => this.inputDir().nzSize(), ...ngDevMode ? [{ debugName: "size" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "variant", computed(() => this.inputDir().nzVariant(), ...ngDevMode ? [{ debugName: "variant" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "disabled", computed(() => this.inputDir().finalDisabled(), ...ngDevMode ? [{ debugName: "disabled" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "readOnly", computed(() => this.inputDir().readonly(), ...ngDevMode ? [{ debugName: "readOnly" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "status", computed(() => this.inputDir().status(), ...ngDevMode ? [{ debugName: "status" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "hasFeedback", computed(() => this.inputDir().hasFeedback(), ...ngDevMode ? [{ debugName: "hasFeedback" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "hasPrefix", computed(() => !!this.nzPrefix() || !!this.prefix(), ...ngDevMode ? [{ debugName: "hasPrefix" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "hasSuffix", computed(() => !!this.nzSuffix() || !!this.suffix() || this.nzAllowClear() || this.hasFeedback() || this.nzShowCount() || this.inputPasswordDir, ...ngDevMode ? [{ debugName: "hasSuffix" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "hasAffix", computed(() => this.hasPrefix() || this.hasSuffix(), ...ngDevMode ? [{ debugName: "hasAffix" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "hasAddonBefore", computed(() => !!this.nzAddonBefore() || !!this.addonBefore(), ...ngDevMode ? [{ debugName: "hasAddonBefore" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "hasAddonAfter", computed(() => !!this.nzAddonAfter() || !!this.addonAfter() || !!this.inputSearchDir, ...ngDevMode ? [{ debugName: "hasAddonAfter" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "hasAddon", computed(() => this.hasAddonBefore() || this.hasAddonAfter(), ...ngDevMode ? [{ debugName: "hasAddon" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "compactSize", inject(NZ_SPACE_COMPACT_SIZE, { optional: true }));
		_defineProperty(this, "dir", inject(Directionality).valueSignal);
		_defineProperty(this, "focused", signal(false, ...ngDevMode ? [{ debugName: "focused" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "isTextarea", computed(() => this.inputRef().nativeElement instanceof HTMLTextAreaElement, ...ngDevMode ? [{ debugName: "isTextarea" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "finalSize", computed(() => {
			if (this.compactSize) return this.compactSize();
			return this.size();
		}, ...ngDevMode ? [{ debugName: "finalSize" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "class", computed(() => {
			if (this.hasAddon()) return this.groupWrapperClass();
			if (this.hasAffix()) return this.affixWrapperClass();
			return null;
		}, ...ngDevMode ? [{ debugName: "class" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "affixWrapperClass", computed(() => {
			return _objectSpread2(_objectSpread2({
				"ant-input-affix-wrapper": true,
				"ant-input-affix-wrapper-lg": this.finalSize() === "large",
				"ant-input-affix-wrapper-sm": this.finalSize() === "small",
				"ant-input-affix-wrapper-disabled": this.disabled(),
				"ant-input-affix-wrapper-readonly": this.readOnly(),
				"ant-input-affix-wrapper-focused": this.focused(),
				"ant-input-affix-wrapper-rtl": this.dir() === "rtl"
			}, getStatusClassNames("ant-input-affix-wrapper", this.status(), this.hasFeedback())), getVariantClassNames("ant-input-affix-wrapper", this.variant()));
		}, ...ngDevMode ? [{ debugName: "affixWrapperClass" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "groupWrapperClass", computed(() => {
			return _objectSpread2(_objectSpread2({
				"ant-input-group-wrapper": true,
				"ant-input-group-wrapper-sm": this.finalSize() === "small",
				"ant-input-group-wrapper-lg": this.finalSize() === "large",
				"ant-input-group-wrapper-rtl": this.dir() === "rtl"
			}, getStatusClassNames("ant-input-group-wrapper", this.status(), this.hasFeedback())), getVariantClassNames("ant-input-group-wrapper", this.variant()));
		}, ...ngDevMode ? [{ debugName: "groupWrapperClass" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "inputValue", toSignal(toObservable(this.inputDir).pipe(switchMap((inputDir) => {
			var _ngControl$valueChang;
			const ngControl = inputDir.ngControl;
			if (!ngControl) return EMPTY$1;
			return ((_ngControl$valueChang = ngControl.valueChanges) !== null && _ngControl$valueChang !== void 0 ? _ngControl$valueChang : EMPTY$1).pipe(startWith(ngControl.value));
		}))));
		_defineProperty(this, "formattedValue", computed(() => {
			var _countConfig$max;
			const countConfig = this.nzCount();
			const inputValue = this.inputValue();
			const countMax = (_countConfig$max = countConfig === null || countConfig === void 0 ? void 0 : countConfig.max) !== null && _countConfig$max !== void 0 ? _countConfig$max : 0;
			const value = isNotNil(inputValue) ? String(inputValue) : "";
			let formattedValue = value;
			if (countConfig === null || countConfig === void 0 ? void 0 : countConfig.exceedFormatter) formattedValue = countConfig.exceedFormatter(value, { max: countMax });
			return formattedValue;
		}, ...ngDevMode ? [{ debugName: "formattedValue" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "computedCount", computed(() => {
			const countConfig = this.nzCount();
			const formattedValue = this.formattedValue();
			let computedCount = formattedValue.length;
			if (countConfig === null || countConfig === void 0 ? void 0 : countConfig.strategy) computedCount = countConfig.strategy(formattedValue);
			return computedCount;
		}, ...ngDevMode ? [{ debugName: "computedCount" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "dataCount", computed(() => {
			const countConfig = this.nzCount();
			const computedCount = this.computedCount();
			const countMax = countConfig === null || countConfig === void 0 ? void 0 : countConfig.max;
			return `${computedCount}${countMax ? `/${countMax}` : ``}`;
		}, ...ngDevMode ? [{ debugName: "dataCount" }] : 		/* istanbul ignore next */ []));
		_defineProperty(this, "isOutOfRange", computed(() => {
			const countConfig = this.nzCount();
			const countMax = countConfig === null || countConfig === void 0 ? void 0 : countConfig.max;
			if (isNumberFinite(countMax)) return this.computedCount() > countMax;
			return false;
		}, ...ngDevMode ? [{ debugName: "isOutOfRange" }] : 		/* istanbul ignore next */ []));
		const destroyRef = inject(DestroyRef);
		afterNextRender(() => {
			const element = this.inputRef();
			this.focusMonitor.monitor(element).pipe(takeUntilDestroyed(destroyRef)).subscribe((origin) => {
				this.focused.set(!!origin);
			});
			destroyRef.onDestroy(() => {
				this.focusMonitor.stopMonitoring(element);
			});
		});
		effect(() => {
			if (this.nzCount()) {
				const inputValue = this.inputValue();
				const formattedValue = this.formattedValue();
				if (isNotNil(inputValue) && formattedValue !== inputValue) {
					var _this$inputDir$ngCont;
					(_this$inputDir$ngCont = this.inputDir().ngControl) === null || _this$inputDir$ngCont === void 0 || (_this$inputDir$ngCont = _this$inputDir$ngCont.control) === null || _this$inputDir$ngCont === void 0 || _this$inputDir$ngCont.setValue(formattedValue);
				}
			}
		});
	}
	clear() {
		var _this$inputDir$ngCont2;
		(_this$inputDir$ngCont2 = this.inputDir().ngControl) === null || _this$inputDir$ngCont2 === void 0 || (_this$inputDir$ngCont2 = _this$inputDir$ngCont2.control) === null || _this$inputDir$ngCont2 === void 0 || _this$inputDir$ngCont2.setValue("");
		this.nzClear.emit();
	}
};
_NzInputWrapperComponent = NzInputWrapperComponent;
_defineProperty(NzInputWrapperComponent, "ɵfac", function NzInputWrapperComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzInputWrapperComponent)();
});
_defineProperty(NzInputWrapperComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _NzInputWrapperComponent,
	selectors: [
		["nz-input-wrapper"],
		["nz-input-password"],
		["nz-input-search"]
	],
	contentQueries: function NzInputWrapperComponent_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.inputRef, NzInputDirective, 5, ElementRef)(dirIndex, ctx.inputDir, NzInputDirective, 5)(dirIndex, ctx.prefix, NzInputPrefixDirective, 5)(dirIndex, ctx.suffix, NzInputSuffixDirective, 5)(dirIndex, ctx.addonBefore, NzInputAddonBeforeDirective, 5)(dirIndex, ctx.addonAfter, NzInputAddonAfterDirective, 5)(dirIndex, ctx.inputPasswordIconTmpl, NzInputPasswordIconDirective, 5, TemplateRef)(dirIndex, ctx.inputSearchEnterButton, NzInputSearchEnterButtonDirective, 5);
		if (rf & 2) ɵɵqueryAdvance(8);
	},
	hostVars: 8,
	hostBindings: function NzInputWrapperComponent_HostBindings(rf, ctx) {
		if (rf & 2) {
			ɵɵclassMap(ctx.class());
			ɵɵclassProp("ant-input-disabled", ctx.disabled())("ant-input-out-of-range", ctx.nzShowCount() && ctx.isOutOfRange())("ant-input-affix-wrapper-textarea-with-clear-btn", ctx.nzAllowClear() && ctx.isTextarea());
		}
	},
	inputs: {
		nzAllowClear: [1, "nzAllowClear"],
		nzPrefix: [1, "nzPrefix"],
		nzSuffix: [1, "nzSuffix"],
		nzAddonBefore: [1, "nzAddonBefore"],
		nzAddonAfter: [1, "nzAddonAfter"],
		nzShowCount: [1, "nzShowCount"],
		nzCount: [1, "nzCount"]
	},
	outputs: { nzClear: "nzClear" },
	exportAs: ["nzInputWrapper"],
	features: [ɵɵProvidersFeature([{
		provide: NZ_SPACE_COMPACT_ITEM_TYPE,
		useValue: "input"
	}, {
		provide: NZ_INPUT_WRAPPER,
		useExisting: forwardRef(() => _NzInputWrapperComponent)
	}]), ɵɵHostDirectivesFeature([NzSpaceCompactItemDirective])],
	ngContentSelectors: _c2,
	decls: 11,
	vars: 1,
	consts: [
		["inputWithAddonInner", ""],
		["inputWithAffix", ""],
		["inputWithAffixInner", ""],
		["input", ""],
		[3, "ngTemplateOutlet"],
		[
			1,
			"ant-input-wrapper",
			"ant-input-group"
		],
		[1, "ant-input-group-addon"],
		[
			"nz-button",
			"",
			"type",
			"button",
			1,
			"ant-input-search-button",
			3,
			"nzType",
			"nzSize",
			"nzLoading"
		],
		[
			"nz-button",
			"",
			"type",
			"button",
			1,
			"ant-input-search-button",
			3,
			"click",
			"nzType",
			"nzSize",
			"nzLoading"
		],
		[
			"nzType",
			"search",
			"nzTheme",
			"outline"
		],
		[1, "ant-input-prefix"],
		[1, "ant-input-suffix"],
		[
			"role",
			"button",
			"tabindex",
			"-1",
			1,
			"ant-input-clear-icon",
			3,
			"ant-input-clear-icon-has-suffix",
			"ant-input-clear-icon-hidden"
		],
		[1, "ant-input-show-count-suffix"],
		[
			"role",
			"button",
			"tabindex",
			"-1",
			1,
			"ant-input-password-icon"
		],
		[3, "status"],
		[
			"role",
			"button",
			"tabindex",
			"-1",
			1,
			"ant-input-clear-icon",
			3,
			"click"
		],
		[
			"nzType",
			"close-circle",
			"nzTheme",
			"fill"
		],
		[
			"role",
			"button",
			"tabindex",
			"-1",
			1,
			"ant-input-password-icon",
			3,
			"click"
		],
		[
			3,
			"ngTemplateOutlet",
			"ngTemplateOutletContext"
		],
		[
			"nzTheme",
			"outline",
			3,
			"nzType"
		]
	],
	template: function NzInputWrapperComponent_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef(_c1);
			ɵɵconditionalCreate(0, NzInputWrapperComponent_Conditional_0_Template, 1, 1, null, 4)(1, NzInputWrapperComponent_Conditional_1_Template, 1, 1, null, 4)(2, NzInputWrapperComponent_Conditional_2_Template, 1, 1, null, 4);
			ɵɵtemplate(3, NzInputWrapperComponent_ng_template_3_Template, 5, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, NzInputWrapperComponent_ng_template_5_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor)(7, NzInputWrapperComponent_ng_template_7_Template, 3, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor)(9, NzInputWrapperComponent_ng_template_9_Template, 1, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
		}
		if (rf & 2) ɵɵconditional(ctx.hasAddon() ? 0 : ctx.hasAffix() ? 1 : 2);
	},
	dependencies: [
		NzIconModule,
		NzIconDirective,
		NzButtonModule,
		NzButtonComponent,
		NzTransitionPatchDirective,
		NzWaveDirective,
		NzFormItemFeedbackIconComponent,
		NgTemplateOutlet
	],
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputWrapperComponent, [{
		type: Component,
		args: [{
			selector: "nz-input-wrapper,nz-input-password,nz-input-search",
			exportAs: "nzInputWrapper",
			imports: [
				NzIconModule,
				NzButtonModule,
				NzFormItemFeedbackIconComponent,
				NgTemplateOutlet
			],
			template: `
    @if (hasAddon()) {
      <ng-template [ngTemplateOutlet]="inputWithAddonInner" />
    } @else if (hasAffix()) {
      <ng-template [ngTemplateOutlet]="inputWithAffixInner" />
    } @else {
      <ng-template [ngTemplateOutlet]="input" />
    }

    <ng-template #inputWithAddonInner>
      <span class="ant-input-wrapper ant-input-group">
        @if (hasAddonBefore()) {
          <span class="ant-input-group-addon">
            <ng-content select="[nzInputAddonBefore]">{{ nzAddonBefore() }}</ng-content>
          </span>
        }

        @if (hasAffix()) {
          <ng-template [ngTemplateOutlet]="inputWithAffix" />
        } @else {
          <ng-template [ngTemplateOutlet]="input" />
        }

        @if (hasAddonAfter()) {
          <span class="ant-input-group-addon">
            @if (inputSearchDir) {
              @let nzEnterButton = inputSearchDir.nzEnterButton();
              @let hasEnterButton = inputSearchEnterButton() ?? nzEnterButton !== false;
              <button
                nz-button
                [nzType]="hasEnterButton ? 'primary' : 'default'"
                [nzSize]="size()"
                [nzLoading]="inputSearchDir.nzLoading()"
                type="button"
                class="ant-input-search-button"
                (click)="inputSearchDir.search($event)"
              >
                <ng-content select="[nzInputSearchEnterButton]">
                  @if (nzEnterButton && typeof nzEnterButton === 'string') {
                    {{ nzEnterButton }}
                  } @else {
                    <nz-icon nzType="search" nzTheme="outline" />
                  }
                </ng-content>
              </button>
            }
            <ng-content select="[nzInputAddonAfter]">{{ nzAddonAfter() }}</ng-content>
          </span>
        }
      </span>
    </ng-template>

    <ng-template #inputWithAffix>
      <span [class]="affixWrapperClass()">
        <ng-template [ngTemplateOutlet]="inputWithAffixInner" />
      </span>
    </ng-template>

    <ng-template #inputWithAffixInner>
      @if (hasPrefix()) {
        <span class="ant-input-prefix">
          <ng-content select="[nzInputPrefix]">{{ nzPrefix() }}</ng-content>
        </span>
      }
      <ng-template [ngTemplateOutlet]="input" />
      @if (hasSuffix()) {
        <span class="ant-input-suffix">
          @if (nzAllowClear()) {
            <span
              class="ant-input-clear-icon"
              [class.ant-input-clear-icon-has-suffix]="
                nzSuffix() || suffix() || hasFeedback() || inputPasswordDir?.nzVisibilityToggle()
              "
              [class.ant-input-clear-icon-hidden]="!inputDir().value() || disabled() || readOnly()"
              role="button"
              tabindex="-1"
              (click)="clear(); inputSearchDir?.search($event, 'clear')"
            >
              <ng-content select="[nzInputClearIcon]">
                <nz-icon nzType="close-circle" nzTheme="fill" />
              </ng-content>
            </span>
          }
          @if (nzShowCount()) {
            <span class="ant-input-show-count-suffix">{{ dataCount() }}</span>
          }
          @if (inputPasswordDir && inputPasswordDir.nzVisibilityToggle()) {
            <span
              class="ant-input-password-icon"
              role="button"
              tabindex="-1"
              (click)="inputPasswordDir.toggleVisible()"
            >
              @if (inputPasswordIconTmpl(); as tmpl) {
                <ng-template
                  [ngTemplateOutlet]="tmpl"
                  [ngTemplateOutletContext]="{ $implicit: inputPasswordDir.nzVisible() }"
                />
              } @else {
                <nz-icon [nzType]="inputPasswordDir.nzVisible() ? 'eye' : 'eye-invisible'" nzTheme="outline" />
              }
            </span>
          }
          <ng-content select="[nzInputSuffix]">{{ nzSuffix() }}</ng-content>
          @if (hasFeedback() && status()) {
            <nz-form-item-feedback-icon [status]="status()" />
          }
        </span>
      }
    </ng-template>

    <ng-template #input>
      <ng-content select="[nz-input]" />
    </ng-template>
  `,
			providers: [{
				provide: NZ_SPACE_COMPACT_ITEM_TYPE,
				useValue: "input"
			}, {
				provide: NZ_INPUT_WRAPPER,
				useExisting: forwardRef(() => NzInputWrapperComponent)
			}],
			encapsulation: ViewEncapsulation.None,
			hostDirectives: [NzSpaceCompactItemDirective],
			host: {
				"[class]": "class()",
				"[class.ant-input-disabled]": "disabled()",
				"[class.ant-input-out-of-range]": "nzShowCount() && isOutOfRange()",
				"[class.ant-input-affix-wrapper-textarea-with-clear-btn]": "nzAllowClear() && isTextarea()"
			}
		}]
	}], () => [], {
		inputRef: [{
			type: ContentChild,
			args: [forwardRef(() => NzInputDirective), _objectSpread2(_objectSpread2({}, { read: ElementRef }), {}, { isSignal: true })]
		}],
		inputDir: [{
			type: ContentChild,
			args: [forwardRef(() => NzInputDirective), { isSignal: true }]
		}],
		prefix: [{
			type: ContentChild,
			args: [forwardRef(() => NzInputPrefixDirective), { isSignal: true }]
		}],
		suffix: [{
			type: ContentChild,
			args: [forwardRef(() => NzInputSuffixDirective), { isSignal: true }]
		}],
		addonBefore: [{
			type: ContentChild,
			args: [forwardRef(() => NzInputAddonBeforeDirective), { isSignal: true }]
		}],
		addonAfter: [{
			type: ContentChild,
			args: [forwardRef(() => NzInputAddonAfterDirective), { isSignal: true }]
		}],
		inputPasswordIconTmpl: [{
			type: ContentChild,
			args: [forwardRef(() => NzInputPasswordIconDirective), _objectSpread2(_objectSpread2({}, { read: TemplateRef }), {}, { isSignal: true })]
		}],
		inputSearchEnterButton: [{
			type: ContentChild,
			args: [forwardRef(() => NzInputSearchEnterButtonDirective), { isSignal: true }]
		}],
		nzAllowClear: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzAllowClear",
				required: false
			}]
		}],
		nzPrefix: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzPrefix",
				required: false
			}]
		}],
		nzSuffix: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzSuffix",
				required: false
			}]
		}],
		nzAddonBefore: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzAddonBefore",
				required: false
			}]
		}],
		nzAddonAfter: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzAddonAfter",
				required: false
			}]
		}],
		nzShowCount: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzShowCount",
				required: false
			}]
		}],
		nzCount: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "nzCount",
				required: false
			}]
		}],
		nzClear: [{
			type: Output,
			args: ["nzClear"]
		}]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzTextareaCountComponent = class {
	constructor() {
		_defineProperty(this, "renderer", inject(Renderer2));
		_defineProperty(this, "injector", inject(Injector));
		_defineProperty(this, "elementRef", inject(ElementRef));
		_defineProperty(this, "nzInputDirective", void 0);
		_defineProperty(this, "nzMaxCharacterCount", 0);
		_defineProperty(this, "nzComputeCharacterCount", (v) => v.length);
		_defineProperty(this, "nzFormatter", (c, m) => `${c}${m > 0 ? `/${m}` : ``}`);
	}
	ngAfterContentInit() {
		if (!this.nzInputDirective && isDevMode()) throw new Error("[nz-textarea-count]: Could not find matching textarea[nz-input] child.");
		effect(() => this.setDataCount(this.nzInputDirective.value()), { injector: this.injector });
	}
	setDataCount(value) {
		const inputValue = isNotNil(value) ? String(value) : "";
		const currentCount = this.nzComputeCharacterCount(inputValue);
		const dataCount = this.nzFormatter(currentCount, this.nzMaxCharacterCount);
		this.renderer.setAttribute(this.elementRef.nativeElement, "data-count", dataCount);
	}
};
_NzTextareaCountComponent = NzTextareaCountComponent;
_defineProperty(NzTextareaCountComponent, "ɵfac", function NzTextareaCountComponent_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzTextareaCountComponent)();
});
_defineProperty(NzTextareaCountComponent, "ɵcmp", /* @__PURE__ */ ɵɵdefineComponent({
	type: _NzTextareaCountComponent,
	selectors: [["nz-textarea-count"]],
	contentQueries: function NzTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) {
		if (rf & 1) ɵɵcontentQuery(dirIndex, NzInputDirective, 7);
		if (rf & 2) {
			let _t;
			ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzInputDirective = _t.first);
		}
	},
	hostAttrs: [1, "ant-input-textarea-show-count"],
	inputs: {
		nzMaxCharacterCount: [
			2,
			"nzMaxCharacterCount",
			"nzMaxCharacterCount",
			numberAttribute
		],
		nzComputeCharacterCount: "nzComputeCharacterCount",
		nzFormatter: "nzFormatter"
	},
	ngContentSelectors: _c5,
	decls: 1,
	vars: 0,
	template: function NzTextareaCountComponent_Template(rf, ctx) {
		if (rf & 1) {
			ɵɵprojectionDef(_c4);
			ɵɵprojection(0);
		}
	},
	encapsulation: 2
}));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTextareaCountComponent, [{
		type: Component,
		args: [{
			selector: "nz-textarea-count",
			template: `<ng-content select="textarea[nz-input]" />`,
			host: { class: "ant-input-textarea-show-count" }
		}]
	}], null, {
		nzInputDirective: [{
			type: ContentChild,
			args: [NzInputDirective, { static: true }]
		}],
		nzMaxCharacterCount: [{
			type: Input,
			args: [{ transform: numberAttribute }]
		}],
		nzComputeCharacterCount: [{ type: Input }],
		nzFormatter: [{ type: Input }]
	});
})();
/**
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
*/
var NzInputModule = class {};
_NzInputModule = NzInputModule;
_defineProperty(NzInputModule, "ɵfac", function NzInputModule_Factory(__ngFactoryType__) {
	return new (__ngFactoryType__ || _NzInputModule)();
});
_defineProperty(NzInputModule, "ɵmod", /* @__PURE__ */ ɵɵdefineNgModule({
	type: _NzInputModule,
	imports: [
		NzTextareaCountComponent,
		NzInputDirective,
		NzInputWrapperComponent,
		NzInputPasswordDirective,
		NzInputPasswordIconDirective,
		NzInputSearchDirective,
		NzInputSearchEnterButtonDirective,
		NzInputAddonBeforeDirective,
		NzInputAddonAfterDirective,
		NzInputPrefixDirective,
		NzInputSuffixDirective,
		NzInputOtpComponent
	],
	exports: [
		NzTextareaCountComponent,
		NzInputDirective,
		NzInputWrapperComponent,
		NzInputPasswordDirective,
		NzInputPasswordIconDirective,
		NzInputSearchDirective,
		NzInputSearchEnterButtonDirective,
		NzInputAddonBeforeDirective,
		NzInputAddonAfterDirective,
		NzInputPrefixDirective,
		NzInputSuffixDirective,
		NzInputOtpComponent
	]
}));
_defineProperty(NzInputModule, "ɵinj", /* @__PURE__ */ ɵɵdefineInjector({ imports: [NzInputWrapperComponent, NzInputOtpComponent] }));
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputModule, [{
		type: NgModule,
		args: [{
			imports: [
				NzTextareaCountComponent,
				NzInputDirective,
				NzInputWrapperComponent,
				NzInputPasswordDirective,
				NzInputPasswordIconDirective,
				NzInputSearchDirective,
				NzInputSearchEnterButtonDirective,
				NzInputAddonBeforeDirective,
				NzInputAddonAfterDirective,
				NzInputPrefixDirective,
				NzInputSuffixDirective,
				NzInputOtpComponent
			],
			exports: [
				NzTextareaCountComponent,
				NzInputDirective,
				NzInputWrapperComponent,
				NzInputPasswordDirective,
				NzInputPasswordIconDirective,
				NzInputSearchDirective,
				NzInputSearchEnterButtonDirective,
				NzInputAddonBeforeDirective,
				NzInputAddonAfterDirective,
				NzInputPrefixDirective,
				NzInputSuffixDirective,
				NzInputOtpComponent
			]
		}]
	}], null, null);
})();
//#endregion
export { NZ_INPUT_SEARCH, NZ_INPUT_WRAPPER, NzInputAddonAfterDirective, NzInputAddonBeforeDirective, NzInputDirective, NzInputModule, NzInputOtpComponent, NzInputPasswordDirective, NzInputPasswordIconDirective, NzInputPrefixDirective, NzInputSearchDirective, NzInputSearchEnterButtonDirective, NzInputSuffixDirective, NzInputWrapperComponent, NzTextareaCountComponent };
