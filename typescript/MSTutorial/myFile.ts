import {add, subtract} from "./math";
import times from "math";
var result = times(add(2, 3), subtract(5, 3));

var myClient = {name: "Bob", height: 6};
function greetClient({name, height: howTall}) {
    console.log("Hello, " + name + ", who is " + howTall + " feet tall.");
}
greetClient(myClient);