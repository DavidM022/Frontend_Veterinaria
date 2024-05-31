import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { RecetaModel } from '../models/receta.model';
import { RecetaService } from '../services/receta.service';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent,
            CardHeaderComponent, CardBodyComponent,
            ReactiveFormsModule ,FormsModule, FormDirective,
            FormSelectDirective,FormControlDirective,
             FormLabelDirective, ButtonDirective, NgStyle,
             TextColorDirective,
             TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './receta.component.html',
  styleUrl: './receta.component.scss'
})
export class RecetaComponent {
  listaRecetas : RecetaModel[] = [];
  recetaModelo : RecetaModel = new RecetaModel();
  /**
   *
   */
  constructor(private recetaService: RecetaService) {
    this.getRecetas();

  }

  getRecetas(){
    this.recetaService.getTodasLasRecetas().subscribe({
      next : (respuesta) => {
          console.log(respuesta);
          this.listaRecetas = respuesta;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  guardarReceta(){
    console.log(this.recetaModelo);
    if (this.recetaModelo._id == '') {
      console.log("guardar", this.recetaModelo);
      this.agregarReceta();
    } else {
      console.log("editar", this.recetaModelo);
      this.editarReceta();
    }


  }
  agregarReceta(){
    this.recetaService.agregarReceta(this.recetaModelo).subscribe({
      next : (respuesta) => {
          console.log("Se guardo exitosamente",respuesta);
          this.getRecetas();
          this.recetaModelo = new RecetaModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  eliminarReceta(receta: RecetaModel){
    console.log("itema para eliminar", receta);
    this.recetaService.eliminarReceta(receta._id).subscribe({
      next : (respuesta) => {
          console.log("Se elimino exitosamente",respuesta);
          this.getRecetas();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  verReceta(receta: RecetaModel){
    this.recetaModelo = receta;
  }

  editarReceta(){
    this.recetaService.editarReceta(this.recetaModelo).subscribe({
      next : (respuesta) => {
          console.log("Se edito exitosamente",respuesta);
          this.getRecetas();
          this.recetaModelo = new RecetaModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
