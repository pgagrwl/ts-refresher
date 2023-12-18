class Manager {
  @watchChange
  @linkValue("")
  someProperty: string | undefined;
}

// watchChange(Manager.prototype, "someProperty");

const manager: Manager = new Manager();

manager.someProperty = "123";
manager.someProperty = "678";

function linkValue(otherObject: any) {
  return function (target: any, key: string) {};
}

function watchChange(target: any, key: string) {
  let property = target[key];

  const getter = () => {
    return property;
  };

  const setter = (newVal: any) => {
    console.log(`${key as string} changed from ${property} to ${newVal}`);

    property = newVal;
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    configurable: true,
    enumerable: true,
  });
}
