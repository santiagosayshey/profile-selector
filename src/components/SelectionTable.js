import React from 'react';
import ProfileRec from './ProfileRec';

const SelectionTable = ({
    selectedQuality, setSelectedQuality,
    selectedImmutability, setSelectedImmutability,
    selectedCompatibility, setSelectedCompatibility
}) => {

    // Handle Selection for Quality, Immutability, and Compatibility
    const handleSelection = (type, value) => {
        switch (type) {
            case 'quality':
                setSelectedQuality(value);
                break;
            case 'immutability':
                setSelectedImmutability(value);
                break;
            case 'compatibility':
                setSelectedCompatibility(value);
                break;
            default:
                break;
        }
    };

    // Reset all selections
    const resetSelections = () => {
        setSelectedQuality(null);
        setSelectedImmutability(null);
        setSelectedCompatibility(null);
    };

    return (
        <div className="row justify-content-center">
            <div className="rounded-table">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="info-box-title">Metric Selector</h3>
                    <button onClick={resetSelections} className="btn btn-secondary">Reset</button>
                </div>
                <table className="table table-dark table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th><h6>Quality</h6></th>
                            <th><h6>Immutability</h6></th>
                            <th><h6>Compatibility</h6></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td onClick={() => handleSelection('quality', 'Optimal')} className={`clickable-cell ${selectedQuality === 'Optimal' ? 'selected' : ''}`}>Optimal</td>
                            <td onClick={() => handleSelection('immutability', 'Hard')} className={`clickable-cell ${selectedImmutability === 'Hard' ? 'selected' : ''}`}>Hard</td>
                            <td onClick={() => handleSelection('compatibility', 'Legacy')} className={`clickable-cell ${selectedCompatibility === 'Legacy' ? 'selected' : ''}`}>Legacy</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleSelection('quality', 'Transparent')} className={`clickable-cell ${selectedQuality === 'Transparent' ? 'selected' : ''}`}>Transparent</td>
                            <td onClick={() => handleSelection('immutability', 'Moderate')} className={`clickable-cell ${selectedImmutability === 'Moderate' ? 'selected' : ''}`}>Moderate</td>
                            <td onClick={() => handleSelection('compatibility', 'Standard')} className={`clickable-cell ${selectedCompatibility === 'Standard' ? 'selected' : ''}`}>Standard</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleSelection('quality', 'Balanced')} className={`clickable-cell ${selectedQuality === 'Balanced' ? 'selected' : ''}`}>Balanced</td>
                            <td onClick={() => handleSelection('immutability', 'Soft')} className={`clickable-cell ${selectedImmutability === 'Soft' ? 'selected' : ''}`}>Soft</td>
                            <td onClick={() => handleSelection('compatibility', 'Bleeding Edge')} className={`clickable-cell ${selectedCompatibility === 'Bleeding Edge' ? 'selected' : ''}`}>Bleeding Edge</td>
                        </tr>
                        <tr>
                            <td onClick={() => handleSelection('quality', 'Minimal')} className={`clickable-cell ${selectedQuality === 'Minimal' ? 'selected' : ''}`}>Minimal</td>
                            <td className="clickable-cell"></td> {/* Empty cell for alignment */}
                            <td className="clickable-cell"></td> {/* Empty cell for alignment */}
                        </tr>
                    </tbody>
                </table>
            </div>
            <ProfileRec
                selectedQuality={selectedQuality}
                selectedImmutability={selectedImmutability}
                selectedCompatibility={selectedCompatibility}
            />
        </div>
    );
};

export default SelectionTable;