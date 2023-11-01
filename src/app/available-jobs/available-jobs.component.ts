import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-jobs',
  templateUrl: './available-jobs.component.html',
  styleUrls: ['./available-jobs.component.css']
})
export class AvailableJobsComponent implements OnInit {
  jobs: any[] = [
    {
      title: 'Job Title 1',
      description: 'Description for Job 1',
      location: 'Location 1',
      salary: 50000,
      qualification: 'Bachelor\'s Degree',
      closingDate: '2023-12-31T00:00:00Z'
    },
    {
      title: 'Job Title 2',
      description: 'Description for Job 2',
      location: 'Location 2',
      salary: 60000,
      qualification: 'Master\'s Degree',
      closingDate: '2023-12-15T00:00:00Z'
    }
  ];

  ngOnInit(): void {
    // Here, you can fetch job data from a service or API and assign it to the 'jobs' array.
    // Example:
    // this.jobs = this.jobService.getJobs(); // Assuming 'jobService' is a service that provides job data.
  }
}
