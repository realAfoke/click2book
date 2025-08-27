import AppointmentDetail from "./AppointmentDetail";
import { useState, useRef, useEffect } from "react";
export default function TableListRow({ detail, onClick, name }) {
  const date = new Date(detail.consult_time);
  return (
    <>
      <tr
        className="*:text-center *:border-b-1 *:border-gray-300 *:text-[#737373] *:text-[0.75rem]"
        data-email={name.email}
        onClick={(e) => {
          e.stopPropagation();
          onClick(e.currentTarget.dataset.email);
        }}
      >
        <td>
          <div>{detail.service}</div>
        </td>
        <td>
          <div
            className={`${
              detail.status === "booked"
                ? "text-yellow-500"
                : detail.status === "cancelled"
                ? "text-red-500"
                : detail.status === "confrimed"
                ? "text-green-500"
                : "text-[#737373]"
            }`}
          >
            {detail.status}
          </div>
        </td>
        <td>
          <div>{date.toDateString()}</div>
        </td>
        <td className="relative overflow-auto">
          <div className="absolute top-[-15px] w-full flex flex-col *:py-1 text-white">
            <button className="text-green-500">Confirm</button>
            <button className="text-red-500">Cancell</button>
            <button className="text-yellow-500">Edit</button>
            <button className="text-black">Call</button>
            <button className="text-black">Message</button>
          </div>
        </td>
      </tr>
    </>
  );
}
