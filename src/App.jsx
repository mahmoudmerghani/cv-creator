import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalInfo from "./components/EducationalInfo";
import ExperienceInfo from "./components/ExperienceInfo";
import CV from "./components/CV";
import initialInfo from "./initialInfo";
import Button from "./components/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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

    // for education and experience info
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

    function handleDownload() {
        const cvElement = document.querySelector(".cv-preview");

        if (!cvElement) {
            alert("CV not found for download");
            return;
        }

        html2canvas(cvElement, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
        })
            .then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF("p", "mm", "a4");

                const imgWidth = 210;
                const pageHeight = 295;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                let heightLeft = imgHeight;

                let position = 0;

                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(
                        imgData,
                        "PNG",
                        0,
                        position,
                        imgWidth,
                        imgHeight
                    );
                    heightLeft -= pageHeight;
                }

                pdf.save(`${generalInfo.fullName || "CV"}.pdf`);
            })
            .catch((error) => {
                console.error("Error generating PDF:", error);
                alert("Error generating PDF. Please try again.");
            });
    }

    return (
        <div className="app-container">
            <div className="input-container">
                <div className="input-sections">
                    <Button className="download" onClick={handleDownload}>
                        Download as PDF
                    </Button>
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
