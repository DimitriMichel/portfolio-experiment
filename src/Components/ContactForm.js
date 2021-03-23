import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import useSound from "use-sound";
import whooshSfx from "../sounds/woosh.mp3";

//Animation Config
const checkMarkVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
//Sound Effect

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const [play] = useSound(whooshSfx);
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/xjvannoe",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, "Sent");
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className="contact pink--pattern">
      <div className="form__container">
        <form onSubmit={handleOnSubmit} className="form">
          <div className="contact__header">
            <motion.div className="box--title--contact"><h2>Contact</h2></motion.div>
            <motion.div
              initial="static"
              animate="floating"
              transition="transition"
              className="box--title box__emoji"
            >
              <span role="img" aria-label="Envelope Emoji">
                ✉️
              </span>
            </motion.div>
            {status.submitted ? (
              <motion.div
                initial="initial"
                animate="animate"
                transition="transition"
                variants={checkMarkVariants}
                className="box--title box__emoji"
              >
                <span role="img" aria-label="Thumbs Up Emoji">👍</span>
              </motion.div>
            ) : (
              <div></div>
            )}
          </div>
          <label className="email__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
          <label htmlFor="message">Message</label>
          <textarea
            className="form__textarea"
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            onClick={play}
            disabled={status.submitting}
            className="form__submit__button"
          >
            {!status.submitting
              ? !status.submitted
                ? "Submit"
                : "Submitted"
              : "Submitting..."}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
