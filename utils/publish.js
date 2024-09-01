export function publish(event) {
  var key = 'key' in event && event.key !== '' ? "__".concat(event.key) : '';
  var name = event.subscriptionName + key;
  document.dispatchEvent(new CustomEvent(name, {
    detail: event.args
  }));
}
