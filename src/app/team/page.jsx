import React from 'react';
import Common from "@/components/Common/Common";
import Team from "@/components/Team/Team";


const Page = () => {
    return (
        <div>
          <Common title="Team" current="Team" />
            <Team />
        </div>
    );
};

export default Page;