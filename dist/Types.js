"use strict";
let abc = undefined;
const def = null;
function getData() {
    return "";
}
const data = getData();
if (data) {
    const someData = data;
}
else {
}
let input;
input = "dfghj";
let someSenitiveValue;
if (typeof input === "string") {
    someSenitiveValue = input;
}
function doTasks(tasks) {
    if (tasks > 3) {
        throw new Error("Too many tasks");
    }
}
const stuff = doTasks(4);
