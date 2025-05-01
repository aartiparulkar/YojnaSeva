// cleaned_scheme_data.js

const schemes = [
    {
        id: "fellowship-scheme",
        name: "National Fellowship for Students with Disabilities",
        description: "This scheme provides financial assistance for students with disabilities pursuing higher education.",
        benefits: {
            overview: "Covers tuition fees, maintenance allowance, and other incidental expenses."
        },
        eligibility: [
            "Student with 40% or more disability",
            "Enrolled in recognized higher education institution"
        ],
        applicationProcess: {
            offline: [
                "Download form from official website",
                "Fill and attach required documents",
                "Submit to the respective department"
            ],
            online: [
                "Visit the NSP portal",
                "Register and fill the application form",
                "Upload necessary documents",
                "Submit the application"
            ]
        },
        documentsRequired: [
            "Disability certificate",
            "Aadhaar card",
            "Income certificate",
            "Bonafide certificate from institution",
            "Bank passbook copy"
        ]
    },
    {
        id: "maharashtra-welfare-fund",
        name: "Maharashtra Disability Welfare Fund",
        description: "Provides grants and assistive devices to persons with disabilities in Maharashtra.",
        benefits: {
            overview: "One-time financial assistance for aids, appliances, and skill training.",
            assistiveDevices: {
                physical: ["Wheelchair", "Crutches", "Walker"],
                visual: ["Braille kit", "Talking watch"],
                hearing: ["Hearing aids"],
                mental: ["Special learning material"]
            }
        },
        eligibility: [
            "Resident of Maharashtra",
            "Certified disability of 40% or more",
            "Below poverty line (BPL) or low-income group"
        ],
        applicationProcess: {
            offline: [
                "Collect application from district office",
                "Submit with medical and income proof"
            ],
            online: []
        },
        documentsRequired: [
            "Disability certificate",
            "Income certificate",
            "Residential proof",
            "Passport size photo",
            "Aadhaar card"
        ]
    },
    {
        id: "adip-scheme",
        name: "ADIP Scheme",
        description: "Provides aids and assistive devices to disabled persons to enhance their social and economic status.",
        benefits: {
            overview: "One-time financial assistance for aids, appliances, and skill training.",
            assistiveDevices: {
                physical: ["Wheelchair", "Crutches", "Walker"],
                visual: ["Braille kit", "Talking watch"],
                hearing: ["Hearing aids"],
                mental: ["Special learning material"]
            }
        },
        eligibility: [
            "Indian citizen with a disability of 40% or more",
            "Age between 5-35 years",
            "Income should not exceed the prescribed limit"
        ],
        applicationProcess: {
            offline: [
                "Collect application from district office or online portal",
                "Submit with medical proof and income certificate"
            ],
            online: [
                "Visit the official ADIP portal",
                "Fill the online application form",
                "Upload necessary documents",
                "Submit the application"
            ]
        },
        documentsRequired: [
            "Disability certificate",
            "Income certificate",
            "Aadhaar card",
            "Passport size photo"
        ]
    },
    {
        id: "niramaya-health-insurance",
        name: "NIRAMAYA Health Insurance",
        description: "A health insurance scheme providing medical coverage for persons with disabilities.",
        benefits: {
            overview: "Covers hospitalization, surgery, and medical treatment for persons with disabilities.",
            coverage: {
                hospitalization: "Covers inpatient treatment and surgeries.",
                outpatient: "Covers consultations and minor treatments."
            }
        },
        eligibility: [
            "Person with disability",
            "Age between 18-65 years",
            "Must be covered under a valid disability certificate"
        ],
        applicationProcess: {
            offline: [
                "Visit the nearest NIRAMAYA office",
                "Fill the application form and submit with necessary documents"
            ],
            online: [
                "Visit the official NIRAMAYA website",
                "Register and fill the online application form",
                "Submit necessary documents"
            ]
        },
        documentsRequired: [
            "Disability certificate",
            "Aadhaar card",
            "Bank account details",
            "Recent medical reports"
        ]
    },
    {
        id: "gyan-prabha-scheme",
        name: "GYAN PRABHA Scheme",
        description: "A scholarship program supporting students with disabilities in higher education.",
        benefits: {
            overview: "Provides scholarships for students with disabilities pursuing higher education.",
            funding: "Covers tuition fees, books, and other academic expenses."
        },
        eligibility: [
            "Student with at least 40% disability",
            "Enrolled in recognized educational institutions",
            "Family income below a certain threshold"
        ],
        applicationProcess: {
            offline: [
                "Download application from the official website",
                "Fill and attach the required documents",
                "Submit to the scholarship office"
            ],
            online: [
                "Visit the official GYAN PRABHA portal",
                "Fill in the online application form",
                "Upload documents and submit"
            ]
        },
        documentsRequired: [
            "Disability certificate",
            "Income certificate",
            "Student ID card",
            "Passport size photo"
        ]
    },
    {
        id: "vikaas-day-care",
        name: "VIKAAS (Day Care)",
        description: "A day-care scheme offering therapy, training, and recreational activities for children with disabilities.",
        benefits: {
            overview: "Daycare for children with disabilities, providing therapy, education, and recreational support.",
            services: {
                therapy: ["Speech therapy", "Physical therapy", "Occupational therapy"],
                education: ["Basic literacy", "Skill development", "Social skills training"]
            }
        },
        eligibility: [
            "Child with a disability between 2-18 years",
            "Family income below the prescribed limit"
        ],
        applicationProcess: {
            offline: [
                "Visit the VIKAAS center or district office",
                "Submit a completed application form with required documents"
            ],
            online: [
                "Visit the official VIKAAS website",
                "Fill in the online application form",
                "Upload necessary documents and submit"
            ]
        },
        documentsRequired: [
            "Disability certificate",
            "Aadhaar card",
            "Proof of residence",
            "Parent/guardian details"
        ]
    },
    {
        id: "disha-scheme",
        name: "DISHA (Disability Support and Help Assistance)",
        description: "Provides guidance and support to persons with disabilities for accessing government schemes and services.",
        benefits: {
            overview: "Assistance in applying for government schemes, aids, and rehabilitation services for persons with disabilities.",
            support: [
                "Guidance on available government schemes",
                "Help in application processing",
                "Follow-up and advocacy services"
            ]
        },
        eligibility: [
            "Person with disability",
            "Resident of India"
        ],
        applicationProcess: {
            offline: [
                "Visit the DISHA office",
                "Fill the application form and submit documents"
            ],
            online: [
                "Visit the official DISHA portal",
                "Fill in the online application form",
                "Submit required documents"
            ]
        },
        documentsRequired: [
            "Disability certificate",
            "Aadhaar card",
            "Income certificate"
        ]
    }
];

export default schemes;
