import React from 'react'

export const isInCart = (product, cartItems) => {
    return cartItems.find(item => item.id === product.id);
  }