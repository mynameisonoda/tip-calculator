import React, { useState } from "react";
import RadioButton from "./RadioButton";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faSolid } from '@fortawesome/fontawesome-svg-core/import.macro';

function App() {

    //Handle bill amount, selected tip amount, and number of people
    const defaultBillInfo = {
        billAmount: "",
        selectedTip: "",
        numOfPeople: "",
    };
    const [billInfo, setBillInfo] = useState(defaultBillInfo);

    function handleChange(event) {
        const { name, value } = event.target;

        switch (name) {
            case "bill":
                setBillInfo(prevValue => {
                    return {
                        billAmount: value,
                        selectedTip: prevValue.selectedTip,
                        numOfPeople: prevValue.numOfPeople,
                    }
                })
                break;
            case "tipPercent":
                setBillInfo(prevValue => {
                    return {
                        billAmount: prevValue.billAmount,
                        selectedTip: value,
                        numOfPeople: prevValue.numOfPeople,
                    }
                })
                break;
            case "peopleCount":
                setBillInfo(prevValue => {
                    return {
                        billAmount: prevValue.billAmount,
                        selectedTip: prevValue.selectedTip,
                        numOfPeople: value,
                    }
                })
                break;
        };
    };

    // Handle bill calculation and split
    const defaultPaymentInfo = {
        tipAmount: "$0.00",
        splitPayAmount: "$0.00",
    }
    const [payment, setPayment] = useState(defaultPaymentInfo);

    function handleCalculation() {
        // Calculate tip per person and overall payment per person
        const tip = billInfo.selectedTip * billInfo.billAmount;
        const dividedTip = `$${(tip / billInfo.numOfPeople).toFixed(2)}`;
        const paymentPerPerson = `$${((Number(billInfo.billAmount) + tip) / Number(billInfo.numOfPeople)).toFixed(2)}`;

        setPayment(() => {
            return {
                tipAmount: dividedTip,
                splitPayAmount: paymentPerPerson,
            };
        });
    }

    function resetValues() {
        const billForm = document.getElementById("bill-form");

        billForm.reset();

        // Visually, form clears with above method but the values does not reset, below sets the values back to the default values
        setBillInfo(() => { return defaultBillInfo });
        setPayment(() => { return defaultPaymentInfo });
    }

    return (
        <div className="container relative border rounded-3xl mx-auto my-24 px-8 py-8 bg-white grid grid-cols-2 gap-8">
            <section name="calculations">
                <form id="bill-form">
                    <section name="bill-section" className="grid grid-rows-2 py-8">
                        <label htmlFor="bill" className="py-2">Bill</label>
                        <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
                        <input type="text" id="bill" name="bill" placeholder="0" className="rounded-md text-right pr-3 bg-[#E2F3F3]" onChange={handleChange} />
                    </section>

                    <section name="tip-selection">
                        <label htmlFor="">Select Tip%</label>
                        <div name="tip-selection-group" className="container grid grid-rows-2 grid-cols-3 gap-2 text-9xl">

                            <RadioButton
                                percent_text="5%"
                                percent_value="0.05"
                                handleChange={handleChange}
                            />
                            <RadioButton
                                percent_text="10%"
                                percent_value="0.1"
                                handleChange={handleChange}
                            />
                            <RadioButton
                                percent_text="15%"
                                percent_value="0.15"
                                handleChange={handleChange}
                            />
                            <RadioButton
                                percent_text="25%"
                                percent_value="0.25"
                                handleChange={handleChange}
                            />
                            <RadioButton
                                percent_text="50%"
                                percent_value="0.5"
                                handleChange={handleChange}
                            />
                            <input type="text" name="tipPercent" placeholder="Custom %" className="flex border rounded-md py-3 px-4 text-sm text-center bg-[#E2F3F3] hover:bg-gray-50 border-transparent text-[#00494d] placeholder-[#00494d] cursor-pointer" />
                        </div>
                    </section>

                    <section className="grid grid-rows-2 py-8">
                        <label htmlFor="people-count" className="py-2">Number of People</label>
                        <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
                        <input type="text" name="peopleCount" id="peopleCount" placeholder="0" className="rounded-md text-right pr-3 bg-[#E2F3F3]" onChange={handleChange} />
                    </section>
                </form>
            </section>

            <section name="results" className="grid grid-rows-3 bg-[#00494d] text-white px-4 py-8 rounded-lg">
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-1">
                        <p>Tip Amount</p>
                        <p>/ person</p>
                    </div>
                    <p className="row-span-2 text-5xl text-teal-400">{payment.tipAmount}</p>
                </div>

                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-1">
                        <p>Total</p>
                        <p>/ person</p>
                    </div>
                    <p className="row-span-2 text-5xl text-teal-400">{payment.splitPayAmount}</p>

                </div>
                <div name="button-container" className="grid grid-cols-2">
                    <button className="mx-auto bg-teal-400 text-[#00494d] rounded-lg w-8/12 h-1/2 px-4 py-2" onClick={handleCalculation}>Calculate</button>
                    <button className="mx-auto bg-teal-400 text-[#00494d] rounded-lg w-8/12 h-1/2 px-4 py-2" onClick={resetValues}>Reset</button>
                </div>
            </section>
        </div>


    );
}

export default App;