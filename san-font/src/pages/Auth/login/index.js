import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BiLeftArrowCircle } from "react-icons/bi";
import Router, { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      }); 

      router.push("/");
    } catch (error) {
      error;
    } 
  };
  const axiosClient = axios.create({
    baseURL: `http://localhost:3000`,
    headers: {
      'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
  })
  
  const LoginSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Bạn chưa nhập tài khoản nào"),
    password: Yup.string().required("Bạn chưa nhập mật khẩu"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      // setLoading(true);

      axiosClient
        .post("/api/auth/sign-in", {
          email: values.email,
          password: values.password,
        })

        .then((data) => {  
          axiosClient.defaults.headers.common = {
            Authorization: `Bearer ${data.data.token}`,
          };

          localStorage.setItem('info', data.data.user);
          localStorage.setItem('accessToken', data.data.token);
          const token = localStorage.getItem('info');
          console.log(localStorage.getItem('info'));
          router.push('/')
          // return accountApis.getProfile()
        })
        // .then((res) => {
        //   dispatch(setProfileAuth(res))
        //   navigate('/')
        // })
        .catch((err) => {
          console.log(err);
          if (err === "WRONG_PASSWORD") {
            console.log("Mật khẩu bạn đã nhập không chính xác.");
          } else {
            console.log("Tài khoản hoặc mật khẩu bạn đã nhập không chính xác.");
          }
        })
        .finally(() => {
          // setLoading(false);
        });
    },
    validationSchema: LoginSchema,
  });

  //eye password
  const [eye, setEye] = useState(false);
  const toggle = () => {
    setEye(!eye);
  };
  // google handle function
  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }
  // Facebook handle function
  async function handleFacebookSignIn() {
    signIn("facebook", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <>
      <div className=" flex w-full mt-28 ">
        <div className="w-[80%] mx-auto ">
          <Link className="gap-1 flex font-normal text-base" href={"/"}>
            <BiLeftArrowCircle className="text-xl mt-[3px]" />
            Về trang chủ
          </Link>
        </div>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="w-[35%]  mx-auto bg-whites rounded-xl shadow-xl mt-10 max-xl:w-[90%]"
      >
        <div className="w-[85%] mx-auto pt-8">
          <h1 className="font-medium text-2xl">Đăng Nhập</h1>
          <hr className="mt-4  border-[#cccccc]" />
          <div className="mt-5  ">
            <label
              className="text-base font-medium text-blacks "
              htmlFor="text"
            >
              Địa chỉ Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="bg-whites  border-gray-300 text-gray-900 rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:font-medium placeholder:text-base placeholder:text-[#6d767e] w-full p-3"
              required
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
            />
          </div>
          <div className=" mt-4 relative ">
            <div className="">
              <label className="text-base font-medium text-blacks ">
                Mật khẩu
              </label>
              <input
                id="password"
                type={eye === false ? "password" : "text"}
                placeholder="password"
                className="test relative bg-whites border-gray-300 text-gray-900  rounded border focus:outline-none hover:border-oranges focus:border-oranges  placeholder:text-[#6d767e] w-full p-3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur("password")}
                value={formik.values.password}
              />
            </div>
            <div className="text-2xl cursor-pointer text-[#6a6870] absolute top-9 right-2 max-md:text-lg">
              {eye === false ? (
                <AiOutlineEye onClick={toggle} />
              ) : (
                <AiOutlineEyeInvisible onClick={toggle} />
              )}
            </div>
          </div>
          <div className="flex items-center border border-gray-200 rounded">
            <input
              id="bordered-checkbox-1"
              type="checkbox"
              value=""
              name="bordered-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="bordered-checkbox-1"
              className="w-full py-4 ml-2 text-base font-medium text-gray-900"
            >
              Tự động nhập mật khẩu
            </label>
          </div>
          <div className="text-center text-base">
            <Link href={"/Auth/resetpass"}>
              <span className="font-normal">Quên tài khoản đăng nhập ?</span>
            </Link>
          </div>
          <div className="text-center mt-4">
            <button
              type="submit"
              className=" bg-oranges hover:bg-opacity-80 rounded-[30px] px-5 py-2 text-whites   "
            >
              Đăng Nhập
            </button>
          </div>
          {/* sign in with gg */}
          <div className="">
            <p className="text-sm font-medium text-center mt-3">Sign in with</p>
            <div className="mt-2 text-center">
              <button onClick={handleGoogleSignIn} className=" px-2">
                <FcGoogle className="text-4xl" />
              </button>
              <button onClick={handleFacebookSignIn} className=" px-2">
                <FaFacebook className="text-[34px] text-[#1876f2]" />
              </button>
            </div>
          </div>
          <div className="text-center  py-5 text-lg">
            Bạn chưa có tài khoản ?{" "}
            <Link href={"/Auth/register"}>
              <span className="font-bold">Đăng ký ngay</span>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
