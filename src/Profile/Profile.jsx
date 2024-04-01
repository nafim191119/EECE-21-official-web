import ProfileItem from "../ProfileItem/ProfileItem";


const Profile = () => {
    return (
        <div>
            <div className="mt-4 rounded-0 rounded-t-lg text-white ">
                <h1 className="text-2xl md:text-5xl uppercase text-center font-bold mb-2 underline">EECE Batch-21</h1>
                <p className="text-md md:text-xl text-center">Let's Introduce...</p>
            </div>
            <ProfileItem></ProfileItem>
        </div>
    );
};

export default Profile;