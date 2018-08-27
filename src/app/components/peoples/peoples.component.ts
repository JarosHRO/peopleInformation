import { Component, OnInit, Input } from '@angular/core';
import { PeoplesService } from '../../services/peoples.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

  public searchText: string;
  public peoples: any[];

  constructor(private peopleService: PeoplesService, private router: Router) { }

  ngOnInit() {
    this.peopleService.getPeoples().subscribe(data=>{
      console.log(data)
      this.peoples = data;
    })
  }

}
