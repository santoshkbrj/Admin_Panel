import React, { useState, useEffect } from 'react';
import NewsPostItem from './NewsPostItem';
import CardFilter from './CardFilter';
import './news.css'

function News() {
    const [filter, setFilter] = useState('Today');
    const [items, setItems] = useState([]);

    const hanldeFilterChange = () => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://localhost:4000/news')
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
        <div className="card">
            <CardFilter filterChange={hanldeFilterChange} />
            <div className="card-body">
                <h5 className="card-title">
                    News &amp; Updates <span>/ {filter}</span>
                </h5>
                <div className="news">
                    {
                        items &&
                        items.length > 0 &&
                        items.map(item => (
                            <NewsPostItem key={item._id} item={item} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default News