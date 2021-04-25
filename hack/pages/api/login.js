import initDB from "../../helpers/initDB";
import User from "../../models/User.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
initDB();

export default async (req, res) => {
   const { email, password } = req.body;
   try {
      if (!email || !password) {
         return res.status(422).json({ error: "Please add all the fields" });
      }
      const user = await User.findOne({ email });
      if (!user) {
         return res
            .status(404)
            .json({ error: "Username or password  not found with that email" });
      }

      const doMatch = await bcrypt.compare(password, user.password);
      if (doMatch) {
         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "2d",
         });
         const { name, role, email } = user;
         res.status(201).json({ token, user: { name, email, role } });
      } else {
         res.status(401).json({ error: "username or password don't match" });
      }
   } catch (error) {
      console.log(error);
   }
};
