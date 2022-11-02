import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser {
  email: string,
  password: string,
  passwordConfirm: string | undefined,
  bookmarked: string[]
}

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: [true, 'User must have an email'],
    match: /.+@.+\..+/,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'User must have a password'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator(this: IUser, value: string) {
        return value === this.password;
      },
      message: 'Passwords do not match',
    }
  },
  bookmarked: [
    {
      type: String
    }
  ],
});

userSchema.pre('save', async function(next) {
  if(!this.isModified('password')) {
    return next();
  }
  
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  return next();
});

export default mongoose.model<IUser>('User', userSchema);