import { Schema, model } from "mongoose";
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
{
    name: { type: String, required: true },
    birth: { type: Date, required: true },
    password: { type: String, required: true },
    email: { type: String, match: emailRegexp, required: true, unique: true },
    createdEvents: { type: Array, ref: 'events', default: [] },
    memberIn: { type: Array, ref: 'events', default: [] },
    friends: { type: Array, ref: 'users', default: [] },
    followedOrganizers:  { type: Array, ref: 'users', default: [] },
},
{
    versionKey: false,
    timestamps: true,
}
)

userSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj;
}

export const UsersCollection = model('users', userSchema)

