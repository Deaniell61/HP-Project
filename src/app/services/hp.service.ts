import { Injectable } from '@angular/core'
import { Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class HPCharactersService {
    
    private basePath = require('../config')

    constructor(private http:Http){

    }

    private handleError(error:any):Promise<any> {
      console.error("ha ocurrido un error")
      console.log(error)
      return Promise.reject(error.message || error)
    }

    getHPCharacters():Promise<any[]> {
        let url = `${this.basePath}/api/characters`
        return this.http.get(url)
                          .toPromise()
                          .then(response => response.json())
                          .catch(this.handleError)
    }
    
    getHPCharacter(name: string): Promise<any> {
      // let url = `${this.basePath}/character/${id}`
      //   return this.http.get(url)
      //                     .toPromise()
      //                     .then(response => response.json().data as HistorialCharacter)
      //                     .catch(this.handleError)
      
      return this.getHPCharacters()
                .then(character => character.find(character => character.name === name.replace('%20',' ')));
    }

    getHPStudents():Promise<any[]> {
      let url = `${this.basePath}/api/characters/students`
      return this.http.get(url)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError)
  }

    getHPStaff():Promise<any[]> {
      let url = `${this.basePath}/api/characters/staff`
      return this.http.get(url)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError)
  }

  getHPCharactersHouse(name: string): Promise<any[]> {
       
    let url = `${this.basePath}/api/characters/house/${name.replace('%20',' ')}`
    return this.http.get(url)
                      .toPromise()
                      .then(response => response.json())
                      .catch(this.handleError)
    
   
  }
    
}
