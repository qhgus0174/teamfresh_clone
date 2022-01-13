import { IError } from "@type/Response";

export const getErrorMsg = ({ type, code }: IError): IError => {
  return { type: type, code: code };
};
