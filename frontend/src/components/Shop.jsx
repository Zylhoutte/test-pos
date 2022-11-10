import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../app/slices/cartSlice';


const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();


    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };


    const cartQuantity = cartItems.length;


    return (
        <>
            
                            <div
                                onClick={() => handleOpenCart(true)}
                            >
                                
                                <span className="badge">{cartQuantity}</span>
                            </div>
                       
                    
        </>
    );
};

export default Header;