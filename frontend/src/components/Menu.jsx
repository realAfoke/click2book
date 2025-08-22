import { use, useState } from "react";
export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="fixed shadow w-full p-6 xs:px-[5rem] xs:py-3 xs:items-center flex justify-between z-40 bg-white font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif]">
        <div className="text-[clamp(1.5rem,4vw,2rem)] font-[700] text-[#3b82f6]">
          JusticeStand
        </div>
        <ul
          className={`*:text-[#64748b] text-[clamp(1rem,2vw,1rem)] bg-white flex flex-col  xs:flex xs:flex-row xs:justify-between xs:w-auto xs:static xs:items-center xs:gap-[4rem] xs:shadow-none  menu absolute left-0 top-[100%] shadow-lg w-full p-3 gap-[1.5rem] ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#book-now">Book Now</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {/* <li>Book Now</li>
          <li>Reviews</li>
          <li>Contact</li> */}
        </ul>
        <button
          className={`text-3xl xs:hidden`}
          onClick={() => {
            if (showMenu) {
              setShowMenu(false);
            } else {
              setShowMenu(true);
            }
          }}
        >
          ☰
        </button>
      </header>
    </>
  );
}
