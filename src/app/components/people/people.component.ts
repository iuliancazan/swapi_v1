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
  pages: number = 0;
  // people: Person[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService
      .getPeople()
      .subscribe((people) => (this.people = people));
    this.pages = this.people.count;
  }

  loadNextPage(): void {
    this.page++;
    this.peopleService
      .getPeople(this.people.next)
      .subscribe((people) => (this.people = people));
  }

  loadPreviousPage(): void {
    this.page--;
    this.peopleService
      .getPeople(this.people.previous)
      .subscribe((people) => (this.people = people));
  }

  onLogPerson(person: Person): void {
    console.log(person);
  }
}
