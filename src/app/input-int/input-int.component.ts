import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-int',
  templateUrl: './input-int.component.html',
  styleUrls: ['./input-int.component.css']
})
export class InputIntComponent implements OnInit {

  constructor() { }

  @Input()
  quantity!: number

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity < this.max)
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  downQuantity(): void {
    if(this.quantity > 0)
      this.quantity--;
      this.quantityChange.emit(this.quantity);
  }

  changeQuantity(event: any): void {
    if (event < this.max)
      this.quantityChange.emit(this.quantity);
  }
  
}
