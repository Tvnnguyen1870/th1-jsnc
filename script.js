let str1 = 'My name is:'  
let name1 = 'Nguyen';
let str2 = `${str1} ${name1}`;
console.log('str1: ',str1);
console.log('name1: ',name1);
console.log('str2: ',str2);


let information = { firstName: 'Nguyen', lastName: 'To'};
let { firstName, lastName} = information
console.log('firstName: ',firstName);
console.log('lastName: ',lastName);


let [firstName1] = ['Nguyen', 'To'];
console.log('firstName1: ',firstName1);


let firstName3 = 'Nguyen';
let information1 = {firstName3}
console.log('firstName3: ', firstName3);


let str = 'hello';
for(let char of str) {console.log(char);}


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log('arr1: ',arr1);
console.log('arr2: ',arr2);
console.log('arr3: ',arr3);


function findLength(...args){
    console.log(args.length);
}
findLength(2, 3, 4, 4, 5, 6);


const square = num => num * num;
console.log('num:3',square(3));


let str5 = 'hello world'
console.log(str5.includes('hello'));


class Car {
    constructor(doors, wheels){
        this.doors = doors;
        this.wheels = wheels;
    }
    describeMe() {
        console.log(`Door: ${this.doors} and Wheels: ${this.wheels}`);
    }
}
const car1 = new Car(4, 2)
console.log(car1);


function takeLongTimeAsync() {
    return new Promise(resolve =>{
        setTimeout(() => resolve('long_time_value'), 1000);
    });
}
async function test() {
    const v = await takeLongTimeAsync();
    console.log('v:',v);
}
test();