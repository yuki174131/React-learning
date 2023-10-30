// カリー化前
{
  const multiply = (n, m) => n * m;
  console.log(multiply(2, 4));
}

// カリー化
{
  const withMultiple = (n) => {
    return (m) => n * m;
  };
  console.log(withMultiple(2)(4));
}

// アロー関数式でカリー化
{
  const withMultiple = (n) => (m) => n * m;
  console.log(withMultiple(2)(4));
}
