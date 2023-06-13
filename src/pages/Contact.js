// import React, { useState } from "react";
// import "../Styles/Contact.css";
// const Contact = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     // You can store the form data in local storage or send it to a server
//     console.log("Form submitted");
//     console.log("First Name:", firstName);
//     console.log("Last Name:", lastName);
//     console.log("Email:", email);
//     console.log("Subject:", subject);
//     console.log("Message:", message);
//     // Reset form fields
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setSubject("");
//     setMessage("");
//   };

//   return (
//     <div className="form-container">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="subject">Subject</label>
//           <input
//             type="text"
//             id="subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import Typical from "react-typical";
import { toast } from "react-toastify";
import imgBack from "../images/mailz.png";
import "../Styles/Contact.css";

export default function Contactme(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setBanner("res.data.msg");
      toast.error("res.data.msg");
      setBool(false);
    } else {
      setBanner("Message Sent successfully");
      toast.success("Success");
      setBool(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <div>
        <h2 className="text-center text-4xl font-bold py-10">
          Let's Keep in Touch
        </h2>
      </div>
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={[
                "Have a discussion..",
                1000,
                "Share experience",
                1000,
                "Share knowledge..",
                1000,
              ]}
            />
          </h2>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>
              Please, Send Your Message Here!
              <p></p>
              <img src={imgBack} alt="image is missing" />
            </h4>
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />
            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />
            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />
            <div className="send-btn">
              <button type="submit" onchange={submitForm}>
                send
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
