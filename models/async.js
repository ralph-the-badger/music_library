function myPromise(x) {
  return new Promise((resolve, reject) => {
    reject(err);
    resolve(x);
  });
}

async function myAsync() {
  const myAsyncConst = await myPromise(10);
  console.log(myAsyncConst);
}

myAsync();
