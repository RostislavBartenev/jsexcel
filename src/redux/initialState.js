import {defaultStyes, defaultTitle} from '@/constants';
import {clone} from '@core/utils';

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  openedDate: new Date().toJSON(),
  currentText: '',
  currentStyles: defaultStyes,
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyes,
  currentText: ''
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
