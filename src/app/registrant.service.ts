import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrantService {
  private registrants: any[] = [];

  addRegistrant(registrant: any) {
    this.registrants.push(registrant);
    console.log('Added registrant:', registrant);
  }

  getRegistrants() {
    console.log('Fetched registrants:', this.registrants);
    return this.registrants;
  }
}
