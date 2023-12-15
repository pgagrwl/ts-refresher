import { IServer } from "./Server";

function returnKeys<T extends Object>(arg: T) {
  console.log(Object.keys(arg));
  return arg;
}

const a = returnKeys({
  abc: "def",
});

interface Person<T> {
  name: string;
  age: number;
  special: T;
}

const John: Person<string> = {
  special: "Specail property",
  name: "Doe John",
  age: 25,
};

class Observable<T extends Person<string>> {
  subscribe(arg: T) {
    console.log(`Subscribed to ${arg.name}`);
  }
}

new Observable<typeof John>().subscribe(John);
