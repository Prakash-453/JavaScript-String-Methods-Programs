1) Uppercase first letter

Input: "hello"
Output: "Hello"

Input: "world"
Output: "World"

Hint:charAt(), toUpperCase(), slice(), concat()

PROGRAM : 
let str = prompt('Enter the String : ')    // hello
let a = str.charAt(0)
let b = str.slice(1)
let c = a.toUpperCase()
let d = c.concat(b)
console.log(`The Upper Case First Letter of ${str} is : ${d}`)

OUTPUT : 
The Upper Case First Letter of hello is : Hello


PROGRAM : 
let str1 = prompt('Enter the String : ')    // world
let p = str1.charAt(0)
let q = str1.slice(1)
let r = p.toUpperCase()
let s = r.concat(q)
console.log(`The Upper Case First Letter of ${str1} is : ${s}`)

OUTPUT : 
The Upper Case First Letter of world is : World




2.Remove vowels

Input: "hello"
Output: "hll"

Input: "world"
Output: "wrld"      using replace().

PROGRAM : 
let str = prompt('Enter the String : ')     //hello
let remove_vowels = str2.replace(/[aeiou]/g,'')
console.log(`Remove Vowels from the ${str2} is : ${remove_vowels}`)

OUTPUT : 
Remove Vowels from the hello is : hll


PROGRAM : 
let str3 = prompt('Enter the String : ')    // world
let removevowels = str3.replace(/[aeiou]/g,'')
console.log(`Remove Vowels from the ${str3} is : ${removevowels}`)

OUTPUT : 
Remove Vowels from the world is : wrld
