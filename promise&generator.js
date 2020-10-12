// 与生成器交互 方法一：使用next传参；方法二通过抛出异常
// next()方法为等待中的yield表达式提供值，所以如果没有等待中的yield表达式，就没有什么值能够应用的
// 所以第一次调用next方法不能传值
function* NinjaGenerator(action) {
  const imposter = yield "Hattori " + action;
  console.log("imposter: ", imposter); // 2. Hanzo
  yield "Yoshi (" + imposter + ") " + action;
  console.log(5555);
}
const ninjaIterator = NinjaGenerator("skulk");
const result1 = ninjaIterator.next();
console.log("result1: ", result1); // 1. { value: 'Hattori skulk', done: false }
const result2 = ninjaIterator.next("Hanzo");
ninjaIterator.next();
console.log("result2: ", result2); // 3. { value: 'Yoshi (Hanzo) skulk', done: false }
// 调用生成器函数会生成一个生成器上下文，ninjaIterator保持着对这个上下文的引用
// 当调用其next方法的时候，会将该上下文入栈
// 遇到yield语句时，会返回结果，并将该上下文弹出栈

// 使用抛出异常与生成器交互
function* NinjaGenerator1(action) {
  try {
    yield "Hattori ";
  } catch (e) {
    console.log(e);
  }
}
const generator1 = NinjaGenerator1();
const r1 = generator1.next();
console.log("r1: ", r1);
generator1.throw("error, This");

// promise，现在尚未得到，但是将来会得到值的占位符
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("wrong");
  }, 1000);
});
p.then(
  (r) => {
    console.log(r);
  },
  // .then中可以接收两个函数，一个是成功的回调，一个是失败的回调
  (e) => {
    console.log("ee: ", e);
  }
);
