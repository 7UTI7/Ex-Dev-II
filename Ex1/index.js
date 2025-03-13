import {subtrai} from "./subtrai.js";
import {soma} from "./somar.js";
import {dividir} from "./divi.js";
import {multiplicar} from "./multi.js";

const num1=5;
const num2=10;
const op=2;

switch(op) {
    case (1):
        console.log (soma (num1,num2));

        break;
    
    case (2):
        console.log (subtrai (num1,num2));
        
        break;
    
    case (3):
        console.log (multiplicar (num1,num2));
        
        break;

    case (4):
        console.log (dividir (num1,num2));
        
        break;
    
}