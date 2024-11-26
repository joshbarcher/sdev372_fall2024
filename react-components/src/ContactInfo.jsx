
export default function ContactInfo({ name, title, email, phone }) {
    return (
        <div className="contact-info">
            <div className="name">{name}</div>
            <div className="title">{title}</div>
            <div className="email">Email: {email}</div>
            <div className="phone">Phone: {phone}</div>
        </div>
    )
}