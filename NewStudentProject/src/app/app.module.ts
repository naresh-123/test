import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule,
//    MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { StudentRegisterComponent } from './student-register/student-register.component';

import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatSidenav, MatSliderModule, MatSlideToggleModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { GroupforstudentComponent } from './groupforstudent/groupforstudent.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentRegisterComponent,
    GroupforstudentComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    DragDropModule,
    MatToolbarModule,
    MatPaginatorModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
