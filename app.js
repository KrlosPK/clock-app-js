const monthEl = document.querySelector("#month");
const dateEl = document.querySelector("#date");
const dayEl = document.querySelector("#day");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");

const getDate = () => {
	let f = new Date();
	switch (f.getMonth()) {
		case 0:
			monthEl.textContent = "Jan";
			break;
		case 1:
			monthEl.textContent = "Feb";
			break;
		case 2:
			monthEl.textContent = "Mar";
			break;
		case 3:
			monthEl.textContent = "Apr";
			break;
		case 4:
			monthEl.textContent = "May";
			break;
		case 5:
			monthEl.textContent = "Jun";
			break;
		case 6:
			monthEl.textContent = "Jul";
			break;
		case 7:
			monthEl.textContent = "Aug";
			break;
		case 8:
			monthEl.textContent = "Sep";
			break;
		case 9:
			monthEl.textContent = "Oct";
			break;
		case 10:
			monthEl.textContent = "Nov";
			break;
		case 11:
			monthEl.textContent = "Dec";
			break;
	}
    dateEl.textContent = f.getDate();
	// dayEl.textContent = f.getDay();
    switch (f.getDay()) {
        case 0:
            dayEl.textContent = "Sunday"
            break;
        case 1:
            dayEl.textContent = "Monday"
            break;
        case 2:
            dayEl.textContent = "Tuesday"
            break;
        case 3:
            dayEl.textContent = "Wednesday"
            break;
        case 4:
            dayEl.textContent = "Thursday"
            break;
        case 5:
            dayEl.textContent = "Friday"
            break;
        case 6:
            dayEl.textContent = "Saturday"
            break;
    }
	hoursEl.textContent = String(f.getHours()).padStart(2, "0");
	f.getHours() > 11
		? (ampmEl.textContent = "PM")
		: (ampmEl.textContent = "AM");
	minutesEl.textContent = String(f.getMinutes()).padStart(2, "0");
	secondsEl.textContent = String(f.getSeconds()).padStart(2, "0");

	setTimeout(getDate, 1000);
};

getDate();
