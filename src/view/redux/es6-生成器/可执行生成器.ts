function getData1() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('data1')
    },1000)
  })
}
function getData2(str:string) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('data2')
    },1000)
  })
}
function getData3(str:string) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('data3')
    },1000)
  })
}

function *gen() {
  const data1:string = yield getData1()
  console.log(data1)
  const data2:string = yield getData2(data1)
  console.log(data2)
  const data3:string = yield getData3(data2)
  console.log(data3)
}

function run(fn: Function) {
  const g = fn();

  function next(data:any = null) {
    let it = g.next(data);
    console.log(it);
    
    if (it.done) {
      return it.value;
    }
    it.value.then((res:string)=>{
      next(res)
    })
  }
  next();
}

run(gen)