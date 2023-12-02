import classes from './Feature.module.css'
import Image from "next/image";
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/FeaturedProject");
    if(!res.ok){
        throw new Error("AllProject Calling Fail");
    }
    return res.json();
}
const Feature = async () => {
    const data= await getData();
    const mapData=data.slice(2);
    return (
        <section className={classes.featureSection}>
            <p className={classes.green}>Featured Project</p>
            <p className={classes.h1}>We provide the Perfect Solution to your business growth</p>
            <div className={classes.flex}>
                <div className={classes.big}>
                    <div className={classes.imgSection}>
                        <Image alt="pic" width={200} height={200} className={classes.img} src={data[0]['image']} />
                        <p className={classes.date}>App Design - June 20, 2022</p>
                        <p className={classes.title}>{data[0]['title']}</p>
                    </div>
                </div>
                <div className={classes.all}>
                    {mapData.map((item)=>{
                        return(
                            <div key={item['id']} className={classes.imgSection}>
                                <Image alt="pic" width={200} height={200} className={classes.img} src={item['image']} />
                                <p className={classes.date}>App Design - June 20, 2022</p>
                                <p className={classes.title}>{item['title']}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Feature;