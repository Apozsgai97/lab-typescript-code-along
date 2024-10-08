import { deepEqual } from "node:assert/strict";
import test from "node:test";

/*const data = [
{id: "e3cd129c-502f-4fdc-bc9b-ac926b5955cc", name: "Elton Johnson" },
{id: "e3cd129c-502f-4fdc-bc9b-ac926b5955c2", name:"Id Po"}
];*/

type Person = {
 id: string;
 name: string;
}

function uppercaseNames(names: Person[]) {
 return [];
}

test("UppercaseNames works with empty array", () => {
  const result = uppercaseNames([]);
 deepEqual(result,[]);
});