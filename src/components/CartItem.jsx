import {useState} from 'react'
import { Icon } from '@iconify/react';


import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../redux/shopping/shoppingActions'
import ToolTip from './ToolTip';


const CartItem = ({  itemData, removeFromCart, adjustQty}) => {
  // console.log(cart)
  const [input, setInput] = useState(itemData.qty)



  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value)

  }
    return (
     
        <div>
        <div className="hidden sm:block md:visible lg:visible wrap  max-w-6xl mx-auto ">
            

            <div className="gri  max-w-6xl h-auto mx-auto grid sm:grid-cols-6  px-4  ">
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
                                    <ToolTip />

                                    {/* <Icon icon="icon-park-outline:like" inline={true} className='pt-2 w-7 h-7 mr-3'/> */}
                                </div>
                                <div className=''>
                                    <Icon icon="ic:baseline-delete" inline={true} className='pt-2 w-7 h-7 ml-2 cursor' onClick={() => removeFromCart(itemData.id)}/>
                                </div>
                                <span className='uppercase pt-1'>remove</span>

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="price  col-span-1 text-center py-10 border-x border-gray-200 ">$ {itemData.price}</div>
                <div className="qty  col-span-1 border-r border-gray-200 flex py-10">
                  <input className=' w-1/2 mx-auto py-0 h-8'
                    min="1"
                    type="number"
                    id="qty"
                    name="qty"
                    value={input}
                    // value={itemData.qty}
                    onChange={onChangeHandler}
                    
                  />
                    {/* <span className='inline-block mx-4 text-2xl'>
                        <Icon icon="clarity:minus-circle-solid" color="#ff6e0d" inline={true} className=''/>
                    </span>  
                    <span className=''>2</span> 
                    <span className='mx-4 text-2xl'><Icon icon="bi:plus-circle-fill" color="#ff6e0d"  inline={true} />
                    </span> */}
                </div>
                <div className="subtotal  col-span-1 text-center py-10">$ {itemData.price * itemData.qty  }</div>
                


            </div>

        </div>
        

        {/* mobile */}
        <div className="mycart sm:hidden ">
            <div className="wrap">
                {/* <p className='uppercase mx-4 text-sm text-gray-00'>my cart (2 items)</p> */}
                <div className='my-2  '>

                
                    <div className="grid grid-cols-3 pl-2 ">
                        <div className="col-span-1">
                           <img src={itemData.image} alt ={itemData.title} />
                        </div>
                        <div className="col-span-2 px-1">
                            <p className='text-lg font-semibold py-1'>{itemData.title}</p>
                            <p className='text-base text-gray-600 py-1'>size: 64inches</p>
                            <p className='text-sm text-black font-semibold py-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                            <p>$ {itemData.price* itemData.qty}</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 border-t border-gray-200 my-2 px-4 py-2'>
                        <div className="wish col-span-2 flex text-olive-orange">
                            <div className='border-r border-gray-200'> 
                                <ToolTip />
                                {/* <Icon icon="icon-park-outline:like" inline={true} className='pt-2 w-7 h-7 mr-3'/> */}
                            </div>
                            
                            <div className=''>
                                <Icon icon="ic:baseline-delete" inline={true} className='pt-2 w-7 h-7 ml-2 mx-1' onClick={() => removeFromCart(itemData.id)}/>
                            </div>
                            <span className='uppercase pt-1'>remove</span>
                        </div>
                        <div className="adjust col-span-1 pt-2 flex ">
                        <input className=' w-1/2 mx-auto py-0 h-8'
                          min="1"
                          type="number"
                          id="qty"
                          name="qty"
                          value={input}
                          // value={itemData.qty}
                          onChange={onChangeHandler}
                          
                        />
                            {/* <span className='inline-block mx-4 text-2xl'>
                                <Icon icon="clarity:minus-circle-solid" color="#ff6e0d" inline={true} className=''/>
                            </span>  
                            <span className=''>2</span> 
                            <span className='mx-4 text-2xl'><Icon icon="bi:plus-circle-fill" color="#ff6e0d"  inline={true} /></span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
                  
  )
};


const mapDispatchToProps = dispatch => {
  return{
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    removeFromCart : (id) => dispatch(removeFromCart(id))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);
