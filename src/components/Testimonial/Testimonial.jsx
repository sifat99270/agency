import classes from "./Testimonial.module.css"
import Image from "next/image";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/TestimonialList");
    if(!res.ok){
        throw new Error("Testimonial List Calling Fail");
    }
    return res.json();
}
const Testimonial = async () => {
    const data=await getData();
    return (
        <section className={classes.testimonialSection}>
            <p className={classes.green}>Testimonial List</p>
            <p className={classes.h1}>Better Agency/SEO Solution At Your Fingertips</p>
            <div className={classes.testimonial}>
                {data.map((item)=>{
                    return(
                        <div key={item['id']} className={classes.imgBox}>
                            <Image alt="pic" width={200} height={200} className={classes.img} src={item['image']} />
                            <p className={classes.h6}>
                                {item['msg']}
                            </p>
                            <p className={classes.name}>{item['name']}</p>
                            <p className={classes.work}>{item['designation']}</p>
                        </div>
                    )
                })}

            </div>
        </section>
    );
};

export default Testimonial;