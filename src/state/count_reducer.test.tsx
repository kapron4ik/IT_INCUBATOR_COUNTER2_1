import {countListReducer} from './count-reducer';

test('count reducer should increment only value, reset-false, inc-false', () => {
    const startState = {
        minValue: 0,
        maxValue: 10,
        value: 0,
        editMode: false,
        error: false,
        disableReset: true,
        disableInc: false,
        disableSet: false
    };

    const endState = countListReducer(startState, { type: 'INC_VALUE' })

    expect(endState.value).toBe(1);
    expect(endState.disableReset).toBe(false);
    expect(endState.disableInc).toBe(false)
});

test('count reducer should increment only value, reset-false, inc-true', () => {
    const startState = {
        minValue: 0,
        maxValue: 10,
        value: 9,
        editMode: false,
        error: false,
        disableReset: true,
        disableInc: false,
        disableSet: false
    };

    const endState = countListReducer(startState, { type: 'INC_VALUE' })

    expect(endState.value).toBe(10);
    expect(endState.disableReset).toBe(false);
    expect(endState.disableInc).toBe(true)
});

test('count reducer should reset value, reset-true, inc-false', () => {
    const startState = {
        minValue: 0,
        maxValue: 10,
        value: 9,
        editMode: false,
        error: false,
        disableReset: true,
        disableInc: false,
        disableSet: false
    };

    const endState = countListReducer(startState, { type: 'RESET_VALUE' })

    expect(endState.value).toBe(0);
    expect(endState.disableReset).toBe(true);
    expect(endState.disableInc).toBe(false)
});

test('count reducer should set min max value, editMode-true, inc-true, reset-true', () => {
    const startState = {
        minValue: 0,
        maxValue: 7,
        value: 0,
        editMode: false,
        error: false,
        disableReset: true,
        disableInc: false,
        disableSet: false
    };

    const endState = countListReducer(startState, { type: 'SET_VALUE_INPUT',keyMinValue:"MinValue",keyMaxValue:"MaxValue" })

    expect(endState.value).toBe(0);
    expect(endState.editMode).toBe(true)
    expect(endState.disableReset).toBe(true);
    expect(endState.disableInc).toBe(true)
});

test('count reducer should set min max value, editMode-false, inc-false, reset-true', () => {
    const startState = {
        minValue: 0,
        maxValue: 7,
        value: 5,
        editMode: true,
        error: false,
        disableReset: true,
        disableInc: false,
        disableSet: false
    };

    const endState = countListReducer(startState, { type: 'SET_VALUE_INPUT',keyMinValue:"MinValue",keyMaxValue:"MaxValue" })

    expect(endState.value).toBe(0);
    expect(endState.editMode).toBe(false)
    expect(endState.disableReset).toBe(true);
    expect(endState.disableInc).toBe(false)
});

test('count reducer should change min value', () => {
    const startState = {
        minValue: 0,
        maxValue: 7,
        value: 5,
        editMode: true,
        error: false,
        disableReset: true,
        disableInc: false,
        disableSet: false
    };

    const endState = countListReducer(startState, { type: 'CHANGE_MIN_VALUE_HANDLER', newValue:3 })

    expect(endState.minValue).toBe(3);

});

test('count reducer should change max value', () => {
    const startState = {
        minValue: 0,
        maxValue: 7,
        value: 5,
        editMode: true,
        error: false,
        disableReset: true,
        disableInc: false,
        disableSet: false
    };

    const endState = countListReducer(startState, { type: 'CHANGE_MAX_VALUE_HANDLER', newValue:9 })

    expect(endState.maxValue).toBe(9);

});

test('count reducer should change status error-true', () => {
    const startState = {
        minValue: 0,
        maxValue: 7,
        value: 5,
        editMode: true,
        error: false,
        disableReset: true,
        disableInc: true,
        disableSet: false
    };

    const endState = countListReducer(startState, { type: 'CHANGE_STATUS_ERROR',error:true})

    expect(endState.error).toBe(true)
    expect(endState.disableSet).toBe(true)
});

test('count reducer should change status error-false', () => {
    const startState = {
        minValue: 0,
        maxValue: 7,
        value: 5,
        editMode: true,
        error: false,
        disableReset: true,
        disableInc: true,
        disableSet: false
    };

    const endState = countListReducer(startState, { type: 'CHANGE_STATUS_ERROR',error:false})

    expect(endState.error).toBe(false)
    expect(endState.disableSet).toBe(false)
});