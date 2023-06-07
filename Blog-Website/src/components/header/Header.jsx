
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background-color:Gray;
    color: black;
    font-size:22px;
    opacity:0.9;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 30px;
        color: black;
        text-decoration: none;
    }
    .hover-button {
        /* Button styles */
        // background-color: #FFFFFF;
        // color: #000000;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
      }
      
      .hover-button:hover {
        /* Hover styles */
        background-color: #000000;
        color: #FFFFFF;
      }
      
`

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
                <Link to='/' class="hover-button">HOME</Link>
                <Link to='/about'class="hover-button">ABOUT</Link>
                <Link to='/contact'class="hover-button">CONTACT</Link>
                <Link to='/account'class="hover-button">LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;