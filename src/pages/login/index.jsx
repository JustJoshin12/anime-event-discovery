"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Image } from "@/components/shared/image";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "@/store/slices/userSlice";
import BackgroundChanger from "@/components/UI/BackgroundChanger";
import { useFormAndValidation } from "@/hooks/useFormAndValidation";
import DialogPopUp from "@/components/UI/DialogPopUp";

function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();
  const [showPassword, setShowPassword] = useState(false);
  const loginState = useSelector((state) => state.user); 
  const {status, error} = loginState;

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = ({ email, password }) => {
    dispatch(signIn({ email, password }))
      .unwrap()
      .then((res) => {
        console.log(res);
        router.push("/home");
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Failed to login. Incorrect email or password");
        setIsError(true);
        setOpen(true);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    handleLogin({ email: values.email, password: values.password });
  };

  const websiteLogo = "/images/websiteLogo.png"

  return (
    <>
      <BackgroundChanger>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-black/50 rounded-badge p-4 md:p-8 sm:mx-auto sm:w-full sm:max-w-sm"
          >
            <Image
              width={150}
              height={32}
              className="mx-auto w-auto h-40 md:h-44 xl:h-auto"
              src={websiteLogo}
              alt="Your Company"
            />
            <h2 className="mt-4 md:mt-10 text-center text-lg lg:text-2xl font-bold leading-9 tracking-tight text-white">
              Sign in to your account
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="bg-black/50 rounded-badge p-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium leading-6 text-white"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={values.email || ""}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="text-xs md:text-sm font-semibold text-indigo-400 duration-150 hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    minLength="5"
                    maxLength="12"
                    autoComplete="current-password"
                    required
                    value={values.password || ""}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-indigo-400 hover:text-indigo-300 focus:outline-none"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={!isValid || status === "loading"}
                  className="flex w-full justify-center rounded-md duration-200 bg-indigo-500 px-2 md:px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  {status === "loading" ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>

            <p className="mt-5 md:mt-10 text-center text-sm text-gray-400">
              Not a member?{" "}
              <button
                type="button"
                onClick={() => router.push("/register")}
                className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
              >
                Register
              </button>
            </p>
          </motion.div>
        </div>

        <DialogPopUp
          open={open}
          setOpen={setOpen}
          onClick={() => {
            setOpen(false);
            if (isError) {
              setOpen(false);
              return;
            }
          }}
          title={isError ? "Login Failed" : "Registration Successful"}
          description={
            isError
              ? errorMessage
              : "You have successfully registered. Welcome aboard!"
          }
          buttonText={isError ? "Try Again" : "Login"}
          isError={isError}
        />
      </BackgroundChanger>
    </>
  );
}

export default LoginPage;
