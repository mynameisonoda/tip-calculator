import React from "react";

function Button(props) {
    return (
        <label className="text-2xl flex border rounded-md py-3 px-4 items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 bg-[#00494d] shadow-sm text-white cursor-pointer">
            <input type="radio" name="size-choice" value={props.percent_value} className="sr-only" />
            <span>{props.percent_text}</span>
            <span className="pointer-events-none absolute rounded-md" aria-hidden="true"></span>
        </label>
    );
}

export default Button;