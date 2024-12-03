import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { ContactService } from './contact.service';
import { ResultsTableComponent } from "./results-table/results-table.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchFormComponent, ResultsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'contact-search';
  filteredContacts: any[] = [];
  selectedContact: any;

  constructor(private contactService: ContactService) {}

  onSearch(searchCriteria: any): void {
    this.contactService.getFilteredContacts(searchCriteria).subscribe((contacts: any[]) => {
      this.filteredContacts = contacts;
    });
  }

  onContactSelect(contact: any): void {
    console.log('Selected contact:', contact);
    this.selectedContact = contact; // Set selected contact
    // Handle contact selection, update as needed
  }
}
