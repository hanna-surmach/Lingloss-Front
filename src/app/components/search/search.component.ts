import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Discipline } from '../../models/discipline';
import {Term} from "../../models/term";
import {TermService} from "../../services/term.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input()
  discipline: Discipline;

  @Output() termEventEmitter = new EventEmitter<Term>();

  selectedValue: Term = null;
  listOfOption: Term[] = [];

  constructor(private termService: TermService,
              private router: Router) {}

  search(value: string): void {
    this.termService.findTerm(value)
      .subscribe(data => {
          this.listOfOption = [];
          data.forEach(term => {
            this.listOfOption.push(term);
          });
      }, () => {
      });
  }

  clear(): void {
    this.selectedValue = null;
  }

  explore(): void {
    this.router.navigate(['disciplines/' + this.selectedValue.discipline + '/' + this.selectedValue.name]);
  }
}
