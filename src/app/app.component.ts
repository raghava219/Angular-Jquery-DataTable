import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import $, { data } from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   // Our array of clients
   clients: any[] = [];

   dataTable: any;

   constructor(private http: HttpClient, private chRef: ChangeDetectorRef){}
 
   ngOnInit(){
     this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients')     
       .subscribe((data: any[]) =>
       {
        this.clients = data;
        //console.log(this.clients);
        this.chRef.detectChanges();

        const table: any = $('table');
        this.dataTable = table.DataTable({
            paging: true
        });
 
        console.log(this.clients);
 
       });
   }
  
}
