import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo"
import EducationalInfo from "./components/EducationalInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import CV from "./components/CV";
import initialInfo from "./initialInfo";
import Button from "./components/Button";

export default function App() {
    const [generalInfo, setGeneralInfo] = useState(initialInfo.generalInfo);
    const [educationalInfo, setEducationalInfo] = useState(initialInfo.educationalInfo);
    const [experienceInfo, setExperienceInfo] = useState(initialInfo.experienceInfo);

    function handleGeneralInfoChange(event) {
        const { name, value } = event.target;
        setGeneralInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    }

    function handleEducationalInfoChange(event) {
        const { name, value } = event.target;
        setEducationalInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    }

    function handleExperienceInfoChange(event) {
        const { name, value } = event.target;
        setExperienceInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    }

    return (
        <div className="app-container">
            <div className="input-container">
                <div className="input-sections">
                    <GeneralInfo
                        {...generalInfo}
                        onChange={handleGeneralInfoChange}
                    />
                    {educationalInfo.map((edu) => (
                        <EducationalInfo
                            {...edu}
                            onChange={handleEducationalInfoChange}
                        />
                    ))}
                    <Button>Add more Educational Info</Button>
                    {experienceInfo.map((exp) => (
                        <ExperienceInfo
                            {...exp}
                            onChange={handleEducationalInfoChange}
                        />
                    ))}
                    <Button>Add more Experience Info</Button>
                </div>
            </div>
            <div className="cv-preview">
                <CV generalInfo={generalInfo} educationalInfo={educationalInfo} experienceInfo={experienceInfo} />
            </div>
        </div>
    );
}