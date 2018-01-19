import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: ListagemComponent },
  { path: 'cadastro', component: CadastroComponent }
];

export const routing = RouterModule.forRoot(routes);