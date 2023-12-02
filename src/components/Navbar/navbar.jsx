'use client'

import React, {useRef} from 'react';
import classes from "./navbar.module.css"
import Link from "next/link";
import {usePathname} from "next/navigation";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
const Navbar = () => {
    const path=usePathname();
    const toggleRef=useRef();
 const imgRef=useRef();
    function navOpenClose(){
        toggleRef.current.classList.toggle(`${classes.toggle}`)
        if(toggleRef.current.classList.contains(`${classes.toggle}`)){
            imgRef.current.src="/xmark.svg"
        }else {
            imgRef.current.src="/bars.svg"
        }
    }
    function navClose(e){
        if(e.target.matches("a") && toggleRef.current.classList.contains(`${classes.toggle}`)){
            toggleRef.current.classList.remove(`${classes.toggle}`);
            imgRef.current.src="/bars.svg"
        }
    }
    return (
        <div>
            <ProgressBar height="2px"
                            color="#269669"
                            options={{ showSpinner: false }}
                            shallowRouting />
            <header className={classes.nav}>
                <div className={classes.navLeft}>
                    <span className={classes.left}>Design</span><span className={classes.right}>Agency</span>
                </div>
                <div className={classes.navRight}>
                    <div onClick={navOpenClose} className={classes.bar} >
                        <img className={classes.img} src="/bars.svg" ref={imgRef} />
                    </div>
                    <ul ref={toggleRef} onClick={navClose}>
                        <div className={classes.leftRight}></div>
                        <li className={path==="/"?classes.active:""}><Link href="/">Home</Link></li>
                        <li className={path==="/team"?classes.active:""}><Link  href="/team">Team</Link></li>
                        <li className={path==="/services"?classes.active:""} ><Link   href="/services">Services</Link></li>
                        <li className={path==="/projects"?classes.active:""} ><Link  href="/projects">Projects</Link></li>
                        <li className={path==="/testimonials"?classes.active:""} ><Link  href="/testimonials">Testimonials</Link></li>
                        <li className={path==="/login"?classes.active:""} ><Link  href="/login">Login</Link></li>
                        <li className={path==="/register"?classes.active:""} ><Link  href="/register">Register</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Navbar;