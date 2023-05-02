/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)

DATI:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

const arrMembers = [
	{
		name: 'Wayne Barnett',
		role: 'Founder & CEO',
		img: 'wayne-barnett-founder-ceo.jpg',
	},
	{
		name: 'Angela Caroll',
		role: 'Chief Editor',
		img: 'angela-caroll-chief-editor.jpg',
	},
	{
		name: 'Walter Gordon',
		role: 'Office Manager',
		img: 'walter-gordon-office-manager.jpg',
	},
	{
		name: 'Angela Lopez',
		role: 'Social Media Manager',
		img: 'angela-lopez-social-media-manager.jpg',
	},
	{
		name: 'Scott Estrada',
		role: 'Developer',
		img: 'scott-estrada-developer.jpg',
	},
	{
		name: 'Barbara Ramos',
		role: 'Graphic Designer',
		img: 'barbara-ramos-graphic-designer.jpg',
	},
];

const eleList = document.querySelector('.grid');
render(arrMembers, eleList);


// FUNCTION DEFINITIONS

function render(arrMembers, eleContainer) {
	console.log(arrMembers);
	eleContainer.innerHTML = '';
	for (let i = 0; i < arrMembers.length; i++) {
		const member = arrMembers[i];
		const stringMember = `${member.name} - ${member.role} - ${member.img}`;
		// console.log(stringMember);
		// eleContainer.innerHTML += `<li>${stringMember}</li>`;
		eleContainer.innerHTML += renderCard(member);

		// console.log('Membro ' + i);
		// let stringMember = '';
		// for (let key in member) {
		// 	stringMember += member[key] + ' - '
		// 	// console.log(member[key]);
		// }
		// if (stringMember) {
		// 	stringMember = stringMember.slice(0, -3);
		// }
		// console.log(stringMember);
	}

	const btnsRemove = document.querySelectorAll('.btn-remove');
	for (let i = 0; i < btnsRemove.length; i++) {
		const btn = btnsRemove[i];
		btn.addEventListener('click', function() {
			// rimuovere il membro dall'array
			arrMembers.splice(i, 1);
			render(arrMembers, eleList);
		});
	}
}

function renderCard(member) {
	return `
		<div class="card">
			<img src="img/${member.img}" alt="${member.name}">
			<div class="contents">
				<h2>${member.name}</h2>
				<p>${member.role}</p>
				<button class="btn-remove">Remove</button>
			</div>
		</div>`;
}