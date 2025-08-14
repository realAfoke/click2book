import { use, useState } from "react";
export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="fixed shadow-lg w-full py-6 px-3 flex justify-between z-40 bg-white">
        <div className="text-[1.5rem] font-[700] ">JusticeStand</div>
        <ul
          className={`bg-white flex flex-col space-y-7 menu absolute left-0 top-[100%] shadow-lg w-full p-3 py-5 ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <li>Features</li>
          <li>Book Now</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
        <button
          className={`text-3xl`}
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
