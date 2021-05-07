import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { setEditModal } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    cursor: "pointer",
  },
}));

export default function TaskListCard({ taskListCr }) {
  //   console.log(taskListCr);
  //   FOR PERCENTAGE
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 100,
  };

  const fillerStyles = {
    height: "100%",
    width: `${
      taskListCr?.progress_percentage ? taskListCr?.progress_percentage : 0
    }%`,
    backgroundColor: "green",
    borderRadius: "inherit",
  };

  const labelStyles = {
    padding: 5,
    color: "black",
    fontWeight: "bold",
  };

  // FOR HOVER BTN

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // FOR HOVER BTN
  const dispatch = useDispatch();

  const openEditModal = () => {
    handleClose();
    dispatch(setEditModal(true));
  };

  return (
    <>
      <div className="col task-list mb-3">
        <p>{taskListCr?.name}</p>
        <div className="three-dots-btn">
          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={handleClick}
            onMouseEnter={handleClick}
          >
            . . .
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            onMouseLeave={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              <i className="fas fa-arrow-right"></i> Move Right
            </Typography>
            <Typography className={classes.typography}>
              <i className="fas fa-arrow-left"></i> Move Left
            </Typography>
            <Typography onClick={openEditModal} className={classes.typography}>
              <i className="far fa-edit"></i> Edit
            </Typography>
            <Typography
              onMouseLeave={handleClose}
              className={classes.typography}
            >
              <i className="far fa-trash-alt"></i> Delete
            </Typography>
          </Popover>
        </div>
        <div className="progress-meter">
          <div style={containerStyles}>
            <div style={fillerStyles}></div>
            <span className="percentage" style={labelStyles}>
              {`${
                taskListCr?.progress_percentage
                  ? taskListCr?.progress_percentage
                  : 0
              }%`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
