
import './app-info.css';

const AppInfo = ({numerEmployeesIncrease, numerEmployees}) => {
    return (
        <div className="app-info">
            <h1>Працівники компанії</h1>
            <h2>Загальна кіськість працівників: {numerEmployees}</h2>
            <h2>Премію отрримають: {numerEmployeesIncrease}</h2>
        </div>

    );
}

export default AppInfo;
