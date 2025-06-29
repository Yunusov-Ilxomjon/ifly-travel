import React from 'react'
import "../registr/registr.css"

const Registr = () => {
    return (
        <div className="registr-page">
            <h1 className='registr-h1'>Aviabiletlar bron qilish</h1>
            <form className='forms' action="">
                <div className="inputs-div">
                    <label htmlFor="">To'liq ismingiz:</label>
                    <input className='inputs' type="text" placeholder='Ismingizni, otangiz ismini va familyangizni kiriting' />

                    <label htmlFor="">Qaysi davlatdan</label>
                    <select className='selects' name="" id="">
                       <option value="">Tanlang</option>
                        <option value="">O'zbekiston</option>
                        <option value="">Qozog'iston</option>
                        <option value="">Tojikiston</option>
                        <option value="">Hindiston</option>
                        <option value="">Turkiya</option>
                        <option value="">Tailand</option>
                    </select>

                    <label htmlFor="">Qaytish sanasi</label>
                    <input className='inputs' type="date" />
                </div>

                <div className="inputs-div">
                    <label htmlFor="">Birinchi raqamingiz:</label>
                    <input className='inputs' type="text" placeholder='Birinchi mobil raqamingizni kiriting' />

                    <label htmlFor="">Qaysi davlatgan</label>
                    <select className='selects' name="" id="">
                       <option value="">Tanlang</option>
                       <option value="">O'zbekiston</option>
                        <option value="">Qozog'iston</option>
                        <option value="">Tojikiston</option>
                        <option value="">Hindiston</option>
                        <option value="">Turkiya</option>
                        <option value="">Tailand</option>
                    </select>

                    <label htmlFor="">Email</label>
                    <input className='inputs' type="email" placeholder='Emailingizni kiriting' />
                </div>

                <div className="inputs-div">
                    <label htmlFor="">Ikkinchi raqamingiz:</label>
                    <input className='inputs' type="text" placeholder='Ikkinchi mobil raqamingizni kiriting' />

                    <label htmlFor="">Jo'nish sanasi</label>
                    <input className='inputs' type="date" />

                    <label htmlFor="">Telegram foydalanuvchi nomi:</label>
                    <input className='inputs' type="text" placeholder='Telegram foydalanuvchi nomingizni kiriting' />
                </div>

<button className='registr-btn'>Yuborish</button>

            </form>
        </div>
    )
}

export default Registr