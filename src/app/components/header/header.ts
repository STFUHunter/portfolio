import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  name: string = 'Oueslati Oussema';
  
  role: string = 'Etudiant en Business Information System';
  
  bio: string = '';
  
  photoUrl: string = '/profile.jpg';
}
