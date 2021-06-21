import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Input from "components/common/Input";
import useStyles from "./CreateWorkspace.styles";
import axios from "axios";
import { useHistory } from "react-router-dom"

export default function UpdateWorkspace({match}) {
  const [state, setState] = React.useState({
    workspaceTitle: ""
  });
 
  const { id } = match.params;

  const classes = useStyles();
  const history = useHistory();

  const handleChange = (_event) => {
    setState({ ...state, [_event.target.name]: _event.target.value })
  };

  const handleCancel = () => {
    history.goBack();
  };
 
  const updateWorkspace = async () => {
    const data = {
      title: state.workspaceTitle,
    };

    try {
      const workspace = await axios.put(`http://localhost:4000/workspace/${id}`, data);
      if(workspace) {
        console.log(workspace);
        history.push("/")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={4} className={classes.container} >
          <div className={classes.body}>
            <div className={classes.header}>
              <Typography className={classes.title} variant="body1">
                Update Workspace
              </Typography>
            </div>
            <Typography className={classes.subTitle} variant="body2">
              Workspace
            </Typography>
            <Typography className={classes.description} variant="caption">
              A workspace contains all the project related to a specific catgory
              Eg: Work, or personal projects.
            </Typography>
            <Input
              required
              name="workspaceTitle"
              onChange={(_event) => handleChange(_event)}
              inputType="text"
              classes={classes}
              labelName="New workspace name"
              helperText="Give your workspace a descriptive name."
            />
          <div className={classes.actions}>
            <Button 
              disableRipple
              className={state.workspaceTitle.length < 3 ? classes.disabled : classes.createButton} 
              onClick={state.workspaceTitle.length < 3 ? null : updateWorkspace} 
              variant="contained"
            >
              update workspace
            </Button>
            <Button onClick={handleCancel} className={classes.cancelButton}>Cancel</Button>
          </div>
          </div>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </div>
  );
}