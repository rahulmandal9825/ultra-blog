import React from "react";
import {handleGithublogin} from "../../../lib/actions";
import {Loginform} from "../../../components/Loginform";
import Link from "next/link";

const Loginpage = () => {
    return (
        <div className="flex flex-col justify-between gap-3 w-[40%] h-[350px] border-2 p-5 rounded-2xl  border-gray-300 self-center shadow-xl">
          <div className=" self-center text-2xl mb-3 font-bold">Login</div>
            <Loginform />
            <form action={handleGithublogin} className="">
                <button className="bg-gray-600 text-white w-full p-2 rounded-lg">Login with Github</button>
            </form>
            <div className="m-2"><Link href="/Signup">
        {"Don't have an account?"} <b>Register</b>
      </Link></div>
        </div>
    );
};

export default Loginpage;
