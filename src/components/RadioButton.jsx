import React from "react";

function RadioButton(props) {
    return (
        <label className="text-2xl flex border rounded-md py-3 px-4 items-center justify-center text-sm font-medium bg-[#00494d] hover:bg-[#c5e4e7] hover:text-[#00494d] peer-checked:bg-teal-400 text-white cursor-pointer">
            <input type="radio" name="tipPercent" value={props.percent_value} className="sr-only" onChange={props.handleChange} />
            <span>{props.percent_text}</span>
            <span className="pointer-events-none absolute rounded-md"></span>
        </label>
    );
}

export default RadioButton;