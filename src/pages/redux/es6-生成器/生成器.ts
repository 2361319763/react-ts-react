// 生成器
function *test() {
  console.log(111);
  let input1:string = yield "111-输出";
  console.log("接收参数：",input1);
  console.log(222);
  yield "222-输出";
  console.log(333);
  yield "333-输出";
}

const generator = test();
/**
 * generator.next()
 * 返回值 {
 *  value: 返回值,
 *  done: 完成标识
 * }
 * 第一次 next() 不可以传参 后续可以
 */
console.log(generator.next());
console.log(generator.next('input1'));
console.log(generator.next());
console.log(generator.next());

function *test2() {
  setTimeout(()=>{
    console.log('1111-success');
    generator2.next();
  },1000);
  yield;
  setTimeout(()=>{
    console.log('2222-success');
    generator2.next();
  },1000);
  yield;
  setTimeout(()=>{
    console.log('3333-success');
    generator2.next();
  },1000);
  yield;
}
const generator2 = test2();
generator2.next();