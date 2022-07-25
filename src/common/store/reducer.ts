import { AnyAction } from '@reduxjs/toolkit';
import { CommonAction, CommonState, SetHttpErrorAction } from 'common/store';

export const initialState: CommonState = {
  httpError: null,
};

const setHttpError = (state: CommonState, { httpError }: SetHttpErrorAction) => {
  return {
    ...state,
    httpError,
  };
};

export function commonReducer(state = initialState, action: AnyAction): CommonState {
  switch (action.type) {
    case CommonAction.SetHttpError: return setHttpError(state, action as SetHttpErrorAction);

    default: return state;
  }
}
