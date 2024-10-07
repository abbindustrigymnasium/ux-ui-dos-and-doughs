<script>
  const logo = '/logo.svg'
  const accountIcon = '/account-icon.svg'
  const navDropdownArrow = '/nav-dropdown-arrow.svg'

  let isMenuOpen = false;
  let isMobileMenuOpen = false;
  export let currentPage = '';
</script>

<nav class="navbar">
  <a href="/" class="link">
    <img class="logo" src={logo} alt="dos and doughs logo" />
  </a>

  <div class="navbar-links">
    <ul>
      <li class="home-nav-wrapper">
        <menu
          class="nav-dropdown"
          style="opacity: {isMenuOpen ? '1' : '0'}; pointer-events: {isMenuOpen ? 'auto' : 'none'}"
          on:mouseenter={() => (isMenuOpen = true)}
          on:mouseleave={() => (isMenuOpen = false)}
        >
          <a href="#special-offers" class="link">Offers</a>
          <a href="#what-students-say" class="link">What students say</a>
          <a href="#about" class="link">About</a>
          <a href="#faq-section" class="link">FAQ</a>
          <a href="#follow" class="link">Follow Us</a>
        </menu>

        <div
          class="nav-home link"
          on:mouseenter={() => (isMenuOpen = true)}
          on:mouseleave={() => (isMenuOpen = false)}
        >
          <a href="/" class={currentPage === '/' ? 'underline' : 'link'}>Home</a>
          <img class="nav-dropdown-arrow" src={navDropdownArrow} alt="nav dropdown arrow" />
        </div>
      </li>
      <li>
        <a href="/shop" class={currentPage === '/shop' ? 'underline link' : 'link'}>Shop</a>
      </li>
      <li>
        <a href="/visit" class={currentPage === '/visit' ? 'underline link' : 'link'}>Visit</a>
      </li>
    </ul>
    <div class="vertical-line"></div>
    <div class="account-nav">
      <img class="account-icon" src={accountIcon} alt="account icon" />
      <a href="/account" class={currentPage === '/account' ? 'underline link' : 'link'}>Account</a>
    </div>
  </div>
</nav>

<nav class="mobile-navbar">
  <a href="/" class="link">
    <img class="logo" src={logo} alt="dos and doughs logo" />
  </a>
  <div
    class="hamburger-menu-wrapper"
    on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}
  >
    <img
      src="/hamburger-menu.svg"
      alt="hamburger menu"
      class="hamburger-menu"
      style="display: {isMobileMenuOpen ? 'none' : 'block'}"
    />
    <img
      src="/close-icon.svg"
      alt="close icon"
      class="hamburger-menu"
      style="display: {isMobileMenuOpen ? 'block' : 'none'}"
    />
  </div>

  <div class="navbar-links" style="display: {isMobileMenuOpen ? 'flex' : 'none'}">
    <ul>
      <li>
        <a href="/" class={currentPage === '/' ? 'underline' : 'link'}>Home</a>
      </li>
      <li>
        <a href="/shop" class={currentPage === '/shop' ? 'underline link' : 'link'}>Shop</a>
      </li>
      <li>
        <a href="/visit" class={currentPage === '/visit' ? 'underline link' : 'link'}>Visit</a>
      </li>
    </ul>
    <div class="account-nav">
      <img class="account-icon" src={accountIcon} alt="account icon" />
      <a href="/account" class={currentPage === '/account' ? 'underline link' : 'link'}>Account</a>
    </div>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    font-family: "Redaction", serif;
    font-size: 1.1rem;
    margin-bottom: 4em;
    margin-inline: 4em;
  }

  .fixed-navbar {
    position: fixed;
    top: 3em;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    height: 40px;
    padding-inline: 2em;
    border-radius: var(--large-border-radius);
    justify-content: space-between;
    background-color: var(--graphics-color);
    color: var(--background-color);
    font-family: 'Public Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    z-index: 5;
    /*border: 2px solid var(--graphics-color-hover);*/
  }

  .navbar .vertical-line {
    height: 20px;
  }

  .fixed-navbar .vertical-line {
    height: 20px;
  }

  .fixed-navbar menu {
    background-color: var(--graphics-color);
    color: var(--background-color);
    top: 20px;
  }

  .fixed-navbar .current {
    text-decoration: none;
  }

  .fixed-navbar .nav-dropdown {
    border-color: var(--graphics-color-hover);
  }

  .fixed-navbar .vertical-line {
    background-color: var(--graphics-color-hover);
  }

  .fixed-navbar .nav-dropdown + .nav-home a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--background-color);
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  .fixed-navbar .nav-home:hover a::after {
    transform: scaleX(1);
  }

  .fixed-navbar .nav-dropdown:hover + .nav-home a::after {
    transform: scaleX(1);
  }

  .navbar-links {
    position: relative;
    display: flex;
    column-gap: 6em;
    align-items: center;
    z-index: 10;
  }

  .home-nav-wrapper {
    position: relative;
  }

  .nav-home {
    width: 70px;
    transition: width 400ms ease-in-out;
  }

  .nav-home a {
    transition: padding-right 400ms ease-in-out;
  }

  .nav-home:hover {
    width: calc(70px + 12em);
  }

  .nav-home:hover a {
    padding-right: 12em;
  }

  .nav-home:hover .nav-dropdown-arrow {
    rotate: 180deg;
  }

  .nav-dropdown {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 22px;
    left: 0px;
    background-color: var(--background-color);
    border: 2px solid var(--graphics-color-lighter);
    border-top: none;
    border-radius: 0 0 8px 8px;
    padding-block: 2em;
    padding-inline: 2em;
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 1.2em;
    z-index: -1; /* Relative to the navbar */
    transition: opacity 200ms ease-in-out;
  }

  .nav-dropdown a {
    font-family: 'Public Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
  }

  .nav-dropdown:hover + .nav-home {
    width: calc(70px + 12em);
  }

  .nav-dropdown:hover + .nav-home a {
    padding-right: 12em;
  }

  .nav-dropdown + .nav-home a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--graphics-color);
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  .nav-home:hover a::after {
    transform: scaleX(1);
  }

  .nav-dropdown:hover + .nav-home a::after {
    transform: scaleX(1);
  }

  .nav-dropdown:hover + .nav-home .nav-dropdown-arrow {
    rotate: 180deg;
  }

  .nav-dropdown-arrow {
    margin-left: 6px;
    width: 16px;
    position: relative;
    transition: rotate 400ms ease-in-out;
  }

  .logo {
    width: 240px;
  }

  .navbar-links ul {
    display: flex;
    column-gap: 1.2em;
    align-items: center;
  }

  .account-nav {
    display: flex;
    align-items: center;
    column-gap: 0.5em;
  }

  .account-icon {
    width: 16px;
  }


  .mobile-navbar {
    margin-inline: 2em;
    margin-bottom: 4em;
    justify-content: space-between;
    align-items: center;
  }

  .hamburger-menu {
    width: 24px;
  }

  .hamburger-menu-wrapper {
    cursor: pointer;
    padding: 1em;
    margin-bottom: 0.5em;
  }

  .mobile-navbar {
    display: none !important;
  }

  @media screen and (max-width: 900px) {
    .navbar {
      display: none !important;
    }

    .mobile-navbar {
      display: flex !important;
      margin-top: -1em;
    }

    .mobile-navbar .navbar-links {
      position: absolute;
      top: 0;
      background-color: var(--background-color);
      height: 7em;
      column-gap: 2em;
    }
  }

  @media screen and (max-width: 700px) {
    .fixed-navbar {
      display: none;
    }
  }
</style>