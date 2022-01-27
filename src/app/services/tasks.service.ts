import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  private apiUrl : string = 'http://localhost/api';

  // Get all tasks from api
  getTasks() {
    return this.http.get(this.apiUrl+'/tasks.php');
  } 

  //saving of taskform value to your api
  saveTask(task) {
    return this.http.post(this.apiUrl+'/save-tasks.php', task);
  }

  getTaskDetail(id){
    return this.http.get(this.apiUrl+'/get-tasks.php?id='+id)
  }

  updateTask(task) {
    return this.http.put(this.apiUrl+'/update-task.php', task);
  }

  deleteTask(id) {
    const params = new HttpParams().set('id', id);
    return this.http.delete(this.apiUrl+'/delete-task.php', { params: params});
  }
}
