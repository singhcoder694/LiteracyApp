import React from "react";


export default function Box({children}) {

    return(
        <div className=" w-44 h-16 rounded-xl m-6 flex flex-col justify-center items-center " style={{backgroundColor:'#ABFFFF'}}>
            {children}

        </div>
    )
}