import brand1 from "../../assets/company1.png";

const Sponsored = () => {
    return (
        <div className="mx-2">
            <h1 className="text-center text-xl md:text-2xl text-white font-bold underline uppercase">Our sponsored</h1>
            <div className="divider px-40"></div>
            <div className="grid grid-cols-2 md:flex justify-center items-center gap-4">
                <div className="bg-white p-4 rounded">
                    <img className="" src={brand1} alt="sponsor" width={158} height={48} />
                </div>
            </div>
        </div>
    );
};

export default Sponsored;