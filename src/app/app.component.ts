import { Component,signal,computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CookiesComponent } from "./cookies/cookies.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CookiesComponent]
})
export class AppComponent {
  count = signal(10);

  butter = computed(()=> this.count() *0.1)
  sugar = computed(()=> this.count() *0.05)
  flour = computed(()=> Math.floor(this.count()) *0.2)
  

  update(event: Event){
    const input = event.target as HTMLInputElement;
    this.count.set(parseInt(input.value));
  }

  
}
