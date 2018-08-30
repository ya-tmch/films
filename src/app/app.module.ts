import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {LocalStorageModule} from 'angular-2-local-storage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SearchComponent} from './search/search.component';
import {ListComponent} from './list/list.component';
import {FilmComponent} from './film/film.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ListComponent,
        FilmComponent,
    ],
    imports: [
        LocalStorageModule.withConfig({
            prefix: 'films',
            storageType: 'localStorage'
        }),
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatInputModule,
        AppRoutingModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
