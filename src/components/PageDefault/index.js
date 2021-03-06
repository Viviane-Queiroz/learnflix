import React from 'react'; 
import Menu from '../Menu';
import Footer from '../Footer'; 
import styled from 'styled-components';

const Main = styled.main`
    background-color: rgb(38, 38, 38);
    color: var(--white);
    flex: 1;
    padding-top: 60px; 
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault({ children }) {
    return (
    <> 
        <Menu />
            <Main>
                {children} 
            </Main>
        <Footer />
    </> 
    );
}

export default PageDefault; 