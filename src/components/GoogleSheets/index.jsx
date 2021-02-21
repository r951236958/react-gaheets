import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Modal from '@material-ui/core/Modal'
import { useHistory } from 'react-router-dom'

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(1),
  },
}))

function GoogleSheets(props) {
  let history = useHistory()

  const classes = useStyles()

  const [modalStyle] = useState(getModalStyle)
  const [modalOpen, setModalOpen] = useState(false)

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
      history.push('/thankyou')
    })
  }

  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }
  const modalBody = (
    <div style={modalStyle} className={classes.modal}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  )

  return (
    <div className="flex items-center justify-center mx-auto">
      <div>
        <div className="mb-4">
          <Typography variant="body2" gutterBottom>
            點擊前往
            <Link
              href="https://docs.google.com/spreadsheets/d/1kDZReOEau2uXPwyFyS4xsKFE_a2aJiZvUNTtOT66uqo/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Google試算表
            </Link>
          </Typography>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <form
                className={classes.form}
                noValidate
                data-sheet-best="https://sheet.best/api/sheets/42627f2d-e682-427a-928a-154ff1e109df"
                onSubmit={handleSubmit}
              >
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
              <Button
                color="secondary"
                variant="outlined"
                type="button"
                className={classes.submit}
                onClick={handleModalOpen}
              >
                Open Modal
              </Button>
              <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {modalBody}
              </Modal>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default GoogleSheets
