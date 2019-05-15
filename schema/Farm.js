const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const farmSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  chickens: {
    type: {},
    required: true,
  },
});

farmSchema.index(
  {
    userId: 1,
  },
  {
    unique: true,
  }
);

module.exports = Farm = mongoose.model("farms", farmSchema);
