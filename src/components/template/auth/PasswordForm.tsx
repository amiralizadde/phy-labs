"use client";
import { FaArrowRightLong } from "react-icons/fa6";
import { useFormik } from "formik";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { context } from "@/context/Context";
import { useContext } from "react";

type passwordFormType = {
  password: string;
};

const PasswordForm = () => {
  const locale = useLocale();
  const router = useRouter();
  const myContext = useContext(context)

  

  const password_identForm = useFormik<passwordFormType>({
    initialValues: {
      password: "",
    },
    validate(values: passwordFormType) {
      const errors: Partial<passwordFormType> = {};

      console.log("errors ->", errors);
      return errors;
    },
    onSubmit: (values) => {
      verifyPassword(values);
    },
  });

  const verifyPassword = async (values: passwordFormType) => {
    let user = {
      email:myContext?.userEmail,
      password:values.password
    }
    try {
      fetch(`/${locale}/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
      .then((res) => {
        if (res.status === 200) {
          router.replace(`/${locale}/`);
        } else if (res.status === 404) {
          alert("Can't find this user");
        }else if (res.status === 422) {
          alert("Password not currect");
        }
      });
    } catch (error) {
      alert("Error please try again");
    }
  };

  const validationEmail = (email: string) => {
    const regex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

  return (
    <form
      className="my-7 flex flex-col justify-start items-start"
      onSubmit={password_identForm.handleSubmit}
    >
      <label htmlFor="business-password" className="font-bold">
        Password <span className="text-primary">(required)</span><span className="text-xs text-black/50 font-medium ms-5">7 characters minimum, no spaces</span>
      </label>
      <input
        id="business-password"
        name="password"
        type="password"
        onChange={password_identForm.handleChange}
        value={password_identForm.values.password}
        className="border border-black/25 p-2 my-1 rounded w-full"
      />
      {/* {password_identForm.touched.email && password_identForm.errors.email ? (
            <div className="text-red-600 text-sm mt-1">
              {password_identForm.errors.email}
            </div>
        ) : null} */}
      <button
        type="submit"
        className="bg-primary child:text-sm hover:bg-red-600 transition-all duration-200 text-white min-w-52 max-w-80 py-[10px] px-4 mt-7 rounded flex items-center justify-between"
      >
        <span>Sign In</span>
        <FaArrowRightLong />
      </button>
    </form>
  );
};

export default PasswordForm;
