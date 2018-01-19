import { FotoComponent } from './foto.component';
import { NgModule } from "@angular/core";
import { FiltroPorTitulo } from './foto.pipes';

@NgModule({
  declarations: [ FotoComponent, FiltroPorTitulo ],
  exports: [ FotoComponent, FiltroPorTitulo ]
})

export class FotoModule {}
