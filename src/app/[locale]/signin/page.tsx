"use client";
import { useFormik } from "formik";
import styles from "../../../styles/p-admin/signup.module.css";
import { useLocale, useTranslations } from "next-intl";
import { createUserType, loginUserType } from "@/types/authTypes";
import swal from "sweetalert";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface MyFormValues {
  email: string;
  password: string;
}

const Signin = () => {
  const t = useTranslations("signin");
  const locale = useLocale();
  const router = useRouter();

  const signinForm = useFormik<MyFormValues>({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values, actions) => {
      console.log(values);
      actions.setSubmitting(false);
      loginUser(values);
    },

    validate: (values) => {
      const errors: Partial<MyFormValues> = {};

      if (!values.email) {
        errors.email = "email is required";
      }
      if (!values.password) {
        errors.password = "password is required";
      }
      return errors;
    },
  });

  //   login user function
  const loginUser = async (values: loginUserType) => {
    const { email, password } = values;
    const user = {
      email,
      password,
    };

    await fetch(`/${locale}/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 200) {
          swal({
            title: "Nice",
            text: "login user successfully",
            icon: "success",
          });
          router.replace(`/${locale}/dashboard`);
        } else if (res.status === 500) {
          swal({
            title: "ohh!",
            text: " Unknown Internal Server Error ",
            icon: "warning",
            dangerMode: true,
          });
        } else if (res.status === 422) {
          swal({
            title: "ohh!",
            text: " email or password not valid ",
            icon: "warning",
            dangerMode: true,
          });
        }
      })
      .catch((err) => {
        console.log("fetch data error ->", err);
      });
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
          onSubmit={signinForm.handleSubmit}
          className={styles.signup__form}
        >
          {/* Email Field */}
          <div>
            <label htmlFor="email">{t("emaillabel")}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("emailInputPlaceholder")}
              value={signinForm.values.email}
              onChange={signinForm.handleChange}
              onBlur={signinForm.handleBlur}
            />
            {signinForm.touched.email && signinForm.errors.email ? (
              <div className="text-xs text-primary">
                {signinForm.errors.email}
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
              value={signinForm.values.password}
              onChange={signinForm.handleChange}
              onBlur={signinForm.handleBlur}
            />
            {signinForm.touched.password && signinForm.errors.password ? (
              <div className="text-xs text-primary">
                {signinForm.errors.password}
              </div>
            ) : null}
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={signinForm.isSubmitting}>
            {t("button")}
          </button>
        </form>
        <p className="text-sm my-2">
          {t("isHaveAccount")}
          <Link href={`/${locale}/signup`}>
            <span className="font-bold hover:text-primary cursor-pointer">
              {t("linkIsHaveAccount")}
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
