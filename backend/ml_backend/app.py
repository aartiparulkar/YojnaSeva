from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load model, encoders, and scalers
model = joblib.load("voting_model.pkl")

state_encoder = joblib.load("state_encoder.pkl")
disability_encoder = joblib.load("disability_encoder.pkl")
age_scaler = joblib.load("age_scaler.pkl")
income_scaler = joblib.load("income_scaler.pkl")


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        print("Received Data: ", data)

        # Extract fields safely
        state = data.get("State Residing In", "")
        disability = data.get("Disability Type", "")
        age = data.get("Age", 0)
        income = data.get("Income", 0)
        disability_percentage = data.get("Disability Percentage", 0)
        
        # Encode categorical variables safely
        try:
            state_encoded = state_encoder.transform([state])[0]
        except:
            return jsonify({"error": f"Unknown state: {state}"}), 400

        try:
            disability_encoded = disability_encoder.transform([disability])[0]
        except:
            return jsonify({"error": f"Unknown disability type: {disability}"}), 400
        
        # Normalize numerical features safely
        try:
            age_normalized = age_scaler.transform([[age]])[0][0]
        except:
            return jsonify({"error": "Error normalizing age"}), 400

        try:
            income_normalized = income_scaler.transform([[income]])[0][0]
        except:
            return jsonify({"error": "Error normalizing income"}), 400

        
        # Create feature array
        features = np.array([
            disability_percentage,  # Not normalized
            income_normalized,
            disability_encoded,
            age_normalized,
            state_encoded
        ]).reshape(1, -1)

        print("Feature Array:", features)  # Debugging
        
        # Get probabilities for each scheme
        probabilities = model.predict_proba(features)[0]

        # Get indices of top 5 highest probabilities
        top_5_indices = np.argsort(probabilities)[-5:][::-1]

        # Get probabilities for each scheme
        probabilities = model.predict_proba(features)[0]

        # Get indices of top 5 highest probabilities
        top_5_indices = np.argsort(probabilities)[-5:][::-1]

        # Get scheme names based on indices (assuming you have scheme labels)
        scheme_labels = model.classes_
        top_5_schemes = [scheme_labels[i] for i in top_5_indices]

        return jsonify({"recommendedSchemes": top_5_schemes})  # Fixed Key Name
    
    except Exception as e:
        return jsonify({"error": str(e)}, 500)


if __name__ == "__main__":
    app.run(debug=True, port=5001)
