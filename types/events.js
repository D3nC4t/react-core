var __extends = (this && this.__extends) || (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
      ({
          __proto__: []
        }
        instanceof Array && function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var Event = /** @class */ (function() {
  function Event() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    this.subscriptionName = 'PubSubEvent';
    this.args = args;
  }
  return Event;
}());
export {
  Event
};
var EventWithKey = /** @class */ (function(_super) {
  __extends(EventWithKey, _super);

  function EventWithKey(key) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var _this = _super.apply(this, args) || this;
    _this.key = '';
    _this.subscriptionName = 'PubSubEventWithKey';
    _this.key = key;
    return _this;
  }
  return EventWithKey;
}(Event));
export {
  EventWithKey
};
