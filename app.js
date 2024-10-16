// function myFunction(fullName, age) {
//     console.log('hello ' + fullName + ' ' + 'I am ' + age + ' years old!!!');
// }
// myFunction('shanto', 25);  


// function isJoin() {
//     console.log('joininggg');
// }
// isJoin();   


// document.getElementById('btn').addEventListener('click', isJoin);


// let numbers = [1, 2, 3, 4, 5]
// let squarNumbers = numbers.map(function (number) {
//     return number * number;
// });

// console.log(squarNumbers);

// let add = function (x, y) {
//     return x + y;
// };

// console.log(add(2, 6));

// let add = (x, y) => x + y;
// console.log(add(3, 9));



// const newSymbol = Symbol('key');
// const phoneModel = {
//     brand: 'Samsung',
//     model: 's24 ultra',
//     processor: 'gen 3',
//     camera: ['200mp','12mp','12mp'],
//     zoomCamera: true,
//     'selfie camera': 12,
//     [newSymbol]: 'my symbol',
//     brandPhoneModel: function () {
//         return `Phone Brand is ${this.brand} and model is ${this.model}`;
//     },
// };

// console.log(phoneModel);
// console.log(phoneModel[newSymbol]);
// console.log(phoneModel.hasOwnProperty('model'));
// console.log(Object.keys(phoneModel));
// console.log(Object.values(phoneModel));

// console.log(phoneModel.brandPhoneModel());


// function Persons(first, last ) {
//     (this.firstName = first), (this.lastName = last);
// }

// const personOne = new Persons('shanto', 'beast');
// personOne.age = 25;
// const personTwo = new Persons('mahfuz', 'rahman');

// console.log(personOne);
// console.log(personTwo);





// const person = {
//     firstName: 'Mahfuz',
//     lastName: 'Shanto',
//     age: 25,
//     university: 'Metropolitan University',
//     identity: function () {
//         return 'my name is '+ this.lastName + ' and my age is '+ this.age + ' !!!'

//     }
// };

// console.log(person.university);
// console.log(person['firstName']);
// console.log(person.identity());



// const language = ['html', 'js', 'css', 'php', 'mysql', true, false, 25, 'cpp'];

// language[3] = 'tailwind css'
// // console.log(language.toString());
// // console.log(language[language.length-1]);
// // console.log(language.join(' $$ '));
// console.log(language.pop());
// console.log(language.push('angular'));
// console.log(language.unshift('angu'));
// console.log(language.splice(3,0, 'like', 'liked'));
// console.log(language);
// console.log(language.shift());

// const x = [1,2,3,4]
// const y = [1,2,3,4]
// const z = [1,2,3,4]

// const res = x.concat(y,z);
// console.log(res);

// const aa = [
//     [1,2,3,4,5],
//     [1,2,3,4,5],
//     [1,2,3,4,5],
// ];
// console.log(res.flat());


// function like() {
//     document.getElementById('btn').innerHTML = '<i class="fa-solid fa-heart"></i> Liked';
// }

// document.getElementById('btn').onclick = function() {
//     document.getElementById('btn').innerHTML = '<i class="fa-solid fa-heart"></i> Likedd';
// }
// document.getElementById('btn').addEventListener('click', () => {
//     document.getElementById('btn').innerHTML = '<i class="fa-solid fa-heart"></i> Likedd';
// },
// false
// );

// function verifyAge(age) {
//     if (age >= 18) {
//         return "Adult";
//     } else {
//         return "Minor";
//     }
// }

// // Taking input from the user using prompt()
// let userAge = prompt("Enter your age:");

// // Converting the input to a number
// userAge = Number(userAge);

// // Verifying the age
// let verificationResult = verifyAge(userAge);

// // Printing the result
// console.log("The user is: " + verificationResult);


// const fullName = `my name is shanto and I'm developer`
// // console.log(fullName);
// document.getElementById('text').innerHTML = fullName;
// console.log(fullName.charAt(8));
// console.log(fullName.indexOf('i'));
// console.log(fullName.slice(6));
// console.log(fullName.substring(6));






// var a = 10;
// var a = 10;
// a = 'country';
// {
//     var block = '30';
//     console.log(a);
// }

// let b = 12;
// let a = 12;

// {
//     console.log(b);
// }

// const person = {
//     firstName: 'shanto',
//     age: '25',
//     uni: 'du'
    
// };
// person.firstName = 'mahfuz';
// person.age = '20';
// person.uni = 'fdsf'

// console.log(person);

// ===
// !=
// <=
// >=


// myFunction();

// function myFunction (fullName ='mahfuz', age = 25 , dateOfBirth = 2000) {
//     console.log('hello ' + fullName + ' my age is ' + age);
// };

// function myButton() {
//     console.log('liked');
// }
// document.getElementById('btn').addEventListener('click', myButton)

// let maths = function(x,y){
//     console.log('it works');
//     return x+y;
// }
// console.log(maths(2,4));

// function myFunction() {
//     let firstName ='shantfgggfgo'
//     console.log(firstName);
// }
// myFunction()

// let add = (x,y) => 
//     x*y;
// console.log(add(4,5));    


// function like() {
//     document.getElementById('btn').innerHTML = `<i class="fa-solid fa-heart"></i> Liked `;
// }

// document.getElementById('btn').onclick = function() {
//     document.getElementById('btn').innerHTML = `<i class="fa-solid fa-heart"></i> Liked `;
// }

// document.getElementById('btn').addEventListener('click', () => {
//     document.getElementById('btn').innerHTML = `<i class="fa-solid fa-heart"></i> Liked `;
// })


// let phoneModel = {
//     brand: 'iphone',
//     camera: '2000',
//     battery: 5000,
//     processor: 'gen 18',
//     model: function () {
//         // return "my brand name is " + this.brand + " my processor is " + this.processor
//         return `my brand is ${this.brand} and my pro is ${this.processor}`
//     }
// }

// console.log(phoneModel.model());
// //key : value

// phoneModel.processor = 'gen 17'
// console.log(Object.values(phoneModel));
// console.log(phoneModel.hasOwnProperty('cameraa'));

// const objOne = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// const objTwo = {
//     x: 1,
//     y: 2,
//     z: 3,
// }
// const objThree = {
//     p: 1,
//     q: 2,
//     r: 3,
// }

// const objFinal = {...objOne, ...objTwo, ...objThree}
// // console.log(objFinal);

// function Person (first, last, age) {
//     this.firstName = first, 
//     this.lastName = last, 
//     this.age = age
// }
// const personOneee = new Person('shanto', 'rahman', '25')
// const persontwoo = new Person('rifat', 'ali', '18')
// const perThree = new Person('asad', 'jaman', '24')
// // console.log(`My name is ${perThree.firstName} ${perThree.lastName} and I am ${perThree.age} years old.`);

// const objPerson = {
//     firstName: 'shanto',
//     lastName: 'rahman',
//     ageB: '24',
//     hairColor: 'black'
// }

// const objPersonOne = {
//     firstNme: 'mahfuz',
//     lastNme: 'rahman',
//     age: '25',
//     hairColorr: 'brown'
// }

// const result = Object.assign( objPerson, objPersonOne)
// console.log(result);

// obejct.person (target, source)

// let a = 2
//     if(a > 0) {
//       console.log('positive');
//     }
//     else {
//        console.log('negative');
//     }
 

//


// function checkValue(a,b) {
//     if(a === 1 && b === 2)
//     //    if(b===2) 
//             console.log(`a is 1 and b is 2`);
//         else 
//         console.log(`a is not 1`);
// }
    // let a = 1, b = 2
    // if(a === 1 && b === 2)
    //         console.log(`a is 1 and b is 2`);
    //     else 
    //     console.log(`a is not 1`);

// checkValue(1,2)

// let category = 'bus'
// let carType
// switch (category) {
//     case 'bus' :
//         carType = `this is a bus`
//         break
//     case 'bus' :
//         carType = `this is a busssss`
        
//     case 'bmw' :
//         carType = `this is  a bmw`    
       
//     default :
//         carType = `error`    
// }

// console.log(carType);

// function member(isMember) {
//     console.log(isMember ? `2` : `3`); 
// }
// member(true);

// const age = 18
// const bevarage = age >= 21 ? `drink` : `juice`
// console.log(bevarage);

// const greeting = (firstNmme, person) => {
//     const name = person ? person.name : 'stranger'
//     console.log( `${firstNmme}, ${name}`);
// }

// greeting('mahfuz', {name: 'shanto'});
// greeting('Mr', {name: 'jakir'});
// greeting('rifat', {name: 'ali'});

// const friend1 = 'michael'
// const friend2 = 'steve'
// const friend3 = 'peter'
// let friendss = ['michael', 'steve', 'peter']
// friendss[3] = 'shanto'
// console.log(friendss);

// console.log(friendss[2]);
// console.log(friendss.length);
// console.log(friendss[friendss.length - 2]);
// console.log(friendss);

// const firstName = 'shanto'
// const shanto = [firstName, 'rifat', 2037 + 1991, 'teacher']
// // console.log(shanto.length);

// const newPush = friendss.push('sarmin')
// console.log(friendss);

// // const newPushh = friendss.push('wagen')
// friendss.unshift('john')
// // friendss.pop()
// friendss.shift()

// console.log(friendss.includes('akash'));

// for ( let i = 0; i <=30; i++){
//     console.log(`my weight is ${i}`);
// }

// const years = [1991, 2007, 1969, 2024]
// const ages = []

// for( let i = years.length; i >= 0; i--){
//     ages.push(2037 - years[i])
// }
// console.log(ages);

// let i = 0
// while (i <= 10) {
//     console.log(`my weight is ${i}`);
//     i++
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// while(dice != 6){
//     console.log(dice);
//     dice = Math.trunc(Math.random() * 6) + 1
//     if(dice == 6)console.log(`6`);
// }


