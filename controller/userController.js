import User from "../models/userModels.js";

export const getUser = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json({
      status: 200,
      data: response,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: { id: req.params.id },
    });
    if (response == null) {
      res.status(200).json({
        status: 422,
        msg: "User not found",
        data: response,
      });
    } else {
      res.status(200).json({
        status: 200,
        msg: "User found",
        data: response,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email: email, password: password },
    });
    if (user === null) {
      res
        .status(422)
        .json({ msg: "Email & Password tidak terdaftar", user: user });
    }
    if (user.password == null) {
      res
        .status(422)
        .json({ msg: "Password tidak cocok", user: user.password });
    }
    return res
      .status(200)
      .json({ status: "Success", msg: "Login Berhasil", user: user });
  } catch (error) {
    console.log(error.message);
  }
};
