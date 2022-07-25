import { Action } from '@reduxjs/toolkit';

// Actions types

export enum CommonAction {
  SetHttpError = 'SET_HTTP_ERROR',
}

// Simple actions models

export interface SetHttpErrorAction extends Action<CommonAction.SetHttpError> {
  httpError: string | null;
}

// State

export interface CommonState {
  httpError: string | null;
}
