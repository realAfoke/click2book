import AdminLeftPanel from "../components/AdminLeftPanel";
import MainAdminBoard from "../components/MainAdminBoard";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import AppointmentDetail from "../components/AppointmentDetail";
export async function loader() {
  try {
    const request = await fetch(`${import.meta.env.VITE_API_URL}/appointment/`);
    const response = await request.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}
export default function AdminPanel() {
  const [search, setSearch] = useState("");
  const adminLoader = useLoaderData();
  let reverse = [...adminLoader].reverse();

  const [searchResult, setSearchResult] = useState([]);

  function searchAppointment(head, searchParams) {
    let searchParam = new RegExp(searchParams.trim(), "i");
    let results = [];

    for (let x = 0; x < head?.length; x++) {
      if (searchParam.test(head[x].owner.name.trim())) {
        results.push(head[x]);
      }
    }
    return [...new Set(results)];
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const reult = searchAppointment(reverse, search);
      setSearchResult(reult);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [search]);
  return (
    <>
      <div className="relative">
        <AdminLeftPanel onChange={setSearch} search={search} />
        <MainAdminBoard data={searchResult} />
      </div>
    </>
  );
}
