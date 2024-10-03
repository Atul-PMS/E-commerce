import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={5}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className=" text-white"
              sx={{ width: 56, height: 56, bgcolor: "blue" }}
            >
              A
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className=" space-y-2 ">
            <div>
              <p>Atul</p>
              <p className=" opacity-70 text-lg">April 5, 2024</p>
            </div>
          </div>

          <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly/>
          <p>
            Nice Product, i Love this T-shirts
          </p>
        </Grid>

      </Grid>
    </div>
  );
};
export default ProductReviewCard;
