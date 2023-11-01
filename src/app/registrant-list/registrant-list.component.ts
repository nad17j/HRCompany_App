import { Component, OnInit } from '@angular/core';
import { RegistrantService } from '../registrant.service';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';


@Component({
  selector: 'app-registrant-list',
  templateUrl: './registrant-list.component.html',
  styleUrls: ['./registrant-list.component.css']
})
export class RegistrantListComponent implements OnInit {
  registrants: any[] = [];

  constructor(private registrantService: RegistrantService) {}

  ngOnInit(): void {
    this.registrants = [
      { name: 'Test Name', email: 'test@email.com', position: 'Test Position', qualifications: 'Test Qualifications' }
    ];
  }
  

  //ngOnInit(): void {
    //this.registrants = this.registrantService.getRegistrants();
  //}
}
