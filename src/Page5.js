import React from 'react';
import { useNavigate } from 'react-router-dom';
import image5 from './images/image5.jpg';

function Page5() {
    const navigate = useNavigate();
    return (
        <div className="app-bg">
            <div className="card">
                <img src={image5} alt="image 5" className="card-image" />
                <div className="card-caption">We love you and your big forehead.</div>
                <button className="continue-btn" onClick={() => navigate('/page6')}>
                    continue
                </button>
            </div>
        </div>
    );
}

export default Page5; 