import React, { useState } from 'react'
import CardFilter from './CardFilter';
import BudgetChart from './BudgetChart';

function BudgetReport() {
    const [filter, setFilter] = useState('Today');
    const [items, setItems] = useState([]);

    const hanldeFilterChange = () => {
        setFilter(filter);
    }

    return (
        <div className="card top-selling overflow-auto">
            <CardFilter filterChange={hanldeFilterChange} />
            <div className="card-body pb-0">
                <h5 className="card-title">
                    Budget Report <span>/{filter}</span>
                </h5>
                <BudgetChart />
            </div>
        </div>
    )
}

export default BudgetReport