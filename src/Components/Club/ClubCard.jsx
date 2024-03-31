

const ClubCard = ({ items }) => {
    const { image, title } = items;
    return (
        <div>
            <div className="relative w-76  bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <figure className="overflow-hidden">
                    <img src={image} alt="Shoes" className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-300" />
                </figure>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black opacity-86 text-white">
                    <h2 className="text-2xl font-bold mb-1">{title}</h2>
                    <div className="flex justify-end">
                        <button className="btn btn-primary px-4 py-1 hover:bg-blue-700 rounded-full transition-colors duration-300 ease-in-out">
                            More Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubCard;