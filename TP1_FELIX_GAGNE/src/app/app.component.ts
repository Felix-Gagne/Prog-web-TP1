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
  chanson : string = "";
  chansons : string[] = [];
  lesAlbums : Album[] = [];

  // Le constructeur devra être ajouté ici
  constructor(public http : HttpClient){}

  async searchArtist():Promise<void>{
    this.result = true;
	
	// La requête HTTP devra être ajoutée ici
  // API key : 9a8a3facebbccaf363bb9fd68fa37abf
    let x = await lastValueFrom(this.http.get<any>("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=9a8a3facebbccaf363bb9fd68fa37abf&format=json"))
    console.log(x);

    this.lesAlbums = [];
  
  for(let monAlbum of x.topalbums.album)
  {
    let album = new Album;
    album.nom = monAlbum.name;
    album.image = monAlbum.image[1]["#text"];
    this.lesAlbums.push(album);
  }
  
  }

  async newSong():Promise<void>{
    
  }

  newSearch():void{
    this.result = false;
  }
}

class Album
{
    nom : string = "";
    image : string = "";
}
