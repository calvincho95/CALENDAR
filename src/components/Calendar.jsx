import DateCard from "./DateCard";

const calendarData = [
  { date: 1, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 2, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 3, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 4, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 휴식"] },
  { date: 5, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 독서하기"] },
  { date: 6, isHoliday: true, todos: ["청소하기", "💵 돈벌기"] },
  { date: 7, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 요리하기"] },
  { date: 8, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 산책하기"] },
  { date: 9, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 10, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 산책하기"] },
  { date: 11, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 코딩하기"] },
  { date: 12, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 산책하기"] },
  { date: 13, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 산책하기"] },
  { date: 14, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 15, isHoliday: true, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 16, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 17, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 18, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 19, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 20, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 21, isHoliday: false, todos: ["🏃‍♀️ 레스토랑 가기", "💵 돈벌기"] },
  { date: 22, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 23, isHoliday: false, todos: ["🏃‍♀️ 운동하기", "💵 돈벌기"] },
  { date: 24, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 25, isHoliday: false, todos: ["🏃‍♀️ 공부하기", "💵 돈벌기"] },
  { date: 26, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 27, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 28, isHoliday: false, todos: ["🏃‍♀️ 쇼핑하기", "💵 돈벌기"] },
  { date: 29, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 30, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 31, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
];

const Calendar = () => {
  return (
    <ul className="bg-blue-50 grid grid-cols-7 gap-4">
      <li className=" w-[120px] h-[200px] text-xl rounded-md"></li>
      <li className=" w-[120px] h-[200px] text-xl rounded-md"></li>
      <li className=" w-[120px] h-[200px] text-xl rounded-md"></li>
      {calendarData.map((v, i) => (
        <DateCard
          key={i}
          date={v.date}
          isHoliday={v.isHoliday}
          todos={v.todos}
        />
      ))}
    </ul>
  );
};

export default Calendar;
