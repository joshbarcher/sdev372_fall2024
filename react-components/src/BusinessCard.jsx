import ContactInfo from "./ContactInfo.jsx"

export default function BusinessCard({ name, title, email, phone, profileImage, tagLine }) {
    return (
        <div className="card-container">
            <ContactInfo 
                name={name}
                email={email}
                phone={phone}
                title={title}
            />
            <img src={profileImage} alt="Profile Image" className="profile-image" />
            <div className="tagline">&quot;{tagLine}&quot;</div>
        </div>
    )
}