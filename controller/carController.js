import Car from "../models/carModels.js";

export const getCar = async (req, res) => {
  try {
    const response = await Car.findAll();
    res.status(200).json({
      status: 200,
      total: response.length,
      data: response,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const registerCar = async (req, res) => {
  try {
    const response = await Car.create(req.body);
    res.status(200).json({
      status: 200,
      msg: "Car Registered Successfuly",
      data: response,
    });
  } catch (error) {
    console.log(error.message);

  }
};

export const deleteCar = async (req, res) => {
  try {
    await Car.destroy({
        where: {id: req.params.id}
    });
    if (req.params.id === !null) {
        res.status(200).json({
            status: 200,
            msg: "Car Deleted Successfuly",
          });
    } else {
        res.status(200).json({
            status: 200,
            msg: `There's no car with id ${req.params.id}`,
          });
    }
  } catch (error) {
    console.log(error.message);

  }
};
