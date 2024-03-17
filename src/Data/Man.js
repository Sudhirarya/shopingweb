import icon from '../img/fashion/man/i.jpeg'
import op1 from '../img/fashion/man/i(1).jpeg'
import op2 from '../img/fashion/man/i(2).jpeg'
import op3 from '../img/fashion/man/i(3).jpeg'
import op4 from '../img/fashion/man/i(4).jpeg'
import op5 from '../img/fashion/man/i(5).jpeg'



let man = [
    {
        id: 10,
        image: icon,
        title: "Shirt",  // product name
        PDetail:"Formal shite made with the pure 100% cotton ", // Product delails
        color: "Green",
        pSize: "S , M , L",
        price: "1258",
    },
    {
        id: 20,
        image: op1,
        title: "Shirt",
        color: "Green",
        price: "1258"

    },

    {
        id: 30,
        image: op2,
        title: "Shirt",
        color: "Green",
        price: "1258"

    },

    {
        id: 40,
        image: op3,
        title: "Shirt",
        color: "Green",
        price: "1258"

    },
    {
        id: 50,
        image: op4,
        title: "Shirt",
        color: "Green",
        price: "1258"

    },
    {
        id: 60,
        image: op5,
        title: "Shirt",
        color: "Green",
        price: "1258"

    },
]
export default man;
export function getMan(id){
   return man.find(Man =>Man.id === id)
}
