import { EstateParams } from '@hola/models/estates-params.interface'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ApiResponse } from '@hola/models/api-response.interface'
import { Estate } from '@hola/models/estate.interface'
import {
  BehaviorSubject, map, Observable, scan, switchMap,
} from 'rxjs'
import { environment } from '@hola/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class EstatesService {
  private fetchTrigger = new BehaviorSubject<void>(undefined)

  private estatesPageOffset = 0

  private readonly ESTATES_ENDPOINT = '/inmuebles'

  private readonly ESTATES_QUERY_PARAMS: EstateParams = {
    'page[limit]': 32,
    'page[offset]': 0,
    'sort[weight][path]': 'field_inmu_peso_orde',
    'sort[weight][direction]': 'DESC',
    'sort[relevancy][path]': 'relevancy',
    'sort[relevancy][direction]': 'DESC',
    'fields[node--inmuebles]': 'field_inmu_imag_arra,field_inmu_prec,field_inmu_nume_habi,field_inmu_refe,field_in,mu_area_cons,field_inmu_tipo_via,field_inmu_nomb_call,field_inmu_refe',
  }

  constructor(
    private http: HttpClient,
  ) { }

  public fetchNextEstates(): void {
    this.fetchTrigger.next()
  }

  public fetchEstates(): Observable<Estate[]> {
    this.estatesPageOffset += 1
    return this.fetchTrigger.asObservable()
      .pipe(
        switchMap(() => this.getStates()),
        map((response: ApiResponse) => response.data),
        scan((acc: Estate[], val: Estate[]) => [...acc, ...val]),
      )
  }

  private getStates(): Observable<ApiResponse> {
    const params = new HttpParams({ fromObject: { ...this.ESTATES_QUERY_PARAMS, 'page[offset]': this.estatesPageOffset } })
    return this.http.get<ApiResponse>(`${environment.api.url}${this.ESTATES_ENDPOINT}`, { params })
  }
}