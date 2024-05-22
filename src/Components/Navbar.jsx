
export const Navbar = ({setCategory}) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container">
      <a class="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News Page</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{cursor:"pointer"}}onClick={()=>setCategory("technology")} >Technology</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  style={{cursor:"pointer"}} onClick={()=>setCategory("business")} >Business</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  style={{cursor:"pointer"}}onClick={()=>setCategory("health")}>Health</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{cursor:"pointer"}} onClick={()=>setCategory("sports")}>Sports</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{cursor:"pointer"}} onClick={()=>setCategory("entertainment")}>Entertainment</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  )
}
