import React from 'react';

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

import {Link} from 'react-router-dom'

import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

import {selectCartHidden } from '../../redux/cart/cart.selectors';
import {selectCurrenctUser } from '../../redux/user/user.selector';


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"> </Logo>
        </Link>

        <div className="options">

            <Link className="option" to="/shop"> SHOP </Link>
            <Link className="option" to="/shop"> CONTACT </Link>

            {
                currentUser ?
                    <div className='option' onClick={()=> auth.signOut()}> SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link> 
            }

            <CartIcon/>
        </div>
        {
           hidden ? null : <CartDropDown/>
        }
        
    </div>
)


const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrenctUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);