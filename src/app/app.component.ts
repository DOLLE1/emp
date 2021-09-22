import { AbstractType, Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employee-reg';

  userForm: FormGroup;
  searchValue: string;
  empList: any;

  constructor(private fb: FormBuilder) {

    this.empList = [];
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      role: ['', Validators.required],
    })
  }

  public addItem(): void{
    if(this.userForm.dirty && this.userForm.valid) {
      this.empList.push(this.userForm.value);
      this.userForm.reset();
    }
     
  }

  public searchItem(){
    if(this.searchValue!==""){
      this.empList = this.empList.filter((result: any)=>{
      return result.name.toLocaleLowerCase().match(this.searchValue.toLocaleLowerCase());
      });
    }
  }
  ngOnInit() {
  }
} 
