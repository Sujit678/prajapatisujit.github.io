import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutemeComponent } from './AboutMe/AboutMe.component';
import { SkillsComponent } from './Skills/Skills.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactMeComponent } from './ContactMe/ContactMe.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatDialogModule } from '@angular/material/dialog';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'gallery', component: GalleryComponent },
    { path: 'aboutme', component: AboutemeComponent },
    { path: 'assets/sujit_resume.pdf', redirectTo: '../assets/sujit_resume.pdf'},
    { path: 'skills', component: SkillsComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'contactme', component: ContactMeComponent },
    { path: 'screenshots', component: ScreenshotsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
    NgbModule,
    // MatDialogModule,
    BrowserAnimationsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
