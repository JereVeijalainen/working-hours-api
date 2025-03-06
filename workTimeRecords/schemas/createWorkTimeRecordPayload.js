module.exports = {
  type: "object",
  properties: {
    project: {
      type: "string"
    },
    worker: {
      type: "string"
    },
    date: {
      type: "string"
    },
    hours: {
      type: "number"
    },
    description: {
      type: "string"
    },
  },
  required: ["project", "worker", "date", "hours", "description"],
  additionalProperties: false
};
