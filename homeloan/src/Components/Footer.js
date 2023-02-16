import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import HelpIcon from '@mui/icons-material/Help';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3C1053',
    },
    secondary: {
      main: '#5A287D',
    },
  },
});


export default function Footer()
{
    return(
        
            <div className='mt-2 mb-1'>
            <ThemeProvider theme={theme}>
            <Box
            
            px ={{xs: 2, sm: 4, md: 4}}
            pt ={{xs: 2, sm: 4, md: 4}}
            mt = 'auto'
            bgcolor="primary.main"
            color="white">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        {/* 1st column */}
                        <Grid item xs={12} sm={4} mt={4}>
                            <Box mb={2}>
                            <Typography align="center" variant="h6" sx={{fontWeight: 'bold'}}>
                                <HelpIcon sx={{mr: 1.5}}/>
                                Support Centre</Typography>
                            </Box>
                            <Box borderBottom={4}></Box>
                            <Box sx={{fontWeight: 'bold'}}>
                            <Typography variant="h6">Products</Typography>
                            </Box>
                            <Box>
                            <Typography className='body2' href="/home" variant="body2">Mortgages</Typography>
                            </Box>
                            <Box>
                            <Typography className='body2' variant="body2">Savings</Typography>
                            </Box>
                            <Box>
                            <Typography className='body2' variant="body2">Credit cards</Typography>
                            </Box>
                            <Box>
                            <Typography className='body2' variant="body2">Overdrafts</Typography>
                            </Box>
                        </Grid>
                        {/* 2nd column */}
                        <Grid item xs={12} sm={4} mt={4}>
                            <Box mb={2}>
                            <Typography align="center" variant="h6" sx={{fontWeight: 'bold'}}>
                                <RoomIcon sx={{mr: 1.5}}/>
                                Find a branch</Typography>
                            </Box>
                            <Box borderBottom={4}></Box>
                            <Box sx={{fontWeight: 'bold'}}>
                            <Typography variant="h6">Life Moments</Typography>
                            </Box>
                            <Box>
                            <Typography className='body2' variant="body2">View all Life moments</Typography>
                            </Box>
                            <Box>
                            <Typography className='body2' variant="body2">Managing your money</Typography>
                            </Box>
                            <Box>
                            <Typography className='body2' variant="body2">Bereavement</Typography>
                            </Box>
                        </Grid>
                        {/* 3rd column */}
                        <Grid item xs={12} sm={4} mt={4}>
                            <Box mb={2}>
                            <Typography align="center" variant="h6" sx={{fontWeight: 'bold'}}>
                                <PhoneIphoneIcon sx={{mr: 1.5}}/>
                                Get the NatWest app</Typography>
                            </Box>
                            <Box borderBottom={4}></Box>
                            <Box sx={{fontWeight: 'bold'}}>
                            <Typography variant="h6">Help and support</Typography>
                            </Box>
                            <Box>
                            <Typography className='body2' variant="body2">Support</Typography>
                            </Box>
                            <Box>
                            <Typography className='body2' variant="body2">Security</Typography>
                            </Box>
                            <Box>
                            <Typography className='body2' variant="body2">Learning with NatWest</Typography>
                            </Box>
                            <Box>
                            <Typography className='body2' variant="body2">Detecting and preventing financial crime</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box borderBottom={4} mt={2} mb={2}></Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 4 }}>
                        <Grid item xs={3}>
                            <Typography className='body2' variant="body2" sx={{fontWeight: 'bold'}}>Privacy and Cookies</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className='body2' variant="body2" sx={{fontWeight: 'bold'}}>Modern Slavery Act</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className='body2' variant="body2" sx={{fontWeight: 'bold'}}>Careers</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className='body2' variant="body2" sx={{fontWeight: 'bold'}}>Site Map</Typography>
                        </Grid>
                    </Grid>
                    <Box align="left" pt={2}>
                        <FacebookIcon sx={{mr: 1.5}}/>
                        <InstagramIcon sx={{ mr: 1.5}}/>
                        <TwitterIcon sx={{ mr: 1.5}}/>
                        <LinkedInIcon sx={{ mr: 1.5}}/>
                    </Box>
                    <Box textAlign="left" pt={1} pb={1}>
                        <Typography className='body2' variant="body2">
                                {'Copyright © National Westminster Bank plc'}
                                {new Date().getFullYear()}
                                {". Registered office: 250 Bishopsgate, London, EC2M 4AA."}
                        </Typography>
                    </Box>
                </Container>
            </Box>
            </ThemeProvider>
        </div>
    );
}