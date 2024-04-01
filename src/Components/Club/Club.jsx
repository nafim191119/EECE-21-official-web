import { useEffect, useState } from "react";
import ClubCard from "./ClubCard";

const Club = () => {
    const [clubInfo, setclubInfo] = useState([]);
    useEffect(() => {
        fetch('clubInfo.json')
            .then(res => res.json())
            .then(data => setclubInfo(data))
    }, [])
    return (

        <div className="mx-6 mt-8">
            <div className="bg-blue-600 p-2 rounded-0 rounded-t-lg text-white ">
                <h1 className="text-2xl md:text-3xl uppercase text-center font-bold mb-2 underline">Clubs and Activites</h1>
                <p className="text-md md:text-xl text-center">Unlock the Power of Engineering Networks and Rewards</p>
            </div>
            <div className="mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-4 gap-4">
                {
                    clubInfo.map(item => <ClubCard key={item._id} items={item}> </ClubCard>)
                }
            </div>
        </div>
    );
};

export default Club;