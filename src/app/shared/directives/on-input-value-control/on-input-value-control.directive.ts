import { Directive, HostListener, Input } from '@angular/core';
import { includes }                       from 'lodash';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[OnInputValueControl]'
})
export class OnInputValueControlDirective {

  @Input('OnInputValueControl') option: string;

  @HostListener('keydown', ['$event'])
  onKeyDown(event) {

    if (!this.option) {
      return true;
    }

    const key = event['key'];
    const allowedKeysList = ['Tab', 'Backspace', 'ArrowRight', 'ArrowLeft'];


    switch (this.option) {

      case 'inputForbidden':
        return false;

      case 'numbersOnly':

        /**
         *  isNumberPressed === true, if key is allowed,
         *  isNumberPressed === false - in other case
         */
        const isNumberPressed = !!(key >= '0' && key <= '9');

        /**
         *  isPermitted === true, if key is allowed,
         *  isPermitted === false - in other case
         */
        const isPermitted = event.ctrlKey || includes(allowedKeysList, key);

        return isPermitted || isNumberPressed;
    }
  }
}
