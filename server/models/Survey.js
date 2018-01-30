const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  //underscore demonstrates that this property on the schema is a relationship field
  //not just a property housing raw data
  _user: { type: Schema.Types.ObjectId, ref: "user" }
});

mongoose.model("surveys", surveySchema);
