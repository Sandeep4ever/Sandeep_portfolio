import React, { useContext } from 'react'
import { ThemeContext } from '../../context';
import './toggle.css';

const Toggle = () => {
    let sunUrl = "https://image.similarpng.com/very-thumbnail/2020/09/Yellow-sun-icon-on-transparent-background-PNG.png";
    let moonUrl = "https://cdn.iconscout.com/icon/free/png-256/moon-1716354-1461199.png";

    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }

    return (
        <div className='t'>
            <img src={moonUrl} alt="" className="t-icon" onClick={handleClick} />
            <img src={sunUrl} alt="" className="t-icon" onClick={handleClick} />
            <div className="t-button" style={{ left: theme.state.darkMode ? 0 : 25 }}>
            </div>
        </div>
    )
}

export default Toggle