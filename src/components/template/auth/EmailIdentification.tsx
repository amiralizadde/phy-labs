"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { useFormik } from "formik";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { context } from "@/context/Context";
import { validateEmail } from "@/utils/utils";
import Swal from "sweetalert2";

type emailIdentFormType = {
  email: string;
};

const EmailIdentification = () => {
  const locale = useLocale();
  const router = useRouter();
  const myContext = useContext(context);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const email_identForm = useFormik<emailIdentFormType>({
    initialValues: {
      email: "",
    },
    validate(values: emailIdentFormType) {
      const errors: Partial<emailIdentFormType> = {};
      const isValidEmail = validateEmail(values.email);

      if (isValidEmail === false) {
        errors.email = "Invalid email format";
      }

      return errors;
    },

    onSubmit: (values) => {
      identificationEmail(values);
    },
  });

  const identificationEmail = async (values: emailIdentFormType) => {
    try {
      await fetch(`/${locale}/api/auth/identificationEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      }).then((res) => {
        if (res.status === 200) {
          Toast.fire({
            title: "Welcome ...",
            icon: "success",
          }).then(() => {
            myContext?.setUserEmail(values.email);
            router.replace(`/${locale}/auth/signin`);
          });
        } else if (res.status === 404) {
          if (res.status === 404) {
            Toast.fire({
              title: "Welcome to Phy-labs",
              icon: "success",
            }).then((result) => {
              myContext?.setUserEmail(values.email);
              router.replace(`/${locale}/auth/signup`);
            });
          }
        } else if (res.status === 400) {
          Toast.fire({
            icon: "error",
            title: "Email not currect",
          });
        }
      });
    } catch (error) {
      Swal.fire({
        text: "Server Error please try again",
        icon: "warning",
      });
    }
  };

  return (
    <form
      className="my-7 flex flex-col justify-start items-start"
      onSubmit={email_identForm.handleSubmit}
    >
      <label htmlFor="business-email" className="font-bold">
        Business E-mail Address <span className="text-primary">(required)</span>
      </label>
      <input
        id="business-email"
        name="email"
        type="email"
        onChange={email_identForm.handleChange}
        value={email_identForm.values.email}
        className="border border-black/25 p-2 my-1 rounded w-full"
      />
      {email_identForm.touched.email && email_identForm.errors.email ? (
        <div className="text-red-600 text-sm mt-1">
          {email_identForm.errors.email}
        </div>
      ) : null}
      <button
        type="submit"
        className="bg-primary hover:bg-red-600 transition-all duration-200 text-white min-w-52 max-w-80 py-[10px] px-4 mt-7 rounded flex items-center justify-between"
      >
        <span>Countinue</span>
        <FaArrowRightLong />
      </button>
    </form>
  );
};

export default EmailIdentification;
