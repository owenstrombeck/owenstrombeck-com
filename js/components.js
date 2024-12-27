
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
						<img src="images/` + typeIconName + `.png" alt="` + typeIconName + `"/>
					</div>
					<div class="cardListNameColumn">
						` + this.getAttribute('name') + `
					</div>
					<div class="cardListRarityColumn">
						(` + this.getAttribute('rarity') + `)
					</div>
				</div>
			</summary>`;

		var cardImageName = this.getAttribute('name').replace(/\s+/g, '').replace(/([^:]*):/g,'$1').replace(/\//g, "").replace(/'/g, "").replace(/’/g, "");
		
		var innerDetailsHTML = `
			<div class="cardDetailsContent">
				<img class="cardImage" src="images/` + this.getAttribute('side').toLowerCase() + `/` + cardImageName + `.jpg" loading="lazy" alt="` + cardImageName + `"/>
				<div class="cardCommentary">` + this.getAttribute('commentary') + `</div>
			</div>`;

		if(typeIconName == "objective")
		{
			innerDetailsHTML = `
			<div class="cardDetailsContent">
				<img src="images/` + this.getAttribute('side').toLowerCase() + `/` + cardImageName + `0.jpg" loading="lazy" alt="image"/>
				<img src="images/` + this.getAttribute('side').toLowerCase() + `/` + cardImageName + `7.jpg" loading="lazy" alt="image"/>
				<p>
					Commentary on this card
				</p>
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


customElements.define('footer-component', Footer);
customElements.define('swccg-card', SwccgCard);
