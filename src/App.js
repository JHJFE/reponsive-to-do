import './App.css';
import { ThemeProvider } from "styled-components";
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/nav/header';
import Sidebar from './components/sidebar';
import useFetch from './util/useFetch';
import { useDispatch} from 'react-redux';
import Loading from './pages/loading';

function App() {
  const dispatch = useDispatch();
  const [data, error, isPending] = useFetch('http://localhost:3001/data')
  //dispatch(init(data))

  // let da = useSelector(state=>state.data)
  console.log(data)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {isPending ? <Loading /> :
          <>
            <Header />
            <div className='flex-row'>
              <Sidebar />
            </div>
          </>
        }
      </div>
    </ThemeProvider>
  );
}

export default App;
