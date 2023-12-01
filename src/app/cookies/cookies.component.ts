import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent {
  count =signal(10)

  butter = computed(()=> this.count() * 0.5 )
  sugar = computed(()=> this.count() * 0.05 )
  flour = computed(()=> this.count() * 0.2 )

  update(event:Event){
    const input = event.target as HTMLInputElement;
    this.count.set(parseInt(input.value))
    
  }

}
