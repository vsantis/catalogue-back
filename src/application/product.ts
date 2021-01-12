import { Request, Response } from 'express';
import { findProducts, createProducts, updateProducts, deleteProducts } from '../domain/services';

export const findProductsApplication = async (request: Request, response: Response) => {
  const { text } = request.params;
  const result = await findProducts(text);
  response.json(result);
};

export const createProductsApplication = async (request: Request, response: Response) => {
  const { body } = request;
  const result = await createProducts(body);
  response.json(result);
};

export const updateProductsApplications = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { body } = request;
  const result = await updateProducts(Number(id), body);
  response.json(result);
};

export const deleteProductsApplications = async (request: Request, response: Response) => {
  const { id } = request.params;
  const result = await deleteProducts(Number(id));
  response.json(result);
};
