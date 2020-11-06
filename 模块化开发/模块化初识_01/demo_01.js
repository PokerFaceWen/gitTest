let name='demo_01';
let age=18;
let flag=true;

function sum(num1,num2) {
  return num2+num1;
}
if (flag){
  console.log('demo_01');
  console.log(sum(2, 2));
}
export {
  flag,sum
}