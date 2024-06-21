
import Link from "next/link";
import React from "react";
import Navlink from "./Navlink";
import Links from "./Links";
import {auth} from "../../lib/auth";
import {handleLogout} from "../../lib/actions";
import Search from "../Search";






const Navbar = async () => {

    const session = await auth();
    return (
        <div className="p-3 mb-10 flex justify-between shadow-lg rounded-xl mt-3">
            <Link href="/" className="text-xl font-semibold py-1">
                Ulra Blog
            </Link>
            <Navlink />
            <div className="flex gap-3">
                <Search/>
                {/* <Swich /> */}
                {session?.user ? (
                    <>
                        <form action={handleLogout}>
                            <button className="bg-red-500  px-2 py-2 rounded-xl font-semibold self-center text-white">
                                Logout
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="py-1">
                        <Link
                            href="/login"
                            className="bg-blue-500 px-4 py-3 rounded-xl font-semibold self-center  text-white"
                        >
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
