import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { LoginComponent } from './components/login/login.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { SearchComponent } from './components/search/search.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { DisciplineComponent } from './components/discipline/discipline.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SiderComponent } from './components/sider/sider.component';
import { MainComponent } from './components/main/main.component';
import { AlphabeticalListComponent } from './components/alphabetical-list/alphabetical-list.component';
import { NetworkComponent } from './components/network/network.component';
import { AddTermComponent } from './components/add-term/add-term.component';
import { TermService } from './services/term.service';
import { DisciplinesComponent } from './components/disciplines/disciplines.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { AboutComponent } from './components/about/about.component';
import { TermComponent } from './components/term/term.component';
import {NgxGraphModule} from "@swimlane/ngx-graph";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuthorizationComponent,
    LoginComponent,
    SearchComponent,
    PasswordResetComponent,
    DisciplineComponent,
    FooterComponent,
    HeaderComponent,
    SiderComponent,
    MainComponent,
    AlphabeticalListComponent,
    NetworkComponent,
    AddTermComponent,
    DisciplinesComponent,
    PreferencesComponent,
    AboutComponent,
    TermComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule,
    NzPageHeaderModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NzModalModule,
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
    NzTypographyModule,
    NzBreadCrumbModule,
    NzSelectModule,
    NzCheckboxModule,
    NzTabsModule,
    NzDropDownModule,
    NzIconModule,
    NzListModule,
    NzSkeletonModule,
    NzMessageModule,
    NgxGraphModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {provide: NZ_I18N, useValue: ru_RU},
    TermService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
