// const doWorkPromise = new Promise((res, rej) => {
//     res([1,3,4,5]),
//     rej('Something went wrong :(')
// }, 2000)

// doWorkPromise.then((result) => {
//     console.log('success', result)
// }).catch((error) =>{
//     console.log('Error!', error)
// })

const add = (a, b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(a + b)
        },2000)
    })
}
add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).catch((e) => {
    console.log(e)
})