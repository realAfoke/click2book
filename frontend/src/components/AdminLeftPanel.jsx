import { useEffect, useState } from "react";
export default function AdminLeftPanel({ search, onChange }) {
  const [showAdminMenu, setShowAdminMenu] = useState(false);

  return (
    <>
      <header className="bg-white flex p-4 py-2 shadow justify-between relative items-center">
        <h3 className="text-[clamp(1rem,2vw,2rem)] font-[700] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif] text-[#3b82f6]">
          JusticeStand
        </h3>
        <div className="flex gap-[2rem] items-center">
          <ul
            className={`${
              showAdminMenu ? "flex" : "hidden"
            } absolute bg-[#3b82f6] left-0 top-[100%] w-full flex-col *:p-2 text-white *:text-[clamp(1rem,3vw,1.2rem)] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif] xxs:flex-row xxs:flex xxs:static xxs:gap-[2rem] xxs:bg-white xxs:text-[#64748b]`}
          >
            <li>Dashboard</li>
            <li>Appointment</li>
            <li>Cient</li>
            <li>Profile</li>
          </ul>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              value={search}
              className="outline-none border-1 border-[#1e3a8a] rounded-[8px] p-1 px-3 bg-[#fafafa] text-[0.875rem]"
              onChange={(e) => {
                onChange(e.currentTarget.value);
              }}
              placeholder="Search appointments"
            />
          </div>
          <button
            className="text-2xl xxs:hidden"
            onClick={() => {
              setShowAdminMenu(!showAdminMenu);
            }}
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
}
