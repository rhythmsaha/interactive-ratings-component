function RateButton({ value, onClick, selectedRate }) {
    return (
        <button
            className={`rounded-full text-sm  h-12 w-12 sm:h-14 sm:w-14 sm:font-normal transition font-bold ${
                selectedRate === value
                    ? "bg-orange-500 text-white "
                    : "bg-gray-700 text-gray-400 hover:bg-gray-500 hover:text-white"
            }`}
            onClick={() => {
                onClick(value);
            }}
        >
            {value}
        </button>
    );
}

export default RateButton;
