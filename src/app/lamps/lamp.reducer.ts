import { createReducer, on } from '@ngrx/store';
import { turnOnLamp, turnOffLamp, toggleAllLamps, turnOffAllLamps } from './lamp.actions';

export interface LampState {
  lamps: boolean[];
}

export const initialState: LampState = {
  lamps: [true, false, false, false, false, false],
};

const _lampReducer = createReducer(
  initialState,
  on(turnOnLamp, (state, { index }) => ({
    ...state,
    lamps: state.lamps.map((lamp, i) => i === index)
  })),
  on(turnOffLamp, (state, { index }) => ({
    ...state,
    lamps: state.lamps.map((lamp, i) => i !== index ? lamp : false)
  })),
  on(toggleAllLamps, state => {
    const allOn = state.lamps.every(lamp => lamp);
    return {
      ...state,
      lamps: state.lamps.map(() => !allOn)
    };
  }),
  on(turnOffAllLamps, state => ({
    ...state,
    lamps: state.lamps.map(() => false)
  }))
);

export function lampReducer(state: any, action: any) {
  return _lampReducer(state, action);
}
