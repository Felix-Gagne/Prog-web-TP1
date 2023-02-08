import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
//import { request } from 'http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Deux variables devront être ajoutées ici
  result : boolean = false;
  artist : string = "";
  album : string = "";
  chanson : string = "";
  lesAlbum : albums[] = [];

  // Le constructeur devra être ajouté ici
  constructor(public http : HttpClient){}

  async searchArtist():Promise<void>{
    this.result = true;
	
	// La requête HTTP devra être ajoutée ici
  // API key : 9a8a3facebbccaf363bb9fd68fa37abf
  try{
    let x = await lastValueFrom(this.http.get<any>("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=9a8a3facebbccaf363bb9fd68fa37abf&format=json"))
    console.log(x);
  }
  catch(e : any){
    console.log("mon erreur : " + e.message);
  }

  this.lesAlbum = [];
  

  
  }

  newSearch():void{
    this.result = false;
  }
}

class albums
{
    image ?: string;
    nom ?: string; 
}
