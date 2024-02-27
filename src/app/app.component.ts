import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public generalInfoForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });
  public formList: FormGroup[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.addRowForm();

  }

  ngOnInit():void {
  }

  addRowForm():void {
    const newForm = this.formBuilder.group({
      product: ['', Validators.required],
      price: ['', Validators.required],
      currency: ['', Validators.required],
      amount: ['', Validators.required],
      purchaseDate: [this.setInitialDate(), Validators.required],
    });
    this.formList.push(newForm);
  }

  setInitialDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
}
