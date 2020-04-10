import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, { RenderInputParams } from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

export interface Option {
  _id: number;
  title: string;
  author: string;
  publisher: string;
  createdAt: string;
}

interface Props {
  options: Option[];
  loading: boolean;
  handleChange(query: string): void;
  onChange(event: React.ChangeEvent<{}>, value: any): void;
}

class AutoComplete extends Component<Props> {
  handleChange = (e: any) => {
    if (!e.target.value || e.target.value.trim().length === 0) {
      return false;
    }

    this.props.handleChange(e.target.value.trim());
  };

  renderInput = (params: RenderInputParams) => {
    return (
      <TextField
        {...params}
        id="outlined-basic"
        margin="none"
        placeholder="Type something to search..."
        variant="outlined"
        fullWidth
        onChange={this.handleChange}
        InputProps={{
          ...params.InputProps,
          endAdornment: (
            <React.Fragment>
              {this.props.loading ? (
                <CircularProgress color="inherit" size={20} />
              ) : null}
              {params.InputProps.endAdornment}
            </React.Fragment>
          )
        }}
      />
    );
  };

  render() {
    return (
      <Autocomplete
        id="asynchronous-demo"
        options={this.props.options}
        getOptionLabel={(option: Option) => option.title}
        onChange={this.props.onChange}
        renderOption={(option: Option) => (
          <React.Fragment>
            <strong>{option.title}</strong> ~>
            <small>Author: {option.author}</small>
          </React.Fragment>
        )}
        loading={this.props.loading}
        renderInput={this.renderInput}
      />
    );
  }
}

export default AutoComplete;
