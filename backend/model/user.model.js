let mongoose = require("mongoose");
let todoModel = require("./todo.model");

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

userSchema.pre("remove",async function(next){
  todos = await todoModel.find({ user:this._id });
  if (todos){
    await todoModel.deleteMany({user:this._id});
    console.log("DELETED MANY TODS BY THIS USER")
  }
  next();
})


let User = mongoose.model("User", userSchema);

module.exports = User;
