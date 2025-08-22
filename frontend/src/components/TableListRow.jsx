export default function TableListRow({ detail }) {
  return (
    <>
      <tr className="*:text-center *:border-b-1 *:border-gray-300 *:text-[#737373] *:text-[0.75rem]">
        <td>
          {/* <div>Coporate law consultation</div> */}
          <div>{detail.service}</div>
        </td>
        <td>
          {/* <div>Booked</div> */}
          <div>{detail.status}</div>
        </td>
        <td>
          {/* <div>Today 2:00PM Aug 18,2025</div> */}
          <div>{detail.consult_time}</div>
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
