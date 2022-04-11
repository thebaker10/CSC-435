import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from '../../Components/Card/OrderItem';
import NavBar from '../../Components/NavigastionBar/NavBar';

export default function CartPage() {

    const items = useSelector(state=>state.cartList.items)

    return (
        <div>
            <NavBar></NavBar>
            <div>
                {items.map(item=><OrderItem item={item} />)}
            </div>
        </div>

    );

}