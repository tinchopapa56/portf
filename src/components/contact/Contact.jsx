import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('gonziCuts', 'template_wkf56ak', formRef.current, 'SRYVwURp9r5Xj74AI')
          .then((result) => { console.log(result.text); }, 
                (error) => { console.log(error.text); }
          );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>

      <div className="c-wrapper">

        <section className="c-left">
          <h1 className="c-title">Let's get in touch!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              {/* https://www.instagram.com/martin_labastie/ */}
              IG
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              mail@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              Linkedin 
            </div>
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              Github 
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Argentina, Buenos Aires (Italian Passport/Nationality)
            </div>
          </div>
        </section>

        <section className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Send me a DM, use my working form, make me a job offer!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button className="contact-button">Submit</button>
            {done && "Thank you..."}
          </form>
        </section>

      </div>
    </div>
  );
};

export default Contact;
