import React from "react";
import contact from "../Contact/contact.css";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <>
      <div className="contactdiv">
        <div className="contactform">
          <form
            action="https://formspree.io/f/mrgvzvoe"
            method="POST"
            name="contact-details"
          >
            <p>Fill Your Contact Detail</p>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              name="Name"
              autoComplete="off"
              required
              placeholder="Enter Your Full Name"
            />
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              name="Address"
              autoComplete="off"
              required
              placeholder="Address"
            ></input>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="Email"
              autoComplete="off"
              requiredplaceholder="Example@gmail.com"
            />{" "}
            <label htmlFor="Email">Number</label>
            <input
              type="tel"
              name="Number"
              autoComplete="off"
              required
              placeholder="0000000000"
            ></input>
            <select
              htmlFor="Category"
              type="select"
              name="Category"
              placeholder="Select Your Category"
            >
              <option value="Wedding" autoComplete="off" required>
                Wedding
              </option>
              <option value="Ring-Ceremoney" autoComplete="off" required>
                Ring-Ceremoney
              </option>
              <option value="Birthday" autoComplete="off" required>
                Birthday
              </option>
              <option value="Portfolio" autoComplete="off" required>
                Portfolio
              </option>
              <option value="Matrimoney" autoComplete="off" required>
                Matrimoney
              </option>
              <option value="Baby-Shot" autoComplete="off" required>
                Baby-Shot
              </option>
              <option value="Makeup_Shoot " autoComplete="off" required>
                Makeup_Shoot
              </option>
              <option value="Pree-Wedding" autoComplete="off" required>
                Pree-Wedding
              </option>
              <option value="Post-Wedding" autoComplete="off" required>
                Post-Wedding
              </option>
              <option value="Catering" autoComplete="off" required>
                Catering
              </option>
              <option value="Album-Design" autoComplete="off" required>
                Album-Design
              </option>
              <option value="Video-Editing" autoComplete="off" required>
                Video-Editing
              </option>
              <option value="Event-Planner" autoComplete="off" required>
                Event-Planner
              </option>
              <option value="Decoration" autoComplete="off" required>
                Decoration
              </option>
              <option value="Other" autoComplete="off" required>
                Other
              </option>
            </select>
            <label htmlFor="Date">Date</label>
            <input
              id="date"
              type="date"
              name="Date"
              autoComplete="off"
              required
              placeholder="dd/mm/yyyy"
            />
            <label htmlFor="Message" autoComplete="off" required>
              Message
            </label>
            <textarea
              name="Message"
              autoComplete="off"
              required
              id="message-box"
            ></textarea>
            <button type="submit" id="submit">
              <CgMail id="cmail" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
