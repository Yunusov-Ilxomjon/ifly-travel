import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-1">
                <img width={80} src="/about/nav-logo.png" alt="" />
                <p>Biz innovatsion sayohat yechimlari orqali ajoyib tajribalar taqdim etishga intilamiz.</p>
                <div className="footer-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/footer/facebook.png" alt="Facebook" width={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/footer/twitter.png" alt="Twitter" width={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/footer/instagram.png" alt="Instagram" width={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="/footer/linkedin.png" alt="LinkedIn" width={24} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="/footer/youtube.png" alt="YouTube" width={24} />
                    </a>
                </div>

            </div>

                            <div className="footer-1">
                    <h1>Tez havolalar</h1>
                    <ul>
                        <li><a href="./">Haqida</a></li>
                        <li><a href="./">Ekskursiyala</a></li>
                    </ul>
                </div>

                <div className="footer-1">
                    <h1>Manzillar</h1>
                    <ul>
                        <li><a href="./">Yevropa</a></li>
                        <li><a href="./">Osiyo</a></li>
                        <li><a href="./">Afrika</a></li>
                        <li><a href="./">Avstraliya</a></li>
                    </ul>
                </div>

                <div className="footer-1">
                    <h1>Bizning manzilimiz</h1>

                </div>



        </div>
    )
}

export default Footer