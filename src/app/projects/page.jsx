
import Projects from "@/components/Projects/Projects";
import Common from "@/components/Common/Common";

const Page = () => {
    return (
        <div>
            <Common title="All Project" current="All Project" />
          <Projects />
        </div>
    );
};

export default Page;