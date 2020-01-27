import joi from "joi";

export interface Service extends ArangoDB.Document {
  name?: string;
}

export const serviceSchema = joi
  .array()
  .items(
    joi.object({
      _id: joi.string().required(),
      _key: joi.string().required(),
      _rev: joi.string().required(),
      name: joi.string().required()
    })
  )
  .required();
