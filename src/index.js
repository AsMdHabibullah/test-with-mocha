export class Calculater {
  constructor() {
    console.log("Simple calculator");
  }
  add = (argOne, argTwo) => {
    let result = argOne + argTwo
    return result;
  }
}