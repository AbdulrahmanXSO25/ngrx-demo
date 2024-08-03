import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { turnOnLamp, toggleAllLamps, turnOffAllLamps } from '../lamp.actions';
import { LampState } from '../lamp.reducer';

@Component({
  selector: 'app-lamp-row',
  templateUrl: './lamp-row.component.html',
  styleUrl: './lamp-row.component.css'
})
export class LampRowComponent implements OnInit {
  lamps$: Observable<boolean[]>;

  selectedIndex: number = 0;

  constructor(private store: Store<{ lampState: LampState }>) {
    this.lamps$ = this.store.select(state => state.lampState.lamps);
  }

  ngOnInit(): void {}

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.moveRight();
    } else if (event.key === 'ArrowLeft') {
      this.moveLeft();
    } else if (event.key === ' ') {
      this.toggleAll();
    } else if (event.key === 'Escape') {
      this.turnOffAll();
    }
  }

  moveRight() {
    if (this.selectedIndex < 5) {
      this.selectedIndex++;
      this.highlightSelected();
    }
  }

  moveLeft() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.highlightSelected();
    }
  }

  highlightSelected() {
    this.store.dispatch(turnOnLamp({ index: this.selectedIndex }));
  }

  toggleAll() {
    this.store.dispatch(toggleAllLamps());
  }

  turnOffAll() {
    this.store.dispatch(turnOffAllLamps());
  }
}
