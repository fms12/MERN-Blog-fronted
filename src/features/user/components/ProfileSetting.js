import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo, updateUserAsync } from "../userSlice";
import { createUserAsync } from "../../auth/authSlice";

function ProfileSetting() {
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userInfo) {
      setValue("username", userInfo.username);
      setValue("bio", userInfo.bio);
      setValue("name", userInfo.name);
    }
  }, [userInfo, setValue]);
  const onSubmit = (data) => {
    // Create a new object that only includes fields that have changed
    const changedFields = {};
    if (data.username !== userInfo.username) {
      changedFields.username = data.username;
    }
    if (data.bio !== userInfo.bio) {
      changedFields.bio = data.bio;
    }
    if (data.name !== userInfo.name) {
      changedFields.name = data.name;
    }

    // Only dispatch the update action if there are changed fields
    if (Object.keys(changedFields).length > 0) {
      dispatch(updateUserAsync(changedFields));
    }
  };
  return (
    <section>
      <form
        className="divide-y divide-gray-200 lg:col-span-9"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Profile section */}
        <div className="px-4 py-6 sm:p-6 lg:pb-8 border bg-white rounded-md">
          <div>
            <h2 className="text-lg font-medium leading-6 text-gray-900">
              Profile
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row ">
            <div className="flex-grow space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2 flex rounded-md shadow-sm">
                  {/* <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                              workcation.com/
                            </span> */}
                  <input
                    type="text"
                    id="username"
                    autoComplete="username"
                    className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    //   defaultValue={user.handle}
                    {...register("username")}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.username.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="bio"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                    {...register("bio")}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
                {errors.email && (
                  <p className="text-red-500">{errors.bio.message}</p>
                )}
              </div>
            </div>

            {/* <div className="mt-6 flex-grow lg:ml-6 lg:mt-0 lg:flex-shrink-0 lg:flex-grow-0">
              <p
                className="text-sm font-medium leading-6 text-gray-900"
                aria-hidden="true"
              >
                Photo
              </p>
              <div className="mt-2 lg:hidden">
                <div className="flex items-center">
                  <div
                    className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                    aria-hidden="true"
                  >
                    <img
                      className="h-full w-full rounded-full"
                      // src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="relative ml-5">
                    <input
                      id="mobile-user-photo"
                      name="user-photo"
                      type="file"
                      className="peer absolute h-full w-full rounded-md opacity-0"
                    />
                    <label
                      htmlFor="mobile-user-photo"
                      className="pointer-events-none block rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 peer-hover:ring-gray-400 peer-focus:ring-2 peer-focus:ring-sky-500"
                    >
                      <span>Change</span>
                      <span className="sr-only"> user photo</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="relative hidden overflow-hidden rounded-full lg:block">
                <img
                  className="relative h-40 w-40 rounded-full"
                  // src={user.imageUrl}
                  alt=""
                />
                <label
                  htmlFor="desktop-user-photo"
                  className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                >
                  <span>Change</span>
                  <span className="sr-only"> user photo</span>
                  <input
                    type="file"
                    id="desktop-user-photo"
                    name="user-photo"
                    className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                  />
                </label>
              </div>
            </div> */}
          </div>

          <div className="mt-6 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                {...register("name")}
              />
              {errors.email && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* <div className="col-span-12">
              <label
                htmlFor="url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                URL
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
              />
            </div> */}
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-x-3 px-4 py-4 sm:px-6 border bg-gray-50 shadow-md rounded-md">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProfileSetting;
