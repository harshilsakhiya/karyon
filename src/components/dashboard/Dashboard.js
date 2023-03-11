import React, { useState } from "react";
import Progressbar from "../common/Pogressbar";

const transportersData = [
  {
    title: "abc",
    trip: 101,
    range: 54.73,
  },
  {
    title: "wer",
    trip: 101,
    range: 54.73,
  },
  {
    title: "que",
    trip: 1,
    range: 3.5,
  },
  {
    title: "dfg",
    trip: 1,
    range: 0.0,
  },
  {
    title: "asd",
    trip: 1,
    range: 0.0,
  },
  {
    title: "cvb",
    trip: 1,
    range: 0.0,
  },
  {
    title: "sdf",
    trip: 1,
    range: 0.0,
  },
  {
    title: "rfy",
    trip: 1,
    range: 0.0,
  },
];

export default function Dashboard() {
  const [event, setEvent] = useState("");

  const filterData = transportersData.filter((item) =>
    item.title.includes(event)
  );

  const search = (e) => {
    setEvent(e.target.value);
  };
  return (
    <div className="col-10 vh-100 overflow-auto">
      <div className="border rounded bg-white   p-2 m-3">
        <div>
          <h4>Data Range</h4>
        </div>
        <div>
          <p>Transporter</p>
        </div>
        <div className="col-3">
          <input
            className=" form-control "
            type="search"
            placeholder="select"
            onChange={(e) => search(e)}
          />
        </div>
      </div>

      <div className="border rounded bg-white  p-2 m-3">
        <div>
          <h4>Transporters information</h4>
        </div>
        <div className="d-flex  flex-wrap">
          {filterData.length > 0 ? (
            filterData?.map((item, i) => {
              return (
                <div className="col-5 border rounded p-3 m-3" key={i}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>{item.title}</p>
                      <h2 className="text-primary">{item.trip} Trip</h2>
                    </div>
                    <div>
                      <h3>{item.range}%</h3>
                      <Progressbar
                        bgcolor="#99ccff"
                        progress={item.range}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <p>No results found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
