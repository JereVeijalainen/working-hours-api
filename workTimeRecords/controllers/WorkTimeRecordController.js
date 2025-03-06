const WorkTimeRecordModel = require("../../common/models/WorkTimeRecord");

module.exports = {
  getWorkTimeRecord: (req, res) => {
    const {
      workTimeRecord: { workTimeRecordId },
    } = req;

    WorkTimeRecordModel.findWorkTimeRecord({ id: workTimeRecordId })
      .then((workTimeRecord) => {
        return res.status(200).json({
          status: true,
          data: workTimeRecord.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  getAllWorkTimeRecords: (req, res) => {
    WorkTimeRecordModel.findAllWorkTimeRecords(req.query)
      .then((workTimeRecords) => {
        return res.status(200).json({
          status: true,
          data: workTimeRecords,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  createWorkTimeRecord: (req, res) => {
    const payload = req.body;

    WorkTimeRecordModel.createWorkTimeRecord(payload)
      .then((workTimeRecord) => {
        return res.status(200).json({
          status: true,
          data: workTimeRecord.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

  deleteWorkTimeRecord: (req, res) => {
    const {
      params: { workTimeRecordId },
    } = req;

    WorkTimeRecordModel.deleteWorkTimeRecord({ id: workTimeRecordId })
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfWorkTimeRecordsDeleted: numberOfEntriesDeleted
          }
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },

};
