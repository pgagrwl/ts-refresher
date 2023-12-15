function returnKeys(arg) {
    console.log(Object.keys(arg));
    return arg;
}
const a = returnKeys({
    abc: "def",
});
const John = {
    special: "Specail property",
    name: "Doe John",
    age: 25,
};
class Observable {
    subscribe(arg) {
        console.log(`Subscribed to ${arg.name}`);
    }
}
new Observable().subscribe(John);
export {};
