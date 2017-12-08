import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { connect } from 'react-redux';

export class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        };
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        e.persist();
        this.setState(() => ({ note: e.target.value }));
    };


    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }; 
    };

    onFocusChange = ( { focused } ) => {
        this.setState(() => ({ calenderFocused: focused }))
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.note) {
            this.setState(() => ({ error: 'Please provide a title and a bloggle.' }))
        } else if (!this.props.isAuthenticated) {
            this.setState(() => ({ error: 'Please sign in to bloggle.' }))
        } else {
            this.setState(() => ({ 
                description: '',
                note: '',
                createdAt: '',
                error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
            console.log('submitted');
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <div className="text-button-flex">
                        <input 
                            type="text" 
                            placeholder="Title"
                            autoFocus
                            className="text-title"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                        <button className="button" >Bloggle</button>
                    </div>
                    <textarea
                        placeholder="Start bloggle-ing"
                        value={this.state.note}
                        className="textarea"
                        onChange={this.onNoteChange}
                    >
                    </textarea>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})


export default connect(mapStateToProps , undefined)(ExpenseForm);