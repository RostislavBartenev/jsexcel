import {storage} from '@core/utils';
import {defaultStyes, defaultTitle} from '@/constants';


const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyes,
}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyes,
  currentText: ''
})

export const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
  : defaultState
