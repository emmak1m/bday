import React from 'react';
import { useNavigate } from 'react-router-dom';
import image2 from './images/image2.jpg';

function Page2() {
    const navigate = useNavigate();
    return (
        <div className="app-bg">
            <div className="card">
                <img src={image2} alt="image 2" className="card-image" />
                <div className="card-caption">This little bunny is in bunny heaven telling all the other bunnies about you.</div>
                <button className="continue-btn" onClick={() => navigate('/page3')}>
                    continue
                </button>
            </div>
        </div>
    );
}

export default Page2; 