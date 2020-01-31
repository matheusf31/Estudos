class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticMethod());
    // 'static method has been called.'

    console.log(this.constructor.staticMethod());
    // 'static method has been called.'
  }

  static staticMethod() {
    return "static method has been called.";
  }
}

const test = new StaticMethodCall();
