import "../styles/CV.css";

export default function CV({ generalInfo, educationalInfo, experienceInfo }) {
    return (
        <div className="cv">
            <section className="">
                <h1 className="name">{generalInfo.fullName}</h1>
                <div className="contact">
                    <p>{generalInfo.address}</p>
                    <p> | </p>
                    <p>{generalInfo.email}</p>
                    <p> | </p>
                    <p>{generalInfo.phone}</p>
                    <p> | </p>
                    <p>
                        {"Linkedin : "}
                        <a href={generalInfo.linkedinLink}>
                            {generalInfo.linkedinLink}
                        </a>
                    </p>
                    <p> | </p>
                    <p>
                        {"Github : "}
                        <a href={generalInfo.githubLink}>
                            {generalInfo.githubLink}
                        </a>
                    </p>
                </div>
            </section>
            <section>
                <h2>EDUCATION</h2>
                <ul>
                    {educationalInfo.map((edu) => (
                        <li>
                            <h3>{edu.institution}</h3>
                            <p>{edu.school}</p>
                            <p>
                                {edu.degree +
                                    ", " +
                                    edu.startDate +
                                    " - " +
                                    edu.endDate}
                            </p>
                            {edu.gpa && <p>{"GPA: " + edu.gpa}</p>}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>PROFESSIONAL EXPERIENCE</h2>
                <ul>
                    {experienceInfo.map((exp) => (
                        <li>
                            <h3>{exp.jobTitle}</h3>
                            <p>
                                {exp.company +
                                    ", " +
                                    exp.startDate +
                                    " - " +
                                    exp.endDate}
                            </p>
                            <p>{exp.responsibilities}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
