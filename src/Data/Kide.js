import kid1 from '../img/fashion/kids/i(8).jpeg'
import kid2 from '../img/fashion/kids/i(7).jpeg'
import kid3 from '../img/fashion/kids/i(6).jpeg'
import kid4 from '../img/fashion/kids/i(3).webp'
import kid5 from '../img/fashion/kids/i(4).jpeg'
import kid6 from '../img/fashion/kids/i(4).jpg'
import kid7 from '../img/fashion/kids/i(5).jpeg'
import kid8 from '../img/fashion/kids/i(3).jpg'
import kid9 from '../img/fashion/kids/i(3).jpeg'
import kid10 from '../img/fashion/kids/i(2).webp'
import kid11 from '../img/fashion/kids/i(2).jpg'
import kid12 from '../img/fashion/kids/i(2).jpeg'
import kid13 from '../img/fashion/kids/i(1).webp'
import kid14 from '../img/fashion/kids/i(1).jpg'
import kid15 from '../img/fashion/kids/i(1).jpeg'

let Kid = [
    {
        id: 310,
        image: kid1,
        title: "Kids",
        color: "Blue",
        price: "499"
    }, 
    {
        id: 320,
        image: kid2,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 330,
        image: kid3,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 340,
        image: kid4,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 350,
        image: kid5,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 360,
        image: kid6,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 370,
        image: kid7,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 380,
        image: kid8,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 390,
        image: kid9,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 311,
        image: kid10,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 312,
        image: kid11,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 313,
        image: kid12,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 314,
        image: kid13,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 315,
        image: kid14,
        title: "Kids",
        color: "Blue",
        price: "499"
    },
    {
        id: 316,
        image: kid15,
        title: "Kids",
        color: "Blue",
        price: "499"
    }

]
export default Kid;
export function getKid(id) {
    return Kid.find(Kid => Kid.id === id)
}