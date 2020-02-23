import React from "react";

export const CustomRow = (props) => <tr key={props.idx}>
    {props.cols.map(col => {
        return col;
    })}
</tr>;