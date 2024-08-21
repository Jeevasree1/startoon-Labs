import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="patient-container">
            <div className="patient-header">
                <h2>View patient</h2>
            </div>
            <div className="patient-info">
                <div className="patient-name">
                    <h3>S.Meena, F/23</h3>
                    <p>Patient ID: 87 20200727153457</p>
                </div>
                <div className="patient-avatar">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                </div>
            </div>
            <div className="goal-container">
                <div className="goal-header">Goal reached</div>
                <div className="progress-circle">
                    <div className="circle-background">
                        <div className="circle">
                            <div className="circle-inner">
                                <span>40%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="metrics">
                    <div className="metric">
                        <p>EMG</p>
                        <div className="green-box"></div>
                    </div>
                    <div className="metric">
                        <p>ROM</p>
                        <div className="red-box"></div>
                    </div>
                </div>
            </div>
            <div className="patient-details">
                <p><strong>Phone no.: </strong>8022334455</p>
                <p><strong>Mail ID: </strong>meenarabinsachin2@gmail.com</p>
                <p><strong>Affected side: </strong>Bilateral</p>
                <p><strong>Condition: </strong>Ortho</p>
                <p><strong>Speciality: </strong>Osteoarthritis</p>
                <div className="medical-history">
                    <p><strong>Medical history: </strong>Hypertension, DM, Hypothyroidism</p>
                </div>
            </div>
        </div>
    );
};

export default App;
