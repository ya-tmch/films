import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Film} from './Film';

@Injectable({
    providedIn: 'root'
})
export class FilmsService {

    private http: HttpClient;
    private apiKey = '6b7e837e';

    constructor(http: HttpClient) {
        this.http = http;
    }

    search(query: string): Promise<Film[]> {

        return new Promise<Film[]>((resolve, reject) => {

            this
                .http
                .get(`http://www.omdbapi.com/?apikey=${this.apiKey}&s=${query}`)
                .subscribe((response: any) => {

                    if (response.Response === 'True') {
                        resolve(response.Search);
                    } else {
                        resolve([]);
                    }
                });
        });
    }

    getById(id: string): Promise<Film> {

        return new Promise<Film>((resolve, reject) => {

            this
                .http
                .get(`http://www.omdbapi.com/?apikey=${this.apiKey}&i=${id}`)
                .subscribe((response: any) => {

                    if (response.Response === 'True') {
                        resolve(response);
                    } else {
                        resolve(null);
                    }
                });
        });
    }
}
