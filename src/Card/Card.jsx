import './Card.css';

const Card = ({ item }) => {
    const { name, image, ID, section, level } = item;
    return (
        <div className="card mx-auto">
            <div className="imgBox">
                <img src={image} alt="" />
            </div>
            <div className="content">
                <div className="details">
                    <h2>Name:{name} <br /> <span>UX</span> </h2>
                    <div className="data">
                        <h3>Roll/ID <br /> <span>{ID}</span> </h3>
                        <h3>Section <br /> <span>{section}</span> </h3>
                        <h3>Role: <br /> <span>Level:{level}</span> </h3>
                    </div>
                    <div className="actionBtn">
                        <button>Facebook</button>
                        <button>Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;