import React from 'react'
import Card from './Card';
import './country.css'


const cardData = [
    {
        title: 'Tokio, Yaponiya',
        description: "Tokio Yaponiya poytaxti bo'lib, an'anaviy ibodatxonalarni zamonaviy osmono'parlar bilan birlashtiradi.",
        image: '/sity/japan.jpg'
    },
    {
        title: 'Orol qochishi',
        description: "Shahar shovqinidan uzoqda, tabiatning ajoyib go'zalligida dam oling.",
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156'
    },
        {
        title: 'Vetnam sarguzashti',
        description: "Vetnamning go'zalligiga kirib boring, rang-barang guruch teraslari va noyob madaniyat bilan tanishing!",
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    },
    {
        title: 'Dubay, BAA',
        description: "Dubayning kelajakdagi skylinesi va hashamatini guvohi bo'ling.",
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156'
    },
        {
        title: 'Maldivlar',
        description: "Oq qumli plyajlar va toza suvlar bilan tropik jannatda dam oling. Hashamatli kurortlar va ajoyib suv osti dunyosidan zavq oling!",
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    },
    {
        title: 'Tropik Tailand',
        description: 'Chiroqlar bilan bezalgan tungi manzara.',
        image: 'https://images.unsplash.com/photo-1494526585095-c41746248156'
    },
        {
        title: 'Tog‘ manzarasi',
        description: 'Bu yerda tabiat go‘zalligi namoyon bo‘ladi.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
    },


];
const Country = () => {


    return (
        <div className='country-container'>
            <h1 style={{
                textAlign: "center",
                fontFamily: "sans-serif",
                marginTop: '25px'
            }}>Davlatlarni o'rganing</h1>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: "space-around" }}>
                {cardData.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Country