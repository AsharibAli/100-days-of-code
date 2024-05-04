/****************
 * VOID & NEVER *
 ****************/

// void
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

function noReturnValue(): void {
  // This function doesn't return a value (implicitly returns undefined).
}

// never
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // This function never exits (infinite loop).
  }
}
