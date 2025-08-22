import { useState } from "react";
export default function DropDownSelect({
  label,
  initial,
  options,
  click,
  optionDisplay,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className=" flex flex-col space-y-1 w-[calc(100%-60%)]" tabIndex={0}>
      <label
        htmlFor="practice-area"
        className="font-[600] text-[0.75rem] text-[#525252] tracking-[0.5px]"
      >
        {label}
      </label>
      <div
        className="font-['Inter'] *:text-[1rem] flex  flex-col justify-center border-1 border-[#e2e8f0] rounded-[5px] relative"
        onClick={(e) => {
          e.stopPropagation();
          click(label);
        }}
      >
        <div className=" px-3 py-2 rounded-[10px]" value="legal-need">
          {selectedOption || initial}
        </div>
        <div
          className={`${
            optionDisplay === label ? "block" : "hidden"
          } absolute w-full top-[100%] left-0 bg-white rounded-[5px] *:p-2 *:hover:bg-[#3b82f6] *:hover:text-white`}
          datatype="option"
          onClick={(e) => {
            setSelectedOption(e.target.textContent);
            setTimeout(() => {
              click(0);
            }, 50);
          }}
        >
          {options.map((option) => (
            <div key={option}>{option}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
