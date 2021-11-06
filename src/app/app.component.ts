import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms"
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      password: ['',[lowercaseValidator]]
    })
  }
}

export function lowercaseValidator(c: FormControl) {
  let regex = /[a-z]/g
  if (regex.test(c.value)) {
    return null;
  } else {
    return { lowercase: true }
  }
}
