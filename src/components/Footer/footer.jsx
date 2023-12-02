
import classes from "./footer.module.css";
async function getData(){
    const res=await fetch(process.env.BASE_URL+"api/SocialLink");
    if(!res.ok){
        throw new Error("SocialLink List Calling Fail");
    }
    return res.json();
}
const Footer = async () => {
    const data=await getData();
    return (
        <div>
            <section className={classes.footerSection}>
                <div className={classes.logo}>
                    <i className={classes.logoI}></i>
                    <p className={classes.h1}>WEB LOGO</p>
                    <p className={classes.h6}>
                        Some footer text about the Agency. Just a little description to help
                        people understand you better
                    </p>
                    <div className={classes.social}>
                        <a href={data[0]['link']} ><img src="/Footer/facebook.svg" /></a>
                        <a href={data[1]['link']}><img src="/Footer/twitter.svg" /></a>
                        <a href={data[2]['link']}><img src="/Footer/instagram.svg" /></a>
                        <a href="#"><img src="logo1.svg" /></a>
                    </div>
                </div>
                <div className={classes.link}>
                    <i className={classes.linkI}></i>
                    <p className={classes.h1}>Quick Links</p>
                    <div className={classes.links}>
                        <a href="#">Services</a>
                        <a href="#">Portfolio</a>
                        <a href="#">About <span>Us</span> </a>
                        <a href="#">Contact <span>Us</span></a>
                    </div>
                </div>
                <div className={classes.address}>
                    <i className={classes.addressI}></i>
                    <p className={classes.h1}>Address</p>
                    <p className={classes.h6}>
                        Design Agency Head Office. Airport Road United Arab Emirate
                    </p>
                </div>
                <p className={classes.copy}>Copyright Design Agency 2022</p>
            </section>
        </div>
    );
};

export default Footer;