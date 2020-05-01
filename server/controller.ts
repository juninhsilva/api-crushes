import model from "./model";
import * as mongoose from "mongoose";
class Controller {
  constructor() {}

  saveCrush(data) {
    return model.create(data);
  }

  getCrushes() {
    return model.find({});
  }

  getCrushById(id) {
    return model.find(id);
  }

  deleteCrushById(id) {
    return model.deleteOne(id);
  }

  editCrushById(id, data) {
    return model.findOneAndUpdate(id, data);
  }

  create(req, res) {
    const crush = req.body;
    console.log(crush);
    this.saveCrush(crush)
      .then((crushes) => {
        res.status(200).json({ result: crushes });
      })
      .catch((err) => res.status(400).json({ result: err }));
  }

  select(req, res) {
    this.getCrushes()
      .then((crushes) => {
        res.status(200).json({ result: crushes });
      })
      .catch((err) => res.status(400).json({ result: err }));
  }

  selectById(req, res) {
    const id = { _id: req.params.id };
    this.getCrushById(id)
      .then((crushes) => {
        res.status(200).json({ result: crushes });
      })
      .catch((err) => res.status(400).json({ result: err }));
  }

  deleteById(req, res) {
    const id = { _id: req.params.id };
    this.deleteCrushById(id)
      .then((crushes) => {
        res.status(200).json({ result: crushes });
      })
      .catch((err) => res.status(400).json({ result: err }));
  }

  editById(req, res) {
    const id = { _id: req.params.id };
    const crush = req.body;
    this.editCrushById(id, crush)
      .then((crushes) => {
        res.status(200).json({ result: crushes });
      })
      .catch((err) => res.status(400).json({ result: err }));
  }
}
export default Controller;
