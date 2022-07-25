import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { CommonAction, SetHttpErrorAction, CommonState } from 'common/store';

// Simple actions

export const setHttpError = (httpError: Error | null): SetHttpErrorAction => {
  return {
    httpError: httpError !== null ? `${httpError}` : httpError,
    type: CommonAction.SetHttpError,
  };
};

// Thunk actions

export const clearHttpError = (): any => {
  return (dispatch: ThunkDispatch<CommonState, null, AnyAction>) => {
    dispatch(setHttpError(null));
  };
};
