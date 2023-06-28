import React, { useState } from "react";
// import Backgoudright from "../../resources/images/Art1.png";
import "../../resources/styles/components/login.css";
import { BsExclamationCircle } from "react-icons/bs";
import { setProfileAuth } from "../../store/slices/accountSlice";
// import LogoIcon from "../../resources/images/logo/logo.svg";
// import Translate from "../../resources/images/Vi.png";
import { useFormik } from "formik";

import * as Yup from "yup";
// import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

// import axiosClient from "../../apis/axiosClient";
import { useDispatch } from "react-redux";
import accountApis from "../../apis/accountApis";

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

// const { t } = useTranslation();
// const { theme } = useSelector((state) => state.common);

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();
  const toggle = () => setShowPassword(!showPassword);
  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      if (values.email && values.password && agreeTerms) {
        accountApis
          .register({
            email: values.email,
            password: values.password,
            fullName: values.fullName,
          })
          // .then(({ user, token }) => {
          //   axiosClient.defaults.headers.common = {
          //     Authorization: `Bearer ${token}`,
          //   };

          //   navigate("/");
          //   // return accountApis.getProfile()
          // })
          .then((res) => {
            dispatch(setProfileAuth(res));
            navigate("/");
            console.log(values);
          })
          .catch((err) => {
            console.log(err.response.data);
            if (err.response.data) {
              setError("email đã được đăng ký");
            }
          });
        // .finally(() => {
        //   setLoading(false);
        // });
      } else {
        setError("Bạn phải xác nhận điều khoản sử dụng của Xoo Network");
      }
    },
    validationSchema: LoginSchema,
  });

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between ">
          {/* logo  */}
          <div
            className="logo flex fixed top-0  mt-10 ml-10 w-7/12 justify-between
          "
          >
            <div className=" ">
              <img src={LogoIcon} alt="logo icon " />
            </div>
            <div>
              {" "}
              <img src={Translate} alt="translate icon " />
            </div>
          </div>
          {/* form */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-2/6 xl:ml-64 pl-[5%] ">
            <form onSubmit={formik.handleSubmit}>
              <div className=" pb-5 text-center">
                <p className="mb-0 mr-4 text-3xl font-bold pb-5">
                  Đăng ký tài khoản
                </p>
                <p className="">
                  Đăng nhập một tài khoản sử dụng cho tất cả các dịch vụ{" "}
                </p>
              </div>
              <div className="col-auto mb-3 w-full" data-te-input-wrapper-init>
                <div className="mb-4">
                  <label htmlFor="exampleFormControlInput2">Họ và tên</label>
                </div>
                <div className="relative">
                  <input
                    name="fullName"
                    type="fullName"
                    placeholder="Nhập họ và tên"
                    className="input input-bordered w-full  border-gray-100"
                    id="fullName"
                    onChange={formik.handleChange("fullName")}
                    onBlur={formik.handleBlur("fullName")}
                    value={formik.values.fullName}
                    style={{
                      borderColor: formik.errors.fullName ? "red" : "gray",
                    }}
                  />

                  {formik.errors.email && (
                    <BsExclamationCircle className="absolute right-3 top-1 translate-y-1/2 text-red-700" />
                  )}
                  {formik.touched.email && formik.errors.email && (
                    <p className="error">{formik.errors.email}</p>
                  )}
                </div>
              </div>
              <div className="col-auto mb-3 w-full" data-te-input-wrapper-init>
                <div className="mb-4">
                  <label htmlFor="exampleFormControlInput2">Email</label>
                </div>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    placeholder="Nhập địa chỉ email"
                    className="input input-bordered w-full  border-gray-100 "
                    id="email"
                    onChange={formik.handleChange("email")}
                    onBlur={formik.handleBlur("email")}
                    value={formik.values.email}
                    style={{
                      borderColor: formik.errors.email ? "red" : "gray",
                    }}
                  />

                  {formik.errors.email && (
                    <BsExclamationCircle className="absolute right-3 top-1 translate-y-1/2 text-red-700" />
                  )}
                  {formik.touched.email && formik.errors.email && (
                    <p className="error">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <div className="mb-4">
                  <label htmlFor="exampleFormControlInput2">Mật khẩu</label>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered peer block min-h-[auto]   w-full    px-3 py-[0.32rem] leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 bg-slate-100"
                    placeholder="Nhập mật khẩu"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur("password")}
                    value={formik.values.password}
                    style={{
                      borderColor: formik.errors.email ? "red" : "gray",
                    }}
                  />

                  {formik.errors.password && (
                    <p className="error">{formik.errors.password}</p>
                  )}
                  {error && <p className=" text-red-700">{error}</p>}
                  <div
                    className="absolute right-3 top-1 translate-y-1/2"
                    onClick={toggle}
                  >
                    {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
                  </div>
                </div>
              </div>

              <div className="mb-2 flex items-center justify-between">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                    type="checkbox"
                    value=""
                    id="exampleCheck2"
                    checked={agreeTerms}
                    onChange={handleAgreeTermsChange}
                  />
                  <label
                    className=" pl-[0.15rem] hover:cursor-pointer flex"
                    htmlFor="exampleCheck2"
                  >
                    <p>Đồng ý với</p>

                    <Link
                      to="/"
                      className="mr-3 text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 pl-3  text-red-600"
                    >
                      {" "}
                      Điều khoản sử dụng
                    </Link>
                    <p> của Xoo Network</p>
                  </label>
                </div>
              </div>

              <div className="text-center lg:text-left pt-2">
                <button
                  type="submit"
                  className="inline-block rounded-3xl  bg-gradient-to-r from-[#F15F3E] to-[#F58571] w-full h-10 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  Đăng ký
                </button>

                <p className="mb-0 mt-2 pt-1 font-semibold text-center">
                  Bạn đã có tài khoản?
                  <Link
                    to="/login"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 pl-3  text-red-600"
                  >
                    Đăng nhập ngay
                  </Link>
                </p>
              </div>
            </form>

            <div className="flex text-center absolute bottom-5">
              <p className="mx-3">Điều khoản sử dụng </p> |{" "}
              <p className="mx-3"> Bảo mật thông tin </p>|{" "}
              <p className="mx-3"> Trợ giúp</p>
            </div>
          </div>
          {/* bg right */}
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-5/12 xl:w-[45%] text-center md:hidden xl:block">
            <div className="background-right h-[100vh]  ml-36">
              <div className="text-white  text-banner m-auto w-9/12 pt-[12%]">
                <h4 className="text-3xl text-white font-bold  ">
                  Hệ sinh thái Xoo Network
                </h4>
                <div>
                  <div className="flex items-start text-center my-6">
                    <p>
                      Chúng tôi mang đến cho bạn hệ sinh thái công nghệ và
                      truyền thông đa dạng và chất lượng dịch vụ hàng đầu giúp
                      bạn kinh doanh thành công.
                    </p>
                  </div>
                  <Link href="#!" className="underline">
                    Xem thêm tại đây
                  </Link>
                </div>

                <div className="d-flex justify-center mt-11">
                  <img src={Backgoudright} alt="test" className="w-5/6 pl-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
