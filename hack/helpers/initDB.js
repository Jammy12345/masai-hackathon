import mongoose from "mongoose";
function initDB() {
   if (mongoose.connections[0].readyState) {
      console.log("already connected");
      return;
   }
   mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
   });
   mongoose.connection.on("connected", () => {
      console.log("connected to mongo");
   });
   mongoose.connection.on("error", (err) => {
      console.log("error to mongo", err);
   });
}

export default initDB;
// mw3iDA8faCsjrJZ1;
//mongodb+srv://shalendra:<password>@cluster0.4l2zs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
