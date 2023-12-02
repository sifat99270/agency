
import classes from "./Projects.module.css"
import Image from "next/image";

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/AllProject");
    if(!res.ok){
        throw new Error("AllProject Calling Fail");
    }
    return res.json();
}
const Projects = async () => {
    const data=await getData()
    return (
        <section className={classes.projectSection}>
            <p className={classes.green}>All Project</p>
            <p className={classes.h1}>Better Agency/SEO Solution At Your Fingertips</p>
            <div className={classes.flex}>
                {data.map((item)=>{
                    return(
                        <div  key={item['id']} className={classes.project}>
                            <Image alt="pic" width={300} height={300} src={item['image']} />
                            <p className={classes.text}>Lorem ipsum dolor sit consectutar</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Projects;