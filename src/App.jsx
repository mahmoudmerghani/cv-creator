import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalInfo from "./components/EducationalInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import CV from "./components/CV";
import initialInfo from "./initialInfo";
import Button from "./components/Button";

export default function App() {
    const [generalInfo, setGeneralInfo] = useState(initialInfo.generalInfo);
    const [educationalInfo, setEducationalInfo] = useState(
        initialInfo.educationalInfo
    );
    const [experienceInfo, setExperienceInfo] = useState(
        initialInfo.experienceInfo
    );

    function handleGeneralInfoChange(event) {
        const { name, value } = event.target;
        setGeneralInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    }

    function handleInfoChange(event, index, info) {
        const { name, value } = event.target;

        if (info === "education") {
            const newEducationInfo = educationalInfo.map((edu, i) => {
                if (index === i) {
                    return { ...edu, [name]: value };
                } else {
                    return edu;
                }
            });

            setEducationalInfo(newEducationInfo);
        } else if (info === "experience") {
            const newExperienceInfo = experienceInfo.map((exp, i) => {
                if (index === i) {
                    return { ...exp, [name]: value };
                } else {
                    return exp;
                }
            });

            setExperienceInfo(newExperienceInfo);
        }
    }

    function handleAddInfo(info) {
        if (info === "education") {
            setEducationalInfo([
                ...educationalInfo,
                {
                    institution: "",
                    school: "",
                    degree: "",
                    startDate: "",
                    endDate: "",
                    gpa: "",
                },
            ]);
        } else if (info === "experience") {
            setExperienceInfo([
                ...experienceInfo,
                {
                    jobTitle: "",
                    company: "",
                    startDate: "",
                    endDate: "",
                    responsibilities: "",
                },
            ]);
        }
    }

    return (
        <div className="app-container">
            <div className="input-container">
                <div className="input-sections">
                    <GeneralInfo
                        {...generalInfo}
                        onChange={handleGeneralInfoChange}
                    />
                    {educationalInfo.map((edu, i) => (
                        <EducationalInfo
                            {...edu}
                            index={i}
                            onChange={(event, index) =>
                                handleInfoChange(event, index, "education")
                            }
                        />
                    ))}
                    <Button onClick={() => handleAddInfo("education")}>
                        Add more Educational Info
                    </Button>
                    {experienceInfo.map((exp, i) => (
                        <ExperienceInfo
                            {...exp}
                            index={i}
                            onChange={(event, index) =>
                                handleInfoChange(event, index, "experience")
                            }
                        />
                    ))}
                    <Button onClick={() => handleAddInfo("experience")}>
                        Add more Experience Info
                    </Button>
                </div>
            </div>
            <div className="cv-preview">
                <CV
                    generalInfo={generalInfo}
                    educationalInfo={educationalInfo}
                    experienceInfo={experienceInfo}
                />
            </div>
        </div>
    );
}
