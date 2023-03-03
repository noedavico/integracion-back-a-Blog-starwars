import { Link , useParams, useNavigate} from 'react-router-dom'
import logo from '../../img/Star-Wars-Logo-Transparent-PNG.png'
import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/appContext'


export const Navbar = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()
  
	function handleLogout() {
		actions.logout()
		navigate("/")
	}
  return (
    <nav class="navbar navbar-expand header-nav navbar-dark sticky-top p-2 " id='nav'>
    <div className='container-fluid m-auto'>
      <div class="container" style={{ width: '80%' }}> 
      <Link className="navbar-brand" to='/'>
          <img
            src={logo}
            className='img-fluid'
            style={{ width: '200px' }}
          />
        
      </Link>
      </div>
      <div className="dropdown m-auto">
  <button className="btn  btn-outline-warning m-1" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
  <strong>Favorites </strong>
  </button>
  <ul className="dropdown-menu bg-dark border border-ligth " aria-labelledby="dropdownMenuClickableInside">
							{store.favoritos.length > 0 ? store.favoritos.map((item, index) => {
								return (
  //  realizo un map de favorito para leer cada item agregado por el usuario y recibe props desde home  (name, id y cateogoria) para formar la ruta de cada item asi acceder a la vista detallada
									<li key={index} className="dropdown-item bg-dark text-light">  <span> <Link className="text-decoration-none text-warning" to={`/${item.categoria}/${item.id}`}>{item.name}</Link> </span> 
                        <button
													className="badge badge-danger text-white ms-2 justify-content-end"
													onClick={() => actions.borrarFavoritos(item)}>
													<i className="far fa-trash-alt text-dark" />
												</button>
                        </li>
								);
							}): 
              <blockquote className="blockquote text-center text-secondary bg-dark">
              <p>Add your favorites</p>
            </blockquote>
            }
	</ul>
  </div>
  <div className="ml-auto">
				{store.auth ? <button className="btn  btn-outline-warning m-1" onClick={handleLogout}> <strong>Logout</strong></button>: <Link to={"/login"}  className="btn  btn-outline-warning m-1"><strong>Login</strong></Link>}
					
			</div>
</div>
</nav>
  )      
}
