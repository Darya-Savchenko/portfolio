import {useState} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

import {styles} from "../styles.js";
import {EarthCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utils/motion.js";
import {useFormik} from "formik";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState("");

    const onSubmit = (actions) => {
        setLoading(true);

        emailjs.send(
            'service_du4d0rp',
            'template_9ayi758',
            {
                from_name: formik.values.name,
                to_name: 'Daria',
                from_email: formik.values.email,
                to_email: 'savchenkodarya277@gmail.com',
                message: formik.values.message
            },
            '8bpUs8LwE3S3cLYq').then(() => {
            setLoading(false);
            setShowModal(true);
            setModalText("Thank you. I will get back to you as soon as possible.");
            actions.resetForm();
            return (
                <Modal text={modalText} visible={showModal} closeModal={closeModal}/>
            )
        }, (error) => {
            setLoading(false);
            setShowModal(true);
            setModalText("Sorry, something went wrong.");

            console.log(error);
            return (
                <Modal text={modalText} visible={showModal} closeModal={closeModal}/>
            )
        })
    }

    const closeModal = () => {
        setShowModal(false);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit,
    });

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <Modal
                text='Thank you. I will get back to you sa soon as possible.'
                visible={showModal}
                closeModal={closeModal}/>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
                        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <form className="mt-12 flex flex-col gap-8"
                      onSubmit={formik.handleSubmit}>
                    <label className="flex flex-col"
                           htmlFor="name">
                        <span className="text-white font-medium">Your name</span>
                    </label>
                    <input
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        type="text"
                        placeholder="What's your name?"
                        onBlur={formik.handleBlur}
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium"
                    />
                    <label className="flex flex-col"
                           htmlFor="email">
                        <span className="text-white font-medium">Your email</span>
                    </label>
                    <input
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        type="email"
                        placeholder="What's your email?"
                        onBlur={formik.handleBlur}
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium"
                    />
                    <label className="flex flex-col"
                           htmlFor="message">
                        <span className="text-white font-medium">Your message</span>
                    </label>
                    <textarea
                        id="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        placeholder="What's your message?"
                        rows="7"
                        onBlur={formik.handleBlur}
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg font-medium"
                    />
                    <button type="submit"
                            className="bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary rounded">
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
            <motion.div vvariants={slideIn('right', 'tween', 0.2, 1)}
                        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                <EarthCanvas/>
            </motion.div>
        </div>
    )
}

const Modal = ({text, visible, closeModal}) => {
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

export default SectionWrapper(Contact, 'contact');
