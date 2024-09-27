import { Button, Grid, Typography } from "@mui/material";
import React from "react";
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {

    return (
        <div>
            <Grid className="bg-slate-600 text-white text-center mt-10 justify-center"
                container
                sx={{ background: "gray", color: "white", py: 2 }}
            >
                
                <Grid
                    item
                    sx={12}
                    sm={6}
                    md={3}
                >

                    <Typography className="pb-4" variant="h6" sx={{color: "black"}}> 
                    {" "}
                        Company
                         </Typography>
                   
                    <div>
                        <Button className="pb-6" variant="h6" gutterBottom> About </Button>

                    </div>

                    <div>

                        <Button className="pb-6" variant="h6" gutterBottom> Blog </Button>
                    </div>

                    <div>

                        <Button className="pb-6" variant="h6" gutterBottom> Press </Button>
                    </div>

                    <div>
                        <Button className="pb-6" variant="h6" gutterBottom> Jobs </Button>
                    </div>
                    <div>
                        <Button className="pb-6" variant="h6" gutterBottom> Partners </Button>
                    </div>


                </Grid>
                {/* 1 */}
                <Grid
                     item
                    sx={12}
                    sm={6}
                    md={3}
                >

                    <Typography className="pb-4" variant="h6" sx={{color: "black"}}> Solutions </Typography>
                   
                    <div>
                        <Button className="pb-6" variant="h6" gutterBottom> Marketing </Button>

                    </div>

                    <div>

                        <Button className="pb-6" variant="h6" gutterBottom> Analytics </Button>
                    </div>

                    <div>

                        <Button className="pb-6" variant="h6" gutterBottom> Commerce </Button>
                    </div>

                    <div>
                        <Button className="pb-6" variant="h6" gutterBottom> Insights </Button>
                    </div>
                    <div>
                        <Button className="pb-6" variant="h6" gutterBottom> Support </Button>
                    </div>


                </Grid>
            {/* 2 */}
            <Grid
                    item
                    sx={12}
                    sm={6}
                    md={3}
                >

                    <Typography className="pb-4" variant="h6" sx={{color: "black"}}> Documentation </Typography>
                   
                    <div>
                        <Button className="pb-6" variant="h6" gutterBottom> Guldes </Button>

                    </div>

                    <div>

                        <Button className="pb-6" variant="h6" gutterBottom> API Status </Button>
                    </div>

                </Grid>
                {/* 3 */}
                <Grid
                    item
                    sx={12}
                    sm={6}
                    md={3}
                >

                    <Typography className="pb-4" variant="h6" sx={{color: "black"}}> Legal </Typography>
                   
                    <div>
                        <Button className="pb-6" variant="h6" gutterBottom> Claim </Button>

                    </div>

                    <div>

                        <Button className="pb-6" variant="h6" gutterBottom> Privacy </Button>
                    </div>

                    <div>

                        <Button className="pb-6" variant="h6" gutterBottom> Terms </Button>
                    </div>
                </Grid>
                {/* 4 */}
                {/* <Grid
                    item
                    sx={12}
                    sm={6}
                    md={3}
                    gap={4}
                    
                >

                    <Typography className="pb-4 " variant="h6"> Social </Typography>
                   
                 <div className="flex gap-3 justify-center">
                  <FacebookIcon />
                   <InstagramIcon/>
                   <WhatsAppIcon/>
                       
                 </div>

                </Grid> */}


                <Grid className=" pt-20" item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2024 My Company. All rights resreved.
                    </Typography>

                    <Typography variant="body2" component="p" align="center">
                        &copy; Made by Atul Kumar.
                    </Typography>

                </Grid>
            </Grid>
        </div>
    )
}
export default Footer