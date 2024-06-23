import React, { useState, useEffect } from 'react';
import './topselling.css'
import CardFilter from './CardFilter';
import TopSellingItem from './TopSellingItem';

function TopSelling() {
    const [filter, setFilter] = useState('Today');
    const [items, setItems] = useState([]);

    const hanldeFilterChange = () => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://localhost:4000/topselling')
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
            <div className="card-body pb-0">
                <h5 className="card-title">
                    Top Selling <span>/{filter}</span>
                </h5>
                <table className="table table-border-less datatable">
                    <thead className='table-light'>
                        <tr>
                            <th scope="col">Preview</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items &&
                            items.length > 0 &&
                            items.map(item => (
                                <TopSellingItem key={item._id} item={item} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TopSelling