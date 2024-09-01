export declare class Event implements iEvent {
    args?: any[];
    subscriptionName: string;
    constructor(...args: any[]);
}
export declare class EventWithKey extends Event {
    key: string;
    subscriptionName: string;
    constructor(key: string, ...args: any[]);
}
export type EventHandler = (...args: any[]) => void;
export interface EventSubscription {
    eventName: string;
    handler: EventHandler;
    unsubscribe: EventUnsubscribe;
}
export type EventUnsubscribe = () => void;
export interface iEvent {
    args?: any[];
    subscriptionName: string;
}
