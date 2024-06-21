import Postform from "../../components/Postform";
import PostList from "../../components/PostList";
import GetUsers from "../../components/GetUsers";
import {auth} from "../../lib/auth";
import React from "react";

const adminpage = async () => {
    const session = await auth();
    return (
        <>
            <div className="flex justify-between ">
                <div className="w-[50%]">
                    <Postform userId={session.user.id} />
                </div>
                <div className="flex w-[50%] flex-col gap-5">
                    <PostList userId={session.user.id} />
                    <GetUsers />
                </div>
            </div>
        </>
    );
};

export default adminpage;
