export default function ExperienceInfo({
    jobTitle,
    company,
    startDate,
    endDate,
    responsibilities,
    index,
    onChange,
}) {
    return (
        <section className="form-section">
            <h2>Experience information {" " + "#" + (index + 1)}</h2>
            <label>
                Job Title
                <input
                    type="text"
                    name="jobTitle"
                    placeholder="e.g. Software Engineer"
                    value={jobTitle}
                    onChange={(e) => onChange(e, index)}
                />
            </label>
            <label>
                Company
                <input
                    type="text"
                    name="company"
                    placeholder="e.g. Google"
                    value={company}
                    onChange={(e) => onChange(e, index)}
                />
            </label>
            <label>
                Start Date
                <input
                    type="text"
                    name="startDate"
                    placeholder="e.g. 09/2020"
                    value={startDate}
                    onChange={(e) => onChange(e, index)}
                />
            </label>
            <label>
                End Date
                <input
                    type="text"
                    name="endDate"
                    placeholder="e.g. present"
                    value={endDate}
                    onChange={(e) => onChange(e, index)}
                />
            </label>
            <label>
                Responsibilities
                <textarea
                    name="responsibilities"
                    placeholder="e.g. Developed applications..."
                    value={responsibilities}
                    onChange={(e) => onChange(e, index)}
                />
            </label>
        </section>
    );
}
