import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutemeComponent } from './AboutMe/AboutMe.component';
import { SkillsComponent } from './Skills/Skills.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactMeComponent } from './ContactMe/ContactMe.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './highlight/highlight.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';
import { AnimatedbgComponent } from './animatedbg/animatedbg.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutemeComponent,
    SkillsComponent,
    BlogsComponent,
    ContactMeComponent,
    GalleryComponent,
    FooterComponent,
    HighlightDirective,
    ScreenshotsComponent,
    AnimatedbgComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
