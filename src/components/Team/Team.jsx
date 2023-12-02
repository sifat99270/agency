
import classes from './Team.module.css';

async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/TeamList");
    if(!res.ok){
        throw new Error("TeamList Calling Fail");
    }
    return res.json();
}
const Team = async () => {
    const data=await getData();
    return (
            <section className={classes.teamSection}>
                <p className={classes.green}>OUR TEAM MEMBER</p>
                <p className={classes.h1}>Check our awesome team members</p>
                <div className={classes.flex}>
                    {data.map((item)=>{
                        return(
                            <div key={item['id']} className={classes.imgBox}>
                                <img className={classes.img} src={item['image']} />
                                <div className={classes.icon}>
                                    <img src="/Team/facebook.svg" />
                                    <img src="/Team/twitter.svg" />
                                    <img src="/Team/instagram.svg" />
                                </div>
                                <p className={classes.name}>{item['name']}</p>
                            </div>
                        )
                    })}

                </div>
            </section>
    );
};

export default Team;
