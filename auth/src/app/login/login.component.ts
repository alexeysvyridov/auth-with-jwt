import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter()
  form: any;
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      username: ['',Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])]
    })
  }

  submit() {
    this.submitEM.emit(this.form.value);
  }

}
