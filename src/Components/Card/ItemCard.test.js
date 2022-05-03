import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import State from "../../Services/State/State";
import ItemCard from "./ItemCard";

it('item card load', () => {
    const item = {
        name: "test",
        price: "12",
        image: "image",
        description: "mfgfdg" 
    }
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={State}><ItemCard item={item}/></Provider>, div)
    ReactDOM.unmountComponentAtNode(div)
})