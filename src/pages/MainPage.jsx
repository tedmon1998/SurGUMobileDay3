import '../styles/css/animation.css';
import '../styles/css/animation2.css';
import '../styles/css/main.css';

import Twitter from '../assets/icon/free-icon-twitter-733579 1.png'
import Facebook from '../assets/icon/free-icon-facebook-app-symbol-20837 1.png'
import Vk from '../assets/icon/free-icon-vk-logo-of-social-network-39699 1.png'
import Github from '../assets/icon/free-icon-github-4926624 1.png'
import CircleButton from '../components/UI/CircleButton/CircleButton';
import TtileBlock from '../components/UI/TtileBlock/TtileBlock';
import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ColorContext } from 'context';
import { useDispatch, useSelector } from 'react-redux';
import { newColor } from 'components/redux/slice/colorSlice';

function MainPage() {
    const { color, setColor } = useContext(ColorContext)
    const defaultColor = useSelector(state => state.rgb.color)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('defaultColor :', defaultColor);
        dispatch(newColor('white'))
        // console.log('color :', color);
        // const language = localStorage.getItem('language')
        // setColor('black')
        // console.log('language :', language);
    }, [])

    const navigate = useNavigate()

    function onClick(link) {
        console.log('link :', link);
        navigate(link, { state: { them: 'dark' } })
    }

    return (
        <div className="App">
            <div className="background" id="background" />
            <div className="wrapper">
                <div className="wrapper__container">
                    <TtileBlock>Security Chief • Cyborg • Test Branch</TtileBlock>
                    <div className="icon-container">
                        <CircleButton onClick={onClick} Icon={Twitter} description="twitter" />
                        <CircleButton onClick={onClick} Icon={Facebook} description="facebook" />
                        <CircleButton onClick={onClick} Icon={Vk} description="vk" />
                        <CircleButton onClick={onClick} Icon={Github} description="github" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage 