import React from 'react';
import { useNavigate } from 'react-router-dom';
import image7 from './images/image7.jpg';

function Page7() {
    const navigate = useNavigate();
    return (
        <div className="app-bg">
            <div className="card">
                <img src={image7} alt="image 7" className="card-image" />
                <div className="card-caption">Here is a photo of Appa.</div>
                <button className="continue-btn" onClick={() => navigate('/final')}>continue</button>
            </div>
        </div>
    );
}

export default Page7; 