import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { /* tap, map, */ catchError } from 'rxjs/operators';

import { Country } from '../interfaces/country.interface';


@Injectable({ providedIn: 'root' })
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }

    searchCapital(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${term}`;
        return this.http.get<Country[]>(url)
            .pipe(
                /* tap( countries => console.log('Paso por el tap', countries)),
                map( countries => [] ) */
                // Si hay un error, devuelve un nuevo observable con un array vacio
                /* catchError( error => {
                    console.log(error);
                    return of([])
                } ) */
                catchError(error => of([]))
            );
    }

    searchCountry(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${term}`;
        return this.http.get<Country[]>(url)
            .pipe(
                catchError(error => of([]))
            );
    }

    searchRegion(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${term}`;
        return this.http.get<Country[]>(url)
            .pipe(
                catchError(error => of([]))
            );
    }

    searchCountryByAlphaCode(code: string): Observable<Country[]> {
        const url = `${this.apiUrl}/alpha/${code}`;
        return this.http.get<Country[]>(url)
            .pipe(
                catchError(error => of([]))
            );
    }

}