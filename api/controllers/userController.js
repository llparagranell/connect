const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name: name,
      email: email,
      password: encryptedUserPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      "qwertyuiop1234567890",
      {
        expiresIn: "5h",
      }
    );

    user.token = token;

    user.save().then(res.send("sucessfull"));
  } catch (error) {
    console.log(error);
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ user_id: user._id, email },"qwertyuiop1234567890", {
        expiresIn: "5h",
      });
      const cookieOptions = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      user.token = token;

      res.cookie("jwt", token, cookieOptions);

      res.send(true).status(200);
    } else {
      res.send(false).status(404);
    }
  } catch (error) {
    console.log(error);
  }
};
const getuser = async (req, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const person = async (req, res) => {
  try {
    const data = await User.findOne({email:req.params.email});
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async(req,res) => {
  try {
    const data = await User.deleteOne({email:req.params.email})
    res.send(data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  registerUser,
  loginUser,
  getuser,
  person,
  deleteUser
};
