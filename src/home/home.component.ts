import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

 
  public ad= "assets/images/first.jpg" ;
  public msg='';


  public styleObj={
    'width':'800px',
    'hight':'800px'

  }
  stopanimation(e:any){
    e.target.stop();
  }
  startanimation(e:any){
    e.target.start();
  }

}
