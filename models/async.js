async function myAsync() {
  const myAsyncConst = await myPromise(10);
  console.log(myAsyncConst);
}

function myPromise(x) {
  return new Promise((resolve, reject) => {
    resolve(x);
  });
}

myAsync();
