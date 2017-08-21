import { Injectable } from '@angular/core'
import { Http, Headers } from "@angular/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class HPCharactersService {
    
    private basePath = require('../config')

    headers = new Headers({'Content-Type':'application/json'})
    commentsUrl = "https://hp-comments.firebaseio.com/comments"
    commentUrl = "https://hp-comments.firebaseio.com/comments"
    
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

    getHPHouses():Promise<any[]> {
      let url = `./app/classes/houses.json`
      return this.http.get(url)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError)
    }

    getHPWands():Promise<any[]> {
      let url = `./app/classes/wand.json`
      return this.http.get(url)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError)
    }
    getHPWand(name: string): Promise<any> {
      return this.getHPWands()
                .then(wand => wand.find(wand => wand.name === name.replace('%20',' ')));
    }

    getHPCharactersHouse(name: string): Promise<any[]> {
        
      let url = `${this.basePath}/api/characters/house/${name.replace('%20',' ')}`
      return this.http.get(url)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError)
      
    
    }
    postComment(comment:any,character:string):Promise<any>{
      let body = JSON.stringify(comment)
      return this.http.post(`${this.commentUrl}/${character}.json`,body,{headers: this.headers})
                      .toPromise()
                      .then(response => {
                        console.log(response.json())
                        return response.json()
                      })
                      .catch(this.handleError)
    }
    getComment(id:any):Promise<any> {
      let url = `${this.commentUrl}/${id}.json`
      return this.http.get(url,{headers: this.headers})
                      .toPromise()
                      .then(response => {
                        console.log(response.json())
                        return response.json()
                      })
                      .catch(this.handleError)
    }
  
    getComments(character:string):Promise<any> {
      let url = `${this.commentsUrl}/${character}.json`
      return this.http.get(url,{headers: this.headers})
                      .toPromise()
                      .then(response => {
                        console.log(response.json())
                        return response.json()
                      })
                      .catch(this.handleError)
    }
    
}
