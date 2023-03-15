import React from "react"
import SocialLogin from "./SocialLogins"
import EmailPassLogin from "./EmailPassLogin"
import UserApprovel from "./UserApprovel"

const LoginTypes=()=>{
    return(
        <div className="flex flex-col">
            <SocialLogin/>
            <hr className="h-px w-full bg-[#0000000f]" />
            <EmailPassLogin/>
            <hr className="h-px w-full bg-[#0000000f]" />
            <UserApprovel/>
        </div>
    )
}
export default LoginTypes