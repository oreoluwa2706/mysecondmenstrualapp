import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Moment from "react-moment";

const Calendar_period = () => {
  const [cyclelength, setCyclelength] = useState(new Date());
  const [cycle, cycleValue] = useState("28");
  const cycles = ["28", "29", "30", "31", "32", "33", "34", "35"];
  const cycle_length = cycle;
  const date = cyclelength;
  return (
    <div className="centre">
      <label className="cycles" for="cycle">
        Choose your cycle length:
      </label>
      <select
        className="cycle1"
        name=""
        id="cycles"
        value={cycle}
        onChange={(e) => cycleValue(e.target.value)}
      >
        {cycles.map((cycle) => (
          <option key={cycle} value={cycle}>
            {cycle}
          </option>
        ))}
      </select>

      <div>
        <Calendar
          onChange={setCyclelength}
          value={cyclelength}
          className="calendar"
        ></Calendar>
      </div>

      <div className="mom">
        <div classname="class1">
          <h2>Next 12 Period start on:</h2>
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length * 2 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length * 3 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length * 4 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length * 5 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length * 6 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length * 7 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length * 8 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length * 9 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length * 10 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length * 11 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length * 12 }}
          >
            {date}
          </Moment>
        </div>
        <div classname="class1">
          <h2>Next Period start on:</h2>
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length }}
          >
            {date}
          </Moment>
        </div>
        <div classname="class2">
          <h2>Ovulation Date:</h2>

          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length / 2 - 1 }}
          >
            {date}
          </Moment>
        </div>
        <div classname="class2">
          <h2>Fertile period:</h2>
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length / 2 - 3 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length / 2 - 2 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length / 2 - 1 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length / 2 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length / 2 + 1 }}
          >
            {date}
          </Moment>
        </div>
        <div classname="class2">
          <h2>Safe Period:</h2>

          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length - cycle_length }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length - cycle_length + 1 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length - cycle_length + 2 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length - cycle_length + 3 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length - 3 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length - 2 }}
          >
            {date}
          </Moment>
          <br />
          <Moment
            className="myfomt"
            format="DD MM YYYY"
            add={{ days: cycle_length - 1 }}
          >
            {date}
          </Moment>
        </div>
      </div>
    </div>
  );
};

export default Calendar_period;
