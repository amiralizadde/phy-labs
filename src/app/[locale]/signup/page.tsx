"use client";
import { useFormik } from "formik";
import styles from "../../../styles/p-admin/signup.module.css";
import { useLocale, useTranslations } from "next-intl";
import { createUserType } from "@/types/authTypes";
import swal from 'sweetalert';
import Link from "next/link";

interface MyFormValues {
  fullname: string;
  email: string;
  password: string;
}

const Signup = () => {
  const t = useTranslations("signup");
  const locale = useLocale();

  const signupForm = useFormik<MyFormValues>({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },

    onSubmit: (values, actions) => {
      console.log(values);
      actions.setSubmitting(false);
      createUser(values);
    },

    validate: (values) => {
      const errors: Partial<MyFormValues> = {};

      if (!values.fullname) {
        errors.fullname = "fullname is required";
      }
      if (!values.email) {
        errors.email = "email is required";
      }
      if (!values.password) {
        errors.password = "password is required";
      }
      return errors;
    },
  });

//   create user function
  const createUser = async (values: createUserType) => {
    const { fullname, email, password } = values;
    const user = {
      fullname,
      email,
      password,
    };

     await fetch(`/${locale}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(res=>{
        
        if (res.status === 201) {
            swal({
                title: "Nice",
                text:"create user successfully",
                icon: "success",
              })
        }
        else if(res.status === 500){
            swal({
                title: "ohh!",
                text:" Unknown Internal Server Error ",
                icon: "warning",
                dangerMode: true,
              })
        }
        else if(res.status === 422){
            swal({
                title: "ohh!",
                text:" This User alredy Existed ",
                icon: "warning",
                dangerMode: true,
              })
        }
    })
    .catch(err=>{
      console.log('fetch data error ->' , err);
    })
  
  };





  return (
    <div className="mt-32">
      {/* create products */}
      <div>breadcrump</div>
      <div className=" text-center text-4xl font-medium py-2">
        <p>{t("titleHeader")}</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 p-5">
        <form
          onSubmit={signupForm.handleSubmit}
          className={styles.signup__form}
        >
          {/* fullname   Field */}
          <div>
            <label htmlFor="fullname">{t("fullnamelabel")}</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={signupForm.values.fullname}
              placeholder={t("fullnameInputPlaceholder")}
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
            />
            {signupForm.touched.fullname && signupForm.errors.fullname ? (
              <div className="text-xs text-primary">
                {signupForm.errors.fullname}
              </div>
            ) : null}
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email">{t("emaillabel")}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("emailInputPlaceholder")}
              value={signupForm.values.email}
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
            />
            {signupForm.touched.email && signupForm.errors.email ? (
              <div className="text-xs text-primary">
                {signupForm.errors.email}
              </div>
            ) : null}
          </div>
          {/* password Field */}
          <div>
            <label htmlFor="password">{t("passwordlabel")}</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder={t("passwordInputPlaceholder")}
              value={signupForm.values.password}
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
            />
            {signupForm.touched.password && signupForm.errors.password ? (
              <div className="text-xs text-primary">
                {signupForm.errors.password}
              </div>
            ) : null}
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={signupForm.isSubmitting}>
            {t("button")}
          </button>
        </form>
        <p className="text-sm my-2">
          {t("isExistAccount")}
          <Link href={`/${locale}/signin`}>
          <span className="font-bold hover:text-primary cursor-pointer">
            {t("linkIsExistAccount")}
          </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
