import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthentificationModule } from "./authentification/authentification.module";

import { AppComponent } from "./app.component";
import { AuthInterceptor } from "src/interceptors/auth-interceptor";
import { CommonModule } from "@angular/common";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [AppComponent, PageNotFoundComponent],
    imports: [
        BrowserModule,
        CommonModule,
        MatDialogModule,
        HttpClientModule,
        AppRoutingModule,
        AuthentificationModule,
        NoopAnimationsModule,
        MatIconModule,
        MatMenuModule,
        RouterModule,
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
    bootstrap: [AppComponent],
})
export class AppModule {}
