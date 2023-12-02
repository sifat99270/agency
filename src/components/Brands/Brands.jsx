import React from 'react';
import classes from "./Brands.module.css"
import Image from "next/image";
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/BrandList");
    if(!res.ok){
        throw new Error("BrandList Calling Fail");
    }
    return res.json();
}
const Brands = async () => {
    const data=await getData()
    return (
            <section className={classes.brandSection}>
                <div className={classes.brandSvg}>
                    {data.map((item)=>{
                        return(
                            <div  key={item['id']} className={classes.img}><Image alt='pic' width={100} height={40} src={item['image']}/></div>
                        )
                    })}
                </div>
            </section>
    );
};

export default Brands;