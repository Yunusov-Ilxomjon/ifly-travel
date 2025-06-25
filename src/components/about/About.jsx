import React from 'react'
import "./about.css"

const About = () => {
    return (
        <div className='about-page'>
            <h1 style={{
                textAlign: "center",
                color: "white",
                fontSize: "34px",
                fontFamily: "monospace"
            }}>Kompaniyamiz Haqida</h1>
            <p style={{
                textAlign: "center",
                color: "white",
                fontSize: "20px",
                fontFamily: "monospace"
            }}>20 yildan ortiq vaqt davomida noyob sayohat tajribalarini taqdim etamiz.</p>
            <div className="about-cards">
                <div className="about-cards-1">
                    <img width={60} src="/about/airplane.png" alt=""
                        style={{ marginLeft: '95px' }} />
                    <h1>Xalqaro Sayohat</h1>
                    <p>Dunyodagi eng go'zal joylarga sayohatlarni tashkil etamiz.</p>
                </div>

                <div className="about-cards-1">
                    <img width={60} src="/about/house.png" alt=""
                        style={{ marginLeft: '95px' }} />
                    <h1>Qulay Mehmonxonalar</h1>
                    <p>Eng yaxshi va eng qulay mehmonxonalar bilan qolaq.</p>
                </div>

                <div className="about-cards-1">
                    <img width={60} src="/about/location.png" alt=""
                        style={{ marginLeft: '95px' }} />
                    <h1>Maxsus Yo'nalishlar</h1>
                    <p>Har bir mijoz uchun individual yo'nalishlarni yaratamiz.</p>
                </div>

                <div className="about-cards-1">
                    <img width={60} src="/about/contact.png" alt=""
                        style={{ marginLeft: '95px' }} />
                    <h1>Malakali Yo'riqchilar</h1>
                    <p>Har bir mijoz uchun individual yo'nalishlarni yaratamiz.</p>
                </div>

            </div>
            <div className="about-info">
                <div className="about-logo">
                    <img width={200} src="/about/nav-logo.png" alt="" />
                </div>
                <div className="about-text">
                    <h1>Bizning Tariximiz</h1>
                    <p>IFLY kompaniyasi tashkil etilganidan beri mijozlarga unutilmas sayohat tajribalarini taqdim etmoqda. Biz har doim eng yaxshi xizmatlarni ko'rsatishga intilamiz va mijozlarimizning istak va ehtiyojlarini e'tiborga olamiz.</p>
                    <a href="./"><h2>Batafsil o'qing →</h2></a>
                </div>
            </div>

            <h1 style={{
                marginTop: "40px",
                color: "white",
                textAlign: "center",
                fontFamily: "sans-serif"
            }}>Mijozlarimiz nima deyishadi</h1>
            <div className="contact-cards">
                <div className="contact-card-1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem dolorum illum commodi id ipsa?</p>
                    <p style={{ textAlign: "right" }}>- Madina</p>
                </div>

                <div className="contact-card-1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem dolorum illum commodi id ipsa?</p>
                    <p style={{ textAlign: "right" }}>- Bobur</p>
                </div>

                <div className="contact-card-1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem dolorum illum commodi id ipsa?</p>
                    <p style={{ textAlign: "right" }}>- Nigina</p>
                </div>

            </div>
        </div>
    )
}

export default About