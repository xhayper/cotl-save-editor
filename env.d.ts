/// <reference types="vite/client" />

/** An event which takes place in the DOM. */
interface Event<T = EventTarget> {
    target: T;
    /** Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise. */
    readonly bubbles: boolean;
    cancelBubble: boolean;
    /** Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method. */
    readonly cancelable: boolean;
    /** Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise. */
    readonly composed: boolean;
    /** Returns the object whose event listener's callback is currently being invoked. */
    readonly currentTarget: EventTarget | null;
    /** Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise. */
    readonly defaultPrevented: boolean;
    /** Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE. */
    readonly eventPhase: number;
    /** Returns true if event was dispatched by the user agent, and false otherwise. */
    readonly isTrusted: boolean;
    /** @deprecated */
    returnValue: boolean;
    /** @deprecated */
    readonly srcElement: EventTarget | null;
    /** Returns the object to which event is dispatched (its target). */
    readonly target: EventTarget | null;
    /** Returns the event's timestamp as the number of milliseconds measured relative to the time origin. */
    readonly timeStamp: DOMHighResTimeStamp;
    /** Returns the type of event, e.g. "click", "hashchange", or "submit". */
    readonly type: string;
    /** Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget. */
    composedPath(): EventTarget[];
    /** @deprecated */
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    /** If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled. */
    preventDefault(): void;
    /** Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects. */
    stopImmediatePropagation(): void;
    /** When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object. */
    stopPropagation(): void;
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
}
