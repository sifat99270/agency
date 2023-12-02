import React from 'react';
import  classes from './Common.module.css'
import Link from "next/link";
const Common = ({title,current}) => {
    return (
            <div className={classes.main}>
                <p className={classes.name}>{title}</p>
                <p className={classes.current}><Link href="/">Home</Link>&gt; {current}</p>
            </div>
    );
};

export default Common;