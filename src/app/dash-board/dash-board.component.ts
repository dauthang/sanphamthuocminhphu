import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {


  page : number = 1;
  constructor( private router: Router,) {
    
   }

  ngOnInit() {

  }

  public detail(id?: any) {
    return this.router.navigate(['/detail/', id]);
  }

  changeNext(){
    if(this.page === 4){
      return;
    }else{
      this.page =  this.page + 1;
    }
  }

  changePreview(){
    if(this.page === 1){
      return;
    }else{
      this.page = this.page -1;
    }
  }

  changeIndex(index){
    this.page = index;
  }
}
