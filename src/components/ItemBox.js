import React from 'react'
import "./All.css"

export const ItemBox = (props) => {
    return (
        <div className="itembox">
            <div style={{
                color: "black", padding: "0px",
                alignSelf: "center", fontSize: "1.5rem",

                // boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.75)",
            }}>{props.name}</div>
            <img src={props.img} className="images" alt="" />
        </div>
    )
}
