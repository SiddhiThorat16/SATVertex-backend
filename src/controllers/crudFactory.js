// SATVertex/SATVertex-backend/src/models/About.js

exports.createOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    console.error('Create error:', err);
    res.status(400).json({ message: 'Error creating document', error: err.message });
  }
};

exports.getAll = (Model) => async (req, res) => {
  try {
    const docs = await Model.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    console.error('Get all error:', err);
    res.status(500).json({ message: 'Error fetching documents', error: err.message });
  }
};

exports.getOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findById(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json(doc);
  } catch (err) {
    console.error('Get one error:', err);
    res.status(500).json({ message: 'Error fetching document', error: err.message });
  }
};

exports.updateOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json(doc);
  } catch (err) {
    console.error('Update error:', err);
    res.status(400).json({ message: 'Error updating document', error: err.message });
  }
};

exports.deleteOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ message: 'Error deleting document', error: err.message });
  }
};
