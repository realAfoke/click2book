import AppointmentDetail from "./AppointmentDetail";
export default function DivListRow({ name, onClick }) {
  return (
    <div
      className="flex gap-2 items-center"
      data-email={name.email}
      onClick={(e) => {
        e.stopPropagation();
        onClick(e.currentTarget.dataset.email);
      }}
    >
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] font-[600] text-[0.7rem] text-white  rounded-[50%] p-3 w-[32px] h-[32px] flex items-center justify-center">
        AM
      </div>
      <div>
        <h3 className="text-[0.875rem]">{name.name}</h3>
        <span className="text-[#737373] text-[0.75rem]">{name.email}</span>
      </div>
    </div>
  );
}
