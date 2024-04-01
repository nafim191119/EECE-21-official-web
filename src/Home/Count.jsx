import CountUp from "react-countup";
import { useState, useEffect } from 'react';


const stats = [
    { id: 1, name: 'Total Current Students', value: '3800' },
    { id: 2, name: 'Total Club', value: '13' },
    { id: 3, name: 'Total Department', value: '11' },
]
const Count = () => {

    return (
        <div>
            <div className="bg-dark py-2 sm:py-12 ">
                <div className="mx-auto max-w-7xl px-4 lg:px-4">
                    <dl className="grid grid-cols-3 gap-x-2 gap-y-4 text-center lg:grid-cols-3 text-white">
                        {
                            stats.map((stat) => (
                                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-2">
                                    <dt className="leading-7 text-white">{stat.name}</dt>
                                    <dd className="order-first text-xl font-semibold tracking-tight text-white-900 sm:text-5xl">
                                        <CountUp start={0} end={stat.value} duration={2} delay={0}></CountUp>
                                    </dd>
                                </div>
                            ))
                        }
                    </dl>
                </div>
            </div>
        </div>

    );
};

export default Count;