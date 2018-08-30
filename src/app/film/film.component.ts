import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmsService} from '../films.service';
import {Film} from '../Film';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

    private route: ActivatedRoute;
    private filmsService: FilmsService;
    private film: Film;

    constructor(route: ActivatedRoute, filmsService: FilmsService) {
        this.route = route;
        this.filmsService = filmsService;
    }

    async ngOnInit() {
        this.film = await this.filmsService.getById(
            this.route.snapshot.paramMap.get('id')
        );
    }
}
