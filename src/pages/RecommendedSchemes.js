import { useLocation, useNavigate } from "react-router-dom";
import "../styles/schemes.css"; // Use your main schemes CSS
import "../styles/style.css";
import Layout from "../components/Layout";

const SchemesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { schemes = [], userData = {} } = location.state || {};

  const disability_percentage = userData["Disability Percentage"] || 0;
  const annual_income = userData["Annual Income"] || 0;

  const filteredSchemes = schemes.filter((scheme) => {
    if (disability_percentage < 40) return false;
    if (annual_income > 600000) return false;
    return true;
  });

  return (
    <Layout>
      <section className="schemes-section">
        <h2 className="schemes-title">Recommended Schemes</h2>

        <div className="schemes-container">
          {filteredSchemes.length > 0 ? (
            filteredSchemes.map((scheme, index) => (
              <div key={index} className="scheme-card">
                <p>{scheme}</p>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", width: "100%" }}>
              You do not qualify for any schemes based on your income or disability percentage.
            </p>
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button className="explore-btn" onClick={() => navigate("/eligibility")}>
            Check Again
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default SchemesPage;
