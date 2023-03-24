import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./authentification/login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SignupComponent } from "./authentification/signup/signup.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "**", component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
