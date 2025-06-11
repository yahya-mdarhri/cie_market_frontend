import './DepartmentHeadSection.css'

interface DepartmentHeadSectionProps {
    name?: string;
    role?: string;
    department?: string;
    message?: string;
    imageUrl?: string;
}

function DepartmentHeadSection({name, role, department, message, imageUrl}: DepartmentHeadSectionProps) {
    // Default values if props are not provided
    name = name || "John Smith";
    role = role || "Department Head";
    department = department || "Engineering";
    message = message || "Our commitment to excellence and innovation drives everything we do. We believe in creating meaningful solutions that make a real difference in people's lives. Together, we're building a future where technology serves humanity in the most impactful ways.";
    imageUrl = imageUrl || "https://i.pravatar.cc/?u=12345"; // Placeholder image URL
    return (
        <section className="department-head-section">
            <div className="head-container">
                <div className="head-image-container">
                    <img 
                        src={imageUrl}
                        alt="head" 
                        className="head-image"
                    />
                </div>
                <div className="head-content">
                    <div className="head-role-container">
                        <span className="head-role">{role}</span>
                    </div>
                    <h2 className="head-name">{name}</h2>
                    <p className="head-message">
                        <span className="quote-line"></span>
                        {message}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default DepartmentHeadSection;