import { useLocation, useNavigate } from "react-router-dom";

const SchemesPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const { schemes = [], userData = {} } = location.state || {}; // Default to empty objects

    // Ensure disability_percentage & annual_income exist before filtering
    const disability_percentage = userData["Disability Percentage"] || 0;
    const annual_income = userData["Annual Income"] || 0;

    // Apply eligibility filters
    const filteredSchemes = schemes.filter((scheme) => {
        if (disability_percentage < 40) return false;
        if (annual_income > 600000) return false;
        return true;
    });

    return (
        <div>
            <h2>Recommended Schemes</h2>

            {filteredSchemes.length > 0 ? (
                <ul>
                    {filteredSchemes.map((scheme, index) => (
                        <li key={index}>{scheme}</li>
                    ))}
                </ul>
            ) : (
                <p>You do not qualify for any schemes based on your income or disability percentage.</p>
            )}

            <button onClick={() => navigate("/eligibility")}>Check Again</button>
        </div>
    );
};

export default SchemesPage;
