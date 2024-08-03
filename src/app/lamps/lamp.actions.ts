import { createAction, props } from '@ngrx/store';

export const turnOnLamp = createAction(
  '[Lamp] Turn On',
  props<{ index: number }>()
);

export const turnOffLamp = createAction(
  '[Lamp] Turn Off',
  props<{ index: number }>()
);

export const toggleAllLamps = createAction('[Lamp] Toggle All');
export const turnOffAllLamps = createAction('[Lamp] Turn Off All');
