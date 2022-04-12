import { useState } from "react";

/**@module Hook_useData */
/**
 *  @function useData
 * @description Hook to keep a track of response that comes from API call
 * @param {Array} data An array to store array of student objects
 * @param {Function} setData This function updates the value of "data" array
 */
const useData = () => {
  const [data, setData] = useState([]);
  return { data, setData };
};
export default useData;
