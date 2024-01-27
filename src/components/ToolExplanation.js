import React from 'react';

const ToolExplanation = () => {
    return (
        <div className="container mt-4">
            <div className="info-box p-3 mb-3 border border-secondary rounded bg-dark text-white">
                <div className="card-body">
                    <h5 className="card-title explain-title">Welcome to the Profile Selector!</h5>
                    <p className="card-text">
                        This tool is designed to help you select the best quality profiles
                        for your needs. Choose from different levels of Quality, Immutability,
                        and Compatibility to find your perfect media profile.
                    </p>
                    <p className="card-text">
                        To get started, simply choose your preferences in the Metric Selector.
                        Based on your selections, the tool will recommend the most suitable
                        profile for you.
                    </p>
                    <p className="card-text">
                        Disclaimer: Some profiles are still in development and not available yet. Come back soon!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ToolExplanation;
