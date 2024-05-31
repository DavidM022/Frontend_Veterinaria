import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PacientesModel } from "../models/pacientes.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class PacientesService {
  //url de su api (backend)
  private API_URL = 'http://localhost:8000/pacientes'
  constructor(private http: HttpClient) {

  }

  getTodasLasPacientes (): Observable<PacientesModel[]> {
    return this.http.get<PacientesModel[]>(`${this.API_URL}/getPaciente`);
  }

  agregarPacientes(pacientes: PacientesModel) : Observable<PacientesModel> {
    return this.http.post<PacientesModel>(`${this.API_URL}/crear`, pacientes);
  }

  editarPacientes(pacientes: PacientesModel) : Observable<PacientesModel> {
    return this.http.put<PacientesModel>(`${this.API_URL}/editar/${pacientes._id}`, pacientes);
  }

  eliminarPacientes(idPacientes : string) : Observable<PacientesModel> {
    console.log(idPacientes);
    // return this.http.delete<RecetaModel>(`${this.API_URL}/eliminar/${idReceta}`);
    return this.http.delete<PacientesModel>(this.API_URL+'/eliminar/'+idPacientes);

  }
}
