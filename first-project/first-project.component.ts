import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-project',
  templateUrl: './first-project.component.html',
  styleUrls: ['./first-project.component.css'],
})
export class FirstProjectComponent implements OnInit {
  userNames: Array<any> = ['Aynur', 12345];
  name: string = '';
  password: number = 0;
  foodNames: Array<string> = [];
  foodd: string = '';
  flag: boolean = false;
  drinkName: string = '';
   constructor() {}

  ngOnInit(): void { }

  signIn(): void {
    if (this.name == this.userNames[0] && this.password == this.userNames[1]) {
      this.flag = true;
    } else {
      this.flag = false;
      alert('Please enter your information right...');
    }
  }

  add(): void {
    this.foodNames.push(this.foodd);
  }

}
