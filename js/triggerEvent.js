function triggerEvent(eventName) {
    if (document.createEvent) {
        this.dispatchEvent(new Event(eventName));
    } else {
        // Internet Explorer (I think)
        this.fireEvent("on" + eventName, event);
    }
    return this;
}
