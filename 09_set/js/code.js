function example() {
    let out = ""

    // set - single values
    const fruits = new Set(["Orange", "Apple"]);
    fruits.add("Pineapple");

    fruits.forEach((item) => {
        out += `<h1>Set: ${item}</h1>`;
    });

    fruits.delete("Orange");
    fruits.forEach((item) => {
        out += `<h1>Set delete: ${item}</h1>`;
    });

    out += `<h1>Set has: ${fruits.has("Apple")}</h1>`;

    // SetIterator values
    const setIteratorExample = fruits.values();
    out += `<h1>Iterator: ${setIteratorExample.next().value}</h1>`;

    // WeakSet - only has objects, no iterable, no clear
    // set - single values
    const fruitsWeak = new WeakSet([{ name: "Orange" }]);
    fruitsWeak.add({ name: "Pineapple" });
    
    document.getElementById("root").innerHTML = out;
}

window.addEventListener("load", example);