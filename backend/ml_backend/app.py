from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load model, encoders, and scalers
model = joblib.load("stacking_model.pkl")

state_encoder = joblib.load("state_encoder.pkl")
disability_encoder = joblib.load("disability_encoder.pkl")
age_scaler = joblib.load("age_scaler.pkl")
income_scaler = joblib.load("income_scaler.pkl")


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        print("Received Data: ", data)

        # Encode categorical variables
        state_encoded = state_encoder.transform([data["State Residing In"]])[0]
        disability_encoded = disability_encoder.transform([data["Disability Type"]])[0]

        
        # Normalize numerical features
        age_normalized = age_scaler.transform([[data["Age"]]])[0][0]
        income_normalized = income_scaler.transform([[data["Annual Income"]]])[0][0]

        
        # Create feature array
        features = np.array(data['Disability Percentage', income_normalized, disability_encoded, age_normalized, state_encoded]).reshape(1, -1)
        

        # Make predictions
        prediction = model.predict(features)
        
        return jsonify({"scheme": prediction[0]})
    
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True)
