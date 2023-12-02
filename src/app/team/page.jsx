import React from 'react';
import Team from "@/components/Team/Team";
import Contacts from "@/components/Contacts/Contacts";
import Brands from "@/components/Brands/Brands";

const Page = () => {
    return (
        <div>
            <Team />
            <Contacts />
            <Brands />
        </div>
    );
};

export default Page;