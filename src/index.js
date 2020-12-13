import './scss/index.scss'

import {Router} from '@core/Routes/Router';

import {ExcelPage} from '../pages/ExcelPage';
import {DashboardPage} from '../pages/DashboardPage';

new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPage,
})
