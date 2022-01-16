import * as actionTypes from './shoppingTypes'

const INITIAL_STATE= {
    products: [
                {
                    id:1,
                    title: " exclusive bed",
                    category: "office",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/bed.jpeg'
                },
                {
                    id:2,
                    title: "Coffee Brown cushion",
                    category: "office",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "150",
                    image: "/images/brown-cushion.jpg"
                },
                {
                    id:3,
                    title: "Camp Chair",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "100",
                    image: "/images/camp-chair.jpg"
                },
                {
                    id:4,
                    title: "Brown cushion",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "150",
                    image: "/images/brown-cushion.jpg"
                },
                {
                    id:5,
                    category: "office",
                    title: "office chair ",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/camp-chair.jpg'
                },
                {
                    id:6,
                    title: "Bedroom exclusive bed",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/bed.jpeg'
                },
               
                {
                    id:7,
                    title: "Bedroom exclusive bed",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/bed.jpeg'
                },
                {
                    id:8,
                    category: "office",
                    title: "Precious chair",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "100",
                    image: "/images/camp-chair.jpg"
                },
                {
                    id:9,
                    title: "Bedroom exclusive bed",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/bed.jpeg'
                },
                {
                    id:10,
                    title: "Brown cushion",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "150",
                    image: "/images/brown-cushion.jpg"
                },
                {
                    id:11,
                    title: "Camp Chair",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "100",
                    image: "/images/camp-chair.jpg"
                },
                {
                    id:12,
                    title: "Brown cushion",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "150",
                    image: "/images/brown-cushion.jpg"
                },
                {
                    id:13,
                    title: "Brown cushion",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "150",
                    image: "/images/brown-cushion.jpg"
                },
                {
                    id:14,
                    title: "Bedroom exclusive bed",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/camp-chair.jpg'
                },
                {
                    id:15,
                    title: "Bedroom exclusive bed",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/bed.jpeg'
                },
                {
                    id:16,
                    title: "Precious chair",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "100",
                    image: "/images/camp-chair.jpg"
                },
                {
                    id:17,
                    title: "Bedroom exclusive bed",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/bed.jpeg'
                },
                {
                    id:18,
                    title: "akkada",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "150",
                    image: "/images/brown-cushion.jpg"
                },
                {
                    id:19,
                    title: "dining chair",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/camp-chair.jpg'
                },
                {
                    id:20,
                    title: "plastic chair",
                    description: "  versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/bed.jpeg'
                },
                {
                    id:21,
                    title: " exclusive bed",
                    category: "office",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/bed.jpeg'
                },
                {
                    id:22,
                    title: "Coffee Brown cushion",
                    category: "office",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "150",
                    image: "/images/brown-cushion.jpg"
                },
                {
                    id:23,
                    title: "Camp Chair",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "100",
                    image: "/images/camp-chair.jpg"
                },
                {
                    id:24,
                    title: "Brown cushion",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "150",
                    image: "/images/brown-cushion.jpg"
                },
                {
                    id:25,
                    category: "office",
                    title: "office chair ",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/camp-chair.jpg'
                },
                {
                    id:26,
                    title: "Bedroom exclusive bed",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/bed.jpeg'
                },
               
                {
                    id:27,
                    title: "Bedroom exclusive bed",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/bed.jpeg'
                },
                {
                    id:28,
                    category: "office",
                    title: "Precious chair",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "100",
                    image: "/images/camp-chair.jpg"
                },
                {
                    id:29,
                    title: "Bedroom exclusive bed",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/bed.jpeg'
                },
                {
                    id:30,
                    title: "Brown cushion",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "150",
                    image: "/images/brown-cushion.jpg"
                },
                {
                    id:31,
                    title: "Camp Chair",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "100",
                    image: "/images/camp-chair.jpg"
                },
                {
                    id:32,
                    title: "Brown cushion",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "150",
                    image: "/images/brown-cushion.jpg"
                },
               

    ], //(id, yitle, desc., price)
    cart: [], //(id, title, desc., price, img, quantity)
    currentItem: null,
}


const ShopReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
       case actionTypes.ADD_TO_CART:
           //    get item's data from yhe products array
           const item = state.products.find(prod => prod.id === action.payload.id)
           //    check if itme is already in cart
           const inCart = state.cart.find((item)=> item.id === action.payload.id ? true : false)
           return {
            ...state,
            cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1 } : item) : [...state.cart, {...item, qty: 1}],
           }
   
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !==action.payload.id),
            };

        case actionTypes.ADJUST_QTY:
        return {
            ...state,
            cart: state.cart.map((item) => 
            item.id === action.payload.id 
            ? {...item, qty: +action.payload.qty} 
            : item
            )
        };

        case actionTypes.LOAD_CURRENT_ITEM:
        return {
            ...state,
            currentItem: action.payload,
        };
        case actionTypes.CLEAR_CART:
        return {
            ...state,
            cart: []
        };


        default:
            return state
   }
};

export default ShopReducer
