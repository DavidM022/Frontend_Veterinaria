import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { ReservasModel } from '../models/reservas.model';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent,
            CardHeaderComponent, CardBodyComponent,
            ReactiveFormsModule ,FormsModule, FormDirective,
            FormSelectDirective,FormControlDirective,
            FormLabelDirective, ButtonDirective, NgStyle,
            TextColorDirective,
            TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.scss'
})
export class ReservasComponent {

    listaReservas : ReservasModel[] = [];
    reservasModelo : ReservasModel = new ReservasModel();
    /**
     *
     */
    constructor(private reservasService: ReservasService) {
      this.getReservas();
  
    }
  
    getReservas(){
      this.reservasService.getTodasLasReservas().subscribe({
        next : (respuesta) => {
            console.log(respuesta);
            this.listaReservas = respuesta;
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  
    guardarReservas(){
      console.log(this.reservasModelo);
      if (this.reservasModelo._id == '') {
        console.log("guardar", this.reservasModelo);
        this.agregarReservas();
      } else {
        console.log("editar", this.reservasModelo);
        this.editarReservas();
      }
  
  
    }
    agregarReservas(){
      this.reservasService.agregarReservas(this.reservasModelo).subscribe({
        next : (respuesta) => {
            console.log("Se guardo exitosamente",respuesta);
            this.getReservas();
            this.reservasModelo = new ReservasModel();
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  
    eliminarReservas(reservas: ReservasModel){
      console.log("itema para eliminar", reservas);
      this.reservasService.eliminarReservas(reservas._id).subscribe({
        next : (respuesta) => {
            console.log("Se elimino exitosamente",respuesta);
            this.getReservas();
        },
        error: (error) => {
          console.log(error);
        }
      })
    }

    verReservas(reservas: ReservasModel){
      this.reservasModelo = reservas;
    }
  
    editarReservas(){
      this.reservasService.editarReservas(this.reservasModelo).subscribe({
        next : (respuesta) => {
            console.log("Se edito exitosamente",respuesta);
            this.getReservas();
            this.reservasModelo = new ReservasModel();
        },
        error: (error) => {
          console.log(error);
        }
      })
    }  

}
