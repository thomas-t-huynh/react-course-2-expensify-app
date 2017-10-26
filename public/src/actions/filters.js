export const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT',
    text
});

export const sortByAmount = () => ({
    type: 'SET_SORT_AMOUNT',
});

export const sortByDate = () => ({
    type: 'SET_SORT_DATE',
});

export const setStartDate = ( startDate ) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
});