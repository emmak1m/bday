import React from 'react';
import { useNavigate } from 'react-router-dom';

function FinalPage() {
    const navigate = useNavigate();
    return (
        <div className="app-bg">
            <div className="card">
                <div className="card-text">
                    We all love you, you are now old
                </div>
                <button className="continue-btn" onClick={() => navigate('/')}>restart this amazing gift</button>
            </div>
        </div>
    );
}

export default FinalPage; 