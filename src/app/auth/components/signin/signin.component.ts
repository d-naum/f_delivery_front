import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LocalStoreService } from '../../../services/local-store.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  constructor(private authService: AuthService, private localStoreService: LocalStoreService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    if (this.authService.checkAuth())
      this.router.navigate([''])
  }

  login() {
    let credentials = {
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value
    }
    if (credentials.email != null && credentials.password != null)
      this.authService.signin(credentials).then((res) => {
        this.localStoreService.setItem('jwt_token', res)
        this.router.navigate(['']).then(() => {
          window.location.reload();
        });
      }, reason => {
        this.openSnackBar()
      })
  }

  openSnackBar() {
    this._snackBar.open('Wrong Credentials!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['danger-snackbar']
    });
  }

}
