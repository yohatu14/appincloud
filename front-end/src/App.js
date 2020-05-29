import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Send from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Icon } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: true,
      message: "",
      user: "",
      list: [],
      humanlist: [],
      messa: 0,
    };
    this.messageEnd = "";

  }


  handleClickShowMessage = (event) => {
    var listamitemp = this.state.list
    listamitemp.push({ message: this.state.message, from: false })
    this.setState({ list: listamitemp, message: "", showMessage: false }, () => this.messageEnd.scrollIntoView({ behavior: "smooth" }))
    console.log("handleClickShowMessage",this.state.message )
    fetch('https://.mybluemix.net/listen', {
      method: 'post',
      body: JSON.stringify({
        message: this.state.message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          listamitemp.push({ message: data.text.text, from: true })
          this.setState({ list: listamitemp, showMessage: true },() => this.messageEnd.scrollIntoView({ behavior: "smooth" }));
        }
      });
      this.messageEnd.scrollIntoView({ behavior: "smooth" });
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { list, messa, attach } = this.state;
    return (
      <div>
      <br></br>
      <div style={{ height: 475, overflow: "auto" }}>

        <List>
          {list.slice(messa).map(m => {
            return (
              <div>
                {m.from &&
                  <ListItem >
                    <Grid container direction="row " justify="flex-start">
                      <div  >
                        <Card style={{ backgroundColor: "#76c1c7", maxWidth: 400, borderRadius: 15, padding: 10, color: "white" }}>
                          <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src="https://www.pratechgroup.com/wp-content/themes/pratech/img/products/parly/icono.png" />
                            </ListItemAvatar>
                            <ListItemText
                              primary={<Typography style={{ color: "white" }}>{m.message}</Typography>}
                            />
                          </ListItem>
                        </Card>

                      </div>
                    </Grid>
                  </ListItem>
                }
                {!m.from &&
                  <ListItem alignItems="flex-start" >
                    <Grid container direction="row" justify="flex-end">
                      <div>
                        <Card style={{ backgroundColor: "#bac0bc", maxWidth: 400, borderRadius: 15, padding: 10, color: "white" }}>
                          <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar alt="Remy Sharp" src="https://png.pngtree.com/svg/20160421/personal_68980.png" />
                            </ListItemAvatar>
                            <ListItemText
                              primary={<Typography style={{ color: "white" }}>{m.message}</Typography>}
                            />
                          </ListItem>
                        </Card>
                      </div>
                    </Grid>
                  </ListItem>
                }
              </div>
            );
          })}
          <div>
            <div className="MessageContainer">
              <div className="MessagesList">

              </div>
              <div style={{ float: "left", clear: "both" }}
                ref={(el) => { this.messageEnd = el; }}>
              </div>
            </div>
          </div>
        </List>

      </div>
      <div style={{ width: "100%" }}>

        <Card position="end">

          <CardContent >
              <TextField
                type='text'
                id="standard-full-width"
                variant="filled"
                fullWidth
                label="Message"
                value={this.state.message}
                onChange={this.handleChange('message')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment onKeyDown={this.handleKey} variant="filled" position="end">
                      <IconButton
                        onClick={this.handleClickShowMessage}
                      >
                        {this.state.showMessage ? <Send /> : null}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
          </CardContent>
        </Card>
      </div>
    </div>

    );
  }
}

export default App;
