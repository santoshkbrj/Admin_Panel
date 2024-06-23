import { useEffect, useState } from 'react';
import Card from './Card';
import './dashboard.css'
import Reports from './Reports';
import RecentSales from './RecentSales';
import TopSelling from './TopSelling';
import RecentActivity from './RecentActivity';
import BudgetReport from './BudgetReport';
import WebTrafiic from './WebTrafiic';
import News from './News';
import Cards from './Cards';

function Dashboard() {


    return (
        <section className='dashboard section'>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <Cards />
                    </div>
                    <div className="col-12">
                        <Reports />
                    </div>
                    <div className="col-12">
                        <RecentSales />
                    </div>
                    <div className="col-12">
                        <TopSelling />
                    </div>
                </div>
                <div className="col-lg-4">
                    <RecentActivity />
                    <BudgetReport />
                    <WebTrafiic />
                    <News />
                </div>
            </div>
        </section>
    )
}

export default Dashboard