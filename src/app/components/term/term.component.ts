import {Component} from '@angular/core';
import {Term} from '../../models/term';
import {TermService} from '../../services/term.service';
import {PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree} from '@angular/router';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})
export class TermComponent {

  term: Term = {attributes: [], subjectArea: []} as Term;

  constructor(private termService: TermService,
              private router: Router) {

    const tree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    const discipline = s[1].path;
    const name = s[2].path;

    this.term.name = name;

    this.termService.getTermByNameAndDiscipline(name, discipline).subscribe(term => {
      this.term.id = term.id;
      this.term.name = term.name;
      this.term.discipline = term.discipline;
      this.term.definition = term.definition;
      if (term.subjectArea && term.subjectArea.length > 0) {
        term.subjectArea.forEach(a => {
          this.term.subjectArea.push(a);
        });
      }
      if (term.attributes && term.attributes.length > 0) {
        if (term.attributes) {
          term.attributes.forEach(a => {
            this.term.attributes.push(a);
          });
        }
      }
    });
  }
}
