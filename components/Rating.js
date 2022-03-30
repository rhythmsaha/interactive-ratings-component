import Image from "next/image";
import { useState } from "react";
import RateButton from "./RateButton";

function Rating({ onSubmit }) {
    const [selectedRate, setSelectedRate] = useState(0);

    const selectRateHandler = (value) => {
        setSelectedRate(value);
    };

    const submitHandler = () => {
        onSubmit(selectedRate);
    };

    return (
        <div className="">
            <div>
                <span className="bg-gray-700 flex items-center justify-center h-10 w-10 rounded-full sm:scale-110">
                    <Image
                        src={"/images/icon-star.svg"}
                        alt="star-icon"
                        height={12}
                        width={12}
                    />
                </span>
            </div>

            <div className="mt-4">
                <h2 className="text-white text-xl font-semibold tracking-wider">
                    How did we do?
                </h2>

                <p className="text-gray-400 text-base mt-2 tracking-wide">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>

            <div className="mt-6 flex justify-between gap-1 ">
                <RateButton
                    value={1}
                    onClick={selectRateHandler}
                    selectedRate={selectedRate}
                />
                <RateButton
                    value={2}
                    onClick={selectRateHandler}
                    selectedRate={selectedRate}
                />
                <RateButton
                    value={3}
                    onClick={selectRateHandler}
                    selectedRate={selectedRate}
                />
                <RateButton
                    value={4}
                    onClick={selectRateHandler}
                    selectedRate={selectedRate}
                />
                <RateButton
                    value={5}
                    onClick={selectRateHandler}
                    selectedRate={selectedRate}
                />
            </div>

            <div className="mt-6">
                <button
                    className="bg-orange-500 w-full p-2 text-white font-semibold text-sm rounded-full sm:tracking-widest sm:py-3 hover:text-orange-500 hover:bg-white transition duration-200"
                    onClick={submitHandler}
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
}

export default Rating;
