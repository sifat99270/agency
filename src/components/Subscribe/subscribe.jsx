import React from 'react';
import classes from './Subscribe.module.css';
const Subscribe = () => {
    return (
        <div>
            <section className={classes.subscribeSection}>
                <p className={classes.color}>SUBSCRIBE</p>
                <p className={classes.h1}>Subscribe to get the latest news about us</p>
                <p className={classes.h6}>
                    Please drop your email below to get daily update about what we do
                </p>
                <div className={classes.form}>
                    <input required type="text" />
                    <span>Enter Your Email Adress</span>
                    <button className={classes.btn}>Subscribe</button>
                </div>
            </section>
        </div>
    );
};

export default Subscribe;