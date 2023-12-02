import React from 'react';
import classes from "./Hero.module.css"
import Image from "next/image";
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/HeroList");
    if(!res.ok){
        throw new Error("HeroList Calling Fail");
    }
    return res.json();
}
const Hero = async () => {

    const data=await getData();
    return (
        <section className={classes.heroSection}>
            <div className={classes.heroLeft}>
                <div className={classes.width}>
                    <h1>
                        Build & Launch without problems<span className="color">problems</span>
                    </h1>
                    <h6>
                        {data['description']}
                    </h6>
                    <a href="#" className={classes.linkColor}>Get Started</a>
                    <a href="#" className={classes.lnkWhite}>How it works</a>
                </div>
            </div>
            <div className={classes.heroRight}>
                <div className={classes.img}><Image alt="pic" width={200} height={200} className={classes.img1} src={data['image1']} /></div>
                <div className={classes.img}>
                    <Image alt="pic" width={200} height={200} className={classes.img2} src={data['image2']} />
                </div>
                <div className={classes.img}>
                    <Image alt="pic" width={200} height={200} className={classes.img3} src={data['image3']} />
                </div>
                <div className={classes.img}><Image alt="pic" width={200} height={200} className={classes.img4} src={data['image4']} /></div>
            </div>
        </section>
    );
};

export default Hero;