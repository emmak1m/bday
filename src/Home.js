import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div className="app-bg">
            <div className="card">
                <div className="card-text">
                    Hello Mother,<br />
                    Fat Woman,<br />
                    Ajumma,<br />
                    Old Lady,<br />
                    etc.
                </div>
                <button className="continue-btn" onClick={() => navigate('/Page1')}>
                    continue
                </button>
            </div>
        </div>
    );
}

export default Home; 