import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  resetPasswordAsync,
  selectError,
  selectLoggedInUser,
  selectPasswordReset,
} from "../authSlice";
import { useForm } from "react-hook-form";
import { selectUserInfo } from "../../user/userSlice";

function ResetPassword() {
  const passwordReset = useSelector(selectPasswordReset);
  const error = useSelector(selectError);
  const userInfo = useSelector(selectUserInfo);
  const email = userInfo.email
    const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  return (
    <>
      {userInfo && (
        <section aria-labelledby="plan-heading" className="w-[700px]">
          <form
            noValidate
            onSubmit={handleSubmit((data) => {
              // console.log(data);
              dispatch(
                resetPasswordAsync({ email, password: data.password })
              );
            })}
          >
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-6 sm:p-6">
                <div>
                  <h2
                    id="plan-heading"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Set new password
                  </h2>
                </div>
                <div className="mt-6 gap-6">
                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      New Password
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-12">
                    <label
                      htmlFor="url"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      name="url"
                      id="url"
                      className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex flex-start ">
                <button
                  type="submit"
                  className="inline-flex justify-center  rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-[160px]"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </section>
      )}
    </>
  );
}

export default ResetPassword;
