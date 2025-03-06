const router = require("express").Router();

// Controller Imports
const WorkTimeRecordController = require("./controllers/WorkTimeRecordController");

// Middleware Imports
const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");

// JSON Schema Imports for payload verification
const createWorkTimeRecordPayload = require("./schemas/createWorkTimeRecordPayload");

router.get("/", WorkTimeRecordController.getWorkTimeRecord);

router.get("/all", WorkTimeRecordController.getAllWorkTimeRecords);

router.post(
  "/",
  [SchemaValidationMiddleware.verify(createWorkTimeRecordPayload)],
  WorkTimeRecordController.createWorkTimeRecord
);

router.delete("/:workTimeRecordId", WorkTimeRecordController.deleteWorkTimeRecord);

module.exports = router;
