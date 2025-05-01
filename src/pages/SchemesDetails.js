import React from 'react';
import { useParams } from 'react-router-dom';
import schemes from '../data/schemeData';
import '../styles/schemesDetails.css';

const SchemesDetails = () => {
  const { id } = useParams();
  const scheme = schemes.find(s => s.id === id);

  if (!scheme) return <p>Scheme not found.</p>;

  return (
    <div className="details-container">
      <h1>{scheme.name}</h1>
      <p><strong>Description:</strong> {scheme.description}</p>
      <p><strong>Benefits:</strong> {scheme.benefits.overview}</p>
      <p><strong>Eligibility:</strong></p>
      <ul>{scheme.eligibility.map((item, i) => <li key={i}>{item}</li>)}</ul>

      <p><strong>Application Process:</strong></p>
      {scheme.applicationProcess.online.length > 0 && (
        <div>
          <strong>Online:</strong>
          <ul>{scheme.applicationProcess.online.map((step, i) => <li key={i}>{step}</li>)}</ul>
        </div>
      )}
      {scheme.applicationProcess.offline.length > 0 && (
        <div>
          <strong>Offline:</strong>
          <ul>{scheme.applicationProcess.offline.map((step, i) => <li key={i}>{step}</li>)}</ul>
        </div>
      )}

      <p><strong>Documents Required:</strong></p>
      <ul>{scheme.documentsRequired.map((doc, i) => <li key={i}>{doc}</li>)}</ul>
    </div>
  );
};

export default SchemesDetails;
