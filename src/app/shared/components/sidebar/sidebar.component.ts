import { Component, OnInit, ViewChild } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
/**
 * @title Autosize sidenav
 */

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isExpanded = true;
  showSubmenu: boolean = true;
  isShowing = false;
  showSubSubMenu: boolean = false;
  isCompany: boolean =false;



  constructor(private authService: AuthService,private router: Router) {

  }


  ngOnInit() {
    let user = this.authService.isCompany()
    this.isCompany = user.isCompany;
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }

}
