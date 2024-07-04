"use strict";
const e1 = {
    name: "max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(1, "hello");
result.split(" ");
//# sourceMappingURL=app.js.map