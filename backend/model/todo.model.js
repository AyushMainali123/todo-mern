let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let exerciseSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    // user: {
    //   type: String,
    //   required: true,
    // },
    item: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let Todo = mongoose.model("Todo", exerciseSchema);

module.exports = Todo;
