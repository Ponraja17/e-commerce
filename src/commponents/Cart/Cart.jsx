import { Button, Grid, Typography, Container } from '@material-ui/core';

import React from 'react';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import EmptyCartImage from '../../assests/EmptyCartImage.jpg';


const Cart = ({ cart ,handleUpdateCartQty,handleRemoveFromCart,handleEmptyCart }) => {
    
    const classes=useStyles();

    const EmptyCart = ()=>(
        
<div><Typography variant="subtitle1">You have no items in the cart
<Link to="/" className={classes.link}> let's add some</Link>!
</Typography><Typography component={Link} to="/" ><img src={EmptyCartImage} alt="Sorry!"/></Typography></div>
    );
        
    const FilledCart = ()=>(
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) =>(
                <Grid item xs={12} sm={4} key={item.id}>
                <CartItem item={item} onUpdateCartQty={ handleUpdateCartQty } onRemoveFromCart={ handleRemoveFromCart }/>
                </Grid>
            ))}

        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>
                    Empty cart
                    </Button>
                <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                    Checkout
                    </Button>
            </div>

        </div>
        </>
    );
    if(!cart.line_items) return 'Loading...';
  return (
      <Container>
          <div className={classes.toolbar}/>
          <Typography className={classes.title} variant="h3" gutterBottom>
              Your Shopping Cart
          </Typography>
          {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>} 
          </Container>
    
  )
}

export default Cart