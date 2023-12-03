import React from 'react';
import './Navbar.css';
import Flower from '../Icons/Flower/Flower';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import RunButton from '../Buttons/RunButton/RunButton';
import ExampleButton from '../Buttons/ExampleButton/ExampleButton';
export default function Navbar() {
    return (
        <div className="row g-0 navbar-custom">
            <div className='col-8 d-flex flex-row gap-2 px-3 px-md-5 align-items-center'>
                <Flower />
                <p className='nav-title'>Pretty Code</p>
            </div>
            <div className='col-4 d-flex flex-row justify-content-end px-2 align-items-center gap-1'>
                <RunButton />
                <ExampleButton/>
                <LanguageSelector />
                <ThemeToggle />
            </div>
        </div>
    )
}