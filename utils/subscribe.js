export function subscribe(event, handler) {
  var key = 'key' in event && event.key !== '' ? "__".concat(event.key) : '';
  var eventName = event.subscriptionName + key;
  var wrapper = function(_event) {
    handler.apply(void 0, _event.detail);
  };
  document.addEventListener(eventName, wrapper, {
    passive: true
  });
  return {
    eventName: eventName,
    handler: handler,
    unsubscribe: function() {
      return document.removeEventListener(eventName, wrapper);
    },
  };
}
