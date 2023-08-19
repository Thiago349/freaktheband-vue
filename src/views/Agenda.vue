<template>
  <div id="Agenda">
    <PageTitle struct="Confira nossa" distinguished="AGENDA!" description="Fique por dentro de todos os próximos eventos da banda!"></PageTitle>
    <div class="content-wrapper">
      <div class="calendar">
        <div class="calendarheader">
          <button id = "prevyear" @click="change_year">&lt;</button>
          <h3 id = "calendaryear">2023</h3>
          <button id = "nextyear" @click="change_year">&gt;</button>
        </div>
        <div class="calendarheader">
          <button id = "prevmonth" @click="change_month">&lt;</button>
          <h3 id = "calendarmonth">Agosto</h3>
          <button id = "nextmonth" @click="change_month">&gt;</button>
        </div>
        <ul>
          <li class = "weekdays">D</li>
          <li class = "weekdays">S</li>
          <li class = "weekdays">T</li>
          <li class = "weekdays">Q</li>
          <li class = "weekdays">Q</li>
          <li class = "weekdays">S</li>
          <li class = "weekdays">S</li>
          <button v-for="index in 42" :key="index" v-bind:id="index+'day'" @click="select_day">{{ index }}</button>
        </ul>
      </div>
      <div class="calendar">
        <div class="calendarheader">
          <h3 id = "chosendaytitle">Selecione um dia</h3>
        </div>
        <p id = "eventname"></p>
        <p id = "eventdescription"></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PageTitle from '../components/PageTitle.vue';

const styles = getComputedStyle(document.documentElement);
var data
var month_events = {}
var months = {2023: [["Janeiro", 31, 1], ["Fevereiro", 28, 4], ["Março", 31, 4], ["Abril", 30, 7], ["Maio", 31, 2], ["Junho", 30, 5], ["Julho", 31, 7], ["Agosto", 31, 3], ["Setembro", 30, 6], ["Outubro", 31, 1], ["Novembro", 30, 4], ["Dezembro", 31, 6]],
            2024: [["Janeiro", 31, 2], ["Fevereiro", 29, 5], ["Março", 31, 6], ["Abril", 30, 2], ["Maio", 31, 4], ["Junho", 30, 7], ["Julho", 31, 2], ["Agosto", 31, 5], ["Setembro", 30, 1], ["Outubro", 31, 3], ["Novembro", 30, 6], ["Dezembro", 31, 1]]};

export default {
    name: 'AgendaPage',
    data() {
      return {
        selected_day: ""
      }
    },
    methods: {
      select_day(event) {
        if (event.target.classList.value != 'notcurrent'){
          if (event.target.classList != ""){
            document.getElementById("eventname").innerHTML = month_events[event.target.innerHTML][0];
            document.getElementById("eventdescription").innerHTML = month_events[event.target.innerHTML][2];
          }
          else if (event.target.classList == ""){
            document.getElementById("eventname").innerHTML = 'Data disponível';
            document.getElementById("eventdescription").innerHTML = 'Contacte a banda se tiver interesse em nos contratar!';
          }
          if (this.selected_day == "") {
            this.selected_day = event.target.id;
            document.getElementById(event.target.id).style.border = `solid 2px ${ styles.getPropertyValue('--ice') }`;
            document.getElementById("chosendaytitle").innerHTML = `Dia ${ event.target.innerHTML }`;
          }
          else if (this.selected_day == event.target.id) {
            this.selected_day = "";
            document.getElementById(event.target.id).style.border = 'solid 2px transparent';
            document.getElementById("chosendaytitle").innerHTML = 'Selecione um dia';
            document.getElementById("eventname").innerHTML = '';
            document.getElementById("eventdescription").innerHTML = '';
          }
          else {
            document.getElementById(this.selected_day).style.border = 'solid 2px transparent';
            this.selected_day = event.target.id;
            document.getElementById(event.target.id).style.border = `solid 2px ${ styles.getPropertyValue('--ice') }`;
            document.getElementById("chosendaytitle").innerHTML = `Dia ${ event.target.innerHTML }`;
          }
        }
      },
      change_year(event) {
        if (this.selected_day!=""){
          document.getElementById(this.selected_day).style.border = 'solid 2px transparent';
          this.selected_day = "";
        }
        var year = document.getElementById("calendaryear").innerHTML;
        if (event.target.id=="prevyear"){
          if (year-1 in months) {
            document.getElementById("calendaryear").innerHTML = year-1;
          }
        }
        else if (event.target.id=="nextyear"){
          if (Number(year)+1 in months) {
            document.getElementById("calendaryear").innerHTML = Number(year)+1;
          }
        }
        update_dates(data, document.getElementById("calendaryear").innerHTML, document.getElementById("calendarmonth").innerHTML);
        month_dates(document.getElementById("calendaryear").innerHTML, document.getElementById("calendarmonth").innerHTML);
        document.getElementById("chosendaytitle").innerHTML = 'Selecione um dia';
        document.getElementById("eventname").innerHTML = '';
        document.getElementById("eventdescription").innerHTML = '';
      },
      change_month(event) {
        if (this.selected_day!=""){
          document.getElementById(this.selected_day).style.border = 'solid 2px transparent';
          this.selected_day = "";
        }
        var month = document.getElementById("calendarmonth").innerHTML;
        var year = document.getElementById("calendaryear").innerHTML;
        for (var month_index in months[year]) {
          if (months[year][month_index][0]==month) {
            if (event.target.id=="prevmonth"){
              if (month != "Janeiro") {
                document.getElementById("calendarmonth").innerHTML = months[year][month_index - 1][0];
                break;
              }
              else {
                if (year-1 in months) {
                  document.getElementById("calendarmonth").innerHTML = "Dezembro";
                  document.getElementById("calendaryear").innerHTML = year-1;
                  break;
                }
              }
            }
            else if (event.target.id=="nextmonth") {
              if (month != "Dezembro") {
                document.getElementById("calendarmonth").innerHTML = months[year][Number(month_index) + 1][0];
                break;
              }
              else {
                if (Number(year)+1 in months) {
                  document.getElementById("calendarmonth").innerHTML = "Janeiro";
                  document.getElementById("calendaryear").innerHTML = Number(year)+1;
                  break;
                }
              }
            }
          }      
        }
        update_dates(data, document.getElementById("calendaryear").innerHTML, document.getElementById("calendarmonth").innerHTML);
        month_dates(document.getElementById("calendaryear").innerHTML, document.getElementById("calendarmonth").innerHTML);
        document.getElementById("chosendaytitle").innerHTML = 'Selecione um dia';
        document.getElementById("eventname").innerHTML = '';
        document.getElementById("eventdescription").innerHTML = '';
      },
      getResponse() {
            const path = 'https://freakapi.azurewebsites.net/events';
            axios.get(path)
                .then((res) => {
                data = res.data;
                update_dates(data, document.getElementById("calendaryear").innerHTML, document.getElementById("calendarmonth").innerHTML);
                month_dates(document.getElementById("calendaryear").innerHTML, document.getElementById("calendarmonth").innerHTML);
            })
                .catch((err) => {
                console.error(err);
            });
        },
    },
    created() {
        this.getResponse();
    },
    components: { PageTitle },
}

function month_dates(year, month) {
  var year_data = months[year];
    for (var month_index in year_data) {
      if (year_data[month_index][0]==month){
        year_data = year_data[month_index];
        var month_number = month_index;
        break;
      }
    }
  for (var i=1; i<43; i+=1){
    if (i<year_data[2]) {
      document.getElementById(i+"day").classList = '';
      document.getElementById(i+"day").classList += "notcurrent";
      if (month != "Janeiro"){
        document.getElementById(i+"day").innerHTML = months[year][month_number-1][1] - months[year][month_number][2] + i + 1;
      }
      else {
        document.getElementById(i+"day").innerHTML = months[year][11][1] - months[year][month_number][2] + i + 1;
      }
    }
    else if (i>=year_data[2] && i<year_data[2]+year_data[1]) {
      var day = i-year_data[2]+1;
      document.getElementById(i+"day").classList = '';
      document.getElementById(i+"day").innerHTML = day;
      if (document.getElementById(i+"day").innerHTML in month_events){
        document.getElementById(i+"day").classList += month_events[day][1];
      }
    }
    else {
      document.getElementById(i+"day").classList = '';
      document.getElementById(i+"day").classList += "notcurrent";
      document.getElementById(i+"day").innerHTML = i-year_data[1]-year_data[2]+1;
    }
  }
}

function update_dates(data, year, month) {
  month_events = {}
  for (var date in data) {
    if (data[date][4] == year && data[date][6] == month){
      month_events[data[date][5]] = [data[date][1], data[date][2], data[date][3]];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Agenda {
  width: 100%;
}
.content-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.calendar {
  background-color: var(--dark-grey);
  border: var(--ice) solid 2px;
  border-radius: 25px;
  width: 500px;
  padding: 10px;
  margin: 0px 20px;
}
.calendar h3,
.chosenday h3 {
  text-align: center;
  color: var(--light);
  margin: auto;
}

.calendarheader {
  display: flex;
  justify-content: space-between;
  text-align: center;
  height: 50px;
}

#prevmonth,
#nextmonth,
#prevyear,
#nextyear {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--dark-grey);
  color: var(--ice);
  font-size: 24px;
  font-weight: bolder;
  border: 2px solid transparent;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  margin: auto 10px;
}

ul button:hover,
#nextmonth:hover,
#prevmonth:hover,
#nextyear:hover,
#prevyear:hover {
  border: 2px solid var(--ice) !important;
}

.show {
  background-color: var(--dark);
  font-weight: bolder;
}

.recording {
  background-color: var(--light);
  color: var(--dark);
  font-weight: bolder;
}

.rock-session {
  background-color: #00ffff;
  color: var(--dark);
  font-weight: bolder;
}

.calendar ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  width: 100%;
  padding: 0%;
  margin: 0px;
}

.weekdays {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: var(--dark-grey);
  color: var(--ice);
  font-weight: bolder;
  border: none;
  width: 40px;
  height: 40px;
  margin: 10px;
}

ul button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--dark-grey);
  color: var(--ice);
  font-size: 16px;
  border: none;
  border-radius: 25%;
  width: 40px;
  height: 40px;
  margin: 10px;
}

.notcurrent {
  opacity: 50%;
}

#eventname, #chosendaytitle, #calendaryear, #calendarmonth {
  font-weight: bolder;
}

#eventname, #eventdescription {
  text-align: left;
  color: var(--ice);
  margin: 20px;
}
@media (max-width: 1100px) {
  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .calendar {
    width: 90vw;
    height: auto;
    margin: 0px auto 20px auto;
  }
  .calendarheader {
    height: 10vw;
  }
  ul button, .weekdays, #prevmonth, #nextmonth, #prevyear, #nextyear {
    width: 10vw;
    height: 10vw;
    margin: 0.5vw;
  }
}
</style>
