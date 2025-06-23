// Travel.jsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './travel.css';

const Travel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className='travel-container'>
      <div className="travel-info">
        <div className="travel-info-cards">
          <h1>Hayratlanarli Plyaj</h1>
          <p>Zamonaviy plyajlarni kashf eting va quyosh ostida dam oling.</p>
        </div>
        <div className="travel-info-cards">
          <h1>Tog' Sarguzashtlari</h1>
          <p>Hayajonli tog' sayohatiga chiqib, tabiatni o'rganing.</p>
        </div>
        <div className="travel-info-cards">
          <h1>Shahar Turlari</h1>
          <p>Shahar muhitida madaniyat va hayotni kashf eting.</p>
        </div>
      </div>

      <div className="travel-premium">
        <h1 className="travel-premium-title">Bizning Premium Turlarimizni Kashf Etish</h1>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          <SwiperSlide>
            <div className="travel-premium-card card-1" onClick={handleOpenModal}>
              <h1>Tokio sarguzashtlari</h1>
              <p>Yaponiya yuragida an'ana va texnologiyaning uyg'unligini his qiling</p>
              <button className='travel-btn'>Biz bilan bog'laning</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-premium-card card-2" onClick={handleOpenModal}>
              <h1>Tailanda sayohat</h1>
              <p>Tailandning issiq plyajlari va boy madaniyatiga sho'ng'ing</p>
              <button className='travel-btn'>Biz bilan bog'laning</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-premium-card card-3" onClick={handleOpenModal}>
              <h1>Dubay muxlislari</h1>
              <p>Dubayning kelajakdagi siluetini va hashamatini ko'ring</p>
              <button className='travel-btn'>Biz bilan bog'laning</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="travel-premium-card card-4" onClick={handleOpenModal}>
              <h1>Xitoyni kashf eting</h1>
              <p>Xitoy madaniyati, san'ati va taomlari bilan tanishing</p>
              <button className='travel-btn'>Biz bilan bog'laning</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {isModalOpen && (
        <div className="travel-modal">
          <button className="modal-close" onClick={handleCloseModal}>X</button>
          <h1 style={{ textAlign: 'center', marginTop: '10px', fontFamily: 'sans-serif' }}>
            Xabar yuboring
          </h1>
          <form>
            <label>To'liq ism</label>
            <input required type="text" />

            <label>Email manzili</label>
            <input required type="email" />

            <label>Mavzu nima haqida</label>
            <input required type="text" />

            <label>Sizning xabaringgiz</label>
            <textarea required></textarea>

            <button type="submit">Jo'natish</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Travel;
