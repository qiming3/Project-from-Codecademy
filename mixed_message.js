/* 
mixed messages from codecademy
build a message generator
every run should get a new randomized output
*/
let list1 = ['I', 'You', 'He', 'she']
let list2 = ['sucky sucky', 'licky licky', 'pokey pokey', 'touchy touchy']
let list3 = ['him', 'her', 'you', 'me']

const inputwords = (A, B, C) => {
        list1.push(A)
        list2.push(B)
        list3.push(C)
}

const randomOutput = () => {
    const index = Math.floor(Math.random()*list1.length)
    return index
}
 
console.log(`${list1[randomOutput()]} ${list2[randomOutput()]} ${list3[randomOutput()]}`)