const counter = () => {
  let count = 0;

  const countUp = () => {
    return count += 1;
  };

  return countUp;
};


// > const increment = counter();
// > increment(); 1
// > increment(); 2
