import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService }                  from './shared/services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  feedbackForm: FormGroup = new FormGroup({
    'userName': new FormControl(
      null,
      [Validators.required]),
    'userAge': new FormControl(
      null,
      [Validators.required]),
    'inputForbidden': new FormControl(
      null,
      [Validators.required])
  });

  constructor(
    private validationService: ValidationService
  ) {
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      // Working on your validated form data
    } else {
      this.validationService.markAllFormFieldsAsTouched(this.feedbackForm);
    }
  }
}
