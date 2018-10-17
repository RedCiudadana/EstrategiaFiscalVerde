"use strict";



;define('estrategia-fiscal-ambiental/app', ['exports', 'estrategia-fiscal-ambiental/resolver', 'ember-load-initializers', 'estrategia-fiscal-ambiental/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('estrategia-fiscal-ambiental/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('estrategia-fiscal-ambiental/helpers/app-version', ['exports', 'estrategia-fiscal-ambiental/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('estrategia-fiscal-ambiental/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('estrategia-fiscal-ambiental/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('estrategia-fiscal-ambiental/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'estrategia-fiscal-ambiental/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('estrategia-fiscal-ambiental/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('estrategia-fiscal-ambiental/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('estrategia-fiscal-ambiental/initializers/export-application-global', ['exports', 'estrategia-fiscal-ambiental/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define("estrategia-fiscal-ambiental/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
;define('estrategia-fiscal-ambiental/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('estrategia-fiscal-ambiental/router', ['exports', 'estrategia-fiscal-ambiental/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('legislativo');
    this.route('objetivo');
    this.route('nosotros');
    this.route('biblioteca', function () {
      this.route('eje1');
      this.route('eje2');
      this.route('eje3');
      this.route('eje4');
      this.route('estrategia-ambiental');
    });
    this.route('mision');
    this.route('vision');
  });

  exports.default = Router;
});
;define('estrategia-fiscal-ambiental/routes/biblioteca', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/biblioteca/eje0', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/biblioteca/eje1', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/biblioteca/eje2', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/biblioteca/eje3', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/biblioteca/eje4', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/biblioteca/estrategia-ambiental', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/biblioteca/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/legislativo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/mision', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/nosotros', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/objetivo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/routes/vision', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('estrategia-fiscal-ambiental/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("estrategia-fiscal-ambiental/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sFJG/+KF", "block": "{\"symbols\":[],\"statements\":[[7,\"nav\"],[11,\"class\",\"navbar sticky-top navbar-light bg-white navbar-expand-lg\"],[9],[0,\"\\n  \"],[7,\"a\"],[11,\"class\",\"navbar-brand\"],[11,\"href\",\"/\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"alt\",\"Estrategia de Fiscal Ambiental\"],[11,\"src\",\"img/logo.png\"],[11,\"height\",\"100px\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"button\"],[11,\"class\",\"navbar-toggler\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-target\",\"#navbarNavDropdown\"],[11,\"aria-controls\",\"navbarNavDropdown\"],[11,\"aria-expanded\",\"false\"],[11,\"aria-label\",\"Toggle navigation\"],[11,\"type\",\"button\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"navbar-toggler-icon\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"collapse navbar-collapse\"],[11,\"id\",\"navbarNavDropdown\"],[9],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"navbar-nav ml-auto mr-5\"],[9],[0,\"\\n      \"],[7,\"li\"],[11,\"class\",\"nav-item dropdown border border-top-0 border-left-0 border-right-0 border-primary border-bold mr-3\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"class\",\"nav-link dropdown-toggle font-weight-bold\"],[11,\"href\",\"#\"],[11,\"id\",\"navbarDropdownMenuLink\"],[11,\"role\",\"button\"],[11,\"data-toggle\",\"dropdown\"],[11,\"aria-haspopup\",\"true\"],[11,\"aria-expanded\",\"false\"],[9],[0,\"\\n          Nosotros\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"dropdown-menu\"],[11,\"aria-labelledby\",\"navbarDropdownMenuLink\"],[9],[0,\"\\n          \"],[4,\"link-to\",[\"mision\"],[[\"class\"],[\"dropdown-item\"]],{\"statements\":[[0,\"Mision\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"link-to\",[\"vision\"],[[\"class\"],[\"dropdown-item\"]],{\"statements\":[[0,\"Vision\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"link-to\",[\"objetivo\"],[[\"class\"],[\"dropdown-item\"]],{\"statements\":[[0,\"Objetivo\"]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"li\"],[11,\"class\",\"nav-item my-auto\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"https://www.facebook.com/minfingt/\"],[11,\"target\",\"_blank\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-facebook mx-2\"],[9],[10],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"https://twitter.com/MinFinGT\"],[11,\"target\",\"_blank\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-twitter mx-2\"],[9],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"header-nav-eje col-sm-12 col-mds container-fluid bg-primary\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row text-center\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"eje col-sm-12 col-md p-1 p-sm-2 border border-white\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"biblioteca\"],null,{\"statements\":[[0,\"             \"],[7,\"a\"],[11,\"class\",\"text-white font-weight-bold\"],[9],[0,\"Calidad del gasto y compra publica\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"eje col-sm-12 col-md p-1 p-sm-2 border border-white\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"biblioteca.eje1\"],null,{\"statements\":[[0,\"             \"],[7,\"a\"],[11,\"class\",\"text-white font-weight-bold\"],[9],[0,\"Asistencia Financiera Municipal\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"eje col-sm-12 col-md p-1 p-sm-2 border border-white\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"biblioteca.eje2\"],null,{\"statements\":[[0,\"            \"],[7,\"a\"],[11,\"class\",\"text-white font-weight-bold\"],[9],[0,\"Modelos Fiscales \"],[7,\"br\"],[9],[10],[0,\"Ambientales\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"eje col-sm-12 col-md p-1 p-sm-2 border border-white\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"biblioteca.eje3\"],null,{\"statements\":[[0,\"            \"],[7,\"a\"],[11,\"class\",\"text-white font-weight-bold\"],[9],[0,\"Gestión de riesgo y contingencias ambientales\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"eje col-sm-12 col-md p-1 p-sm-2 border border-white\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"biblioteca.eje4\"],null,{\"statements\":[[0,\"            \"],[7,\"a\"],[11,\"class\",\"text-white font-weight-bold\"],[9],[0,\"Acceso a financiamiento verde y climático\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"eje col-sm-12 col-md p-1 p-sm-2 border border-white\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"legislativo\"],null,{\"statements\":[[0,\"            \"],[7,\"a\"],[11,\"class\",\"text-white font-weight-bold\"],[9],[0,\"Documentos legales\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"eje col-sm-12 col-md p-1 p-sm-2 border border-white\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"biblioteca.estrategia-ambiental\"],null,{\"statements\":[[0,\"             \"],[7,\"a\"],[11,\"class\",\"text-white font-weight-bold\"],[9],[0,\"Biblioteca ambiental\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[7,\"footer\"],[11,\"class\",\"footer bg-primary text-white\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container p-4\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-xs-12 col-md-6 pt-4 text-center text-md-left\"],[9],[0,\"\\n                \"],[7,\"strong\"],[9],[0,\"Desarrollado por:\"],[10],[0,\"\\n                \"],[7,\"ul\"],[9],[0,\"\\n                    \"],[7,\"li\"],[9],[0,\"Ministerio de Finanzas Públicas\"],[10],[0,\"\\n                    \"],[7,\"li\"],[9],[0,\"Asociación Civil Red Ciudadana\"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-xs-12 col-md-6\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/img/logo-minfin.png\"],[11,\"alt\",\"Ministerio de Finanzas Públicas\"],[11,\"height\",\"100px\"],[9],[10],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"/img/redciudadana.png\"],[11,\"alt\",\"Red Ciudadana\"],[11,\"height\",\"100px\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/application.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/biblioteca", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "w/SlNpvl", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container p-5\"],[9],[0,\" \\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-12 col-md-4\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"list-group\"],[11,\"id\",\"list-tab\"],[11,\"role\",\"tablist\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#/biblioteca\"],[11,\"class\",\"list-group-item list-group-item-action\"],[11,\"id\",\"list-one-list\"],[11,\"aria-controls\",\"Calidad del gasto y compra publica\"],[9],[0,\"Calidad del gasto y compra publica\"],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#/biblioteca/eje1\"],[11,\"class\",\"list-group-item list-group-item-action\"],[11,\"id\",\"list-two-list\"],[11,\"aria-controls\",\"Asistencia Financiera Municipal\"],[9],[0,\"Asistencia Financiera Municipal\"],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#/biblioteca/eje2\"],[11,\"class\",\"list-group-item list-group-item-action\"],[11,\"id\",\"list-three-list\"],[11,\"aria-controls\",\"Modelos Fiscales ambientales\"],[9],[0,\"Modelos Fiscales ambientales\"],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#/biblioteca/eje3\"],[11,\"class\",\"list-group-item list-group-item-action\"],[11,\"id\",\"list-four-list\"],[11,\"aria-controls\",\"Gestión de riesgo y contingencias ambientales\"],[9],[0,\"Gestión de riesgo y contingencias ambientales\"],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#/biblioteca/eje4\"],[11,\"class\",\"list-group-item list-group-item-action\"],[11,\"id\",\"list-five-list\"],[11,\"aria-controls\",\"Acceso a financiamiento verde y climático\"],[9],[0,\"Acceso a financiamiento verde y climático\"],[10],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#/biblioteca/estrategia-ambiental\"],[11,\"class\",\"list-group-item list-group-item-action\"],[11,\"id\",\"list-six-list\"],[11,\"aria-controls\",\"Estrategia Fiscal Ambiental\"],[9],[0,\"Estrategia Fiscal Ambiental\"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-12 col-md-8\"],[9],[0,\"\\n      \"],[7,\"div\"],[9],[0,\"\\n        \"],[1,[21,\"outlet\"],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/biblioteca.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/biblioteca/eje1", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7X1eCAsZ", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2 m-md-0\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[0,\"Asistencia Financiera Municipal\"],[10],[0,\"\\n  Tiene como objetivos:\\n  \"],[7,\"ul\"],[9],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"Colaborar con las instituciones encargadas para perfeccionar la Cuenta Integrada de Gastos y Transacciones Ambientales, con el objetivo de identificar el gasto público en la prevención, mitigación o restauración de los daños al ambiente natural.\"],[10],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"Apoyar la generación de un portafolio de proyectos asociados a la protección del medio ambiente que demanden un alto grado de financiamiento.\"],[10],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"Establecer e implementar los mecanismos y procedimientos de acceso a fuentes de financiamiento “verde”, tanto nacionales como internacionales.\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2\"],[9],[0,\"\\n  \"],[7,\"h3\"],[9],[0,\"Descargas\"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"tab-pane fade show\"],[11,\"id\",\"list-two\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"list-two-list\"],[9],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"list-unstyled\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Asistencia Financiera Municipal/ACUERDO GUBERNATIVO 236-2006 (reglamento de descargas y reusos de aguas residuales y de la disposici¢n de lodos).pdf\"],[9],[0,\"\\n           ACUERDO GUBERNATIVO 236-2006 (reglamento de descargas y reusos de aguas residuales y de la disposici¢n de lodos).pdf\\n        \"],[10],[10],[0,\"\\n         \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Asistencia Financiera Municipal/REFORMAS A LEY ORGµNICA DEL PRESUPUESTO DECRETO 13-2013.pdf\"],[9],[0,\"\\n           REFORMAS A LEY ORGµNICA DEL PRESUPUESTO DECRETO 13-2013.pdf\\n        \"],[10],[10],[0,\"\\n         \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Asistencia Financiera Municipal/Reformas codigoMunicipal Decreto 12-2002.pdf\"],[9],[0,\"\\n           Reformas codigoMunicipal Decreto 12-2002.pdf\\n        \"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"script\"],[9],[0,\"\\n  $('#list-tab a').removeClass('active');\\n  $('#list-two-list').addClass('active');\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/biblioteca/eje1.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/biblioteca/eje2", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YJyyqZLt", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2 m-md-0\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[0,\"Modelos Fiscales ambientales\"],[10],[0,\"\\n  Tiene como objetivos:\\n  \"],[7,\"ul\"],[9],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"Desarrollar instrumentos financieros fiscales que promuevan la investigación científica aplicada, el emprendimiento verde y el reciclaje con el objetivo de crear nuevos productos de valor agregado y por ende nuevas plazas de empleo.\"],[10],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"Analizar el funcionamiento y la potencial reestructuración de los incentivos fiscales actualmente vigentes que podrían causar efectos negativos sobre el ambiente.\"],[10],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"Evaluar herramientas tributarias de doble dividendo, que tengan el objetivo de reducir la contaminación ambiental.\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2\"],[9],[0,\"\\n  \"],[7,\"h3\"],[9],[0,\"Descargas\"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"tab-pane fade show\"],[11,\"id\",\"list-three\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"list-three-list\"],[9],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"list-unstyled\"],[9],[0,\"\\n      \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/AC031B~1.pdf\"],[9],[0,\"\\n         AC031B~1.pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/AC4A7E~1.pdf\"],[9],[0,\"\\n         AC4A7E~1.pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/ACUERDO GUBERNATIVO 120-2002 (Reglamento de la ley de impuesto espec¡fico sobre la distribuci¢n de bebidas gaseosas...).pdf\"],[9],[0,\"\\n         ACUERDO GUBERNATIVO 120-2002 (Reglamento de la ley de impuesto espec¡fico sobre la distribuci¢n de bebidas gaseosas...).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/ACUERDO GUBERNATIVO 133-2012 (Reglamento de la ley del impuesto espec¡fico a la primer matricula).pdf\"],[9],[0,\"\\n         ACUERDO GUBERNATIVO 133-2012 (Reglamento de la ley del impuesto espec¡fico a la primer matricula).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/ACUERDO GUBERNATIVO 134-2012 (reglamento de la ley aduanera nacional).pdf\"],[9],[0,\"\\n         ACUERDO GUBERNATIVO 134-2012 (reglamento de la ley aduanera nacional).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/ACUERDO GUBERNATIVO 205-2004 (Reglamento a la ley de impuesto sobre la distribuci¢n de bebidas alcoh¢licas destiladas, cervezas.pdf\"],[9],[0,\"\\n         ACUERDO GUBERNATIVO 205-2004 (Reglamento a la ley de impuesto sobre la distribuci¢n de bebidas alcoh¢licas destiladas, cervezas.pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/ACUERDO GUBERNATIVO 5-2013 (Reglamento ley del IVA).pdf\"],[9],[0,\"\\n         ACUERDO GUBERNATIVO 5-2013 (Reglamento ley del IVA).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/DE2750~1.pdf\"],[9],[0,\"\\n         DE2750~1.pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/DECRETO DEL CONGRESO 09-2002 (Ley del impuesto espec¡fico sobre la distribuci¢n de Bebidas Gaseosas...).pdf\"],[9],[0,\"\\n         DECRETO DEL CONGRESO 09-2002 (Ley del impuesto espec¡fico sobre la distribuci¢n de Bebidas Gaseosas...).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/DECRETO DEL CONGRESO 10-2012 (Ley de actualizaci¢n tributaria).pdf\"],[9],[0,\"\\n         DECRETO DEL CONGRESO 10-2012 (Ley de actualizaci¢n tributaria).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/DECRETO DEL CONGRESO 14-2013 (ley de aduanas).pdf\"],[9],[0,\"\\n         DECRETO DEL CONGRESO 14-2013 (ley de aduanas).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/DECRETO DEL CONGRESO 20-2006 (Disposiciones legales para el fortalecimiento de la administraci¢n tributaria).pdf\"],[9],[0,\"\\n         DECRETO DEL CONGRESO 20-2006 (Disposiciones legales para el fortalecimiento de la administraci¢n tributaria).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/DECRETO DEL CONGRESO 27-92 (IVA).pdf\"],[9],[0,\"\\n         DECRETO DEL CONGRESO 27-92 (IVA).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/DECRETO DEL CONGRESO 38-92 (Ley del impuesto a la distribuci¢n de petr¢leo Crudo y combustibles derivados del petr¢leo).pdf\"],[9],[0,\"\\n         DECRETO DEL CONGRESO 38-92 (Ley del impuesto a la distribuci¢n de petr¢leo Crudo y combustibles derivados del petr¢leo).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/DECRETO DEL CONGRESO 38-92 (ley del impuesto a la dsitribuci¢n de petr¢leo crudo).pdf\"],[9],[0,\"\\n         DECRETO DEL CONGRESO 38-92 (ley del impuesto a la dsitribuci¢n de petr¢leo crudo).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Modelos Fiscales Ambientales/DECRETO DEL CONGRESO 6-91 (C¢digo Tributario).pdf\"],[9],[0,\"\\n         DECRETO DEL CONGRESO 6-91 (C¢digo Tributario).pdf\\n      \"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"script\"],[9],[0,\"\\n  $('#list-tab a').removeClass('active');\\n  $('#list-three-list').addClass('active');\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/biblioteca/eje2.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/biblioteca/eje3", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "w0ijld7l", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2 m-md-0\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[0,\"Gestión de riesgo y contingencias ambientales\"],[10],[0,\"\\n  Tiene como objetivos:\\n  \"],[7,\"ul\"],[9],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"Colaborar con las instituciones encargadas para perfeccionar la Cuenta Integrada de Gastos y Transacciones Ambientales, con el objetivo de identificar el gasto público en la prevención, mitigación o restauración de los daños al ambiente natural.\"],[10],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"Apoyar la generación de un portafolio de proyectos asociados a la protección del medio ambiente que demanden un alto grado de financiamiento.\"],[10],[0,\"\\n    \"],[7,\"li\"],[9],[0,\"Establecer e implementar los mecanismos y procedimientos de acceso a fuentes de financiamiento “verde”, tanto nacionales como internacionales.\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2\"],[9],[0,\"\\n  \"],[7,\"h3\"],[9],[0,\"Descargas\"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"tab-pane fade show\"],[11,\"id\",\"list-four\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"list-four-list\"],[9],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"list-unstyled\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Gestion de Riesgo y Contingencias ambientales/DECRETO DEL CONGRESO 109-96 (ley de coordinadora nacional para la reducci¢n de desastres de origen natural o provocado).pdf\"],[9],[0,\"\\n           DECRETO DEL CONGRESO 109-96 (ley de coordinadora nacional para la reducci¢n de desastres de origen natural o provocado).pdf\\n        \"],[10],[10],[0,\"\\n         \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Gestion de Riesgo y Contingencias ambientales/DECRETO DEL CONGRESO 7-2013 (ley de cambio climatico).pdf\"],[9],[0,\"\\n           DECRETO DEL CONGRESO 7-2013 (ley de cambio climatico).pdf\\n        \"],[10],[10],[0,\"\\n         \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Gestion de Riesgo y Contingencias ambientales/DECRETO DEL CONGRESO 90-97 (C¢digo de salud).pdf\"],[9],[0,\"\\n           DECRETO DEL CONGRESO 90-97 (C¢digo de salud).pdf\\n        \"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"script\"],[9],[0,\"\\n  $('#list-tab a').removeClass('active');\\n  $('#list-four-list').addClass('active');\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/biblioteca/eje3.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/biblioteca/eje4", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lUmETexz", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2 m-md-0\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[0,\"Acceso a financiamiento verde y climático\"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"Tiene como objetivos incrementar la calidad del gasto administrativo, incorporando tecnologías limpias, buenas prácticas ambientales que reduzcan costos, así como también reduzcan la contaminación ambiental, huella de carbono y mejoren la gestión de residuos sólidos y conservación de recursos hídricos. Y promover compras y adquisiciones de bienes con características de sostenibilidad ambiental y garantizar el uso de proveedores que demuestren la implementación de condiciones mínimas en materia de cumplimiento de requerimientos de conservación y protección del medio ambiente\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2\"],[9],[0,\"\\n  \"],[7,\"h3\"],[9],[0,\"Descargas\"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"tab-pane fade show\"],[11,\"id\",\"list-five\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"list-five-list\"],[9],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"list-unstyled\"],[9],[0,\"\\n      \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Acceso a financiamiento Verde y climatico//ACUERDO GUBERNATIVO 386-2001 (reglamento de regularizaci¢n de la tenencia de las tierras entregadas por el estado).pdf\"],[9],[0,\"\\n         ACUERDO GUBERNATIVO 386-2001 (reglamento de regularizaci¢n de la tenencia de las tierras entregadas por el estado).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Acceso a financiamiento Verde y climatico//DECRETO DEL CONGRESO 126-97 (ley reguladora de las  reas de reservas territoriales del estado de guatemala).pdf\"],[9],[0,\"\\n         DECRETO DEL CONGRESO 126-97 (ley reguladora de las  reas de reservas territoriales del estado de guatemala).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Acceso a financiamiento Verde y climatico//DECRETO DEL CONGRESO 24-99 (ley de fondo de tierras).pdf\"],[9],[0,\"\\n         DECRETO DEL CONGRESO 24-99 (ley de fondo de tierras).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Acceso a financiamiento Verde y climatico//DECRETO DEL CONGRESO 41-2005 (ley del registro de informaci¢n catastral).pdf\"],[9],[0,\"\\n         DECRETO DEL CONGRESO 41-2005 (ley del registro de informaci¢n catastral).pdf\\n      \"],[10],[10],[0,\"\\n       \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Acceso a financiamiento Verde y climatico//DECRETO DEL CONGRESO 51-2010 (ley de incentivos forestales).pdf\"],[9],[0,\"\\n         DECRETO DEL CONGRESO 51-2010 (ley de incentivos forestales).pdf\\n      \"],[10],[10],[0,\"\\n      \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Acceso%20a%20financiamiento%20Verde%20y%20climatico/Decreto%20N%C2%A3mero%20329-2009%20Politica%20Nacional%20de%20Cambio%20Clim%C2%A0tico.pdf\"],[9],[0,\"\\n         Decreto Número 329-2009 Política Nacional de Cambio Climático\\n      \"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"script\"],[9],[0,\"\\n  $('#list-tab a').removeClass('active');\\n  $('#list-five-list').addClass('active');\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/biblioteca/eje4.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/biblioteca/estrategia-ambiental", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tVevHGfC", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2 m-md-0\"],[9],[0,\"\\n    \"],[7,\"h2\"],[9],[0,\"Estrategia Fiscal Ambiental\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"tab-pane fade show\"],[11,\"id\",\"list-six\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"list-six-list\"],[9],[0,\"\\n      \"],[7,\"ul\"],[11,\"class\",\"list-unstyled\"],[9],[0,\"\\n          \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/EFA%20vr.%20final.pdf\"],[9],[0,\"\\n             EFA (PDF)\\n          \"],[10],[10],[0,\"\\n          \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/EFA%20vr.%20final.docx\"],[9],[0,\"\\n             EFA (DOCX)\\n          \"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"script\"],[9],[0,\"\\n  $('#list-tab a').removeClass('active');\\n  $('#list-six-list').addClass('active');\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/biblioteca/estrategia-ambiental.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/biblioteca/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "a30F5AuS", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2 m-md-0\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[0,\"Calidad del gasto y compra publica\"],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"text-justify\"],[9],[0,\"Tiene como objetivos incrementar la calidad del gasto administrativo, incorporando tecnologías limpias, buenas prácticas ambientales que reduzcan costos, así como también reduzcan la contaminación ambiental, huella de carbono y mejoren la gestión de residuos sólidos y conservación de recursos hídricos. Y promover compras y adquisiciones de bienes con características de sostenibilidad ambiental y garantizar el uso de proveedores que demuestren la implementación de condiciones mínimas en materia de cumplimiento de requerimientos de conservación y protección del medio ambiente\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2\"],[9],[0,\"\\n  \"],[7,\"h3\"],[9],[0,\"Descargas\"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"tab-pane fade show active\"],[11,\"id\",\"list-one\"],[11,\"role\",\"tabpanel\"],[11,\"aria-labelledby\",\"Calidad del gasto y compra publica\"],[9],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"list-unstyled\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Calidad del Gasto y Compra Publica/6 LEY DE CONTRATACIONES DEL ESTADO DECRETO DEL CONGRESO 57-92.pdf\"],[9],[0,\"\\n           6 LEY DE CONTRATACIONES DEL ESTADO DECRETO DEL CONGRESO 57-92.pdf\\n        \"],[10],[10],[0,\"\\n         \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Calidad del Gasto y Compra Publica/ACUERDO GUBERNATIVO 256-97 (Reglamento ley heneral de electricidad).pdf\"],[9],[0,\"\\n           ACUERDO GUBERNATIVO 256-97 (Reglamento ley heneral de electricidad).pdf\\n        \"],[10],[10],[0,\"\\n         \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Calidad del Gasto y Compra Publica/DECRETO DEL CONGRESO 52-2003 (ley de incentivos para el desarrollo de proyectos de energ¡a renovable).pdf\"],[9],[0,\"\\n           DECRETO DEL CONGRESO 52-2003 (ley de incentivos para el desarrollo de proyectos de energ¡a renovable).pdf\\n        \"],[10],[10],[0,\"\\n         \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Calidad del Gasto y Compra Publica/DECRETO DEL CONGRESO 74-96 (ley de fomento de la eduaci¢n ambiental).pdf\"],[9],[0,\"\\n           DECRETO DEL CONGRESO 74-96 (ley de fomento de la eduaci¢n ambiental).pdf\\n        \"],[10],[10],[0,\"\\n         \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/legislativo/Calidad del Gasto y Compra Publica/DECRETO DEL CONGRESO 93-96 (ley general de electricidad).pdf\"],[9],[0,\"\\n           DECRETO DEL CONGRESO 93-96 (ley general de electricidad).pdf\\n        \"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"script\"],[9],[0,\"\\n  $('#list-tab a').removeClass('active');\\n  $('#list-one-list').addClass('active');\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/biblioteca/index.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/wBo2Ewu", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"role\",\"main\"],[11,\"class\",\"container-fluid p-0\"],[9],[0,\"\\n    \"],[2,\" Banner principal \"],[0,\"\\n    \"],[7,\"section\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"src\",\"/img/banner.png\"],[11,\"width\",\"100%\"],[11,\"height\",\"auto\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[2,\" Sección ¿Cómo funciona? \"],[0,\"\\n    \"],[7,\"section\"],[11,\"id\",\"comoFunciona\"],[11,\"class\",\"section m-none\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row text-center justify-content-center\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-12 col-md-4 col-md-offset-2\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"biblioteca\"],null,{\"statements\":[[0,\"                        \"],[7,\"h4\"],[11,\"class\",\"font-weight-bold\"],[9],[0,\"Bibloteca\"],[7,\"br\"],[9],[10],[0,\"Ambiental\"],[10],[0,\"\\n                        \"],[7,\"img\"],[11,\"src\",\"../img/portal3.png\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-xs-12 col-md-4\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"legislativo\"],null,{\"statements\":[[0,\"                        \"],[7,\"h4\"],[11,\"class\",\"font-weight-bold\"],[9],[0,\"Documentos\"],[7,\"br\"],[9],[10],[0,\"Legales\"],[10],[0,\"\\n                        \"],[7,\"img\"],[11,\"src\",\"/img/portal1.png\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"hr\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[2,\" Modal \"],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"modal fade\"],[11,\"id\",\"exampleModal\"],[11,\"tabindex\",\"-1\"],[11,\"role\",\"dialog\"],[11,\"aria-labelledby\",\"exampleModalLabel\"],[11,\"aria-hidden\",\"true\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"modal-dialog\"],[11,\"role\",\"document\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"modal-content\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"modal-header\"],[9],[0,\"\\n        \"],[7,\"h5\"],[11,\"class\",\"modal-title\"],[11,\"id\",\"exampleModalLabel\"],[9],[0,\"Video\"],[10],[0,\"\\n        \"],[7,\"button\"],[11,\"class\",\"close\"],[11,\"data-dismiss\",\"modal\"],[11,\"aria-label\",\"Close\"],[11,\"type\",\"button\"],[9],[0,\"\\n          \"],[7,\"span\"],[11,\"aria-hidden\",\"true\"],[9],[0,\"×\"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"modal-body\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"embed-responsive embed-responsive-16by9 col-xs-12 text-center\"],[9],[0,\"\\n            \"],[7,\"iframe\"],[11,\"width\",\"1200\"],[11,\"height\",\"630\"],[11,\"src\",\"https://www.youtube.com/embed/qf0-mHOMUOc?rel=0\"],[11,\"frameborder\",\"0\"],[11,\"allow\",\"autoplay; encrypted-media\"],[11,\"allowfullscreen\",\"\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"modal-footer\"],[9],[0,\"\\n        \"],[7,\"button\"],[11,\"class\",\"btn btn-primary\"],[11,\"data-dismiss\",\"modal\"],[11,\"type\",\"button\"],[9],[0,\"Ingresar\"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"script\"],[11,\"type\",\"text/javascript\"],[9],[0,\"\\n//     $('#exampleModal').modal('show');\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/index.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/legislativo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "etlyiM43", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container p-5\"],[9],[0,\"\\n  \"],[7,\"h1\"],[9],[0,\"Documentos Legales\"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n      \"],[7,\"ul\"],[11,\"class\",\"list-unstyled\"],[9],[0,\"\\n        \"],[7,\"li\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-download\"],[9],[10],[7,\"a\"],[11,\"href\",\"https://github.com/RedCiudadana/Recursos-Ambiente/raw/master/Acuerdo%20Ministerial%20442-2018%20EFA.pdf\"],[9],[0,\"\\n          Acuerdo Ministerial 442-2018 EFA\\n        \"],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/legislativo.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/mision", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nEGZIw1b", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container pt-4\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2 m-md-0\"],[9],[0,\"\\n        \"],[7,\"h1\"],[9],[0,\"Misión\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"Que el Ministerio de Finanzas Públicas cuente con una Estrategia Fiscal Ambiental para utilizar los instrumentos fiscales y económicos existentes, así como proponer nuevas figuras destinadas a propiciar el desarrollo social, económico y tecnológico que prevenga la contaminación del ambiente y mantenga el equilibrio ecológico, apoyando a la conservación, protección y mejoramiento del patrimonio natural de la Nación.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/mision.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/nosotros", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PdSwd1ei", "block": "{\"symbols\":[],\"statements\":[[7,\"style\"],[11,\"type\",\"text/css\"],[9],[0,\"\\n  @page { margin-left: 3cm; margin-right: 3cm; margin-top: 2.5cm; margin-bottom: 2.5cm }\\n  p { margin-bottom: 0.25cm; direction: ltr; line-height: 115%; text-align: left; orphans: 2; widows: 2 }\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container p-5\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-12\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"style\",\"margin-top: 0.18cm; margin-bottom: 0.35cm\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"b\"],[9],[0,\"Resumen\\nEstrategia Fiscal Ambiental y sus ejes\"],[10],[10],[10],[0,\"\\n\"],[7,\"p\"],[11,\"style\",\"margin-top: 0.18cm; margin-bottom: 0.35cm\"],[9],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.18cm; margin-bottom: 0.35cm\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Consciente\\nde las situaciones ambiental que vive el país, el Ministerio de\\nFinanzas Públicas de Guatemala, como la institución encargada de\\ncumplir y hacer cumplir con todo lo relativo al régimen jurídico\\nhacendario del país, incluyendo la recaudación y administración de\\nlos ingresos fiscales, la ejecución presupuestaria, la calidad del\\ngasto y la ejecución de las compras del Estado, el registro y el\\ncontrol de los bienes que constituyen el patrimonio estatal y la\\nevaluación de los riesgos fiscales asociados a contingencias, ha\\ndecidido promover dentro del ámbito de sus competencias, la\\nEstrategia Fiscal Ambiental (EFA), que oriente tanto a la inversión\\nprivada como pública y el gasto presupuestario al cumplimiento de\\nlos objetivos nacionales e internacionales de adaptación y\\nmitigación al cambio climático y a la protección de los recursos\\nnaturales. \"],[10],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.18cm; margin-bottom: 0.35cm\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"El\\ndespliegue de la EFA, se enfoca en cinco ejes estratégicos:\"],[10],[10],[10],[10],[0,\"\\n\"],[7,\"ol\"],[9],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Calidad\\n  del gasto y compra pública\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Asistencia\\n  financiera municipal \"],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Modelos\\n  fiscales ambientales \"],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Gestión\\n  de riesgos fiscales y contingencias ambientales \"],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Acceso\\n  a financiamiento verde y climático relacionado\"],[10],[10],[10],[10],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[0,\"\\n  \"],[10],[10],[10],[10],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"style\",\"margin-top: 0.18cm; margin-bottom: 0.35cm\"],[9],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"],[7,\"ol\"],[9],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Calidad\\n  del gasto y compra publica \"],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"lang\",\"es-ES\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-left: 1.27cm; margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-left: 1.27cm; margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Tiene\\ncomo objetivos incrementar la calidad del gasto administrativo,\\nincorporando tecnologías limpias, buenas prácticas ambientales que\\nreduzcan costos, así como también reduzcan la contaminación\\nambiental, huella de carbono y mejoren la gestión de residuos\\nsólidos y conservación de recursos hídricos. Y promover compras y\\nadquisiciones de bienes con características de sostenibilidad\\nambiental y garantizar el uso de proveedores que demuestren la\\nimplementación de condiciones mínimas en materia de cumplimiento de\\nrequerimientos de conservación y protección del medio ambiente\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n\"],[7,\"p\"],[11,\"lang\",\"es-ES\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-left: 1.27cm; margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"],[7,\"ol\"],[11,\"start\",\"2\"],[9],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Asistencia\\n  Financiera Municipal \"],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"lang\",\"es-ES\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-left: 1.27cm; margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-left: 1.27cm; margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Tiene\\ncomo objetivos facilitar la asistencia técnica, para el desarrollo\\nde metodologías considerando incorporar la calidad del gasto en\\ntemas ambientales, incentivar la trasparencia fiscal municipal por\\nmedio de las diferentes herramientas tecnológicas (SICOIN GL,\\nServicios GL, SIAF Municipal, Portal de Gobierno Abierto) incentivará\\nla transparencia fiscal. Y orientar técnicamente a las\\nMunicipalidades para definir la priorización de temas vinculados con\\nel ambiente en el marco de la formulación de sus presupuestos,\\nincorporando las contingencias ambientales.\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n\"],[7,\"p\"],[11,\"lang\",\"es-ES\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-left: 1.27cm; margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"],[7,\"ol\"],[11,\"start\",\"3\"],[9],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Modelos\\n  Fiscales Ambientales\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.18cm; margin-bottom: 0.35cm\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Tiene\\ncomo objetivos: \"],[10],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[0,\" \"],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"desarrollar\\n  instrumentos financieros fiscales que promuevan la investigación\\n  científica aplicada, el emprendimiento verde y el reciclaje con el\\n  objetivo de crear nuevos productos de valor agregado y por ende\\n  nuevas plazas de empleo. \"],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Analizar\\n  el funcionamiento y la potencial reestructuración de los incentivos\\n  fiscales actualmente vigentes que podrían causar efectos negativos\\n  sobre el ambiente.\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Evaluar\\n  herramientas tributarias de doble dividendo, que tengan el objetivo\\n  de reducir la contaminación ambiental.\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"lang\",\"es-ES\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-left: 1.27cm; margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"lang\",\"es-ES\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-left: 1.27cm; margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"],[7,\"ol\"],[11,\"start\",\"4\"],[9],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Gestión\\n  de riesgos fiscales y contingencias ambientales \"],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"lang\",\"es-ES\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-left: 1.27cm; margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-left: 1.27cm; margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Tiene\\ncomo objetivos:\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Desarrollar\\n  una estrategia de mitigación financiera para riesgos fiscales\\n  asociados a contingencias de contaminación ambiental y la gestión\\n  de recursos naturales.\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Promover\\n  la realización/actualización de un inventario de recursos\\n  naturales en riesgo.\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Implementar\\n  los modelos analíticos y de simulación que faciliten la\\n  construcción de escenarios fiscales como resultado del impacto en\\n  contingencias ambientales y gestión de recursos naturales.\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"lang\",\"es-ES\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-left: 1.27cm; margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"],[7,\"ol\"],[11,\"start\",\"5\"],[9],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[7,\"a\"],[11,\"name\",\"_GoBack\"],[9],[10],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Acceso\\n  a financiamiento verde y climático relacionado \"],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.18cm; margin-bottom: 0cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Tiene\\ncomo objetivos:\"],[10],[10],[10],[10],[0,\"\\n\"],[7,\"ul\"],[9],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.18cm; margin-bottom: 0cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Colaborar\\n  con las instituciones encargadas para perfeccionar la Cuenta\\n  Integrada de Gastos y Transacciones Ambientales, con el objetivo de\\n  identificar el gasto público en la prevención, mitigación o\\n  restauración de los daños al ambiente natural.\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.18cm; margin-bottom: 0cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Apoyar\\n  la generación de un portafolio de proyectos asociados a la\\n  protección del medio ambiente que demanden un alto grado de\\n  financiamiento.\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n  \"],[7,\"li\"],[9],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-top: 0.18cm; margin-bottom: 0cm; line-height: 110%\"],[9],[0,\"\\n  \"],[7,\"font\"],[11,\"color\",\"#595959\"],[9],[7,\"font\"],[11,\"face\",\"Constantia, serif\"],[9],[7,\"font\"],[11,\"size\",\"2\"],[11,\"style\",\"font-size: 11pt\"],[9],[7,\"font\"],[11,\"color\",\"#00000a\"],[9],[7,\"font\"],[11,\"face\",\"Times New Roman, serif\"],[9],[7,\"font\"],[11,\"size\",\"3\"],[11,\"style\",\"font-size: 12pt\"],[9],[7,\"span\"],[11,\"lang\",\"es-ES\"],[9],[0,\"Establecer\\n  e implementar los mecanismos y procedimientos de acceso a fuentes de\\n  financiamiento “verde”, tanto nacionales como internacionales.\"],[10],[10],[10],[10],[10],[10],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"p\"],[11,\"align\",\"justify\"],[11,\"style\",\"margin-left: 1.27cm; margin-top: 0.21cm; margin-bottom: 0.35cm; line-height: 110%\"],[9],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/nosotros.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/objetivo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ard2AD+R", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container pt-4\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-3 \"],[9],[0,\"\\n        \"],[7,\"h1\"],[9],[0,\"Objetivo general de la EFA\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"Fortalecer las capacidades del Ministerio de Finanzas Públicas para utilizar los instrumentos fiscales y económicos existentes, así como proponer ejes estratégicos en aspectos ambientales de acuerdo a su ámbito de competencia.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-3 \"],[9],[0,\"\\n        \"],[7,\"h2\"],[9],[0,\"Ejes estratégicos\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-3 \"],[9],[0,\"\\n\"],[0,\"        \"],[7,\"h3\"],[9],[0,\"Calidad del gasto y compra pública\"],[10],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Objetivos\"],[10],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Incrementar la calidad del gasto administrativo, incorporando tecnologías limpias, buenas prácticas ambientales que  reduzcan costos, así como también reduzcan la contaminación ambiental, huella de carbono y mejoren la gestión de residuos sólidos y conservación de recursos hídricos.\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Promover compras y adquisiciones de bienes con características de sostenibilidad ambiental y garantizar el uso de proveedores que demuestren la implementación de condiciones mínimas en materia de cumplimiento de requerimientos de conservación y protección del medio ambiente.\"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Impactos\"],[10],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Reducción del gasto administrativo del Estado\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Eficiencia energética en edificios públicos\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Compra de productos sostenibles \"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Velar por el cumplimiento de normas ambientales - lineamientos técnicos para proveedores del Estado\"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-3 \"],[9],[0,\"\\n\"],[0,\"        \"],[7,\"h3\"],[9],[0,\"Asistencia financiera municipal\"],[10],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Objetivos\"],[10],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Facilitar la asistencia técnica, para el desarrollo de metodologías considerando incorporar la calidad del gasto en temas ambientales.\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Por medio de las diferentes herramientas tecnológicas (SICOIN GL, Servicios GL, SIAF Municipal, Portal de Gobierno Abierto) incentivará la transparencia fiscal.\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Orientar técnicamente a las Municipalidades para definir la priorización de temas vinculados con el ambiente en el marco de la formulación de sus presupuestos, incorporando asignaciones para protección ambiental y gestión de riesgo.\"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Impactos\"],[10],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Eficiencia  en  el  ingreso y gasto administrativo Municipal\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Calidad del gasto en inversiones relacionadas con medio ambiente\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Seguimiento en presupuesto por resultados en temas ambientales \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-3 \"],[9],[0,\"\\n\"],[0,\"        \"],[7,\"h3\"],[9],[0,\"Modelos fiscales ambientales\"],[10],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Objetivos\"],[10],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Desarrollar instrumentos económicos que promuevan la investigación científica aplicada, el emprendimiento verde y el reciclaje con el objetivo de crear nuevos productos de valor agregado y por ende nuevas plazas de empleo.\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Analizar el funcionamiento y la potencial reestructuración de los incentivos actualmente vigentes que podrían causar efectos negativos sobre el \"],[10],[0,\"ambiente.\\n            \"],[7,\"li\"],[9],[0,\"Evaluar herramientas tributarias de doble dividendo, que tengan el objetivo de reducir la contaminación ambiental e incrementar la recaudación. \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Impactos\"],[10],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Cambio de hábitos de uso y consumo y/o practicas contaminantes\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Reducción de flujos de desechos sólidos\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Reactivación económica derivada de la utilización de residuos \"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Emprendimiento verde e investigación aplicada\"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-3 \"],[9],[0,\"\\n\"],[0,\"        \"],[7,\"h3\"],[9],[0,\"Gestión de riesgo y contingencias ambientales\"],[10],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Objetivos\"],[10],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Desarrollar una estrategia financiera para la gestión de riesgos fiscales asociados a contingencias de contaminación ambiental.\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Fortalecer el inventario de bienes del Estado en riesgo.\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Implementar modelos analíticos y de simulación que faciliten la construcción de escenarios fiscales como resultado del impacto en contingencias ambientales y gestión de recursos naturales, que promuevan la progresividad de las medidas.\"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Impactos\"],[10],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Gestión financiera del Estado en casos de contingencias ambientales extremas\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Riesgos fiscales asociados a salud por contaminación de agua y aire\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Métodos analíticos y modelos de simulación del crecimiento económico, emisiones y contaminación\"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-3 \"],[9],[0,\"\\n\"],[0,\"        \"],[7,\"h3\"],[9],[0,\"Gestión de riesgo y contingencias ambientales\"],[10],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Objetivos\"],[10],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Desarrollar una estrategia financiera para la gestión de riesgos fiscales asociados a contingencias de contaminación ambiental.\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Fortalecer el inventario de bienes del Estado en riesgo.\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Implementar modelos analíticos y de simulación que faciliten la construcción de escenarios fiscales como resultado del impacto en contingencias ambientales y gestión de recursos naturales, que promuevan la progresividad de las medidas.\"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Impactos\"],[10],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Gestión financiera del Estado en casos de contingencias ambientales extremas\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Riesgos fiscales asociados a salud por contaminación de agua y aire\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Métodos analíticos y modelos de simulación del crecimiento económico, emisiones y contaminación\"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-3 \"],[9],[0,\"\\n\"],[0,\"        \"],[7,\"h3\"],[9],[0,\"Acceso a financiamiento verde y climático\"],[10],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Objetivos\"],[10],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Colaborar con las instituciones encargadas para perfeccionar la Cuenta Integrada de Gastos y Transacciones Ambientales, con el objetivo de identificar el gasto público en: ordenación de desechos, ordenación de aguas residuales, reducción de la contaminación y protección de la diversidad biológica y paisaje.\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Apoyar la generación de un portafolio de proyectos asociados a la protección del medio ambiente que demanden un alto grado de financiamiento.\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Establecer e implementar los mecanismos y procedimientos de acceso a fuentes de financiamiento verde, tanto nacionales como internacionales.\"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"h4\"],[9],[0,\"Impactos\"],[10],[0,\"\\n        \"],[7,\"ul\"],[9],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Actualización de Cuenta Integrada de Gastos y Transacciones Ambientales  (Cuentas Nacionales)\"],[10],[0,\"\\n            \"],[7,\"li\"],[9],[0,\"Apoyo para la generación del portafolio de posibles proyectos ante las diferentes iniciativas de financiamiento internacional \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/objetivo.hbs" } });
});
;define("estrategia-fiscal-ambiental/templates/vision", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lFJNwNai", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container pt-4\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"border p-4 rounded mt-2 m-md-0\"],[9],[0,\"\\n        \"],[7,\"h1\"],[9],[0,\"Visión\"],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"Ser la institución que cuenta con instrumentos fiscales y económicos con enfoque ambiental y de cambio climático para incentivar y orientar las acciones del Estado para el efectivo cumplimiento de la política económica y social del Gobierno de Guatemala.\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "estrategia-fiscal-ambiental/templates/vision.hbs" } });
});
;

;define('estrategia-fiscal-ambiental/config/environment', [], function() {
  var prefix = 'estrategia-fiscal-ambiental';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("estrategia-fiscal-ambiental/app")["default"].create({"name":"estrategia-fiscal-ambiental","version":"0.0.0+260d2f37"});
          }
        
//# sourceMappingURL=estrategia-fiscal-ambiental.map
