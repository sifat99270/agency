
import Common from "@/components/Common/Common";
import Testimonial from "@/components/Testimonial/Testimonial";

export async function generateMetadata(){
    const res=await fetch(process.env.BASE_URL+"api/SiteMeta/testimonials");
    const JSON=await res.json();
    return{
        title:JSON[0]['title'],
        description:JSON[0]['description'],
        keywords:JSON[0]['keywords'],
        openGraph: {
            images: JSON[0]['image'],
        },
    }
}

const Page = () => {
    return (
        <div>
            <Common title="Testimonial List" current="Testimonial List" />
            <Testimonial />
        </div>
    );
};

export default Page;