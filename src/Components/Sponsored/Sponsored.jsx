import brand1 from "../../assets/company1.png";

const Sponsored = () => {
    return (
        <div className="bg-white p-12">
            <h1 className="text-center text-4xl text-black font-bold">Our sponsored</h1>
            <div className="divider mx-20"></div>
            <div className="flex justify-center items-center">
                <div className="mt-6 md:grid grid-cols-2 md:grid-cols-1 justify-center items-center gap-y-10">
                    <img className="" src={brand1} alt="sponsor" width={158} height={48} />
                </div>
            </div>
        </div>
    );
};

export default Sponsored;