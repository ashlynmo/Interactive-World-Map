import { Routes } from '@angular/router';
import { MainComponent } from './main-map/main-map.component';

export const routes: Routes = [
    {  
        path: '',
        title: 'Map',
        redirectTo: 'map',
        pathMatch: 'full'
    },
    {
        path: 'map',
        component: MainComponent,
        title: 'Map'
    },
];