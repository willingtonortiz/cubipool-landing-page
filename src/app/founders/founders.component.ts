import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-founders',
	templateUrl: './founders.component.html',
	styleUrls: ['./founders.component.scss']
})
export class FoundersComponent implements OnInit {

	public founders = [
		{ image: "assets/images/luiggi-photo.png", name: "Luiggi Minaya", job: "Backend Developer", email: "u201617515@upc.edu.pe" },
		{ image: "assets/images/joaquin-photo.png", name: "Joaquín Garcia", job: "Backend Developer", email: "u201713735@upc.edu.pe" },
		{ image: "assets/images/diego-photo.png", name: "Diego Castillo", job: "Backend Developer", email: "u201716002@upc.edu.pe" },
		{ image: "assets/images/willington-photo.png", name: "Willington Ortiz", job: "Backend Developer", email: "u20161c963@upc.edu.pe" },
		{ image: "assets/images/daniel-photo.png", name: "Daniel Iglesias", job: "Backend Developer", email: "u20161c808@upc.edu.pe" }
	];

	constructor() { }

	ngOnInit(): void {
	}

}
