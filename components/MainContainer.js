import Head from 'next/head';
import Link from 'next/link';

const MainContainer = ({children, pageName, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'The Cold Craft. ' + pageName + '. ' + keywords}></meta>
                <title>{'Buy Cold Craft Beer Online | ' +  pageName}</title>
            </Head>
            <div className="wrapper">
                <nav>
                    <Link href={'/'}>
                        <h1 className='page-header'>Beer Menu</h1>
                    </Link>
                </nav>
                {children}
            </div>
        </>
    );
};

export default MainContainer;