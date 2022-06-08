const cats =["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
  cats.push(name);
  return cats;
}
function destructivelyPrependCat(name){
  cats.unshift(name);
  return cats;
}
function destructivelyRemoveLastCat(){
  cats.pop();
  return cats;
}
function  destructivelyRemoveFirstCat(){
  cats.shift();
  return cats;
}
function appendCat(name){
   const newArray = [...cats, name];
   return newArray;
}
function  prependCat(name){
  const newArr =[name, ...cats];
  return newArr;
}
function  removeLastCat(){
const arr = cats.slice(0, -1);
return arr;
}
function removeFirstCat(){
  const allay = cats.slice(1);
  return allay;
}