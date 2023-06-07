
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background: url(https://www.poynter.org/wp-content/uploads/2019/03/shutterstock_446870920.jpg)center/100%  no-repeat #000;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:65px;
    width:100%;
    
    
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 40px;
    }
`;

const Text = styled(Typography)`
    color: black;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Welcome to our blog</Typography>
                <Text variant="h5">Your ultimate destination for insightful and engaging content! 
                We are a passionate team of writers, thinkers, and storytellers
                 dedicated to sharing captivating stories, valuable knowledge, and thought-provoking ideas.
                  Our blog is designed to be a haven for curious minds, where you can find inspiration, discover new perspectives,
                   and explore a wide range of topics.<br></br><br></br>
                   At our core, we believe in the 
                   power of words to inspire, educate, and entertain. 
                   Through our carefully crafted articles, we aim to
                    provide you with a diverse range of content that sparks
                     your imagination and enriches your understanding of the world
                      around us. Whether you're seeking practical tips,
                       deep dives into fascinating subjects, or simply a momentary escape 
                       from everyday life, our blog has something for everyone.

                </Text>
              
            </Wrapper>
        </Box>
    )
}

export default About;