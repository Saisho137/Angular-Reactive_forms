import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public formList: FormGroup[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit():void {
    this.addRowForm();
  }

  addRowForm():void {
    const newForm = this.fb.group({
      producto: ['', Validators.required],
      tarifa: ['', Validators.required],
      moneda: ['', Validators.required],
      itemTrabajo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
    this.formList.push(newForm);
  }
}
