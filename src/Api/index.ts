import {GetRequest, PostRequest} from '../constant';
import {URL} from '../constant/BaseURL';

export const getData = (): any => {
  return GetRequest(`${URL}/pokemon`);
};
