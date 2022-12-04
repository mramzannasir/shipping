import React, { useState } from "react";
import { generateDate, months } from "../Assets/Calendar";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import cn from "../Assets/cn";
import dayjs from "dayjs";

const Calender = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <>
      <section>
        <div className="calender  ">
          <div className=" ">
            <div className="flex items-center justify-between">
              <h1 className="my-3 select-none font-semibold">
                {months[today.month()]}, {today.year()}
              </h1>
              <div className="flex items-center gap-10 ">
                <GrFormPrevious
                  className="h-5 w-5 cursor-pointer transition-all hover:scale-105"
                  onClick={() => {
                    setToday(today.month(today.month() - 1));
                  }}
                />
                <GrFormNext
                  className="h-5 w-5 cursor-pointer transition-all hover:scale-105"
                  onClick={() => {
                    setToday(today.month(today.month() + 1));
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-7 ">
              {days.map((day, index) => {
                return (
                  <h1
                    key={index}
                    className="grid select-none place-content-center text-center text-sm text-gray-500">
                    {day}
                  </h1>
                );
              })}
            </div>
            <div className=" grid grid-cols-7 ">
              {generateDate(today.month(), today.year()).map(
                ({ date, currentMonth, today }, index) => {
                  return (
                    <div
                      key={index}
                      className="grid h-14 place-content-center p-2 text-center text-sm">
                      {/* Dates */}
                      <h4
                        className={cn(
                          currentMonth ? "" : "hidden",
                          today ? "bg-[#fe0000] text-white" : "",
                          selectDate.toDate().toDateString() ===
                            date.toDate().toDateString()
                            ? "rounded-full border border-[#1b1b1b]"
                            : "",
                          "hover:stone-400 grid h-10 w-10 cursor-pointer place-content-center  rounded-full font-normal  transition-all"
                        )}
                        onClick={() => {
                          setSelectDate(date);
                        }}>
                        {date.date()}
                      </h4>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calender;
