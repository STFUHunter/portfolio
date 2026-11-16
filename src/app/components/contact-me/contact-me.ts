import { Component, signal } from '@angular/core';

interface SocialLink{
  label: string;
  url: string;
}

@Component({
  selector: 'app-contact-me',
  imports: [],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css',
})
export class ContactMe {
  email = 'oussema.oueslati@esen.tn';
  copied = signal(false);

  socials: SocialLink[] = [
    { label: 'GitHub', url: 'https://github.com/STFUHunter' },
    { label: 'LinkedIn', url: 'linkedin.com/in/oussema-oueslati-0674b936a' }
  ];

  copyEmail() : void {
    navigator.clipboard.writeText(this.email);
    this.copied.set(true);
    setTimeout(() => {
      this.copied.set(false);
    }, 2500);
  }
}
