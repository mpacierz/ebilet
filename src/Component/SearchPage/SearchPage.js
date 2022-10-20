import "./searchpage.css"
import { Component, useEffect, useState } from "react"
import Event from "../EventsView/Event"
import FilterBar from "./FilterBar"

import infoIcon from "../../assets/img/icons/info.png"
import locationIcon from "../../assets/img/icons/location2.png"
import calendarIcon from "../../assets/img/icons/calendar.png"
import FilterBars from "./FilterBar"
import { render } from "react-dom"

function SearchPage() {

    const [allData, setData] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8082/events/`)
            .then(response => response.json())
            .then(response => setData(response))
    }, []);

    const generateGenderDataForDropdown = () => {
        return [...new Set(allData.map((item) => item.gender))];
      };

    const handleFilterName = (name) => {
        const filteredData = allData.filter((item) => {
          const fullName = `${item.first_name} ${item.last_name}`;
          if (fullName.toLowerCase().includes(name.toLowerCase())) {
            return item;
          }
        });
    
        setData(filteredData);
      };
    
      const handleFilterEmail = (email) => {
        const filteredData = allData.filter((item) => {
          if (item.email.toLowerCase().includes(email.toLowerCase())) {
            return item;
          }
        });
    
        setData(filteredData);
      };
    
      const handleFilterGender = (gender) => {
        const filteredData = allData.filter((item) => {
          if (item.gender === gender) {
            return item;
          }
        });
    
        setData(filteredData);
      };
    
    

    return (
        <>
             <FilterBar
            genders={generateGenderDataForDropdown()}
            onNameFilter={handleFilterName}
            onEmailFilter={handleFilterEmail}
            onGenderFilter={handleFilterGender}
         
          />

            <section>

          
              <Event event={allData} key={allData.id} />
           

                

            </section>

        </>
    )

}

export default SearchPage;