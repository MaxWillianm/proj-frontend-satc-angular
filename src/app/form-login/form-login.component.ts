import { Component } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  teste() {
    console.log('teste');
  }
  public email: string = 'Olá mundo';
  }
