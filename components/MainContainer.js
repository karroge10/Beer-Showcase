import Head from 'next/head';
import NavLink from './NavLink'

const MainContainer = ({children, pageName, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'The Cold Craft. ' + pageName + '. ' + keywords}></meta>
                <title>{'Buy Cold Craft Beer Online | ' +  pageName}</title>
            </Head>
            <div className='navbar'>
                <NavLink href={'/'} text="Home"></NavLink>
                <NavLink href={'/about'} text="About Us"></NavLink>
            </div>
            <div className="wrapper">
            <h1 className='page-header'>Beer Menu</h1>
                {children}
            </div>
        </>
    );
};

export default MainContainer;