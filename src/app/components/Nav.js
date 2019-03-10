import React from 'react';
import Link from 'next/link';
import { Menu, Image } from 'semantic-ui-react';
import Head from './Head';
// Styling imported below
import 'semantic-ui-css/components/menu.css';
import 'semantic-ui-css/components/image.css';

//Basic nav component.
const Nav = () => (

    <Menu stackable>
        <Head title={'DanielRehbein.com'} />
        <Menu.Header>
            <Image className="logo-item" src="static/favicon.ico" size='mini' floated='left' />
        </Menu.Header>
        <Menu.Item header>DanielRehbein.com</Menu.Item>
        <Link href="/">
        <Menu.Item name='home'/>
        </Link>
        <Link href="/gallery">
        <Menu.Item name='gallery'/>
        </Link>
        <Link href="/news">
        <Menu.Item name='news'/>
        </Link>
        <Link href="/aboutUs">
        <Menu.Item name='aboutUs'/>
        </Link>
        <Link href="/clients">
        <Menu.Item name='clients'/>
        </Link>
        <Link href="/socialMedia">
        <Menu.Item name='socialMedia'/>
        </Link>
    </Menu>
);

export default Nav
