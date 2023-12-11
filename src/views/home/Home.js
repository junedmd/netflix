import { useState } from "react"
import "./Home.css"
import I18n from "./../../utils/i18n"
export default function Home() {
  const [lang, setLan] = useState("en")

  return (
    <>

      <div className="Cards">

        

        <h2> {I18n("first")}</h2>

        <h3>{I18n("second")}</h3>

        <h3> {I18n("third")}</h3>
        <h1>juned</h1>

      </div>

      <select
      
      defaultValue={localStorage.getItem("lang")}
       onChange={(e) => {
        localStorage.setItem("lang", e.target.value);
        window.location.reload();
      
      }} className='dropdown'>
        <option value={"en"}>English</option>
        <option value={"hi"}>hindi</option>
        <option value={"mr"}>marathi</option>
      </select>

    </>
  )

}
