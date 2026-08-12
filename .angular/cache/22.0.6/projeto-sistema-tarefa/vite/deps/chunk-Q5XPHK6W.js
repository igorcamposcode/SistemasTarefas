import {
  NzWaveModule
} from "./chunk-QB5ICR5Z.js";
import {
  NzTransitionPatchModule
} from "./chunk-HU6ZXTFX.js";
import {
  NzStringTemplateOutletDirective
} from "./chunk-EZ3AR637.js";
import {
  Directionality
} from "./chunk-BPLDPHLR.js";
import {
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  WithConfig,
  onConfigChangeEventForComponent,
  takeUntilDestroyed
} from "./chunk-PZVYNE7O.js";
import {
  fromEventOutsideAngular
} from "./chunk-WEUNK7DU.js";
import {
  NgTemplateOutlet
} from "./chunk-AXAIAVI6.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  afterEveryRender,
  afterNextRender,
  booleanAttribute,
  computed,
  contentChild,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵɵHostDirectivesFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-FT3EWC66.js";
import {
  ReplaySubject,
  Subject,
  __esDecorate,
  __runInitializers,
  filter,
  startWith
} from "./chunk-NGDYWETO.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-FMGVFGPW.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-form.mjs
function NzFormItemFeedbackIconComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 0);
  }
  if (rf & 2) {
    ɵɵproperty("nzType", ctx);
  }
}
var iconTypeMap = {
  error: "close-circle-fill",
  validating: "loading",
  success: "check-circle-fill",
  warning: "exclamation-circle-fill"
};
var CLASS_NAME = "ant-form-item-feedback-icon";
var NzFormItemFeedbackIconComponent = class _NzFormItemFeedbackIconComponent {
  status = input(
    "",
    ...ngDevMode ? [{
      debugName: "status"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  iconType = computed(
    () => {
      const status = this.status();
      return status ? iconTypeMap[status] : null;
    },
    ...ngDevMode ? [{
      debugName: "iconType"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  class = computed(
    () => {
      const status = this.status();
      return {
        [CLASS_NAME]: true,
        [`${CLASS_NAME}-error`]: status === "error",
        [`${CLASS_NAME}-warning`]: status === "warning",
        [`${CLASS_NAME}-success`]: status === "success",
        [`${CLASS_NAME}-validating`]: status === "validating"
      };
    },
    ...ngDevMode ? [{
      debugName: "class"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  static ɵfac = function NzFormItemFeedbackIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFormItemFeedbackIconComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzFormItemFeedbackIconComponent,
    selectors: [["nz-form-item-feedback-icon"]],
    hostVars: 2,
    hostBindings: function NzFormItemFeedbackIconComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.class());
      }
    },
    inputs: {
      status: [1, "status"]
    },
    exportAs: ["nzFormFeedbackIcon"],
    decls: 1,
    vars: 1,
    consts: [[3, "nzType"]],
    template: function NzFormItemFeedbackIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵconditionalCreate(0, NzFormItemFeedbackIconComponent_Conditional_0_Template, 1, 1, "nz-icon", 0);
      }
      if (rf & 2) {
        let tmp_0_0;
        ɵɵconditional((tmp_0_0 = ctx.iconType()) ? 0 : -1, tmp_0_0);
      }
    },
    dependencies: [NzIconModule, NzIconDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormItemFeedbackIconComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-item-feedback-icon",
      exportAs: "nzFormFeedbackIcon",
      imports: [NzIconModule],
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (iconType(); as type) {
      <nz-icon [nzType]="type" />
    }
  `,
      host: {
        "[class]": "class()"
      }
    }]
  }], null, {
    status: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "status",
        required: false
      }]
    }]
  });
})();
var NZ_FORM_SIZE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-form-size" : "");
var NzFormStatusService = class _NzFormStatusService {
  formStatusChanges = new ReplaySubject(1);
  static ɵfac = function NzFormStatusService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFormStatusService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NzFormStatusService,
    factory: _NzFormStatusService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormStatusService, [{
    type: Injectable
  }], null, null);
})();
var NZ_FORM_VARIANT = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-form-variant" : "");

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-space.mjs
var _c0 = ["*"];
var _c1 = (a0) => ({
  $implicit: a0
});
function NzSpaceComponent_For_2_Conditional_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵtextInterpolate(ctx_r0.nzSplit);
  }
}
function NzSpaceComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtemplate(1, NzSpaceComponent_For_2_Conditional_2_ng_template_1_Template, 1, 1, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r2 = ɵɵnextContext().$index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzSplit)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c1, $index_r2));
  }
}
function NzSpaceComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵelementContainer(1, 1);
    ɵɵelementEnd();
    ɵɵconditionalCreate(2, NzSpaceComponent_For_2_Conditional_2_Template, 2, 4, "span", 2);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ɵ$index_2_r4 = ctx.$index;
    const ɵ$count_2_r5 = ctx.$count;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r3);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.nzSplit && !(ɵ$index_2_r4 === ɵ$count_2_r5 - 1) ? 2 : -1);
  }
}
var NZ_SPACE_COMPACT_SIZE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-space-compact-size" : "");
var NZ_SPACE_COMPACT_ITEMS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-space-compact-items" : "");
var NZ_SPACE_COMPACT_ITEM_TYPE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-space-compact-item-type" : "");
var NzSpaceCompactComponent = class _NzSpaceCompactComponent {
  formSize = inject(NZ_FORM_SIZE, {
    optional: true
  });
  nzBlock = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzBlock"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  nzDirection = input(
    "horizontal",
    ...ngDevMode ? [{
      debugName: "nzDirection"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzSize = input(
    "default",
    ...ngDevMode ? [{
      debugName: "nzSize"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  elementRef = inject(ElementRef);
  finalSize = computed(
    () => this.formSize?.() || this.nzSize(),
    ...ngDevMode ? [{
      debugName: "finalSize"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  static ɵfac = function NzSpaceCompactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSpaceCompactComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzSpaceCompactComponent,
    selectors: [["nz-space-compact"]],
    hostAttrs: [1, "ant-space-compact"],
    hostVars: 4,
    hostBindings: function NzSpaceCompactComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-space-compact-block", ctx.nzBlock())("ant-space-compact-vertical", ctx.nzDirection() === "vertical");
      }
    },
    inputs: {
      nzBlock: [1, "nzBlock"],
      nzDirection: [1, "nzDirection"],
      nzSize: [1, "nzSize"]
    },
    exportAs: ["nzSpaceCompact"],
    features: [ɵɵProvidersFeature([{
      provide: NZ_SPACE_COMPACT_SIZE,
      useFactory: () => inject(_NzSpaceCompactComponent).finalSize
    }, {
      provide: NZ_SPACE_COMPACT_ITEMS,
      useFactory: () => signal([])
    }])],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzSpaceCompactComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceCompactComponent, [{
    type: Component,
    args: [{
      selector: "nz-space-compact",
      exportAs: "nzSpaceCompact",
      template: `<ng-content />`,
      host: {
        class: "ant-space-compact",
        "[class.ant-space-compact-block]": `nzBlock()`,
        "[class.ant-space-compact-vertical]": `nzDirection() === 'vertical'`
      },
      providers: [{
        provide: NZ_SPACE_COMPACT_SIZE,
        useFactory: () => inject(NzSpaceCompactComponent).finalSize
      }, {
        provide: NZ_SPACE_COMPACT_ITEMS,
        useFactory: () => signal([])
      }]
    }]
  }], null, {
    nzBlock: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzBlock",
        required: false
      }]
    }],
    nzDirection: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzDirection",
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
    }]
  });
})();
var NzSpaceCompactItemDirective = class _NzSpaceCompactItemDirective {
  /**
   * Ancestor component injected from the parent.
   * Note that it is not necessarily the direct parent component.
   */
  spaceCompactCmp = inject(NzSpaceCompactComponent, {
    host: true,
    optional: true
  });
  items = inject(NZ_SPACE_COMPACT_ITEMS, {
    host: true,
    optional: true
  });
  type = inject(NZ_SPACE_COMPACT_ITEM_TYPE);
  elementRef = inject(ElementRef);
  dir = inject(Directionality).valueSignal;
  get parentElement() {
    return this.elementRef.nativeElement?.parentElement;
  }
  class = computed(
    () => {
      if (!this.spaceCompactCmp || !this.items) return null;
      if (this.parentElement !== this.spaceCompactCmp.elementRef.nativeElement) return null;
      const items = this.items();
      const direction = this.spaceCompactCmp.nzDirection();
      const classes = [compactItemClassOf(this.type, direction, this.dir() === "rtl")];
      const index = items.indexOf(this);
      const firstIndex = items.findIndex((element) => element);
      if (index === firstIndex) {
        classes.push(compactFirstItemClassOf(this.type, direction));
      }
      if (index === items.length - 1) {
        classes.push(compactLastItemClassOf(this.type, direction));
      }
      return classes;
    },
    ...ngDevMode ? [{
      debugName: "class"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    if (!this.spaceCompactCmp || !this.items) return;
    afterNextRender(() => {
      if (this.parentElement === this.spaceCompactCmp.elementRef.nativeElement) {
        const index = Array.from(this.parentElement.children).indexOf(this.elementRef.nativeElement);
        this.items.update((value) => {
          const newValue = value.slice();
          newValue.splice(index, 0, this);
          return newValue;
        });
      }
    });
    inject(DestroyRef).onDestroy(() => {
      this.items?.update((value) => value.filter((o) => o !== this));
    });
  }
  static ɵfac = function NzSpaceCompactItemDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSpaceCompactItemDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzSpaceCompactItemDirective,
    hostVars: 2,
    hostBindings: function NzSpaceCompactItemDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.class());
      }
    },
    exportAs: ["nzSpaceCompactItem"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceCompactItemDirective, [{
    type: Directive,
    args: [{
      exportAs: "nzSpaceCompactItem",
      host: {
        "[class]": "class()"
      }
    }]
  }], () => [], null);
})();
function generateCompactClass(type, direction, position) {
  const directionPrefix = direction === "vertical" ? "vertical-" : "";
  return `ant-${type}-compact-${directionPrefix}${position}`;
}
function compactItemClassOf(type, direction, rtl) {
  const rtlSuffix = rtl ? "-rtl" : "";
  return `${generateCompactClass(type, direction, "item")}${rtlSuffix}`;
}
function compactFirstItemClassOf(type, direction) {
  return generateCompactClass(type, direction, "first-item");
}
function compactLastItemClassOf(type, direction) {
  return generateCompactClass(type, direction, "last-item");
}
var NzSpaceItemDirective = class _NzSpaceItemDirective {
  static ɵfac = function NzSpaceItemDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSpaceItemDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NzSpaceItemDirective,
    selectors: [["", "nzSpaceItem", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceItemDirective, [{
    type: Directive,
    args: [{
      selector: "[nzSpaceItem]"
    }]
  }], null, null);
})();
var NZ_CONFIG_MODULE_NAME = "space";
var SPACE_SIZE = {
  small: 8,
  middle: 16,
  large: 24
};
var NzSpaceComponent = (() => {
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  return class NzSpaceComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzSize_decorators = [WithConfig()];
      __esDecorate(null, null, _nzSize_decorators, {
        kind: "field",
        name: "nzSize",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSize" in obj,
          get: (obj) => obj.nzSize,
          set: (obj, value) => {
            obj.nzSize = value;
          }
        },
        metadata: _metadata
      }, _nzSize_initializers, _nzSize_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    nzConfigService = inject(NzConfigService);
    cdr = inject(ChangeDetectorRef);
    destroyRef = inject(DestroyRef);
    nzDirection = "horizontal";
    nzAlign;
    nzSplit = null;
    nzWrap = false;
    nzSize = __runInitializers(this, _nzSize_initializers, "small");
    items = __runInitializers(this, _nzSize_extraInitializers);
    mergedAlign;
    horizontalSize;
    verticalSize;
    constructor() {
      this.updateSpaceSize();
    }
    ngOnChanges(changes) {
      const {
        nzSize
      } = changes;
      if (nzSize) {
        this.updateSpaceSize();
      }
      this.mergedAlign = this.nzAlign === void 0 && this.nzDirection === "horizontal" ? "center" : this.nzAlign;
    }
    ngAfterContentInit() {
      this.items.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.cdr.markForCheck();
      });
    }
    updateSpaceSize() {
      const {
        horizontalSize,
        verticalSize
      } = normalizeSpaceSize(this.nzSize);
      this.horizontalSize = horizontalSize;
      this.verticalSize = verticalSize;
    }
    static ɵfac = function NzSpaceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzSpaceComponent2)();
    };
    static ɵcmp = ɵɵdefineComponent({
      type: NzSpaceComponent2,
      selectors: [["nz-space"], ["", "nz-space", ""]],
      contentQueries: function NzSpaceComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NzSpaceItemDirective, 4, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      hostAttrs: [1, "ant-space"],
      hostVars: 18,
      hostBindings: function NzSpaceComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("flex-wrap", ctx.nzWrap ? "wrap" : null)("column-gap", ctx.horizontalSize, "px")("row-gap", ctx.verticalSize, "px");
          ɵɵclassProp("ant-space-horizontal", ctx.nzDirection === "horizontal")("ant-space-vertical", ctx.nzDirection === "vertical")("ant-space-align-start", ctx.mergedAlign === "start")("ant-space-align-end", ctx.mergedAlign === "end")("ant-space-align-center", ctx.mergedAlign === "center")("ant-space-align-baseline", ctx.mergedAlign === "baseline");
        }
      },
      inputs: {
        nzDirection: "nzDirection",
        nzAlign: "nzAlign",
        nzSplit: "nzSplit",
        nzWrap: [2, "nzWrap", "nzWrap", booleanAttribute],
        nzSize: "nzSize"
      },
      exportAs: ["nzSpace"],
      features: [ɵɵNgOnChangesFeature],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 0,
      consts: [[1, "ant-space-item"], [3, "ngTemplateOutlet"], [1, "ant-space-split"], [3, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"]],
      template: function NzSpaceComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵrepeaterCreate(1, NzSpaceComponent_For_2_Template, 3, 2, null, null, ɵɵrepeaterTrackByIdentity);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵrepeater(ctx.items);
        }
      },
      dependencies: [NgTemplateOutlet, NzStringTemplateOutletDirective],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceComponent, [{
    type: Component,
    args: [{
      selector: "nz-space, [nz-space]",
      exportAs: "nzSpace",
      template: `
    <ng-content />
    @for (item of items; track item) {
      <div class="ant-space-item">
        <ng-container [ngTemplateOutlet]="item" />
      </div>
      @if (nzSplit && !$last) {
        <span class="ant-space-split">
          <ng-template [nzStringTemplateOutlet]="nzSplit" [nzStringTemplateOutletContext]="{ $implicit: $index }">{{
            nzSplit
          }}</ng-template>
        </span>
      }
    }
  `,
      host: {
        class: "ant-space",
        "[class.ant-space-horizontal]": 'nzDirection === "horizontal"',
        "[class.ant-space-vertical]": 'nzDirection === "vertical"',
        "[class.ant-space-align-start]": 'mergedAlign === "start"',
        "[class.ant-space-align-end]": 'mergedAlign === "end"',
        "[class.ant-space-align-center]": 'mergedAlign === "center"',
        "[class.ant-space-align-baseline]": 'mergedAlign === "baseline"',
        "[style.flex-wrap]": 'nzWrap ? "wrap" : null',
        "[style.column-gap.px]": "horizontalSize",
        "[style.row-gap.px]": "verticalSize"
      },
      imports: [NgTemplateOutlet, NzStringTemplateOutletDirective]
    }]
  }], () => [], {
    nzDirection: [{
      type: Input
    }],
    nzAlign: [{
      type: Input
    }],
    nzSplit: [{
      type: Input
    }],
    nzWrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSize: [{
      type: Input
    }],
    items: [{
      type: ContentChildren,
      args: [NzSpaceItemDirective, {
        read: TemplateRef
      }]
    }]
  });
})();
function normalizeSpaceSize(size) {
  const [horizontalSize, verticalSize] = (Array.isArray(size) ? size : [size, size]).map((s) => typeof s === "number" ? s : SPACE_SIZE[s]);
  return {
    horizontalSize,
    verticalSize
  };
}
var NzSpaceModule = class _NzSpaceModule {
  static ɵfac = function NzSpaceModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSpaceModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzSpaceModule,
    imports: [NzSpaceComponent, NzSpaceItemDirective, NzSpaceCompactComponent],
    exports: [NzSpaceComponent, NzSpaceItemDirective, NzSpaceCompactComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpaceModule, [{
    type: NgModule,
    args: [{
      imports: [NzSpaceComponent, NzSpaceItemDirective, NzSpaceCompactComponent],
      exports: [NzSpaceComponent, NzSpaceItemDirective, NzSpaceCompactComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-button.mjs
var _c02 = ["*"];
function NzButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵelement(1, "nz-icon", 1);
    ɵɵelementEnd();
  }
}
var NZ_CONFIG_MODULE_NAME2 = "button";
var NzButtonComponent = (() => {
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  return class NzButtonComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzSize_decorators = [WithConfig()];
      __esDecorate(null, null, _nzSize_decorators, {
        kind: "field",
        name: "nzSize",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSize" in obj,
          get: (obj) => obj.nzSize,
          set: (obj, value) => {
            obj.nzSize = value;
          }
        },
        metadata: _metadata
      }, _nzSize_initializers, _nzSize_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    elementRef = inject(ElementRef);
    cdr = inject(ChangeDetectorRef);
    renderer = inject(Renderer2);
    destroyRef = inject(DestroyRef);
    dir = inject(Directionality).valueSignal;
    _nzModuleName = NZ_CONFIG_MODULE_NAME2;
    nzIconDirectiveElement;
    nzBlock = false;
    nzGhost = false;
    nzLoading = false;
    nzDanger = false;
    disabled = false;
    tabIndex = null;
    nzType = null;
    nzShape = null;
    nzSize = __runInitializers(this, _nzSize_initializers, "default");
    elementOnly = (__runInitializers(this, _nzSize_extraInitializers), signal(
      false,
      ...ngDevMode ? [{
        debugName: "elementOnly"
      }] : (
        /* istanbul ignore next */
        []
      )
    ));
    size = signal(
      this.nzSize,
      ...ngDevMode ? [{
        debugName: "size"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    loading$ = new Subject();
    formSize = inject(NZ_FORM_SIZE, {
      optional: true
    });
    compactSize = inject(NZ_SPACE_COMPACT_SIZE, {
      optional: true
    });
    finalSize = computed(
      () => {
        if (this.formSize?.()) {
          return this.formSize();
        }
        if (this.compactSize) {
          return this.compactSize();
        }
        return this.size();
      },
      ...ngDevMode ? [{
        debugName: "finalSize"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    iconDir = contentChild(
      NzIconDirective,
      ...ngDevMode ? [{
        debugName: "iconDir"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    loadingIconDir = viewChild(
      NzIconDirective,
      ...ngDevMode ? [{
        debugName: "loadingIconDir"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    iconOnly = computed(
      () => this.elementOnly() && (!!this.iconDir() || !!this.loadingIconDir()),
      ...ngDevMode ? [{
        debugName: "iconOnly"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    constructor() {
      onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME2, () => {
        this.size.set(this.nzSize);
        this.cdr.markForCheck();
      });
      afterEveryRender({
        read: () => {
          const {
            children
          } = this.elementRef.nativeElement;
          const visibleElement = Array.from(children).filter((element) => element.style.display !== "none");
          this.elementOnly.set(visibleElement.length === 1);
        }
      });
    }
    ngOnInit() {
      this.size.set(this.nzSize);
      fromEventOutsideAngular(this.elementRef.nativeElement, "click", {
        capture: true
      }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
        if (this.disabled && event.target?.tagName === "A" || this.nzLoading) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      });
    }
    ngOnChanges({
      nzLoading,
      nzSize
    }) {
      if (nzLoading) {
        this.loading$.next(this.nzLoading);
      }
      if (nzSize) {
        this.size.set(nzSize.currentValue);
      }
    }
    ngAfterViewInit() {
      this.insertSpan();
    }
    ngAfterContentInit() {
      this.loading$.pipe(startWith(this.nzLoading), filter(() => !!this.nzIconDirectiveElement), takeUntilDestroyed(this.destroyRef)).subscribe((loading) => {
        const nativeElement = this.nzIconDirectiveElement.nativeElement;
        if (loading) {
          this.renderer.setStyle(nativeElement, "display", "none");
        } else {
          this.renderer.removeStyle(nativeElement, "display");
        }
      });
    }
    insertSpan() {
      this.elementRef.nativeElement.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
          const span = this.renderer.createElement("span");
          const parent = this.renderer.parentNode(node);
          this.renderer.insertBefore(parent, span, node);
          this.renderer.appendChild(span, node);
        }
      });
    }
    static ɵfac = function NzButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzButtonComponent2)();
    };
    static ɵcmp = ɵɵdefineComponent({
      type: NzButtonComponent2,
      selectors: [["button", "nz-button", ""], ["a", "nz-button", ""]],
      contentQueries: function NzButtonComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuerySignal(dirIndex, ctx.iconDir, NzIconDirective, 5);
          ɵɵcontentQuery(dirIndex, NzIconDirective, 5, ElementRef);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzIconDirectiveElement = _t.first);
        }
      },
      viewQuery: function NzButtonComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.loadingIconDir, NzIconDirective, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      hostAttrs: [1, "ant-btn"],
      hostVars: 32,
      hostBindings: function NzButtonComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("tabindex", ctx.disabled ? -1 : ctx.tabIndex === null ? null : ctx.tabIndex)("disabled", ctx.disabled || null);
          ɵɵclassProp("ant-btn-default", ctx.nzType === "default")("ant-btn-primary", ctx.nzType === "primary")("ant-btn-dashed", ctx.nzType === "dashed")("ant-btn-link", ctx.nzType === "link")("ant-btn-text", ctx.nzType === "text")("ant-btn-circle", ctx.nzShape === "circle")("ant-btn-round", ctx.nzShape === "round")("ant-btn-lg", ctx.finalSize() === "large")("ant-btn-sm", ctx.finalSize() === "small")("ant-btn-dangerous", ctx.nzDanger)("ant-btn-loading", ctx.nzLoading)("ant-btn-background-ghost", ctx.nzGhost)("ant-btn-block", ctx.nzBlock)("ant-btn-rtl", ctx.dir() === "rtl")("ant-btn-icon-only", ctx.iconOnly());
        }
      },
      inputs: {
        nzBlock: [2, "nzBlock", "nzBlock", booleanAttribute],
        nzGhost: [2, "nzGhost", "nzGhost", booleanAttribute],
        nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute],
        nzDanger: [2, "nzDanger", "nzDanger", booleanAttribute],
        disabled: [2, "disabled", "disabled", booleanAttribute],
        tabIndex: "tabIndex",
        nzType: "nzType",
        nzShape: "nzShape",
        nzSize: "nzSize"
      },
      exportAs: ["nzButton"],
      features: [ɵɵProvidersFeature([{
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "btn"
      }]), ɵɵHostDirectivesFeature([NzSpaceCompactItemDirective]), ɵɵNgOnChangesFeature],
      ngContentSelectors: _c02,
      decls: 2,
      vars: 1,
      consts: [[1, "ant-btn-icon", "ant-btn-loading-icon"], ["nzType", "loading"]],
      template: function NzButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵconditionalCreate(0, NzButtonComponent_Conditional_0_Template, 2, 0, "span", 0);
          ɵɵprojection(1);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.nzLoading ? 0 : -1);
        }
      },
      dependencies: [NzIconModule, NzIconDirective],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzButtonComponent, [{
    type: Component,
    args: [{
      selector: "button[nz-button], a[nz-button]",
      exportAs: "nzButton",
      imports: [NzIconModule],
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (nzLoading) {
      <span class="ant-btn-icon ant-btn-loading-icon">
        <nz-icon nzType="loading" />
      </span>
    }
    <ng-content />
  `,
      host: {
        class: "ant-btn",
        "[class.ant-btn-default]": `nzType === 'default'`,
        "[class.ant-btn-primary]": `nzType === 'primary'`,
        "[class.ant-btn-dashed]": `nzType === 'dashed'`,
        "[class.ant-btn-link]": `nzType === 'link'`,
        "[class.ant-btn-text]": `nzType === 'text'`,
        "[class.ant-btn-circle]": `nzShape === 'circle'`,
        "[class.ant-btn-round]": `nzShape === 'round'`,
        "[class.ant-btn-lg]": `finalSize() === 'large'`,
        "[class.ant-btn-sm]": `finalSize() === 'small'`,
        "[class.ant-btn-dangerous]": `nzDanger`,
        "[class.ant-btn-loading]": `nzLoading`,
        "[class.ant-btn-background-ghost]": `nzGhost`,
        "[class.ant-btn-block]": `nzBlock`,
        "[class.ant-btn-rtl]": `dir() === 'rtl'`,
        "[class.ant-btn-icon-only]": `iconOnly()`,
        "[attr.tabindex]": "disabled ? -1 : (tabIndex === null ? null : tabIndex)",
        "[attr.disabled]": "disabled || null"
      },
      hostDirectives: [NzSpaceCompactItemDirective],
      providers: [{
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "btn"
      }]
    }]
  }], () => [], {
    nzIconDirectiveElement: [{
      type: ContentChild,
      args: [NzIconDirective, {
        read: ElementRef
      }]
    }],
    nzBlock: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzGhost: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDanger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzShape: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    iconDir: [{
      type: ContentChild,
      args: [forwardRef(() => NzIconDirective), {
        isSignal: true
      }]
    }],
    loadingIconDir: [{
      type: ViewChild,
      args: [forwardRef(() => NzIconDirective), {
        isSignal: true
      }]
    }]
  });
})();
var NzButtonModule = class _NzButtonModule {
  static ɵfac = function NzButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NzButtonModule,
    imports: [NzButtonComponent],
    exports: [NzButtonComponent, NzTransitionPatchModule, NzWaveModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [NzButtonComponent, NzTransitionPatchModule, NzWaveModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzButtonModule, [{
    type: NgModule,
    args: [{
      imports: [NzButtonComponent],
      exports: [NzButtonComponent, NzTransitionPatchModule, NzWaveModule]
    }]
  }], null, null);
})();

export {
  NzFormItemFeedbackIconComponent,
  NZ_FORM_SIZE,
  NzFormStatusService,
  NZ_FORM_VARIANT,
  NZ_SPACE_COMPACT_SIZE,
  NZ_SPACE_COMPACT_ITEM_TYPE,
  NzSpaceCompactItemDirective,
  NzButtonComponent,
  NzButtonModule
};
//# sourceMappingURL=chunk-Q5XPHK6W.js.map
