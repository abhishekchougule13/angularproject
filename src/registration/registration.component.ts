import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  formCustomerGroup: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder:FormBuilder) {
    this.formCustomerGroup=this.formBuilder.group({
      CustomerName:new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z ]{0,20}$"),
      ])
    });

  }

  onformsubmit(){
    this.isSubmitted = true;
    if(this.formCustomerGroup.valid){
      console.log("User Registration Form Submit", this.formCustomerGroup.value);
    }
  }

  urllink:string="";

  selectFiles(event:any){
    if(event.target.file){
      var reader=new FileReader()
      reader.readAsDataURL(event.target.file[0])
      reader.onload=(event:any)=>{
        this.urllink=event.target.result


      }
    }
    
  }

}
