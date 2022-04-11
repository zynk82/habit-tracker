import React, {useCallback, useEffect, useState} from 'react';
import Habits, {HabitsData} from "./components/habits";
import Navbar from "./components/navbar";
import {HabitData} from "./components/habit";
import HabitAddForm from "./components/habit-add-form";
import './app.css';

const getUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g
        , (c) => {
            let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 3 | 8);
            return v.toString(16);
        });
};

const App = () => {
    const [state, setState] = useState<HabitsData>(
        {
            habits: [
                // {id: getUUID(), name: 'Reading', count: 0},
                // {id: getUUID(), name: 'Running', count: 0},
                // {id: getUUID(), name: 'Coding', count: 0},
            ]
        },
    );

    useEffect(() => console.log(`mounted or did updated. ${[state.habits.length]}`)
        , []);

    const findHabit = (habit: HabitData, action: (habits: HabitData[], h: HabitData) => void) => {
        let habits: HabitData[] = [];

        state.habits.forEach((h: HabitData) => {
            if (h.id === habit.id) {
                action(habits, h);

            } else {
                habits.push(h);

            }
        });

        setState({...state, habits});
    }

    const handleIncrement = useCallback(
        (habit: HabitData) => {
            findHabit(habit, (habits: HabitData[]) => {
                habits.push({
                    ...habit
                    , count: habit.count + 1
                });
            });
        }, [state.habits]
    );

    const handleDecrement = useCallback((habit: HabitData) => {
        findHabit(habit, (habits: HabitData[]) => {
            let count = habit.count - 1;

            if (count < 0) {
                count = 0;
            }

            habits.push({...habit, count: count});
        });
    }, [state.habits]);

    const handelHabitAdded = useCallback((habit: string) => {
        setState(
            {
                habits: [
                    ...state.habits
                    , {
                        id: getUUID()
                        , name: habit
                        , count: 0
                    }
                ]
            }
        );

        console.log(state.habits.length);

    }, [state.habits]);

    const handleDelete = useCallback((habit: HabitData) => {
        findHabit(habit, () => {
        });
    }, [state.habits]);

    const onReset = useCallback(() => {
        let tempHabitList: HabitData[] = state.habits.map((h: HabitData) => {
            h.count = 0;
            return h;
        });

        setState({
            habits: tempHabitList
        });
    }, [state.habits]);

    const onDeleteClick = useCallback(() => {
        setState({
            habits: []
        });
    }, [state.habits]);

    return (
        <>
            <Navbar count={state.habits.length}/>

            <HabitAddForm onHabitAdded={handelHabitAdded}/>

            <Habits habits={state.habits}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}/>

            <button className='reset-habit'
                    onClick={onReset}>Reset Habit
            </button>

            <button className='delete-all-habit'
                    onClick={onDeleteClick}>Delete All Habit
            </button>
        </>
    );
};

export default App;