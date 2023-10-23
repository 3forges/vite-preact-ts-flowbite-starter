import { useState } from 'preact/hooks';
import { Children } from 'preact/compat';
import NavBar from '../components/NavBar'
import PestoFooter from '../components/Footer';

interface MainLayoutProps {
    children: any[],
    theme?: any,
}

export const MainLayout = ({children}: MainLayoutProps ) => {
    const [isDark, setIsDark] = useState<boolean>(false);

    return (
        <>

        <NavBar />
        {//children
        }
        { 
            Children.forEach(children, (child, index) => {
                console.log(` Loop over MainLayout children, chil no.${index} : [${child}]`)
                return child;
            })
        }

        <PestoFooter />
        </>
    )
}

export default MainLayout;