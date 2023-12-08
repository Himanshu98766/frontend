import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();

  //  handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://mern6-q9gx.onrender.com/contact`, {
          method:"POST",
          headers:{
              "Content-Type":"application/json",
          },
          body:JSON.stringify(contact),
      });
      // console.log("contact",response);
      if(response.ok){
          alert("contact Successful");
          setContact({username: "",
          password: "",})
          navigate('/');
      }
  } catch (error) {
      console.log(error);
  }
}

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54988.39237185104!2d75.84240777029062!3d30.52741425441557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391067c99601339d%3A0xb329f3e545585a33!2sMalerkotla%2C%20Punjab%20148023!5e0!3m2!1sen!2sin!4v1701753333165!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;