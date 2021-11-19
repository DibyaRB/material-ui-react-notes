import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import {createTheme, ThemeProvider ,useTheme} from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
const theme= createTheme({
  palette:{
    primary:{
      main: green[500]
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>

    
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
