import React from 'react';
import { Segment, Image, Button, Icon } from 'semantic-ui-react';
import "./OrderItem.css"


export default class OrderItem extends React.Component {

    render() {
        return (
            <Segment className='orderItem'>
                <Image src={this.props.item.image} size='small' circular />
                <div className='orderItem_title'>
                    <h1>{this.props.item.name}</h1>
                    <div>{this.props.item.description}</div>
                </div>

                <div><b>$ {this.props.item.price}</b></div>
                <Button animated='fade'>
                    <Button.Content visible><Icon name='cart plus' />Add to cart</Button.Content>
                    <Button.Content hidden><Icon name='shop' /></Button.Content>
                </Button>
            </Segment>
        );
    }
}