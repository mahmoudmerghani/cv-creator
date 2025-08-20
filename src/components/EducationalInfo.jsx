import Button from "./Button";

export default function EducationalInfo({
    institution,
    school,
    degree,
    startDate,
    endDate,
    gpa,
    index,
    onChange,
    onDelete,
}) {
    return (
        <section className="form-section">
            <h2>Educational information {" " + "#" + (index + 1)}</h2>
            <label>
                Institution
                <input
                    type="text"
                    name="institution"
                    placeholder="e.g. Harvard University"
                    value={institution}
                    onChange={(e) => onChange(e, index)}
                />
            </label>
            <label>
                School / College / Faculty
                <input
                    type="text"
                    name="school"
                    placeholder="e.g. School of Engineering"
                    value={school}
                    onChange={(e) => onChange(e, index)}
                />
            </label>
            <label>
                Degree
                <input
                    type="text"
                    name="degree"
                    placeholder="e.g. Bachelor of Science"
                    value={degree}
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
                GPA
                <input
                    type="number"
                    name="gpa"
                    placeholder="e.g. 3.20"
                    min={0}
                    max={4}
                    step={0.01}
                    value={gpa}
                    onChange={(e) => onChange(e, index)}
                />
            </label>
            <Button className="delete" onClick={() => onDelete(index)}>
                Delete
            </Button>
        </section>
    );
}
