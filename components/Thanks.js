import React from "react";
import Image from "next/image";

const Thanks = ({ selected }) => {
    return (
        <div className="py-2 space-y-8">
            <div className="relative w-full h-24">
                <Image
                    src="/images/illustration-thank-you.svg"
                    alt="Thankyou"
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            <div className="bg-gray-700 text-orange-500 text-center p-4 rounded-full">
                You have seleced {selected} out of 5
            </div>

            <div className="text-center py-4">
                <h2 className="text-white text-3xl font-semibold tracking-wider">
                    Thank you!
                </h2>
                <p className="mt-3 text-gray-400 text-sm tracking-wide">
                    We appreciate you taking the time to give a rating. If you
                    ever need more support, don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    );
};

export default Thanks;
