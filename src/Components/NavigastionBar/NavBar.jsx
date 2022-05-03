import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Icon, Label } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import "./NavBar.css"

export default function NavBar() {

    const wishList = useSelector(state => state.wishList.items)
    const cartList = useSelector(state => state.cartList.items)


    return (
        <Segment inverted>
            <Menu inverted pointing secondary className='navBar'>
                <div className='links'>
                    <Link to={"/"}><Menu.Item name='Home' size='large' className='home'/></Link>

                    <Link to={""}><Menu.Item name='Orders' size='large' className='orders'/></Link>

                    <Link to={"/login"}><Menu.Item name='Login' size='large' className='login'/></Link>
                </div>

                <div className='cartItems'>
                    <div id='wishList'>
                        <Link to={"/wishlist"}>
                            <Menu.Item as='a'>
                                <Icon name='heart' size='large' /> Wish  List
                                <Label color='red' floating>{wishList.length}</Label>
                            </Menu.Item>
                        </Link>
                    </div>

                    <div id='cart'>
                        <Link to={"/cart"}>
                            <Menu.Item as='a'>
                                <Icon name='cart' size='large' /> Cart
                                <Label color='green' floating>{cartList.length}</Label>
                            </Menu.Item>
                        </Link>
                    </div>
                </div>

            </Menu>
        </Segment>

    );
}