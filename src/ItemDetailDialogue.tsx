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
}));

export default function ItemDetaliDialogue({
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
  );
}
