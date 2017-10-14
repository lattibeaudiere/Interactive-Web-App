import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
   
    this.name = 'john doe';
    this.email='coolncalm@home.com';
    this.age = 28;
    this.address = {
     
      street:'50 Main St',
      city: 'Boston',
      state:'MA'
    }
    this.hobbies = ['Write Code', 'Watch Tube ','Cook']
    this.hello ='hello';

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
}

  onClick(){
    this.name='ryan latt';
    this.hobbies.push('New Hobby');
    console.log('hello')
  }


addHobby(hobby){
  console.log(hobby);
  this.hobbies.unshift(hobby);
  return false;
}

deleteHobby(hobby){
  for(let i = 0;i <this.hobbies.length;i++){
    if(this.hobbies[i] == hobby){
      this.hobbies.splice(i, 1);
    }
  }
}

toggleEdit(){
  this.isEdit = !this.isEdit;
}

}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post {
  id: number,
  title:string,
  body:string,
  userId: number
}