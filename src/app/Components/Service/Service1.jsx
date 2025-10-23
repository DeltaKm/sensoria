import Image from "next/image";
import Link from "next/link";

const Service1 = () => {

const serviceItems = [
  {
    img: '/assets/img/icon/servicesIcon1_1.png',
    title: 'Event Catering',
    content: 'Tailor-made catering for weddings, corporate gatherings, and private celebrations, blending Italian and French fine cuisine.'
  },
  {
    img: '/assets/img/icon/servicesIcon1_2.png',
    title: 'Gourmet Menus',
    content: 'Refined culinary creations made with fresh, seasonal ingredients, crafted by our signature chefs.'
  },
  {
    img: '/assets/img/icon/servicesIcon1_3.png',
    title: 'Private Chef Experience',
    content: 'An exclusive service with a dedicated chef for intimate dinners or special occasions, at your home or selected venue.'
  },
  {
    img: '/assets/img/icon/servicesIcon1_4.png',
    title: 'Corporate Events',
    content: 'Elegant solutions for meetings, conferences, and corporate dinners with impeccable presentation and premium service.'
  },
  {
    img: '/assets/img/icon/servicesIcon1_5.png',
    title: 'Tasting & Pairing',
    content: 'Gourmet tasting experiences paired with curated wines and personalized menus.'
  },
  {
    img: '/assets/img/icon/servicesIcon1_6.png',
    title: 'Design & Styling',
    content: 'Meticulous event styling and table design to create the perfect atmosphere for every Sensoira experience.'
  }
];
 

    return (
        <div className="services-section style1 section-padding pb-6 fix">
        <div className="services-wrapper style2">
            <div className="container">
                <div className="row gy-5 gx-30">
                {serviceItems.map((item, i) => (
                    <div key={i} className="col-lg-4">
                        <div className="services-card style2">
                            <div className="services-card_icon">
                            <Image src={item.img} alt="img" width={40} height={40}   />
                            </div>
                            <h4 className="services-card_title">
                                <Link href="/service/service-details">{item.title}</Link>
                            </h4>
                            <p className="services-card_text">{item.content}</p>
                            <div className="shape1"><Image src="/assets/img/shape/servicesShape1_1.png" alt="img" width={104} height={95}   /></div>
                            <div className="shape2"><Image src="/assets/img/shape/servicesShape1_2.png" alt="img" width={58} height={44}   /></div>
                            <div className="shape3"><Image src="/assets/img/shape/servicesShape1_3.png" alt="img" width={104} height={95}   /></div>
                            <div className="shape4"><Image src="/assets/img/shape/servicesShape1_4.png" alt="img" width={58} height={44}   /></div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>
    </div>
    );
};

export default Service1;