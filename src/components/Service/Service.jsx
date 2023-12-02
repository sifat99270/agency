

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllService");
    if(!res.ok) {
        throw new Error("AllService List Calling Fail");
    }
    return res.json();
}
import classes from './Service.module.css'
const Service = async () => {
    const data=await getData()
    return (
        <section className={classes.serviceSection}>
            <p className={classes.green}>Our All Services</p>
            <p className={classes.h1}>We Provide BestWeb design services</p>
            <div className={classes.flex}>
                {data.map((item)=>{
                    return(
                        <div key={item['id']} className={classes.service}>
                            <p className={classes.h1}>Build & Launch without problems</p>
                            <p className={classes.h6}>
                                Increase your team’s productivity and save time with a bot that
                                answers and fields customer inquiries
                            </p>
                            <div className={classes.imgBox}>
                                <img className={classes.img} src={item['image1']} />
                                <img className={classes.img} src={item['image2']} />
                                <img className={classes.img} src={item['image3']} />
                                <img className={classes.img} src={item['image4']} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Service;