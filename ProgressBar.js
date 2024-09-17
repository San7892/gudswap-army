import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ totalUnits }) => {
    const maxUnits = 15;
    const progress = Math.min((totalUnits / maxUnits) * 100, 100);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            <div className="labels">
                <span className={totalUnits > 0 ? 'active' : ''}>L0</span>
                <span className={totalUnits >= 5 ? 'active' : ''}>L1</span>
                <span className={totalUnits >= 10 ? 'active' : ''}>L2</span>
                <span className={totalUnits >= 15 ? 'active' : ''}>L3</span>
            </div>
        </div>
    );
};

// PropTypes for validation
ProgressBar.propTypes = {
    totalUnits: PropTypes.number.isRequired,
};

export default ProgressBar;
