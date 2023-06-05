import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Service1Service } from 'src/app/service/service1.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search=new FormControl('')
  searchList:string[]=[];
  constructor(private service:Service1Service){}

  ngOnInit(): void {
    this.search.valueChanges.subscribe(x=>{
      this.service.getUserWithSearch(x as string).subscribe(y=>{
        this.searchList=y;
      })
    })
  }

}
