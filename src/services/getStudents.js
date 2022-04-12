import axios from "axios";

/**@module Service_getStudent */
/**
 *  @function getStudents
 * @description This function makes a get request to server and returns the response to requesting function
 * @param {Response} response this is the response for the said get request
 */
const getStudents = async () => {
  const response = await axios.get(
    "https://api.hatchways.io/assessment/students"
  );
  return response.data;
};

export default getStudents;
