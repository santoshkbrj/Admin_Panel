import React, { useEffect, useState } from 'react';
import './recentsales.css'
import CardFilter from './CardFilter';
import RecentSalesTable from './RecentSalesTable';

function RecentSales() {
    const [filter, setFilter] = useState('Today');
    const [items, setItems] = useState([]);

    const hanldeFilterChange = () => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://localhost:4000/recentsales')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
            .catch((e) => console.log(e.message))
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className="card recent-sales overflow-auto">
            <CardFilter filterChange={hanldeFilterChange} />
            <div className="card-body">
                <h5 className="card-title">
                    Recent Sales <span>/{filter}</span>
                </h5>
                <RecentSalesTable items={items} />
            </div>
        </div>
    )
}

export default RecentSales