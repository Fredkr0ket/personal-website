import React from "react";
import GithubButton from "../button/GithubButton";
import LinkedinButton from "../button/LinkedinButton";

const Navbar = () => {

  return (
    <div className={`max-w-[100%] mt-8 flex flex-column items-stretch justify-between mb-4`}>
      <div></div>
      <div className="flex flex-row self-center content-between gap-3 mr-5">
      <LinkedinButton url={"https://www.linkedin.com/in/ferdo-van-balen-441879241/"} />
      <GithubButton url={"https://github.com/Fredkr0ket"} />
      </div>
    </div>
  )
}

export default Navbar