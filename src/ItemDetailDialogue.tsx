import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

type props = {
  selectedItem: any;
  openDialogue: boolean;
  handleCloseDialog: () => void;
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
}: props): React.ReactElement {
  var classes = useStyles();

  return (
    <Dialog open={openDialogue} onClose={handleCloseDialog}>
      <DialogContent className={classes.dialogue}>
        {selectedItem && (
          <div>
            <img src={selectedItem.Image} className={classes.styleImage} />
            <Typography className={classes.styleTitle}>
              {selectedItem.Title}
            </Typography>
            <Typography className={classes.styleDescription}>
              {selectedItem.Description}
            </Typography>
            <Typography className={classes.stylePrice}>
              Price: {selectedItem.Price}$
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
