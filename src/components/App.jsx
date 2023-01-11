import React, { useState } from "react";
import Button from "./Button";

function App() {

    const defaultValues = {
        billAmount: "0",
        selectedTip: "0",
        numOfPeople: "0",
        tipAmount: "0",
        splitPayAmount: "0",
    };
    const [value, setValue] = useState(defaultValues);

    function handleChange(event) {

        let inputName = event.target.name;
        let inputValue = event.target.value;

        switch (inputName) {
            case "bill":
                setValue(prevValue => {
                    return {
                        billAmount: inputValue,
                        selectedTip: prevValue.selectedTip,
                        numOfPeople: prevValue.numOfPeople,
                    }
                })
                break;
            case "tipPercent":
                setValue(prevValue => {
                    return {
                        billAmount: prevValue.billAmount,
                        selectedTip: inputValue,
                        numOfPeople: prevValue.numOfPeople,
                    }
                })
                break;
            case "peopleCount":
                setValue(prevValue => {
                    return {
                        billAmount: prevValue.billAmount,
                        selectedTip: prevValue.selectedTip,
                        numOfPeople: inputValue,
                    }
                })
                break;
        }
        console.log(value);
    };

    function handleCalculation() {
        setValue(prevValue => {
            return {
                tipAmount: (prevValue.selectedTip*prevValue.billAmount)/prevValue.numOfPeople,
                splitPayAmount: (prevValue.billAmount+prevValue.tipAmount)/prevValue.numOfPeople,
            }
        })
        console.log(value);
    }

    return (
        <div className="container relative border rounded-md mx-auto my-12 px-4 py-4 bg-slate-50 grid grid-cols-2 gap-8">
            <section name="calculations">
                <form action="">
                    <section name="bill-section" className="grid grid-rows-2 py-8">
                        <label htmlFor="bill" className="py-2">Bill</label>
                        <input type="text" name="bill" placeholder="0" className="rounded-md text-right pr-3" onChange={handleChange} />
                    </section>

                    <section name="tip-selection">
                        <label htmlFor="">Select Tip%</label>
                        <div name="tip-selection-group" className="container grid grid-rows-2 grid-cols-3 gap-2 text-9xl">

                            <Button
                                percent_text="5%"
                                percent_value="0.05"
                                handleChange={handleChange}
                            />
                            <Button
                                percent_text="10%"
                                percent_value="0.1"
                                handleChange={handleChange}
                            />
                            <Button
                                percent_text="15%"
                                percent_value="0.15"
                                handleChange={handleChange}
                            />
                            <Button
                                percent_text="25%"
                                percent_value="0.25"
                                handleChange={handleChange}
                            />
                            <Button
                                percent_text="50%"
                                percent_value="0.5"
                                handleChange={handleChange}
                            />
                            <label className="flex border rounded-md py-3 px-4 items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 bg-[#00494d] shadow-sm text-white cursor-pointer">
                                <input type="text" name="tipPercent" className="sr-only" />
                                <span>Custom</span>
                                <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>

                        </div>
                    </section>
                    <section className="grid grid-rows-2 py-8">
                        <label htmlFor="people-count" className="py-2">Number of People</label>
                        <input type="text" name="peopleCount" placeholder="0" className="rounded-md text-right pr-3" onChange={handleChange} />
                    </section>

                </form>
            </section>

            <section name="results" className="grid grid-rows-3 bg-[#00494d] text-white px-4 py-8 rounded-lg">
                <div className="grid grid-cols-2">
                    <p>Tip Amount</p>
                    <p className="row-span-2 text-5xl">$0.00</p>
                    <p>/ person</p>
                </div>

                <div className="grid grid-cols-2">
                    <p>Total</p>
                    <p className="row-span-2 text-5xl">$0.00</p>
                    <p>/ person</p>
                </div>
                <button className="mx-auto bg-teal-400 rounded-lg w-8/12 h-1/2 px-4 py-2" onClick={handleCalculation}>Calculate</button>
                <button className="mx-auto bg-teal-400 rounded-lg w-8/12 h-1/2 px-4 py-2">Reset</button>
            </section>
        </div>


    );
}

export default App;