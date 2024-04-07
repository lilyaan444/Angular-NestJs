import { Component } from '@angular/core';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { trigger, transition, style, query, animate, group } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  showHeader: boolean = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      // Filtrer pour ne garder que les événements de type NavigationEnd
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Ici, TypeScript sait que 'event' est de type NavigationEnd grâce au gardien de type dans filter()
      this.showHeader = !event.urlAfterRedirects.startsWith('/home');
    });
  }
}




