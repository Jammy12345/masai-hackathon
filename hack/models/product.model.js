import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
   name: {
      type: String,
      require: true,
   },
   price: {
      type: Number,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   mediaUrl: {
      type: String,
      required: true,
   },
});

export default mongoose.models.product ||
   mongoose.model("product", productsSchema);
