import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  public baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdictio"
  constructor(private httpClient: HttpClient) {}
  getVehicles(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
      
    
  }
  getFilteredVehicles(term: string): Observable<any> {
    return this.httpClient.get(this.baseUrl+"/");
      
    
  }
  getSortedVehicles(column:string,order:string):Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order)
  }
  getVehicleById(id: string):Observable<any>
   {
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id)
  }
  deleteVehicles(id:string):Observable<any>
  {
    return this.httpClient.delete(`https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/${id}`)
  }
  createVehicles(data:any):Observable<any>
  {
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data)
  }
}
