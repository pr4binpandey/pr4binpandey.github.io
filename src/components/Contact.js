import ContactForm from './ContactForm';
import Maps from './maps';

function Contact() {
    return (
        <section className="contact-page">
            <div className="contact-header">
                <h1>Get In Touch</h1>
                <p>Feel free to reach out for collaborations, opportunities, or just to say hi!</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Info</h2>

                    <div className="contact-links">
                        <a href="mailto:pr4binpandey@gmail.com" className="contact-link-item">
                            <i className="fa-solid fa-envelope"></i>
                            <span>pr4binpandey@gmail.com</span>
                        </a>
                        <a href="https://github.com/pr4binpandey" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                            <i className="fa-brands fa-github"></i>
                            <span>pr4binpandey</span>
                        </a>
                        <a href="https://linkedin.com/in/pr4binpandey" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                            <i className="fa-brands fa-linkedin"></i>
                            <span>pr4binpandey</span>
                        </a>
                    </div>

                    <Maps />
                </div>

                <div className="contact-form-wrapper">
                    <h2>Send a Message</h2>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

export default Contact;
