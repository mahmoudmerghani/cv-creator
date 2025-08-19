export default function GeneralInfo({
    fullName,
    email,
    phone,
    address,
    linkedinLink,
    githubLink,
    onChange,
}) {
    return (
        <section className="form-section">
            <h2>Personal information</h2>
            <label>
                Full name
                <input
                    type="text"
                    name="fullName"
                    placeholder="e.g. John Doe"
                    value={fullName}
                    onChange={onChange}
                />
            </label>
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    placeholder="e.g. johndoe@example.com"
                    value={email}
                    onChange={onChange}
                />
            </label>
            <label>
                Phone number
                <input
                    type="tel"
                    name="phone"
                    placeholder="e.g. +1234567890"
                    value={phone}
                    onChange={onChange}
                />
            </label>
            <label>
                Address
                <input
                    type="text"
                    name="address"
                    placeholder="e.g. London, UK"
                    value={address}
                    onChange={onChange}
                />
            </label>
            <label>
                Linkedin
                <input
                    type="text"
                    name="linkedinLink"
                    placeholder="Linkedin link"
                    value={linkedinLink}
                    onChange={onChange}
                />
            </label>
            <label>
                Github
                <input
                    type="text"
                    name="githubLink"
                    placeholder="Github link"
                    value={githubLink}
                    onChange={onChange}
                />
            </label>
        </section>
    );
}
