import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SettingsService } from 'src/app/services/settings.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {AuthService} from 'src/app/services/auth.service';
@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent implements OnInit {
  user = this.authService.isCompany()
  settings = null;
  isSaving = 'Save';
  brandName = new FormControl('', [Validators.required]);
  contact = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  paypalClientId = new FormControl('', Validators.required);
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar,private settingsService: SettingsService, private authService: AuthService) { }

  ngOnInit() {
    if(this.user.isCompany)
    {
      this.settingsService.getSettings(this.user.companyId).then(res => {
        this.settings = res;
        this.brandName.setValue(res.brandName)
        this.contact.setValue(res.contact)
        this.email.setValue(res.email)
        this.address.setValue(res.address)
        this.paypalClientId.setValue(res.paypalClientId)
      })
    }
  }

  saveSettings() {
    this.isSaving = 'Saving...'
    if(this.settings != null){
      let newSettings = {
        brandName: this.brandName.value,
        contact: this.contact.value,
        email: this.email.value,
        address: this.address.value,
        companyId: this.user.companyId,
        paypalClientId: this.paypalClientId.value
      }
      this.settingsService.updateSettings(this.user.companyId,newSettings).then(res => {
        this.openSnackBar()
        this.isSaving = 'Save'
      })
    }
    else{
      let newSettings = {
        brandName: this.brandName.value,
        contact: this.contact.value,
        email: this.email.value,
        address: this.address.value,
        companyId: this.user.companyId,
        paypalClientId: this.paypalClientId.value
      }
      this.settingsService.createSettings(newSettings).then(res => {
        this.openSnackBar()
        this.isSaving = 'Save'
      })
    }
  }

  openSnackBar() {
    this._snackBar.open('Settings Saved Successfuly!', 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['success-snackbar']
    });
  }

}
