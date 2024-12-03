import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-results-table',
  imports: [MatTableModule,MatPaginator],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.scss'
})
export class ResultsTableComponent {
  @Input() contacts: any[] = [];
  @Output() contactSelect = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Reference to paginator

  displayedColumns: string[] = ['name', 'dob', 'email', 'phone', 'address'];
  dataSource = new MatTableDataSource<any>([]);

  ngOnInit(): void {
    this.initializeDataSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['contacts'] && changes['contacts'].currentValue) {
      this.initializeDataSource();
    }
  }

  initializeDataSource(): void {
    this.dataSource.data = this.contacts;
    this.dataSource.paginator = this.paginator;
  }

  onSelectContact(contact: any): void {
    this.contactSelect.emit(contact);
}
}
