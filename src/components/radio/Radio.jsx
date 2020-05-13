import React from 'react';
import './Radio.css';

import { uid } from 'utils';
class Radio extends React.Component {
    id = `${uid()}${this.props.value}`;

    render() {
        console.log(uid);
        const {
            dark,
            value,
            style,
            label,
            checked,
            onClick,
            onChange,
        } = this.props;
        return (
            <div className="selection-control-container " style={{ ...style }}>
                <input
                    type="radio"
                    id={this.id}
                    value={value}
                    checked={checked}
                    onClick={onClick}
                    onChange={() => (onChange ? onChange(value) : null)}
                    className={`nu-radio nu-radio--${dark ? 'dark' : 'light'}`}
                />
                <label
                    htmlFor={this.id}
                    className={`nu-radio-label nu-radio-label--${
                        dark ? 'dark' : 'light'
                    } ${value ? 'cursor-pointer' : ''}`}
                >
                    {label}
                </label>
            </div>
        );
    }
}

export default Radio;
