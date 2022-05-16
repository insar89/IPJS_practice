'use strict';

async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}

(async () => {
  let g = generateSequence(1, 5);
  for await (let value of g) {
    console.log(value);
  }
})();

