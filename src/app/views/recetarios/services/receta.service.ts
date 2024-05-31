import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecetaModel } from "../models/receta.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class RecetaService {
  //url de su api (backend)
  private API_URL = 'http://localhost:8000/recetarios'
  constructor(private http: HttpClient) {

  }

  getTodasLasRecetas (): Observable<RecetaModel[]> {
    return this.http.get<RecetaModel[]>(`${this.API_URL}/getRecetas`);
  }

  agregarReceta(receta: RecetaModel) : Observable<RecetaModel> {
    return this.http.post<RecetaModel>(`${this.API_URL}/crear`, receta);
  }

  editarReceta(receta: RecetaModel) : Observable<RecetaModel> {
    return this.http.put<RecetaModel>(`${this.API_URL}/editar/${receta._id}`, receta);
  }

  eliminarReceta(idReceta : string) : Observable<RecetaModel> {
    console.log(idReceta);
    // return this.http.delete<RecetaModel>(`${this.API_URL}/eliminar/${idReceta}`);
    return this.http.delete<RecetaModel>(this.API_URL+'/eliminar/'+idReceta);

  }
}
