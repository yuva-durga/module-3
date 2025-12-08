//external file contain reusable code
//import into other js file
//can contain variable, classes, function...
//introduce as part of ecma script 2015 update es6
import {PI,getArea,getCircumference,getVolume}from './math_fun.js';
console.log(PI);
const circum=getCircumference(10);
console.log(`${circum}`)
console.log(circum)