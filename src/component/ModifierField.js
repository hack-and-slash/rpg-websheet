import React, { Component } from 'react';

class ModifierField extends Component {
    state = {
        value: 1,
        modifier: -5,
    }

    calculateModifier = value => {
        return Math.floor((value - 10) / 2); 
    }

    handleValueChange = event => {
        const value = parseInt(event.target.value, 10);
        const modifier = this.calculateModifier(value);

        this.setState({ value, modifier });
    }

    render() {
        const { title, name, max, min } = this.props;
        const { value, modifier } = this.state;

        return (
            <div className="field-modifier">
                <label for={name} style={{ margin: ".5em" }}>{title} :</label>
                <input style={{ margin: ".5em", width: "3em" }} name={name} max={max} min={min} type="number" step="1" value={value} onChange={this.handleValueChange} />
                <span>({modifier >= 0 ? `+${modifier}` : modifier})</span>
            </div>
        );
    }
}

export default ModifierField;
