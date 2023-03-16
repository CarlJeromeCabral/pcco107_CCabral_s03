console.log('hello world');
// [section] Operators
// Arithmetic Operators

/*
	perform calculation:

	-addition (+)
	-subtraction (-)
	-multiplication (*)
	-division (/)
	-modulus (%) remainder
	-exponentiation (**) - raises the 1st value
*/

function divideNum(num1,num2){
	result = num1 / num2;
	console.log(result);
	return result;

}

let quotientResult = divideNum(50,5)
console.log(`The result of the operation is: ${quotientResult}`);

/*
	 Assignment Operator
	  -is used to assign value to a variable or a property of an object

	  - equal sign (=)

*/

let variable = `initial value`;

// addition assignment operator
// The addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable
let assignNumber = 8;
assignNumber = assignNumber + 2
console.log(`The result of the addition assignment operator is ${assignNumber}`);

// shorthand for assignment operator
assignNumber += 2;
console.log(`The result of the addition assignment operator is ${assignNumber}`);

// increment operator is used to increased the value of variable by 1
/*
	Two types of Increment operators:
	- post-increment operator(x++)
		-increases the value of x after it has been evaluated 
	-pre-increment operator (++X)
		-Increases the value of x before it is evaluated
*/

let x = 2;
console.log(x);
a = x++;
console.log(a);

b = ++x;
console.log(b);

// Subtraction/Multiplication/Division assignment Operator

// let assignNumber = 8;
let assignResult = 2;
assignResult -= 2;
console.log(`The result of assign operator is ${assignResult}`);

// PEMDAS 
//  the order of operations can be changed by adding the parentheses to the logic
let pemdas = 1 + (2 - 3) *  (4 / 5);
console.log(`The result of Mdas ${pemdas}`);
/*
	By adding parentheses '()', the order of operation are changed prioritizing operation inside the pharentheses first and follow the operations.
		1. 4/5 0.8
		2. 2-3 = -1
		3. -1 * 0.8 = 0.8
		4. 1 + 0.8 = 0.19 or 0.2
*/

/*
	Decrement operator is used to decrease the value of variable by 1

		- post-decrement (x--)
		- pre-decrement (--x)

	The Value of 'z' is decreases by a value of one before returning the value and storing it in the variable	
*/
let z = 3;
let decrement = --z;
console.log(`The Result of the pre-decrement is ${decrement}`);
console.log(`The Result of the pre-decrement is ${z}`);

// the value of 'z' is returned and stored in the variable 'decrement' then the value of z is decreased by one

decrement = z--;
// the value of z is at 2 before it was decremented
console.log(`The Result of the pre-decrement is ${decrement}`);
//the value of z was decreased reassigning the value to 1
console.log(`The Result of the pre-decrement is ${z}`);

// type of coercion
/*
	Comparison Operators
	- are used to compare the values of the left and right operands
	-return boolean

	Equality and Loose Equality Operator (==)
	- is used to compare two values for equality. The operator return true if the values are equal and false otherwise.
	-the equality operator performs type coercion, which means it converts the type values being compare to a common type before performing the comparison
*/
console.log(1==1);
console.log (1==`1`);// true - the string 1 is coerced to the number 1 before the comparison is made
console.log(null == undefined);

/*
	strict equality operator (===)
	- is used to compare two values for equality

	-the operator returns true if the value are the same type and have value and false otherwise

	-the strict equality does not perform type coercion, which means the values being compared must be of the same type to return true

*/
console.log(2===2);//true
console.log(2===`2`);

console.log(`1` !=1);
console.log(`Jungkook` != `Jin`);
console.log(1 != true);
console.log(true != `true`);
console.log(`0` != false);

/*
	
*/

console.log(`5` !== 5);
console.log(`true` !== true);

let name1 = `Juan`;
let name2 = `Jimin`;
let name3 = `JHope`;
let name4 = `RM`;

let number1 = 50;
let number2 = 60;
let numString1 = `50`;
let numString2 = `60`;

console.log(numString1 == number1);
console.log(numString2 === number2);

console.log(numString1 != number1);
console.log(name1 == `juan`);
console.log(name2 === `Jimin`);

let x1 = 500;
let y = 700;
let w = 8000;
let numString3 = `5500`;

console.log (x1 > y);
console.log(w > y);
console.log(numString3 < 1000);

let isAdmin = false
let isRegistered = true;
let isLegalAge = true;

let authori

