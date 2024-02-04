import React from "react";


export default function Box({children}) {

    return(
        <div className=" w-60 h-16 xl:w-72 2xl:w-80 rounded-xl my-2 flex flex-col justify-center items-center " style={{backgroundColor:'white'}}>
            {children}

        </div>
    )
}