import React from 'react'
import { Icon } from '@iconify/react';


const ToolTip = () => {
    return (
        <div className='tooltip'>
            <Icon icon="icon-park-outline:like" inline={true}  className=' w-9 h-9 bg-white p-2 rounded-full hover:bg-olive-orange text-olive-orange hover:text-white'/>
            <span className='tooltiptext text-sm'>Add to wishlist</span>
        </div> 
    )
}

export default ToolTip
