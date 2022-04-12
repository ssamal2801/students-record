import { useState } from "react";
import "../assets/styles/styles.scss";
import defaultImage from "../assets/images/default.jpg";

/**@module Component_List */
/**
 * @function List
 * @description This method takes a student object and displays it (Iteration is controlled by the calling function)
 * @param {Object} data A constant that stores list of students
 * @param {String} hideNshow State variable to manage hide and show grades of students
 * @param {String} icon State variable to store an Html <i> tag that updates based on the selection
 * @param {Function} handleBrokenImage This function handles a case where the <img> tag does not get correct email
 * @param {Function} changeStyle This function changes the style of button and <div> that displays grades of a student
 * @param {Function} findAverage This function finds the average of grades of a student
 */
const List = (props) => {
  const data = props.list;
  const [hideNshow, setHideNshow] = useState("hide");
  const [icon, setIcon] = useState(<i className="fa fa-plus"></i>);

  const handleBrokenImage = (event) => {
    event.target.onError = null;
    event.target.src = defaultImage;
  };

  const changeStyle = () => {
    if (hideNshow === "hide") {
      setHideNshow("show");
      setIcon(<i className="fa fa-minus"></i>);
    } else {
      setHideNshow("hide");
      setIcon(<i className="fa fa-plus"></i>);
    }
  };
  const findAverage = (grades) => {
    let sum = 0;
    if (grades) {
      grades.forEach((grade) => {
        sum = sum + parseInt(grade, 10);
      });
      return (sum / (grades.length * 100)) * 100;
    } else return 0;
  };
  return (
    <div className="listWrapper">
      <div className="leftPan">
        <div className="profilePic">
          <img src={data.pic} alt="profile pic" onError={handleBrokenImage} />
        </div>
      </div>
      <div className="rightPan">
        <div className="name">{`${data.firstName}  ${data.lastName}`}</div>
        <div className="email">Email: {data.email}</div>
        <div className="company">Company: {data.company}</div>
        <div className="skills">Skill: {data.skill}</div>
        <div className="average">Average: {findAverage(data.grades)}%</div>
        <div className={hideNshow}>
          <table>
            <tbody>
              {data.grades.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>Test {index + 1} : </td>
                    <td> {element}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="expandButton" onClick={changeStyle}>
        {icon}
      </div>
    </div>
  );
};

export default List;
