
import { CALCAULTE_AGE } from './types';


// Calculate is the action creator that creates an action. It simply returns an action.
// 
export const calculateAge = birthDate => {
  return {
    type: CALCAULTE_AGE,
    payload: birthDate
  }
}