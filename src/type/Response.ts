export interface IResponse<T> {
  result: T;
  resultCode: string;
  resultMsg: string;
}

export interface IError {
  type: string;
  code: string;
}
