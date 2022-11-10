import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { toggleCart, removeItem, incrementItem, decrementItem } from '../app/slices/cartSlice';
import PrintReciept from '../components/PrintReciept'





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const { isCartOpen, cartItems } = useSelector((state) => state.cart);
  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
};


const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
};

const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
};

const cartQuantity = cartItems.length;

const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);








  return (
    <>
    <div className='cartbutton'>
       
       <Button onClick={handleOpen}><ShoppingCart/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

       <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
          
                         
                                   
                                        <h5><PrintReciept/></h5>
                                  
                              <div className="cart_foot">
                                <h5>
                                    <small>Total:</small>
                                    <b>₱ {cartTotal.toLocaleString()}</b>
                                </h5>

                                <button
                                    type="button"
                                    className="checkout_btn"
                                    disabled={cartQuantity === 0}
                                >
                                    Checkout
                                </button>
                            </div>
                            
                                 
          </Typography>
        </Box>
      </Modal>
      <span className="Quantity">Charges:₱{cartTotal.toLocaleString()}</span>
     
    </div>
    

    </>
   
  );
}
