import { OPTIONS } from './othelloActionConstants';
import createAction from './createAction';

export default function createActionOptions() {
  return createAction(OPTIONS, {});
}
