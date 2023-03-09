import React from "react"
const Container = ({children}:{children:any})=>{
    return(
        <div className="w-full">
 <div className="bg-[#F0F5FF] py-7 flex px-5 flex-col gap-7">
          <div className="flex justify-between items-center">
            <span>image</span>
            <div className="flex gap-4 items-center">
              <span
                className="cursor-pointer"
              >
                view full screen
              </span>
            </div>
          </div>
        {children}
          <div className="flex justify-center">
          </div>
        </div>
        </div>
    )
}
export default Container