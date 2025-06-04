import React from 'react';
import { useNavigate } from 'react-router-dom';
import image3 from './images/image3.jpg';

function Page3() {
    const navigate = useNavigate();
    return (
        <div className="app-bg">
            <div className="card">
                <img src={image3} alt="image 3" className="card-image" />
                <div className="card-caption">A photo of your favorite child.</div>
                <button className="continue-btn" onClick={() => navigate('/page4')}>
                    continue
                </button>
            </div>
        </div>
    );
}

export default Page3; 