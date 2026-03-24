import {
  Component,
  Footer,
  Header,
  NavigationEnd,
  Router,
  RouterOutlet,
  SharedModule,
  bootstrapApplication,
  filter,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  signal,
  withInMemoryScrolling,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-RRSJV46M.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadChildren: () => import("./chunk-IPHJO5OB.js").then((m) => m.WebsiteModule)
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "top",
      anchorScrolling: "disabled"
    })),
    provideHttpClient()
  ]
};

// src/app/app.ts
var App = class _App {
  router;
  title = signal("CES-tech-website", ...ngDevMode ? [{ debugName: "title" }] : []);
  navigationSub;
  constructor(router) {
    this.router = router;
  }
  ngAfterViewInit() {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    this.navigationSub = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }
  ngOnDestroy() {
    this.navigationSub?.unsubscribe();
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "scroll-shell"], [1, "app-shell"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header");
      \u0275\u0275elementStart(1, "div", 0)(2, "main", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(4, "app-footer");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet, SharedModule, Header, Footer], styles: ['\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #f6f7fb;\n  color: #0f172a;\n  font-family:\n    "Plus Jakarta Sans",\n    "Inter",\n    "Roboto",\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.app-shell[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  min-height: 0;\n  padding: 0;\n}\n.scroll-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=app.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, SharedModule], template: '<app-header></app-header>\n<div class="scroll-shell">\n  <main class="app-shell">\n    <router-outlet></router-outlet>\n  </main>\n  <app-footer></app-footer>\n</div>\n', styles: ['/* src/app/app.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #f6f7fb;\n  color: #0f172a;\n  font-family:\n    "Plus Jakarta Sans",\n    "Inter",\n    "Roboto",\n    "Helvetica Neue",\n    Arial,\n    sans-serif;\n}\n.app-shell {\n  flex: 1 0 auto;\n  min-height: 0;\n  padding: 0;\n}\n.scroll-shell {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=app.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
