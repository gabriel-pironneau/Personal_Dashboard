import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DatepickerModule } from 'ng2-datepicker';

import { AppRoutingModule } from './app-routing.module';

import { AuthInterceptor } from './interceptors/auth-interceptor';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { YoutubeService } from './services/widgets/youtube.service';
import { WeatherService } from './services/widgets/weather.service';
import { CalendarService } from './services/widgets/calendar.service';
import { ManagedServicesService } from './services/managed-services.service';
import { UserServicesService } from './services/user-services.service';
import { LocalStorageService } from './services/local-storage.service';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrigamiFormsModule } from '@codebakery/origami/forms';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FloatingButtonComponent } from './dashboard/floating-button/floating-button.component';
import { SettingsComponent } from './settings/settings.component';
import { SubscriptionsComponent } from './settings/subscriptions/subscriptions.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';

import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { YoutubeWidgetComponent } from './widgets/youtube-widget/youtube-widget.component';
import { CalendarWidgetComponent } from './widgets/calendar-widget/calendar-widget.component';
import { EditDeleteWidgetComponent } from './widgets/edit-delete-widget/edit-delete-widget.component';

import { WeatherFormComponent } from './forms/widgets/weather-form/weather-form.component';
import { CalendarFormComponent } from './forms/widgets/calendar-form/calendar-form.component';
import { StepOneFormComponent } from './forms/widgets/youtube-form/step-one-form/step-one-form.component';
import { StepTwoFormComponent } from './forms/widgets/youtube-form/step-two-form/step-two-form.component';
import { ProfileFormComponent } from './forms/profile-form/profile-form.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    FloatingButtonComponent,
    SettingsComponent,
    SubscriptionsComponent,
    ProfileComponent,
    MainComponent,
    AboutComponent,
    WeatherWidgetComponent,
    YoutubeWidgetComponent,
    CalendarWidgetComponent,
    WeatherFormComponent,
    CalendarFormComponent,
    StepOneFormComponent,
    StepTwoFormComponent,
    EditDeleteWidgetComponent,
    ProfileFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OrigamiFormsModule,
    DatepickerModule
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        AuthService,
        AuthGuard,
        ProfileService,
        YoutubeService,
        WeatherService,
        CalendarService,
        ManagedServicesService,
        UserServicesService,
        LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
