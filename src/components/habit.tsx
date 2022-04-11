import React, {Component} from 'react';

export type HabitData = HabitEvent & {
    id?: string,
    name: string,
    count: number;
};

export type HabitEvent = {
    onIncrement?: (habit: HabitData) => void,
    onDecrement?: (habit: HabitData) => void,
    onDelete?: (habit: HabitData) => void,
}

class Habit extends Component<HabitData> {
    handleIncrement = () => {
        this.props.onIncrement && this.props.onIncrement(this.props);
    };

    handleDecrement = () => {
        this.props.onDecrement && this.props.onDecrement(this.props);
    }

    handelDelete = () => {
        this.props.onDelete && this.props.onDelete(this.props);
    }

    render() {
        console.log('Habit updated');

        return (
            <>
                <li className="habit">
                    <span className="habit-name">{this.props.name}</span>
                    <span className="habit-count">{this.props.count}</span>

                    <button className="habit-button habit-increase"
                            onClick={this.handleIncrement}>
                        <i className="fa-solid fa-square-plus"></i>
                    </button>
                    <button className="habit-button habit-decrease"
                            onClick={this.handleDecrement}>
                        <i className="fa-solid fa-square-minus"></i>
                    </button>
                    <button className="habit-button habit-delete"
                            onClick={this.handelDelete}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </li>
            </>
        );
    }
}

export default Habit;