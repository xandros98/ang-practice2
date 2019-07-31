import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  submitted: boolean = false;
  success: boolean = false;
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })
   }

   onSubmit(){
    this.submitted = true;

    if(this.messageForm.invalid){
      return; // send data
    }

    this.success = true;
   }

  ngOnInit() {
  }
}
