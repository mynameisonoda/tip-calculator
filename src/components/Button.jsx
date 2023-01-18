import React from "react";

function Button(props) {

    return (
        <button type="button" name="tipPercent" value={props.percent_value} onClick={props.handleChange} className="flex border rounded-md py-3 px-4 items-center justify-center text-2xl font-medium bg-[#00494d] hover:bg-[#c5e4e7] hover:text-[#00494d] focus:bg-teal-400 text-white cursor-pointer">{props.percent_text}</button>
    );
}

export default Button;