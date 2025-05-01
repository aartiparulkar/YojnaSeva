import React from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Layout from "../components/Layout";
import "../styles/schemes.css";
import "../styles/style.css";


const Schemes = ({ userName }) => {
  const navigate = useNavigate(); // Call useNavigate inside the component

  const schemesData = [
    {
      id: "adip-scheme",
      name: "ADIP Scheme",
      info: "Provides aids and assistive devices to disabled persons to enhance their social and economic status.",
    },
    {
      id: "fellowship-scheme",
      name: "National Fellowship",
      info: "Financial support for students with disabilities pursuing higher education (M.Phil/Ph.D.).",
    },
    {
      id: "niramaya-health-insurance",
      name: "NIRAMAYA Health Insurance",
      info: "A health insurance scheme providing medical coverage for persons with disabilities.",
    },
    {
      id: "gyan-prabha-scheme",
      name: "GYAN PRABHA Scheme",
      info: "A scholarship program supporting students with disabilities in higher education.",
    },
    {
      id: "vikaas-day-care",
      name: "VIKAAS (Day Care)",
      info: "A day-care scheme offering therapy, training, and recreational activities for children with disabilities.",
    },
    {
      id: "maharashtra-welfare-fund",
      name: "Free Education Scheme",
      info: "Covers tuition fees and educational support for children with disabilities.",
    },
  ];

  return (
    <Layout>
      <section className="schemes-section">
        <h2>Government Schemes</h2>
        <div className="schemes-container">
          {schemesData.map((scheme) => {
            // Log scheme details here to debug
            return (
              <Link to={`/details/${scheme.id}`} key={scheme.id} className="scheme-card">
                <h3>{scheme.name}</h3>
                <p><i>{scheme.description}</i></p> {/* not scheme.info */}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ✅ Use the navigate function inside onClick */}
      <center>
        <button className="explore-btn" onClick={() => navigate("/eligibility")}>Check Eligibility</button>
      </center>
    </Layout>
  );
};

export default Schemes;
