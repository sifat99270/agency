
 import classes from './WorkList.module.css';
 async function getData(){
     const res=await fetch(process.env.BASE_URL+"api/WorkList");
     if(!res.ok){
         throw new Error("WorkList List Calling Fail");
     }
     return res.json();
 }
const WorkList = async () => {
     const data=await getData();
    return (
        <section className={classes.workSection}>
            <p className={classes.green}>Work List</p>
            <p className={classes.h1}>We provide the Perfect Solution to your business growth</p>
            <div className={classes.flex}>
                <div className={classes.work}>
                    <img className={classes.svg} src="/workList/stait1.svg" />
                    <p className={classes.h1}>Grow Your Business </p>
                    <p className={classes.h6}>
                        {data[0]['title']}
                    </p>
                    <a className={classes.icon}>Learn More <img className="arrow" src="/workList/arrow.svg" /></a>
                </div>
                <div className={classes.work}>
                    <img className={classes.svg} src="/workList/stait3.svg" />
                    <p className={classes.h1}>Improve brand loyalty</p>
                    <p className={classes.h6}>
                        {data[1]['title']}
                    </p>
                    <a className={classes.icon}>Learn More <img className="arrow" src="/workList/arrow.svg" /></a>
                </div>
                <div className={classes.work}>
                    <img className={classes.svg} src="/workList/stait3.svg" />
                    <p className={classes.h1}>Improve Business Model</p>
                    <p className={classes.h6}>
                        {data[2]['title']}
                    </p>
                    <a className={classes.icon}>Learn More <img className="arrow" src="/workList/arrow.svg" /></a>
                </div>
            </div>
        </section>
    );
};

export default WorkList;