import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from './images/image1.jpg';

function Page1() {
    const navigate = useNavigate();
    return (
        <div className="app-bg">
            <div className="card">
                <img src={image1} alt="image 1" className="card-image" />
                <div className="card-caption">This little demonic dog loves you.</div>
                <button className="continue-btn" onClick={() => navigate('/page2')}>
                    continue
                </button>
            </div>
        </div>
    );
}

export default Page1; 