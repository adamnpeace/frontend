import { createGlobalState } from 'react-hooks-global-state';

export const { GlobalStateProvider, useGlobalState } = createGlobalState({
  auth: false,
  name: '',
  loading: false,
  topics: []
});