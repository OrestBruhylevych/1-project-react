













import './app-filter.css';










export default function AppFilter(props) {
    const buttonsData = [
        { name: 'all', label: 'Всі працівники' },
        { name: 'like', label: 'Працівники для підвищення' },
        { name: 'moreThen1000', label: 'Зарплата більше 1000$' }
    ];






    

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name) }
            >{label}
            </button>
        )
    });

    return (
        <div className="btn-croup">
            {buttons}
        </div>
    )
};
