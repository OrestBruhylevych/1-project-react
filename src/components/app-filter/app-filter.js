


import './app-filter.css';

export default function AppFilter () {
    return (
        <div className="btn-croup">
            <button
                className="btn btn-light"
                type="button"
            >Всі працівники
            </button>

            <button
                className="btn btn-outline-light"
                type="button"
            >Працівники для підвищення 
            </button>

            <button
                className="btn btn-outline-light"
                type="button"
            >Зарплата більше 1000$ 
            </button>
        </div>
    )
};
