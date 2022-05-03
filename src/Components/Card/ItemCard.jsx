import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Image, Button, Icon, Message } from "semantic-ui-react"
import { addCartItem } from '../../Services/State/CartSlice';
import { addWishItem } from '../../Services/State/WishSlice';

export default function ItemCard(props) {

    const [showWarning, setShowWarning] = useState(false)

    const audioRef = useRef(null)

    // const items = useSelector(state => state.items.items)

    const dispatch = useDispatch()
    const addToCartHandler = ()=>{
        dispatch(addCartItem(props.item))
        props.onAddToCart(props.item)
        audioRef.current.play()
    }
    const addWishHandler = ()=>{
        dispatch(addWishItem(props.item))
        props.onAddToWishList(props.item)
        
    }


    return (

        <Card>
            <Image src={props.item.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.item.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>$ {props.item.price}</span>
                </Card.Meta>
                <Card.Description>{props.item.description.substring(0,200)}...</Card.Description>
            </Card.Content>
            <Card.Content extra>

                <Button color='green' onClick={addToCartHandler}>
                    <Icon name='add to cart'></Icon>
                    <span>Add to cart</span>
                </Button>

                <Button color='orange' onClick={addWishHandler}>
                    <Icon name='heart'></Icon>
                    <span>Wish list</span>
                </Button>



            </Card.Content>

            {showWarning ?
                <Message warning>
                    <Message.Header>You must login before you can do that!</Message.Header>
                    <p>Visit our registration page, then try again.</p>
                </Message>
                : null}

            <audio src="./tin.mp3" ref={audioRef}></audio>
        </Card>

    );
}