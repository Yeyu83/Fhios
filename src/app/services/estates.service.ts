import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
  BehaviorSubject, map, Observable, scan, switchMap, tap,
} from 'rxjs'
import { environment } from '@hola/environments/environment'
import { ApiResponse, Estate } from '@hola/models/estate.interface'
import { EstateParams } from '@hola/models/estates-params.interface'

@Injectable({
  providedIn: 'root',
})
export class EstatesService {
  public estates$!: Observable<Estate[]>

  private estatesFetcher = new BehaviorSubject<void>(undefined)

  private pageOffset = 0

  private readonly ESTATES_ENDPOINT: string = '/inmuebles'

  private readonly ESTATES_QUERY_PARAMS: EstateParams = {
    'page[limit]': 32,
    'page[offset]': 0,
    'sort[weight][path]': 'field_inmu_peso_orde',
    'sort[weight][direction]': 'DESC',
    'sort[relevancy][path]': 'relevancy',
    'sort[relevancy][direction]': 'DESC',
    'fields[node--inmuebles]': 'field_inmu_imag_arra,field_inmu_prec,field_inmu_nume_habi,field_inmu_refe,field_inmu_area_cons,field_inmu_tipo_via,field_inmu_nomb_call',
  }

  constructor(
    private http: HttpClient,
  ) { }

  public fetchNextEstates(): void {
    this.estatesFetcher.next()
  }

  fetchEstates(): Observable<Estate[]> {
    const params = new HttpParams({
      fromObject: {
        ...this.ESTATES_QUERY_PARAMS,
        'page[offset]': this.pageOffset,
      },
    })
    return this.estatesFetcher.asObservable()
      .pipe(
        switchMap(() => this.http
          .get<ApiResponse>(`${environment.api.url}${this.ESTATES_ENDPOINT}`, { params })),
        map((response: ApiResponse) => response.data),
        scan((acc: Estate[], val: Estate[]) => [...acc, ...val]),
        tap(() => {
          this.pageOffset += 1
        }),
      )
  }

  fetchEstate(id: string): Observable<any> {
    return this.http.get<ApiResponse>(`${environment.api.url}${this.ESTATES_ENDPOINT}/${id}`)
      .pipe(
        map((response: ApiResponse) => response.data),
      )
  }

  restartPageOffsetCount(): void {
    this.pageOffset = 0
  }
}
