import { ColorContext } from "context";
import { useContext, useEffect } from "react";

function TwitterPage() {

    const { color, setColor } = useContext(ColorContext)

    useEffect(() => {
        console.log('color :', color);
    }, [])


    return (
        <h1>TwitterPage</h1>
    );
}

export default TwitterPage;