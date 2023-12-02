import React from 'react';
import classes from "./Stats.module.css"
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/StatList");
    if(!res.ok){
        throw new Error("StatList Calling Fail");
    }
    return res.json();
}
const Stats = async () => {
    const data=await getData()
    return (
        <section  className={classes.workSection}>
            <div className={classes.work}>
                <img src="/stait1.svg"></img>
                <p className={classes.number}>6,510</p>
                <p className={classes.text}>Solved Problem</p>
            </div>
            <div className={classes.work}>
                <img src="/stait2.svg"></img>
                <p className={classes.number}>240,324</p>
                <p className={classes.text}>Followers</p>
            </div>
            <div className={classes.work}>
                <img src="/stait3.svg"></img>
                <p className={classes.number}>14,350</p>
                <p className={classes.text}>Happy Customers</p>
            </div>
            <div className={classes.work}>
                <img src="/stait4.svg"></img>
                <p className={classes.number}>149,324</p>
                <p className={classes.text}>Projects</p>
            </div>
        </section>
    );
};

export default Stats;