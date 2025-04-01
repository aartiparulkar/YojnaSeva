import React from "react";
import Layout from "../components/Layout";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import "../styles/home.css";

const Home = () => {
  return (
    <Layout>

      <section className="featured-schemes">
        <div className="scheme">
          <img src={c1} alt="Agriculture Scheme" className="scheme-img" />
          <div className="scheme-info">
            <h2>Agriculture Support</h2>
            <p>Government initiatives to support farmers with subsidies and resources.</p>
            <button className="explore-btn">Explore More</button>
          </div>
        </div>

        <div className="scheme reverse">
          <img src={c2} alt="Education Scheme" className="scheme-img" />
          <div className="scheme-info">
            <h2>Education Assistance</h2>
            <p>Scholarships and financial aid for students to continue higher education.</p>
            <button className="explore-btn">Explore More</button>
          </div>
        </div>

        <div className="scheme">
          <img src={c3} alt="Health Scheme" className="scheme-img" />
          <div className="scheme-info">
            <h2>Healthcare Benefits</h2>
            <p>Affordable medical care and insurance plans for all citizens.</p>
            <button className="explore-btn">Explore More</button>
          </div>
        </div>
      </section>


    </Layout>
  );
};

export default Home;
