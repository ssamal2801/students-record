import { useEffect, useState } from "react";
import List from "../components/List";
import "../assets/styles/styles.scss";
import dataHook from "../hooks/useData";
import getStudent from "../services/getStudents";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

/**@module View_home */
/**
 *  @function Home
 * @description This is the view that renders on default route ("/")
 * @param {Array} data A state variable to store array of student objects
 * @param {Array} filter A state variable to store array of filtered student objects based on user input
 * @param {Function} updateFilter This function updates the value of "filter" array, we use this array to display filtered list of students on the view
 */

const Home = () => {
  const { data, setData } = dataHook();
  //state variable to handle filter
  const [filter, setFilter] = useState([]);

  const updateFilter = (event) => {
    const find = event.target.value;
    let temp = [];

    if (find !== "") {
      data.forEach((element) => {
        const name = element.firstName + " " + element.lastName;
        if (name.toLowerCase().includes(find.toLowerCase())) {
          temp.push(element);
        }
      });
      setFilter([]);
      setFilter(temp);
      //console.log(...temp);
    } else {
      setFilter(data);
    }
  };

  useEffect(() => {
    getStudent()
      .then((records) => {
        setData(records.students);
        setFilter(records.students);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="homeViewWrapper">
      <Card className="card">
        <TextField
          className="search"
          label="Search by name"
          variant="standard"
          onChange={updateFilter}
        />
        <CardContent className="cardContent">
          {[...filter].map((element, index) => {
            return (
              <li key={index}>
                <List list={filter.length > 0 ? filter[index] : {}} />
              </li>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
