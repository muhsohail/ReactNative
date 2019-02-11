import { CHANGE_DATE } from './types';
export const changeDate = birthDate => {
  return {
    type: CHANGE_DATE,
    payload: birthDate
  }
}
