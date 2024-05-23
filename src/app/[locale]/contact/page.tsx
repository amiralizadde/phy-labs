'use client'
import React from "react";
import styles from "../../../styles/contact/contact.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useFormik } from "formik";

interface MyFormValues {
  full_name: string;
  email: string;
  message: string;
}

const Contact = () => {

  const userMesageForm = useFormik<MyFormValues>({
    initialValues: {
      full_name: "",
      email: "",
      message: "",
    },
    onSubmit: (values, actions) => {
      console.log(values);
      actions.setSubmitting(false);
    },
  });

  return (
    <div className={styles.contact}>
      {/* header contact */}

      <div className="py-10  shadow-xl">
        <p className="text-5xl text-center">Contact</p>
        <p className="text-center text-sm mt-2 font-medium">
          You can contact us through the following communication methods
        </p>
      </div>
      <div className={styles.headerContact}>
        <div>
          <FaLocationDot className="text-3xl text-primary" />
          <p className="text-2xl my-2">Address</p>
          <p className="text-center text-sm">
            Science and Technology Park, Institute for Advanced Studies in Basic
            Sciences, Prof. Sobouti Blvd. Zanjan, Iran
          </p>
        </div>
        <div>
          <MdEmail className="text-3xl text-blue-700" />
          <p className="text-2xl my-2">Email</p>
          <p className="text-center text-sm">email.com Organizational email of P-labs specialized team</p>
        </div>
        <div>
          <FaPhoneAlt className="text-3xl " />
          <p className="text-2xl my-2">Phone</p>
          <p className="text-center text-sm">
            024 33415472 – 09917502426 You can contact us at the number below
          </p>
        </div>
      </div>
        {/* form */}
      <div>
        <div className={styles.formContent}>
          <form
            onSubmit={userMesageForm.handleSubmit}
            className={styles.createUserMsgForm}
          >
            {/* tile product  Field */}
            <div className={styles.nameProduct__content}>
              <label htmlFor="name">full name</label>
              <input
                type="text"
                id="name"
                name="full_name"
                className={styles.nameProduct}
                value={userMesageForm.values.full_name}
                placeholder="full name ..."
                onChange={userMesageForm.handleChange}
                onBlur={userMesageForm.handleBlur}
              />
              {userMesageForm.touched.full_name && userMesageForm.errors.full_name ? (
                <div className="">{userMesageForm.errors.full_name}</div>
              ) : null}
            </div>

            {/* description Field */}
            {/* Email Field */}
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your emil ..."
                value={userMesageForm.values.email}
                onChange={userMesageForm.handleChange}
                onBlur={userMesageForm.handleBlur}
              />
              {userMesageForm.touched.email && userMesageForm.errors.email ? (
                <div>{userMesageForm.errors.email}</div>
              ) : null}
            </div>

            {/* message Field */}
            <div>
              <label htmlFor="message">Message:</label>
              {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
              <textarea
                cols={30}
                rows={5}
                id="message"
                name="message"
                placeholder="Enter your message ..."
                className="w-full p-3 outline-none rounded-md bg-gray-400/50 placeholder:text-black"
                value={userMesageForm.values.message}
                onChange={userMesageForm.handleChange}
                onBlur={userMesageForm.handleBlur}
              />
              {/* {userMesageForm.touched.message && userMesageForm.errors.message ? (
                <div>{userMesageForm.errors.message}</div>
              ) : null} */}
            </div>

            {/* Submit Button */}
            <div className=" flex items-center justify-center">
            <button type="submit" disabled={userMesageForm.isSubmitting}>
              Send Message
            </button>
            </div>
          </form>
        </div>
      
      </div>
    </div>
  );
};

export default Contact;
