import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((oldForm) => {
      return {
        ...oldForm,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    const { name, email, subject, message } = form;
    if (name && email && subject && message) {
      navigate("/cards");
    } else {
      alert("Ba'zi maydonlar bo'sh");
    }
  };

  const listener = (event) => {
    console.log(event.offsetX, event.offsetY);
  }

  // ComponentDidMount
  useEffect(() => {
    document.addEventListener("mousemove", listener);
  }, []);

  // componentWillUnMount
  useEffect(() => {
    return () => {
      console.log("Destroying....");
      document.removeEventListener("mousemove", listener);
    };
  },[])

  const { name, email, subject, message } = form;
  return (
    <div className="p-8">
      <div className="mb-4">
        <div className="mb-4">
          <label htmlFor="">Your name</label>
        </div>
        <div>
          <input
            value={name}
            onChange={handleChange}
            name="name"
            type="text"
            className="border-2 w-3/4 p-4 rounded-xl"
            placeholder="ABC"
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-4">
          <label htmlFor="">Email Address</label>
        </div>
        <div>
          <input
            value={email}
            onChange={handleChange}
            name="email"
            type="text"
            className="border-2 w-3/4 p-4 rounded-xl"
            placeholder="ABC@def.com"
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-4">
          <label htmlFor="">Subject</label>
        </div>
        <div>
          <input
            value={subject}
            onChange={handleChange}
            name="subject"
            type="text"
            className="border-2 w-3/4 p-4 rounded-xl"
            placeholder="This is an optional"
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-4">
          <label htmlFor="">Message</label>
        </div>
        <div>
          <textarea
            rows={5}
            value={message}
            onChange={handleChange}
            name="message"
            type="text"
            className="border-2 w-3/4 p-4 rounded-xl"
            placeholder="Hi I'd like to ask about"
          />
        </div>
      </div>
      <div className="mb-4">
        <button
          onClick={handleSubmit}
          className="w-[200px] px-8 py-4 bg-amber-500 rounded-md text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ContactForm;

// export default class ContactForm extends Component {
//   constructor() {
//     super();
//     this.state = { name: "", email: "", subject: "", message: "" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     const { name, value } = e.target;
//             subject - 'abscd'
//     this.setState({ subject: absdc });
//   }

//   handleSubmit() {
//     const { name, email, subject, message } = this.state;
//     alert(
//       `Name: ${name}, Email ${email}, Subject: ${subject}, Message: ${message}`
//     );
//   }

//   render() {
//     const { name, email, subject, message } = this.state;
//     return (
//       <div className="p-8">
//         <div className="mb-4">
//           <div className="mb-4">
//             <label htmlFor="">Your name</label>
//           </div>
//           <div>
//             <input
//               value={name}
//               onChange={this.handleChange}
//               name="name"
//               type="text"
//               className="border-2 w-3/4 p-4 rounded-xl"
//               placeholder="ABC"
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <div className="mb-4">
//             <label htmlFor="">Email Address</label>
//           </div>
//           <div>
//             <input
//               value={email}
//               onChange={this.handleChange}
//               name="email"
//               type="text"
//               className="border-2 w-3/4 p-4 rounded-xl"
//               placeholder="ABC@def.com"
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <div className="mb-4">
//             <label htmlFor="">Subject</label>
//           </div>
//           <div>
//             <input
//               value={subject}
//               onChange={this.handleChange}
//               name="subject"
//               type="text"
//               className="border-2 w-3/4 p-4 rounded-xl"
//               placeholder="This is an optional"
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <div className="mb-4">
//             <label htmlFor="">Message</label>
//           </div>
//           <div>
//             <textarea
//               rows={5}
//               value={message}
//               onChange={this.handleChange}
//               name="message"
//               type="text"
//               className="border-2 w-3/4 p-4 rounded-xl"
//               placeholder="Hi I'd like to ask about"
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <button
//             onClick={this.handleSubmit}
//             className="w-[200px] px-8 py-4 bg-amber-500 rounded-md text-white"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
