const doIt = () => {
  try {
    const isSucceeded = Math.random() < 0.5;

    if (isSucceeded) {
      console.log('Fulfilled');
    } else {
      throw 1234;
    }

    return 'Returned';
  } catch (e) {
    console.error(e, ':', typeof e);
  } finally {
    console.log('Completed');
  }
};

const result = doIt() ?? "";
console.log(result);

// return が実行されて関数が終わっても finally に書いてることは実行される
// JavaScript では Error オブジェクトでなくてもかまわず何でも throw で投 げられるの。そして当然のように catch 文が捕捉したもの種類を関知しない