import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { People } from '../../interfaces/People';
import { Person } from '../../interfaces/Person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  people: People = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  page: number = 0;
  pageCount: number = 0;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((people) => {
      this.people = people;
      this.pageCount = Math.floor(this.people.count / 10);
    });
  }

  loadNextPage(): void {
    if (this.page < this.pageCount) {
      this.peopleService.getPeople(this.people.next).subscribe((people) => {
        this.people = people;
        this.page++;
      });
    }
  }

  loadPreviousPage(): void {
    if (this.page > 0) {
      this.peopleService.getPeople(this.people.previous).subscribe((people) => {
        this.people = people;
        this.page--;
      });
    }
  }

  onLogPerson(person: Person): void {
    console.log(person);
  }
}
