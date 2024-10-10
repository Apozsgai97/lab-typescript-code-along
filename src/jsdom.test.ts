import { equal } from "assert/strict";
import {test} from "node:test";
import {JSDOM} from "jsdom";
import { deepEqual } from "assert";

test("select paragraph and access textContent",  () => {
 const dom = new JSDOM('<!DOCTYPE html><p>Hi!</p>');
 equal(dom.window.document.querySelector("p")!.textContent, "Hi!");
});

//show class a better way to do test
test.skip("get all paragraphs", () => {
 const dom = new JSDOM(`
  <!DOCTYPE html><p>Hi!</p><p>Hidyhow</p>
  `);
 const result = dom.window.document.querySelectorAll("p")[0];


 deepEqual(result, dom.window.document.createElement("p"))
})