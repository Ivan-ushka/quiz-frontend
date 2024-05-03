import React from 'react';
import BasicQuizSettings from "./BasicQuizSettings";
import AdditionalQuizSetting from "./AdditionalQuizSetting";

interface  RightSideSettings{
    currentPage: string,
}
const RightSideSettings: React.FC<RightSideSettings> = ({currentPage}) => {
    return (
        <>
            {
                currentPage === 'BasicSettings' ? <BasicQuizSettings /> : <AdditionalQuizSetting />
            }
        </>
    );
};

export default RightSideSettings;