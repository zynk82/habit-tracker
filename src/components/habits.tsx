import React, {Component} from 'react';
import Habit, {HabitData, HabitEvent} from "./habit";

export type HabitsData = HabitEvent & {
    habits: HabitData[],
}

class Habits extends Component<HabitsData> {
    render() {
        return (
            <ul className="habits">
                console.log('Habits updated');

                {
                    this.props.habits.map((data: HabitData) => {
                        return <Habit key={data.id} id={data.id} name={data.name} count={data.count}
                                      onIncrement={this.props.onIncrement}
                                      onDecrement={this.props.onDecrement}
                                      onDelete={this.props.onDelete}/>
                    })
                }
            </ul>
        );
    }
}

export default Habits;