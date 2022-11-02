import React from "react";

function App() {
    return (

        <div className="container relative border rounded-md mx-auto my-12 px-4 py-4 bg-slate-50 grid grid-cols-2 gap-8">
            <section name="calculations">
                <form action="">
                    <section name="bill-section" className="grid grid-rows-2 py-8">
                        <label htmlFor="bill" className="py-2">Bill</label>
                        <input type="text" name="bill" placeholder="0" className="rounded-md text-right pr-3"/>
                    </section>

                    <section name="tip-selection">
                        <label htmlFor="">Select Tip%</label>
                        <div name="tip-selection-group" className="container grid grid-rows-2 grid-cols-3 gap-2">

                            <label className="flex border rounded-md py-3 px-4 items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 bg-[#00494d] shadow-sm text-white cursor-pointer">
                                <input type="radio" name="size-choice" value="0.05" className="sr-only" />
                                <span>5%</span>
                                <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                            <label className="flex border rounded-md py-3 px-4 items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 bg-[#00494d] shadow-sm text-white cursor-pointer">
                                <input type="radio" name="size-choice" value="0.1" className="sr-only" />
                                <span>10%</span>
                                <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                            <label className="flex border rounded-md py-3 px-4 items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 bg-[#00494d] shadow-sm text-white cursor-pointer">
                                <input type="radio" name="size-choice" value="0.15" className="sr-only" />
                                <span>15%</span>
                                <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                            <label className="flex border rounded-md py-3 px-4 items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 bg-[#00494d] shadow-sm text-white cursor-pointer">
                                <input type="radio" name="size-choice" value="0.25" className="sr-only" />
                                <span>25%</span>
                                <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                            <label className="flex border rounded-md py-3 px-4 items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 bg-[#00494d] shadow-sm text-white cursor-pointer">
                                <input type="radio" name="size-choice" value="0.5" className="sr-only" />
                                <span>50%</span>
                                <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>
                            <label className="flex border rounded-md py-3 px-4 items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none sm:flex-1 bg-[#00494d] shadow-sm text-white cursor-pointer">
                                <input type="text" name="size-choice" className="sr-only" />
                                <span>Custom</span>
                                <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                            </label>

                        </div>
                    </section>
                    <section className="grid grid-rows-2 py-8">
                        <label htmlFor="people-count" className="py-2">Number of People</label>
                        <input type="text" name="people-count" placeholder="0" className="rounded-md text-right pr-3"/>
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
                <button className="mx-auto bg-teal-400 rounded-lg w-10/12 px-8 py-1">Reset</button>
            </section>
        </div>


    );
}

export default App;