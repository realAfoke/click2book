import AdminLeftPanel from "../components/AdminLeftPanel";
import MainAdminBoard from "../components/MainAdminBoard";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
export async function loader() {
  try {
    const request = await fetch(
      "https://automation-bot.up.railway.app/appointment/"
    );
    const response = await request.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}
export default function AdminPanel() {
  const [search, setSearch] = useState("");
  const adminLoader = useLoaderData();

  const [searchResult, setSearchResult] = useState([]);

  function searchAppointment(head, searchParams) {
    console.log(searchParams);
    let searchParam = new RegExp(searchParams.trim(), "i");
    let results = [];

    for (let x = 0; x < head.length; x++) {
      if (searchParam.test(head[x].owner.name.trim())) {
        results.push(head[x]);
      }
    }
    console.log([...new Set(results)]);
    return [...new Set(results)];
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const reult = searchAppointment(adminLoader, search);
      setSearchResult(reult);
      console.log(searchResult);
    }, 500);
    return () => clearTimeout(timeOut);
  }, [search]);
  return (
    <>
      <AdminLeftPanel onChange={setSearch} search={search} />
      <MainAdminBoard data={searchResult || adminLoader} />
    </>
  );
}
