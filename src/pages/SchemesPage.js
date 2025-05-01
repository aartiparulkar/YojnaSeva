// src/pages/SchemesPage.jsx
import React from 'react';
import schemes from '../data/schemes';

const SchemesPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Featured Schemes</h1>
      {schemes.map(scheme => (
        <div key={scheme.id} style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
          <h2>{scheme.name}</h2>
          <p><strong>Description:</strong> {scheme.description}</p>
          <p><strong>Benefits:</strong> {scheme.benefits.overview}</p>
          <p><strong>Eligibility:</strong></p>
          <ul>
            {scheme.eligibility.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p><strong>Application Process:</strong></p>
          <ul>
            {scheme.applicationProcess.online.length > 0 && (
              <li><strong>Online:</strong>
                <ul>{scheme.applicationProcess.online.map((step, i) => <li key={i}>{step}</li>)}</ul>
              </li>
            )}
            {scheme.applicationProcess.offline.length > 0 && (
              <li><strong>Offline:</strong>
                <ul>{scheme.applicationProcess.offline.map((step, i) => <li key={i}>{step}</li>)}</ul>
              </li>
            )}
          </ul>
          <p><strong>Documents Required:</strong></p>
          <ul>
            {scheme.documentsRequired.map((doc, i) => <li key={i}>{doc}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SchemesPage;
