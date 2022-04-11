import React, {FormEvent, RefObject, useMemo, useRef} from 'react';

type AddFormProps = {
    onHabitAdded: (habit: string) => void;
}

const HabitAddForm = (props: AddFormProps) => {
    console.log('HabitAddForm updated');

    useMemo(() => {
        console.log('useMemo');
    }, [props.onHabitAdded]);

    let formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
    let inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const input: HTMLInputElement = inputRef.current!;

        if (!input) {
            return;
        }

        props.onHabitAdded(input.value);
        formRef.current!.reset();
    }

    return (
        <form ref={formRef}
              className='add-form'
              onSubmit={onSubmit}>
            <input
                ref={inputRef}
                type='text'
                className='add-input'
                placeholder='Input Habit...'/>
            <button className='add-button'>Add</button>
        </form>
    );
};

export default HabitAddForm;