import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Interface1 } from '../models/interface1';
import { filter, from, map, mergeMap, skip, take, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) { }

  //seneryo1 data alma
  getPostList(page:number,pageSize:number){
    //page:1 pageSize:5 => 1,2,3,4,5
    //page:2 pageSize:5 =>6,7,8,9,10
    return this.http.get<Interface1[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(mergeMap(x=>from(x)),skip(((page-1)*pageSize)),take(pageSize),toArray()) //take ile ilk 5 kayıt sonda arraye çevir
  }
  getPost(id:number){
    return this.http.get<Interface1>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  //senaryo2 data arama
  getUserWithSearch(searchText:string){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(mergeMap(x=>from(x)),filter(x=>x.name.toLowerCase().includes(searchText.toLowerCase())),map(x=>x.name),toArray());
  }


  //   //post örnek
  // create(createPost:any){ //any olan yere <interceptor> yazılarak datanın tipine uygun gönderilir
  //   return this.http.post<any>('https://jsonplaceholder.typicode.com/posts',createPost)
  // }

  // //put örnek
  // createPut(update:any){
  //   return this.http.put<any>(`https://jsonplaceholder.typicode.com/posts/${update.id}`,update)
  // }

  // //delete örnek
  // createDelete(deleteData:any){
  //   return this.http.delete<any>(`https://jsonplaceholder.typicode.com/posts/${deleteData.id}`,deleteData)
  // }

}
