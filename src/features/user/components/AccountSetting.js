import React from "react";
import ResetPassword from "../../auth/components/ResetPassword";

function AccountSetting() {
  return (
    <div className="h-screen">
      <ResetPassword />
      <section
        aria-labelledby="billing-history-heading"
        className="w-[700px] mt-4"
      >
        <div className="bg-white pt-6 shadow sm:overflow-hidden sm:rounded-md">
          <div className="px-4 sm:px-6">
            <h2
              id="billing-history-heading"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Danger Zone
            </h2>
          </div>
          <div className="mt-6 flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border-t border-gray-200">
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex flex-start ">
                    <button
                      type="submit"
                      className="inline-flex justify-center  rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-[160px]"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AccountSetting;
