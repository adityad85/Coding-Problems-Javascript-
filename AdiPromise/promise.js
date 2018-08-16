const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function handleResolved(promise, handler) {
  const { onFullfilled, onRejected } = handler;
  const cb = promise.state === FULFILLED ? onFullfilled : onRejected;
  if (typeof cb !== 'function') {
    if (promise.state === FULFILLED) {
      fulfill(handler.promise, promise.value);
    } else {
      reject(handler.promise, promise.value);
    }
  }
  try {
    const value = cb(promise.value);
    fulfill(handler.promise, value);
  } catch (error) {
    reject(handler.promise, error);
  }
}

function handle(promise, handler) {
  while (promise.value instanceof AdiPromise) {
    promise = promise.value;
  }

  if (promise.state === PENDING) {
    promise.queue.push(handler);
  } else {
    handleResolved(promise, handler);
  }
}

function finale(promise) {
  const { length } = promise.queue;
  for (let i = 0; i < length; i += 1) {
    handle(promise, promise.queue[i]);
  }
}

function fulfill(promise, value) {
  if (value === promise) {
    return reject(promise, new TypeError());
  }
  if (value && (typeof value === 'object' || typeof value === 'function')) {
    let then;
    try {
      then = value.then;
    } catch (err) {
      return reject(promise, err);
    }

    if (then === promise.then && promise instanceof AdiPromise) {
      promise.state = FULFILLED;
      promise.value = value;
      return finale(promise);
    }

    if (typeof then === 'function') {
      return doResolve(promise, then.bind(value));
    }
  }
  promise.state = FULFILLED;
  promise.value = value;
  finale(promise);
}

function reject(promise, reason) {
  promise.state = REJECTED;
  promise.value = reason;
  finale(promise);
}

function doResolve(promise, executor) {
  let called = false;

  function wrapFulfill(value) {
    if (called) {
      return;
    }
    called = true;
    fulfill(promise, value);
  }

  function wrapReject(reason) {
    if (called) {
      return;
    }
    called = true;
    reject(promise, reason);
  }
  try {
    executor(wrapFulfill, wrapReject);
  } catch (error) {
    wrapReject(error);
  }
}


class AdiPromise {
  // store state which can be pending fulfilled or rejected
  constructor(executor) {
    this.state = PENDING;
    this.value = null;
    this.queue = [];
    doResolve(this, executor);
  }

  then(onFullfilled, onRejected) {
    const promise = new AdiPromise(() => {});
    handle(this, {
      promise,
      onFullfilled,
      onRejected,
    });
    return promise;
  }
}

const wait = () => new AdiPromise((res) => {
  setTimeout(() => { console.log('heyy adi'); res('resolved'); }, 5000);
}).then(data => console.log(data), err => console.log(err));

wait();
