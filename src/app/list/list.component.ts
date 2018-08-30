import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {

    private localStorage: LocalStorageService;

    constructor(localStorage: LocalStorageService) {
        this.localStorage = localStorage;
    }

    films() {
        return this.localStorage.keys().map((id: string) => this.localStorage.get(id));
    }

    removeFromSaved(id: string) {
        this.localStorage.remove(id);
    }
}
