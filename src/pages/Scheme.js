import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Layout from "../components/Layout";
import "../styles/schemes.css";

const Schemes = () => {
  const navigate = useNavigate(); // ✅ Call useNavigate inside the component

  const schemesData = [
    {
      name: "ADIP Scheme",
      info: "Provides aids and assistive devices to disabled persons to enhance their social and economic status.",
    },
    {
      name: "National Fellowship",
      info: "Financial support for students with disabilities pursuing higher education (M.Phil/Ph.D.).",
    },
    {
      name: "NIRAMAYA Health Insurance",
      info: "A health insurance scheme providing medical coverage for persons with disabilities.",
    },
    {
      name: "GYAN PRABHA Scheme",
      info: "A scholarship program supporting students with disabilities in higher education.",
    },
    {
      name: "VIKAAS (Day Care)",
      info: "A day-care scheme offering therapy, training, and recreational activities for children with disabilities.",
    },
    {
      name: "Free Education Scheme",
      info: "Covers tuition fees and educational support for children with disabilities.",
    },
  ];

  return (
    <Layout>
      <section className="schemes-section">
        <h2>Government Schemes</h2>
        <div className="schemes-container">
          {schemesData.map((scheme, index) => (
            <div key={index} className="scheme-card">
              <h3>{scheme.name}</h3>
              <p><i>{scheme.info}</i></p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Use the navigate function inside onClick */}
      <button onClick={() => navigate("/eligibility")}>Explore All Schemes</button>
    </Layout>
  );
};

export default Schemes;
