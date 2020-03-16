// разница поведения let и var в рамках лексического окуржения

/**
 * у var область видимости ограничена функцией
 * у let блоком кода
 */
var d = 12;
function varf () {
  var a = 5;
  {
    var a = 7;
    console.log(a); // 7

  }
  console.log(a); // 7
}
varf()

function varLet () {
  let a = 5;
  {
    let a = 6;
    console.log(a); // 6

  }
  console.log(a); // 5
}
varLet()

// var создает одну переменную на весь цикл

for (var i = 0; i < 10 ; i++) {
  setTimeout(()=> {
    console.log(i)
  }, 1000)
}


console.log('-------i', i)

// let создает переменную на каждую итерацию
for (let k = 0; k < 10 ; k++) {
  setTimeout(()=> {
    console.log('-------k', k)
    console.log('-----i', i)
    console.log('-----d', d) // - переменная объявлена в глобальной области видимости

  }, 1000)
}
console.log('-------k', typeof k) // undefined (error)
