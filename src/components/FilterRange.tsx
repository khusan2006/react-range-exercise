import { Slider } from "@/components/ui/slider";
import queryString from "query-string";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const FilterRange = () => {
    const location = useLocation();
  const { start, end } = queryString.parse(location.search);
  const [filterRange, setFilterRange] = useState([ Number(start) || 0, Number(end) || 1000]);
  const beginningOfTheRange = filterRange[0];
  const endOfTheRange = filterRange[1];
  const navigate = useNavigate();
  return (
    <div className="w-[15rem]">
      <h5 className="text-3xl font-bold">Filters</h5>
      <Slider
        defaultValue={filterRange}
        max={1000}
        step={1}
        className="mt-6"
        onValueChange={(values) => {
          setFilterRange(values);
          navigate(`/?start=${values[0]}&end=${values[1]}`);
        }}
      />
      <div className="flex justify-between items-center text-sm mt-1">
        <p>{beginningOfTheRange}</p>
        <p>{endOfTheRange}</p>
      </div>
    </div>
  );
};

export default FilterRange;
