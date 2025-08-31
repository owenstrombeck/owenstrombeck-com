
class Footer extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
			<footer class="container"><div>&copy; 2023 OwenStrombeck, All Rights Reserved</div></footer><p></p>
		`;
	}
}


class SwccgCard extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {

		var typeIconName = this.getAttribute('type').toLowerCase();
		switch(typeIconName) {
			case "character":
				typeIconName = this.getAttribute('subtype').toLowerCase();
				break;
			case "location":
				typeIconName = this.getAttribute('subtype').toLowerCase();
				break;
		}

		var summaryHTML = `
			<summary class="cardListSummary">
				<div class="cardListSummaryRow">
					<div class="cardListIconColumn">
						<img src="images/` + typeIconName + `.webp" alt="` + typeIconName + `"/>
					</div>
					<div class="cardListNameColumn">
						` + this.getAttribute('name') + `
					</div>
					<div class="cardListRarityColumn">
						(` + this.getAttribute('rarity') + `)
					</div>
				</div>
			</summary>`;

		var cardImageName = `${this.getAttribute('name').replace(/\s+/g, '').replace(/([^:]*):/g,'$1').replace(/\//g, "").replace(/'/g, "").replace(/’/g, "").replace(/!/g, "").replace(/,/g, "").replace(/\./g, "")}`;
		
		var innerDetailsHTML = `
			<div class="cardDetailsContent">
				<img class="cardImage" src="images/` + this.getAttribute('side').toLowerCase() + `/` + cardImageName + `.webp" loading="lazy" alt="` + cardImageName + `"/>
				<div class="cardCommentary">` + this.getAttribute('commentary') + `</div>
			</div>`;

		if(typeIconName == "objective")
		{
			innerDetailsHTML = `
			<div class="cardDetailsContent">
				<img src="images/` + this.getAttribute('side').toLowerCase() + `/` + cardImageName + `0.webp" loading="lazy" alt="image"/>
				<img src="images/` + this.getAttribute('side').toLowerCase() + `/` + cardImageName + `7.webp" loading="lazy" alt="image"/>
			</div>`;
		}

		this.innerHTML = `
		<div class="cardList">
			<details class="cardListDetails">
				` + summaryHTML + `
				<p>
					` + innerDetailsHTML + `
				</p>
			</details>
		</div>
		`;
	}
}


class HPack extends HTMLElement { 
	constructor() {
		super();
	}
	connectedCallback() {
		var side = this.getAttribute('side').toLowerCase();
		var setCode = this.getAttribute('setCode');
		var effectName = this.getAttribute('effectName');
		var effectImageName = `${side.toLowerCase()}-${setCode.toLowerCase()}-${effectName.replace(/\s+/g, '-').replace(/([^:]*):/g,'$1').replace(/\//g, "").replace(/'/g, "").replace(/’/g, "").replace(/!/g, "").replace(/,/g, "").replace(/\./g, "").toLowerCase()}.webp`;
		var effectAltName = effectName.replace(/([^:]*):/g,'$1').replace(/\//g, "").replace(/'/g, "").replace(/’/g, "");
		this.innerHTML = `
			<details>
				<summary>
					<strong>${setCode} - ${effectName}</strong>
				</summary>
				<p>
					<div class="hyperdrive-printsheet">
						Print Sheet = <a href="printsheets/${side.toLowerCase()}-${setCode.toLowerCase()}-printsheet.pdf" target="_blank" 
						rel="noopener noreferrer">${side.toLowerCase()}-${setCode.toLowerCase()}-printsheet.pdf</a>
						</br></br>
					</div>
					<div class="hyperdrive-pack">
						<div id="${side}-${setCode}-pack-cardlist">
						</div>
						<div class="hyperdrive-card-image">
							<img id="${setCode}CardImage" class="cardImage" src="images/cards/${effectImageName}" loading="lazy" alt="${effectAltName}">
						</div>
					</div>
				</p>
			</details>
		`;
	}
}

class HCard extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {

		var side = this.getAttribute('side').toLowerCase();
		var setCode = this.getAttribute('setCode');
		var typeIconName = this.getAttribute('type').toLowerCase();
		switch(typeIconName) {
			case "character":
				typeIconName = this.getAttribute('subtype').toLowerCase();
				break;
			case "location":
				typeIconName = this.getAttribute('subtype').toLowerCase();
				break;
		}
		var cardName = this.getAttribute('name');
		var cardImageName = `${side.toLowerCase()}-${setCode.toLowerCase()}-${cardName.replace(/\s+/g, '-').replace(/([^:]*):/g,'$1').replace(/\//g, "").replace(/'/g, "").replace(/’/g, "").replace(/!/g, "").replace(/,/g, "").replace(/\./g, "").toLowerCase()}.webp`;
		var cardImageAltName = cardName.replace(/([^:]*):/g,'$1').replace(/\//g, "").replace(/'/g, "").replace(/’/g, "");

		document.getElementById(`${side}-${setCode}-pack-cardlist`).innerHTML += `
			<img src="images/${typeIconName}.webp" alt="${typeIconName}"/>
			<a onclick="
				getElementById('${setCode}CardImage').setAttribute('src', 'images/cards/${cardImageName}');
				getElementById('${setCode}CardImage').setAttribute('alt', '${cardImageAltName}');
			"> ${cardName} </a>
			</br>
		`;
	}
}



customElements.define('footer-component', Footer);
customElements.define('swccg-card', SwccgCard);
customElements.define('h-pack', HPack);
customElements.define('h-card', HCard);
