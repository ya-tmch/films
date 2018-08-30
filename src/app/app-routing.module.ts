import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {FilmComponent} from './film/film.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
    {path: 'search', component: SearchComponent},
    {path: 'film/:id', component: FilmComponent},
    {path: 'list', component: ListComponent},
    {path: 'search', component: SearchComponent},
    {path: '', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}
