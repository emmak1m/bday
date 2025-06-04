import React from 'react';
import { useNavigate } from 'react-router-dom';
import image6 from './images/image6.jpg';

function Page6() {
    const navigate = useNavigate();
    return (
        <div className="app-bg">
            <div className="card">
                <img src={image6} alt="image 6" className="card-image" />
                <div className="card-caption">Thanks for always being there for us.</div>
                <button className="continue-btn" onClick={() => navigate('/page7')}>
                    continue
                </button>
            </div>
        </div>
    );
}

export default Page6; 