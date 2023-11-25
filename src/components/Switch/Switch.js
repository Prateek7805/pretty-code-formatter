import React from 'react';
import './Switch.css'

export default function Switch({loading, checked, onChange}) {
    return (
        <div className='sw-p-wrapper'>
            <label className={`switch ${loading? "loading":""}`}>
                <input type="checkbox" disabled={loading} checked={checked} onChange={onChange}/>
                <span className="check"></span>
            </label>
        </div>
    )
}