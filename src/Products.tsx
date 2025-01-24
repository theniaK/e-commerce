import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ItemDetailDialogue from "./ItemDetailDialogue";
import ItemsNullOrEmptyMessage from "./ItemsNullOrEmptyMessage";
import { Item } from "./Models/Item";

const useStyles = makeStyles(() => ({
  card: {
    position: "relative",
    display: "inline-block",
    marginTop: "100px",
    marginLeft: "20px",
    paddingTop: 0,
    width: "300px",
    height: "490px",
    backgroundColor: "#F8F8F8",
    boxShadow: "0 4px 8px rgba(169, 169, 169, 0.5)",
  },
  cardMedia: {
    borderRadius: "1px",
    paddingTop: "15px",
    marginLeft: "70px",
    width: "160px",
    height: "240px",
    cursor: "pointer",
  },
  dialogue: {
    backgroundColor: "#F8F8F8",
  },
  styleCategory: {
    fontSize: "12px",
    width: "35%",
    marginLeft: "85px",
    marginBottom: "10px",
    backgroundColor: "#FFC0CB",
  },
  styleTitle: {
    fontSize: "20px",
    fontFamily: "Candara, sans-serif",
    fontWeight: "bold",
    cursor: "pointer",
    height: "65px",
  },
  styleDescription: {
    fontSize: "12px",
    overflow: "hidden",
    cursor: "pointer",
  },
  stylePrice: {
    fontFamily: "Candara, sans-serif",
    fontWeight: "bold",
    fontSize: "20px",
    position: "absolute",
    marginLeft: "65px",
    marginTop: "22px",
  },
  styleButton: {
    backgroundColor: "#d3c9ca",
    position: "absolute",
    marginLeft: "0",
    marginTop: "20px",
  },
}));

type props = {
  searchQuery: string;
  isSearchTriggered: boolean;
};

export default function Products({
  searchQuery,
  isSearchTriggered,
}: props): React.ReactElement {
  const classes = useStyles();
  const [data, setData] = useState<Item[]>([]);
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
    if (isSearchTriggered) {
      isSearchTriggered = false;
    }
  }, [isSearchTriggered]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7231/api/Items/get");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        setData(result);
      } catch (error) {}
    };

    fetchData(); // Call the fetch function
  }, []);

  function truncateText(text: any, wordLimit: any) {
    if (text !== undefined) {
      const words = text.split(" ");
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
      }
      return text;
    }
  }

  const formatPrice = (price: number) => {
    if (!price.toString().includes(".")) {
      return `${price}.00`;
    }
    return price.toFixed(2); // Otherwise, just ensure it's formatted to two decimals
  };

  return (
    <div>
      {searchQuery && isSearchTriggered && data ? (
        // If searchQuery is provided and data exists, filter the data
        data?.length > 0 ? (
          data.filter(
            (item) =>
              item.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
          ).length > 0 ? (
            // If there are matches, render the filtered items
            data
              .filter(
                (item) =>
                  item.title
                    .toLowerCase()
                    .startsWith(searchQuery.toLowerCase()) ||
                  item.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item) => (
                <Card key={item.id} className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    height="140"
                    image={item.image}
                    onClick={() => onCardClick(item)}
                  />
                  <CardContent
                    style={{ paddingBottom: "200px", paddingTop: "10px" }}
                  >
                    <div>
                      <Typography
                        className={classes.styleCategory}
                        component="div"
                      >
                        {item.category}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        className={classes.styleTitle}
                        onClick={() => onCardClick(item)}
                        component="div"
                      >
                        {item.title}
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        className={classes.styleDescription}
                        onClick={() => onCardClick(item)}
                      >
                        {truncateText(item.description, 18)}
                      </Typography>
                    </div>
                    <Box>
                      <Typography className={classes.stylePrice}>
                        {formatPrice(item.price)}$
                      </Typography>
                      <Button className={classes.styleButton}>
                        <ShoppingCartOutlinedIcon />
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              ))
          ) : (
            // If no matches are found, show "No matches found"
            <Typography className={classes.styleTitle}>
              No matches found
            </Typography>
          )
        ) : (
          // If no data is found, show a message
          <ItemsNullOrEmptyMessage />
        )
      ) : // If no search query is provided, show all data
      data?.length > 0 ? (
        data.map((item) => (
          <Card key={item.id} className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              component="img"
              height="140"
              image={item.image}
              onClick={() => onCardClick(item)}
            />
            <CardContent style={{ paddingBottom: "200px", paddingTop: "10px" }}>
              <div>
                <Typography className={classes.styleCategory} component="div">
                  {item.category}
                </Typography>
              </div>
              <div>
                <Typography
                  className={classes.styleTitle}
                  onClick={() => onCardClick(item)}
                  component="div"
                >
                  {item.title}
                </Typography>
              </div>
              <div>
                <Typography
                  className={classes.styleDescription}
                  onClick={() => onCardClick(item)}
                >
                  {truncateText(item.description, 18)}
                </Typography>
              </div>
              <Box>
                <Typography className={classes.stylePrice}>
                  {formatPrice(item.price)}$
                </Typography>
                <Button className={classes.styleButton}>
                  <ShoppingCartOutlinedIcon />
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))
      ) : (
        // Show message when data is empty
        <ItemsNullOrEmptyMessage />
      )}

      <ItemDetailDialogue
        selectedItem={selectedItem}
        openDialogue={openDialog}
        handleCloseDialog={handleCloseDialog}
        formatPrice={formatPrice}
      />
    </div>
  );
}
