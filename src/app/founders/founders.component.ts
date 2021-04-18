import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-founders',
	templateUrl: './founders.component.html',
	styleUrls: ['./founders.component.scss'],
})
export class FoundersComponent implements OnInit {
	public founders = [
		{
			image: 'assets/images/joaquin-garcia-photo.png',
			name: 'Joaquín Garcia',
			job: 'Backend Developer',
			email: 'u201713735@upc.edu.pe',
		},
		{
			image: 'assets/images/diego-castillo-photo.png',
			name: 'Diego Castillo',
			job: 'Backend Developer',
			email: 'u201716002@upc.edu.pe',
		},
		{
			image: 'assets/images/willington-ortiz-photo.png',
			name: 'Willington Ortiz',
			job: 'Backend Developer',
			email: 'u20161c963@upc.edu.pe',
		},
		{
			image: 'assets/images/daniel-iglesias-photo.png',
			name: 'Daniel Iglesias',
			job: 'Backend Developer',
			email: 'u20161c808@upc.edu.pe',
		},
		{
			image: 'assets/images/miguel-ugarte-photo.png',
			name: 'Miguel Ugarte',
			job: 'Backend Developer',
			email: 'u201719463@upc.edu.pe',
		},
		{
			image: 'assets/images/guillermo-gavilano-photo.png',
			name: 'Guillermo Gavilano',
			job: 'Backend Developer',
			email: 'u20171b294@upc.edu.pe',
		},
		{
			image: 'assets/images/fernando-olano-photo.png',
			name: 'Fernando Olano',
			job: 'Backend Developer',
			email: 'u201713457@upc.edu.pe',
		},
		{
			image: 'assets/images/luiggi-minaya-photo.png',
			name: 'Luiggi Minaya',
			job: 'Backend Developer',
			email: 'u201617515@upc.edu.pe',
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
