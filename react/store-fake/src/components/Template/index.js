import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

export default function Template(props) {
  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar>
            <Typography variant='h6'>
              Fake Store
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <Container>
        {props.children}
      </Container>
    </>
  )
}
