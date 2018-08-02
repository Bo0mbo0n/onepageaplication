import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MinionsComponent } from './components/minions/minions.component';
import { MinionComponent } from './components/minion/minion.component';
import { BuscadorComponent } from './components/buscador/buscador.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'minions', component: MinionsComponent },
    { path: 'minion/:id', component: MinionComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});





