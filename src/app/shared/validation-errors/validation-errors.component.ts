import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.css']
})
export class ValidationErrorsComponent implements OnInit {

  @Input('formulario') forma!: FormGroup;
  @Input() formControlLabel: string = '';
  @Input() maxlenght?: number;
  @Input() minlenght?: number;
  @Input() nombreCampo?: string;
  @Input() pattern?: string;

  
  constructor() { }

  ngOnInit(): void {
  }

  get selectorName(){
    return this.forma.controls[this.formControlLabel];
  }

}
