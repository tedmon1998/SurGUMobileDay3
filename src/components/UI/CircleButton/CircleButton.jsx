// import { Link } from "react-router-dom";


function CircleButton({ Icon, description, onClick }) {
    return (
        <div className="icon" onClick={() => onClick(description)}>
            <img src={Icon} alt={description} />
        </div>
    );
}

export default CircleButton;