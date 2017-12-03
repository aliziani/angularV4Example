import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular v'+VERSION.full;

  // Create a custom object to test the table module
  tableConfiguration = {
    header: [
       {
         textDisplayed: "Name",
         attributeName: "name"
       },
       {
         textDisplayed: "E-mail",
         attributeName: "email"
       },
       {
         textDisplayed: "Address",
         attributeName: "address"
       }
     ],
     source: [
       {
         _id: "5a1fedb742fffac2e95e44b3",
         name: "Joyce Christensen",
         company: "EVENTEX",
         email: "joycechristensen@eventex.com",
         phone: "+1 (827) 553-2152",
         address: "768 Batchelder Street, Marienthal, Alaska, 2563",
       },
       {
         _id: "5a1fedb72347b8b32df05271",
         name: "Dina Hamilton",
         company: "MANGELICA",
         email: "dinahamilton@mangelica.com",
         phone: "+1 (819) 495-3750",
         address: "337 Harway Avenue, Cataract, Virginia, 7980",
       },
       {
         _id: "5a1fedb7c85daf5377a85a9a",
         name: "Holt Sharp",
         company: "COMCUR",
         email: "holtsharp@comcur.com",
         phone: "+1 (923) 556-3222",
         address: "134 Ridge Boulevard, Ahwahnee, New Hampshire, 4893",
       },
       {
         _id: "5a1fedb7e30f3da2ea43f3c5",
         name: "Joan Mcgowan",
         company: "ENDICIL",
         email: "joanmcgowan@endicil.com",
         phone: "+1 (881) 405-3593",
         address: "807 Bushwick Place, Chamberino, Wyoming, 8053",
       },
     ]
  };
}
