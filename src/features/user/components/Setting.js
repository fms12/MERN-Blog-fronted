import { CogIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ProfileSetting from "./ProfileSetting";
import AccountSetting from "./AccountSetting";

const subNavigation = [
  { id: "profile", name: "Profile", href: "#", icon: UserCircleIcon },
  { id: "account", name: "Account", href: "#", icon: CogIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Setting() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabs = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="h-full bg-[#f5f5f5]">
        <main className="mx-auto max-w-7xl pb-10 lg:px-8 lg:py-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <aside className="px-2 py-6 sm:px-6 lg:col-span-3 lg:px-0 lg:py-0">
              <nav className="space-y-1">
                {subNavigation.map((item) => (
                  <div
                    key={item.id}
                    href={item.href}
                    className={classNames(
                      item.id === activeTab
                        ? "bg-gray-50 text-orange-600 hover:bg-white"
                        : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.id === activeTab ? "page" : undefined}
                    onClick={() => handleTabs(item.id)}
                  >
                    <item.icon
                      className={classNames(
                        item.id === activeTab
                          ? "text-orange-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "-ml-1 mr-3 h-6 w-6 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    <span className="truncate">{item.name}</span>
                  </div>
                ))}
              </nav>
            </aside>
            <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
              {activeTab === "profile" && <ProfileSetting />}
              {activeTab === "account" && <AccountSetting />}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
