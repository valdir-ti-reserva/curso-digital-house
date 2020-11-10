import { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText } from '@material-ui/core';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { connection } from '../../services/FakeStoreApi';

export default function UserList() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      const response = await connection.get('/users');
      setUsers(response.data);
      setLoading(true);
    };
    fetchData();
  }, []);
  
  return ( 
    <>
      {/* <CircularProgress /> */}
            
      <Grid 
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {
          users.map(user => {
            return (
              <Grid item xs={6} key={user.id}>
                <Card>
                  <CardMedia 
                    component="img"
                    src={user.image}
                  />
                  <CardContent>
                    <Typography variant='h5'>Nome do usuário</Typography>
                    <List>
                      <ListItem>
                        <ListItemText>{user.name.firstname}</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemText>{user.email}</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemText>{user.address.city}</ListItemText>
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        }      
      </Grid>
    </>
  )
}
