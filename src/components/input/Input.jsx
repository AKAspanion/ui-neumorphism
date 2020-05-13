import React from 'react';
import './Input.css';

class Input extends React.Component {
    render() {
        const { dark, label, disabled, rounded, ...rest } = this.props;
        return (
            <div
                className={`nu-input-container ${
                    disabled ? 'nu-input--disabled' : ''
                } ${rounded ? 'nu-input--rounded' : ''}`}
            >
                <label className={`nu-input-label`}>{label}</label>
                <input
                    {...rest}
                    className={`nu-input nu-input--${dark ? 'dark' : 'light'} `}
                />
                <span className="nu-input-error"></span>
            </div>
        );
    }
}

export default Input;
