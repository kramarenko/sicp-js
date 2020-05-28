const True  = t => f => t;
const False = t => f => f;

const If = b => t => f => b(t)(f);

const Pow = x => x ** 2

console.assert(1 == True  (1) (2))
console.assert(2 == False (1) (2))
console.log(If(False)(1)(Pow(4)));

const a = 1;
console.log(a);
{ 
  const a = 2
  console.log(a);
}
{
  console.log(a);
}