// const square = function (x){
//     return x*x
// }

const event = {
    name:'Birthday Party',
    guestList: ['Jimmy', 'Eddie', 'Rob'],
    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()