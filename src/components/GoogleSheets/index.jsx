import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function GoogleSheets(props) {
  const classes = useStyles()

  const [formValue, setFormVale] = useState({
    name: '',
    age: '',
    salary: '',
    hobby: '',
  })

  const handleChange = (event) => {
    setFormVale({
      ...formValue,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('data on submit', formValue)

    const connectionURL =
      'https://sheet.best/api/sheets/42627f2d-e682-427a-928a-154ff1e109df'

    axios.post(connectionURL, formValue).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Name"
                placeholder="Enter your name"
                type="text"
                name="name"
                id="name"
                value={formValue.name}
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Age"
                placeholder="Enter your age"
                type="number"
                name="age"
                id="age"
                value={formValue.age}
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Salary"
                placeholder="Enter your salary"
                type="number"
                name="salary"
                id="salary"
                value={formValue.salary}
                onChange={handleChange}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Hobby"
                placeholder="Enter your hobby"
                type="text"
                name="hobby"
                id="hobby"
                value={formValue.hobby}
                onChange={handleChange}
              />
              <Button
                color="primary"
                variant="contained"
                type="submit"
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default GoogleSheets
