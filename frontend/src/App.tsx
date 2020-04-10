import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import AutoComplete, { Option } from "./components/AutoComplete";
import lodash from "lodash";
import { getBooksByQuery } from "./services/books";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

interface State {
  loading: boolean;
  options: Option[];
  currentBook: Option;
  bookHistory: Option[];
}

class App extends React.Component {
  state: State = {
    loading: false,
    options: [],
    currentBook: {} as Option,
    bookHistory: []
  };

  constructor(props: Readonly<{}>) {
    super(props);
    this.fetchData = lodash.debounce(this.fetchData.bind(this), 500);
  }

  fetchData = (query: string = "") => {
    this.setState({ loading: true });

    getBooksByQuery(query).then(response => {
      this.setState({ options: response.data.data.books, loading: false });
    });
  };

  onChangeAutoComplete = (
    event: React.ChangeEvent<{}>,
    value: Option
  ): void => {
    if (!value) {
      this.setState({ currentBook: {} });
      return;
    }

    const bookHistory: Option[] = this.state.bookHistory.slice();
    bookHistory.push(value);

    this.setState({
      currentBook: value,
      bookHistory,
      options: []
    });
  };

  render() {
    return (
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h2" component="h1" align="center" gutterBottom>
            Schoology | Frontend Technical Task
          </Typography>

          <Typography variant="h5" component="h2" align="center" gutterBottom>
            <PersonIcon /> Author: Kilderson Sena
          </Typography>
        </Box>
        <Box my={10}>
          <AutoComplete
            loading={this.state.loading}
            options={this.state.options}
            handleChange={(query: string) => this.fetchData(query)}
            onChange={this.onChangeAutoComplete}
          />
        </Box>
        <Box>
          {Object.keys(this.state.currentBook).length > 0 && (
            <>
              <Typography variant="h5" component="h5">
                Current Selection Details:
              </Typography>
              <Typography variant="h6" component="h6">
                {this.state.currentBook.title}
              </Typography>
              <p>Author: {this.state.currentBook.author}</p>
              <p>Publisher: {this.state.currentBook.publisher}</p>
              <hr />
            </>
          )}
        </Box>
        <Box>
          {this.state.bookHistory.length > 0 && (
            <Typography variant="h5" component="h5">
              Your recent selections:
            </Typography>
          )}
          {this.state.bookHistory.map((book: Option) => (
            <Chip
              color="primary"
              icon={<DoneIcon />}
              key={book._id}
              label={book.title}
            />
          ))}
        </Box>
      </Container>
    );
  }
}

export default App;
