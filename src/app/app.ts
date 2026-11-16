import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { ContactMe } from './components/contact-me/contact-me';
import { Projects } from './components/projects/projects';
import { Dock } from './components/dock/dock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    About,
    Experience,
    ContactMe,
    Projects,
    Dock
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
