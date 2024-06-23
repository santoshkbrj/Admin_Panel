import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="copyright">&copy; Coyright{' '}
                <strong><span>SKStudio Technology</span></strong>. All Rights Reserved </div>
            <div className="credits">
                Design by <a href="#">Santosh Sah</a>
            </div>
        </footer>

    )
}

export default Footer