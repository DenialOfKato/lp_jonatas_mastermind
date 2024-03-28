import {Schema, model, models} from "mongoose"

const UserSchema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: Number, required: true }
})

const User = models.User || model("User", UserSchema)

export default User