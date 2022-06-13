console.log('Hello')

const x = 1 //constant for which a value might not be changed
let y = 5 //defines a normal variable

console.log(x,y)
y+=10

console.log(x,y)
y="text" //y used to be int and now string allowed

console.log(x,y)

console.log("========ARRAY========")
const t = [1,-1,3] //contents can be modified even if const cuz variable always points to same object

t.push(5) //1st way to append
console.log(t)

console.log(t.length)
console.log(t[1]) 

t.forEach(value =>{
    console.log(value)
})

const t2 = [1,-1,3]
const t3 = t2.concat(5)//2nd way to append returns a new array which contains the old + new element
console.log(t2)
console.log(t3)

console.log("map")
const q = [1,2,3]
const q2 = q.map(value => value * 2) //based on old array map creates new array after applying the change 
console.log(q2)

const m = q.map(value => '<li>' + value + '</li>')
console.log(m)

console.log("destructuring assignment")
const w = [1,2,3,4,5]
const[first, second, ... rest] = w //rest contains elements in an array from 3rd to last
console.log(first, second)
console.log(rest)

console.log("========OBJECTS========")
const object1 = {
    name: 'Sajed',
    age: 12,
    education:"bsc",
}
object1.address = 'Bats'
object1['secret number'] = 123456 //quotes cuz of space. can't be called without using brackets and quotes

console.log(object1.name)
const fieldname = 'age'
console.log(object1[fieldname])
console.log(object1.address)
console.log(object1['secret number'])

console.log("========FUNCTIONS========")
const sum = (p1,p2) =>{ //if one parameter exclude parentheses
    console.log(p1)
    console.log(p2)
    return p1+p2
}

const result = sum(2,3)
console.log(result)

const square = p =>{
    console.log(p)
    return p*p
}

const square1 = p => p*p //same as the function^ except shorter

const e = [1,2,3]
const esquared = e.map(p => p*p)
console.log(esquared)


