import React from 'react';

function Footer() {
    return (
        <div className="navbar">
        <a href="/"><strong>NEWSLETTER SIGN</strong></a>
        <a href="/"><form>
            <input type="email" id="email" name="email"/>
            <input type="submit" value="Subscribe"/></form></a>
            <a href='/'></a>
            <a style={{float: "right"}} href="/">
                <strong>CONNECT US</strong>
                <img src="image/facebook.png" alt="facebook" width="30" height="30"/>
                <img src="image/twitter.jpg" alt="facebook" width="30" height="30"/>
                <img src="image/instagram.jpg" alt="facebook" width="30" height="30"/>
            </a>
        </div>
    )
}
export default Footer;