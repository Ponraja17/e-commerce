import React from 'react';
import { AppBar,Toolbar,IconButton,Badge,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logoEcommerce from '../../assests/logoEcommerce.jpeg';
import useStyles from '../../commponents/Navbar/styles';
import { Link , useLocation} from 'react-router-dom';

const Navbar = ({totalItems}) => {
    const classes=useStyles();
    const location=useLocation();

 
    
  return (
      <>
    <AppBar position="fixed" className={classes.appBar} color='inherit'>
        <Toolbar>
            <Typography component={Link} to="/" variant='h6' className={classes.title} color="inherit">
                <img src={logoEcommerce} alt="Commerce.js" height="55px" className={classes.image}/><Typography variant="overline">Collections!</Typography></Typography>
            <div className={classes.grow}/>
            {location.pathname==='/'&&(
            <div className={classes.button}> <Typography variant="button" color="textSecondary">Raja's Shop</Typography>
                <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                       <ShoppingCart/>
                    </Badge>
 
                </IconButton>
                

            </div>)}

        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar