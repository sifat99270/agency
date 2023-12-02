
import Service from "@/components/Service/Service";
import Common from "@/components/Common/Common";

const Page = () => {
    return (
        <div>
            <Common current="Service" title="Service" />
          <Service />
        </div>
    );
};

export default Page;