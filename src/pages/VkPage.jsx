import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function VkPage() {

    const location = useLocation()

    useEffect(() => {
        console.log('theme :', location.state?.them);
    }, [])


    return (
        <h1>VkPage</h1>
    );
}

export default VkPage;