// The entry file of your WebAssembly module.
import { logInteger } from "./env";

export function add(a: i32, b: i32): i32 {
  if (a === 44) {
    abort("abort error");
  }
  return a + b;
}

export function fizzbuzz(a: i32): String | null {
  logInteger(a);
  if (a % 15 === 0) {
    return "fizzbuzz";
  }
  if (a % 3 === 0) {
    return "fizz";
  }
  if (a % 5 === 0) {
    return "buzz";
  }
  return null;
}

// add 2 pages, and page is 64 kb
memory.grow(2);
// Save 21 at index 0
store<u8>(0, 21);
// Save 99 at index 1
store<u8>(1, 99);

export function readMemory(n: i32): i32 {
  return load<u8>(n);
}
