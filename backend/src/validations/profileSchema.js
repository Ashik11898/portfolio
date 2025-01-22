export const profileSchema = {
  type: "object",
  properties: {
    userid: { type: "string", minLength: 24 }, // User ID must be a non-empty string
    technical_skills: {
      type: "array",
      items: { type: "string", minLength: 1 }, // Ensure skills are non-empty strings
    },
    experience: {
      type: "array",
      items: {
        type: "object",
        properties: {
          company: { type: "string", minLength: 1 },
          location: { type: "string", minLength: 1 },
          role: { type: "string", minLength: 1 },
          duration: { type: "string", minLength: 1 },
          projects: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string", minLength: 1 },
                responsibilities: {
                  type: "array",
                  items: { type: "string", minLength: 1 }, // Ensure responsibilities are non-empty strings
                },
                technologies: {
                  type: "array",
                  items: { type: "string", minLength: 1 }, // Ensure technologies are non-empty strings
                },
              },
              required: ["name", "responsibilities", "technologies"], // Ensure these fields exist
              additionalProperties: false,
            },
            minItems: 1, // Ensure there is at least one project
          },
        },
        required: ["company", "location", "role", "duration", "projects"], // Ensure these fields exist
        additionalProperties: false,
      },
      minItems: 1, // Ensure at least one experience entry exists
    },
    education: {
      type: "array",
      items: {
        type: "object",
        properties: {
          degree: { type: "string", minLength: 1 },
          institution: { type: "string", minLength: 1 },
          duration: { type: "string", minLength: 1 },
        },
        required: ["degree", "institution", "duration"], // Ensure these fields exist
        additionalProperties: false,
      },
      minItems: 1, // Ensure at least one education entry exists
    },
    personal: {
      type: "object",
      properties: {
        name: { type: "string", minLength: 1 },
        experience: { type: "string", minLength: 1 },
        one_line: { type: "string", minLength: 1 },
        role: { type: "string", minLength: 1 },
        role_heading: { type: "string", minLength: 1 },
      },
      required: ["name", "experience", "one_line", "role", "role_heading"], // Ensure these fields exist
      additionalProperties: false,
    },
  },
  required: ["userid", "technical_skills", "experience", "education", "personal"], // Top-level required fields
  additionalProperties: false,
};
