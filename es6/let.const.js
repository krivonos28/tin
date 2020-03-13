let a = 6
{
  let a = 3;
  const b = 4;
  console.log(a,b); // 3, 4
  {
    console.log(a,b); // 3, 4
  }
}

console.log(a) // 6