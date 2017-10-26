import { setTextFilter , sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import  moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should set up text for the setTextFilter action object', () => {
    const text = 'something';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: text

    })
});

test('should set up default text for the setTextFilter action object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
});

test('should set up sort to "amount" when sortByAmount action is called', () => {
    expect(sortByAmount()).toEqual({type: 'SET_SORT_AMOUNT', });
});

test('should set up sort to "date" when sortByDate action is called', () => {
    expect(sortByDate()).toEqual({ type: 'SET_SORT_DATE' });
});


