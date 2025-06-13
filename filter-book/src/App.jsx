import { Component } from "react";
import "./App.css";

class TableHead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <th onClick={this.props.sort}>{this.props.data}</th>;
  }
}

class TableData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <td>{this.props.data}</td>;
  }
}

class TableRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Field = this.props.field;
    return (
      <tr>
        {this.props.data.map((d, i) => (
          <Field data={d} key={i} sort={this.props.sort} />
        ))}
      </tr>
    );
  }
}

class TableHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <thead>
        <TableRow
          field={TableHead}
          data={this.props.header}
          sort={this.props.sort}
        />
      </thead>
    );
  }
}

class TableBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tbody>
        {this.props.body.map(({ title, author, year }, i) => (
          <TableRow field={TableData} data={[title, author, year]} key={i} />
        ))}
      </tbody>
    );
  }
}

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <TableHeader header={this.props.header} sort={this.props.sort} />
        <TableBody body={this.props.body} />
      </table>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState((prev) => {
      return { value: event.target.value };
    }, this.props.changeSearchKey(event));
  }

  render() {
    return (
      <div className="input-field">
        <input
          type="text"
          placeholder={
            this.props.placeholder || "Find by title, author or year"
          }
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <option value={this.props.option.toLowerCase()}>
        {this.props.option}
      </option>
    );
  }
}

class Select extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="select-field">
        <select onChange={this.props.setOption}>
          {this.props.options.map((o, i) => (
            <Option option={o} key={i} />
          ))}
        </select>
      </div>
    );
  }
}

class BookCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: ["Title", "Author", "Year"],
      books: [
        { title: "Great Expectations", author: "Charles Dickens", year: 1860 },
        { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          year: 1925,
        },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
        { title: "1984", author: "George Orwell", year: 1949 },
        {
          title: "The Catcher in the Rye",
          author: "J.D. Salinger",
          year: 1951,
        },
        {
          title: "One Hundred Years of Solitude",
          author: "Gabriel García Márquez",
          year: 1967,
        },
        { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
        {
          title: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
          year: 1954,
        },
        {
          title: "Crime and Punishment",
          author: "Fyodor Dostoevsky",
          year: 1866,
        },
        { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
        { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
        { title: "Jane Eyre", author: "Charlotte Brontë", year: 1847 },
        { title: "Wuthering Heights", author: "Emily Brontë", year: 1847 },
        { title: "Don Quixote", author: "Miguel de Cervantes", year: 1605 },
        { title: "The Odyssey", author: "Homer", year: -800 },
        { title: "Anna Karenina", author: "Leo Tolstoy", year: 1877 },
        {
          title: "The Brothers Karamazov",
          author: "Fyodor Dostoevsky",
          year: 1880,
        },
        {
          title: "The Picture of Dorian Gray",
          author: "Oscar Wilde",
          year: 1890,
        },
        { title: "Ulysses", author: "James Joyce", year: 1922 },
        { title: "The Divine Comedy", author: "Dante Alighieri", year: 1320 },
        { title: "Frankenstein", author: "Mary Shelley", year: 1818 },
        { title: "Les Misérables", author: "Victor Hugo", year: 1862 },
        { title: "Dracula", author: "Bram Stoker", year: 1897 },
        { title: "The Stranger", author: "Albert Camus", year: 1942 },
        { title: "The Trial", author: "Franz Kafka", year: 1925 },
        {
          title: "A Tale of Two Cities",
          author: "Charles Dickens",
          year: 1859,
        },
        { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
        { title: "The Metamorphosis", author: "Franz Kafka", year: 1915 },
        { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", year: 1969 },
        { title: "The Bell Jar", author: "Sylvia Plath", year: 1963 },
        { title: "Catch-22", author: "Joseph Heller", year: 1961 },
        { title: "Beloved", author: "Toni Morrison", year: 1987 },
      ],
      filterOn: "title",
      filtered: [],
      key: "",
    };

    this.setFilterOption = this.setFilterOption.bind(this);
    this.changeKey = this.changeKey.bind(this);
    this.sort = this.sort.bind(this);
  }

  filterBooks() {
    this.setState((prev) => {
      const books = prev.books.filter((b) => {
        return b[prev.filterOn].toString().toLowerCase().includes(prev.key);
      });

      return { filtered: [...books] };
    });
  }

  setFilterOption(event) {
    this.setState(() => {
      return { filterOn: event.target.value };
    });
  }

  changeKey(event) {
    this.setState(() => {
      return { key: event.target.value };
    }, this.filterBooks);
  }

  componentDidMount() {
    this.filterBooks();
  }

  sort(event) {
    const fieldToSort = event.target.innerText.toLowerCase();

    this.setState((prev) => {
      return {
        filtered: [
          ...prev.filtered.sort((a, b) =>
            a[fieldToSort].toString().localeCompare(b[fieldToSort].toString())
          ),
        ],
      };
    });
  }

  render() {
    return (
      <div>
        <div className="search-books">
          <h1>Search Books</h1>
          <Input changeSearchKey={this.changeKey} />
          <Select
            options={this.state.header}
            setOption={this.setFilterOption}
          />
        </div>
        <div className="book-collection">
          <h2>Book Collection</h2>
          <Table
            header={this.state.header}
            body={this.state.filtered}
            sort={this.sort}
          />
        </div>
      </div>
    );
  }
}

export default BookCollection;
