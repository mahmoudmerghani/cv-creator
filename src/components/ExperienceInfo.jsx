export default function ExperienceInfo({
    jobTitle,
    company,
    startDate,
    endDate,
    responsibilities,
    onChange,
}) {
    return (
        <section>
            <h2>Experience information</h2>
            <label>
                Job Title
                <input
                    type="text"
                    name="jobTitle"
                    placeholder="e.g. Software Engineer"
                    value={jobTitle}
                    onChange={onChange}
                />
            </label>
            <label>
                Company
                <input
                    type="text"
                    name="company"
                    placeholder="e.g. Google"
                    value={company}
                    onChange={onChange}
                />
            </label>
            <label>
                Start Date
                <input
                    type="text"
                    name="startDate"
                    placeholder="e.g. 09/2020"
                    value={startDate}
                    onChange={onChange}
                />
            </label>
            <label>
                End Date
                <input
                    type="text"
                    name="endDate"
                    placeholder="e.g. present"
                    value={endDate}
                    onChange={onChange}
                />
            </label>
            <label>
                Responsibilities
                <textarea
                    name="responsibilities"
                    placeholder="e.g. Developed applications..."
                    value={responsibilities}
                    onChange={onChange}
                />
            </label>
        </section>
    );
}
