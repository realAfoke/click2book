import { useEffect, useState } from "react";
import DivListRow from "./DivListRow";
import TableListRow from "./TableListRow";
import DropDownSelect from "./DropDownSelect";

export default function MainAdminBoard({ data }) {
  const [optionDisplay, setOptionDisplay] = useState(0);
  function toggleOption(value) {
    setOptionDisplay(value);
  }
  useEffect(() => {
    window.addEventListener("click", () => {
      setOptionDisplay(0);
    });
  });
  const active = data.filter((obj) => obj.status === "booked");
  return (
    <div className="bg-[#fafafa] h-[100vh]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] xxs:gap-[1.5rem] gap-[0.3rem] py-[1.5rem] xxs:mx-[2rem] mb-[1rem] mx-[1rem] *:border-1 *:border-gray-200">
        <div className="p-[2rem] px-[1.5rem] my-5 shadow flex rounded-[10px] justify-between bg-white">
          <div className="flex flex-col justify-between gap-[2rem]">
            <h3 className="text-[0.857rem] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif] font-[600] text-[#6e6d6d] tracking-[0.15px] uppercase">
              Total Appointment
            </h3>

            <div className="flex flex-col  gap-[0.5rem]">
              <span className="text-[2rem] font-[700] text-[#171717]">
                {data.length}
              </span>
              <span className="text-[#10b981] text-[0.875rem] font-[600]">
                12% from last month
              </span>
            </div>
          </div>
          <span className="w-[40px] h-[40px] block bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6] rounded-[10px] mt-[-12px]"></span>
        </div>
        <div className="p-[2rem] px-[1.5rem] my-5 shadow flex rounded-[10px] justify-between bg-white">
          <div className="flex flex-col justify-between gap-[2rem]">
            <h3 className="text-[0.857rem] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif] font-[600] text-[#6e6d6d] tracking-[0.15px] uppercase">
              Monthly Revenue
            </h3>

            <div className="flex flex-col  gap-[0.5rem]">
              <span className="text-[2rem] font-[700] text-[#171717]">
                $42,850
              </span>
              <span className="text-[#10b981] text-[0.875rem] font-[600]">
                8% from last month
              </span>
            </div>
          </div>
          <span className="w-[40px] h-[40px] block bg-gradient-to-b from-[#10b981] to-[#16a085] rounded-[10px] mt-[-12px]"></span>
        </div>
        <div className="p-[2rem] px-[1.5rem] my-5 shadow flex rounded-[10px] justify-between bg-white">
          <div className="flex flex-col justify-between gap-[2rem]">
            <h3 className="text-[0.857rem] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif] font-[600] text-[#6e6d6d] tracking-[0.15px] uppercase">
              Active Client
            </h3>

            <div className="flex flex-col  gap-[0.5rem]">
              <span className="text-[2rem] font-[700] text-[#171717]">
                {active.length}
              </span>
              <span className="text-[#10b981] text-[0.875rem] font-[600]">
                50% from last month
              </span>
            </div>
          </div>
          <span className="w-[40px] h-[40px] block bg-gradient-to-b from-[#f59e0b] to-[#fbbf24] rounded-[10px] mt-[-12px]"></span>
        </div>
        <div className="p-[2rem] px-[1.5rem] my-5 shadow flex rounded-[10px] justify-between bg-white">
          <div className="flex flex-col justify-between gap-[1rem]">
            <h3 className="text-[0.857rem] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif] font-[600] text-[#6e6d6d] tracking-[0.15px] uppercase">
              Completion Rate
            </h3>

            <div className="flex flex-col  gap-[0.5rem]">
              <span className="text-[2rem] font-[700] text-[#171717]">94%</span>
              <span className="text-red-500 text-[0.875rem] font-[600]">
                2% from last month
              </span>
            </div>
          </div>
          <span className="w-[40px] h-[40px] block bg-gradient-to-b from-[#8b5cf6] to-[#a855f7] rounded-[10px] mt-[-12px]"></span>
        </div>
      </div>
      <div className=" *:border-b *:border-gray-300 xxs:mx-[2rem] mx-[1rem] shadow border-1 border-gray-100 rounded-[15px]">
        <h3 className="text-[1.125rem] text-[#171717] font-[600]  p-[2rem]">
          Recent Appointment
        </h3>
        <div className="flex gap-2 *:max-w-[150px] *:xxs:max-w-[170px] p-[2rem] py-[1.5rem] font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif] flex-wrap bg-[#fafafa]">
          <DropDownSelect
            label={"STATUS"}
            initial={"All Status"}
            options={["Confrimed", "Pending", "Cancelled", "Completed"]}
            click={toggleOption}
            optionDisplay={optionDisplay}
          />
          <DropDownSelect
            label={"DATA RANGE"}
            initial={"Last 7 days"}
            options={["Last 30 days", "This month", "Custom range"]}
            click={toggleOption}
            optionDisplay={optionDisplay}
          />
          <DropDownSelect
            label={"SERVICE TYPE"}
            initial={"All Services"}
            options={[
              "Corporate Law",
              "Employment Law",
              "Intellectual Property",
              "Real Estate",
              "Family Law",
              "Criminial Defense",
              "Personal Injury",
              "Tax Law",
            ]}
            click={toggleOption}
            optionDisplay={optionDisplay}
          />
        </div>
        <div className="flex overflow-auto bg-white rounded-2xl">
          <div className="flex flex-none w-[15rem] flex-col">
            <div className="grid grid-cols-1 justify-between">
              <div className="border-b border-gray-200 px-[2rem] py-3 font-[600] uppercase text-[#525252] bg-[#fafafa] text-[0.75rem] tracking-[0.5px]">
                Client
              </div>
            </div>
            <div
              className="grid grid-cols-1 justify-between *:p-4  *:border-b-1 *:border-gray-300
          "
            >
              {data.map((name) => (
                <DivListRow key={name.id} name={name.owner} />
              ))}
            </div>
          </div>
          <div className="overflow-auto">
            <table className="table-layout w-[100%]">
              <thead>
                <tr className="*:w-[7rem] *:px-3 *:py-[0.73rem] *:border-b *:border-gray-200 *:bg-[#fafafa] text-[0.75rem] *:tracking-[0.5px] *:uppercase *:text-[#525252]">
                  <th>Service</th>
                  <th>Status</th>
                  <th>Date & Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((detail) => (
                  <TableListRow key={detail.id} detail={detail} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
