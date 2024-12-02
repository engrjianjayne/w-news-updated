import '../App.css';

const Navbar = ({setCategory}) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-sticky">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">W NEWS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <div class="nav-link custom-cursor" onClick={() => setCategory('Technology')}>Technology
        </div>
        </li>
        <li class="nav-item">
          <div class="nav-link custom-cursor" onClick={() => setCategory('Business')}>Business
        </div>
        </li>
        <li class="nav-item">
          <div class="nav-link custom-cursor" onClick={() => setCategory('Health')}>Health
        </div>
        </li>
        <li class="nav-item">
          <div class="nav-link custom-cursor" onClick={() => setCategory('Sports')}>Sports
        </div>
        </li>
        <li class="nav-item">
          <div class="nav-link custom-cursor" onClick={() => setCategory('Entertainment')}>Entertainment
        </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
