import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReservasModel } from "../models/reservas.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class ReservasService {
  //url de su api (backend)
  private API_URL = 'http://localhost:8000/reservas'
  constructor(private http: HttpClient) {

  }

  getTodasLasReservas (): Observable<ReservasModel[]> {
    return this.http.get<ReservasModel[]>(`${this.API_URL}/ReservasTotal`);
  }

  agregarReservas(reservas: ReservasModel) : Observable<ReservasModel> {
    return this.http.post<ReservasModel>(`${this.API_URL}/crearRegistro`, reservas);
  }

  editarReservas(reservas: ReservasModel) : Observable<ReservasModel> {
    return this.http.put<ReservasModel>(`${this.API_URL}/editarRegistro/${reservas._id}`, reservas);
  }

  eliminarReservas(idReservas : string) : Observable<ReservasModel> {
    console.log(idReservas);
    // return this.http.delete<RecetaModel>(`${this.API_URL}/eliminar/${idReceta}`);
    return this.http.delete<ReservasModel>(this.API_URL+'/eliminarRegistro/'+idReservas);

  }
}
