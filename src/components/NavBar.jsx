// esto es un componente basado en clases no funcional como el component App
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import './NavBarDropdown.css';
import logo from '../logo.svg';
import { categorias } from '../data/data';
import CartWidget from './cart/CartWidget';
import CartWidgetList from './cart/CartWidgetList';
export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="nav">
                    <div>
                        <Link to="/" className="item logo-container" >
                            <img src={logo} className="logo" alt="logo" />
                            <span> Wellcommerce</span>
                        </Link>
                    </div>
                    <ul className='dropdown'>
                        <li className="item"><Link to="/">Inicio</Link></li>
                        <li className="item"><a href="#">Categorías</a>
                            <ul>
                                {categorias &&
                                categorias.map((item, i) => (
                                    <li key={i}><Link  to={`/category/${item.id}`}>{item.nombre}</Link></li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex buttons-container">
                        <ul className='dropdown'>
                            <li><CartWidget cant={5} />
                                <CartWidgetList></CartWidgetList>
                            </li>
                        </ul>
                        <a className="item button" href="www.google.com">Ingresar</a>
                    </div>
                </nav>
            </>
        )
    }
}