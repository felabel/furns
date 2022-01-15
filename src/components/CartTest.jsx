import React, { useState }from 'react'
import { Icon } from '@iconify/react';



import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../redux/shopping/shoppingActions'


const CartTest = ({ itemData, removeFromCart, adjustQty}) => {
  const [input, setInput] = useState(itemData.qty)



  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value)

  }
    return (
        <div>
            <div className="hidden sm:block md:visible lg:visible wrap  max-w-6xl mx-auto ">
                <div className="tit max-w-7xl h-auto mx-auto"><p>Cart (4 Items)</p></div>
                <div className="  max-w-6xl h-auto mx-auto grid sm:grid-cols-6 overflow-x-auto p-4 font-semibold">
                <div className="item  col-span-3 grid">Item</div>
                <div className="details  col-span-1 text-center">Price</div>
                <div className="price  col-span-1 text-center">unit paice</div>
                <div className="price  col-span-1 text-center">subtotal</div>


                </div>

                <div className="gri  max-w-6xl h-auto mx-auto grid sm:grid-cols-6  px-4 shadow-lg ">
                    <div className="item  col-span-3 grid">
                        <div className="grid sm:grid-cols-4">
                            <div className="image  col-span-1">
                                <img src={itemData.image} alt ={itemData.title} className='w-full h-auto' />
                            </div>
                            <div className="details  col-span-3 p-2">
                                <p className='text-lg font-semibold py-1'>{itemData.title}</p>
                                <p className='text-base text-gray-600 py-1'>size: 64inches</p>
                                <p className='text-sm text-black font-semibold py-1'>{itemData.description}</p>
                                <div className="action flex  mr-12 text-olive-orange">
                                    <div className='border-r border-gray-200'> 
                                        <Icon icon="icon-park-outline:like" inline={true} className='pt-2 w-7 h-7 mr-3'/>
                                    </div>
                                    <div className=''>
                                        <Icon icon="ic:baseline-delete" inline={true} className='pt-2 w-7 h-7 ml-2 '/>
                                    </div>
                                    <span className='uppercase pt-1'>remove</span>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="price  col-span-1 text-center py-10 border-x border-gray-200 ">$ {itemData.price}</div>
                    <div className="qty  col-span-1 border-r border-gray-200 flex py-10">
                        <span className='inline-block mx-4 text-2xl'>
                            <Icon icon="clarity:minus-circle-solid" color="#ff6e0d" inline={true} className=''/>
                        </span>  
                        <span className=''>2</span> 
                        <span className='mx-4 text-2xl'><Icon icon="bi:plus-circle-fill" color="#ff6e0d"  inline={true} />
                        </span>
                    </div>
                    <div className="subtotal  col-span-1 text-center py-10">$ {itemData.price * itemData.qty  }</div>
                    


                </div>

            </div>
            

            {/* mobile */}
            <div className="mycart sm:hidden">
                <div className="wrap">
                    <p className='uppercase mx-4 text-sm text-gray-00'>my cart (2 items)</p>
                    <div className='my-2 shadow-lg '>

                    
                        <div className="grid grid-cols-3 pl-2 ">
                            <div className="col-span-1">
                                <img src='/images/bed.jpeg' />
                            </div>
                            <div className="col-span-2 px-1">
                                <p className='text-lg font-semibold py-1'>exclusive bed</p>
                                <p className='text-base text-gray-600 py-1'>size: 64inches</p>
                                <p className='text-sm text-black font-semibold py-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                                <p>$ 56</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 border-t border-gray-200 my-2 px-4 py-2'>
                            <div className="wish col-span-2 flex text-olive-orange">
                                <div className='border-r border-gray-200'> 
                                    <Icon icon="icon-park-outline:like" inline={true} className='pt-2 w-7 h-7 mr-3'/>
                                </div>
                                <div className=''>
                                    <Icon icon="ic:baseline-delete" inline={true} className='pt-2 w-7 h-7 ml-2 mx-1'/>
                                </div>
                                <span className='uppercase pt-1'>remove</span>
                            </div>
                            <div className="adjust col-span-1 pt-2 flex ">
                                <span className='inline-block mx-4 text-2xl'>
                                    <Icon icon="clarity:minus-circle-solid" color="#ff6e0d" inline={true} className=''/>
                                </span>  
                                <span className=''>2</span> 
                                <span className='mx-4 text-2xl'><Icon icon="bi:plus-circle-fill" color="#ff6e0d"  inline={true} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
      adjustQty: (id, value) => dispatch(adjustQty(id, value)),
      removeFromCart : (id) => dispatch(removeFromCart(id))
    }
  }
  
  export default connect(null, mapDispatchToProps)(CartTest);
  
//   <div className={styles.cartItem}>
//   <img
//     className={styles.cartItem__image}
//     src= {itemData.image}
//     alt= {itemData.name}
//   />
//   <div className={styles.cartItem__details}>
//     <p className={styles.details__title}>{itemData.title}</p>
//     <p className={styles.details__desc}>{itemData.description}</p>
//     <p className={styles.details__price}>$ {itemData.price * itemData.qty  }</p>
//   </div>
//   <div className={styles.cartItem__actions}>
//     <div className={styles.cartItem__qty}>
//       <label htmlFor="qty">QTY</label>
//       <input
//         min="1"
//         type="number"
//         id="qty"
//         name="qty"
//         value={input}
//         // value={itemData.qty}
//         onChange={onChangeHandler}
        
//       />
//     </div>
//     <button onClick={() => removeFromCart(itemData.id)}
//        className={styles.actions__deleteItemBtn}
//     >
//       <img
//         src="https://image.flaticon.com/icons/svg/709/709519.svg"
//         alt=""
//       />
//     </button>
//   </div>
// </div>
