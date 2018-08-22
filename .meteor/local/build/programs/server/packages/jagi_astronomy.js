(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var check = Package.check.check;
var Match = Package.check.Match;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var EJSON = Package.ejson.EJSON;
var ValidationError = Package['mdg:validation-error'].ValidationError;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var onlyModules, extendDefinition, param;

var require = meteorInstall({"node_modules":{"meteor":{"jagi:astronomy":{"lib":{"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/main.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const module1 = module;
module1.export({
  Astro: () => Astro,
  Module: () => Module,
  Class: () => Class,
  Enum: () => Enum,
  Union: () => Union,
  Type: () => Type,
  Field: () => Field,
  ScalarField: () => ScalarField,
  ObjectField: () => ObjectField,
  ListField: () => ListField,
  Behavior: () => Behavior,
  Validator: () => Validator,
  Validators: () => Validators,
  ValidationError: () => ValidationError,
  Event: () => Event,
  reservedKeywords: () => reservedKeywords
});
module1.watch(require("./core/ejson.js"));
module1.watch(require("./modules/core/module.js"));
module1.watch(require("./modules/storage/module.js"));
module1.watch(require("./modules/behaviors/module.js"));
module1.watch(require("./modules/events/module.js"));
module1.watch(require("./modules/methods/module.js"));
module1.watch(require("./modules/helpers/module.js"));
module1.watch(require("./modules/fields/module.js"));
module1.watch(require("./modules/indexes/module.js"));
module1.watch(require("./modules/validators/module.js"));
let Config;
module1.watch(require("./core/config.js"), {
  default(v) {
    Config = v;
  }

}, 0);
let Module;
module1.watch(require("./core/module.js"), {
  default(v) {
    Module = v;
  }

}, 1);
let Class;
module1.watch(require("./core/class.js"), {
  default(v) {
    Class = v;
  }

}, 2);
let reservedKeywords;
module1.watch(require("./core/reserved_keywords.js"), {
  default(v) {
    reservedKeywords = v;
  }

}, 3);
let Enum;
module1.watch(require("./modules/fields/Enum.js"), {
  default(v) {
    Enum = v;
  }

}, 4);
let Union;
module1.watch(require("./modules/fields/Union.js"), {
  default(v) {
    Union = v;
  }

}, 5);
let Type;
module1.watch(require("./modules/fields/type.js"), {
  default(v) {
    Type = v;
  }

}, 6);
let Field;
module1.watch(require("./modules/fields/Field"), {
  default(v) {
    Field = v;
  }

}, 7);
let ScalarField;
module1.watch(require("./modules/fields/ScalarField"), {
  default(v) {
    ScalarField = v;
  }

}, 8);
let ObjectField;
module1.watch(require("./modules/fields/ObjectField"), {
  default(v) {
    ObjectField = v;
  }

}, 9);
let ListField;
module1.watch(require("./modules/fields/ListField"), {
  default(v) {
    ListField = v;
  }

}, 10);
let Behavior;
module1.watch(require("./modules/behaviors/behavior.js"), {
  default(v) {
    Behavior = v;
  }

}, 11);
let Validator;
module1.watch(require("./modules/validators/validator.js"), {
  default(v) {
    Validator = v;
  }

}, 12);
let Validators;
module1.watch(require("./modules/validators/validators.js"), {
  default(v) {
    Validators = v;
  }

}, 13);
let ValidationError;
module1.watch(require("meteor/mdg:validation-error"), {
  ValidationError(v) {
    ValidationError = v;
  }

}, 14);
let Event;
module1.watch(require("./modules/events/event.js"), {
  default(v) {
    Event = v;
  }

}, 15);
const Astro = {
  config: Config,
  Config,
  Module,
  Class,
  Enum,
  Union,
  Type,
  Field,
  ScalarField,
  ObjectField,
  ListField,
  Behavior,
  Validator,
  Validators,
  ValidationError,
  Event,
  reservedKeywords
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"core":{"class.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/core/class.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const module1 = module;

let _concat;

module1.watch(require("lodash/concat"), {
  default(v) {
    _concat = v;
  }

}, 0);

let _defaults;

module1.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 1);

let _each;

module1.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 2);

let _has;

module1.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 3);

let _includes;

module1.watch(require("lodash/includes"), {
  default(v) {
    _includes = v;
  }

}, 4);

let _intersection;

module1.watch(require("lodash/intersection"), {
  default(v) {
    _intersection = v;
  }

}, 5);

let _isNumber;

module1.watch(require("lodash/isNumber"), {
  default(v) {
    _isNumber = v;
  }

}, 6);
let EJSON;
module1.watch(require("meteor/ejson"), {
  EJSON(v) {
    EJSON = v;
  }

}, 7);
let config;
module1.watch(require("./config"), {
  default(v) {
    config = v;
  }

}, 8);
let throwParseError;
module1.watch(require("../modules/core/utils/throw_parse_error"), {
  default(v) {
    throwParseError = v;
  }

}, 9);
let cloneDefinition;
module1.watch(require("../modules/core/utils/cloneDefinition"), {
  default(v) {
    cloneDefinition = v;
  }

}, 10);
let castNested;
module1.watch(require("../modules/fields/utils/castNested"), {
  default(v) {
    castNested = v;
  }

}, 11);
let Module;
module1.watch(require("./module"), {
  default(v) {
    Module = v;
  }

}, 12);
let Event;
module1.watch(require("../modules/events/event"), {
  default(v) {
    Event = v;
  }

}, 13);
let Type;
module1.watch(require("../modules/fields/type"), {
  default(v) {
    Type = v;
  }

}, 14);
let Validators;
module1.watch(require("../modules/validators/validators"), {
  default(v) {
    Validators = v;
  }

}, 15);
let warn;
module1.watch(require("../modules/core/utils/warn"), {
  default(v) {
    warn = v;
  }

}, 16);

let initClass = function (Class) {
  // Create and store the schema "definition" object in the class constructor.
  // It's a combination of all parent definitions and a definition that
  // created this class. It's used to create child classes.
  Class.definition = {}; // Create and store the "schema" object in the class constructor. It's an
  // object that contains all the data related with a given class. The
  // "schema" object contains "computed" data of the schema "definition".
  // Thanks to that, Astronomy does not need to compute data on the fly and
  // everything works faster.

  Class.schema = {}; // Create empty array for storing child classes.

  Class.children = []; // Init the class schema and schema definition.

  Module.forEach(module => {
    module.onInitSchema(Class.schema, Class.getName());
    module.onInitDefinition(Class.definition, Class.getName());
  }); // We have to call the "onInitClass" hooks in the separate loop after
  // initiation of the schema and schema definition, because some
  // "onInitClass" hooks can execute the "Class.extend" method which requires
  // schema and schama definition to be initalized.

  Module.forEach(module => {
    module.onInitClass(Class, Class.getName());
  });
};

class Class {
  constructor(rawDoc = {}, options = {}) {
    // Set default options.
    _defaults(options, {
      // From version 2.3.0, we can turn off setting default values on fetching
      // so it will not populate fields that were excluded on find.
      defaults: config.defaults,
      // We clone values on document construction, but this option is overridden
      // in the "find" method and set to false, so it does not unnecessary clone
      // clone raw values.
      clone: true,
      cast: false
    });

    const doc = this;
    const Class = doc.constructor;

    if (!Class.getName()) {
      throw new Error('Can not create instance of the "Class" class');
    } // If there is the "_isNew" property passed to the class constructor, the
    // we use it to determine if a document is stored in collection. Otherwise
    // document is a new one.


    if (Class.getCollection()) {
      doc._isNew = _has(rawDoc, "_isNew") ? rawDoc._isNew : true;
    } // Trigger the "beforeInit" event handlers.


    doc.dispatchEvent(new Event("beforeInit")); // Set values in a document.

    _each(Class.getFieldsNames(), fieldName => {
      doc.set(fieldName, rawDoc[fieldName], options);
    }); // Trigger the "afterInit" event handlers.


    doc.dispatchEvent(new Event("afterInit"));
  } // Method needed for EJSONification.


  typeName() {
    return "Astronomy";
  }

  toJSONValue(args) {
    let doc = this;
    let Class = doc.constructor;
    let json = {
      class: Class.getName()
    }; // Trigger the "toJSONValue" event handlers.

    doc.dispatchEvent(new Event("toJSONValue", {
      json: json
    }));
    return json;
  }

  static getName() {
    return this.className;
  }

  static getParent() {
    if (this.parentClassName) {
      return this.get(this.parentClassName);
    }
  }
  /**
   * @param {(Number|Boolean)} depth - The depth to which look for children, or "true" to get all children.
   */


  static getChildren(depth = 1) {
    const classes = [];

    if (!depth) {
      return classes;
    }

    classes.push(...this.children);

    if (_isNumber(depth)) {
      depth--;
    }

    _each(this.children, Child => {
      classes.push(...Child.getChildren(depth));
    });

    return classes;
  }

  static create(definition) {
    // Get class name.
    let className = definition.name; // Warn about class duplicate.

    if (_has(this.classes, className)) {
      warn(`Duplicate of the "${className}" class`);
    } // Extend the Class class.


    let Class = this.classes[className] = class Class extends this {}; // Store the class name in the constructor.

    Class.className = className; // Initialize class.

    initClass(Class); // Extend class with a definition.

    Class.extend(definition); // Register a new type.

    Type.create({
      name: className,
      class: Class,

      validate(args) {
        // Add current class as a param of validator.
        args.param = Class;
        Validators.class(args);
      }

    });
    return Class;
  }

  static inherit(definition) {
    const Parent = this;
    const className = definition.name; // Warn about class duplicate.

    if (_has(this.classes, className)) {
      warn(`Duplicate of the "${className}" class`);
    } // Extend the parent class.


    const Class = this.classes[className] = class Class extends Parent {}; // Store the class name in the constructor.

    Class.className = className; // Store the parent class name in the constructor.

    Class.parentClassName = Parent.getName(); // Initialize class.

    initClass(Class); // Store child class in the parent class.

    Parent.children.push(Class); // Extend class with the parent class definition.

    Class.extend(Parent.definition); // Extend class with the definition.

    Class.extend(definition); // Register a new type.

    Type.create({
      name: className,
      class: Class,

      validate(args) {
        // Add current class as a param of validator.
        args.param = Class;
        Validators.class(args);
      }

    });
    return Class;
  }

  static extend(extendDefinition, onlyModules = []) {
    if (typeof onlyModules === "string") {
      onlyModules = [onlyModules];
    }

    if (!Match.test(onlyModules, [String])) {
      throwParseError([{
        class: this.getName()
      }, {
        method: "extend"
      }, "The second argument has to be a string or an array of strings"]);
    } // Clone definition to not modify the original one.


    extendDefinition = cloneDefinition(extendDefinition);
    Module.forEach(module => {
      // If the second argument was passed, then we only run module hooks for
      // modules that were listed in the second argument.
      if (onlyModules.length > 0 && !_includes(onlyModules, module.name) && _intersection(onlyModules, module.aliases).length === 0) {
        return;
      } // Initialize parsed definition.


      let parsedDefinition = {};
      module.onInitDefinition(parsedDefinition, Class.getName()); // Parse the extending definition and put parsed properties in the parsed
      // definition.

      module.onParseDefinition(parsedDefinition, extendDefinition, this.getName()); // Apply parsed definition.

      module.onApplyDefinition(this, parsedDefinition, this.getName()); // Merge parsed definition with a class definition.

      module.onMergeDefinitions(this.definition, parsedDefinition, this.getName()); // Finalize class creation.

      module.onFinalizeClass(this, this.getName());
    }); // Extend children.

    const children = this.getChildren();

    _each(children, ChildClass => {
      ChildClass.extend(extendDefinition, onlyModules);
    });
  }

  static get(className) {
    return this.classes[className];
  }

  static has(className) {
    return _has(this.classes, className);
  }

  static includes(Class) {
    return _includes(this.classes, Class);
  }

  static isParentOf(Class) {
    if (!Class || !Class.prototype) {
      return false;
    }

    return this.prototype.isPrototypeOf(Class.prototype);
  }

  static isChildOf(Class) {
    if (!Class || !Class.prototype) {
      return false;
    }

    return Class.prototype.isPrototypeOf(this.prototype);
  }

  static isNew(doc, isNew) {
    if (arguments.length === 2) {
      doc._isNew = isNew;
    } else {
      return doc._isNew;
    }
  }

}

Class.classes = {};
module1.exportDefault(Class);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"config.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/core/config.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const Config = {
  verbose: true,
  resolving: true,
  defaults: true
};
module.exportDefault(Config);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ejson.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/core/ejson.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let AstroClass;
module.watch(require("./class.js"), {
  default(v) {
    AstroClass = v;
  }

}, 0);
let Event;
module.watch(require("../modules/events/event.js"), {
  default(v) {
    Event = v;
  }

}, 1);
EJSON.addType('Astronomy', function (json) {
  let Class = AstroClass.get(json.class);
  let doc = new Class(); // Trigger the "fromJSONValue" event handlers.

  doc.dispatchEvent(new Event('fromJSONValue', {
    json: json
  }));
  return doc;
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"module.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/core/module.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const module1 = module;

let _each;

module1.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);
let throwParseError;
module1.watch(require("../modules/core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 1);

class Module {
  constructor(definition) {
    if (!Match.test(definition, Object)) {
      throwParseError(['Module definition has to be an object']);
    } // Set module name.


    if (!Match.test(definition.name, String)) {
      throwParseError(['Module name has to be a string']);
    }

    this.name = definition.name; // Set module aliases.

    if (!Match.test(definition.aliases, Match.Maybe([String]))) {
      throwParseError([`Module aliases has to be an array of strings in the "${this.name}" module`]);
    }

    this.aliases = definition.aliases; // Set module hooks.

    _each(['onInitSchema', 'onInitDefinition', 'onInitClass', 'onParseDefinition', 'onApplyDefinition', 'onMergeDefinitions', 'onFinalizeClass'], hookName => {
      if (definition[hookName] === undefined) {
        return;
      }

      if (!Match.test(definition[hookName], Function)) {
        throwParseError([{
          'module': this.name
        }, {
          'property': hookName
        }, `The "${hookName}" hook has to be a function`]);
      }

      this[hookName] = definition[hookName];
    }); // Set module utils.


    if (definition.utils) {
      if (!Match.test(definition.utils, Object)) {
        throwParseError([{
          'module': this.name
        }, {
          'property': 'utils'
        }, 'Utilities definition has to be an object']);
      }

      this.utils = {};

      _each(definition.utils, (method, methodName) => {
        if (!Match.test(method, Function)) {
          throwParseError([{
            'module': this.name
          }, {
            'property': 'utils'
          }, {
            'method': methodName
          }, 'Utility has to be a function']);
        }

        this.utils[methodName] = method;
      });
    }
  }

  onInitSchema(schema, className) {}

  onInitDefinition(definition, className) {}

  onInitClass(Class, className) {}

  onParseDefinition(parsedDefinition, definition, className) {}

  onApplyDefinition(Class, definition, className) {}

  onMergeDefinitions(targetDefinition, sourceDefinition, className) {}

  onFinalizeClass(Class, className) {}

  static create(definition) {
    let module = new this(definition);
    this.modules[module.name] = module;
    this.modulesOrder.push(module.name);
    return module;
  }

  static get(moduleName) {
    return this.modules[moduleName];
  }

  static forEach(iteratee) {
    if (!Match.test(iteratee, Function)) {
      throwParseError(['The first argument of the "Module.forEach" method has to be a function']);
    }

    _each(this.modulesOrder, moduleName => {
      iteratee(this.modules[moduleName]);
    });
  }

}

;
Module.modules = {};
Module.modulesOrder = [];
module1.exportDefault(Module);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reserved_keywords.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/core/reserved_keywords.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const reservedNames = ['_isNew', 'copy', 'dispatchEvent', 'get', 'getModified', 'getModifiedValues', 'getModifier', 'isModified', 'raw', 'reload', 'remove', 'save', 'set', 'toJSONValue', 'typeName', 'validate', 'validateAll'];
module.exportDefault(reservedNames);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"modules":{"behaviors":{"behavior.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/behaviors/behavior.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 0);

let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 1);
let throwParseError;
module.watch(require("../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 2);

const checkDefinition = function (definition) {
  // Check parameters validity.
  if (!Match.test(definition, Object)) {
    throwParseError(['Behavior definition has to be an object']);
  } // Check if behavior name is provided and is a string.


  if (!Match.test(definition.name, String)) {
    throwParseError(['Behavior has to be named']);
  } // Check if behavior with a given name already exists.


  if (_has(Behavior.behaviors, definition.name)) {
    throwParseError([{
      'behavior': definition.name
    }, 'Behavior already exists']);
  }
};

class Behavior {
  constructor(options) {
    this.options = _extend({}, this.options, options);
  }

  createClassDefinition() {}

  apply(Class) {
    let definition = this.createClassDefinition();

    if (definition) {
      Class.extend(definition);
    }
  }

  static create(definition) {
    checkDefinition(definition); // Get behavior name.

    let behaviorName = definition.name; // Extend the Behavior class.

    let Behavior = this.behaviors[behaviorName] = class Behavior extends this {}; // Store definition in behavior class.

    Behavior.definition = definition; // Extend prototype with a definition.

    _extend(Behavior.prototype, definition);

    return Behavior;
  }

  static get(behaviorName) {
    return this.behaviors[behaviorName];
  }

  static has(behaviorName) {
    return _has(this.behaviors, behaviorName);
  }

}

;
Behavior.behaviors = {};
module.exportDefault(Behavior);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"module.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/behaviors/module.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const module1 = module;
let Module;
module1.watch(require("../../core/module.js"), {
  default(v) {
    Module = v;
  }

}, 0);
let onInitSchema;
module1.watch(require("./hooks/init_schema.js"), {
  default(v) {
    onInitSchema = v;
  }

}, 1);
let onInitDefinition;
module1.watch(require("./hooks/init_definition.js"), {
  default(v) {
    onInitDefinition = v;
  }

}, 2);
let onParseDefinition;
module1.watch(require("./hooks/parse_definition.js"), {
  default(v) {
    onParseDefinition = v;
  }

}, 3);
let onMergeDefinitions;
module1.watch(require("./hooks/merge_definitions.js"), {
  default(v) {
    onMergeDefinitions = v;
  }

}, 4);
let onApplyDefinition;
module1.watch(require("./hooks/apply_definition.js"), {
  default(v) {
    onApplyDefinition = v;
  }

}, 5);
let onInitClass;
module1.watch(require("./hooks/init_class.js"), {
  default(v) {
    onInitClass = v;
  }

}, 6);
Module.create({
  name: 'behaviors',
  onInitSchema: onInitSchema,
  onInitDefinition: onInitDefinition,
  onParseDefinition: onParseDefinition,
  onMergeDefinitions: onMergeDefinitions,
  onApplyDefinition: onApplyDefinition,
  onInitClass: onInitClass
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class_static_methods":{"get_behavior.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/behaviors/class_static_methods/get_behavior.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getBehavior(behaviorName) {
  return this.schema.behaviors[behaviorName];
}

;
module.exportDefault(getBehavior);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_behaviors.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/behaviors/class_static_methods/get_behaviors.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getBehaviors() {
  return this.schema.behaviors;
}

;
module.exportDefault(getBehaviors);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"has_behavior.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/behaviors/class_static_methods/has_behavior.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 0);

function hasBehavior(behaviorName) {
  return _has(this.schema.behaviors, behaviorName);
}

;
module.exportDefault(hasBehavior);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"hooks":{"apply_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/behaviors/hooks/apply_definition.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);
let Behavior;
module.watch(require("../behavior.js"), {
  default(v) {
    Behavior = v;
  }

}, 1);

function onApplyDefinition(Class, parsedDefinition, className) {
  let schema = Class.schema; // Add behaviors to the class.

  _each(parsedDefinition.behaviors, (behaviorsOptions, behaviorName) => {
    // Get the behavior class.
    let BehaviorClass = Behavior.get(behaviorName);

    _each(behaviorsOptions, behaviorOptions => {
      // Create the behavior instance passing behavior options.
      let behavior = new BehaviorClass(behaviorOptions); // Add behavior to the schema.

      schema.behaviors[behaviorName] = schema.behaviors[behaviorName] || [];
      schema.behaviors[behaviorName].push(behavior); // Apply behavior to the class.

      behavior.apply(Class);
    });
  });
}

;
module.exportDefault(onApplyDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_class.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/behaviors/hooks/init_class.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let getBehavior;
module.watch(require("../class_static_methods/get_behavior.js"), {
  default(v) {
    getBehavior = v;
  }

}, 0);
let getBehaviors;
module.watch(require("../class_static_methods/get_behaviors.js"), {
  default(v) {
    getBehaviors = v;
  }

}, 1);
let hasBehavior;
module.watch(require("../class_static_methods/has_behavior.js"), {
  default(v) {
    hasBehavior = v;
  }

}, 2);

function onInitClass(Class, className) {
  Class.getBehavior = getBehavior;
  Class.getBehaviors = getBehaviors;
  Class.hasBehavior = hasBehavior;
}

;
module.exportDefault(onInitClass);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/behaviors/hooks/init_definition.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitDefinition(definition, className) {
  definition.behaviors = {};
}

;
module.exportDefault(onInitDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_schema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/behaviors/hooks/init_schema.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitSchema(schema, className) {
  schema.behaviors = {};
}

;
module.exportDefault(onInitSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"merge_definitions.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/behaviors/hooks/merge_definitions.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

function onMergeDefinitions(targetDefinition, sourceDefinition, ClassName) {
  _each(sourceDefinition.behaviors, (behaviors, behaviorName) => {
    targetDefinition.behaviors[behaviorName] = targetDefinition.behaviors[behaviorName] || [];
    targetDefinition.behaviors[behaviorName].push(...behaviors);
  });
}

;
module.exportDefault(onMergeDefinitions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"parse_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/behaviors/hooks/parse_definition.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 1);
let Behavior;
module.watch(require("../behavior.js"), {
  default(v) {
    Behavior = v;
  }

}, 2);

function onParseDefinition(parsedDefinition, definition, className) {
  // Check existence of the "behaviors" property.
  if (definition.behaviors !== undefined) {
    if (!Match.test(definition.behaviors, Match.OneOf([String], Object))) {
      throwParseError([{
        'class': className
      }, {
        'property': 'behaviors'
      }, `Behaviors definition has to be an array of behaviors' names or an ` + `object with behaviors' options`]);
    }

    _each(definition.behaviors, function (behaviorOptions, behaviorName) {
      // If we deal with an array of behaviors' names, then behavior options is
      // an empty object.
      if (typeof behaviorOptions === 'string') {
        behaviorName = behaviorOptions;
        behaviorOptions = [{}];
      } // Check if behavior with a given name exists.


      if (!Behavior.has(behaviorName)) {
        throwParseError([{
          'class': className
        }, {
          'behavior': behaviorName
        }, 'Behavior does not exist']);
      } // Behavior options has to be an object or an array of objects, when we
      // are adding multiple behaviors of the same type.


      if (!Match.test(behaviorOptions, Match.OneOf(Object, [Object]))) {
        throwParseError([{
          'class': className
        }, {
          'behavior': behaviorName
        }, 'Behavior options have to be an object or an array of objects']);
      } // Make sure that behavior options is an array of objects.


      if (!Match.test(behaviorOptions, Array)) {
        behaviorOptions = [behaviorOptions];
      }

      parsedDefinition.behaviors[behaviorName] = behaviorOptions;
    });
  }
}

;
module.exportDefault(onParseDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"core":{"module.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/core/module.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const module1 = module;
let Module;
module1.watch(require("../../core/module.js"), {
  default(v) {
    Module = v;
  }

}, 0);
let cloneDefinition;
module1.watch(require("./utils/cloneDefinition"), {
  default(v) {
    cloneDefinition = v;
  }

}, 1);
let deprecated;
module1.watch(require("./utils/deprecated.js"), {
  default(v) {
    deprecated = v;
  }

}, 2);
let overrideMethod;
module1.watch(require("./utils/override_method.js"), {
  default(v) {
    overrideMethod = v;
  }

}, 3);
let throwParseError;
module1.watch(require("./utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 4);
let warn;
module1.watch(require("./utils/warn.js"), {
  default(v) {
    warn = v;
  }

}, 5);
Module.create({
  name: 'core',
  utils: {
    cloneDefinition,
    deprecated,
    overrideMethod,
    throwParseError,
    warn
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"utils":{"cloneDefinition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/core/utils/cloneDefinition.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _cloneDeepWith;

module.watch(require("lodash/cloneDeepWith"), {
  default(v) {
    _cloneDeepWith = v;
  }

}, 0);

let _isPlainObject;

module.watch(require("lodash/isPlainObject"), {
  default(v) {
    _isPlainObject = v;
  }

}, 1);

let _isArray;

module.watch(require("lodash/isArray"), {
  default(v) {
    _isArray = v;
  }

}, 2);

function cloneDefinition(definition) {
  return _cloneDeepWith(definition, value => {
    if (!_isPlainObject(value) && !_isArray(value)) {
      return value;
    }
  });
}

module.exportDefault(cloneDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"deprecated.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/core/utils/deprecated.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let config;
module.watch(require("../../../core/config"), {
  default(v) {
    config = v;
  }

}, 0);
let warn;
module.watch(require("./warn"), {
  default(v) {
    warn = v;
  }

}, 1);

function deprecated(message) {
  // Be silent and do not log any warnings.
  if (!config.verbose) {
    return;
  } // Print message to the console.


  warn(`Deprecation warning: ${message}`);
}

module.exportDefault(deprecated);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"override_method.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/core/utils/override_method.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _toArray;

module.watch(require("lodash/toArray"), {
  default(v) {
    _toArray = v;
  }

}, 0);

function overrideMethod(object, methodName, overridingMethod, param) {
  // Get original method.
  let originalMethod = object[methodName]; // Override original method.

  object[methodName] = function () {
    // Convert arguments to array.
    let args = _toArray(arguments); // Execute overriding method passing arguments, original method and extra
    // parameters.


    return overridingMethod.call(this, args, originalMethod, param);
  };
}

;
module.exportDefault(overrideMethod);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"throw_parse_error.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/core/utils/throw_parse_error.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _isObject;

module.watch(require("lodash/isObject"), {
  default(v) {
    _isObject = v;
  }

}, 1);

function throwParseError(details) {
  let message = '';

  _each(details, detail => {
    if (_isObject(detail)) {
      _each(detail, (value, key) => {
        message += '["' + value + '" ' + key + ']';
      });
    } else if (typeof detail === 'string') {
      message += ' ' + detail;
    }
  });

  throw new TypeError(message);
}

;
module.exportDefault(throwParseError);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"warn.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/core/utils/warn.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let config;
module.watch(require("../../../core/config.js"), {
  default(v) {
    config = v;
  }

}, 0);

function warn(warning) {
  // Be silent and do not log any warnings.
  if (!config.verbose) {
    return;
  }

  try {
    console.warn(warning);
  } catch (error) {}
}

module.exportDefault(warn);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"events":{"event.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/events/event.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 0);

class Event {
  constructor(type, data) {
    this.cancelable = false;
    this.propagates = false;

    _extend(this, data);

    this.type = type.toLowerCase();
    this.timeStamp = Date.now();
    this.target = null;
    this.currentTarget = null;
    this.defaultPrevented = false;
    this.propagationStopped = false;
    this.immediatePropagationStopped = false;
  }

  preventDefault() {
    this.defaultPrevented = true;
  }

  stopPropagation() {
    this.propagationStopped = true;
  }

  stopImmediatePropagation() {
    this.immediatePropagationStopped = true;
    this.stopPropagation();
  }

}

;
module.exportDefault(Event);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"module.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/events/module.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const module1 = module;
let Module;
module1.watch(require("../../core/module.js"), {
  default(v) {
    Module = v;
  }

}, 0);
let onInitSchema;
module1.watch(require("./hooks/init_schema.js"), {
  default(v) {
    onInitSchema = v;
  }

}, 1);
let onInitDefinition;
module1.watch(require("./hooks/init_definition.js"), {
  default(v) {
    onInitDefinition = v;
  }

}, 2);
let onParseDefinition;
module1.watch(require("./hooks/parse_definition.js"), {
  default(v) {
    onParseDefinition = v;
  }

}, 3);
let onMergeDefinitions;
module1.watch(require("./hooks/merge_definitions.js"), {
  default(v) {
    onMergeDefinitions = v;
  }

}, 4);
let onApplyDefinition;
module1.watch(require("./hooks/apply_definition.js"), {
  default(v) {
    onApplyDefinition = v;
  }

}, 5);
let onInitClass;
module1.watch(require("./hooks/init_class.js"), {
  default(v) {
    onInitClass = v;
  }

}, 6);
Module.create({
  name: 'events',
  onInitSchema: onInitSchema,
  onInitDefinition: onInitDefinition,
  onParseDefinition: onParseDefinition,
  onMergeDefinitions: onMergeDefinitions,
  onApplyDefinition: onApplyDefinition,
  onInitClass: onInitClass
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class_prototype_methods":{"dispatch_event.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/events/class_prototype_methods/dispatch_event.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _every;

module.watch(require("lodash/every"), {
  default(v) {
    _every = v;
  }

}, 1);

let _isArray;

module.watch(require("lodash/isArray"), {
  default(v) {
    _isArray = v;
  }

}, 2);
let Event;
module.watch(require("../event.js"), {
  default(v) {
    Event = v;
  }

}, 3);
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 4);
let AstroClass;
module.watch(require("../../../core/class.js"), {
  default(v) {
    AstroClass = v;
  }

}, 5);

function returnFromDispatchEvent(event) {
  // If an event is cancelable and it had been canceled with the
  // "preventDefault" method call, then we return false.
  if (event.cancelable) {
    return !event.defaultPrevented;
  }

  return true;
}

function dispatchEvent(event) {
  const doc = this;
  const Class = doc.constructor;

  if (!Match.test(event, Event)) {
    throwParseError([{
      'class': Class.getName()
    }, {
      'method': 'dispatchEvent'
    }, 'The first argument has to be an event object']);
  } // Attach a document to the event as a target.


  if (event.target === null) {
    event.target = doc;
  }

  if (event.currentTarget === null) {
    event.currentTarget = doc;
  } // Get all event handlers of a given type.


  const eventHandlers = Class.getEvents(event.type);

  _every(eventHandlers, function (eventHandler) {
    eventHandler(event); // Stop execution of the following event handlers, if a flag is set.

    return !event.immediatePropagationStopped;
  }); // If propagation was stopped or bubbling is turned off, then we don't go
  // deeper into nested fields.


  if (event.propagationStopped || !event.propagates) {
    return returnFromDispatchEvent(event);
  } // Object fields.


  _each(Class.getObjectFields(), function (field) {
    let value = doc[field.name];

    if (value instanceof AstroClass) {
      event.currentTarget = value;
      value.dispatchEvent(event);
    }
  }); // List fields.


  _each(Class.getListFields(), function (field) {
    let value = doc[field.name];

    if (field.isClass && _isArray(value)) {
      _each(value, function (element) {
        if (element instanceof AstroClass) {
          event.currentTarget = element;
          element.dispatchEvent(event);
        }
      });
    }
  });

  return returnFromDispatchEvent(event);
}

module.exportDefault(dispatchEvent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"class_static_methods":{"dispatch_event.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/events/class_static_methods/dispatch_event.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _every;

module.watch(require("lodash/every"), {
  default(v) {
    _every = v;
  }

}, 0);
let Event;
module.watch(require("../event"), {
  default(v) {
    Event = v;
  }

}, 1);
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error"), {
  default(v) {
    throwParseError = v;
  }

}, 2);

function returnFromDispatchEvent(event) {
  // If an event is cancelable and it had been canceled with the
  // "preventDefault" method call, then we return false.
  if (event.cancelable) {
    return !event.defaultPrevented;
  }

  return true;
}

function dispatchEvent(event) {
  const Class = this; // Get all event handlers of a given type.

  const eventHandlers = Class.getEvents(event.type); // If there are no event of a fiven type, then just return true.

  if (eventHandlers.length === 0) {
    return true;
  } // Attach a document to the event as a target.


  if (event.target === null) {
    event.target = Class;
  }

  if (event.currentTarget === null) {
    event.currentTarget = Class;
  }

  _every(eventHandlers, eventHandler => {
    eventHandler(event); // Stop execution of the following event handlers, if a flag is set.

    return !event.immediatePropagationStopped;
  });

  return returnFromDispatchEvent(event);
}

module.exportDefault(dispatchEvent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_events.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/events/class_static_methods/get_events.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getEvents(eventName) {
  let Class = this;

  if (eventName) {
    eventName = eventName.toLowerCase();
    return Class.schema.events[eventName] || [];
  }

  return Class.schema.events;
}

module.exportDefault(getEvents);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hasEvent.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/events/class_static_methods/hasEvent.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _get;

module.watch(require("lodash/get"), {
  default(v) {
    _get = v;
  }

}, 0);

let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 1);

let _includes;

module.watch(require("lodash/includes"), {
  default(v) {
    _includes = v;
  }

}, 2);

function hasEvent(eventName, eventHandler) {
  const Class = this;
  eventName = eventName.toLowerCase();

  if (arguments.length === 2) {
    return _includes(_get(Class.schema.events, eventName), eventHandler);
  } else if (arguments.length === 1) {
    return _has(Class.schema.events, eventName);
  }
}

module.exportDefault(hasEvent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"hooks":{"apply_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/events/hooks/apply_definition.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);

let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 1);

let _uniq;

module.watch(require("lodash/uniq"), {
  default(v) {
    _uniq = v;
  }

}, 2);

function onApplyDefinition(Class, parsedDefinition, className) {
  const schema = Class.schema; // Add events to the event manager.

  _each(parsedDefinition.events, function (eventHandlers, eventName) {
    eventName = eventName.toLowerCase(); // By default events list should be an empty array.

    _defaults(schema.events, {
      [eventName]: []
    }); // Add all events to the list.


    schema.events[eventName].push(...eventHandlers); // Make sure that there are no duplicates.

    schema.events[eventName] = _uniq(schema.events[eventName]);
  });
}

;
module.exportDefault(onApplyDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_class.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/events/hooks/init_class.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let dispatchEvent;
module.watch(require("../class_static_methods/dispatch_event.js"), {
  default(v) {
    dispatchEvent = v;
  }

}, 0);
let getEvents;
module.watch(require("../class_static_methods/get_events.js"), {
  default(v) {
    getEvents = v;
  }

}, 1);
let hasEvent;
module.watch(require("../class_static_methods/hasEvent"), {
  default(v) {
    hasEvent = v;
  }

}, 2);
let dispatchEventProto;
module.watch(require("../class_prototype_methods/dispatch_event.js"), {
  default(v) {
    dispatchEventProto = v;
  }

}, 3);

function onInitClass(Class, className) {
  // Class static methods.
  Class.dispatchEvent = dispatchEvent;
  Class.getEvents = getEvents;
  Class.hasEvent = hasEvent; // Class prototype methods.

  Class.prototype.dispatchEvent = dispatchEventProto;
}

module.exportDefault(onInitClass);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/events/hooks/init_definition.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitDefinition(definition, className) {
  definition.events = {};
}

;
module.exportDefault(onInitDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_schema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/events/hooks/init_schema.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitSchema(schema, className) {
  schema.events = {};
}

;
module.exportDefault(onInitSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"merge_definitions.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/events/hooks/merge_definitions.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);

let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 1);

let _uniq;

module.watch(require("lodash/uniq"), {
  default(v) {
    _uniq = v;
  }

}, 2);

function onMergeDefinitions(trgDefinition, srcDefinition, ClassName) {
  _each(srcDefinition.events, function (eventHandlers, eventName) {
    eventName = eventName.toLowerCase(); // By default events list should be an empty array.

    _defaults(trgDefinition.events, {
      [eventName]: []
    }); // Add all events to the list.


    trgDefinition.events[eventName].push(...eventHandlers); // Make sure that there are no duplicates.

    trgDefinition.events[eventName] = _uniq(trgDefinition.events[eventName]);
  });
}

;
module.exportDefault(onMergeDefinitions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"parse_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/events/hooks/parse_definition.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 1);

function onParseDefinition(parsedDefinition, definition, className) {
  // Check existence and validity of the "events" property.
  if (definition.events !== undefined) {
    _each(definition.events, function (eventHandlers, eventName) {
      eventName = eventName.toLowerCase(); // Check if the event definition is an array of functions.

      if (!Match.test(eventHandlers, Match.OneOf(Function, [Function]))) {
        throwParseError([{
          'class': className
        }, {
          'event': eventName
        }, 'Event handler has to be a function or an array of functions']);
      } // Convert function to array of functions.


      if (Match.test(eventHandlers, Function)) {
        eventHandlers = [eventHandlers];
      }

      parsedDefinition.events[eventName] = eventHandlers;
    });
  }
}

;
module.exportDefault(onParseDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"fields":{"Enum.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/Enum.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _zipObject;

module.watch(require("lodash/zipObject"), {
  default(v) {
    _zipObject = v;
  }

}, 0);

let _range;

module.watch(require("lodash/range"), {
  default(v) {
    _range = v;
  }

}, 1);

let _forOwn;

module.watch(require("lodash/forOwn"), {
  default(v) {
    _forOwn = v;
  }

}, 2);

let _isNil;

module.watch(require("lodash/isNil"), {
  default(v) {
    _isNil = v;
  }

}, 3);

let _isNumber;

module.watch(require("lodash/isNumber"), {
  default(v) {
    _isNumber = v;
  }

}, 4);

let _values;

module.watch(require("lodash/values"), {
  default(v) {
    _values = v;
  }

}, 5);

let _keys;

module.watch(require("lodash/keys"), {
  default(v) {
    _keys = v;
  }

}, 6);

let _indexOf;

module.watch(require("lodash/indexOf"), {
  default(v) {
    _indexOf = v;
  }

}, 7);

let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 8);
let Type;
module.watch(require("./type.js"), {
  default(v) {
    Type = v;
  }

}, 9);
let Validators;
module.watch(require("../validators/validators.js"), {
  default(v) {
    Validators = v;
  }

}, 10);
let check, Match;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  },

  Match(v) {
    Match = v;
  }

}, 11);
const enumDefinitionPattern = {
  name: String,
  identifiers: Match.OneOf(Array, Object)
};
const Enum = {
  create(definition) {
    check(definition, enumDefinitionPattern); // Get identifiers and values.

    let identifiers;

    if (Match.test(definition.identifiers, Array)) {
      identifiers = _zipObject(definition.identifiers, _range(definition.identifiers.length));
    } else if (Match.test(definition.identifiers, Object)) {
      identifiers = definition.identifiers;
      let i = 0;

      _forOwn(identifiers, function (value, key) {
        if (_isNil(value)) {
          identifiers[key] = i;
          i++;
        } else if (_isNumber(value)) {
          i = value + 1;
        }
      });
    }

    const values = _values(identifiers);

    const keys = _keys(identifiers); // Create a new Enum constructor.


    const Enum = function Enum(identifier) {
      return Enum[identifier];
    };

    Enum.getValues = function () {
      return values;
    };

    Enum.getIdentifiers = function () {
      return keys;
    };

    Enum.getIdentifier = function (value) {
      const index = _indexOf(values, value);

      return keys[index];
    }; // Set identifiers properties in the class.


    _each(identifiers, (value, name) => {
      if (Object.defineProperty) {
        Object.defineProperty(Enum, name, {
          writable: false,
          enumerable: true,
          value
        });
      } else {
        Enum[name] = value;
      }
    }); // Create type definition for the given enum.


    Type.create({
      name: definition.name,
      class: Enum,

      validate(args) {
        args.param = values;
        Validators.choice(args);
      }

    }); // Store enum in the enums list.

    this.enums[definition.name] = Enum;
    return Enum;
  },

  enums: {}
};
module.exportDefault(Enum);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Field.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/Field.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);

let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 1);

let _isNil;

module.watch(require("lodash/isNil"), {
  default(v) {
    _isNil = v;
  }

}, 2);
let Validators;
module.watch(require("../validators/validators.js"), {
  default(v) {
    Validators = v;
  }

}, 3);

class Field {
  constructor(definition = {}) {
    _defaults(definition, {
      optional: false,
      immutable: false,
      transient: false
    });

    _extend(this, definition);
  }

  getDefault(doc) {
    const value = typeof this.default === 'function' ? this.default(doc) : this.default;
    return this.castValue(value, {
      cast: true
    });
  }

  getOptional(doc) {
    if (typeof this.optional === 'function') {
      return this.optional(doc);
    }

    return this.optional;
  }

  validate(args) {
    // If a field is not optional (required) then it has to have value.
    if (!this.getOptional(args.doc)) {
      Validators.required(args);
    }
  }

  castValue(value, options) {
    if (!_isNil(value)) {
      return this.cast(value, options);
    }

    return value;
  }

  resolveValue(rawDoc) {
    if (!rawDoc) {
      return;
    }

    if (typeof this.resolve === 'function') {
      return this.resolve(rawDoc);
    }

    return rawDoc[this.name];
  }

}

;
module.exportDefault(Field);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ListField.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/ListField.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _isArray;

module.watch(require("lodash/isArray"), {
  default(v) {
    _isArray = v;
  }

}, 1);

let _isNil;

module.watch(require("lodash/isNil"), {
  default(v) {
    _isNil = v;
  }

}, 2);

let _isPlainObject;

module.watch(require("lodash/isPlainObject"), {
  default(v) {
    _isPlainObject = v;
  }

}, 3);

let _map;

module.watch(require("lodash/map"), {
  default(v) {
    _map = v;
  }

}, 4);
let Field;
module.watch(require("./Field"), {
  default(v) {
    Field = v;
  }

}, 5);
let AstroClass;
module.watch(require("../../core/class"), {
  default(v) {
    AstroClass = v;
  }

}, 6);
let Validators;
module.watch(require("../validators/validators"), {
  default(v) {
    Validators = v;
  }

}, 7);
let castToClass;
module.watch(require("./utils/castToClass"), {
  default(v) {
    castToClass = v;
  }

}, 8);
let resolveValues;
module.watch(require("./utils/resolveValues"), {
  default(v) {
    resolveValues = v;
  }

}, 9);

class ListField extends Field {
  constructor(definition = {}) {
    super(definition);
    this.isClass = AstroClass.isParentOf(this.type.class);
  }

  validate(args) {
    super.validate(args);
    var {
      doc,
      name,
      value
    } = args; // If a value is not empty.

    if (!_isNil(value)) {
      Validators.array(args);

      _each(value, (element, index) => {
        this.type.validate({
          doc,
          name: name + '.' + index,
          value: element
        });
      });
    }
  }

  cast(value, options) {
    if (options.element) {
      return this.type.cast(value, options);
    }

    if (value === '' && this.optional) {
      return null;
    } else if (_isArray(value)) {
      return _map(value, element => {
        // Class type.
        if (this.isClass) {
          // We only cast if a value is a plain object.
          if (_isPlainObject(element)) {
            // Cast value to an instance of the class.
            return castToClass({
              Class: this.type.class,
              rawDoc: element,
              options
            });
          }

          return element;
        } // Scalar type.
        else {
            // The "cast" option is only passed to the ObjectFields and ListFields.
            // Here we have to check if it's set, so we don't cast if user don't
            // want to.
            if (options.cast) {
              return this.type.cast.call(this, element);
            }

            return element;
          }
      });
    }

    return value;
  }

  resolveValue(rawDoc) {
    const resolvedValues = super.resolveValue(rawDoc);

    if (!this.isClass) {
      return resolvedValues;
    }

    return _map(resolvedValues, nestedRawDoc => {
      return resolveValues({
        Class: this.type.class,
        rawDoc: nestedRawDoc
      });
    });
  }

}

;
module.exportDefault(ListField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ObjectField.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/ObjectField.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isPlainObject;

module.watch(require("lodash/isPlainObject"), {
  default(v) {
    _isPlainObject = v;
  }

}, 0);
let Field;
module.watch(require("./Field"), {
  default(v) {
    Field = v;
  }

}, 1);
let castToClass;
module.watch(require("./utils/castToClass"), {
  default(v) {
    castToClass = v;
  }

}, 2);
let resolveValues;
module.watch(require("./utils/resolveValues"), {
  default(v) {
    resolveValues = v;
  }

}, 3);

class ObjectField extends Field {
  validate(args) {
    super.validate(args);
    this.type.validate(args);
  }

  cast(value, options) {
    if (value === '' && this.optional) {
      return null;
    } // We only cast if a value is a plain object.
    else if (_isPlainObject(value)) {
        // Cast value to an instance of the class.
        return castToClass({
          Class: this.type.class,
          rawDoc: value,
          options
        });
      }

    return value;
  }

  resolveValue(rawDoc) {
    return resolveValues({
      Class: this.type.class,
      rawDoc: super.resolveValue(rawDoc)
    });
  }

}

;
module.exportDefault(ObjectField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ScalarField.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/ScalarField.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isNil;

module.watch(require("lodash/isNil"), {
  default(v) {
    _isNil = v;
  }

}, 0);
let Field;
module.watch(require("./Field"), {
  default(v) {
    Field = v;
  }

}, 1);

class ScalarField extends Field {
  cast(value) {
    return this.type.cast.call(this, value);
  }

  validate(args) {
    super.validate(args);
    var {
      value
    } = args;

    if (!_isNil(value)) {
      return this.type.validate(args);
    }
  }

}

;
module.exportDefault(ScalarField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Union.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/Union.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _clone;

module.watch(require("lodash/clone"), {
  default(v) {
    _clone = v;
  }

}, 0);

let _some;

module.watch(require("lodash/some"), {
  default(v) {
    _some = v;
  }

}, 1);
let Type;
module.watch(require("./type.js"), {
  default(v) {
    Type = v;
  }

}, 2);
let Validators;
module.watch(require("../validators/validators.js"), {
  default(v) {
    Validators = v;
  }

}, 3);
let check, Match;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  },

  Match(v) {
    Match = v;
  }

}, 4);
const unionDefinitionPattern = {
  name: String,
  types: [Function],
  cast: Match.Optional(Function)
};
const Union = {
  create(definition) {
    check(definition, unionDefinitionPattern); // Create a new Union constructor.

    const Union = function Union(identifier) {
      return Union[identifier];
    }; // Copy list of types to the union constructor.


    Union.types = _clone(definition.types); // Copy casting function to the union constructor if defined.

    if (typeof definition.cast === 'function') {
      Union.cast = definition.cast;
    } // Create type definition for the given enum.


    Type.create({
      name: definition.name,
      class: Union,

      cast(value) {
        return Union.cast ? Union.cast(value) : value;
      },

      validate(args) {
        const caughtErrors = []; // Check if a value will pass validation executed by any of the union
        // types.

        if (!_some(Union.types, TypeClass => {
          const AstroType = Type.find(TypeClass);

          try {
            AstroType.validate(args);
            return true;
          } catch (err) {
            caughtErrors.push(err);
            return false;
          }
        })) {
          throw caughtErrors[0];
        }
      }

    }); // Store enum in the unions list.

    this.unions[definition.name] = Union;
    return Union;
  },

  unions: {}
};
module.exportDefault(Union);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"module.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/module.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const module1 = module;
let Module;
module1.watch(require("../../core/module.js"), {
  default(v) {
    Module = v;
  }

}, 0);
module1.watch(require("./types/boolean.js"));
module1.watch(require("./types/date.js"));
module1.watch(require("./types/mongo_object_id.js"));
module1.watch(require("./types/number.js"));
module1.watch(require("./types/object.js"));
module1.watch(require("./types/string.js"));
let castNested;
module1.watch(require("./utils/castNested"), {
  default(v) {
    castNested = v;
  }

}, 1);
let getAll;
module1.watch(require("./utils/getAll"), {
  default(v) {
    getAll = v;
  }

}, 2);
let getMany;
module1.watch(require("./utils/getMany"), {
  default(v) {
    getMany = v;
  }

}, 3);
let getOne;
module1.watch(require("./utils/getOne"), {
  default(v) {
    getOne = v;
  }

}, 4);
let isNestedFieldName;
module1.watch(require("./utils/isNestedFieldName"), {
  default(v) {
    isNestedFieldName = v;
  }

}, 5);
let rawAll;
module1.watch(require("./utils/rawAll"), {
  default(v) {
    rawAll = v;
  }

}, 6);
let rawMany;
module1.watch(require("./utils/rawMany"), {
  default(v) {
    rawMany = v;
  }

}, 7);
let rawOne;
module1.watch(require("./utils/rawOne"), {
  default(v) {
    rawOne = v;
  }

}, 8);
let setAll;
module1.watch(require("./utils/set_all.js"), {
  default(v) {
    setAll = v;
  }

}, 9);
let setMany;
module1.watch(require("./utils/set_many.js"), {
  default(v) {
    setMany = v;
  }

}, 10);
let setOne;
module1.watch(require("./utils/set_one.js"), {
  default(v) {
    setOne = v;
  }

}, 11);
let traverse;
module1.watch(require("./utils/traverse.js"), {
  default(v) {
    traverse = v;
  }

}, 12);
let onInitSchema;
module1.watch(require("./hooks/init_schema.js"), {
  default(v) {
    onInitSchema = v;
  }

}, 13);
let onInitDefinition;
module1.watch(require("./hooks/init_definition.js"), {
  default(v) {
    onInitDefinition = v;
  }

}, 14);
let onParseDefinition;
module1.watch(require("./hooks/parse_definition.js"), {
  default(v) {
    onParseDefinition = v;
  }

}, 15);
let onMergeDefinitions;
module1.watch(require("./hooks/merge_definitions.js"), {
  default(v) {
    onMergeDefinitions = v;
  }

}, 16);
let onApplyDefinition;
module1.watch(require("./hooks/apply_definition.js"), {
  default(v) {
    onApplyDefinition = v;
  }

}, 17);
let onInitClass;
module1.watch(require("./hooks/init_class.js"), {
  default(v) {
    onInitClass = v;
  }

}, 18);
Module.create({
  name: 'fields',
  onInitSchema,
  onInitDefinition,
  onParseDefinition,
  onMergeDefinitions,
  onApplyDefinition,
  onInitClass,
  utils: {
    castNested,
    getAll,
    getMany,
    getOne,
    isNestedFieldName,
    rawAll,
    rawMany,
    rawOne,
    setAll,
    setMany,
    setOne,
    traverse
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"type.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/type.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _find;

module.watch(require("lodash/find"), {
  default(v) {
    _find = v;
  }

}, 0);

let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 1);
let Validators;
module.watch(require("../validators/validators.js"), {
  default(v) {
    Validators = v;
  }

}, 2);
let warn;
module.watch(require("../core/utils/warn"), {
  default(v) {
    warn = v;
  }

}, 3);
const typeDefinitionPattern = {
  name: String,
  class: Match.Any,
  cast: Match.Optional(Function),
  validate: Match.Optional(Function)
};
const enumDefinitionPattern = {
  name: String,
  options: Object
};

class Type {
  constructor(definition) {
    check(definition, typeDefinitionPattern);
    this.name = definition.name;
    this.class = definition.class;

    if (typeof definition.validate === "function") {
      this.validate = definition.validate;
    }

    if (typeof definition.cast === "function") {
      this.cast = definition.cast;
    }
  }

  cast(value) {
    return value;
  }

  validate(doc, fieldName) {
    return true;
  }

  static create(definition) {
    let type = new Type(definition); // Warn about class duplicate.

    if (_has(this.types, type.name)) {
      warn(`Duplicate of the "${type.name}" type`);
    }

    this.types[type.name] = type;
  }

  static get(name) {
    return this.types[name];
  }

  static has(name) {
    return _has(this.types, name);
  }

  static find(Class) {
    return _find(this.types, type => {
      return type.class.prototype === Class.prototype;
    });
  }

}

Type.types = {};
module.exportDefault(Type);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class_events":{"from_json_value.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/class_events/from_json_value.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function fromJSONValue(e) {
  let doc = e.currentTarget;
  doc.set(EJSON.parse(e.json.values), {
    defaults: false,
    clone: false,
    cast: false
  });
}

module.exportDefault(fromJSONValue);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"to_json_value.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/class_events/to_json_value.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let getAll;
module.watch(require("../utils/getAll"), {
  default(v) {
    getAll = v;
  }

}, 0);

function toJSONValue(e) {
  let doc = e.currentTarget;
  e.json.values = EJSON.stringify(getAll(doc));
}

;
module.exportDefault(toJSONValue);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"class_prototype_methods":{"get.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/class_prototype_methods/get.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isArray;

module.watch(require("lodash/isArray"), {
  default(v) {
    _isArray = v;
  }

}, 0);

let _isPlainObject;

module.watch(require("lodash/isPlainObject"), {
  default(v) {
    _isPlainObject = v;
  }

}, 1);
let getAll;
module.watch(require("../utils/getAll"), {
  default(v) {
    getAll = v;
  }

}, 2);
let getMany;
module.watch(require("../utils/getMany"), {
  default(v) {
    getMany = v;
  }

}, 3);
let getOne;
module.watch(require("../utils/getOne"), {
  default(v) {
    getOne = v;
  }

}, 4);

function get(...args) {
  if (args.length === 0) {
    return getAll(this);
  } else if (args.length >= 1) {
    if (typeof args[0] === 'string') {
      return getOne(this, ...args);
    } else if (_isArray(args[0])) {
      return getMany(this, ...args);
    } else if (_isPlainObject(args[0])) {
      return getAll(this, ...args);
    }
  }
}

;
module.exportDefault(get);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"raw.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/class_prototype_methods/raw.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isArray;

module.watch(require("lodash/isArray"), {
  default(v) {
    _isArray = v;
  }

}, 0);

let _isPlainObject;

module.watch(require("lodash/isPlainObject"), {
  default(v) {
    _isPlainObject = v;
  }

}, 1);
let rawAll;
module.watch(require("../utils/rawAll"), {
  default(v) {
    rawAll = v;
  }

}, 2);
let rawMany;
module.watch(require("../utils/rawMany"), {
  default(v) {
    rawMany = v;
  }

}, 3);
let rawOne;
module.watch(require("../utils/rawOne"), {
  default(v) {
    rawOne = v;
  }

}, 4);

function raw(...args) {
  if (args.length === 0) {
    return rawAll(this);
  } else if (args.length >= 1) {
    if (typeof args[0] === 'string') {
      return rawOne(this, ...args);
    } else if (_isArray(args[0])) {
      return rawMany(this, ...args);
    } else if (_isPlainObject(args[0])) {
      return rawAll(this, ...args);
    }
  }
}

;
module.exportDefault(raw);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"set.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/class_prototype_methods/set.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 1);

let _isArray;

module.watch(require("lodash/isArray"), {
  default(v) {
    _isArray = v;
  }

}, 2);

let _isPlainObject;

module.watch(require("lodash/isPlainObject"), {
  default(v) {
    _isPlainObject = v;
  }

}, 3);
let config;
module.watch(require("../../../core/config"), {
  default(v) {
    config = v;
  }

}, 4);
let setMany;
module.watch(require("../utils/set_many"), {
  default(v) {
    setMany = v;
  }

}, 5);
let setOne;
module.watch(require("../utils/set_one"), {
  default(v) {
    setOne = v;
  }

}, 6);
let castNested;
module.watch(require("../utils/castNested"), {
  default(v) {
    castNested = v;
  }

}, 7);

function merge(doc) {
  const result = {};

  _each(doc, (fieldValue, fieldName) => {
    // If a field value is an object then we prefix each nested field name with
    // a field name of the parent object. However, we can not do it for arrays
    // as it's not obvious how we would like to merge arrays - concat/replace?
    if (_isPlainObject(fieldValue) && !_isArray(fieldValue)) {
      _each(merge(fieldValue), (nestedFieldValue, nestedFieldName) => {
        result[`${fieldName}.${nestedFieldName}`] = nestedFieldValue;
      });
    } else {
      result[fieldName] = fieldValue;
    }
  });

  return result;
}

function set(...args) {
  const doc = this; // Default options.

  const options = {
    defaults: config.defaults,
    clone: true,
    cast: false,
    merge: false
  }; // Setting single field.

  if (typeof args[0] === 'string' && args.length >= 2) {
    // The last argument is an options object.
    if (_isPlainObject(args[2])) {
      _extend(options, args[2]);
    } // Do not override values if the "merge" option is set and instead merge
    // nested objects.


    if (options.merge && _isPlainObject(args[1])) {
      setMany(doc, merge({
        [args[0]]: args[1]
      }), options);
    } else {
      setOne(doc, args[0], args[1], options);
    }
  } // Setting multiple fields at once.
  else if (_isPlainObject(args[0]) && args.length >= 1) {
      // The last argument is an options object.
      if (_isPlainObject(args[1])) {
        _extend(options, args[1]);
      } // Do not override values if the "merge" option is set and instead merge
      // nested objects.


      if (options.merge) {
        setMany(doc, merge(args[0]), options);
      } else {
        setMany(doc, args[0], options);
      }
    }
}

;
module.exportDefault(set);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"class_static_methods":{"get_field.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/class_static_methods/get_field.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getField(fieldName) {
  return this.schema.fields[fieldName];
}

module.exportDefault(getField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_fields.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/class_static_methods/get_fields.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _values;

module.watch(require("lodash/values"), {
  default(v) {
    _values = v;
  }

}, 0);

function getFields() {
  return _values(this.schema.fields);
}

;
module.exportDefault(getFields);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_fields_names.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/class_static_methods/get_fields_names.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);

let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 1);

function getFieldsNames(options = {}) {
  // Prepare options.
  _defaults(options, {
    transient: true,
    immutable: true
  });

  const fieldsNames = [];

  _each(this.schema.fields, (field, name) => {
    // Don't get a transient field.
    if (!options.transient && field.transient) {
      return;
    } // Don't get an immutable field.


    if (!options.immutable && field.immutable) {
      return;
    }

    fieldsNames.push(name);
  });

  return fieldsNames;
}

;
module.exportDefault(getFieldsNames);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_list_fields.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/class_static_methods/get_list_fields.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _filter;

module.watch(require("lodash/filter"), {
  default(v) {
    _filter = v;
  }

}, 0);
let ListField;
module.watch(require("../ListField"), {
  default(v) {
    ListField = v;
  }

}, 1);

function getListFields(classOnly = false) {
  return _filter(this.getFields(), function (field) {
    if (classOnly) {
      return field instanceof ListField && field.isClass;
    }

    return field instanceof ListField;
  });
}

;
module.exportDefault(getListFields);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_object_fields.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/class_static_methods/get_object_fields.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _filter;

module.watch(require("lodash/filter"), {
  default(v) {
    _filter = v;
  }

}, 0);
let ObjectField;
module.watch(require("../ObjectField"), {
  default(v) {
    ObjectField = v;
  }

}, 1);

function getObjectFields() {
  return _filter(this.getFields(), function (field) {
    return field instanceof ObjectField;
  });
}

;
module.exportDefault(getObjectFields);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_scalar_fields.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/class_static_methods/get_scalar_fields.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _filter;

module.watch(require("lodash/filter"), {
  default(v) {
    _filter = v;
  }

}, 0);
let ScalarField;
module.watch(require("../ScalarField"), {
  default(v) {
    ScalarField = v;
  }

}, 1);

function getScalarFields() {
  return _filter(this.getFields(), function (field) {
    return field instanceof ScalarField;
  });
}

;
module.exportDefault(getScalarFields);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"has_field.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/class_static_methods/has_field.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 0);

function hasField(fieldName) {
  return _has(this.schema.fields, fieldName);
}

;
module.exportDefault(hasField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"hooks":{"apply_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/hooks/apply_definition.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 1);
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 2);
let Type;
module.watch(require("../type.js"), {
  default(v) {
    Type = v;
  }

}, 3);
let AstroClass;
module.watch(require("../../../core/class.js"), {
  default(v) {
    AstroClass = v;
  }

}, 4);
let ScalarField;
module.watch(require("../ScalarField"), {
  default(v) {
    ScalarField = v;
  }

}, 5);
let ObjectField;
module.watch(require("../ObjectField"), {
  default(v) {
    ObjectField = v;
  }

}, 6);
let ListField;
module.watch(require("../ListField"), {
  default(v) {
    ListField = v;
  }

}, 7);

function checkTypeExistence(type, className, fieldName) {
  if (!type) {
    throwParseError([{
      'class': className
    }, {
      'property': 'fields'
    }, {
      'field': fieldName
    }, 'Type does not exist']);
  }
}

function onApplyDefinition(Class, parsedDefinition, className) {
  _each(parsedDefinition.fields, function (fieldDefinition, fieldName) {
    // Prepare field variable.
    let field; // List field.

    if (Match.test(fieldDefinition.type, Array)) {
      let type = Type.find(fieldDefinition.type[0]);
      checkTypeExistence(type, className, fieldDefinition.name);

      if (AstroClass.isParentOf(type.class)) {
        field = new ListField(_extend({}, fieldDefinition, {
          type: type
        }));
      } else {
        field = new ListField(_extend({}, fieldDefinition, {
          type: type
        }));
      }
    } // Scalar or object field.
    else {
        let type = Type.find(fieldDefinition.type);
        checkTypeExistence(type, className, fieldDefinition.name);

        if (AstroClass.isParentOf(type.class)) {
          field = new ObjectField(_extend({}, fieldDefinition, {
            type: type
          }));
        } else {
          field = new ScalarField(_extend({}, fieldDefinition, {
            type: type
          }));
        }
      } // Add a field object to the fields list.


    Class.schema.fields[fieldName] = field;
    Class.schema.fieldsNames.push(fieldName);
  });
}

module.exportDefault(onApplyDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_class.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/hooks/init_class.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let getField;
module.watch(require("../class_static_methods/get_field.js"), {
  default(v) {
    getField = v;
  }

}, 0);
let getFieldsNames;
module.watch(require("../class_static_methods/get_fields_names.js"), {
  default(v) {
    getFieldsNames = v;
  }

}, 1);
let getFields;
module.watch(require("../class_static_methods/get_fields.js"), {
  default(v) {
    getFields = v;
  }

}, 2);
let getObjectFields;
module.watch(require("../class_static_methods/get_object_fields.js"), {
  default(v) {
    getObjectFields = v;
  }

}, 3);
let getListFields;
module.watch(require("../class_static_methods/get_list_fields.js"), {
  default(v) {
    getListFields = v;
  }

}, 4);
let getScalarFields;
module.watch(require("../class_static_methods/get_scalar_fields.js"), {
  default(v) {
    getScalarFields = v;
  }

}, 5);
let hasField;
module.watch(require("../class_static_methods/has_field.js"), {
  default(v) {
    hasField = v;
  }

}, 6);
let get;
module.watch(require("../class_prototype_methods/get.js"), {
  default(v) {
    get = v;
  }

}, 7);
let raw;
module.watch(require("../class_prototype_methods/raw.js"), {
  default(v) {
    raw = v;
  }

}, 8);
let set;
module.watch(require("../class_prototype_methods/set.js"), {
  default(v) {
    set = v;
  }

}, 9);
let fromJSONValue;
module.watch(require("../class_events/from_json_value.js"), {
  default(v) {
    fromJSONValue = v;
  }

}, 10);
let toJSONValue;
module.watch(require("../class_events/to_json_value.js"), {
  default(v) {
    toJSONValue = v;
  }

}, 11);

function onInitClass(Class, className) {
  // Class static methods.
  Class.getField = getField;
  Class.getFieldsNames = getFieldsNames;
  Class.getFields = getFields;
  Class.getObjectFields = getObjectFields;
  Class.getListFields = getListFields;
  Class.getScalarFields = getScalarFields;
  Class.hasField = hasField; // Class prototype methods.

  Class.prototype.get = get;
  Class.prototype.raw = raw;
  Class.prototype.set = set; // Class events.

  Class.extend({
    events: {
      fromJSONValue,
      toJSONValue
    }
  }, ['events']);
}

;
module.exportDefault(onInitClass);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/hooks/init_definition.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitDefinition(definition, className) {
  definition.fields = {};
}

;
module.exportDefault(onInitDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_schema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/hooks/init_schema.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitSchema(schema, className) {
  schema.fields = {};
  schema.fieldsNames = [];
}

;
module.exportDefault(onInitSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"merge_definitions.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/hooks/merge_definitions.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

function onMergeDefinitions(targetDefinition, sourceDefinition, className) {
  _each(sourceDefinition.fields, function (fieldDefinition, fieldName) {
    targetDefinition.fields[fieldName] = fieldDefinition;
  });
}

;
module.exportDefault(onMergeDefinitions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"parse_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/hooks/parse_definition.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 1);

let _includes;

module.watch(require("lodash/includes"), {
  default(v) {
    _includes = v;
  }

}, 2);
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 3);
let Class;
module.watch(require("../../../core/class.js"), {
  default(v) {
    Class = v;
  }

}, 4);
let Type;
module.watch(require("../type.js"), {
  default(v) {
    Type = v;
  }

}, 5);
let reservedKeywords;
module.watch(require("../../../core/reserved_keywords.js"), {
  default(v) {
    reservedKeywords = v;
  }

}, 6);
const typePattern = Match.OneOf(Function, [Function]);

function onParseDefinition(parsedDefinition, definition, className) {
  if (definition.fields === undefined) {
    return;
  } // Fields definition has to be an object.


  if (!Match.test(definition.fields, Object)) {
    throwParseError([{
      'class': className
    }, {
      'property': 'fields'
    }, 'Fields definition has to be an object']);
  }

  _each(definition.fields, function (fieldDefinition, fieldName) {
    if (Match.test(fieldDefinition, typePattern)) {
      fieldDefinition = {
        name: fieldName,
        type: fieldDefinition
      };
    } else if (Match.test(fieldDefinition, Object)) {
      fieldDefinition = _extend(fieldDefinition, {
        name: fieldName
      });
    } else {
      throwParseError([{
        'class': className
      }, {
        'property': 'fields'
      }, {
        'field': fieldName
      }, 'Field definition has to be an object or type']);
    } // Check if a field name is not reserved keyword.


    if (_includes(reservedKeywords, fieldName)) {
      throwParseError([{
        'class': className
      }, {
        'method': fieldName
      }, 'Reserved keyword']);
    }

    parsedDefinition.fields[fieldDefinition.name] = fieldDefinition;
  });
}

;
module.exportDefault(onParseDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"types":{"boolean.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/types/boolean.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isObject;

module.watch(require("lodash/isObject"), {
  default(v) {
    _isObject = v;
  }

}, 0);
let Type;
module.watch(require("../type.js"), {
  default(v) {
    Type = v;
  }

}, 1);
let Validators;
module.watch(require("../../validators/validators.js"), {
  default(v) {
    Validators = v;
  }

}, 2);
Type.create({
  name: 'Boolean',
  class: Boolean,

  cast(value) {
    if (typeof value === 'boolean' && _isObject(value)) {
      return value;
    } else if (typeof value === 'string') {
      if (value === '') {
        // The "this" context is a field.
        if (this.optional) {
          return null;
        } else {
          return false;
        }
      } else if (value.toLowerCase() === 'false' || value === '0') {
        return false;
      }
    }

    return Boolean(value);
  },

  validate(args) {
    Validators.boolean(args);
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"date.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/types/date.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isNaN;

module.watch(require("lodash/isNaN"), {
  default(v) {
    _isNaN = v;
  }

}, 0);

let _isNumber;

module.watch(require("lodash/isNumber"), {
  default(v) {
    _isNumber = v;
  }

}, 1);
let Type;
module.watch(require("../type.js"), {
  default(v) {
    Type = v;
  }

}, 2);
let Validators;
module.watch(require("../../validators/validators.js"), {
  default(v) {
    Validators = v;
  }

}, 3);
Type.create({
  name: 'Date',
  class: Date,

  cast(value) {
    if (_isNumber(value)) {
      return new Date(value);
    } else if (typeof value === 'string') {
      if (value === '') {
        // The "this" context is a field.
        if (this.optional) {
          return null;
        }
      } else if (/^[0-9]+$/.test(value)) {
        return new Date(parseInt(value, 10));
      } else {
        const time = Date.parse(value);

        if (!_isNaN(time)) {
          return new Date(time);
        }
      }
    }

    return value;
  },

  validate(args) {
    Validators.date(args);
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mongo_object_id.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/types/mongo_object_id.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Type;
module.watch(require("../type.js"), {
  default(v) {
    Type = v;
  }

}, 0);
let Validators;
module.watch(require("../../validators/validators.js"), {
  default(v) {
    Validators = v;
  }

}, 1);
let Mongo;
module.watch(require("meteor/mongo"), {
  Mongo(v) {
    Mongo = v;
  }

}, 2);
Type.create({
  name: 'MongoObjectID',
  class: Mongo.ObjectID,

  validate(args) {
    Validators.mongoObjectID(args);
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"number.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/types/number.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isNaN;

module.watch(require("lodash/isNaN"), {
  default(v) {
    _isNaN = v;
  }

}, 0);

let _isNumber;

module.watch(require("lodash/isNumber"), {
  default(v) {
    _isNumber = v;
  }

}, 1);

let _isObject;

module.watch(require("lodash/isObject"), {
  default(v) {
    _isObject = v;
  }

}, 2);
let Type;
module.watch(require("../type.js"), {
  default(v) {
    Type = v;
  }

}, 3);
let Validators;
module.watch(require("../../validators/validators.js"), {
  default(v) {
    Validators = v;
  }

}, 4);
Type.create({
  name: 'Number',
  class: Number,

  cast(value) {
    if (typeof value === 'string') {
      if (value === '') {
        // The "this" context is a field.
        if (this.optional) {
          return null;
        } else {
          return 0;
        }
      }
    } else if (_isObject(value)) {
      return value;
    } else if (!_isNaN(value) && _isNumber(value)) {
      return value;
    }

    const number = Number(value);
    return !_isNaN(number) ? number : value;
  },

  validate(args) {
    Validators.number(args);
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"object.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/types/object.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Type;
module.watch(require("../type.js"), {
  default(v) {
    Type = v;
  }

}, 0);
let Validators;
module.watch(require("../../validators/validators.js"), {
  default(v) {
    Validators = v;
  }

}, 1);
Type.create({
  name: 'Object',
  class: Object,

  validate(args) {
    Validators.object(args);
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"string.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/types/string.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isObject;

module.watch(require("lodash/isObject"), {
  default(v) {
    _isObject = v;
  }

}, 0);
let Type;
module.watch(require("../type.js"), {
  default(v) {
    Type = v;
  }

}, 1);
let Validators;
module.watch(require("../../validators/validators.js"), {
  default(v) {
    Validators = v;
  }

}, 2);
Type.create({
  name: 'String',
  class: String,

  cast(value) {
    if (typeof value === 'string' || _isObject(value)) {
      return value;
    }

    return String(value);
  },

  validate(args) {
    Validators.string(args);
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"utils":{"castNested.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/castNested.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);
let ObjectField;
module.watch(require("../ObjectField"), {
  default(v) {
    ObjectField = v;
  }

}, 1);
let ListField;
module.watch(require("../ListField"), {
  default(v) {
    ListField = v;
  }

}, 2);

function castNested(args = {}) {
  const {
    doc,
    options
  } = args;
  const Class = doc.constructor;

  _each(Class.getFields(), field => {
    if (field instanceof ObjectField || field instanceof ListField && field.isClass) {
      doc[field.name] = field.castValue(doc[field.name], options);
    }
  });
}

;
module.exportDefault(castNested);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"castToClass.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/castToClass.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let getChildClass;
module.watch(require("./getChildClass"), {
  default(v) {
    getChildClass = v;
  }

}, 0);

function castToClass(args = {}) {
  const {
    Class,
    rawDoc,
    options
  } = args; // If the class has a type field, then we have to check if we are
  // casting to some of the nested classes.

  const ChildClass = getChildClass({
    Class,
    rawDoc
  }); // Create instance of an original class or some of its childs.

  return new ChildClass(rawDoc, options);
}

module.exportDefault(castToClass);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getAll.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/getAll.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);
let getMany;
module.watch(require("./getMany"), {
  default(v) {
    getMany = v;
  }

}, 1);

function getAll(doc, options = {}) {
  // Prepare default options values.
  _defaults(options, {
    transient: true,
    immutable: true,
    undefined: true
  });

  const Class = doc.constructor; // Get list of fields and their values.

  return getMany(doc, Class.getFieldsNames(options), options);
}

;
module.exportDefault(getAll);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getChildClass.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/getChildClass.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let config;
module.watch(require("../../../core/config"), {
  default(v) {
    config = v;
  }

}, 0);

function getChildClass(args = {}) {
  const {
    Class,
    rawDoc
  } = args;
  const typeField = Class.getTypeField(); // If a class does not have a type field, then we just return an original
  // class.

  if (!typeField) {
    return Class;
  } // If a class has a type field, then we have to check if a raw document
  // contains information about child class type.


  const ChildClass = Class.get(rawDoc[typeField]); // Return a child class if it exists and in fact it's a child of an original
  // class.

  if (ChildClass && ChildClass.isChildOf(Class)) {
    return ChildClass;
  } // Otherwise just return original class.


  return Class;
}

module.exportDefault(getChildClass);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getMany.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/getMany.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);

let _map;

module.watch(require("lodash/map"), {
  default(v) {
    _map = v;
  }

}, 1);

let _omitBy;

module.watch(require("lodash/omitBy"), {
  default(v) {
    _omitBy = v;
  }

}, 2);

let _zipObject;

module.watch(require("lodash/zipObject"), {
  default(v) {
    _zipObject = v;
  }

}, 3);
let getOne;
module.watch(require("./getOne"), {
  default(v) {
    getOne = v;
  }

}, 4);

function getMany(doc, fieldsNames, options = {}) {
  // Prepare default options values.
  _defaults(options, {
    transient: true,
    immutable: true,
    undefined: true
  });

  const values = _zipObject(fieldsNames, _map(fieldsNames, fieldName => {
    return getOne(doc, fieldName, options);
  }));

  if (options.undefined) {
    return values;
  } else {
    return _omitBy(values, value => value === undefined);
  }
}

;
module.exportDefault(getMany);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getOne.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/getOne.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);
let traverse;
module.watch(require("./traverse.js"), {
  default(v) {
    traverse = v;
  }

}, 1);

function getOne(doc, fieldName, options = {}) {
  // Prepare default options values.
  _defaults(options, {
    transient: true,
    immutable: true
  });

  return traverse(doc, fieldName, function (nestedDoc, nestedFieldName, field) {
    // If a field does not exist than we don't return anything.
    if (!field) {
      return;
    } // Don't get a transient field.


    if (!options.transient && field.transient) {
      return;
    } // Don't get an immutable field.


    if (!options.immutable && field.immutable) {
      return;
    } // Just return value.


    return nestedDoc[nestedFieldName];
  });
}

;
module.exportDefault(getOne);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isNestedFieldName.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/isNestedFieldName.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function isNestedFieldName(fieldPattern) {
  return fieldPattern.indexOf('.') !== -1;
}

;
module.exportDefault(isNestedFieldName);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rawAll.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/rawAll.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);
let rawMany;
module.watch(require("./rawMany"), {
  default(v) {
    rawMany = v;
  }

}, 1);

function rawAll(doc, options = {}) {
  // Prepare default options values.
  _defaults(options, {
    transient: true,
    immutable: true,
    undefined: true
  });

  const Class = doc.constructor; // Get list of fields and their values.

  return rawMany(doc, Class.getFieldsNames(options), options);
}

;
module.exportDefault(rawAll);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rawMany.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/rawMany.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);

let _map;

module.watch(require("lodash/map"), {
  default(v) {
    _map = v;
  }

}, 1);

let _omitBy;

module.watch(require("lodash/omitBy"), {
  default(v) {
    _omitBy = v;
  }

}, 2);

let _zipObject;

module.watch(require("lodash/zipObject"), {
  default(v) {
    _zipObject = v;
  }

}, 3);
let rawOne;
module.watch(require("./rawOne"), {
  default(v) {
    rawOne = v;
  }

}, 4);

function rawMany(doc, fieldsNames, options = {}) {
  // Prepare default options values.
  _defaults(options, {
    transient: true,
    immutable: true,
    undefined: true
  });

  const values = _zipObject(fieldsNames, _map(fieldsNames, fieldName => {
    return rawOne(doc, fieldName, options);
  }));

  if (options.undefined) {
    return values;
  } else {
    return _omitBy(values, value => value === undefined);
  }
}

;
module.exportDefault(rawMany);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rawOne.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/rawOne.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);

let _isArray;

module.watch(require("lodash/isArray"), {
  default(v) {
    _isArray = v;
  }

}, 1);

let _map;

module.watch(require("lodash/map"), {
  default(v) {
    _map = v;
  }

}, 2);
let AstroClass;
module.watch(require("../../../core/class.js"), {
  default(v) {
    AstroClass = v;
  }

}, 3);
let traverse;
module.watch(require("./traverse.js"), {
  default(v) {
    traverse = v;
  }

}, 4);
let rawAll;
module.watch(require("./rawAll"), {
  default(v) {
    rawAll = v;
  }

}, 5);

function rawOne(doc, fieldName, options = {}) {
  // Prepare default options values.
  _defaults(options, {
    transient: true,
    immutable: true,
    // We still need the "undefined" options in the "rawOne" util, because we
    // might want to get nested document that may have undefined fields.
    undefined: true
  });

  return traverse(doc, fieldName, function (nestedDoc, nestedFieldName, field) {
    // If a field does not exist than we don't return anything.
    if (!field) {
      return;
    } // Don't get a transient field.


    if (!options.transient && field.transient) {
      return;
    } // Don't get an immutable field.


    if (!options.immutable && field.immutable) {
      return;
    } // Get field's value.


    const fieldValue = nestedDoc[nestedFieldName];

    if (fieldValue instanceof AstroClass) {
      return rawAll(fieldValue, options);
    } else if (_isArray(fieldValue)) {
      return _map(fieldValue, function (element) {
        if (element instanceof AstroClass) {
          return rawAll(element, options);
        } else {
          return element;
        }
      });
    } else {
      return fieldValue;
    }
  });
}

;
module.exportDefault(rawOne);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"resolveValues.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/resolveValues.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _fromPairs;

module.watch(require("lodash/fromPairs"), {
  default(v) {
    _fromPairs = v;
  }

}, 0);

let _map;

module.watch(require("lodash/map"), {
  default(v) {
    _map = v;
  }

}, 1);
let config;
module.watch(require("../../../core/config.js"), {
  default(v) {
    config = v;
  }

}, 2);
let getChildClass;
module.watch(require("./getChildClass"), {
  default(v) {
    getChildClass = v;
  }

}, 3);

function resolveValues(args = {}) {
  const {
    Class,
    rawDoc
  } = args; // We can not resolve when dealing with non object value or the "resolving"
  // config param is turned off.

  if (!rawDoc || !config.resolving) {
    return rawDoc;
  } // When resolving values, we need to get resolve method for a child class
  // if a given document is actually an instance of child class.


  const ChildClass = getChildClass({
    Class,
    rawDoc
  }); // Construct resolved document from key-value pairs.

  return _fromPairs(_map(ChildClass.getFields(), field => {
    return [field.name, field.resolveValue(rawDoc)];
  }));
}

module.exportDefault(resolveValues);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"set_all.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/set_all.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _difference;

module.watch(require("lodash/difference"), {
  default(v) {
    _difference = v;
  }

}, 0);

let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 1);

let _forOwn;

module.watch(require("lodash/forOwn"), {
  default(v) {
    _forOwn = v;
  }

}, 2);

let _keys;

module.watch(require("lodash/keys"), {
  default(v) {
    _keys = v;
  }

}, 3);
let setOne;
module.watch(require("./set_one.js"), {
  default(v) {
    setOne = v;
  }

}, 4);

function setAll(doc, fieldsValues, options) {
  const Class = doc.constructor; // Get names of the fields that are not present in the fieldsValues variable.

  const fieldsNames = _difference(Class.getFieldsNames(), _keys(fieldsValues));

  _each(fieldsNames, fieldName => {
    setOne(doc, fieldName, undefined, options);
  });

  _forOwn(fieldsValues, (fieldValue, fieldName) => {
    setOne(doc, fieldName, fieldValue, options);
  });
}

;
module.exportDefault(setAll);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"set_many.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/set_many.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _forOwn;

module.watch(require("lodash/forOwn"), {
  default(v) {
    _forOwn = v;
  }

}, 0);
let setOne;
module.watch(require("./set_one.js"), {
  default(v) {
    setOne = v;
  }

}, 1);

function setMany(doc, fieldsValues, options) {
  // Set multiple fields.
  _forOwn(fieldsValues, (setValue, fieldName) => {
    setOne(doc, fieldName, setValue, options);
  });
}

;
module.exportDefault(setMany);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"set_one.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/set_one.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isObject;

module.watch(require("lodash/isObject"), {
  default(v) {
    _isObject = v;
  }

}, 0);
let EJSON;
module.watch(require("meteor/ejson"), {
  EJSON(v) {
    EJSON = v;
  }

}, 1);
let traverse;
module.watch(require("../utils/traverse"), {
  default(v) {
    traverse = v;
  }

}, 2);
let warn;
module.watch(require("../../core/utils/warn"), {
  default(v) {
    warn = v;
  }

}, 3);
let ObjectField;
module.watch(require("../ObjectField"), {
  default(v) {
    ObjectField = v;
  }

}, 4);
let ListField;
module.watch(require("../ListField"), {
  default(v) {
    ListField = v;
  }

}, 5);

function setOne(doc, fieldPattern, fieldValue, options) {
  // If the "clone" option was set and the value being set is an object,
  // then we clone value using the "EJSON.clone" function.
  if (options.clone && _isObject(fieldValue)) {
    fieldValue = EJSON.clone(fieldValue);
  }

  return traverse(doc, fieldPattern, (nestedDoc, nestedFieldName, field) => {
    // If a field does not exist than we don't return anything.
    if (!field) {
      const Class = doc.constructor;
      const className = Class.getName();
      warn(`["${className}" class]["${fieldPattern}" field] ` + 'Trying to set a value of the field that does not exist in the class');
      return;
    } // Cast value if the "cast" option was set or if a field is instance of
    // ObjectField or ListField.


    if (options.cast || field instanceof ObjectField || field instanceof ListField && field.isClass) {
      // If the "cast" option is set and we're casting array's element.
      if (options.cast && field instanceof ListField && /\d+/.test(nestedFieldName)) {
        options.element = true;
      }

      fieldValue = field.castValue(fieldValue, options);
    } // Set default value if the "defualts" option was set.


    if (fieldValue === undefined && options.defaults) {
      fieldValue = field.getDefault(nestedDoc);
    } // Finally set casted/cloned/untouched value.


    nestedDoc[nestedFieldName] = fieldValue;
  });
}

module.exportDefault(setOne);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"traverse.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/fields/utils/traverse.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isObject;

module.watch(require("lodash/isObject"), {
  default(v) {
    _isObject = v;
  }

}, 0);
let isNestedFieldName;
module.watch(require("./isNestedFieldName"), {
  default(v) {
    isNestedFieldName = v;
  }

}, 1);
let AstroClass;
module.watch(require("../../../core/class"), {
  default(v) {
    AstroClass = v;
  }

}, 2);

function traverse(doc, name, callback) {
  if (!doc) {
    return;
  }

  let Class;
  let field; // Check whether the given field name is a nested field name.

  if (!isNestedFieldName(name)) {
    // Get a class.
    let Class = doc.constructor; // Get a field definition.

    let field = Class.getField(name); // Execute the callback function passing the last nested document, the last
    // segment name and a field object.

    return callback(doc, name, field);
  } // Split the nested field pattern name by the "." character.


  let segments = name.split('.'); // Get the last and one before the last index.

  let lastIndex = segments.length - 1; // Traverse nested fields until reaching the last one from the pattern.

  let next = function (nestedDoc, segmentIndex) {
    segmentIndex = segmentIndex || 0; // Get a nested field name under the given index.

    let segment = segments[segmentIndex]; // Check if a nested document is an instance of the Astronomy class and get
    // a field object for a given field name;

    if (nestedDoc instanceof AstroClass) {
      // Get a class for of a nested document.
      Class = nestedDoc.constructor; // Get a field object from the nested class.

      field = Class.getField(segment);
    }

    if (segmentIndex === lastIndex) {
      // Execute the callback function, if we reached the last nested document.
      return callback(nestedDoc, segment, field);
    } else if (_isObject(nestedDoc[segment])) {
      // Go deeper if a value of the current nested document is an object.
      return next(nestedDoc[segment], segmentIndex + 1);
    }
  }; // Start traversing nested fields.


  return next(doc);
}

;
module.exportDefault(traverse);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"helpers":{"module.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/helpers/module.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const module1 = module;
let Module;
module1.watch(require("../../core/module.js"), {
  default(v) {
    Module = v;
  }

}, 0);
let onInitSchema;
module1.watch(require("./hooks/onInitSchema.js"), {
  default(v) {
    onInitSchema = v;
  }

}, 1);
let onInitDefinition;
module1.watch(require("./hooks/onInitDefinition.js"), {
  default(v) {
    onInitDefinition = v;
  }

}, 2);
let onParseDefinition;
module1.watch(require("./hooks/onParseDefinition.js"), {
  default(v) {
    onParseDefinition = v;
  }

}, 3);
let onMergeDefinitions;
module1.watch(require("./hooks/onMergeDefinitions.js"), {
  default(v) {
    onMergeDefinitions = v;
  }

}, 4);
let onApplyDefinition;
module1.watch(require("./hooks/onApplyDefinition.js"), {
  default(v) {
    onApplyDefinition = v;
  }

}, 5);
let onInitClass;
module1.watch(require("./hooks/onInitClass.js"), {
  default(v) {
    onInitClass = v;
  }

}, 6);
Module.create({
  name: 'methods',
  aliases: ['helpers'],
  onInitSchema: onInitSchema,
  onInitDefinition: onInitDefinition,
  onParseDefinition: onParseDefinition,
  onMergeDefinitions: onMergeDefinitions,
  onApplyDefinition: onApplyDefinition,
  onInitClass: onInitClass
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class_static_methods":{"getHelper.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/helpers/class_static_methods/getHelper.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getHelper(helperName) {
  return this.schema.helpers[helperName];
}

;
module.exportDefault(getHelper);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getHelpers.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/helpers/class_static_methods/getHelpers.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getHelpers() {
  return this.schema.helpers;
}

;
module.exportDefault(getHelpers);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hasHelper.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/helpers/class_static_methods/hasHelper.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 0);

function hasHelper(helperName) {
  return _has(this.schema.helpers, helperName);
}

;
module.exportDefault(hasHelper);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"hooks":{"onApplyDefinition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/helpers/hooks/onApplyDefinition.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

function onApplyDefinition(Class, parsedDefinition, className) {
  let schema = Class.schema; // Add helpers to the class.

  _each(parsedDefinition.helpers, (helper, helperName) => {
    schema.helpers[helperName] = helper;
    Class.prototype[helperName] = helper;
  });
}

;
module.exportDefault(onApplyDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"onInitClass.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/helpers/hooks/onInitClass.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let deprecated;
module.watch(require("../../core/utils/deprecated"), {
  default(v) {
    deprecated = v;
  }

}, 0);
let getHelper;
module.watch(require("../class_static_methods/getHelper.js"), {
  default(v) {
    getHelper = v;
  }

}, 1);
let getHelpers;
module.watch(require("../class_static_methods/getHelpers.js"), {
  default(v) {
    getHelpers = v;
  }

}, 2);
let hasHelper;
module.watch(require("../class_static_methods/hasHelper.js"), {
  default(v) {
    hasHelper = v;
  }

}, 3);

function onInitClass(Class, className) {
  Class.getHelper = getHelper;
  Class.getHelpers = getHelpers;
  Class.hasHelper = hasHelper; // Class static helpers.

  Class.getMethod = function (...args) {
    deprecated(`Methods have been renamed to helpers. Please use the ` + `"${className}.getHelper" function.`);
    return this.getHelper.apply(this, args);
  };

  Class.getMethods = function (...args) {
    deprecated(`Methods have been renamed to helpers. Please use the ` + `"${className}.getHelpers" function.`);
    return this.getHelpers.apply(this, args);
  };

  Class.hasMethod = function (...args) {
    deprecated(`Methods have been renamed to helpers. Please use the ` + `"${className}.hasHelper" function.`);
    return this.hasHelper.apply(this, args);
  };
}

;
module.exportDefault(onInitClass);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"onInitDefinition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/helpers/hooks/onInitDefinition.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitDefinition(definition, className) {
  definition.helpers = {};
}

;
module.exportDefault(onInitDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"onInitSchema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/helpers/hooks/onInitSchema.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitSchema(schema, className) {
  schema.helpers = {};
}

;
module.exportDefault(onInitSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"onMergeDefinitions.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/helpers/hooks/onMergeDefinitions.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

function onMergeDefinitions(targetDefinition, sourceDefinition, ClassName) {
  _each(sourceDefinition.helpers, function (helper, helperName) {
    targetDefinition.helpers[helperName] = helper;
  });
}

;
module.exportDefault(onMergeDefinitions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"onParseDefinition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/helpers/hooks/onParseDefinition.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 0);

let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 1);

let _includes;

module.watch(require("lodash/includes"), {
  default(v) {
    _includes = v;
  }

}, 2);
let deprecated;
module.watch(require("../../core/utils/deprecated"), {
  default(v) {
    deprecated = v;
  }

}, 3);
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 4);
let reservedKeywords;
module.watch(require("../../../core/reserved_keywords.js"), {
  default(v) {
    reservedKeywords = v;
  }

}, 5);

function onParseDefinition(parsedDefinition, definition, className) {
  if (definition.methods) {
    definition.helpers = definition.helpers || {};
    deprecated(`Methods have been renamed to helpers. Please use the "helpers" ` + `section in the "${className}" class definition.`);

    _each(definition.methods, (method, methodName) => {
      if (_has(definition.helpers, methodName)) {
        deprecated(`Methods have been renamed to helpers. Please move the ` + `"${methodName}" method to the "helpers" section in the ` + `"${className}" class definition.`);
      } else {
        definition.helpers[methodName] = method;
      }
    });
  } // Check existence and validity of the "helpers" property.


  if (definition.helpers !== undefined) {
    if (!Match.test(definition.helpers, Object)) {
      throwParseError([{
        'class': className
      }, {
        'property': 'helpers'
      }, 'Helpers definition has to be an object']);
    }

    _each(definition.helpers, (helper, helperName) => {
      if (!Match.test(helper, Function)) {
        throwParseError([{
          'class': className
        }, {
          'helper': helperName
        }, 'Helper has to be a function']);
      }

      if (_includes(reservedKeywords, helperName)) {
        throwParseError([{
          'class': className
        }, {
          'helper': helperName
        }, 'Reserved keyword']);
      }

      parsedDefinition.helpers[helperName] = helper;
    });
  }
}

;
module.exportDefault(onParseDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"indexes":{"module.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/indexes/module.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const module1 = module;
let Module;
module1.watch(require("../../core/module.js"), {
  default(v) {
    Module = v;
  }

}, 0);
let onInitSchema;
module1.watch(require("./hooks/init_schema.js"), {
  default(v) {
    onInitSchema = v;
  }

}, 1);
let onInitDefinition;
module1.watch(require("./hooks/init_definition.js"), {
  default(v) {
    onInitDefinition = v;
  }

}, 2);
let onParseDefinition;
module1.watch(require("./hooks/parse_definition.js"), {
  default(v) {
    onParseDefinition = v;
  }

}, 3);
let onMergeDefinitions;
module1.watch(require("./hooks/merge_definitions.js"), {
  default(v) {
    onMergeDefinitions = v;
  }

}, 4);
let onApplyDefinition;
module1.watch(require("./hooks/apply_definition.js"), {
  default(v) {
    onApplyDefinition = v;
  }

}, 5);
let onInitClass;
module1.watch(require("./hooks/init_class.js"), {
  default(v) {
    onInitClass = v;
  }

}, 6);
Module.create({
  name: 'indexes',
  onInitSchema: onInitSchema,
  onInitDefinition: onInitDefinition,
  onParseDefinition: onParseDefinition,
  onMergeDefinitions: onMergeDefinitions,
  onApplyDefinition: onApplyDefinition,
  onInitClass: onInitClass
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class_static_methods":{"get_index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/indexes/class_static_methods/get_index.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getIndex(indexName) {
  return this.schema.indexes[indexName];
}

;
module.exportDefault(getIndex);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_indexes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/indexes/class_static_methods/get_indexes.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getIndexes() {
  return this.schema.indexes;
}

;
module.exportDefault(getIndexes);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"has_index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/indexes/class_static_methods/has_index.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 0);

function hasIndex(indexName) {
  return _has(this.schema.indexes, indexName);
}

;
module.exportDefault(hasIndex);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"hooks":{"apply_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/indexes/hooks/apply_definition.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _concat;

module.watch(require("lodash/concat"), {
  default(v) {
    _concat = v;
  }

}, 0);

let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 1);

let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 2);

let _includes;

module.watch(require("lodash/includes"), {
  default(v) {
    _includes = v;
  }

}, 3);

let _mapKeys;

module.watch(require("lodash/mapKeys"), {
  default(v) {
    _mapKeys = v;
  }

}, 4);

function onApplyDefinition(Class, parsedDefinition, className) {
  const Collection = Class.getCollection();

  if (!Meteor.isServer || !Collection || Collection && !Collection._connection) {
    return;
  }

  const schema = Class.schema;

  function prefixIndexes(indexes, fieldName) {
    // Prefix the fields property.
    _each(indexes, (index, indexName) => {
      index.fields = _mapKeys(index.fields, (value, key) => {
        return `${fieldName}.${key}`;
      });

      _extend(index.options, {
        name: `${fieldName}.${indexName}`
      });
    }); // Prefix object keys.


    indexes = _mapKeys(indexes, (index, indexName) => {
      return `${fieldName}.${indexName}`;
    });
    return indexes;
  } // Add indexes to the collection from nested classes.


  const checkedClasses = [];

  function collectNestedIndexes(Class) {
    // Stop checking if a given class was already checked.
    if (_includes(checkedClasses, Class)) {
      return;
    }

    checkedClasses.push(Class);
    const indexes = {};

    const fields = _concat(Class.getObjectFields(), Class.getListFields(true));

    _each(fields, field => {
      _extend(indexes, prefixIndexes(field.type.class.definition.indexes, field.name), prefixIndexes(collectNestedIndexes(field.type.class), field.name));
    });

    return indexes;
  }

  const indexes = _extend({}, parsedDefinition.indexes, collectNestedIndexes(Class));

  _each(indexes, (index, indexName) => {
    schema.indexes[indexName] = index;

    Collection._ensureIndex(index.fields, index.options);
  });
}

;
module.exportDefault(onApplyDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_class.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/indexes/hooks/init_class.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let getIndex;
module.watch(require("../class_static_methods/get_index.js"), {
  default(v) {
    getIndex = v;
  }

}, 0);
let getIndexes;
module.watch(require("../class_static_methods/get_indexes.js"), {
  default(v) {
    getIndexes = v;
  }

}, 1);
let hasIndex;
module.watch(require("../class_static_methods/has_index.js"), {
  default(v) {
    hasIndex = v;
  }

}, 2);

function onInitClass(Class, className) {
  // Class static methods.
  Class.getIndex = getIndex;
  Class.getIndexes = getIndexes;
  Class.hasIndex = hasIndex;
}

;
module.exportDefault(onInitClass);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/indexes/hooks/init_definition.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitDefinition(definition, className) {
  definition.indexes = {};
}

;
module.exportDefault(onInitDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_schema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/indexes/hooks/init_schema.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitSchema(schema, className) {
  schema.indexes = {};
}

;
module.exportDefault(onInitSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"merge_definitions.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/indexes/hooks/merge_definitions.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

function onMergeDefinitions(targetDefinition, sourceDefinition, ClassName) {
  _each(sourceDefinition.indexes, function (index, indexName) {
    targetDefinition.indexes[indexName] = index;
  });
}

;
module.exportDefault(onMergeDefinitions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"parse_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/indexes/hooks/parse_definition.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 1);
const fieldDefinitionPattern = Match.ObjectIncluding({
  index: Match.OneOf(1, -1, String)
});

function onParseDefinition(parsedDefinition, definition, className) {
  // Check existence and validity of the "indexes" property.
  if (definition.indexes !== undefined) {
    _each(definition.indexes, (index, indexName) => {
      if (!Match.test(index, Object)) {
        throwParseError([{
          'class': className
        }, {
          'index': indexName
        }, 'Indexes definition has to be an object']);
      }

      index = {
        fields: index.fields,
        options: index.options || {}
      };
      index.options.name = index.options.name || indexName;
      parsedDefinition.indexes[indexName] = index;
    });
  }

  if (definition.fields !== undefined) {
    _each(definition.fields, (fieldDefinition, fieldName) => {
      // Stop if a field definition does not contain index information.
      if (!Match.test(fieldDefinition, fieldDefinitionPattern)) {
        return;
      } // Prepare an index definition.


      let indexDefinition = {
        fields: {},
        options: {
          name: fieldName
        }
      };
      indexDefinition.fields[fieldName] = fieldDefinition.index;
      parsedDefinition.indexes[fieldName] = indexDefinition;
    });
  }
}

;
module.exportDefault(onParseDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"methods":{"module.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/module.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const module1 = module;
let Module;
module1.watch(require("../../core/module.js"), {
  default(v) {
    Module = v;
  }

}, 0);
let onInitSchema;
module1.watch(require("./hooks/onInitSchema.js"), {
  default(v) {
    onInitSchema = v;
  }

}, 1);
let onInitDefinition;
module1.watch(require("./hooks/onInitDefinition.js"), {
  default(v) {
    onInitDefinition = v;
  }

}, 2);
let onParseDefinition;
module1.watch(require("./hooks/onParseDefinition.js"), {
  default(v) {
    onParseDefinition = v;
  }

}, 3);
let onMergeDefinitions;
module1.watch(require("./hooks/onMergeDefinitions.js"), {
  default(v) {
    onMergeDefinitions = v;
  }

}, 4);
let onApplyDefinition;
module1.watch(require("./hooks/onApplyDefinition.js"), {
  default(v) {
    onApplyDefinition = v;
  }

}, 5);
let onInitClass;
module1.watch(require("./hooks/onInitClass.js"), {
  default(v) {
    onInitClass = v;
  }

}, 6);
let onFinalizeClass;
module1.watch(require("./hooks/onFinalizeClass.js"), {
  default(v) {
    onFinalizeClass = v;
  }

}, 7);
Module.create({
  name: 'meteorMethods',
  onInitSchema,
  onInitDefinition,
  onParseDefinition,
  onMergeDefinitions,
  onApplyDefinition,
  onInitClass,
  onFinalizeClass
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class_prototype_methods":{"applyMethod.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/class_prototype_methods/applyMethod.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let callMeteorMethod;
module.watch(require("../../storage/utils/call_meteor_method"), {
  default(v) {
    callMeteorMethod = v;
  }

}, 0);
let rawAll;
module.watch(require("../../fields/utils/rawAll"), {
  default(v) {
    rawAll = v;
  }

}, 1);

function applyMethod(methodName, methodArgs, callback) {
  const doc = this;
  const Class = doc.constructor; // Prepare arguments to be sent to the "/Astronomy/execute" method.

  const meteorMethodArgs = {
    className: Class.getName(),
    methodName,
    methodArgs,
    rawDoc: rawAll(doc, {
      transient: false
    })
  };

  try {
    return callMeteorMethod(Class, "/Astronomy/execute", [meteorMethodArgs], callback);
  } catch (err) {
    if (callback) {
      callback(err);
      return null;
    }

    throw err;
  }
}

module.exportDefault(applyMethod);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"callMethod.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/class_prototype_methods/callMethod.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _last;

module.watch(require("lodash/last"), {
  default(v) {
    _last = v;
  }

}, 0);
let applyMethod;
module.watch(require("./applyMethod"), {
  default(v) {
    applyMethod = v;
  }

}, 1);

function callMethod(methodName, ...methodArgs) {
  // Get the last argument.
  let callback = _last(methodArgs); // If the last argument is a callback function, then remove the last
  // argument.


  if (typeof callback === 'function') {
    methodArgs.pop();
  } // If the last argument is not a callback function, then clear the
  // "callback" variable.
  else {
      callback = undefined;
    }

  return applyMethod.call(this, methodName, methodArgs, callback);
}

;
module.exportDefault(callMethod);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"class_static_methods":{"getMeteorMethod.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/class_static_methods/getMeteorMethod.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getMethod(methodName) {
  return this.schema.methods[methodName];
}

;
module.exportDefault(getMethod);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getMeteorMethods.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/class_static_methods/getMeteorMethods.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getMethods() {
  return this.schema.methods;
}

;
module.exportDefault(getMethods);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hasMeteorMethod.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/class_static_methods/hasMeteorMethod.js                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 0);

function hasMethod(methodName) {
  return _has(this.schema.methods, methodName);
}

;
module.exportDefault(hasMethod);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"hooks":{"onApplyDefinition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/hooks/onApplyDefinition.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

function onApplyDefinition(Class, parsedDefinition, className) {
  const schema = Class.schema; // Add Meteor methods to the class schema.

  _each(parsedDefinition.meteorMethods, (method, methodName) => {
    schema.methods[methodName] = method;
  });
}

;
module.exportDefault(onApplyDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"onFinalizeClass.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/hooks/onFinalizeClass.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _zipObject;

module.watch(require("lodash/zipObject"), {
  default(v) {
    _zipObject = v;
  }

}, 0);

let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 1);
let wrapMethod;
module.watch(require("../utils/wrapMethod"), {
  default(v) {
    wrapMethod = v;
  }

}, 2);
let hasMeteorMethod;
module.watch(require("../../storage/utils/has_meteor_method"), {
  default(v) {
    hasMeteorMethod = v;
  }

}, 3);
let astronomyExecute;
module.watch(require("../meteor_methods/astronomyExecute"), {
  default(v) {
    astronomyExecute = v;
  }

}, 4);
let applyMethod;
module.watch(require("../class_prototype_methods/applyMethod"), {
  default(v) {
    applyMethod = v;
  }

}, 5);
let callMethod;
module.watch(require("../class_prototype_methods/callMethod"), {
  default(v) {
    callMethod = v;
  }

}, 6);

function onFinalizeClass(Class, className) {
  const schema = Class.schema;

  if (schema.collection) {
    const Collection = schema.collection;
    const connection = Collection._connection || Meteor.connection || Meteor.server;

    if (connection) {
      if (!hasMeteorMethod(connection, "/Astronomy/execute")) {
        // Add Meteor method.
        connection.methods({
          "/Astronomy/execute": astronomyExecute
        });
      }
    } // Add Meteor methods to the class.


    _each(schema.methods, (method, methodName) => {
      Class.prototype[methodName] = wrapMethod(methodName);
    }); // Add universal "applyMethod" and "callMethod" methods that can invoke any
    // method even if only defined on the server.


    Class.prototype.applyMethod = applyMethod;
    Class.prototype.callMethod = callMethod;
  }
}

module.exportDefault(onFinalizeClass);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"onInitClass.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/hooks/onInitClass.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let getMeteorMethod;
module.watch(require("../class_static_methods/getMeteorMethod.js"), {
  default(v) {
    getMeteorMethod = v;
  }

}, 0);
let getMeteorMethods;
module.watch(require("../class_static_methods/getMeteorMethods.js"), {
  default(v) {
    getMeteorMethods = v;
  }

}, 1);
let hasMeteorMethod;
module.watch(require("../class_static_methods/hasMeteorMethod.js"), {
  default(v) {
    hasMeteorMethod = v;
  }

}, 2);

function onInitClass(Class, className) {
  // Class static methods.
  Class.getMeteorMethod = getMeteorMethod;
  Class.getMeteorMethods = getMeteorMethods;
  Class.hasMeteorMethod = hasMeteorMethod;
}

;
module.exportDefault(onInitClass);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"onInitDefinition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/hooks/onInitDefinition.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitDefinition(definition, className) {
  definition.meteorMethods = {};
}

;
module.exportDefault(onInitDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"onInitSchema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/hooks/onInitSchema.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitSchema(schema, className) {
  schema.methods = {};
}

;
module.exportDefault(onInitSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"onMergeDefinitions.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/hooks/onMergeDefinitions.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

function onMergeDefinitions(targetDefinition, sourceDefinition, className) {
  _each(sourceDefinition.meteorMethods, function (method, methodName) {
    targetDefinition.meteorMethods[methodName] = method;
  });
}

;
module.exportDefault(onMergeDefinitions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"onParseDefinition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/hooks/onParseDefinition.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _includes;

module.watch(require("lodash/includes"), {
  default(v) {
    _includes = v;
  }

}, 1);
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 2);
let reservedKeywords;
module.watch(require("../../../core/reserved_keywords.js"), {
  default(v) {
    reservedKeywords = v;
  }

}, 3);

function onParseDefinition(parsedDefinition, definition, className) {
  // Check existence and validity of the "meteorMethods" property.
  if (definition.meteorMethods !== undefined) {
    if (!Match.test(definition.meteorMethods, Object)) {
      throwParseError([{
        'class': className
      }, {
        'property': 'meteorMethods'
      }, 'meteorMethods definition has to be an object']);
    }

    _each(definition.meteorMethods, function (meteorMethod, meteorMethodName) {
      if (!Match.test(meteorMethod, Function)) {
        throwParseError([{
          'class': className
        }, {
          'meteorMethod': meteorMethodName
        }, 'Meteor method has to be a function']);
      }

      if (_includes(reservedKeywords, meteorMethodName)) {
        throwParseError([{
          'class': className
        }, {
          'meteorMethod': meteorMethodName
        }, 'Reserved keyword']);
      }

      parsedDefinition.meteorMethods[meteorMethodName] = meteorMethod;
    });
  }
}

;
module.exportDefault(onParseDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"meteor_methods":{"astronomyExecute.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/meteor_methods/astronomyExecute.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let AstroClass;
module.watch(require("../../../core/class"), {
  default(v) {
    AstroClass = v;
  }

}, 0);

function astronomyExecute(args = {}) {
  check(args, Match.Any);
  const {
    className,
    rawDoc,
    methodName,
    methodArgs
  } = args;
  const Class = AstroClass.get(className);
  let doc;

  if (rawDoc._id) {
    doc = Class.findOne(rawDoc._id);
  }

  if (doc) {
    doc.set(rawDoc);
  } else {
    doc = new Class(rawDoc, {
      clone: false
    });
  } // Get a method from the class. In some cases method may not be present,
  // because it might be defined only on the server.


  const method = Class.getMeteorMethod(methodName);

  if (!method) {
    return;
  }

  return method.apply(doc, methodArgs);
}

;
module.exportDefault(astronomyExecute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"utils":{"wrapMethod.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/methods/utils/wrapMethod.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _last;

module.watch(require("lodash/last"), {
  default(v) {
    _last = v;
  }

}, 0);
let callMeteorMethod;
module.watch(require("../../storage/utils/call_meteor_method"), {
  default(v) {
    callMeteorMethod = v;
  }

}, 1);
let rawAll;
module.watch(require("../../fields/utils/rawAll"), {
  default(v) {
    rawAll = v;
  }

}, 2);

function wrapMethod(methodName) {
  return function (...methodArgs) {
    const doc = this;
    const Class = doc.constructor; // Get the last argument.

    let callback = _last(methodArgs); // If the last argument is a callback function, then remove the last
    // argument.


    if (typeof callback === "function") {
      methodArgs.pop();
    } else {
      // If the last argument is not a callback function, then clear the
      // "callback" variable.
      callback = undefined;
    } // Call the "/Astronomy/execute" method.


    return doc.applyMethod(methodName, methodArgs, callback);
  };
}

module.exportDefault(wrapMethod);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"storage":{"module.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/module.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const module1 = module;
let Module;
module1.watch(require("../../core/module.js"), {
  default(v) {
    Module = v;
  }

}, 0);
let applyModifier;
module1.watch(require("./utils/apply_modifier.js"), {
  default(v) {
    applyModifier = v;
  }

}, 1);
let callMeteorMethod;
module1.watch(require("./utils/call_meteor_method.js"), {
  default(v) {
    callMeteorMethod = v;
  }

}, 2);
let classInsert;
module1.watch(require("./utils/class_insert.js"), {
  default(v) {
    classInsert = v;
  }

}, 3);
let classUpdate;
module1.watch(require("./utils/class_update.js"), {
  default(v) {
    classUpdate = v;
  }

}, 4);
let classRemove;
module1.watch(require("./utils/class_remove.js"), {
  default(v) {
    classRemove = v;
  }

}, 5);
let documentInsert;
module1.watch(require("./utils/document_insert.js"), {
  default(v) {
    documentInsert = v;
  }

}, 6);
let documentUpdate;
module1.watch(require("./utils/document_update.js"), {
  default(v) {
    documentUpdate = v;
  }

}, 7);
let documentRemove;
module1.watch(require("./utils/document_remove.js"), {
  default(v) {
    documentRemove = v;
  }

}, 8);
let getModified;
module1.watch(require("./utils/getModified"), {
  default(v) {
    getModified = v;
  }

}, 9);
let getModifier;
module1.watch(require("./utils/getModifier"), {
  default(v) {
    getModifier = v;
  }

}, 10);
let hasMeteorMethod;
module1.watch(require("./utils/has_meteor_method.js"), {
  default(v) {
    hasMeteorMethod = v;
  }

}, 11);
let isModified;
module1.watch(require("./utils/isModified"), {
  default(v) {
    isModified = v;
  }

}, 12);
let isRemote;
module1.watch(require("./utils/is_remote.js"), {
  default(v) {
    isRemote = v;
  }

}, 13);
let omitUndefined;
module1.watch(require("./utils/omit_undefined.js"), {
  default(v) {
    omitUndefined = v;
  }

}, 14);
let throwIfSelectorIsNotId;
module1.watch(require("./utils/throw_if_selector_is_not_id.js"), {
  default(v) {
    throwIfSelectorIsNotId = v;
  }

}, 15);
let transformToClass;
module1.watch(require("./utils/transformToClass"), {
  default(v) {
    transformToClass = v;
  }

}, 16);
let triggerBeforeSave;
module1.watch(require("./utils/trigger_before_save.js"), {
  default(v) {
    triggerBeforeSave = v;
  }

}, 17);
let triggerBeforeInsert;
module1.watch(require("./utils/trigger_before_insert.js"), {
  default(v) {
    triggerBeforeInsert = v;
  }

}, 18);
let triggerBeforeUpdate;
module1.watch(require("./utils/trigger_before_update.js"), {
  default(v) {
    triggerBeforeUpdate = v;
  }

}, 19);
let triggerBeforeRemove;
module1.watch(require("./utils/trigger_before_remove.js"), {
  default(v) {
    triggerBeforeRemove = v;
  }

}, 20);
let triggerAfterSave;
module1.watch(require("./utils/trigger_after_save.js"), {
  default(v) {
    triggerAfterSave = v;
  }

}, 21);
let triggerAfterInsert;
module1.watch(require("./utils/trigger_after_insert.js"), {
  default(v) {
    triggerAfterInsert = v;
  }

}, 22);
let triggerAfterUpdate;
module1.watch(require("./utils/trigger_after_update.js"), {
  default(v) {
    triggerAfterUpdate = v;
  }

}, 23);
let triggerAfterRemove;
module1.watch(require("./utils/trigger_after_remove.js"), {
  default(v) {
    triggerAfterRemove = v;
  }

}, 24);
let wrapTransform;
module1.watch(require("./utils/wrapTransform.js"), {
  default(v) {
    wrapTransform = v;
  }

}, 25);
let onInitSchema;
module1.watch(require("./hooks/init_schema.js"), {
  default(v) {
    onInitSchema = v;
  }

}, 26);
let onInitDefinition;
module1.watch(require("./hooks/init_definition.js"), {
  default(v) {
    onInitDefinition = v;
  }

}, 27);
let onParseDefinition;
module1.watch(require("./hooks/parse_definition.js"), {
  default(v) {
    onParseDefinition = v;
  }

}, 28);
let onMergeDefinitions;
module1.watch(require("./hooks/merge_definitions.js"), {
  default(v) {
    onMergeDefinitions = v;
  }

}, 29);
let onApplyDefinition;
module1.watch(require("./hooks/apply_definition.js"), {
  default(v) {
    onApplyDefinition = v;
  }

}, 30);
let onInitClass;
module1.watch(require("./hooks/init_class.js"), {
  default(v) {
    onInitClass = v;
  }

}, 31);
Module.create({
  name: "storage",
  onInitSchema: onInitSchema,
  onInitDefinition: onInitDefinition,
  onParseDefinition: onParseDefinition,
  onMergeDefinitions: onMergeDefinitions,
  onApplyDefinition: onApplyDefinition,
  onInitClass: onInitClass,
  utils: {
    applyModifier,
    callMeteorMethod,
    classInsert,
    classUpdate,
    classRemove,
    documentInsert,
    documentUpdate,
    documentRemove,
    getModified,
    getModifier,
    hasMeteorMethod,
    isModified,
    isRemote,
    omitUndefined,
    throwIfSelectorIsNotId,
    transformToClass,
    triggerBeforeSave,
    triggerBeforeInsert,
    triggerBeforeUpdate,
    triggerBeforeRemove,
    triggerAfterSave,
    triggerAfterInsert,
    triggerAfterUpdate,
    triggerAfterRemove,
    wrapTransform
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class_events":{"fromJSONValue.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_events/fromJSONValue.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function fromJSONValue(e) {
  const doc = e.currentTarget;
  doc._isNew = e.json.isNew;
}

;
module.exportDefault(fromJSONValue);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toJSONValue.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_events/toJSONValue.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function toJSONValue(e) {
  const doc = e.currentTarget;
  e.json.isNew = doc._isNew;
}

;
module.exportDefault(toJSONValue);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"class_prototype_methods":{"copy.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_prototype_methods/copy.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function copy(save) {
  const doc = this;
  save = save || false; // Use EJSON to clone object.

  const copy = EJSON.clone(doc); // Clear the "_id" field so when saving it will store it as a new document
  // instead of updating the old one.

  copy._id = null;
  copy._isNew = true;

  if (save) {
    copy.save();
  }

  return copy;
}

;
module.exportDefault(copy);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getModified.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_prototype_methods/getModified.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let utilGetModified;
module.watch(require("../utils/getModified"), {
  default(v) {
    utilGetModified = v;
  }

}, 0);

function getModified() {
  let doc = this;
  return utilGetModified({
    doc,
    transient: true
  });
}

;
module.exportDefault(getModified);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getModifiedValues.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_prototype_methods/getModifiedValues.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);
let utilGetModified;
module.watch(require("../utils/getModified"), {
  default(v) {
    utilGetModified = v;
  }

}, 1);
let rawOne;
module.watch(require("../../fields/utils/rawOne"), {
  default(v) {
    rawOne = v;
  }

}, 2);

function getModifiedValues(options = {}) {
  let {
    old = false,
    raw = false
  } = options;
  let doc = this;
  const Class = doc.constructor; // Get list of modified fields.

  const modified = utilGetModified({
    doc,
    transient: true
  }); // Get old or new values of a document.

  if (old) {
    doc = Class.findOne(doc._id);

    if (!doc) {
      doc = new Class();
    }
  } // Collect values for each field.


  const values = {};

  _each(modified, name => {
    if (raw) {
      values[name] = rawOne(doc, name);
    } else {
      values[name] = doc.get(name);
    }
  });

  return values;
}

;
module.exportDefault(getModifiedValues);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getModifier.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_prototype_methods/getModifier.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let utilGetModifier;
module.watch(require("../utils/getModifier"), {
  default(v) {
    utilGetModifier = v;
  }

}, 0);

function getModifier() {
  let doc = this;
  return utilGetModifier({
    doc
  });
}

;
module.exportDefault(getModifier);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isModified.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_prototype_methods/isModified.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let utilIsModified;
module.watch(require("../utils/isModified"), {
  default(v) {
    utilIsModified = v;
  }

}, 0);

function isModified(pattern) {
  let doc = this;
  return utilIsModified({
    doc,
    pattern,
    transient: true
  });
}

;
module.exportDefault(isModified);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reload.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_prototype_methods/reload.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let castNested;
module.watch(require("../../fields/utils/castNested"), {
  default(v) {
    castNested = v;
  }

}, 0);
let resolveValues;
module.watch(require("../../fields/utils/resolveValues"), {
  default(v) {
    resolveValues = v;
  }

}, 1);
let Event;
module.watch(require("../../events/event"), {
  default(v) {
    Event = v;
  }

}, 2);

function reload() {
  const doc = this;
  const Class = doc.constructor; // The document has to be already saved in the collection.
  // Get a document from the collection without transformation.

  const rawDoc = Class.findOne(doc._id, {
    transform: null
  });

  if (rawDoc) {
    // Trigger the "beforeInit" event handlers.
    doc.dispatchEvent(new Event('beforeInit')); // Set all fields.

    doc.set(resolveValues({
      Class,
      rawDoc
    })); // Trigger the "afterInit" event handlers.

    doc.dispatchEvent(new Event('afterInit'));
  }
}

;
module.exportDefault(reload);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"remove.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_prototype_methods/remove.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let documentRemove;
module.watch(require("../utils/document_remove.js"), {
  default(v) {
    documentRemove = v;
  }

}, 0);
let isRemote;
module.watch(require("../utils/is_remote.js"), {
  default(v) {
    isRemote = v;
  }

}, 1);
let callMeteorMethod;
module.watch(require("../utils/call_meteor_method.js"), {
  default(v) {
    callMeteorMethod = v;
  }

}, 2);

function remove(args = {}, callback) {
  let doc = this;
  let Class = doc.constructor; // If the first argument is callback function then reassign values.

  if (arguments.length === 1 && Match.test(args, Function)) {
    callback = args;
    args = {};
  } // Get variables from the first argument.


  let {
    simulation = true
  } = args; // If we are dealing with a remote collection and we are not on the server.

  if (isRemote(Class)) {
    // Prepare meteor method name to be called.
    let methodName = '/Astronomy/remove'; // Prepare arguments for the meteor method.

    let methodArgs = {
      className: Class.getName(),
      selector: {
        _id: doc._id
      },
      simulation
    };

    try {
      // Run meteor method.
      let result = callMeteorMethod(Class, methodName, [methodArgs], callback); // Change the "_isNew" flag to "true". After removing a document can be
      // saved again as a new one.

      doc._isNew = true; // Return result of the meteor method call.

      return result;
    } // Catch stub exceptions.
    catch (err) {
      if (callback) {
        callback(err);
        return null;
      }

      throw err;
    }
  } // If we can just remove a document without calling the meteor method. We may
  // be on the server or the collection may be local.


  try {
    // Prepare arguments.
    let methodArgs = {
      doc,
      simulation,
      trusted: true
    };
    let result = documentRemove(methodArgs);

    if (callback) {
      callback(undefined, result);
    }

    return result;
  } catch (err) {
    if (callback) {
      callback(err);
      return null;
    }

    throw err;
  }
}

module.exportDefault(remove);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"save.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_prototype_methods/save.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);

let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 1);

let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 2);

let _omit;

module.watch(require("lodash/omit"), {
  default(v) {
    _omit = v;
  }

}, 3);
let DDP;
module.watch(require("meteor/ddp"), {
  DDP(v) {
    DDP = v;
  }

}, 4);
let documentInsert;
module.watch(require("../utils/document_insert"), {
  default(v) {
    documentInsert = v;
  }

}, 5);
let documentUpdate;
module.watch(require("../utils/document_update"), {
  default(v) {
    documentUpdate = v;
  }

}, 6);
let isRemote;
module.watch(require("../utils/is_remote"), {
  default(v) {
    isRemote = v;
  }

}, 7);
let callMeteorMethod;
module.watch(require("../utils/call_meteor_method"), {
  default(v) {
    callMeteorMethod = v;
  }

}, 8);
let rawAll;
module.watch(require("../../fields/utils/rawAll"), {
  default(v) {
    rawAll = v;
  }

}, 9);
let castNested;
module.watch(require("../../fields/utils/castNested"), {
  default(v) {
    castNested = v;
  }

}, 10);
let getModifier;
module.watch(require("../../storage/utils/getModifier"), {
  default(v) {
    getModifier = v;
  }

}, 11);

function save(options = {}, callback) {
  const doc = this;
  const Class = doc.constructor;
  const Collection = Class.getCollection(); // If the first argument is callback function then reassign values.

  if (arguments.length === 1 && Match.test(options, Function)) {
    callback = options;
    options = {};
  } // Set default options.


  _defaults(options, {
    stopOnFirstError: true,
    simulation: true,
    forceUpdate: false
  }); // Cast all fields.


  if (options.cast) {
    _each(Class.getFields(), field => {
      doc[field.name] = field.castValue(doc[field.name], {
        clone: false,
        cast: true
      });
    });
  } // Cast only nested fields.
  else {
      castNested({
        doc,
        options: {
          clone: false
        }
      });
    } // Detect which operation we are executing.


  const inserting = doc._isNew; // Generate ID if not provided.

  if (inserting && !doc._id) {
    let generateId = true; // Don't generate the id if we're the client and the 'outermost' call.
    // This optimization saves us passing both the randomSeed and the id.
    // Passing both is redundant.

    if (Collection._isRemoteCollection()) {
      const enclosing = DDP._CurrentInvocation.get();

      if (!enclosing) {
        generateId = false;
      }
    }

    if (generateId) {
      doc._id = Collection._makeNewID();
    }
  } // If we are dealing with a remote collection and we are not on the server.


  if (isRemote(Class)) {
    // Prepare meteor method name to be called.
    const methodName = '/Astronomy/' + (inserting ? 'insert' : 'update'); // Prepare arguments for meteor method.

    const methodArgs = {
      className: Class.getName(),
      stopOnFirstError: options.stopOnFirstError,
      simulation: options.simulation
    }; // Inserting.

    if (inserting) {
      _extend(methodArgs, {
        rawDoc: rawAll(doc, {
          transient: false
        })
      });
    } // Updating.
    else {
        // If the "forceUpdate" option was set then we don't run the "getModifier"
        // function to get modifier and instead we just take entire raw object and
        // remove the "_id" field as we can't update it.
        const modifier = options.forceUpdate ? _omit(doc.raw(), ['_id']) : getModifier({
          doc
        });

        _extend(methodArgs, {
          selector: {
            _id: doc._id
          },
          modifier,
          options: {},
          fields: options.fields
        });
      }

    try {
      // Run Meteor method.
      const result = callMeteorMethod(Class, methodName, [methodArgs], callback);

      if (result && inserting) {
        // In the insert operation the value return from the meteor method is
        // a document ID.
        doc._id = result;
      } // Document is not new anymore.


      doc._isNew = false;
      return result;
    } // Catch stub exceptions.
    catch (err) {
      if (callback) {
        callback(err);
        return null;
      }

      throw err;
    }
  } // If we can just insert a document without calling the meteor method. We may
  // be on the server or the collection may be local.


  try {
    // Prepare arguments.
    let methodArgs = {
      doc,
      stopOnFirstError: options.stopOnFirstError,
      simulation: options.simulation,
      trusted: true
    };

    if (inserting) {
      let result = documentInsert(methodArgs);

      if (callback) {
        callback(undefined, result);
      }

      return result;
    } else {
      methodArgs.fields = options.fields;
      let result = documentUpdate(methodArgs);

      if (callback) {
        callback(undefined, result);
      }

      return result;
    }
  } catch (err) {
    if (callback) {
      callback(err);
      return null;
    }

    throw err;
  }
}

module.exportDefault(save);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"class_static_methods":{"find.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_static_methods/find.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  find: () => find,
  findOne: () => findOne
});

let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);

let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 1);

let _isNull;

module.watch(require("lodash/isNull"), {
  default(v) {
    _isNull = v;
  }

}, 2);

let _map;

module.watch(require("lodash/map"), {
  default(v) {
    _map = v;
  }

}, 3);
let config;
module.watch(require("../../../core/config"), {
  default(v) {
    config = v;
  }

}, 4);
let wrapTransform;
module.watch(require("../utils/wrapTransform"), {
  default(v) {
    wrapTransform = v;
  }

}, 5);
let transformToClass;
module.watch(require("../utils/transformToClass"), {
  default(v) {
    transformToClass = v;
  }

}, 6);
let Event;
module.watch(require("../../events/event"), {
  default(v) {
    Event = v;
  }

}, 7);
let Mongo;
module.watch(require("meteor/mongo"), {
  Mongo(v) {
    Mongo = v;
  }

}, 8);

function createMethod(methodName) {
  return function (selector, options) {
    let Class = this;
    let Collection = Class.getCollection(); // Get selector from arguments.

    if (arguments.length === 0) {
      selector = {};
    } else {
      selector = arguments[0];
    } // If selector is null then just proceed to collection's find method.


    if (_isNull(selector)) {
      return Collection[methodName](selector, options);
    } // Rewrite selector to make it an object.


    selector = Mongo.Collection._rewriteSelector(selector); // Set default options.

    options = _defaults({}, options, {
      defaults: config.defaults,
      children: true,
      // We don't want to clone raw object in the "find" method.
      clone: false
    }); // Modify selector and options using the "beforeFind" event handlers.

    if (!options.disableEvents) {
      Class.dispatchEvent(new Event('beforeFind', {
        selector,
        options
      }));
    }

    const typeField = Class.getTypeField();

    if ( // If it's an inherited class, then get only documents being instances of
    // the subclass...
    typeField && // ... however do not override a type property in selector when
    // developer provided it and wants to deal with it by him/herself.
    !_has(selector, typeField)) {
      // If a class has child classes then we have to fetch document being
      // instances of the parent and child classes depending on a value of
      // the "children" option.
      const children = Class.getChildren(options.children);

      if (options.children && children.length > 0) {
        children.push(Class);
        selector[typeField] = {
          $in: _map(children, Child => Child.getName())
        };
      } else {
        selector[typeField] = Class.getName();
      }
    }

    const classTransform = Class.getTransform();

    if (options.transform !== null && classTransform !== null) {
      // Wrap the transform function with the "wrapTransform" function, which
      // resolves values.
      options.transform = wrapTransform({
        Class,
        // First, try getting the transform function passed to the "find"
        // method. Later, check if the transform function is defined in the
        // class definition. If none of them contains a transform function, then
        // get the default one.
        transform: options.transform || classTransform || transformToClass({
          Class,
          options
        })
      });
    } // Execute the original method.


    let result = Collection[methodName](selector, options); // Modify a query result using the "afterFind" event handlers.

    if (!options.disableEvents) {
      Class.dispatchEvent(new Event('afterFind', {
        selector,
        options,
        result
      }));
    }

    return result;
  };
}

const find = createMethod('find');
const findOne = createMethod('findOne');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_collection.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_static_methods/get_collection.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getCollection() {
  return this.schema.collection;
}

;
module.exportDefault(getCollection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_transform.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_static_methods/get_transform.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Class;
module.watch(require("../../../core/class"), {
  default(v) {
    Class = v;
  }

}, 0);

function getTransform() {
  return this.schema.transform;
}

module.exportDefault(getTransform);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_type_field.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_static_methods/get_type_field.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getTypeField() {
  return this.schema.typeField;
}

;
module.exportDefault(getTypeField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"insert.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_static_methods/insert.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let isRemote;
module.watch(require("../utils/is_remote.js"), {
  default(v) {
    isRemote = v;
  }

}, 0);
let callMeteorMethod;
module.watch(require("../utils/call_meteor_method.js"), {
  default(v) {
    callMeteorMethod = v;
  }

}, 1);
let classInsert;
module.watch(require("../utils/class_insert.js"), {
  default(v) {
    classInsert = v;
  }

}, 2);

function insert(rawDoc, callback) {
  const Class = this;
  const Collection = Class.getCollection(); // Prepare arguments.

  const args = {
    className: Class.getName(),
    rawDoc
  }; // Generate ID if not provided.

  if (!rawDoc._id) {
    let generateId = true; // Don't generate the id if we're the client and the 'outermost' call.
    // This optimization saves us passing both the randomSeed and the id.
    // Passing both is redundant.

    if (Collection._isRemoteCollection()) {
      const enclosing = DDP._CurrentInvocation.get();

      if (!enclosing) {
        generateId = false;
      }
    }

    if (generateId) {
      rawDoc._id = Collection._makeNewID();
    }
  } // If we are dealing with a remote collection and we are not on the server.


  if (isRemote(Class)) {
    // Prepare meteor method name to be called.
    const methodName = '/Astronomy/insert';

    try {
      // Run Meteor method.
      return callMeteorMethod(Class, methodName, [args], callback);
    } // Catch stub exceptions.
    catch (err) {
      if (callback) {
        callback(err);
        return null;
      }

      throw err;
    }
  } // If we can just insert a document without calling the meteor method. We may
  // be on the server or the collection may be local.


  try {
    // Set the "trusted" argument to true.
    args.trusted = true; // Insert a document.

    let result = classInsert(args);

    if (callback) {
      callback(undefined, result);
    }

    return result;
  } catch (err) {
    if (callback) {
      callback(err);
      return null;
    }

    throw err;
  }
}

module.exportDefault(insert);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"is_secured.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_static_methods/is_secured.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 0);

function isSecured(operation) {
  if (_has(this.schema.secured, operation)) {
    return this.schema.secured[operation];
  } else {
    let common = this.schema.secured.common;
    return common !== undefined ? common : true;
  }
}

;
module.exportDefault(isSecured);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"remove.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_static_methods/remove.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let isRemote;
module.watch(require("../utils/is_remote.js"), {
  default(v) {
    isRemote = v;
  }

}, 0);
let callMeteorMethod;
module.watch(require("../utils/call_meteor_method.js"), {
  default(v) {
    callMeteorMethod = v;
  }

}, 1);
let classRemove;
module.watch(require("../utils/class_remove.js"), {
  default(v) {
    classRemove = v;
  }

}, 2);

function remove(selector, options, callback) {
  const Class = this; // If we omit options argument then it may be a callback function.

  if (options instanceof Function) {
    callback = options;
    options = {};
  } // Make sure that options is at least an empty object.


  options = options || {}; // Prepare arguments.

  const args = {
    className: Class.getName(),
    selector,
    options
  }; // If we are dealing with a remote collection and we are not on the server.

  if (isRemote(Class)) {
    // Prepare meteor method name to be called.
    const methodName = '/Astronomy/remove';

    try {
      // Run Meteor method.
      return callMeteorMethod(Class, methodName, [args], callback);
    } // Catch stub exceptions.
    catch (err) {
      if (callback) {
        callback(err);
        return null;
      }

      throw err;
    }
  } // If we can just remove a document without calling the meteor method. We may
  // be on the server or the collection may be local.


  try {
    // Set the "trusted" argument to true.
    args.trusted = true; // Remove a document.

    let result = classRemove(args);

    if (callback) {
      callback(undefined, result);
    }

    return result;
  } catch (err) {
    if (callback) {
      callback(err);
      return null;
    }

    throw err;
  }
}

module.exportDefault(remove);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"update.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_static_methods/update.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let isRemote;
module.watch(require("../utils/is_remote.js"), {
  default(v) {
    isRemote = v;
  }

}, 0);
let callMeteorMethod;
module.watch(require("../utils/call_meteor_method.js"), {
  default(v) {
    callMeteorMethod = v;
  }

}, 1);
let classUpdate;
module.watch(require("../utils/class_update.js"), {
  default(v) {
    classUpdate = v;
  }

}, 2);

function update(selector, modifier, options, callback) {
  const Class = this; // If we omit options argument then it may be a callback function.

  if (options instanceof Function) {
    callback = options;
    options = {};
  } // Make sure that options is at least an empty object.


  options = options || {}; // Prepare arguments.

  const args = {
    className: Class.getName(),
    selector,
    modifier,
    options
  }; // If we are dealing with a remote collection and we are not on the server.

  if (isRemote(Class)) {
    // Prepare meteor method name to be called.
    const methodName = '/Astronomy/update';

    try {
      // Run Meteor method.
      return callMeteorMethod(Class, methodName, [args], callback);
    } // Catch stub exceptions.
    catch (err) {
      if (callback) {
        callback(err);
        return null;
      }

      throw err;
    }
  } // If we can just remove a document without calling the meteor method. We may
  // be on the server or the collection may be local.


  try {
    // Set the "trusted" argument to true.
    args.trusted = true; // Remove a document.

    let result = classUpdate(args);

    if (callback) {
      callback(undefined, result);
    }

    return result;
  } catch (err) {
    if (callback) {
      callback(err);
      return null;
    }

    throw err;
  }
}

module.exportDefault(update);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"upsert.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/class_static_methods/upsert.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let isRemote;
module.watch(require("../utils/is_remote.js"), {
  default(v) {
    isRemote = v;
  }

}, 0);
let callMeteorMethod;
module.watch(require("../utils/call_meteor_method.js"), {
  default(v) {
    callMeteorMethod = v;
  }

}, 1);
let classUpsert;
module.watch(require("../utils/class_upsert.js"), {
  default(v) {
    classUpsert = v;
  }

}, 2);

function upsert(selector, modifier, options, callback) {
  const Class = this; // If we omit options argument then it may be a callback function.

  if (options instanceof Function) {
    callback = options;
    options = {};
  } // Make sure that options is at least an empty object.


  options = options || {}; // Prepare arguments.

  const args = {
    className: Class.getName(),
    selector,
    modifier,
    options
  }; // If we are dealing with a remote collection and we are not on the server.

  if (isRemote(Class)) {
    // Prepare meteor method name to be called.
    const methodName = '/Astronomy/upsert';

    try {
      // Run Meteor method.
      return callMeteorMethod(Class, methodName, [args], callback);
    } // Catch stub exceptions.
    catch (err) {
      if (callback) {
        callback(err);
        return null;
      }

      throw err;
    }
  } // If we can just remove a document without calling the meteor method. We may
  // be on the server or the collection may be local.


  try {
    // Set the "trusted" argument to true.
    args.trusted = true; // Remove a document.

    let result = classUpsert(args);

    if (callback) {
      callback(undefined, result);
    }

    return result;
  } catch (err) {
    if (callback) {
      callback(err);
      return null;
    }

    throw err;
  }
}

module.exportDefault(upsert);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"hooks":{"apply_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/hooks/apply_definition.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 1);

let _zipObject;

module.watch(require("lodash/zipObject"), {
  default(v) {
    _zipObject = v;
  }

}, 2);
let resolveValues;
module.watch(require("../../fields/utils/resolveValues"), {
  default(v) {
    resolveValues = v;
  }

}, 3);
let hasMeteorMethod;
module.watch(require("../utils/has_meteor_method"), {
  default(v) {
    hasMeteorMethod = v;
  }

}, 4);
let find, findOne;
module.watch(require("../class_static_methods/find"), {
  find(v) {
    find = v;
  },

  findOne(v) {
    findOne = v;
  }

}, 5);
let insert;
module.watch(require("../class_static_methods/insert"), {
  default(v) {
    insert = v;
  }

}, 6);
let update;
module.watch(require("../class_static_methods/update"), {
  default(v) {
    update = v;
  }

}, 7);
let upsert;
module.watch(require("../class_static_methods/upsert"), {
  default(v) {
    upsert = v;
  }

}, 8);
let remove;
module.watch(require("../class_static_methods/remove"), {
  default(v) {
    remove = v;
  }

}, 9);
let protoSave;
module.watch(require("../class_prototype_methods/save"), {
  default(v) {
    protoSave = v;
  }

}, 10);
let protoRemove;
module.watch(require("../class_prototype_methods/remove"), {
  default(v) {
    protoRemove = v;
  }

}, 11);
let protoReload;
module.watch(require("../class_prototype_methods/reload"), {
  default(v) {
    protoReload = v;
  }

}, 12);
let protoCopy;
module.watch(require("../class_prototype_methods/copy"), {
  default(v) {
    protoCopy = v;
  }

}, 13);
let protoGetModifier;
module.watch(require("../class_prototype_methods/getModifier"), {
  default(v) {
    protoGetModifier = v;
  }

}, 14);
let protoGetModified;
module.watch(require("../class_prototype_methods/getModified"), {
  default(v) {
    protoGetModified = v;
  }

}, 15);
let protoGetModifiedValues;
module.watch(require("../class_prototype_methods/getModifiedValues"), {
  default(v) {
    protoGetModifiedValues = v;
  }

}, 16);
let protoIsModified;
module.watch(require("../class_prototype_methods/isModified"), {
  default(v) {
    protoIsModified = v;
  }

}, 17);
let meteorInsert;
module.watch(require("../meteor_methods/insert"), {
  default(v) {
    meteorInsert = v;
  }

}, 18);
let meteorUpdate;
module.watch(require("../meteor_methods/update"), {
  default(v) {
    meteorUpdate = v;
  }

}, 19);
let meteorUpsert;
module.watch(require("../meteor_methods/upsert"), {
  default(v) {
    meteorUpsert = v;
  }

}, 20);
let meteorRemove;
module.watch(require("../meteor_methods/remove"), {
  default(v) {
    meteorRemove = v;
  }

}, 21);
let fromJSONValue;
module.watch(require("../class_events/fromJSONValue"), {
  default(v) {
    fromJSONValue = v;
  }

}, 22);
let toJSONValue;
module.watch(require("../class_events/toJSONValue"), {
  default(v) {
    toJSONValue = v;
  }

}, 23);

function onApplyDefinition(Class, parsedDefinition, className) {
  const schema = Class.schema;

  if (parsedDefinition.collection) {
    const Collection = schema.collection = parsedDefinition.collection; // Get type of the "_id" field.

    const id = Collection._makeNewID();

    const IdType = id.constructor;
    Class.extend({
      // Add the "_id" field if not already added.
      fields: {
        _id: {
          name: '_id',
          type: IdType,
          optional: true
        }
      },
      // Add storage events.
      events: {
        toJSONValue: [toJSONValue],
        fromJSONValue: [fromJSONValue]
      }
    }, ['fields', 'events']); // If it's a remote collection then we register methods on the connection
    // object of the collection.

    const connection = Collection._connection;

    if (connection) {
      // Prepare meteor methods to be added.
      const meteorMethods = {
        '/Astronomy/insert': meteorInsert,
        '/Astronomy/update': meteorUpdate,
        '/Astronomy/upsert': meteorUpsert,
        '/Astronomy/remove': meteorRemove
      };

      _each(meteorMethods, (meteorMethod, methodName) => {
        if (!hasMeteorMethod(connection, methodName)) {
          // Add meteor method.
          connection.methods(_zipObject([methodName], [meteorMethod]));
        }
      });
    } // Class static methods.


    Class.find = find;
    Class.findOne = findOne;
    Class.insert = insert;
    Class.update = update;
    Class.upsert = upsert;
    Class.remove = remove; // Class prototype methods.

    Class.prototype.save = protoSave;
    Class.prototype.remove = protoRemove;
    Class.prototype.reload = protoReload;
    Class.prototype.copy = protoCopy;
    Class.prototype.getModifier = protoGetModifier;
    Class.prototype.getModified = protoGetModified;
    Class.prototype.getModifiedValues = protoGetModifiedValues;
    Class.prototype.isModified = protoIsModified;
  } // Apply type field.


  if (parsedDefinition.typeField) {
    const typeField = schema.typeField = parsedDefinition.typeField; // Add the type field if not already added.

    if (!Class.hasField(typeField)) {
      Class.extend({
        fields: {
          [typeField]: {
            type: String,
            index: 1
          }
        },
        events: {
          afterInit(e) {
            const doc = e.currentTarget;
            const Class = doc.constructor;
            doc[typeField] = Class.getName();
          }

        }
      }, ['fields', 'events']);
    }

    if (parsedDefinition.typeField) {
      schema.typeField = parsedDefinition.typeField;
    }
  } // If class has already assigned collection.


  const Collection = Class.getCollection();

  if (Collection) {
    // Apply the "transform" property only if it's a function or equal null.
    if (typeof parsedDefinition.transform === 'function' || parsedDefinition.transform === null) {
      schema.transform = parsedDefinition.transform;
    }

    if (parsedDefinition.secured !== undefined) {
      _extend(schema.secured, parsedDefinition.secured);
    }
  }
}

;
module.exportDefault(onApplyDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_class.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/hooks/init_class.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let getCollection;
module.watch(require("../class_static_methods/get_collection.js"), {
  default(v) {
    getCollection = v;
  }

}, 0);
let getTypeField;
module.watch(require("../class_static_methods/get_type_field.js"), {
  default(v) {
    getTypeField = v;
  }

}, 1);
let getTransform;
module.watch(require("../class_static_methods/get_transform.js"), {
  default(v) {
    getTransform = v;
  }

}, 2);
let isSecured;
module.watch(require("../class_static_methods/is_secured.js"), {
  default(v) {
    isSecured = v;
  }

}, 3);

function onInitClass(Class, className) {
  // Class static methods.
  Class.getCollection = getCollection;
  Class.getTypeField = getTypeField;
  Class.getTransform = getTransform;
  Class.isSecured = isSecured;
}

;
module.exportDefault(onInitClass);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/hooks/init_definition.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitDefinition(definition, className) {
  definition.collection = undefined;
  definition.typeField = undefined;
  definition.transform = undefined;
  definition.secured = undefined;
}

;
module.exportDefault(onInitDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_schema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/hooks/init_schema.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitSchema(schema, className) {
  schema.collection = undefined;
  schema.typeField = undefined;
  schema.transform = undefined;
  schema.secured = {
    common: true
  };
}

;
module.exportDefault(onInitSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"merge_definitions.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/hooks/merge_definitions.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 0);

function onMergeDefinitions(targetDefinition, sourceDefinition, ClassName) {
  if (sourceDefinition.collection) {
    targetDefinition.collection = sourceDefinition.collection;
  }

  if (sourceDefinition.typeField) {
    targetDefinition.typeField = sourceDefinition.typeField;
  }

  if (sourceDefinition.transform !== undefined) {
    targetDefinition.transform = sourceDefinition.transform;
  }

  if (sourceDefinition.secured !== undefined) {
    targetDefinition.secured = _extend({}, targetDefinition.secured, sourceDefinition.secured);
  }
}

;
module.exportDefault(onMergeDefinitions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"parse_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/hooks/parse_definition.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 0);

function onParseDefinition(parsedDefinition, definition, className) {
  // Check existence and validity of the "collection" property.
  if (definition.collection !== undefined) {
    // The "collection" property has to be an instance of the
    // "Mongo.Collection".
    if (!(definition.collection instanceof Mongo.Collection)) {
      throwParseError([{
        'class': className
      }, {
        'property': 'collection'
      }, 'Property value has to be an instance of "Mongo.Collection"']);
    }

    parsedDefinition.collection = definition.collection;
  } // Check existence and validity of the "typeField" property.


  if (definition.typeField !== undefined) {
    // The "typeField" property has to be a string.
    if (!Match.test(definition.typeField, String)) {
      throwParseError([{
        'class': className
      }, {
        'property': 'typeField'
      }, 'Property value has to be a string']);
    }

    parsedDefinition.typeField = definition.typeField;
  } // Check existence and validity of the "transform" property.


  if (definition.transform !== undefined) {
    // The "transform" property has to be a function.
    if (!Match.test(definition.transform, Match.OneOf(Function, null))) {
      throwParseError([{
        'class': className
      }, {
        'property': 'transform'
      }, 'Property value has to be a function or null']);
    }

    parsedDefinition.transform = definition.transform;
  } // Check existence and validity of the "secured" property.


  if (definition.secured !== undefined) {
    if (!Match.test(definition.secured, Match.OneOf(Boolean, Object))) {
      throwParseError([{
        'class': className
      }, {
        'property': 'secured'
      }, 'Property value has to be a boolean or an object with keys being ' + 'method name and values being boolean']);
    }

    if (typeof definition.secured === 'boolean') {
      parsedDefinition.secured = {
        common: definition.secured
      };
    } else {
      parsedDefinition.secured = definition.secured;
    }
  }
}

;
module.exportDefault(onParseDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"meteor_methods":{"insert.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/meteor_methods/insert.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let classInsert;
module.watch(require("../utils/class_insert.js"), {
  default(v) {
    classInsert = v;
  }

}, 0);
let check, Match;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  },

  Match(v) {
    Match = v;
  }

}, 1);

function insert(args) {
  check(args, Match.Any);
  return classInsert(args);
}

;
module.exportDefault(insert);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"remove.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/meteor_methods/remove.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let classRemove;
module.watch(require("../utils/class_remove.js"), {
  default(v) {
    classRemove = v;
  }

}, 0);
let check, Match;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  },

  Match(v) {
    Match = v;
  }

}, 1);

function remove(args) {
  check(args, Match.Any);
  return classRemove(args);
}

;
module.exportDefault(remove);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"update.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/meteor_methods/update.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let classUpdate;
module.watch(require("../utils/class_update.js"), {
  default(v) {
    classUpdate = v;
  }

}, 0);
let check, Match;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  },

  Match(v) {
    Match = v;
  }

}, 1);

function update(args) {
  check(args, Match.Any);
  return classUpdate(args);
}

;
module.exportDefault(update);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"upsert.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/meteor_methods/upsert.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let classUpsert;
module.watch(require("../utils/class_upsert.js"), {
  default(v) {
    classUpsert = v;
  }

}, 0);
let check, Match;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  },

  Match(v) {
    Match = v;
  }

}, 1);

function upsert(args) {
  check(args, Match.Any);
  return classUpsert(args);
}

;
module.exportDefault(upsert);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"utils":{"already_in_simulation.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/already_in_simulation.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let DDP;
module.watch(require("meteor/ddp"), {
  DDP(v) {
    DDP = v;
  }

}, 0);

function alreadyInSimulation() {
  const enclosing = DDP._CurrentInvocation.get();

  return enclosing && enclosing.isSimulation;
}

module.exportDefault(alreadyInSimulation);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"apply_modifier.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/apply_modifier.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _size;

module.watch(require("lodash/size"), {
  default(v) {
    _size = v;
  }

}, 0);
let config;
module.watch(require("../../../core/config"), {
  default(v) {
    config = v;
  }

}, 1);
let castNested;
module.watch(require("../../fields/utils/castNested"), {
  default(v) {
    castNested = v;
  }

}, 2);
let setAll;
module.watch(require("../../fields/utils/set_all"), {
  default(v) {
    setAll = v;
  }

}, 3);
let LocalCollection;
module.watch(require("meteor/minimongo"), {
  LocalCollection(v) {
    LocalCollection = v;
  }

}, 4);

function applyModifier(args = {}) {
  const {
    doc,
    modifier,
    options
  } = args; // Apply modifier only if provided.

  if (modifier && _size(modifier) > 0) {
    // Get raw object because the "_modify" method can only work with plain
    // objects.
    const rawDoc = doc.raw(); // Use Minimongo's the "_modify" method to apply modifier.

    LocalCollection._modify(rawDoc, modifier, options); // Set all values back again on a document.


    setAll(doc, rawDoc, {
      defaults: config.defaults,
      clone: false,
      cast: false
    });
  }
}

;
module.exportDefault(applyModifier);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"call_meteor_method.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/call_meteor_method.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const callMeteorMethod = (Class, methodName, methodArgs, callback) => {
  const Collection = Class.getCollection();
  let connection = Collection && Collection._connection;

  if (!connection && (!Collection || !Collection._name)) {
    connection = Meteor.connection || Meteor.server;
  } // Prepare meteor method options.


  const methodOptions = {
    throwStubExceptions: true,
    returnStubValue: true
  };
  return connection.apply(methodName, methodArgs, methodOptions, callback);
};

module.exportDefault(callMeteorMethod);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class_insert.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/class_insert.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let AstroClass;
module.watch(require("../../../core/class.js"), {
  default(v) {
    AstroClass = v;
  }

}, 0);
let documentInsert;
module.watch(require("./document_insert.js"), {
  default(v) {
    documentInsert = v;
  }

}, 1);

function classInsert(args = {}) {
  const {
    className,
    rawDoc,
    stopOnFirstError,
    fields,
    simulation = true,
    trusted = false
  } = args; // Stop execution, if we are not on the server, when the "simulation" flag is
  // not set.

  if (!simulation && !Meteor.isServer) {
    return;
  }

  const Class = AstroClass.get(className); // Create a new document.

  const doc = new Class(rawDoc); // Insert a document.

  return documentInsert({
    doc,
    stopOnFirstError,
    simulation,
    trusted
  });
}

;
module.exportDefault(classInsert);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class_remove.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/class_remove.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let AstroClass;
module.watch(require("../../../core/class.js"), {
  default(v) {
    AstroClass = v;
  }

}, 0);
let alreadyInSimulation;
module.watch(require("./already_in_simulation.js"), {
  default(v) {
    alreadyInSimulation = v;
  }

}, 1);
let throwIfSelectorIsNotId;
module.watch(require("./throw_if_selector_is_not_id.js"), {
  default(v) {
    throwIfSelectorIsNotId = v;
  }

}, 2);
let documentRemove;
module.watch(require("./document_remove.js"), {
  default(v) {
    documentRemove = v;
  }

}, 3);

function classRemove(args = {}) {
  const {
    className,
    selector,
    options,
    simulation = true,
    trusted = false
  } = args; // Stop execution, if we are not on the server, when the "simulation" flag is
  // not set.

  if (!simulation && !Meteor.isServer) {
    return;
  } // Throw exception if we are trying to perform an operation on more than one
  // document at once and it's not trusted call.


  if (!trusted && !alreadyInSimulation()) {
    throwIfSelectorIsNotId(selector, 'remove');
  }

  const Class = AstroClass.get(className); // Get all documents matching selector.

  const docs = Class.find(selector, options); // Prepare result of the method execution.

  let result = 0;
  docs.forEach(doc => {
    // Update a document.
    result += documentRemove({
      doc,
      simulation,
      trusted
    });
  });
  return result;
}

;
module.exportDefault(classRemove);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class_update.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/class_update.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 0);

let _mapKeys;

module.watch(require("lodash/mapKeys"), {
  default(v) {
    _mapKeys = v;
  }

}, 1);
let AstroClass;
module.watch(require("../../../core/class.js"), {
  default(v) {
    AstroClass = v;
  }

}, 2);
let alreadyInSimulation;
module.watch(require("./already_in_simulation.js"), {
  default(v) {
    alreadyInSimulation = v;
  }

}, 3);
let throwIfSelectorIsNotId;
module.watch(require("./throw_if_selector_is_not_id.js"), {
  default(v) {
    throwIfSelectorIsNotId = v;
  }

}, 4);
let documentUpdate;
module.watch(require("./document_update.js"), {
  default(v) {
    documentUpdate = v;
  }

}, 5);
let applyModifier;
module.watch(require("./apply_modifier.js"), {
  default(v) {
    applyModifier = v;
  }

}, 6);
let Minimongo;
module.watch(require("meteor/minimongo"), {
  Minimongo(v) {
    Minimongo = v;
  }

}, 7);

function classUpdate(args = {}) {
  const {
    className,
    selector,
    modifier,
    options,
    stopOnFirstError,
    fields,
    simulation = true,
    trusted = false
  } = args; // Stop execution, if we are not on the server, when the "simulation" flag is
  // not set.

  if (!simulation && !Meteor.isServer) {
    return;
  } // Throw exception if we are trying to perform an operation on more than one
  // document at once and it's not trusted call.


  if (!trusted && !alreadyInSimulation()) {
    throwIfSelectorIsNotId(selector, 'update');
  }

  const Class = AstroClass.get(className); // Get all documents matching selector.

  let docs;
  let oldDocs;

  if (options.multi) {
    docs = Class.find(selector, options); // Get all old documents in one batched query so that performance is
    // improved when updating many documents. Map all documents to an object
    // where properites are documents' IDs.

    oldDocs = _mapKeys(Class.find(selector, _extend(options, {
      defaults: false
    })).fetch(), oldDoc => oldDoc._id);
  } else {
    docs = Class.find(selector, _extend(options, {
      limit: 1
    })); // Get all old documents in one batched query so that performance is
    // improved when updating many documents. Map all documents to an object
    // where properites are documents' IDs.

    oldDocs = _mapKeys(Class.find(selector, _extend(options, {
      limit: 1,
      defaults: false
    })).fetch(), oldDoc => oldDoc._id);
  } // Create a minimongo matcher object to find array indexes on the projection
  // operator use.


  const matcher = new Minimongo.Matcher(selector); // Prepare result of the method execution.

  let result = 0;
  docs.forEach(doc => {
    const oldDoc = oldDocs[doc._id]; // Use matcher to find array indexes in a given document that needs updating
    // on the projection operator use.

    let queryResult = matcher.documentMatches(doc); // Apply modifier.

    applyModifier({
      doc,
      modifier,
      options: queryResult.arrayIndices ? {
        arrayIndices: queryResult.arrayIndices
      } : {}
    }); // Update a document.

    result += documentUpdate({
      doc,
      stopOnFirstError,
      simulation,
      fields,
      trusted,
      oldDoc
    });
  });
  return result;
}

;
module.exportDefault(classUpdate);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class_upsert.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/class_upsert.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 0);
let AstroClass;
module.watch(require("../../../core/class.js"), {
  default(v) {
    AstroClass = v;
  }

}, 1);
let alreadyInSimulation;
module.watch(require("./already_in_simulation.js"), {
  default(v) {
    alreadyInSimulation = v;
  }

}, 2);
let throwIfSelectorIsNotId;
module.watch(require("./throw_if_selector_is_not_id.js"), {
  default(v) {
    throwIfSelectorIsNotId = v;
  }

}, 3);
let documentInsert;
module.watch(require("./document_insert.js"), {
  default(v) {
    documentInsert = v;
  }

}, 4);
let documentUpdate;
module.watch(require("./document_update.js"), {
  default(v) {
    documentUpdate = v;
  }

}, 5);
let applyModifier;
module.watch(require("./apply_modifier.js"), {
  default(v) {
    applyModifier = v;
  }

}, 6);
let Minimongo, LocalCollection;
module.watch(require("meteor/minimongo"), {
  Minimongo(v) {
    Minimongo = v;
  },

  LocalCollection(v) {
    LocalCollection = v;
  }

}, 7);

function classUpsert(args = {}) {
  const {
    className,
    selector,
    modifier,
    options,
    stopOnFirstError,
    fields,
    simulation = true,
    trusted = false
  } = args; // Stop execution, if we are not on the server, when the "simulation" flag is
  // not set.

  if (!simulation && !Meteor.isServer) {
    return;
  } // Throw exception if we are trying to perform an operation on more than one
  // document at once and it's not trusted call.


  if (!trusted && !alreadyInSimulation()) {
    throwIfSelectorIsNotId(selector, 'upsert');
  }

  const Class = AstroClass.get(className); // Get all documents matching selector.

  let docs;

  if (options.multi) {
    docs = Class.find(selector, options);
  } else {
    docs = Class.find(selector, _extend(options, {
      limit: 1
    }));
  } // Create a minimongo matcher object to find array indexes on the projection
  // operator use.


  const matcher = new Minimongo.Matcher(selector); // Prepare result of the method execution.

  const result = {
    numberAffected: 0,
    insertedId: null
  };

  if (docs.count() > 0) {
    docs.forEach(doc => {
      // Use matcher to find array indexes in a given document that needs updating
      // on the projection operator use.
      let queryResult = matcher.documentMatches(doc); // Apply modifier.

      applyModifier({
        doc,
        modifier,
        options: queryResult.arrayIndices ? {
          arrayIndices: queryResult.arrayIndices
        } : {}
      }); // Update a document.

      result.numberAffected += documentUpdate({
        doc,
        stopOnFirstError,
        simulation,
        fields,
        trusted
      });
    });
  } else {
    let doc; // Create a new document from selector.

    if (LocalCollection._createUpsertDocument) {
      doc = new Class(LocalCollection._createUpsertDocument(selector, modifier));
    } else if (LocalCollection._removeDollarOperators) {
      doc = new Class(LocalCollection._removeDollarOperators(selector)); // Apply modifier for the insert operation.

      applyModifier({
        doc,
        modifier,
        options: {
          isInsert: true
        }
      });
    } // Insert a document.


    result.insertedId = documentInsert({
      doc,
      stopOnFirstError,
      simulation,
      trusted
    });
  }

  return result;
}

;
module.exportDefault(classUpsert);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"diff.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/diff.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _isArray;

module.watch(require("lodash/isArray"), {
  default(v) {
    _isArray = v;
  }

}, 1);

let _isPlainObject;

module.watch(require("lodash/isPlainObject"), {
  default(v) {
    _isPlainObject = v;
  }

}, 2);

let _keys;

module.watch(require("lodash/keys"), {
  default(v) {
    _keys = v;
  }

}, 3);

let _noop;

module.watch(require("lodash/noop"), {
  default(v) {
    _noop = v;
  }

}, 4);

let _union;

module.watch(require("lodash/union"), {
  default(v) {
    _union = v;
  }

}, 5);
let EJSON;
module.watch(require("meteor/ejson"), {
  EJSON(v) {
    EJSON = v;
  }

}, 6);

function diff(args = {}) {
  const {
    fieldName,
    newDoc,
    oldDoc,
    prefix = '',
    result,
    onDiff = _noop,
    onObjectDiff = _noop,
    onListDiff = _noop,
    onScalarDiff = _noop
  } = args; // Combine fields from old and new document.

  const fieldsNames = _union(_keys(oldDoc), _keys(newDoc)); // Loop through all fields and check if they differ.


  _each(fieldsNames, function (fieldName) {
    const oldValue = oldDoc[fieldName];
    const newValue = newDoc[fieldName];

    if (!EJSON.equals(oldValue, newValue)) {
      const nestedPrefix = (prefix && prefix + '.') + fieldName;
      onDiff({
        oldValue,
        newValue,
        prefix: nestedPrefix,
        result
      }); // Compare two objects.

      if (_isPlainObject(oldValue) && _isPlainObject(newValue)) {
        onObjectDiff({
          oldDoc: oldValue,
          newDoc: newValue,
          prefix: nestedPrefix,
          result
        });
      } // Compare two lists.
      else if (_isArray(oldValue) && _isArray(newValue)) {
          onListDiff({
            oldList: oldValue,
            newList: newValue,
            prefix: nestedPrefix,
            result
          });
        } // Compare two scalars.
        else {
            onScalarDiff({
              oldValue,
              newValue,
              prefix: nestedPrefix,
              result
            });
          }
    }
  });
}

module.exportDefault(diff);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"document_insert.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/document_insert.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _omitBy;

module.watch(require("lodash/omitBy"), {
  default(v) {
    _omitBy = v;
  }

}, 0);
let castNested;
module.watch(require("../../fields/utils/castNested"), {
  default(v) {
    castNested = v;
  }

}, 1);
let rawAll;
module.watch(require("../../fields/utils/rawAll"), {
  default(v) {
    rawAll = v;
  }

}, 2);
let triggerBeforeSave;
module.watch(require("./trigger_before_save"), {
  default(v) {
    triggerBeforeSave = v;
  }

}, 3);
let triggerBeforeInsert;
module.watch(require("./trigger_before_insert"), {
  default(v) {
    triggerBeforeInsert = v;
  }

}, 4);
let triggerAfterSave;
module.watch(require("./trigger_after_save"), {
  default(v) {
    triggerAfterSave = v;
  }

}, 5);
let triggerAfterInsert;
module.watch(require("./trigger_after_insert"), {
  default(v) {
    triggerAfterInsert = v;
  }

}, 6);
let documentValidate;
module.watch(require("../../validators/utils/document_validate"), {
  default(v) {
    documentValidate = v;
  }

}, 7);

function documentInsert(args = {}) {
  const {
    doc,
    stopOnFirstError,
    fields,
    simulation = true,
    trusted = false
  } = args; // Stop execution, if we are not on the server, when the "simulation" flag is
  // not set.

  if (!simulation && !Meteor.isServer) {
    return;
  }

  const Class = doc.constructor;
  const Collection = Class.getCollection(); // Generate ID if not provided.

  if (!doc._id) {
    doc._id = Collection._makeNewID();
  } // Check if a class is secured.


  if (Class.isSecured('insert') && Meteor.isServer && !trusted) {
    throw new Meteor.Error(403, 'Inserting from the client is not allowed');
  } // Cast nested documents.


  castNested({
    doc,
    options: {
      clone: false
    }
  }); // Trigger before events.

  triggerBeforeSave(doc, trusted);
  triggerBeforeInsert(doc, trusted); // Cast nested documents.

  castNested({
    doc,
    options: {
      clone: false
    }
  }); // Validate a document.

  documentValidate({
    doc,
    fields,
    stopOnFirstError,
    simulation
  }); // Get plain values of all fields. Pick only values that we want to save.

  let values = rawAll(doc, {
    transient: false
  });
  values = _omitBy(values, value => value === undefined); // Insert a document.

  try {
    // There is a difference in what the insert method returns depending on the
    // environment. On the client it returns an inserted document id, on the
    // server it returns array of inserted documents. So we always return the
    // generated id. We can't send an entire document because it could be a
    // security issue if we are not subscribed to all fields of a document.
    Collection._collection.insert(values); // Change the "_isNew" flag to "false". Mark a document as not new.


    doc._isNew = false; // Trigger after events.

    triggerAfterInsert(doc, trusted);
    triggerAfterSave(doc, trusted);
    return doc._id;
  } catch (err) {
    if (err.name === 'MongoError' || err.name === 'MinimongoError') {
      throw new Meteor.Error(409, err.toString());
    } else {
      throw err;
    }
  }
}

;
module.exportDefault(documentInsert);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"document_remove.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/document_remove.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let triggerBeforeRemove;
module.watch(require("./trigger_before_remove.js"), {
  default(v) {
    triggerBeforeRemove = v;
  }

}, 0);
let triggerAfterRemove;
module.watch(require("./trigger_after_remove.js"), {
  default(v) {
    triggerAfterRemove = v;
  }

}, 1);

function documentRemove(args = {}) {
  const {
    doc,
    simulation = true,
    trusted = false
  } = args; // Stop execution, if we are not on the server, when the "simulation" flag is
  // not set.

  if (!simulation && !Meteor.isServer) {
    return;
  }

  const Class = doc.constructor;
  const Collection = Class.getCollection(); // Remove only when document has the "_id" field (it's persisted).

  if (doc._isNew) {
    return 0;
  } // Check if a class is secured.


  if (Class.isSecured('remove') && Meteor.isServer && !trusted) {
    throw new Meteor.Error(403, 'Removing from the client is not allowed');
  } // Trigger before events.


  triggerBeforeRemove(doc, trusted); // Remove a document.

  try {
    const result = Collection._collection.remove({
      _id: doc._id
    }); // Mark a document as new, so it will be possible to save it again.


    doc._isNew = true; // Trigger after events.

    triggerAfterRemove(doc, trusted);
    return result;
  } catch (err) {
    if (err.name === 'MongoError' || err.name === 'MinimongoError') {
      throw new Meteor.Error(409, err.toString());
    } else {
      throw err;
    }
  }
}

;
module.exportDefault(documentRemove);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"document_update.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/document_update.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _omit;

module.watch(require("lodash/omit"), {
  default(v) {
    _omit = v;
  }

}, 0);

let _size;

module.watch(require("lodash/size"), {
  default(v) {
    _size = v;
  }

}, 1);
let castNested;
module.watch(require("../../fields/utils/castNested"), {
  default(v) {
    castNested = v;
  }

}, 2);
let triggerBeforeSave;
module.watch(require("./trigger_before_save"), {
  default(v) {
    triggerBeforeSave = v;
  }

}, 3);
let triggerBeforeUpdate;
module.watch(require("./trigger_before_update"), {
  default(v) {
    triggerBeforeUpdate = v;
  }

}, 4);
let triggerAfterSave;
module.watch(require("./trigger_after_save"), {
  default(v) {
    triggerAfterSave = v;
  }

}, 5);
let triggerAfterUpdate;
module.watch(require("./trigger_after_update"), {
  default(v) {
    triggerAfterUpdate = v;
  }

}, 6);
let isModified;
module.watch(require("./isModified"), {
  default(v) {
    isModified = v;
  }

}, 7);
let getModifier;
module.watch(require("./getModifier"), {
  default(v) {
    getModifier = v;
  }

}, 8);
let documentValidate;
module.watch(require("../../validators/utils/document_validate"), {
  default(v) {
    documentValidate = v;
  }

}, 9);

function documentUpdate(args = {}) {
  let {
    doc,
    stopOnFirstError,
    fields,
    simulation = true,
    forceUpdate = false,
    trusted = false,
    oldDoc
  } = args; // Stop execution, if we are not on the server, when the "simulation" flag is
  // not set.

  if (!simulation && !Meteor.isServer) {
    return;
  }

  let Class = doc.constructor;
  let Collection = Class.getCollection(); // Return if there were no modifications.

  if (!isModified({
    doc,
    fields
  })) {
    // Validate a document even if there were no modifications.
    documentValidate({
      doc,
      fields,
      stopOnFirstError,
      simulation
    }); // 0 documents were modified.

    return 0;
  } // Check if a class is secured.


  if (Class.isSecured('update') && Meteor.isServer && !trusted) {
    throw new Meteor.Error(403, 'Updating from the client is not allowed');
  } // Cast nested documents.


  castNested({
    doc,
    options: {
      clone: false
    }
  }); // Trigger before events.

  triggerBeforeSave(doc, trusted);
  triggerBeforeUpdate(doc, trusted); // Cast nested documents.

  castNested({
    doc,
    options: {
      clone: false
    }
  }); // Validate a document.

  documentValidate({
    doc,
    fields,
    stopOnFirstError,
    simulation
  }); // Get modifier.
  // If the "forceUpdate" option was set then we don't run the "getModifier"
  // function to get modifier and instead we just take entire raw object and
  // remove the "_id" field as we can't update it.

  const modifier = forceUpdate ? _omit(doc.raw(), ['_id']) : getModifier({
    doc,
    fields,
    oldDoc
  }); // Stop execution is a modifier is empty.

  if (_size(modifier) === 0) {
    return 0;
  } // Update a document.


  try {
    const result = Collection._collection.update({
      _id: doc._id
    }, modifier); // Trigger after events.


    triggerAfterUpdate(doc, trusted);
    triggerAfterSave(doc, trusted);
    return result;
  } catch (err) {
    if (err.name === 'MongoError' || err.name === 'MinimongoError') {
      throw new Meteor.Error(409, err.toString());
    } else {
      throw err;
    }
  }
}

;
module.exportDefault(documentUpdate);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getModified.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/getModified.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

const module1 = module;

let _each;

module1.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _isPlainObject;

module1.watch(require("lodash/isPlainObject"), {
  default(v) {
    _isPlainObject = v;
  }

}, 1);

let _range;

module1.watch(require("lodash/range"), {
  default(v) {
    _range = v;
  }

}, 2);
let EJSON;
module1.watch(require("meteor/ejson"), {
  EJSON(v) {
    EJSON = v;
  }

}, 3);
let throwParseError;
module1.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 4);
let rawMany;
module1.watch(require("../../fields/utils/rawMany"), {
  default(v) {
    rawMany = v;
  }

}, 5);
let diff;
module1.watch(require("./diff"), {
  default(v) {
    diff = v;
  }

}, 6);
const handlers = {};

handlers.onDiff = function ({
  prefix,
  result
}) {
  result.push(prefix);
};

handlers.onObjectDiff = function ({
  oldDoc,
  newDoc,
  prefix,
  result
}) {
  diff((0, _objectSpread2.default)({
    oldDoc,
    newDoc,
    prefix,
    result
  }, handlers));
};

handlers.onListDiff = function ({
  oldList,
  newList,
  prefix,
  result
}) {
  const maxLength = Math.max(oldList.length, newList.length);

  _each(_range(maxLength), function (index) {
    const arrayPrefix = `${prefix}.${index}`;
    const oldElement = oldList[index];
    const newElement = newList[index];

    if (!EJSON.equals(oldElement, newElement)) {
      result.push(arrayPrefix); // If both array elements are object, then we perform diff between
      // them.

      if (_isPlainObject(oldElement) && _isPlainObject(newElement)) {
        // Get a difference between elements.
        diff((0, _objectSpread2.default)({
          oldDoc: oldElement,
          newDoc: newElement,
          prefix: arrayPrefix,
          result
        }, handlers));
      }
    }
  });
};

function getModified(options = {}) {
  let {
    doc: newDoc,
    transient = false,
    immutable = false,
    fields
  } = options;
  const Class = newDoc.constructor;
  const opts = {
    defaults: false
  };
  let oldDoc = Class.findOne(newDoc._id, opts);

  if (!oldDoc) {
    oldDoc = new Class({}, opts);
  } // If there is no document before modifications that may mean that we are not
  // subscribed to the publication publishing given document or we modified the
  // _id of a document.


  if (!oldDoc) {
    throwParseError([{
      'module': 'storage'
    }, {
      'utility': 'getModified'
    }, `Can not get a document before modifications. You are not subscribed ` + `to the publication publishing a "${Class.getName()}" document with ` + `the id "${newDoc._id}" or you have modified the "_id" field`]);
  } // If there are not fields specified, then get all of them.


  if (!fields) {
    fields = Class.getFieldsNames();
  }

  const result = [];
  diff((0, _objectSpread2.default)({
    // Get raw data from the docs.
    oldDoc: rawMany(oldDoc, fields, {
      transient,
      immutable,
      undefined: false
    }),
    newDoc: rawMany(newDoc, fields, {
      transient,
      immutable,
      undefined: false
    }),
    result
  }, handlers));
  return result;
}

;
module1.exportDefault(getModified);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getModifier.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/getModifier.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

const module1 = module;

let _each;

module1.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _isNumber;

module1.watch(require("lodash/isNumber"), {
  default(v) {
    _isNumber = v;
  }

}, 1);

let _isPlainObject;

module1.watch(require("lodash/isPlainObject"), {
  default(v) {
    _isPlainObject = v;
  }

}, 2);

let _omitBy;

module1.watch(require("lodash/omitBy"), {
  default(v) {
    _omitBy = v;
  }

}, 3);

let _size;

module1.watch(require("lodash/size"), {
  default(v) {
    _size = v;
  }

}, 4);
let EJSON;
module1.watch(require("meteor/ejson"), {
  EJSON(v) {
    EJSON = v;
  }

}, 5);
let throwParseError;
module1.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 6);
let rawMany;
module1.watch(require("../../fields/utils/rawMany"), {
  default(v) {
    rawMany = v;
  }

}, 7);
let diff;
module1.watch(require("./diff"), {
  default(v) {
    diff = v;
  }

}, 8);
const handlers = {};

handlers.onObjectDiff = function ({
  oldDoc,
  newDoc,
  prefix,
  result
}) {
  diff((0, _objectSpread2.default)({
    oldDoc,
    newDoc,
    prefix,
    result
  }, handlers));
};

handlers.onListDiff = function ({
  oldList,
  newList,
  prefix,
  result
}) {
  // NOTE: We need check a new array size. If its length increased or stayed the
  // same then all changes can be registered using the $set modifier. If an
  // array length decreased, then we should slice it. However it may not be
  // possible if some element has also changed. In such situation we have to
  // override entire array.
  // Array length decreased.
  if (newList.length < oldList.length) {
    // Due to an error in MiniMongo it's not possible to apply $push modifier
    // with the $slice operator set to positive number. That's why we have to
    // override entire array when it was shrinked.
    result.$set[prefix] = newList;
  } // Array length increased or stayed the same.
  else if (newList.length >= oldList.length) {
      let modified = false; // Compare up to number of elements in the new list.

      _each(newList, (newElement, index) => {
        const arrayPrefix = `${prefix}.${index}`;
        const oldElement = oldList[index]; // When iterating over elements up to old array length.

        if (index < oldList.length) {
          if (!EJSON.equals(oldElement, newElement)) {
            modified = true; // If both array elements are object, then we perform diff.

            if (_isPlainObject(oldElement) && _isPlainObject(newElement)) {
              // Get a difference between elements.
              diff((0, _objectSpread2.default)({
                oldDoc: oldElement,
                newDoc: newElement,
                prefix: arrayPrefix,
                result
              }, handlers));
            } else {
              result.$set[arrayPrefix] = newElement;
            }
          }
        } // When iterating over newly added array elements.
        else {
            // Elements up to the old array length were modified, so we can not
            // use the $push operator in conjunction with the $set operator.
            if (modified) {
              // If both array elements are object, then we perform diff.
              if (_isPlainObject(oldElement) && _isPlainObject(newElement)) {
                // Get a difference between elements.
                diff((0, _objectSpread2.default)({
                  oldDoc: oldElement,
                  newDoc: newElement,
                  prefix: arrayPrefix,
                  result
                }, handlers));
              } else {
                result.$set[arrayPrefix] = newElement;
              }
            } // Elements up to the old array length were not modified, so if there
            // is any new array element added, we can insert it with the $push
            // operator.
            else {
                // We have to check if there is only one element being pushed or
                // more. If there is only one element then we use
                // $push[prefix]: element
                if (newList.length - oldList.length === 1) {
                  result.$push[prefix] = newElement;
                } // If there are more elements we have to use
                // $push: { [prefix]: { $each: elements } }
                else {
                    result.$push[prefix] = {
                      $each: newList.slice(index)
                    }; // We have to break each loop here. We don't need to check any
                    // more elements.

                    return false;
                  }
              }
          }
      });
    }
};

handlers.onScalarDiff = function ({
  oldValue,
  newValue,
  prefix,
  result
}) {
  if (newValue !== undefined) {
    if (_isNumber(oldValue) && _isNumber(newValue)) {
      result.$inc[prefix] = newValue - oldValue;
    } else {
      result.$set[prefix] = newValue;
    }
  } else {
    result.$unset[prefix] = '';
  }
};

const getModifier = function (options = {}) {
  let {
    doc: newDoc,
    transient = false,
    immutable = false,
    fields,
    oldDoc
  } = options;
  const Class = newDoc.constructor;
  const opts = {
    defaults: false
  };

  if (!oldDoc) {
    oldDoc = Class.findOne(newDoc._id, opts);
  }

  if (!oldDoc) {
    oldDoc = new Class({}, opts);
  } // If there is no document before modifications that may mean that we are not
  // subscribed to the publication publishing given document or we modified the
  // _id of a document.


  if (!oldDoc) {
    throwParseError([{
      'module': 'storage'
    }, {
      'utility': 'getModified'
    }, `Can not get a document before modifications. You are not subscribed ` + `to the publication publishing a "${Class.getName()}" document with ` + `the id "${newDoc._id}" or you have modified the "_id" field`]);
  } // If there are not fields specified, then get all of them.


  if (!fields) {
    fields = Class.getFieldsNames();
  }

  const result = {
    $set: {},
    $inc: {},
    $unset: {},
    $push: {}
  };
  diff((0, _objectSpread2.default)({
    // Get raw data from the docs.
    oldDoc: rawMany(oldDoc, fields, {
      transient,
      immutable,
      undefined: false
    }),
    newDoc: rawMany(newDoc, fields, {
      transient,
      immutable,
      undefined: false
    }),
    result
  }, handlers)); // Return only non empty modifiers.

  return _omitBy(result, modifier => {
    return _size(modifier) === 0;
  });
};

module1.exportDefault(getModifier);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"has_meteor_method.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/has_meteor_method.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 0);

function hasMeteorMethod(connection, methodName) {
  // There is inconsistency between client and server. On the client connection
  // object contains the "_methodHandlers" property and on the server the
  // "method_handlers" property.
  let methodHandlers = connection._methodHandlers || connection.method_handlers;
  return _has(methodHandlers, methodName);
}

;
module.exportDefault(hasMeteorMethod);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isModified.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/isModified.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _includes;

module.watch(require("lodash/includes"), {
  default(v) {
    _includes = v;
  }

}, 0);
let getModified;
module.watch(require("./getModified"), {
  default(v) {
    getModified = v;
  }

}, 1);

function isModified(options = {}) {
  let {
    doc,
    pattern,
    transient = false,
    immutable = false
  } = options;
  let modified = getModified({
    doc,
    transient,
    immutable
  });

  if (pattern) {
    return _includes(modified, pattern);
  } else {
    return modified.length > 0;
  }
}

;
module.exportDefault(isModified);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"is_remote.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/is_remote.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function isRemote(Class) {
  const Collection = Class.getCollection();

  if (!Collection) {
    return false;
  }

  const connection = Collection._connection;
  return connection && connection !== Meteor.server;
}

module.exportDefault(isRemote);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"omit_undefined.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/omit_undefined.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isPlainObject;

module.watch(require("lodash/isPlainObject"), {
  default(v) {
    _isPlainObject = v;
  }

}, 0);

let _transform;

module.watch(require("lodash/transform"), {
  default(v) {
    _transform = v;
  }

}, 1);

function omitUndefined(obj) {
  return _transform(obj, function (result, value, key) {
    if (_isPlainObject(value)) {
      result[key] = omitUndefined(value);
    } else if (value !== undefined) {
      result[key] = value;
    }
  });
}

module.exportDefault(omitUndefined);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"throw_if_selector_is_not_id.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/throw_if_selector_is_not_id.js                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let LocalCollection;
module.watch(require("meteor/minimongo"), {
  LocalCollection(v) {
    LocalCollection = v;
  }

}, 0);

function throwIfSelectorIsNotId(selector, methodName) {
  if (!LocalCollection._selectorIsIdPerhapsAsObject(selector)) {
    throw new Meteor.Error(403, `Not permitted. Untrusted code may only ${methodName} documents by ID.`);
  }
}

;
module.exportDefault(throwIfSelectorIsNotId);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"transformToClass.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/transformToClass.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);
let config;
module.watch(require("../../../core/config"), {
  default(v) {
    config = v;
  }

}, 1);
let wrapTransform;
module.watch(require("./wrapTransform"), {
  default(v) {
    wrapTransform = v;
  }

}, 2);
let castToClass;
module.watch(require("../../fields/utils/castToClass"), {
  default(v) {
    castToClass = v;
  }

}, 3);
let resolveValues;
module.watch(require("../../fields/utils/resolveValues"), {
  default(v) {
    resolveValues = v;
  }

}, 4);

function transformToClass(args = {}) {
  const {
    Class,
    options = {}
  } = args; // When fetching document from collection we don't want to clone raw document
  // and we want default values to be set.

  _defaults(options, {
    defaults: config.defaults,
    clone: false,
    cast: false
  });

  return function (rawDoc) {
    const doc = castToClass({
      Class,
      rawDoc,
      options
    });
    return doc;
  };
}

;
module.exportDefault(transformToClass);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trigger_after_insert.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/trigger_after_insert.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Event;
module.watch(require("../../events/event.js"), {
  default(v) {
    Event = v;
  }

}, 0);

function triggerAfterInsert(doc, trusted) {
  // Trigger the "afterInsert" event handlers.
  doc.dispatchEvent(new Event('afterInsert', {
    propagates: true,
    trusted: trusted
  }));
}

;
module.exportDefault(triggerAfterInsert);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trigger_after_remove.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/trigger_after_remove.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Event;
module.watch(require("../../events/event.js"), {
  default(v) {
    Event = v;
  }

}, 0);

function triggerAfterRemove(doc, trusted) {
  // Trigger the "afterRemove" event handlers.
  doc.dispatchEvent(new Event('afterRemove', {
    propagates: true,
    trusted: trusted
  }));
}

;
module.exportDefault(triggerAfterRemove);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trigger_after_save.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/trigger_after_save.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Event;
module.watch(require("../../events/event.js"), {
  default(v) {
    Event = v;
  }

}, 0);

function triggerAfterSave(doc, trusted) {
  // Trigger the "afterSave" event handlers.
  doc.dispatchEvent(new Event('afterSave', {
    propagates: true,
    trusted: trusted
  }));
}

;
module.exportDefault(triggerAfterSave);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trigger_after_update.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/trigger_after_update.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Event;
module.watch(require("../../events/event.js"), {
  default(v) {
    Event = v;
  }

}, 0);

function triggerAfterUpdate(doc, trusted) {
  // Trigger the "afterUpdate" event handlers.
  doc.dispatchEvent(new Event('afterUpdate', {
    propagates: true,
    trusted: trusted
  }));
}

;
module.exportDefault(triggerAfterUpdate);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trigger_before_insert.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/trigger_before_insert.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Event;
module.watch(require("../../events/event.js"), {
  default(v) {
    Event = v;
  }

}, 0);

function triggerBeforeInsert(doc, trusted) {
  // Trigger the "beforeInsert" event handlers.
  if (!doc.dispatchEvent(new Event('beforeInsert', {
    cancelable: true,
    propagates: true,
    trusted: trusted
  }))) {
    // If an event was prevented, then we stop here.
    throw new Meteor.Error('prevented', 'Operation prevented', {
      eventName: 'beforeInsert'
    });
  }
}

;
module.exportDefault(triggerBeforeInsert);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trigger_before_remove.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/trigger_before_remove.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Event;
module.watch(require("../../events/event.js"), {
  default(v) {
    Event = v;
  }

}, 0);

function triggerBeforeRemove(doc, trusted) {
  // Trigger the "beforeRemove" event handlers.
  if (!doc.dispatchEvent(new Event('beforeRemove', {
    cancelable: true,
    propagates: true,
    trusted: trusted
  }))) {
    // If an event was prevented, then we stop here.
    throw new Meteor.Error('prevented', 'Operation prevented', {
      eventName: 'beforeRemove'
    });
  }
}

;
module.exportDefault(triggerBeforeRemove);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trigger_before_save.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/trigger_before_save.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Event;
module.watch(require("../../events/event.js"), {
  default(v) {
    Event = v;
  }

}, 0);

function triggerBeforeSave(doc, trusted) {
  // Trigger the "beforeSave" event handlers.
  if (!doc.dispatchEvent(new Event('beforeSave', {
    cancelable: true,
    propagates: true,
    trusted: trusted
  }))) {
    // If an event was prevented, then we stop here.
    throw new Meteor.Error('prevented', 'Operation prevented', {
      eventName: 'beforeSave'
    });
  }
}

;
module.exportDefault(triggerBeforeSave);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trigger_before_update.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/trigger_before_update.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Event;
module.watch(require("../../events/event.js"), {
  default(v) {
    Event = v;
  }

}, 0);

function triggerBeforeUpdate(doc, trusted) {
  // Trigger the "beforeUpdate" event handlers.
  if (!doc.dispatchEvent(new Event('beforeUpdate', {
    cancelable: true,
    propagates: true,
    trusted: trusted
  }))) {
    // If an event was prevented, then we stop here.
    throw new Meteor.Error('prevented', 'Operation prevented', {
      eventName: 'beforeUpdate'
    });
  }
}

;
module.exportDefault(triggerBeforeUpdate);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"wrapTransform.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/storage/utils/wrapTransform.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let resolveValues;
module.watch(require("../../fields/utils/resolveValues"), {
  default(v) {
    resolveValues = v;
  }

}, 0);

function wrapTransform(args = {}) {
  const {
    Class,
    transform
  } = args;
  return function (rawDoc) {
    const resolvedValues = resolveValues({
      Class,
      rawDoc
    });
    resolvedValues._isNew = false;
    return transform(resolvedValues);
  };
}

module.exportDefault(wrapTransform);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"validators":{"module.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/module.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const module1 = module;
let Module;
module1.watch(require("../../core/module.js"), {
  default(v) {
    Module = v;
  }

}, 0);
module1.watch(require("./validators/comparison/choice.js"));
module1.watch(require("./validators/comparison/email.js"));
module1.watch(require("./validators/comparison/equal.js"));
module1.watch(require("./validators/comparison/not_equal.js"));
module1.watch(require("./validators/comparison/regexp.js"));
module1.watch(require("./validators/existence/null.js"));
module1.watch(require("./validators/existence/not_null.js"));
module1.watch(require("./validators/existence/required.js"));
module1.watch(require("./validators/logical/and.js"));
module1.watch(require("./validators/logical/or.js"));
module1.watch(require("./validators/nested/every.js"));
module1.watch(require("./validators/nested/has.js"));
module1.watch(require("./validators/nested/includes.js"));
module1.watch(require("./validators/size/gt.js"));
module1.watch(require("./validators/size/gte.js"));
module1.watch(require("./validators/size/length.js"));
module1.watch(require("./validators/size/lt.js"));
module1.watch(require("./validators/size/lte.js"));
module1.watch(require("./validators/size/max_length.js"));
module1.watch(require("./validators/size/min_length.js"));
module1.watch(require("./validators/type/array.js"));
module1.watch(require("./validators/type/boolean.js"));
module1.watch(require("./validators/type/class.js"));
module1.watch(require("./validators/type/date.js"));
module1.watch(require("./validators/type/integer.js"));
module1.watch(require("./validators/type/mongo_object_id.js"));
module1.watch(require("./validators/type/number.js"));
module1.watch(require("./validators/type/object.js"));
module1.watch(require("./validators/type/string.js"));
let documentValidate;
module1.watch(require("./utils/document_validate.js"), {
  default(v) {
    documentValidate = v;
  }

}, 1);
let parseValidators;
module1.watch(require("./utils/parse_validators.js"), {
  default(v) {
    parseValidators = v;
  }

}, 2);
let onInitSchema;
module1.watch(require("./hooks/init_schema.js"), {
  default(v) {
    onInitSchema = v;
  }

}, 3);
let onInitDefinition;
module1.watch(require("./hooks/init_definition.js"), {
  default(v) {
    onInitDefinition = v;
  }

}, 4);
let onParseDefinition;
module1.watch(require("./hooks/parse_definition.js"), {
  default(v) {
    onParseDefinition = v;
  }

}, 5);
let onMergeDefinitions;
module1.watch(require("./hooks/merge_definitions.js"), {
  default(v) {
    onMergeDefinitions = v;
  }

}, 6);
let onApplyDefinition;
module1.watch(require("./hooks/apply_definition.js"), {
  default(v) {
    onApplyDefinition = v;
  }

}, 7);
let onInitClass;
module1.watch(require("./hooks/init_class.js"), {
  default(v) {
    onInitClass = v;
  }

}, 8);
Module.create({
  name: 'validators',
  onInitSchema: onInitSchema,
  onInitDefinition: onInitDefinition,
  onParseDefinition: onParseDefinition,
  onMergeDefinitions: onMergeDefinitions,
  onApplyDefinition: onApplyDefinition,
  onInitClass: onInitClass,
  utils: {
    documentValidate: documentValidate,
    parseValidators: parseValidators
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"validator.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validator.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ValidationError;
module.watch(require("meteor/mdg:validation-error"), {
  ValidationError(v) {
    ValidationError = v;
  }

}, 0);
let Validators;
module.watch(require("./validators.js"), {
  default(v) {
    Validators = v;
  }

}, 1);

class Validator {
  constructor(definition) {
    this.name = definition.name;

    if (definition.parseParam) {
      this.parseParam = definition.parseParam;
    }

    if (definition.isValid) {
      this.isValid = definition.isValid;
    }

    if (definition.validate) {
      this.validate = definition.validate;
    }

    if (definition.resolveError) {
      this.resolveError = definition.resolveError;
    }
  }

  validate({
    doc,
    name,
    nestedName,
    value,
    param,
    resolveParam,
    message,
    resolveError
  }) {
    // Get the class name, which will be used later for letting know what class
    // thrown error.
    const className = doc.constructor.getName(); // Resolve param is the "resolveParam" function is provided.

    if (Match.test(resolveParam, Function)) {
      param = resolveParam({
        doc,
        name,
        nestedName,
        value
      });
    } // Parse param type if validator has parsing function.


    if (Match.test(this.parseParam, Function)) {
      this.parseParam(param);
    } // Prepare data for validation.


    const args = {
      className,
      doc,
      name,
      nestedName,
      value,
      param,
      validator: this.name
    }; // Perform validation.

    if (!this.isValid(args)) {
      // Prepare function for throwing validation error.
      const throwError = message => {
        // Throw error only if the error message has been successfully
        // generated.
        if (!message) {
          return;
        } // Throw error.


        throw new ValidationError([{
          className,
          type: this.name,
          name,
          nestedName,
          value,
          param,
          message
        }], message);
      }; // Generate error message using the "resolveError" function if provided.


      if (Match.test(resolveError, Function)) {
        throwError(resolveError(args));
      } // Get error message from the string if provided.


      if (Match.test(message, String)) {
        throwError(message);
      } // Get error by executing a class level "resolveError" function.


      let Class = doc.constructor;
      let classResolveError = Class.getResolveError();

      if (classResolveError instanceof Function) {
        throwError(classResolveError(args));
      } // Get default error message.


      if (this.resolveError instanceof Function) {
        throwError(this.resolveError(args));
      }

      throwError(ValidationError.DEFAULT_REASON);
    }
  }

  static create(definition) {
    let validator = new Validator(definition);
    Validator.validators[validator.name] = validator; // Create a validation function.

    return Validators[validator.name] = function (options) {
      validator.validate(options);
    };
  }

}

;
Validator.validators = {};
module.exportDefault(Validator);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"validators.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const Validators = {};
module.exportDefault(Validators);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class_prototype_methods":{"validate.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/class_prototype_methods/validate.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _defaults;

module.watch(require("lodash/defaults"), {
  default(v) {
    _defaults = v;
  }

}, 0);

let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 1);
let castNested;
module.watch(require("../../fields/utils/castNested"), {
  default(v) {
    castNested = v;
  }

}, 2);
let documentValidate;
module.watch(require("../utils/document_validate"), {
  default(v) {
    documentValidate = v;
  }

}, 3);
let callMeteorMethod;
module.watch(require("../../storage/utils/call_meteor_method"), {
  default(v) {
    callMeteorMethod = v;
  }

}, 4);

function validate(options = {}, callback) {
  const doc = this;
  const Class = doc.constructor;
  const Collection = Class.getCollection();
  let connection = Collection && Collection._connection;

  if (!connection && (!Collection || !Collection._name)) {
    connection = Meteor.connection;
  } // If the first argument is callback function then reassign values.


  if (arguments.length === 1 && Match.test(options, Function)) {
    callback = options;
    options = {};
  } // Set default options.


  _defaults(options, {
    fields: Class.getValidationOrder(),
    modified: false,
    stopOnFirstError: true,
    simulation: true
  }); // If a fields property is a string then put it into array.


  if (Match.test(options.fields, String)) {
    options.fields = [options.fields];
  } // Cast all fields.


  if (options.cast) {
    _each(Class.getFields(), field => {
      doc[field.name] = field.castValue(doc[field.name], {
        clone: false,
        cast: true
      });
    });
  } // Cast only nested fields.
  else {
      castNested({
        doc,
        options: {
          clone: false
        }
      });
    } // Prepare arguments for meteor method and utility.


  let methodArgs = {
    doc,
    fields: options.fields,
    modified: options.modified,
    stopOnFirstError: options.stopOnFirstError,
    simulation: options.simulation
  }; // If we are dealing with a remote collection and we are not on the server.

  if (connection && connection !== Meteor.server) {
    // Prepare arguments for meteor method.
    let methodName = '/Astronomy/validate';

    try {
      // Run Meteor method.
      return callMeteorMethod(Class, methodName, [methodArgs], callback);
    } // Catch stub exceptions.
    catch (err) {
      if (callback) {
        callback(err);
        return null;
      }

      throw err;
    }
  } // If we can just validate a document without calling the meteor method. We
  // may be on the server or the collection may be local.


  try {
    // Validate a document.
    let result = documentValidate(methodArgs);

    if (callback) {
      callback();
    }

    return result;
  } catch (err) {
    if (callback) {
      callback(err);
      return null;
    }

    throw err;
  }
}

module.exportDefault(validate);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"validate_all.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/class_prototype_methods/validate_all.js                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extend;

module.watch(require("lodash/extend"), {
  default(v) {
    _extend = v;
  }

}, 0);

function validateAll(options = {}, callback) {
  let doc = this;
  let Class = doc.constructor; // If the first argument is callback function then reassign values.

  if (arguments.length === 1 && Match.test(options, Function)) {
    callback = options;
    options = {};
  }

  _extend(options, {
    fields: Class.getValidationOrder(),
    stopOnFirstError: false
  });

  doc.validate(options, callback);
}

;
module.exportDefault(validateAll);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"class_static_methods":{"getCheckPattern.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/class_static_methods/getCheckPattern.js                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 0);
let ValidationError;
module.watch(require("meteor/mdg:validation-error"), {
  ValidationError(v) {
    ValidationError = v;
  }

}, 1);

function getCheckPattern() {
  const Class = this;
  return Match.Where(function (doc) {
    try {
      doc.validate();
    } catch (err) {
      if (ValidationError.is(err)) {
        const firstError = err.details[0];
        const matchError = new Match.Error(firstError.message);
        matchError.sanitizedError = err;
        throw matchError;
      } else {
        throw err;
      }
    }

    return true;
  });
}

;
module.exportDefault(getCheckPattern);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_resolve_error.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/class_static_methods/get_resolve_error.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getResolveError() {
  let Class = this;
  return Class.schema.resolveError;
}

;
module.exportDefault(getResolveError);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_validation_order.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/class_static_methods/get_validation_order.js                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _difference;

module.watch(require("lodash/difference"), {
  default(v) {
    _difference = v;
  }

}, 0);

function getValidationOrder() {
  let Class = this; // Get all validators.

  let validators = Class.getValidators(); // Get fields names for defined validators.

  let fieldsNames = Class.getFieldsNames(); // Make variable name shorter.

  let validationOrder = Class.schema.validationOrder; // If there is a validation order provided, then combine fields provided in
  // the validation order with the order of validators.

  if (validationOrder) {
    // Detect what fields are not present in the validation order.
    let diff = _difference(fieldsNames, validationOrder); // Combine validation order with fields that left.


    return validationOrder.concat(diff);
  } // If there is no validation order, then just return fields names in the order
  // in which validators were defined.
  else {
      return fieldsNames;
    }
}

;
module.exportDefault(getValidationOrder);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get_validators.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/class_static_methods/get_validators.js                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function getValidators(fieldName) {
  let Class = this;

  if (!Match.test(fieldName, Match.Optional(String))) {
    throw TypeError('The first argument of the "getValidators" function has to be a string ' + 'or left empty');
  }

  if (fieldName) {
    return Class.schema.validators[fieldName];
  } else {
    return Class.schema.validators;
  }
}

;
module.exportDefault(getValidators);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"validate.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/class_static_methods/validate.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _tail;

module.watch(require("lodash/tail"), {
  default(v) {
    _tail = v;
  }

}, 0);

function validate(rawDoc) {
  const Class = this;
  const doc = new Class(rawDoc);

  const args = _tail(arguments);

  return doc.validate.apply(doc, args);
}

;
module.exportDefault(validate);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"validateAll.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/class_static_methods/validateAll.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _tail;

module.watch(require("lodash/tail"), {
  default(v) {
    _tail = v;
  }

}, 0);

function validateAll(rawDoc) {
  const Class = this;
  const doc = new Class(rawDoc);

  const args = _tail(arguments);

  return doc.validateAll.apply(doc, args);
}

;
module.exportDefault(validateAll);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"hooks":{"apply_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/hooks/apply_definition.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _zipObject;

module.watch(require("lodash/zipObject"), {
  default(v) {
    _zipObject = v;
  }

}, 1);
let hasMeteorMethod;
module.watch(require("../../storage/utils/has_meteor_method.js"), {
  default(v) {
    hasMeteorMethod = v;
  }

}, 2);
let meteorValidate;
module.watch(require("../meteor_methods/validate.js"), {
  default(v) {
    meteorValidate = v;
  }

}, 3);

function onApplyDefinition(Class, parsedDefinition, className) {
  _each(parsedDefinition.validators, function (validators, fieldName) {
    Class.schema.validators[fieldName] = Class.schema.validators[fieldName] || [];

    _each(validators, function (validator) {
      Class.schema.validators[fieldName] = Class.schema.validators[fieldName].concat(validator);
    });
  }); // Add the "/Astronomy/validate" meteor method only when a class has assigned
  // collection.


  let Collection = Class.getCollection(); // If it's a remote collection then we register methods on the connection
  // object of the collection.

  let connection = Collection && Collection._connection; // If it's not a remote collection than use main Meteor connection.

  if (!connection && (!Collection || !Collection._name)) {
    connection = Meteor.connection || Meteor.server;
  }

  if (connection) {
    // Prepare meteor methods to be added.
    let meteorMethods = {
      '/Astronomy/validate': meteorValidate
    };

    _each(meteorMethods, (meteorMethod, methodName) => {
      if (!hasMeteorMethod(connection, methodName)) {
        // Add meteor method.
        connection.methods(_zipObject([methodName], [meteorMethod]));
      }
    });
  }

  Class.schema.resolveError = parsedDefinition.resolveError;
}

;
module.exportDefault(onApplyDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_class.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/hooks/init_class.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let getResolveError;
module.watch(require("../class_static_methods/get_resolve_error.js"), {
  default(v) {
    getResolveError = v;
  }

}, 0);
let getValidationOrder;
module.watch(require("../class_static_methods/get_validation_order.js"), {
  default(v) {
    getValidationOrder = v;
  }

}, 1);
let getValidators;
module.watch(require("../class_static_methods/get_validators.js"), {
  default(v) {
    getValidators = v;
  }

}, 2);
let validateStatic;
module.watch(require("../class_static_methods/validate.js"), {
  default(v) {
    validateStatic = v;
  }

}, 3);
let validateAllStatic;
module.watch(require("../class_static_methods/validateAll.js"), {
  default(v) {
    validateAllStatic = v;
  }

}, 4);
let getCheckPatternStatic;
module.watch(require("../class_static_methods/getCheckPattern.js"), {
  default(v) {
    getCheckPatternStatic = v;
  }

}, 5);
let validate;
module.watch(require("../class_prototype_methods/validate.js"), {
  default(v) {
    validate = v;
  }

}, 6);
let validateAll;
module.watch(require("../class_prototype_methods/validate_all.js"), {
  default(v) {
    validateAll = v;
  }

}, 7);

function onInitClass(Class, className) {
  // Class static methods.
  Class.getResolveError = getResolveError;
  Class.getValidationOrder = getValidationOrder;
  Class.getValidators = getValidators;
  Class.validate = validateStatic;
  Class.validateAll = validateAllStatic;
  Class.getCheckPattern = getCheckPatternStatic; // Class prototype methods.

  Class.prototype.validate = validate;
  Class.prototype.validateAll = validateAll;
}

;
module.exportDefault(onInitClass);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/hooks/init_definition.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitDefinition(definition, className) {
  definition.validators = {};
  definition.resolveError = undefined;
}

;
module.exportDefault(onInitDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"init_schema.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/hooks/init_schema.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function onInitSchema(schema, className) {
  schema.validators = {};
  schema.resolveError = undefined;
}

;
module.exportDefault(onInitSchema);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"merge_definitions.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/hooks/merge_definitions.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

function onMergeDefinitions(targetDefinition, sourceDefinition, ClassName) {
  _each(sourceDefinition.validators, function (validators, fieldName) {
    targetDefinition.validators[fieldName] = targetDefinition.validators[fieldName] || [];
    targetDefinition.validators[fieldName] = targetDefinition.validators[fieldName].concat(validators);
  });

  targetDefinition.resolveError = sourceDefinition.resolveError;
}

;
module.exportDefault(onMergeDefinitions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"parse_definition.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/hooks/parse_definition.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 1);
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 2);
let parseValidators;
module.watch(require("../utils/parse_validators.js"), {
  default(v) {
    parseValidators = v;
  }

}, 3);

function onParseDefinition(parsedDefinition, definition, className) {
  if (definition.resolveError) {
    if (!Match.test(definition.resolveError, Function)) {
      throwParseError([{
        'class': className
      }, {
        'property': 'resolveError'
      }, 'Property values has to be a function']);
    }

    parsedDefinition.resolveError = definition.resolveError;
  }

  if (definition.fields) {
    _each(definition.fields, function (fieldDefinition, fieldName) {
      if (_has(fieldDefinition, 'validators')) {
        parseValidators(fieldDefinition.validators, [{
          'class': className
        }, {
          'property': 'fields'
        }, {
          'field': fieldName
        }, {
          'property': 'validators'
        }]);
        parsedDefinition.validators[fieldName] = fieldDefinition.validators;
        fieldDefinition.validators = undefined;
      }
    });
  }

  if (definition.validators) {
    _each(definition.validators, function (validators, fieldName) {
      parseValidators(validators, [{
        'class': className
      }, {
        'property': 'validators'
      }]);
      parsedDefinition.validators[fieldName] = validators;
    });
  }
}

;
module.exportDefault(onParseDefinition);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"meteor_methods":{"validate.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/meteor_methods/validate.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let documentValidate;
module.watch(require("../utils/document_validate.js"), {
  default(v) {
    documentValidate = v;
  }

}, 0);
let check, Match;
module.watch(require("meteor/check"), {
  check(v) {
    check = v;
  },

  Match(v) {
    Match = v;
  }

}, 1);

function validate(options) {
  check(options, Match.Any);
  return documentValidate(options);
}

;
module.exportDefault(validate);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"utils":{"document_validate.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/utils/document_validate.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _intersection;

module.watch(require("lodash/intersection"), {
  default(v) {
    _intersection = v;
  }

}, 1);

let _isNil;

module.watch(require("lodash/isNil"), {
  default(v) {
    _isNil = v;
  }

}, 2);
let AstroClass;
module.watch(require("../../../core/class"), {
  default(v) {
    AstroClass = v;
  }

}, 3);
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error"), {
  default(v) {
    throwParseError = v;
  }

}, 4);
let castNested;
module.watch(require("../../fields/utils/castNested"), {
  default(v) {
    castNested = v;
  }

}, 5);
let isNestedFieldName;
module.watch(require("../../fields/utils/isNestedFieldName"), {
  default(v) {
    isNestedFieldName = v;
  }

}, 6);
let traverse;
module.watch(require("../../fields/utils/traverse"), {
  default(v) {
    traverse = v;
  }

}, 7);
let ObjectField;
module.watch(require("../../fields/ObjectField"), {
  default(v) {
    ObjectField = v;
  }

}, 8);
let ListField;
module.watch(require("../../fields/ListField"), {
  default(v) {
    ListField = v;
  }

}, 9);
let Validators;
module.watch(require("../validators"), {
  default(v) {
    Validators = v;
  }

}, 10);
let ValidationError;
module.watch(require("meteor/mdg:validation-error"), {
  ValidationError(v) {
    ValidationError = v;
  }

}, 11);

function documentValidate(options = {}) {
  let {
    doc,
    fields,
    modified = false,
    prefix = '',
    stopOnFirstError = true,
    simulation = true
  } = options; // Stop execution, if we are not on the server, when the "simulation" flag is
  // not set.

  if (!simulation && !Meteor.isServer) {
    return;
  }

  let Class = doc.constructor; // Cast nested fields.

  castNested({
    doc,
    options: {
      clone: false
    }
  }); // Prepare array for storing errors list.

  let errors = []; // Helper function for catching and collecting errors.

  const catchValidationError = func => {
    try {
      func();
    } catch (err) {
      // If it's ValidationError.
      if (ValidationError.is(err)) {
        // If we stop on first error then just throw error again.
        if (stopOnFirstError) {
          throw err;
        } // Otherwise we collect errors.
        else {
            _each(err.details, details => {
              errors.push(details);
            });
          }
      } // It it's not ValidationError, then we throw error again.
      else {
          throw err;
        }
    }
  }; // If no fields were passed to validation, then we pick default validation
  // order.


  if (!fields) {
    fields = Class.getValidationOrder();
  } // Validate only modified fields.


  if (modified && Class.getCollection()) {
    fields = _intersection(fields, doc.getModified());
  }

  _each(fields, name => {
    // If it is a nested field pattern name then we have to look for the most
    // nested document and validate the nested field.
    if (isNestedFieldName(name)) {
      traverse(doc, name, (nestedDoc, nestedName, field) => {
        catchValidationError(() => {
          documentValidate({
            doc: nestedDoc,
            fields: [nestedName],
            prefix: prefix + name.substr(0, name.lastIndexOf(nestedName)),
            stopOnFirstError,
            simulation
          });
        });
      });
      return;
    }

    let field = Class.getField(name); // Move to the next one if a field does not exist.

    if (!field) {
      return;
    } // We do not validate transient fields.


    if (field.transient) {
      return;
    } // Get value of the field.


    let value = doc.get(name); // If a field is optional and value is undefined then we do not validate.

    if (field.getOptional(doc) && _isNil(value)) {
      return;
    } // Execute validation in the try-catch block. That's because we want to
    // continue validation if the "stopOnFirstError" flag is set to false.


    catchValidationError(() => {
      // First, execute type level validators.
      field.validate({
        doc,
        name: prefix + name,
        nestedName: name,
        value
      }); // Get validators for a given field.

      let validators = Class.getValidators(name);

      _each(validators, ({
        type,
        param,
        resolveParam,
        message,
        resolveError
      }) => {
        // Get validation helper function.
        let validationFunction = Validators[type]; // Execute single validator.

        validationFunction({
          doc,
          name: prefix + name,
          nestedName: name,
          value,
          param,
          resolveParam,
          message,
          resolveError
        });
      });
    }); // If it is the object field then validate it.

    if (field instanceof ObjectField) {
      if (value instanceof AstroClass) {
        catchValidationError(() => {
          documentValidate({
            doc: value,
            fields: value.constructor.getValidationOrder(),
            prefix: prefix + field.name + '.',
            stopOnFirstError
          });
        });
      }
    } // If it is the list field then validate each one.
    else if (field instanceof ListField && field.isClass) {
        _each(value, (element, index) => {
          if (element instanceof AstroClass) {
            catchValidationError(() => {
              documentValidate({
                doc: element,
                fields: element.constructor.getValidationOrder(),
                prefix: prefix + field.name + '.' + index + '.',
                stopOnFirstError
              });
            });
          }
        });
      }
  }); // If we have not thrown any error yet then it means that there are no errors
  // or we do not throw on the first error.


  if (errors.length > 0) {
    throw new ValidationError(errors, errors[0].message);
  }
}

;
module.exportDefault(documentValidate);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"parse_validators.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/utils/parse_validators.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 1);

let _union;

module.watch(require("lodash/union"), {
  default(v) {
    _union = v;
  }

}, 2);
let throwParseError;
module.watch(require("../../core/utils/throw_parse_error.js"), {
  default(v) {
    throwParseError = v;
  }

}, 3);
let Validators;
module.watch(require("../validators.js"), {
  default(v) {
    Validators = v;
  }

}, 4);
const validatorsPattern = [{
  type: String,
  param: Match.Optional(Match.Any),
  resolveParam: Match.Optional(Function),
  message: Match.Optional(String),
  resolveError: Match.Optional(Function)
}];

function parseValidators(validators, parseContext) {
  // Validators list is an array of object that should include at least the
  // "type" property.
  if (validators && !Match.test(validators, validatorsPattern)) {
    throwParseError(_union(parseContext, ['Validators definition has to be an array of objects']));
  }

  _each(validators, function (validator) {
    // Check if a validator of a given type exists.
    if (!_has(Validators, validator.type)) {
      throwParseError(_union(parseContext, [`There is no "${validator.type}" validator`]));
    }
  });
}

;
module.exportDefault(parseValidators);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"validators":{"comparison":{"choice.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/comparison/choice.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _includes;

module.watch(require("lodash/includes"), {
  default(v) {
    _includes = v;
  }

}, 0);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 1);
Validator.create({
  name: 'choice',

  parseParam(param) {
    if (!Match.test(param, [Match.Any])) {
      throw new TypeError(`Parameter for the "choice" validator has to be an array of values`);
    }
  },

  isValid({
    value,
    param
  }) {
    return _includes(param, value);
  },

  resolveError({
    name,
    param
  }) {
    var choices = param.join(', ');
    return `"${name}" has to be one of the values ${choices}`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"email.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/comparison/email.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
// The e-mail address regular expression from http://emailregex.com/.
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
Validator.create({
  name: 'email',

  isValid({
    value
  }) {
    return re.test(value);
  },

  resolveError({
    name,
    param
  }) {
    return `"${name}" should be a valid email address`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"equal.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/comparison/equal.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
Validator.create({
  name: 'equal',

  isValid({
    value,
    param
  }) {
    return EJSON.equals(value, param);
  },

  resolveError({
    name,
    param
  }) {
    return `"${name}" should be equal ${param}`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"not_equal.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/comparison/not_equal.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
Validator.create({
  name: 'notEqual',

  isValid({
    value,
    param
  }) {
    return !EJSON.equals(value, param);
  },

  resolveError({
    name,
    param
  }) {
    return `"${name}" should not to be equal ${param}`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"regexp.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/comparison/regexp.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
Validator.create({
  name: 'regexp',

  parseParam(param) {
    if (!Match.test(param, RegExp)) {
      throw new TypeError(`Parameter for the "regexp" validator has to be a regular expression`);
    }
  },

  isValid({
    value,
    param
  }) {
    return param.test(value);
  },

  resolveError({
    name,
    param
  }) {
    return `"${name}" does not match the "${param.toString()}" regular expression`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"existence":{"not_null.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/existence/not_null.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
Validator.create({
  name: 'notNull',

  isValid({
    value
  }) {
    return value !== null;
  },

  resolveError({
    name
  }) {
    return `"${name}" should not be null`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"null.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/existence/null.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
Validator.create({
  name: 'null',

  isValid({
    value
  }) {
    return value === null;
  },

  resolveError({
    name
  }) {
    return `"${name}" should be null`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"required.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/existence/required.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
Validator.create({
  name: 'required',

  isValid({
    value
  }) {
    return value !== null && value !== undefined;
  },

  resolveError({
    name
  }) {
    return `"${name}" is required`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"logical":{"and.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/logical/and.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);
let parseValidators;
module.watch(require("../../utils/parse_validators.js"), {
  default(v) {
    parseValidators = v;
  }

}, 1);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 2);
let Validators;
module.watch(require("../../validators.js"), {
  default(v) {
    Validators = v;
  }

}, 3);
Validator.create({
  name: 'and',

  parseParam(param) {
    parseValidators(param);
  },

  validate({
    doc,
    name,
    value,
    param: validators
  }) {
    _each(validators, function (validator) {
      // Get validator.
      const validationFunction = Validators[validator.type]; // Execute single validator.

      validationFunction({
        doc,
        name,
        value,
        param: validator.param
      });
    });
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"or.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/logical/or.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _some;

module.watch(require("lodash/some"), {
  default(v) {
    _some = v;
  }

}, 0);
let parseValidators;
module.watch(require("../../utils/parse_validators.js"), {
  default(v) {
    parseValidators = v;
  }

}, 1);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 2);
let Validators;
module.watch(require("../../validators.js"), {
  default(v) {
    Validators = v;
  }

}, 3);
let ValidationError;
module.watch(require("meteor/mdg:validation-error"), {
  ValidationError(v) {
    ValidationError = v;
  }

}, 4);
Validator.create({
  name: 'or',

  parseParam(param) {
    parseValidators(param);
  },

  validate({
    doc,
    name,
    value,
    param: validators
  }) {
    let firstError;

    const isValid = _some(validators, function (validator) {
      // Get validator.
      const validationFunction = Validators[validator.type]; // Execute single validator.

      try {
        validationFunction({
          doc,
          name,
          value,
          param: validator.param
        });
        return true;
      } catch (err) {
        if (ValidationError.is(err)) {
          // Collect only the first error that occured.
          if (!firstError) {
            firstError = err;
          }

          return false;
        } else {
          throw err;
        }
      }
    });

    if (!isValid) {
      throw firstError;
    }
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"nested":{"every.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/nested/every.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _each;

module.watch(require("lodash/each"), {
  default(v) {
    _each = v;
  }

}, 0);

let _isArray;

module.watch(require("lodash/isArray"), {
  default(v) {
    _isArray = v;
  }

}, 1);
let parseValidators;
module.watch(require("../../utils/parse_validators.js"), {
  default(v) {
    parseValidators = v;
  }

}, 2);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 3);
let Validators;
module.watch(require("../../validators.js"), {
  default(v) {
    Validators = v;
  }

}, 4);
Validator.create({
  name: 'every',

  parseParam(param) {
    parseValidators(param);
  },

  validate({
    doc,
    name,
    nestedName,
    value,
    param: validators
  }) {
    if (!_isArray(value)) {
      throw new TypeError(`The "every" validator can only work with arrays`);
    } // Execute validators for each array element.


    _each(value, function (element, index) {
      // Execute each validator.
      _each(validators, function (validator) {
        // Get validator.
        const validationFunction = Validators[validator.type]; // Execute single validator.

        validationFunction({
          doc,
          name: `${name}.${index}`,
          nestedName: `${nestedName}.${index}`,
          value: element,
          param: validator.param
        });
      });
    });
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"has.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/nested/has.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isObject;

module.watch(require("lodash/isObject"), {
  default(v) {
    _isObject = v;
  }

}, 0);

let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 1);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 2);
Validator.create({
  name: 'has',

  isValid({
    value,
    param
  }) {
    if (!_isObject(value)) {
      throw new TypeError(`The "has" validator can only work with objects`);
    }

    return _has(value, param);
  },

  resolveError({
    name,
    param
  }) {
    return `The "${name}" field does not have the "${param}" property`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"includes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/nested/includes.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _includes;

module.watch(require("lodash/includes"), {
  default(v) {
    _includes = v;
  }

}, 0);

let _isArray;

module.watch(require("lodash/isArray"), {
  default(v) {
    _isArray = v;
  }

}, 1);

let _isObject;

module.watch(require("lodash/isObject"), {
  default(v) {
    _isObject = v;
  }

}, 2);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 3);
Validator.create({
  name: 'includes',

  isValid({
    value,
    param
  }) {
    if (!_isArray(value) && !_isObject(value)) {
      throw new TypeError(`The "includes" validator can only work with arrays and objects`);
    }

    return _includes(value, param);
  },

  resolveError({
    name,
    param
  }) {
    return `The "${name}" field does not contain the "${param}" value`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"size":{"gt.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/size/gt.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
Validator.create({
  name: 'gt',

  isValid({
    value,
    param
  }) {
    return value > param;
  },

  resolveError({
    name,
    param
  }) {
    return `"${name}" has to be greater than ${param}`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"gte.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/size/gte.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
Validator.create({
  name: 'gte',

  isValid({
    value,
    param
  }) {
    return value >= param;
  },

  resolveError({
    name,
    param
  }) {
    return `"${name}" has to be greater than or equal ${param}`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"length.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/size/length.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 0);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 1);
Validator.create({
  name: 'length',

  parseParam(param) {
    if (!Match.test(param, Number)) {
      throw new TypeError(`Parameter for the "length" validator has to be a number`);
    }
  },

  isValid({
    value,
    param
  }) {
    if (!_has(value, 'length')) {
      throw new TypeError(`Length of the value can not be measured`);
    }

    return value.length === param;
  },

  resolveError({
    name,
    param
  }) {
    return `Length of "${name}" has to be ${param}`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lt.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/size/lt.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
Validator.create({
  name: 'lt',

  isValid({
    value,
    param
  }) {
    return value < param;
  },

  resolveError({
    name,
    param
  }) {
    return `"${name}" has to be less than ${param}`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lte.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/size/lte.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
Validator.create({
  name: 'lte',

  isValid({
    value,
    param
  }) {
    return value <= param;
  },

  resolveError({
    name,
    param
  }) {
    return `"${name}" has to be less than or equal ${param}`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"max_length.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/size/max_length.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 0);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 1);
Validator.create({
  name: 'maxLength',

  parseParam(param) {
    if (!Match.test(param, Number)) {
      throw new TypeError(`Parameter for the "maxLength" validator has to be a number`);
    }
  },

  isValid({
    value,
    param
  }) {
    if (!_has(value, 'length')) {
      return false;
    }

    return value.length <= param;
  },

  resolveError({
    name,
    param
  }) {
    return `Length of "${name}" has to be at most ${param}`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"min_length.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/size/min_length.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _has;

module.watch(require("lodash/has"), {
  default(v) {
    _has = v;
  }

}, 0);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 1);
Validator.create({
  name: 'minLength',

  parseParam(param) {
    if (!Match.test(param, Number)) {
      throw new TypeError(`Parameter for the "minLength" validator has to be a number`);
    }
  },

  isValid({
    value,
    param
  }) {
    if (!_has(value, 'length')) {
      return false;
    }

    return value.length >= param;
  },

  resolveError({
    name,
    param
  }) {
    return `Length of "${name}" has to be at least ${param}`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"type":{"array.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/type/array.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isArray;

module.watch(require("lodash/isArray"), {
  default(v) {
    _isArray = v;
  }

}, 0);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 1);
Validator.create({
  name: 'array',

  isValid({
    value
  }) {
    return _isArray(value);
  },

  resolveError({
    name
  }) {
    return `"${name}" has to be an array`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"boolean.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/type/boolean.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
Validator.create({
  name: 'boolean',

  isValid({
    value
  }) {
    return typeof value === 'boolean';
  },

  resolveError({
    name
  }) {
    return `"${name}" has to be a boolean`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"class.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/type/class.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
let AstroClass;
module.watch(require("../../../../core/class.js"), {
  default(v) {
    AstroClass = v;
  }

}, 1);
Validator.create({
  name: 'class',

  parseParam(param) {
    if (!AstroClass.isParentOf(param)) {
      throw new TypeError(`Parameter for the "class" validator has to be an Astronomy class`);
    }
  },

  isValid({
    value,
    param: Class
  }) {
    return value instanceof Class;
  },

  resolveError({
    name,
    param: Class
  }) {
    let className = Class.getName();
    return `"${name}" has to be ${className}`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"date.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/type/date.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isDate;

module.watch(require("lodash/isDate"), {
  default(v) {
    _isDate = v;
  }

}, 0);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 1);
Validator.create({
  name: 'date',

  isValid({
    value
  }) {
    return _isDate(value);
  },

  resolveError({
    name
  }) {
    return `"${name}" has to be a date`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"integer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/type/integer.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isInteger;

module.watch(require("lodash/isInteger"), {
  default(v) {
    _isInteger = v;
  }

}, 0);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 1);
Validator.create({
  name: 'integer',

  isValid({
    value
  }) {
    return _isInteger(value);
  },

  resolveError({
    name
  }) {
    return `"${name}" has to be an integer`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mongo_object_id.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/type/mongo_object_id.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
let Match;
module.watch(require("meteor/check"), {
  Match(v) {
    Match = v;
  }

}, 1);
let Mongo;
module.watch(require("meteor/mongo"), {
  Mongo(v) {
    Mongo = v;
  }

}, 2);
Validator.create({
  name: 'mongoObjectID',

  isValid({
    value
  }) {
    return Match.test(value, Mongo.ObjectID);
    ;
  },

  resolveError({
    name
  }) {
    return `"${name}" has to be a Mongo.ObjectID`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"number.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/type/number.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isNaN;

module.watch(require("lodash/isNaN"), {
  default(v) {
    _isNaN = v;
  }

}, 0);

let _isNumber;

module.watch(require("lodash/isNumber"), {
  default(v) {
    _isNumber = v;
  }

}, 1);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 2);
Validator.create({
  name: 'number',

  isValid({
    value
  }) {
    return !_isNaN(value) && _isNumber(value);
  },

  resolveError({
    name
  }) {
    return `"${name}" has to be a number`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"object.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/type/object.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _isObject;

module.watch(require("lodash/isObject"), {
  default(v) {
    _isObject = v;
  }

}, 0);
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 1);
Validator.create({
  name: 'object',

  isValid({
    value
  }) {
    return _isObject(value);
  },

  resolveError({
    name
  }) {
    return `"${name}" has to be an object`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"string.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/jagi_astronomy/lib/modules/validators/validators/type/string.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Validator;
module.watch(require("../../validator.js"), {
  default(v) {
    Validator = v;
  }

}, 0);
Validator.create({
  name: 'string',

  isValid({
    value
  }) {
    return typeof value === 'string';
  },

  resolveError({
    name
  }) {
    return `"${name}" has to be a string`;
  }

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},"node_modules":{"lodash":{"concat.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/concat.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"defaults.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/defaults.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"each.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/each.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"has.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/has.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"includes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/includes.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"intersection.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/intersection.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isNumber.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/isNumber.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isObject.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/isObject.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cloneDeepWith.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/cloneDeepWith.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isPlainObject.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/isPlainObject.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isArray.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/isArray.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"extend.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/extend.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isNil.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/isNil.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fromPairs.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/fromPairs.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"map.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/map.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"find.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/find.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toArray.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/toArray.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"size.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/size.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"difference.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/difference.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"forOwn.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/forOwn.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"keys.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/keys.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"omitBy.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/omitBy.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"zipObject.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/zipObject.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mapKeys.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/mapKeys.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"omit.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/omit.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"range.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/range.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"noop.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/noop.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"union.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/union.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"transform.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/transform.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isNull.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/isNull.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"uniq.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/uniq.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"every.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/every.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"get.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/get.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"last.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/last.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isNaN.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/isNaN.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"values.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/values.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"filter.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/filter.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"some.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/some.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isDate.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/isDate.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isInteger.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/isInteger.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tail.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/tail.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"indexOf.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/indexOf.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"clone.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/jagi_astronomy/node_modules/lodash/clone.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.useNode();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/jagi:astronomy/lib/main.js");

/* Exports */
Package._define("jagi:astronomy", exports);

})();

//# sourceURL=meteor://💻app/packages/jagi_astronomy.js