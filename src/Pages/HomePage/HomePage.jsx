import React from 'react';
import ItemCard from '../../Components/Card/ItemCard';
import NavigastionBar from '../../Components/NavigastionBar/NavBar'
import "./HomePage.css"
import data from "./../../storeData.json"
import {Message} from "semantic-ui-react"

export default class HomePage extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            notificationMessage: "",
            notificationColor: "green"
        }
    }

    hideNotification(){
        this.setState({
            notificationMessage: ""
        })
    }

     onAddToCartHandler(item) {
        this.setState({
            notificationMessage: item.name + " added to cart",
            notificationColor: "green"
        })

        setTimeout(()=>this.hideNotification(), 3000)
    }
    onAddToWishListHandler(item) {
        this.setState({
            notificationMessage: item.name + " added to Wishlist",
            notificationColor: "orange"
        })

        setTimeout(()=>this.hideNotification(), 3000)
    }

    render() {
        return (
            <div >
                
                <NavigastionBar />  

                <Message className={this.state.notificationMessage? "showMessage": null}
                    color={this.state.notificationColor}
                    header={this.state.notificationMessage}
                />

                

                <div className='container'>
                    {data.map(item => <ItemCard onAddToCart={this.onAddToCartHandler.bind(this)} onAddToWishList={this.onAddToWishListHandler.bind(this)} item={item} />)}

                </div>
                

            </div>

        );
    }
}