import React from 'react';
import BasicQuizSettings from "./BasicQuizSettings";
import AdditionalQuizSetting from "./AdditionalQuizSetting";

interface  RightSideSettings{
    basicOrAdditionalSettings: number,
}
const RightSideSettings: React.FC<RightSideSettings> = ({basicOrAdditionalSettings}) => {
    return (
        <>
            {
                !basicOrAdditionalSettings ? <BasicQuizSettings /> : <AdditionalQuizSetting />
            }
        </>
    );
};

export default RightSideSettings;