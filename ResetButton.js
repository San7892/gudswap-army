import PropTypes from 'prop-types';

const ResetButton = ({ resetAnimals, disabled }) => {
    return (
        <button onClick={resetAnimals} disabled={disabled}>
            Reset
        </button>
    );
};

ResetButton.propTypes = {
    resetAnimals: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
};

export default ResetButton;
