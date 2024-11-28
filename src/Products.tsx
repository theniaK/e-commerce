import React, { useEffect, useState } from "react";
import products from "./products.json";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
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
    backgroundColor: "#F8F8F8",
  },
  dialogue: {
    backgroundColor: "#F8F8F8",
  },
}));

export default function Products(): React.ReactElement {
  const classes = useStyles();
  const items = products;
  const [data, setData] = useState<any[]>([]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function onCardClick(item: any) {
    setSelectedItem(item);
    setOpenDialog(true);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
    setSelectedItem(null);
  }

  useEffect(() => {
    setData(items);
  }, [products]);

  function truncateText(text: any, wordLimit: any) {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  }

  return (
    <div>
      {data ? (
        data.length > 0 ? (
          data.map((item) => (
            <Card key={item.id} className={classes.card}>
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
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontFamily: "Candara, sans-serif",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => onCardClick(item)}
                    component="div"
                  >
                    {item.Title}
                  </Typography>
                </div>
                <div>
                  <Typography
                    style={{
                      fontSize: "12px",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={() => onCardClick(item)}
                  >
                    {truncateText(item.Description, 18)}
                  </Typography>
                </div>
                <Box>
                  <Typography
                    style={{
                      fontFamily: "Candara, sans-serif",
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
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent className={classes.dialogue}>
          {selectedItem && (
            <div>
              <img
                src={selectedItem.Image}
                style={{
                  width: "200px",
                  height: "250px",
                  borderRadius: "4px",
                  marginTop: "10px",
                  marginLeft: "170px",
                }}
              />
              <Typography
                style={{
                  fontSize: "25px",
                  fontFamily: "Candara, sans-serif",
                  fontWeight: "bold",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                {selectedItem.Title}
              </Typography>
              <Typography
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial, sans-serif",
                  marginBottom: "50px",
                  alignItems: "center",
                }}
              >
                {selectedItem.Description}
              </Typography>
              <Typography
                style={{
                  fontSize: "25px",
                  fontFamily: "Candara, sans-serif",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Price: {selectedItem.Price}$
              </Typography>
            </div>
          )}
        </DialogContent>
        <DialogActions className={classes.dialogue}>
          <Button
            onClick={handleCloseDialog}
            style={{
              fontFamily: "Candara, sans-serif",
              color: "black",
              backgroundColor: "#FFC0CB",
              width: "100px",
              height: "30px",
              borderRadius: "4px",
              paddingTop: "5px",
              marginBottom: "10px",
              marginRight: "10px",
            }}
          >
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
