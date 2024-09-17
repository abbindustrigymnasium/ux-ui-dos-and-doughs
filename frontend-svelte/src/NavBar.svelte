<script>
  let menuVisible = false;

  function toggleMenu() {
    menuVisible = !menuVisible;
  }
</script>

<menu class="mobile-menu-overlay" style="display: {menuVisible ? 'block' : 'none'};">
  <div class="mobile-menu-flex">
    <header>
      <a href="./index.html" class="link">
        <img class="nav-logo" src="/logo.svg" alt="dos and doughs logo" />
      </a>
    </header>
    <ul class="mobile-navlinks">
      <li><a href="./index.html" class="link">Home</a></li>
      <li><a href="./order.html" class="link">Order</a></li>
      <li><a href="./location.html" class="link">Location</a></li>
    </ul>
    <div class="close-wrapper" on:click={toggleMenu}>
      <img class="close-icon" src="/close-icon.svg" alt="close menu, cross icon" />
    </div>
  </div>
</menu>

<nav>
  <a href="./index.html" class="link">
    <img class="nav-logo" src="/logo.svg" alt="dos and doughs logo" />
  </a>
  <div class="desktop-nav">
    <ul class="navlinks">
      <li>
        <a href="./index.html" class="navlink link">Home</a>
        <div class="navlink-hover-menu">
          <a href="#about-section">About</a>
          <div>FAQ</div>
          <div>Contact</div>
          <div>Follow</div>
        </div>
      </li>
      <li><a href="./order.html" class="link">Order</a></li>
      <li><a href="./location.html" class="link">Location</a></li>
    </ul>
    <div class="nav-deco-line"></div>
    <div class="right-nav">
      <div class="account-nav-wrapper">
        <img class="account-icon" src="/account-icon.svg" alt="account icon" />
        <a href="./account.html" class="link">Account</a>
      </div>
    </div>
  </div>
  <div class="mobile-nav" on:click={toggleMenu}>
    <div class="menu-icon">
      <div class="ham-line"></div>
      <div class="ham-line"></div>
      <div class="ham-line"></div>
    </div>
  </div>
</nav>

<style>
  .mobile-menu-overlay {
    padding: 0;
    height: 100vh;
  }

  .mobile-menu-flex {
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    justify-content: space-between;
  }

  .nav-logo {
    padding-top: 10px;
    width: 210px;
  }

  .mobile-navlinks {
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    align-items: center;
    font-size: 2rem;
    margin-bottom: 4em;
  }

  .close-wrapper {
    transition: background-color 200ms ease-in-out;
    height: 22px;
    cursor: pointer;
    padding: 20px;
  }

  .close-wrapper:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .close-icon {
    width: 22px;
  }

  .desktop-nav {
    display: flex;
    align-items: center;
    column-gap: 4em;
    height: 15px;
    padding-block: 20px;
  }

  .navlinks {
    display: flex;
    column-gap: 1.2em;
  }

  .navlink-hover-menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    row-gap: 0.4em;
    top: 2.6em;
    opacity: 0;
    color: #C7C2BC;
    user-select: none;
    pointer-events: none;
    transition: opacity 500ms ease-in-out;
  }

  .nav-deco-line {
    width: 4px;
    height: 24px;
    background-color: var(--dimmed-graphics-color);
  }

  .right-nav {
    display: flex;
    column-gap: 1.6em;
  }

  .account-nav-wrapper {
    display: flex;
    align-items: center;
    column-gap: 0.6em;
  }

  .account-icon {
    width: 16px;
    padding-bottom: 3px;
  }

  .mobile-nav {
    display: none;
  }

  .menu-icon {
    height: 15px;
    width: 20px;
    padding-inline: 20px;
    padding-block: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: background-color 200ms ease-in-out;
    box-sizing: content-box;
  }

  .menu-icon:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .ham-line {
    background-color: var(--graphics-color);
    width: 20px;
    height: 2px;
    transition: width 200ms ease-out;
  }

  @media only screen and (max-width: 900px) {
    .desktop-nav {
      display: none;
    }

    .mobile-nav {
      display: block;
    }
  }
</style>
