import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

import { styles } from "../styles.js";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion.js";
import { useFormik } from "formik";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const closeModal = () => {
    setShowModal(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values, actions) => {
      setLoading(true);

      emailjs
        .send(
          "service_du4d0rp",
          "template_9ayi758",
          {
            from_name: values.name,
            to_name: "Daria",
            from_email: values.email,
            to_email: "savchenkodarya277@gmail.com",
            message: values.message,
          },
          "8bpUs8LwE3S3cLYq"
        )
        .then(() => {
          setLoading(false);
          setModalText("Thank you. I will get back to you as soon as possible.");
          setShowModal(true);
          actions.resetForm();
        })
        .catch((error) => {
          setLoading(false);
          setModalText("Sorry, something went wrong.");
          setShowModal(true);
          console.log(error);
        });
    },
  });

  return (
    <>
      <Helmet>
        <title>Contact | Daria's Portfolio</title>
        <meta
          name="description"
          content="Get in touch with Daria via the contact form. Send a message or ask a question about her work or projects."
        />
        <meta
          name="keywords"
          content="Contact Daria, web developer, portfolio, email, message, Three.js, React.js"
        />
        <meta name="author" content="Daria Savchenko" />
        <meta property="og:title" content="Contact | Daria's Portfolio" />
        <meta
          property="og:description"
          content="Have a project or question? Reach out to Daria using the contact form."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <Modal text={modalText} visible={showModal} closeModal={closeModal} />

        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form className="mt-12 flex flex-col gap-8" onSubmit={formik.handleSubmit}>
            <label className="flex flex-col" htmlFor="name">
              <span className="text-white font-medium">Your name</span>
              <input
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium"
              />
            </label>

            <label className="flex flex-col" htmlFor="email">
              <span className="text-white font-medium">Your email</span>
              <input
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium"
              />
            </label>

            <label className="flex flex-col" htmlFor="message">
              <span className="text-white font-medium">Your message</span>
              <textarea
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="What's your message?"
                rows="7"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary rounded"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

const Modal = ({ text, visible, closeModal }) => {
  return (
    <div
      className={
        visible
          ? "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-10"
          : "hidden"
      }
    >
      <div className="bg-black-100 p-2 rounded-2xl sm:w-[50%] w-full">
        <h3 className="p-5 text-center text-xl text-white">{text}</h3>
        <div className="text-center">
          <button
            className="px-5 py-2 bg-tertiary shadow-md shadow-primary text-white rounded"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
