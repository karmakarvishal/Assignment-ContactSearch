import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:4200//assets/contacts.json';
  private contacts:any = [];

  constructor(private http: HttpClient) {
    console.log("OK")
  }

  // getFilteredContacts(searchCriteria: any): any{
  //   return this.http.get(this.apiUrl);
  // }


  getFilteredContacts(searchCriteria: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((contacts: any[]) => {
        return contacts.filter(contact => {
          // Check if each field in searchCriteria is a substring in the corresponding field of contact
          return Object.keys(searchCriteria).every(key => {
            const searchValue = searchCriteria[key]?.toString().toLowerCase() || ''; // Convert to string or use empty string if null or undefined
            const contactValue = contact[key]?.toString().toLowerCase() || ''; // Convert to string or use empty string if null or undefined
            
            return contactValue.includes(searchValue); // Check if contactValue includes searchValue
          });
        });
      }),
      catchError(error => {
        console.error('Error loading contacts', error);
        return []; // Return an empty array on error
      })
    );
  }
}
