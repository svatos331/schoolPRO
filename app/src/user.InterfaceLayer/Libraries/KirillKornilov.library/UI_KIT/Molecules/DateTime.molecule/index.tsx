import { useEffect, useState } from "react";

import DateTimeContent from "../../Atoms/DataTimeContent.Atom";
import { Icons } from "../../Atoms/Atom1/icons";

import "./styled/style.css";


const DateTime = () => {
    
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];



    const [datetime, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    const hours = datetime.getHours().toString().length > 1 ? datetime.getHours() : "0" + datetime.getHours();
    const minutes = datetime.getMinutes().toString().length > 1 ? datetime.getMinutes() : "0" + datetime.getMinutes();
    const seconds = datetime.getSeconds().toString().length > 1 ? datetime.getSeconds() : "0" + datetime.getSeconds();

    const time = `${hours}:${minutes}:${seconds}`;
    const date = `${datetime.getDate()} ${monthNames[datetime.getMonth()]} ${datetime.getFullYear()}`;

    return (
        <div className='date-time' >
            <DateTimeContent title='На часах у нас' icon={Icons.Clock} datetime={time} />
            <DateTimeContent title='А сегодня у нас' icon={Icons.Calendar} datetime={date} />
        </div>
    );

};

export default DateTime;