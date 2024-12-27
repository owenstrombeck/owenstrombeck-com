
class Header extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
			<div id="header">
			<div class="container">
					
				<!-- Logo -->
					<div id="logo">
						<h1>Mercury Crossing</h1>
					</div>

			</div>
			</div>
		`;
	}
}


class Footer extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
			<div id="footer">
			<div class="container">
				<div class="row">
					<div class="12u">
						<section>
							<p>© 2021 Mercury Crossing | All Rights Reserved</p>
						</section>
					</div>
				</div>
				<div class="row">
					<div class="3u">
						<section>
							<ul class="default">
								<li><a href="https://mercurycrossing.bandcamp.com" target="_blank" rel="noopener noreferrer">Bandcamp</a></li>
							</ul>
						</section>
					</div>
					<div class="3u">
						<section>
							<ul class="default">
								<li><a href="https://www.facebook.com/MercuryCrossing/" target="_blank" rel="noopener noreferrer">facebook</a></li>
							</ul>
						</section>
					</div>
					<div class="3u">
						<section>
							<ul class="default">
								<li><a href="https://music.apple.com/us/artist/mercury-crossing/255356348" target="_blank" rel="noopener noreferrer">Apple Music</a></li>
							</ul>
						</section>
					</div>
					<div class="3u">
						<section>
							<ul class="default">
								<li><a href="https://open.spotify.com/artist/0Y2zjE0MnaKjqPdFhNDisU" target="_blank" rel="noopener noreferrer">Spotify</a></li>
							</ul>
						</section>
					</div>
				</div>
			</div>
			</div>
		`;
	}
}

customElements.define('header-component', Header);
customElements.define('footer-component', Footer);
