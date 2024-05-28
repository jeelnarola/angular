import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { TrueFalseComponent } from './true-false/true-false.component';
import { CustomDirective } from './custom.directive';
import { DirectivesComponent } from './directives/directives.component';
import { DemoComponent } from './demo/demo.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './child/child.component';
import { NgcomponetOutletComponent } from './ngcomponet-outlet/ngcomponet-outlet.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TrueFalseComponent,
    CustomDirective,
    DirectivesComponent,
    DemoComponent,
    LifecycleComponent,
    ChildComponent,
    NgcomponetOutletComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
