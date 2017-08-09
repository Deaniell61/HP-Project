import { Injectable } from '@angular/core'
import { Http } from "@angular/http";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";


@Injectable()
export class HPCharactersService {
    
    private basePath = 'http://hp-api.herokuapp.com'

    constructor(private http:Http){

    }

    private handleError(error:any):Promise<any> {
      console.error("ha ocurrido un error")
      console.log(error)
      return Promise.reject(error.message || error)
    }

    getHPCharacters():Promise<any> {
        let url = `${this.basePath}/api/characters`
        return this.http.get(url)
                          .toPromise()
                          .then(response => response.json().data)
                          .catch(this.handleError)
    }

    
}
