import React from 'react'
import "./All.css"

export const ItemBox = (props) => {
    return (
        <div className="itembox">
            <div style={{
                color: "black", padding: "20px",
                alignSelf: "center", fontSize: "1rem"
            }}>{props.name}</div>
            <img src={props.img} className="images" />
        </div>
    )
}
