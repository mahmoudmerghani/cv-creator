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

    function handleDeleteInfo(index, info) {
        if (info === "education") {
            setEducationalInfo(educationalInfo.filter((edu, i) => index !== i));
        } else if (info === "experience") {
            setExperienceInfo(experienceInfo.filter((exp, i) => index !== i));
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
                            key={i}
                            {...edu}
                            index={i}
                            onChange={(event, index) =>
                                handleInfoChange(event, index, "education")
                            }
                            onDelete={(index) =>
                                handleDeleteInfo(index, "education")
                            }
                        />
                    ))}
                    <Button
                        className="add"
                        onClick={() => handleAddInfo("education")}
                    >
                        Add more Educational Info
                    </Button>
                    {experienceInfo.map((exp, i) => (
                        <ExperienceInfo
                            key={i}
                            {...exp}
                            index={i}
                            onChange={(event, index) =>
                                handleInfoChange(event, index, "experience")
                            }
                            onDelete={(index) =>
                                handleDeleteInfo(index, "experience")
                            }
                        />
                    ))}
                    <Button
                        className="add"
                        onClick={() => handleAddInfo("experience")}
                    >
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
