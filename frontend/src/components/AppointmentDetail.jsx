export default function AppointmentDetail({ detail }) {
  const date = new Date(detail.consult_time);
  return (
    <>
      <div className="fixed h-[100vh] flex flex-col place-content-center w-full z-[9999]">
        <div className="bg-white w-[calc(100%-9%)] xs:w-[calc(100%-30%)] md:w-[calc(100%-50%)] lg:w-[calc(100%-60%)] mx-auto *:mb-[1.5rem] p-[2rem] py-[3rem] shadow rounded-[10px]">
          <div className="flex justify-between">
            <div className="flex  flex-col justify-between">
              <span className="font-[600] text-[1rem]">Name</span>
              <span className="text-[#737373] text-[0.8rem]">
                {detail.owner.name}
              </span>
            </div>
            <div className="flex flex-col justify-between">
              <span className="font-[600] text-end text-[1rem]">Email</span>
              <span className="text-[#737373] text-[0.8rem]">
                {detail.owner.email}
              </span>
            </div>
          </div>
          <div className="flex  justify-between">
            <div className="flex  flex-col justify-between">
              <span className="font-[600] text-[1rem]">Phone</span>
              <span className="text-[#737373] text-[0.8rem]">
                {detail.owner.phone_number}
              </span>
            </div>
            <div className="flex flex-col justify-between">
              <span className="font-[600] text-[1rem] text-end">Date</span>
              <span className="text-[#737373] text-[0.8rem]">
                {date.toDateString()}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <span className="font-[600] text-[1rem]">Service</span>
              <span className="text-[#737373] text-[0.8rem]">
                {detail.service}
              </span>
            </div>
            <div className="flex flex-col justify-between">
              <span className="font-[600] text-end text-[1rem]">Status</span>
              <span className="text-red-500 text-[#737373] text-[0.8rem]">
                {detail.status}
              </span>
            </div>
          </div>
          <p className="text-[#737373] text-[0.8rem]">{detail.purpose}</p>
        </div>
      </div>
    </>
  );
}
