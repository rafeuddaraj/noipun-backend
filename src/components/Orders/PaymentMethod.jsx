import React, { useState } from "react";

export default function PaymentMethod({value}) {
    const [selected, setSelected] = useState("");

    const handleOptionChange = (e) => {
        setSelected(e.target.value);
    };

    return (
        <div className="flex border border-gray-400 py-2">
            <input
                type="radio"
                name="payment"
                id={value}
                className="mt-5 mx-3 rounded-full block text-lg h-5 w-5"
                value={value}
                checked={selected === value}
                onChange={handleOptionChange}
            />
            <label htmlhtmlFor={value}>
                <img
                    src="https://www.rokomari.com/static/200/images/bkash.png"
                    height="20px"
                    alt="Pay by bKash"
                />
                <p className="w-full">Pay from your bKash account</p>
            </label>
        </div>
    );
}
