import React from 'react';


function Header() {
    function handleClick() {
        alert('Please sign in.');
    }
    return (
        <div>
            <ul>
                <li><a href="/"><strong>ICrowdTask</strong></a></li>
                <li><a href="/">How it works</a></li>
                <li><a href="/">Requesters</a></li>
                <li><a href="/">Workers</a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Workers</a></li>
                <li><a href="/"><button type="button" onClick={handleClick}>Sign In</button></a></li>
            </ul>
        </div>
    )
}

export default Header;