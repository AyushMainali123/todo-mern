let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    todo: [
      {
        type: Schema.Types.ObjectId,
        ref: "Todo"
      }
    ]
  },
  {
    timestamps: true,
  }
);

let User = mongoose.model("User", userSchema);

module.exports = User;
