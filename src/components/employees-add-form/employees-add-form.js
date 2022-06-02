import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onInputValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitItem = (e) => {
        const {onAdd} = this.props;
        const { name, salary } = this.state;
        e.preventDefault();
        if (name !== '' && salary !== "") {
            onAdd(name, salary);
        }

        this.setState({
            name: '',
            salary: ''
        })
    }



    render() {
        const { name, salary } = this.state;

        return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex" onSubmit={this.onSubmitItem} >
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    name='name'
                    value={name}
                    onChange={this.onInputValueChange} />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name='salary'
                    value={salary}
                    onChange={this.onInputValueChange} />

                <button type="submit"
                        className="btn btn-outline-light"
                        >Добавить</button>
            </form>
        </div>
    )
    }
}

export default EmployeesAddForm;