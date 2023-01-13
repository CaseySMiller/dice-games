const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
  },
  firstName: {
    type: String,
    trim: true,
    default: 'dice',
  },
  lastName: {
    type: String,
    trim: true,
    default: 'player',
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  farkleGames: [
    {
      type: Schema.Types.ObjectId,
      ref: 'FarkleGame'
    }
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
