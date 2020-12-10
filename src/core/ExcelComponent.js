import {DOMListener} from '@core/DOMListener';

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubs = []

    this.prepare()
  }

  prepare() {

  }

  toHTML() {
    return ''
  }

  $emit(event, ...arg) {
    this.emitter.emit(event, ...arg)
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubs.push(unsub)
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
    this.unsubs.forEach(unsub => unsub())
  }
}
