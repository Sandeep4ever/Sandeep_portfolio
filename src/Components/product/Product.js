import React, { useRef, useEffect } from 'react';
import "./product.css";
const Product = ({ img, link }) => {
    const circle1Ref = useRef("#130f40");
    const circle2Ref = useRef("#eb4d4b");
    const circle3Ref = useRef("#22a6b3");
    useEffect(() => {
        const colorArr = ["#7ed6df", "#f0932b", "#6ab04c", "#30336b", "#130f40", "#f7b731", "#3867d6", "#d1d8e0", "#eb3b5a"];
        let i = 0;
        setInterval(() => {
            if (i === colorArr.length - 1) {
                i = 0;
            }
            else {
                circle1Ref.current.style.background = colorArr[i];
                circle2Ref.current.style.background = colorArr[i + 1];
                circle3Ref.current.style.background = colorArr[i + 2];
                i++;
            }
        }, 500)
    }, [])

    return (
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle" ref={circle1Ref}></div>
                <div className="p-circle" ref={circle2Ref}></div>
                <div className="p-circle" ref={circle3Ref}></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer" >
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}

export default Product