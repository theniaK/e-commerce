import React, { useEffect, useState } from "react";
import products from "./products.json";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const useStyles = makeStyles(() => ({
  card: {
    position: "relative",
    display: "inline-block",
    marginTop: "100px",
    marginBottom: "0",
    marginLeft: "20px",
    paddingTop: 0,
    width: "300px",
    height: "300px",

    backgroundColor: "#F7F6F4",
  },
}));

export default function Products(): React.ReactElement {
  const classes = useStyles();
  const items = products;
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(items);
  }, [products]);

  return (
    <div>
      {data ? (
        data.length > 0 ? (
          data.map((item) => (
            <Card key={item.id} className={classes.card}>
              <CardActionArea>
                <CardMedia
                  style={{
                    borderRadius: "1px",
                    paddingTop: "10px",
                    marginLeft: "107px",
                    width: "80px",
                    height: "100px",
                  }}
                  component="img"
                  height="140"
                  image={item.Image}
                />
                <CardContent
                  style={{ paddingBottom: "200px", paddingTop: "10px" }}
                >
                  <div>
                    <Typography
                      style={{
                        fontSize: "12px",
                        width: "35%",
                        marginLeft: "85px",
                        marginBottom: "10px",
                        backgroundColor: "#FFC0CB",
                      }}
                      component="div"
                    >
                      {item.Category}
                    </Typography>
                  </div>
                  <div>
                    <Typography style={{ fontSize: "20px" }} component="div">
                      {item.Title}
                    </Typography>
                  </div>
                  <div>
                    <Typography style={{ fontSize: "12px" }}>
                      {item.Description}
                    </Typography>
                  </div>
                  <Box>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        position: "absolute",
                        marginLeft: "65px",
                        marginTop: "22px",
                      }}
                    >
                      {item.Price}$
                    </Typography>
                    <Button
                      style={{
                        backgroundColor: "#d3c9ca",
                        position: "absolute",
                        marginLeft: "0",
                        marginTop: "20px",
                      }}
                    >
                      <ShoppingCartOutlinedIcon />
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        ) : (
          <div>
            <h1 style={{ color: "#FFC0CB" }}>Something went wrong.... Kupo!</h1>
            <p style={{ color: "#FFC0CB", fontSize: "25px" }}>
              Our moogles are working to fix this
            </p>
          </div>
        )
      ) : (
        <div>
          <h1 style={{ color: "#FFC0CB" }}>Something went wrong.... Kupo!</h1>
          <p style={{ color: "#FFC0CB", fontSize: "25px" }}>
            Our moogles are working to fix this
          </p>
        </div>
      )}
    </div>
  );
}
