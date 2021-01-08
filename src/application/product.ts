import { Request, Response } from 'express';
import findProducts from '../domain/services';

const product = async (request: Request, response: Response) => {
  const { text } = request.params;
  const result = await findProducts(text);
  response.json(result);
};

export default product;
