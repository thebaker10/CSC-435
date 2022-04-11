import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Icon } from 'semantic-ui-react'
import { useSelector } from 'react-redux';

export default function NavBar(){

    const wishList = useSelector(state=>state.wishList.items)
    const cartList = useSelector(state=>state.cartList.items)


        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Link to={"/"}><Menu.Item name='Home'size='large' /></Link>

                    <Link to={""}><Menu.Item name='Orders'size='large' /></Link>

                    <Link to={"/login"}><Menu.Item name='Login'size='large' /></Link>

                    <Link to={"/wishlist"}><Menu.Item name='Whish List'>{wishList.length}<Icon name='heart' size='large' /></Menu.Item></Link>

                    <Link to={"/cart"}><Menu.Item name='cart'>{cartList.length}<Icon name='shopping cart' size='large' /></Menu.Item></Link>
                    
                    
                </Menu>
            </Segment>

        );
}