import mongoose from "mongoose";

mongoose.connect("mongodb://schoology-db/schoology", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

export default mongoose;
