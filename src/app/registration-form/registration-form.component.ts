import { Component } from '@angular/core';
import { RegistrantService } from '../registrant.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  
  
  user: any = {
    name: '',
    email: '',
    position: '',
    qualifications: ''
  };
  
  //registrantService: any;
  constructor(private registrantService: RegistrantService) { }

  onSubmit() {
    // Handle form submission here
    this.registrantService.addRegistrant(this.user);
    console.log('Submitted registrant:', this.user);
  }
}
