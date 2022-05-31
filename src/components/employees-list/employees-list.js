import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data }) => {
    
    const elements = data.map((element) => {
        const { id, ...elementProps } = element;

        return (
            <EmployeesListItem key={id} {...elementProps} />
        )
    });


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;