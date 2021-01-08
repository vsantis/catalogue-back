import { Request, Response, NextFunction } from 'express';

const requestLogger = () => (request: Request, response: Response, next: NextFunction) => {
  const date = new Date();
  const currentDateTime = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')} ${date
    .getHours()
    .toString()
    .padStart(2, '0')}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  const { method, url } = request;
  const { statusCode } = response;
  const stringToLog = `${currentDateTime} - ${method} ${url} ${statusCode}`;
  // tslint:disable-next-line: no-console
  console.debug(stringToLog);
  next();
};

export default requestLogger;
