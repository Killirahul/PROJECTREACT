import mongoose from "mongoose";
const Schema = mongoose.Schema;
let userSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    number: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    text:{
        type: String,
        required : true
    }
});
export default mongoose.model("users", userSchema);
