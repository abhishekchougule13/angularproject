import { HomeComponent } from "src/home/home.component";
import { ProfileComponent } from "src/profile/profile.component";
import { RegistrationComponent } from "src/registration/registration.component";

export const OurRoutes=[
    { path:'home',component:HomeComponent},
    { path:'profile',component:ProfileComponent},
    { path:'registration',component:RegistrationComponent},
    { path:'',component:HomeComponent}

];