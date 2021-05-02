const EventEmitter = require('events');

class EventTrackerClass {
  constructor() {
    this.debugging = process.env.debugging === 'true';
    this.emitter = new EventEmitter();
    this.setListeners();
  }

  setListeners() {
    // TODO: Define all events here, we can have instances
    // of other subtrackers as mixpanel to send the events on those
    // classes, works with redux middlewares
    this.emitter.on('rendition', (params) => {
      console.log('======= ON RENDITION =======', params);
    });
  }

  triggerEvent(eventName, params = {}) {
    this.emitter.emit(eventName, params);
  }
}

const EventTracker = new EventTrackerClass();
Object.freeze(EventTracker);

export default EventTracker;
