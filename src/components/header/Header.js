import {$} from '@core/DOM'
import {ExcelComponent} from '@core/ExcelComponent';
import * as actions from '@/redux/actions'
import {defaultTitle} from '@/constants';
import {debounce} from '@core/utils';
import {ActiveRoute} from '@core/Routes/ActiveRoute';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
      ...options,
    });
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300)
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return `
      <input type="text" class="input" value="${title}" />
      <div class="">
        <div class="button" data-button="remove">
          <i class="material-icons" data-button="remove">delete</i>
        </div>
        <div class="button" data-button="exit">
          <i class="material-icons" data-button="exit">exit_to_app</i>
        </div>
      </div>
    `
  }

  onClick(event) {
    const $target = $(event.target)

    let decision

    switch ($target.data.button) {
      case 'remove':
        decision = confirm('Вы действительно хотите удалить эту таблицу?')
        if (decision) {
          localStorage.removeItem('excel:' + ActiveRoute.param)
          ActiveRoute.navigate('')
        }
        break
      case 'exit':
        ActiveRoute.navigate('')
        break
    }
  }

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(actions.changeTitle($target.text()))
  }
}
