export default function DivListRow({ name }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] font-[600] text-[0.7rem] text-white  rounded-[50%] p-3 w-[32px] h-[32px] flex items-center justify-center">
        AM
      </div>
      <div>
        <h3 className="text-[0.875rem]">{name.name}</h3>
        <span className="text-[#737373] text-[0.75rem]">{name.email}</span>
        {/* <h3>Alice Martinez</h3>
        <span>alice@example.com</span> */}
      </div>
    </div>
  );
}
