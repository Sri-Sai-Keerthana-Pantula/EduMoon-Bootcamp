import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Link} from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
            <ProSidebar className="navbar-fixed-top">
                <Menu iconShape="square">
                    <MenuItem><Link to="/" className="navbar-brand">MERN CRUP App</Link></MenuItem>
                    <MenuItem><Link to="/" className="nav-link">Tasks</Link></MenuItem>
                    <MenuItem><Link to="/create" className="nav-link">Create Task</Link></MenuItem>
                    <MenuItem><Link to="/user" className="nav-link">Create User</Link></MenuItem>                
                </Menu>
            </ProSidebar>
        );
    }
}

export default SideBar;