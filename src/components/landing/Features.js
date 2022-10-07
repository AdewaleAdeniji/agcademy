import React from 'react';
import { backgroundCacheUpdate } from '../../services/blog';

const Features = () => {
    backgroundCacheUpdate(0);
    return (
        <div className="flex-desktop  features">
            <div className="single-feature">
                <div className='feature-image'>
                    <img src={require('../../assets/instructor.png')} alt="Instructor feature"/>
                </div>
                <div className="feature-details">
                    <h3>Agric-Expert Instructor</h3>
                    <p>Learn from the most experience from anywhere conveniently.</p>
                </div>
            </div>
            <div className="single-feature">
                <div className='feature-image'>
                    <img src={require('../../assets/practical.svg')} alt="Instructor feature"/>
                </div>
                <div className="feature-details">
                    <h3>80% Practical</h3>
                    <p>Learn from the most experience from anywhere conveniently.</p>
                </div>
            </div>
            <div className="single-feature">
                <div className='feature-image'>
                    <img src={require('../../assets/lifetime.svg')} alt="Instructor feature"/>
                </div>
                <div className="feature-details">
                    <h3>Lifetime Access</h3>
                    <p>Learn from the most experience from anywhere conveniently.</p>
                </div>
            </div>
        </div>
    )
};
export default Features;