import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {TopicsComponent} from './topics/topics.component';
import {TopicService} from './topics/TopicService';
import {HttpModule} from '@angular/http';
import {TopicCreateComponent} from './topic-create/topic-create.component';
import {AuthInterceptor} from './auth/auth-interceptor';
import {ErrorInterceptor} from './error-interceptor';
import {ErrorComponent} from './error/error.component';
import {PostsModule} from './posts/posts.module';
import {AngularMaterialModule} from './angular-material.module';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {AppdJobsComponent} from './home/appd-jobs/appd-jobs.component';
import {ConcurrentJobsComponent} from './home/concurrent-jobs/concurrent-jobs.component';
import {TidalJobsComponent} from './home/tidal-jobs/tidal-jobs.component';
import {TotalLocationBySowComponent} from './home/total-location-by-sow/total-location-by-sow.component';
import {TotalSowComponent} from './home/total-sow/total-sow.component';
import {TotalVendorBySowComponent} from './home/total-vendor-by-sow/total-vendor-by-sow.component';
import {HeaderService} from './header/header.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    TopicsComponent,
    TopicCreateComponent,
    MenuComponent,
    HomeComponent,
    AppdJobsComponent,
    ConcurrentJobsComponent,
    TidalJobsComponent,
    TotalLocationBySowComponent,
    TotalSowComponent,
    TotalVendorBySowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule,
    HttpModule
  ],
  providers: [
     HeaderService,
     TopicService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
