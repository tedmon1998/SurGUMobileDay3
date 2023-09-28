import { useEffect } from "react";
import { useSelector } from "react-redux";

function FacebookPage() {
    const newColor = useSelector(state => state.rgb.color)
    useEffect(() => {
        console.log('newColor :', newColor);
    }, [])

    return (
        <h1>FacebookPage</h1>
    );
}

export default FacebookPage;