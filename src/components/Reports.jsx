import React, { useState } from 'react';
import './reports.css'
import CardFilter from './CardFilter';
import ReportCharts from './ReportCharts';

function Reports() {
    const [filter, setFilter] = useState('Today');
    const hanldeFilterChange = () => {
        setFilter(filter);
    }
    return (
        <div className="card">
            <CardFilter filterChange={hanldeFilterChange} />
            <div className="card-body">
                <h5 className="card-title">
                    Reports <span>/{filter}</span>
                </h5>
                <ReportCharts />
            </div>
        </div>
    )
}

export default Reports