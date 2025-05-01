import React from "react";
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import c1 from "../assets/a1.jpg";
import c2 from "../assets/a2.jpg";
import c3 from "../assets/a3.jpg";
import c4 from "../assets/a4.jpg";
import "../styles/home.css";
import "../styles/style.css";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>
          <span className="highlight">Discover</span> government schemes for you...
        </h1>
        <p>Find Personalized Schemes Based on Eligibility</p>
      </section>

      {/* Slider Section */}
      <section className="slider-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <img src={c1} alt="Agriculture Scheme" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c2} alt="Education Scheme" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c3} alt="Health Scheme" className="slider-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c4} alt="Employment Scheme" className="slider-img" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">1️⃣ Fill in your details (disability type, income, location)</div>
          <div className="step">2️⃣ Our AI analyzes and finds suitable schemes</div>
          <div className="step">3️⃣ Get a list of recommended government schemes</div>
          <div className="step">4️⃣ Apply to avail beneficiaries.</div>
        </div>
      </section>

      

      {/* Government Schemes Section */}
      <section className="schemes-section">
        <h3 className="schemes-title">#YojnaSevaSchemesForYou</h3>
        <div className="schemes-stats">
          <div className="scheme-card">
            <h2>18</h2>
            <p>Total Schemes</p>
          </div>
          <div className="scheme-card">
            <h2>12</h2>
            <p>Central Schemes</p>
          </div>
          <div className="scheme-card">
            <h2>6</h2>
            <p>State/UT Schemes</p>
          </div>
        </div>
      </section>
    </Layout>

  );
};

export default Home;
