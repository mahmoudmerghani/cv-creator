export default function CV({ generalInfo, educationalInfo, experienceInfo }) {
    return (
        <div className="cv">
            <section className="">
                <h1>{generalInfo.fullName}</h1>
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
                <p>{educationalInfo.institute}</p>
                <p>{educationalInfo.school}</p>
                <p>
                    {educationalInfo.degree +
                        ", " +
                        educationalInfo.startDate +
                        " - " +
                        educationalInfo.endDate}
                </p>
                {educationalInfo.gpa && <p>{"GPA - " + educationalInfo.gpa}</p>}
            </section>
            <section>
                <h2>PROFESSIONAL EXPERIENCE</h2>
                <p>
                    {experienceInfo.company +
                        ", " +
                        experienceInfo.startDate +
                        " - " +
                        experienceInfo.endDate}
                </p>
                <p>{experienceInfo.jobTitle}</p>
                <p>{experienceInfo.responsibilities}</p>
            </section>
        </div>
    );
}
