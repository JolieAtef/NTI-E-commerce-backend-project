import { Schema, model } from "mongoose";
import { Users } from "../interfaces/user";
import bcrypt from 'bcryptjs';


const usersSchema: Schema = new Schema<Users>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6, maxlength: 20 },
  address: { type: String , required:true , default: 'Not entered yet', minlength: 10 , maxlength: 35 },
  image: { type: String , default:"user-profile.jpg"},
  role: { type: String, required: true, enum: ['manager', 'admin', 'user'], default: 'user' },
  active: { type: Boolean, default: true },
  wishlist: [{ type: Schema.Types.ObjectId, ref: 'products' }],
  passwordChangedAt: Date,
  resetCode: String,
  resetCodeExpireTime: Date,
  resetCodeVerify: Boolean
}, { timestamps: true });

// const imageUrl = (document: Users) => {
//   if (document.image) {
//     const imageUrl: string = `${process.env.BASE_URL}/users/${document.image}`;
//     document.image = imageUrl;
//   }
// }

// usersSchema
// .post('init', (document: Users) => { imageUrl(document) })
// .post('save', (document: Users) => { imageUrl(document) })

usersSchema.pre<Users>('save', async function (next) {
  if (!this.isModified('password')) return next;
  this.password = await bcrypt.hash(this.password, 13)
});

export default model<Users>('users', usersSchema)