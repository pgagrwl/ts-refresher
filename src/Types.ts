let abc = undefined;
const def = null;

function getData(): string | undefined {
  return "";
}

const data = getData();

if (data) {
  const someData = data;
} else {
}

let input: unknown;
input = "dfghj";
let someSenitiveValue: string;

if (typeof input === "string") {
  someSenitiveValue = input;
}

function doTasks(tasks: number): void | never {
  if (tasks > 3) {
    throw new Error("Too many tasks");
  }
}

const stuff = doTasks(4);
