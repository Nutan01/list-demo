import { Component } from '@angular/core';
import { Company } from './company';
import {FormBuilder ,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // form title
   title:string= "Fill the below form";

  //  list title
   title1:string= "List shows below";

  // form model
   company:any={};

  //  list model
   companyList:Company[]= [];
 
  //  Model driven form object
  userForm:FormGroup;

  // company category list
  companyCategoryList= [{"campanyCategory":"Option1"},{"campanyCategory":"Option2"},{"campanyCategory":"Option3"}];

  //use for message 
  msg:string;
  showMsg:boolean;
  contactMsg:string;
  contactShowMsg:boolean;
  logoMsg:string;
  logoShowMsg:boolean;
  

  // constructor with parameter of formbuilder(mdf)
  constructor(
          private _formBuilder:FormBuilder,
       ) { }

  // create form on oninit
  ngOnInit() {
     this.userForm= this._formBuilder.group({
              companyName:[null,[Validators.required]],
              companyId:[null,[Validators.required]],  
              companyAddress:[null,[Validators.required]],
              contact:[null] ,
              companyEmail:[null,[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
              companyCategory:[this.companyCategoryList]  ,
              componyLogo:[null]      
      });
  }

 // on selection of input type contact set it to model company for further access
    selectContact(contact:string){
      if(contact.length>=13){
                 this.company.contact=contact;
      }
      else{
        this.contactShowMsg=true;
        this.contactMsg="Please enter minimum 13 digits including country code.";
      }
  }
  
 // on selection of dropdown category set it to model company for further access
   setClickedRow(campanyCategory:string){
                      this.company.companyCategory=campanyCategory;
       }

 //company logo upload and 
    fileChangeEvent(fileInput: any){   
          if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (fileInput:any) => {
            this.company.companyLogo  = fileInput.target.result;
            }

            reader.readAsDataURL(fileInput.target.files[0]);
          }         
          else
          {
              this.logoShowMsg=true;
              this.logoMsg="Company logo is required.";
          }      
        }

  //submit form and add model company values to the company list  
    submit(){
      if(this.company.companyName != null && this.company.companyId != null && this.company.companyEmail != null &&
      this.company.contact != null && this.company.companyAddress != null && this.company.companyCategory != null 
      && this.company.companyLogo != null){
            this.showMsg=false;
            this.companyList.push(this.company);
            this.company={};
      }
      else
      {
            this.showMsg=true;
            this.msg="Please fill the above details mentioned mandatory ..!";
      }
    }

}
