import girl from '../img/fashion/girl/1.jpeg'
import girlrTwo from '../img/fashion/girl/2.jpeg'
import girlrp from '../img/fashion/girl/3.jpeg'
import girlro from '../img/fashion/girl/4.jpg'
import girlri from '../img/fashion/girl/5.jpg'
import girlru from '../img/fashion/girl/6.jpeg'
import girlry from '../img/fashion/girl/7.jpeg'
import girlrt from '../img/fashion/girl/8.jpeg'
import girlrr from '../img/fashion/girl/9.jpeg'
import girlre from '../img/fashion/girl/10.jpeg'
import girlrw from '../img/fashion/girl/11.jpeg'
import girlrq from '../img/fashion/girl/12.jpeg'
import girlrl from '../img/fashion/girl/13.jpeg'
import girlrk from '../img/fashion/girl/14.jpeg'
import girlrj from '../img/fashion/girl/15.jpeg'
import girlrh from '../img/fashion/girl/16.jpeg'
import girlrg from '../img/fashion/girl/17.jpeg'
import girlrf from '../img/fashion/girl/18.jpeg'


let Girl = [
    {
        id: 11,
        image: girl,
        title: "Shirt",  // product name
        PDetail:"Formal shite made with the pure 100% cotton ", // Product delails
        color: "Green",
        price: "599",
        

    },
    {
        id: 12,
        image: girlrTwo,
        title: "Shirt",
        color: "Green",
        price: "599"

    },

    {
        id: 13,
        image: girlrp,
        title: "Shirt",
        color: "Green",
        price: "1988"

    },
    {
        id: 14,
        image: girlro,
        title: "Shirt",
        color: "Green",
        price: "128"

    },
    {
        id: 15,
        image: girlri,
        title: "Shirt",
        color: "Green",
        price: "9998"

    },
    {
        id: 16,
        image: girlru,
        title: "Shirt",
        color: "Green",
        price: "1998"

    },
    {
        id: 17,
        image: girlry,
        title: "Shirt",
        color: "Green",
        price: "1008"

    },
    {
        id: 18,
        image: girlrt,
        title: "Shirt",
        color: "Green",
        price: "125"

    },
    {
        id: 19,
        image: girlrr,
        title: "Shirt",
        color: "Green",
        price: "58"

    },
    {
        id: 20,
        image: girlre,
        title: "Shirt",
        color: "Green",
        price: "258"

    },
    {
        id: 21,
        image: girlrw,
        title: "Shirt",
        color: "Green",
        price: "835"

    },
    {
        id: 22,
        image: girlrq,
        title: "Shirt",
        color: "Green",
        price: "453"

    },
    {
        id: 23,
        image: girlrl,
        title: "Shirt",
        color: "Green",
        price: "786"

    },
    {
        id: 24,
        image: girlrk,
        title: "Shirt",
        color: "Green",
        price: "7867"

    },
    {
        id: 25,
        image: girlrj,
        title: "Shirt",
        color: "Green",
        price: "786"

    },
    {
        id: 26,
        image: girlrh,
        title: "Shirt",
        color: "Green",
        price: "1800"

    },
    {
        id: 27,
        image: girlrg,
        title: "Shirt",
        color: "Green",
        price: "580"

    },
    {
        id: 28,
        image: girlrf,
        title: "Shirt",
        color: "Green",
        price: "128"

    }
   
]
export default Girl;
export function getGirl(id){
   return Girl.find(Girl => Girl.id === id)
}
