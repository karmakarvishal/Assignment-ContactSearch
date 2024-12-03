import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  imports: [MatFormField,MatInputModule,ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {
  
  searchForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      dob: [''],
      email: [''],
      phone: ['']
    });
  }
 

  @Output() search = new EventEmitter<any>();
  @Input() contact: any; // Accept contact data from parent component

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contact'] && changes['contact'].currentValue) {
      this.populateForm(changes['contact'].currentValue);
    }
  }

  // Populate form with selected contact's data
  populateForm(contact: any): void {
    if (contact) {
      this.searchForm.setValue({
        firstName: contact.firstName,
        lastName: contact.lastName,
        dob: contact.dob,
        email: contact.email,
        phone: contact.phone
      });
    }
  }

  onSearch(): void {
    this.search.emit(this.searchForm.value);
  }

  onClear(): void {
    this.searchForm.reset(); // Reset all fields to their initial state
  }
}
