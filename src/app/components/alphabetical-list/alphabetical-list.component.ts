import { Component, Input, OnInit } from '@angular/core';
import { Discipline } from '../../models/discipline';
import { Term } from '../../models/term';
import { Router } from '@angular/router';
import { TermService } from '../../services/term.service';

@Component({
  selector: 'app-alphabetical-list',
  templateUrl: './alphabetical-list.component.html',
  styleUrls: ['./alphabetical-list.component.scss']
})
export class AlphabeticalListComponent implements OnInit {
  @Input()
  discipline: Discipline;

  loading = false;
  terms: Term[] = [];

  constructor(private router: Router,
              private termService: TermService) {
  }

  ngOnInit(): void {
    this.termService.getTermsByDiscipline(this.discipline.name).subscribe(terms => this.terms = terms);
  }

}
