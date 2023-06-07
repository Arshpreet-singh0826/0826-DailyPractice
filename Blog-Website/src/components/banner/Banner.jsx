
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://st2.depositphotos.com/1350793/9161/i/600/depositphotos_91612518-stock-photo-blog-concept-with-man-holding.jpg) center/100%  no-repeat #000;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:65px;
`;

const Heading = styled(Typography)`
    font-size: 50px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
              {/* <Heading>LET'S</Heading>
            <SubHeading>BLOG</SubHeading>   */}
        </Image>
    )
}

export default Banner;