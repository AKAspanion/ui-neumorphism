import React from 'react';
import './Switch.css';

import { uid } from 'utils';
class Switch extends React.Component {
    id = `${uid()}${this.props.value}`;
    render() {
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
            <div className="selection-control-container" style={{ ...style }}>
                <input
                    id={this.id}
                    value={value}
                    type="checkbox"
                    checked={checked}
                    onClick={onClick}
                    onChange={() => (onChange ? onChange(value) : null)}
                    className={`nu-switch nu-switch--${
                        dark ? 'dark' : 'light'
                    }`}
                />
                <label
                    htmlFor={this.id}
                    className={`nu-switch-label nu-switch-label--${
                        dark ? 'dark' : 'light'
                    } ${value ? 'cursor-pointer' : ''}`}
                >
                    {label}
                </label>
            </div>
        );
    }
}
export default Switch;
