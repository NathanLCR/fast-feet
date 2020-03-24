import Recipient from "../models/Recipient";

class RecipientController {
  async store(req, res) {
    const {
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = await Recipient.create(req.body);

    return res.json({ name, street, number, complement, state, city, cep });
  }
}

export default new RecipientController();
