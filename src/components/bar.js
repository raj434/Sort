import { useEffect, useState } from 'react';
import './bar.css';
function Bar({ index, length, color, changeArray }) {
    
    const [len,setLen] = useState(length);
    
    useEffect(() => {
        setLen(length);

    }, [length]);


    const colors = [
        ['rgba(g1,90,241,0.5)', 'rgba(g1,90,241,0.2'],
        ['rgba(g1,90,241,1)', 'rgba(g1,90,241,0.5'],
        ['rgba(g1,90,241,0.5)', 'rgba(g1,90,241,0.2'],
    
    ];
    const inputStyle = {
        position: 'relative',
        top: Math.floor(length / 2) - 10,
        width: length,
        left:- Math.floor(length / 2) + 13,
        border: 'none',
        background:'none',
        

    };
   // const barStyle = {
       // height: length
  //  };
    const bottom = {
        transform: `translateY(${200 - length}px) rotateX(-90deg)`,
        backgroundColor: `${colors[0]}`,
        boxShadow: `5px 5px 50px 5px ${colors[1]}`,
        transition: `0.3s`
    };
    const front_back_right_left = {
        height: `${length}px`,
        transform: `translateY(${200 - length}px)`,
        backgroundColor: `${colors[0]}`,
        boxShadow: `5px 5px 50px 5px ${colors[1]}`,
        transition: `0.3s`
            
    };
    const quantity = {
        position: 'relative',
        top:225,
    }
    const handleChange = (e) => {
        let val = e.target.value;
        if (val === '') {
            setLen(0);
            changeArray(index, 0);
        }
        else {
            val = parseInt(val);
            if (val > 200) {
                setLen(200);
                changeArray(index, 200);
            }
            else {
                setLen(val);
                changeArray(index, val);
            }
        }
        
    };
    const Increase = () => {
        if (len < 200) {
            setLen(len + 10);
            changeArray(index, len);
        }
        else {
            setLen(200);
        }
    };
    const Decrease = () => {
        if (len > 0) {
            setLen(len - 5);
            changeArray(index, len);
        } else {
            setLen(0);
        }
    }
    

    return (
        <>
            <div className='bar'>
                <div className='side up'></div>
                <div className='side bottom' style={bottom}></div>
                <div className='side right' >
                <div className='color-bar right-color-bar' style={front_back_right_left}></div>
                </div>
                <div className='side left' >
                <div className='color-bar right-color-bar' style={front_back_right_left}></div>
                </div>
                <div className='side front' >
                    <div className='color-bar front-color-bar' style={front_back_right_left}>
                         <input className='input'
                        type='number'
                        length={len}
                        style={inputStyle}
                        value={len}
                        onChange={handleChange}
                    />
                </div>
                  
                </div>
                <div className='side back'>
                <div className='color-bar back-color-bar' style={bottom}>

                </div>
                <div className='quantity-nav'>
                <div className='quantity-button quantity-up'style={quantity} onClick={Increase}>+</div>
                <div className='quantity-button quantity-down' style={quantity} onClick={Decrease}>-</div>
                </div>
                </div>
        </div>
        </>
    )
    
    
}


export default Bar;