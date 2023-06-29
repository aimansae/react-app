let namess='mosh';
console.log(namess)

let firstName = 'aiman'; 
let lastName = 'saeed';

const interestRate = 0.3;
console.log (interestRate)

// var funcion level scope

//const let same but const can not be redeclared
//block level scope

var change = 1
change = 4

let changed = 'stringliteral'
change = 4

console.log(change)
console.log(changed)

const notChanged = 4

console.log(notChanged)

console.log(typeof change)
console.log(typeof changed)

const client = {
    name: 'Aiman',
    age:6,
}
client.name = 'sara'

client['name']
console.log(client)


// arrays

let colors = ['red', 'blue'];
colors.push('green')
console.log(colors.length)


function  greet(name, surname) {
    console.log('helooo  ' + name + surname);
}

greet('Mark ', 'Lastname');

function square(number) {
    return number * number;
}

console.log(square(2))

//operators
let x = 10
let y = 3
x+= 5
console
console.log(x)

//comparison operators
console.log('1' == 1)

// > 100 points : gold, otherwise wilver

let points = 10
let type = points  > 100 ? 'gold' : 'silver';
console.log(type);


// logical operators

// and &&

console.log(true && true)

let highIncome = false;
let goodCredit = false

let eligible = highIncome || goodCredit;

console.log(eligible)

let userColor = undefined
let defaultColor = 'blue'

let currentColor = userColor || defaultColor
console.log(currentColor)

let numberws = 2 + 3 * 4;
console.log(numberws)

let a = 'red';
let b = 'blue';

let c = a;
a = b;
c = b
console.log(c)
console.log(b)


// if else

// hour 6-12 morning
// 12-6pm afternoon
// evening
let hour = 22;
if (hour >= 6 && hour < 12) 
console.log('goodmornind');


else if (hour > 12 && hour < 18 ) 
    console.log('Afternoon')
else 
console.log('evening')

// switch

let role = 'guest';

switch (role) {
    case 'guest':
        console.log('guest');
        break;
    case 'moderator':
        console.log('moderator');
        break;
    default :
    console.log('unknown')         

         
}

if ( role === 'guest') console.log('guest')
else if ( role ==='moderator') console.log(moderator)
else console.log('unknown')    

 
for (let i = 0; i <5; i++)
console.log('hello')


for (let i=0 ; i <5; i++)
console.log('ghrn')