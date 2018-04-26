import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';
import React from 'react';

const pizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImage} className={classes.PizzaImg} />
    </div>
)

export default pizzaImage;