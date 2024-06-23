import React, { useState, useEffect } from 'react'
import CardFilter from './CardFilter';
import RecentActivityItem from './RecentActivityItem';
import './RecentActivity.css'

function RecentActivity() {
    const [filter, setFilter] = useState('Today');
    const [items, setItems] = useState([]);

    const hanldeFilterChange = () => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://localhost:4000/recentactiviy')
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
        <div className="card top-selling overflow-auto">
            <CardFilter filterChange={hanldeFilterChange} />
            <div className="card-body">
                <h5 className="card-title">
                    Recent Activity <span>/ {filter}</span>
                </h5>
                <div className="activity">
                    {
                        items &&
                        items.length > 0 &&
                        items.map(item => (
                            <RecentActivityItem key={item._id} item={item} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default RecentActivity