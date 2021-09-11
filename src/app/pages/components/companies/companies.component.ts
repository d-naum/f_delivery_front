import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CreateCompanyComponent } from "src/app/dialogs/components/company/create-company/create-company.component";
import { CompaniesTableComponent } from "src/app/tables/components/companies/companies.component";
@Component({
  selector: "app-companies",
  templateUrl: "./companies.component.html",
  styleUrls: ["./companies.component.scss"],
})
export class CompaniesComponent implements OnInit {

  constructor(public dialog: MatDialog, public companiesTable: CompaniesTableComponent) { }

  ngOnInit() { }
  addCompany() {
    const dialogRef = this.dialog.open(CreateCompanyComponent, {
      width: "40%",
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.companiesTable.getCompanies()
    });
  }
}
