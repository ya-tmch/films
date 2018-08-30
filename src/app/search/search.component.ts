import {Component, OnInit} from '@angular/core';
import {FilmsService} from '../films.service';
import {LocalStorageService} from 'angular-2-local-storage';
import {Film} from '../Film';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    private filmsService: FilmsService;
    private localStorage: LocalStorageService;
    private films: Film[];
    private query = 'matrix';
    private queryChanged = new Subject<string>();

    constructor(filmsService: FilmsService, localStorage: LocalStorageService) {
        this.filmsService = filmsService;
        this.localStorage = localStorage;

        this.queryChanged
            .pipe(debounceTime(250))
            .subscribe((query: string) => {
                this.filmsService.search(query).then((films: Film[]) => {
                    this.films = films;
                });
            });
    }

    ngOnInit(): void {
        this.onSearchChange('matrix');
    }

    onSearchChange(query: string) {
        this.queryChanged.next(query);
    }

    addToSaved(id: string) {
        const film: Film = this.films.find((f: Film) => f.imdbID === id);

        this.localStorage.set(id, film);
    }

    removeFromSaved(id: string) {
        this.localStorage.remove(id);
    }

    isSaved(id: string) {
        return this.localStorage.get(id);
    }
}
