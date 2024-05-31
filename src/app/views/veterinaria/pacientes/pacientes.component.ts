import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { PacientesModel } from '../models/pacientes.model';
import { PacientesService } from '../services/pacientes.service';



@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [
            RowComponent, ColComponent, CardComponent,
            CardHeaderComponent, CardBodyComponent,
            ReactiveFormsModule ,FormsModule, FormDirective,
            FormSelectDirective,FormControlDirective,
            FormLabelDirective, ButtonDirective, NgStyle,
            TextColorDirective,
            TableDirective, TableColorDirective, TableActiveDirective
  ],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.scss'
})
export class PacientesComponent {

  listaPacientes : PacientesModel[] = [];
  pacientesModelo : PacientesModel = new PacientesModel();
  /**
   *
   */
  constructor(private pacientesService: PacientesService) {
    this.getPacientes();

  }

  getPacientes(){
    this.pacientesService.getTodasLasPacientes().subscribe({
      next : (respuesta) => {
          console.log(respuesta);
          this.listaPacientes = respuesta;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  guardarPacientes(){
    console.log(this.pacientesModelo);
    if (this.pacientesModelo._id == '') {
      console.log("guardar", this.pacientesModelo);
      this.agregarPacientes();
    } else {
      console.log("editar", this.pacientesModelo);
      this.editarPacientes();
    }


  }
  agregarPacientes(){
    this.pacientesService.agregarPacientes(this.pacientesModelo).subscribe({
      next : (respuesta) => {
          console.log("Se guardo exitosamente",respuesta);
          this.getPacientes();
          this.pacientesModelo = new PacientesModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  eliminarPacientes(pacientes: PacientesModel){
    console.log("itema para eliminar", pacientes);
    this.pacientesService.eliminarPacientes(pacientes._id).subscribe({
      next : (respuesta) => {
          console.log("Se elimino exitosamente",respuesta);
          this.getPacientes();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  
  verPacientes(pacientes: PacientesModel){
    this.pacientesModelo = pacientes;
  }

  editarPacientes(){
    this.pacientesService.editarPacientes(this.pacientesModelo).subscribe({
      next : (respuesta) => {
          console.log("Se edito exitosamente",respuesta);
          this.getPacientes();
          this.pacientesModelo = new PacientesModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }  

}
