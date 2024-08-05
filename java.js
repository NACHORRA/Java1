const esPar = (n) => (n % 2 == 0 ? "Es par" : "Es impar");
console.log(esPar(5));
console.log(esPar(7));

function mayor(a, b) {
    if (a>b) {
        console.log(a+ " es mayor que " +b);
    }
    if (a<b) {
        console.log(a+ " es menor que " +b);
    }
    if (a===b) {
        console.log(a+ " es igual que " +b);
    }
}
mayor(10,5)

function cinco(a) {
    if (a % 5 == 0) {
        console.log(a+ " es multiplo de 5");
    }
    else {
        console.log(a+ " no es multiplo de 5")
    }
}

cinco(8)

function contar(a){
    let b=0
    while (b<=a){
        console.log(b)
        b+=1
    }
}
contar(9)

function palabra(p, a) {
    let b = 0
    while (b < a) {
        console.log(p)
        b += 1
    }
}
palabra("bautista",5)

function araya(a) {
    for (let i = 0; i < a.length; i+=1) {
        console.log(a[i]);
    }
}
araya([1,2,3,4,5]);

function araya(a) {
    for (let i = 0; i < a.length; i+=1) {
        if(i!=4){
            console.log(a[i]);
        }
    }
}
araya([1,2,3,4,5,6,7,8,9,10]);

function araya(a,b) {
  for (let i = 0; i < a.length; i += 1) {
    console.log(a[i]*b);
  }
}

araya([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],5);
