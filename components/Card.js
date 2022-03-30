const Card = ({ children }) => {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-800 p-6 rounded-2xl shadow-lg">
            {children}
        </div>
    );
};

export default Card;
