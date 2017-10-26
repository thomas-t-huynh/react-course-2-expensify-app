import moment from 'moment';

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
       case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
       case 'SET_SORT_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_SORT_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        default: 
            return state;
    }
};