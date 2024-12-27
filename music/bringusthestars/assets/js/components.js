

class Header extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
		<header id="header" class="skel-layers-fixed">
			<h1><a href="index.html">Home</a></h1>
			<nav id="nav">
				<ul>
					<li><a href="music.html">Music</a></li>
					<li><a href="merch.html">Merch</a></li>
				</ul>
			</nav>
		</header>
		`;
	}
}


class Banner extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
		<section id="banner">	
			<div class="row 50% uniform">
				<div class="2u"></div>
				<div class="8u"><span class="image fit"><img src="images/name_transparent_white.png" alt="Bring Us the Stars" /></span></div>
				<div class="2u"></div>
			</div>
			
			<div class="container">
				<ul class="icons">
					<li><a href="https://www.youtube.com/channel/UCQvxUupc1Yc3Pxlr8s0LWHg" class="icon fa-youtube" target="_blank" rel="noopener noreferrer"></a></li>
					<li><a href="https://www.facebook.com/BringUstheStars/" class="icon fa-facebook" target="_blank" rel="noopener noreferrer"></a></li>
					<li><a href="https://www.instagram.com/bringusthestars/" class="icon fa-instagram" target="_blank" rel="noopener noreferrer"></a></li>
					<li><a href="https://twitter.com/BringUs_Stars" class="icon fa-twitter" target="_blank" rel="noopener noreferrer"></a></li>
				</ul>
			</div>
		</section>
		`;
	}
}


class Footer extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.innerHTML = `
		<footer id="footer">
			<div class="container">
				<ul class="icons">
					<li><a href="https://www.youtube.com/channel/UCQvxUupc1Yc3Pxlr8s0LWHg" class="icon fa-youtube" target="_blank" rel="noopener noreferrer"></a></li>
					<li><a href="https://www.facebook.com/BringUstheStars/" class="icon fa-facebook" target="_blank" rel="noopener noreferrer"></a></li>
					<li><a href="https://www.instagram.com/bringusthestars/" class="icon fa-instagram" target="_blank" rel="noopener noreferrer"></a></li>
					<li><a href="https://twitter.com/BringUs_Stars" class="icon fa-twitter" target="_blank" rel="noopener noreferrer"></a></li>
				</ul>
				<ul class="copyright">
					<li>&copy;2022 Bring Us the Stars</li
				</ul>
			</div>
		</footer>
		`;
	}
}


customElements.define('header-component', Header);
customElements.define('banner-component', Banner);
customElements.define('footer-component', Footer);
