
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
background-image: url(https://myinfoindustry.com/wp-content/uploads/2022/08/contact-us.jpg);
width: 100%;
height: 80vh;
background-position: left 0px top -100px;
background-size: cover;
`;


const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 40px;
    }
`;

const Text = styled(Typography)`
    color:black;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch  </Typography>    
                <Text variant="h5">
                We love hearing from our readers! If you have any questions, comments, or suggestions, 
                please don't hesitate to reach out to us.Your feedback is incredibly valuable to us,
                 as it helps us improve and tailor our content to better serve your needs.<br></br><br></br>
                    {/* <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link> */}
                    Thank you for your support and for being a part of our blog. We value your engagement and
                     look forward to hearing from you soon. Let's keep the conversation going!
                    {/* <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>. */}
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;