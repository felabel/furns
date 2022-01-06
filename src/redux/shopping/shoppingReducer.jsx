import * as actionTypes from './shoppingTypes'

const INITIAL_STATE= {
    products: [
                {
                    id:1,
                    title: "Bedroom exclusive bed",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/bed.jpeg'
                },
                {
                    id:2,
                    title: "Brown cushion",
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
                    title: "Bedroom exclusive bed",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "350",
                    image: '/images/camp-chair.jpg'
                },
                {
                    id:6,
                    title: "Brown cushion",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "150",
                    image: "../../../public/images/brown-cushion.jpg"
                },
                {
                    id:7,
                    title: "Camp Chair",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "100",
                    image: "/images/camp-chair.jpg"
                },
                {
                    id:8,
                    title: "Brown cushion",
                    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes",
                    price: "/images/brown-cushion.jpg"
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

        

        default:
            return state
   }
};

export default ShopReducer
