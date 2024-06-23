import React from 'react'

function TopSellingItem({ item }) {
    return (
        <tr>
            <th scope='row'>
                <a href="#">
                    <img src={item.preview} alt={item.name} />
                </a>
            </th>
            <td><a href="#" className="text-rimary fw-bold">
                {item.name}
            </a></td>
            <td>${item.price.toFixed(2)}</td>
            <td className='fw-bold'>{item.sold}</td>
            <td>${(item.price * item.sold).toLocaleString()}</td>
        </tr>
    )
}

export default TopSellingItem