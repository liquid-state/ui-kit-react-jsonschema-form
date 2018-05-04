import React from 'react';
import Form from '../src/index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


const simpleSchema = {
  "type": "object",
  "title": "Patient Demographics",
  "properties": {
    "title": {
      "title": "Title",
      "type": "string",
      "enum": [
        "mr",
        "mrs",
        "ms",
        "miss",
        "master",
        "dr"
      ],
      "enumNames": [
        "Mr",
        "Mrs",
        "Ms",
        "Miss",
        "Master",
        "Dr"
      ]
    },
    "first_name": {
      "type": "string",
      "title": "First name"
    },
    "last_name": {
      "type": "string",
      "title": "Last name"
    },
    "dob": {
      "title": "DOB",
      "type": "string",
      "format": "date"
    },
    "gender": {
      "title": "Gender",
      "type": "string",
      "enum": [
        "male",
        "female"
      ],
      "enumNames": [
        "Male",
        "Female"
      ]
    },
    "street_address": {
      "type": "string",
      "title": " Street Address"
    },
    "suburb": {
      "type": "string",
      "title": "City"
    },
    "state": {
      "type": "string",
      "title": "State",
      "enum": [
        "qld",
        "vic",
        "nsw",
        "sa",
        "wa",
        "tas"
      ],
      "enumNames": [
        "Queensland",
        "Victoria",
        "New South Wales",
        "South Australia",
        "Western Australia",
        "Tasmania"
      ]
    },
    "postcode": {
      "type": "string",
      "title": "Post code"
    },
    "email_address": {
      "type": "string",
      "format": "email",
      "title": "Email Address"
    },
    "mobile_number": {
      "type": "string",
      "title": "Mobile Number:",
      "minLength": 10
    },
    "home_number": {
      "type": "string",
      "title": "Home Number:",
      "minLength": 8
    },
    "alternate_number": {
      "title": "Alternate Number",
      "type": "string",
      "minLength": 8
    },
    "preferred_contact": {
      "title": "Preferred Contact",
      "type": "string",
      "enum": [
        "email",
        "mobile",
        "home_phone",
        "alternate_number"
      ],
      "enumNames": [
        "Email",
        "Mobile",
        "Home Phone",
        "Alternate Number"
      ]
    },
    "medicare_number": {
      "title": "Medicare Number",
      "type": "string"
    },
    "medicare_irn": {
      "type": "string",
      "title": "Medicare IRN"
    },
    "medicare_expiry_date": {
      "title": "Medicare Expiry Date",
      "type": "string",
      "format": "date"
    },
    "health_fund": {
      "title": "Health Fund",
      "type": "string"
    },
    "membership_number": {
      "title": "Membership Number",
      "type": "string"
    },
    "industry": {
      "title": "Industry",
      "type": "object",
      "properties": {
        "industry": {
          "title": "Please select the industry of your occupation from the list below.",
          "type": "string",
          "enum": [
            "business_management_and_consulting",
            "charity_and_voluntary_work",
            "construction_and_manufacturing",
            "design_and_the_arts",
            "energy_and_utility",
            "engineering",
            "environment_and_agriculture",
            "finance_accountancy_banking",
            "healthcare",
            "gospitality_and_events_management",
            "information_technology",
            "law",
            "law_enforcement_and_security",
            "leisure_and_tourism",
            "media_and_the_internet",
            "property",
            "public_service_and_administration",
            "recruitment_and_hr",
            "retail",
            "sales",
            "science_and_pharmaceuticals",
            "social_care",
            "sports_and_athleticism",
            "teaching_training_and_education",
            "transport_and_logistics",
            "other"
          ],
          "enumNames": [
            "Business, management and consulting",
            "Charity and voluntary work",
            "Construction and manufacturing",
            "Design and the arts",
            "Energy and utility",
            "Engineering",
            "Environment and agriculture",
            "Finance, accountancy, banking",
            "Healthcare",
            "Hospitality and events management",
            "Information Technology",
            "Law",
            "Law enforcement and Security",
            "Leisure and tourism",
            "Media and the internet",
            "Property",
            "Public service and administration",
            "Recruitment and HR",
            "Retail",
            "Sales",
            "Science and Pharmaceuticals",
            "Social Care",
            "Sports and Athleticism",
            "Teaching, training and education",
            "Transport and Logistics",
            "Other (Please specify)"
          ]
        }
      },
      "dependencies": {
        "industry": {
          "oneOf": [
            {
              "properties": {
                "industry": {
                  "enum": [
                    "business_management_and_cunsulting",
                    "charity_and_voluntary_work",
                    "construction_and_manufacturing",
                    "design_&_the_arts",
                    "energy_and_utility",
                    "engineering",
                    "environment_and_agriculture",
                    "finance_accountancy_banking",
                    "healthcare",
                    "gospitality_and_events_management",
                    "information_technology",
                    "law",
                    "law_enforcement_and_security",
                    "leisure_and_tourism",
                    "media_and_the_internet",
                    "property",
                    "public_service_and_administration",
                    "recruitment_and_hR",
                    "retail",
                    "sales",
                    "science_and_pharmaceducals",
                    "social_care",
                    "sports_and_athleticism",
                    "teacher_training_and_education",
                    "transport_and_logistics"
                  ]
                }
              }
            },
            {
              "properties": {
                "industry": {
                  "enum": [
                    "other"
                  ]
                },
                "industry_name": {
                  "title": " ",
                  "type": "string"
                }
              }
            }
          ]
        }
      }
    },
    "working": {
      "title": "Are you currently working?",
      "type": "object",
      "properties": {
        "currently_working": {
          "title": "Are you currently working?",
          "type": "boolean",
          "enumNames": [
            "Yes",
            "No"
          ]
        }
      },
      "dependencies": {
        "currently_working": {
          "oneOf": [
            {
              "properties": {
                "currently_working": {
                  "enum": [
                    false
                  ]
                }
              }
            },
            {
              "properties": {
                "currently_working": {
                  "enum": [
                    true
                  ]
                },
                "position_title": {
                  "title": "What is your Position title?",
                  "type": "string"
                }
              }
            }
          ]
        }
      }
    },
    "upload_your_picture": {
      "title": "We would like to put a face to your name. Please upload a picture of yourself.",
      "type": "string",
      "format": "data-url"
    }
  }
};

storiesOf('Form', module)
  .add('Simple form', () => <Form schema={simpleSchema} />);
