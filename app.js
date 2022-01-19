// console.log('Hello')

// const names = ['anna', 'susy', 'bob']
// const lastName = 'fitzgerald'
// let newArray = [];


// for (let i = 0; i < names.length; i++) {
//     console.log(i)
//     console.log(names[i])
//     newArray.push(`${names[i]} ${lastName}`)
// }

// console.log(newArray)

// const gas  = [10, 20, 30 ,40]
// const food = [11, 12, 13]

// function calculateTotal(arr) {
//     let total = 0   
//     for( let i=0 ; i < arr.length; i++) {
//         // console.log(arr[i])
//         total += (arr[i])
//         // console.log(total)
//     }
//     return total
// }

// const gasTotal = calculateTotal(gas)
// const foodTotal = calculateTotal(food)

// console.log({
//     gas: gasTotal,
//     food: foodTotal
// })


// let name = 'bobo';
// name = 'peter';

// function change() {
//     let name = 'milton'
//     console.log(name);
// }

// change()
// console.log(name)

// const people = [
//     {name: 'gerardo', age: 27 , position: 'SWE'},
//     {name: 'Drew', age: 23 , position: 'UI Designer'},
//     {name: 'Mildred', age: 33, position: 'Product Manager'}
// ]

// function showPerson(item) {
//     console.log(item.position)
// }

// people.forEach(showPerson)

// let total = 1112.57 + 547.81 + 15.75
// console.log(total)
// let realTotal = total - 149.30
// console.log(realTotal)
// let allTotals = realTotal + 4613.81
// console.log(allTotals)

// const people = [
//     {name: 'gerardo', age: 27 , position: 'SWE'},
//     {name: 'Drew', age: 23 , position: 'UI Designer'},
//     {name: 'Mildred', age: 33, position: 'Product Manager'}
// ]

// const roles = people.filter(function(item) {
//     return item.position === 'SWE'
// })



// function showPerson(item) {
//     console.log(item.name)
// }

// people.map(showPerson)

// console.log(roles)

// function showPerson(item) {
//     console.log(item.name)
// }

// people.forEach(showPerson)

// const ages = people.map(function(item) {
//     console.log(item)
//     return item.age +25
// })

// const newDetails = people.map(function(item) {
//     return {
//         firstName: item.name.toUpperCase(),
//         littleOlder: item.age + 30,
//     }
// })

// const names = people.map(function(item) {
//     return `<h1>${item.name}</h1>`
// })

// document.body.innerHTML = names.join('')

// console.log(ages)
// console.log(newDetails)

const months = [
'January',
'February',
'March',
'April',   
'May',
'June',
'July',
'August',
'October',
'November',
'December',
]

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const date = new Date();
const month = date.getMonth();
console.log(months[month])

const day = date.getDay()
console.log(days[day])