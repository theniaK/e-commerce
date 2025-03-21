import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Item } from "../Models/Item";

type props = {
  selectedItem: Item | null;
  openDialogue: boolean;
  handleCloseDialog: () => void;
  formatPrice: (price: number) => string;
};

const useStyles = makeStyles(() => ({
  dialogue: {
    backgroundColor: "#F8F8F8",
  },
  button: {
    fontFamily: "Candara, sans-serif",
    color: "black",
    backgroundColor: "#FFC0CB",
    width: "100px",
    height: "30px",
    borderRadius: "4px",
    paddingTop: "5px",
    marginBottom: "10px",
    marginRight: "10px",
  },
  styleImage: {
    width: "200px",
    height: "250px",
    borderRadius: "4px",
    marginTop: "10px",
    marginLeft: "170px",
  },
  styleTitle: {
    fontSize: "25px",
    fontFamily: "Candara, sans-serif",
    fontWeight: "bold",
    marginTop: "30px",
    marginBottom: "30px",
  },
  styleDescription: {
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
    marginBottom: "50px",
  },
  stylePrice: {
    fontSize: "25px",
    fontFamily: "Candara, sans-serif",
    fontWeight: "bold",
    marginBottom: "10px",
  },
}));

export default function ItemDetailDialogue({
  selectedItem,
  openDialogue,
  handleCloseDialog,
  formatPrice,
}: props): React.ReactElement {
  var classes = useStyles();

  return (
    <Dialog open={openDialogue} onClose={handleCloseDialog}>
      <DialogContent className={classes.dialogue}>
        {selectedItem && (
          <div>
            <img src={selectedItem.image} className={classes.styleImage} />
            <Typography className={classes.styleTitle}>
              {selectedItem.title}
            </Typography>
            <Typography className={classes.styleDescription}>
              {selectedItem.description}
            </Typography>
            <Typography className={classes.stylePrice}>
              Price: {formatPrice(selectedItem.price)}$
            </Typography>
          </div>
        )}
      </DialogContent>
      <DialogActions className={classes.dialogue}>
        <Button onClick={handleCloseDialog} className={classes.button}>
          Back
        </Button>
      </DialogActions>
    </Dialog>
  );
}
