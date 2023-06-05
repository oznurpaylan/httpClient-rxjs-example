import { Component, OnInit } from '@angular/core';
import { Service1Service } from './service/service1.service';
import { Interface1 } from './models/interface1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'httpClient-rxjs-example';

  postList:Interface1[]=[];
  post:Interface1|any;
  constructor(private service:Service1Service){} //service kullanırken const.


  ngOnInit(): void {



    this.service.getPostList(2,5).subscribe({ //2.sayfadan 5 kayıt getir
      next:(x)=>console.log(x),//this.postList=x ,
      error:(e)=>alert("data bulunamadı"),
      complete:()=>console.log("istek tamamlandı")
    })

  }
}
