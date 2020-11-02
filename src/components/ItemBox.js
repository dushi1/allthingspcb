import React from 'react'
import "./All.css"

export const ItemBox = (props) => {
    return (
        <div className="itembox">
            <div style={{
                color: "black", padding: "20px",
                alignSelf: "center", fontSize: "1.5rem"
            }}>{props.name}</div>
            <img src={props.img} className="images" alt="" />
        </div>
    )
}
