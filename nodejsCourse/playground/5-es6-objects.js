// Object property short hand

const name = "Andree"
const userAge = 26

const user = {
    name,
    userAge,
    location: 'Mentone, AL'

}

// console.log(user.userAge)


// destructuring
const product = {
    label: 'Red Notebook',
    price : 3,
    stock : 200,
    salePrice : undefined
}

// const label = product.label
// console.log(label)

const {label:productLabel, stock} = product
console.log(productLabel)