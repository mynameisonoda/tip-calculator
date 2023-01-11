import React, { useState } from "react";
import RadioButton from "./RadioButton";

function App() {

    //Handle bill amount, selected tip amount, and number of people
    const [billInfo, setBillInfo] = useState({
        billAmount: "",
        selectedTip: "",
        numOfPeople: "",
    });
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

    // NEXT: WORK ON RESET SCRIPT AND AESTHETICS
    function resetValues() {
        document.getElementsByName("bill").value="0";
        document.getElementsByName("tipPercent").value="0";
        setPayment(() => {
            return defaultPaymentInfo;
        });
        console.log(billInfo);
        console.log(payment)
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
                    <p className="row-span-2 text-5xl text-teal-400">{payment.tipAmount}</p>
                    <p>/ person</p>
                </div>

                <div className="grid grid-cols-2">
                    <p>Total</p>
                    <p className="row-span-2 text-5xl text-teal-400">{payment.splitPayAmount}</p>
                    <p>/ person</p>
                </div>
                <button className="mx-auto bg-teal-400 text-[#00494d] rounded-lg w-8/12 h-1/2 px-4 py-2" onClick={handleCalculation}>Calculate</button>
                <button className="mx-auto bg-teal-400 text-[#00494d] rounded-lg w-8/12 h-1/2 px-4 py-2" onClick={resetValues}>Reset</button>
            </section>
        </div>


    );
}

export default App;