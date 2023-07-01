//log statements using console.log()
/* console.log('hello from main.js')
console.log('hello js')
console.log('hi')
console.log('hello world')

//variables

let age = 25
console.log(age)

const salary = 3000
console.log(salary)

//preferohet mu perdor const sepse kur i jepet vlera njehere smundet me ndryshu ndersa variabla let ndryshon p.sh
//const salary = 0
//salary = 1000
//console.log(salary)
//pra paraqitet error ne terminal 

//vlera e variables let ndryshohet p.sh
let sum = 1000
sum = 3000
console.log(sum) */

/*ushtrim
const mosha = 50
console.log(mosha)

let nota = 10
nota = 5
console.log(nota)*/

/*Data types - specifikojn qfar lloje te datave munden mu rujt dhe ndryshu ne nje program
//Jane 7 lloje te data types primitive te cilat jane: string, number, boolean, undefined, null, bigint, symbol
//Dhe eshte vetem nje lloj i data type jo primitive i cili eshte: objects

//string  eshte nje sekuenc karakteresh qe reprezenton nje vlere te nje texti, mund te permbaje '', "" dhe `` p.sh
const name = "Sibora"
const language = "Javascript"
const channel = `youtube`

//number- reprezenton integerin dhe float point numbers p.sh
const total = 0 //integer//
const PI = 3.14 //float//

//boolean - reperzenton subjekte logjike dhe mundet me pas vetem njeren prej vlerave true ose false
const isActive = true
const isNewUser = false 

//undefined - reprezenton vleren qe nuk eshte e caktuar p.sh nese nje variabel eshte e deklaruar por vlera e saj nuk eshte caktuar ajo variabel do te jete undefined
let result
console.log(result) //ne terminal rezultati do te dali undefined

//null- reprezenton vlerat boshe apo te pa njohura
const data = null

//non-primitive data type - eshte nje koleksion i vlerave, object- eshte nje datatype komplex
const person = {
    fistName: 'Sibora',
    lastName: 'Berisha',
    age: 18,
}
console.log(person.fistName)

//array
const oddNumbers = [1, 3, 5, 7, 9]
console.log(oddNumbers[0])*/

/*Operators- simbole speciale qe perdoren per me performu operations ne vlera dhe variabla
//llojet e operatoreve: assignment operators, arithmetic operators, comparison operators, logical operators, string operators

//assigment operator - perdoret per mi lidh dy variabla bashk shembulli me poshte tregon assigment operator dhe arithmetic operator
let x = 10
let y = 15
console.log(x - y)

//comparison operator - krahasojne dy vlera dhe kthejne nje vlere boolean
let a = 10
let b = 20
console.log(a == b) 

//logical operators - performojn operations logjike dhe kthejne nje vlere boolean true ose false
const isValidNumber = x > 8 || 8 > y
console.log(isValidNumber)

const isValid = true
console.log(!isValid)

//string operator, + perdoret tek numrat per te kryer mbledhjen ndersa tek fjalet per ti bashkuar p.sh
console.log('Sibora' + 'Berisha')*/

/*type conversions, jane dy lloje implicit conversion(ku js do te kovertoj vet automatikisht tipin) dhe explicit conversion (ku duhet manualisht me konvertu tipin)
console.log('4' / '2')

console.log(Boolean('3.14'))
console.log(Boolean(500))*/

/*equality - dy forma ==(allows coercion), ===(does not allow coercion)

const var1 = '10'
const var2 = 10
console.log(var1 == var2)
console.log(var1 === var2)*/

/*conditional statements(kushtezimet) jane disa lloje: if, else, else if, switch
const num = 10

if (num > 0){
    console.log('number is positive')
} else if (num < 0){
    console.log('number is negative')
}
else{
    console.log('number is zero')
}

const color = '10'
switch(color) {
    case 'red':
        console.log('color is red')
        break
    case 'blue':
        console.log('color is blue')
        break
    case 'green':
    console.log('color is green')
    break
    default:
        console.log('not a valid color')
}*/

/*Looping code
for (let i = 1; i <= 5; i++) {
    console.log('Perseritja e numrit' + 1)
}

let i = 1
while (i <= 5){
    console.log('perseritja e numrit' + i)
    i++
}

const numArray = [1, 2, 3, 4, 5]
for (const num of numArray) {
    console.log('perseritja e numrit' + num)
}*/

//Functions- jane blloqe kodi qe perdoren per te kryer nje task te veqant
function greet(username) {
    console.log('good morning' + username)
}
greet('sibora')

function add(a, b){
    return a + b
}
const sum = add(5, 10)
console.log(sum)

//scope- determinon aksesibilitetin ose visibilitetin e variablave. Llojet e scop: block scope, function scope, global scope

const myNum = '100'
if(true){
    const myName = 'Sibora'
    console.log(myName)
    console.log(myNum)
}

function testfunction(){
    const myLastname = 'Berisha'
    console.log(myLastname)
}
testfunction()

let x = 10
console.log(x =+ 5)


/*let sibi = "hey im learning javascript"
console.log(sibi)*/

/*let username = prompt("what is your name")
let lastname = prompt("what is your lastname")
let you = username + lastname
alert("hello " + you)*/

//autorizimi
/*let username = prompt("what is your name")
let access = "sibora" 
if(username === access) {
    alert("welcome " + access)
} else if(username !== access) {
    alert("you are not authorized")
} else{
    alert("kod i pa definuar")
}*/

/*Calculator
let firstNumber = prompt("vendos nje numer")
let secondNumber = prompt("vendos edhe nje numer")
let result1 = Number(firstNumber) + Number(secondNumber)
let result2 = firstNumber - secondNumber
let result3 = firstNumber * secondNumber
let result4 = firstNumber / secondNumber
alert("rezultati i mbledhjes se ketyre numrave eshte:" + result1)
alert("rezultati i zbritjes se ketyre numrave eshte:" + result2)
alert("rezultati i shumezimit te ketyre numrave eshte:" + result3)
alert("rezultati i pjesetimit te ketyre numrave eshte:" + result4)
*/

/*let age = prompt("enter your age")
let access = 18
if(age === access){
    alert("urime")
} else if(age < access) {
    alert("jeni shhume i vogel")
} else {
    alert("pershendetje")
}*/

/*let numriIpare = prompt("shkruaj numrin e pare")
let numriDyte = prompt("shkruaj numrin e dyte")
function multiply() {
    alert(numriIpare * numriDyte)
}

multiply()*/

/*function multiply(a , b){
    return a * b
}
let total = multiply(5, 8)
console.log(total)*/

/*function checkDriveAge(){
    let age = prompt("shkruani moshen tuaj")
    let access = 18
    if(age >= access){
        alert("pershendetje")
    }else{
        alert("nuk mund te hyni")
        window.stop()
    }
}
checkDriveAge()*/

/*let list = ["Banana", "Apples", "Oranges", "Blueberries"]
//list.shift() // e modifikon listen dhe e fshin itemin e par
//list.pop() // e modifikon listen dhe e fshin itemin e fundit
//let myNewList = list.concat(["Kiwi"]) //shton items ne list
console.log(myNewList)*/

//objects
/*const user = {
    username: "Sibora",
    lastName: "Berisha",
    age: 18,
    married: false

}
console.log(user.age)*/


/*const user = {
    username: prompt("enter username"),
    location: prompt("enter your location"),
    age: prompt("enter your age")
}
alert("hello " + user.username)*/




//Loops
/*let todos = [
    "eat",
    "study",
    "watch tv",
    "sleep"
]*/

/*for (let i = 0; i < todos.length; i++){
    console.log(todos[i] + "!")
}*/

//infinite loop
/*while (0 < todos.length) {
    console.log(todos)
    todos.length++
}*/


/*todos.forEach(function(todos) {
    console.log(todos)
})*/

//foreach loop 
/*const user = [
    {
        username: "sibora",
        age: "17",
        place: "prizren"
    },
    {
        username: "mali",
        age: "18",
        place: "prizren"
    },
    {
        username: "sibi",
        age: "18",
        place: "prishtine"
    },
    {
        username: "john",
        age: "33",
        place: "prizren"
    }
]
user.forEach(function(user) {
    console.log(user.username)
}); */ 

//mini facebook on console
/*let database = [ 
    {
        username: "sibora",
        password: "sibora123"
    },
    {
        username: "mali",
        password: "mali123"
    }
]


let newsFeed = [
    {
        username: "Bob",
        timeline: "hello there"
    },
    {
        username: "Sara",
        timeline: "how you doing?"
    },
    {
        username: "Sibora",
        timeline: "How are you"
    }
]
let user = prompt("enter your username")
let pass = prompt("enter your password")

function isUserValid(username, password){
    for(i = 0; i < database.length; i++){
        if(username === database[i].username && password === database[i].password){
            return true
        }
        }
        return false
    }


function signIn(username, password){
        if(isUserValid(username, password)){
            console.log(newsFeed)
        }else{
            alert("Your username or password is incorrect")
            window.stop()
        }
    }
signIn(user, pass)*/


/*let numripare = prompt("shkruaj nje numer")
let numridyte =  prompt("shkruaj edhe nje numer tjeter")

const barazimi = Number(numripare) + Number(numridyte)
const barazimi1 = (numripare) - (numridyte)
const barazimi2 = numripare * numridyte
const barazimi3 = numripare / numridyte

let lista = ["item1", "item2", "item3", "item4"]
function baraz(){
    alert("rezultati i mbledhjes se ketyre dy numrave eshte: " + barazimi)
    alert("rezultati i zbritjes se ketyre dy numrave eshte: " + barazimi1)
    alert("rezultati i shumezimit te ketyre dy numrave eshte: " + barazimi2)
    alert("rezultati i pjesetimit te ketyre dy numrave eshte: " + barazimi3)

    let lista = ["item1", "item2", "item3", "item4"]

    if(barazimi < 100 && barazimi1 < 100 && barazimi2 < 100 && barazimi3 < 100){
        console.log(lista)
    }else{
        console.log("numri shume i madh per list")
    }
}
baraz()

let button = document.getElementById("button")
button.addEventListener("click", function(){
    window.open("about.html" , "popup" , "width=800,height=600,scrollbars=yes")
})*/

/*enter.addEventListener("click", function(){
    if(input.value.length > 0){
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    ol.append(li)
    input.value = ""
    }
})

input.addEventListener("keypress", function(event){
    if(input.value.length > 0 && event.code === "Enter"){
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    ol.append(li)
    input.value = ""
    }
})*/

/*let enter = document.getElementById("enter")
let input = document.getElementById("userinsert")
let ol = document.querySelector("ol")


enter.addEventListener("click", function(){
    if(input.value.length > 0){
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(input.value))
        ol.append(li)
        input.value = ""
    }
})

input.addEventListener("keypress", function(event){
    if(input.value.length > 0 && event.code === "Enter"){
        let li = document.createElement("li")
      li.appendChild(document.createTextNode(input.value))
        ol.append(li)
        input.value = ""
    }
})*/

//gardient selector 
let css = document.getElementById("text")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let color3 = document.querySelector(".color3")
let body = document.getElementById("gradient")
let primarytext = document.getElementById("thistext")

function setGradient(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value})`
    css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value})`
    primarytext.style.display = 'none'

}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

color3.addEventListener("input", setGradient)


/*let click = document.getElementById("click")
let ordered = document.querySelector("ol")
let input = document.getElementById("text")



click.addEventListener("click", function(){
    if(input.value.length > 0) {
    let list = document.createElement("li")
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "delete"
    deleteButton.classList.add("delete")
    list.appendChild(document.createTextNode(input.value))
    list.appendChild(deleteButton)
    ordered.appendChild(list)
    input.value = ""
    
    }
})
   
ordered.addEventListener("click", function(event){
    if(event.target.classList.contains("delete")){
        event.target.parentElement.remove()
    }
})

input.addEventListener("keypress", function(evt){
    if(input.value.length > 0 && evt.code === "Enter") {
    let list = document.createElement("li")
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "delete"
    deleteButton.classList.add("delete")
    list.appendChild(document.createTextNode(input.value))
    list.appendChild(deleteButton)
    ordered.appendChild(list)
    input.value = ""
    
    }
})*/
