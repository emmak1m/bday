import React from 'react';
import { useNavigate } from 'react-router-dom';
import image4 from './images/image4.jpg';

function Page4() {
    const navigate = useNavigate();
    return (
        <div className="app-bg">
            <div className="card">
                <img src={image4} alt="image 4" className="card-image" />
                <div className="card-caption">Ehhh, your other kids love you too I guess.</div>
                <button className="continue-btn" onClick={() => navigate('/page5')}>
                    continue
                </button>
            </div>
        </div>
    );
}

export default Page4; 