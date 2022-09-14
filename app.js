const containerEl = document.querySelector(".container");
const monthEl = document.querySelector("#month");
const dateEl = document.querySelector("#date");
const dayEl = document.querySelector("#day");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

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
	switch (f.getDay()) {
		case 0:
			dayEl.textContent = "Sunday";
			break;
		case 1:
			dayEl.textContent = "Monday";
			break;
		case 2:
			dayEl.textContent = "Tuesday";
			break;
		case 3:
			dayEl.textContent = "Wednesday";
			break;
		case 4:
			dayEl.textContent = "Thursday";
			break;
		case 5:
			dayEl.textContent = "Friday";
			break;
		case 6:
			dayEl.textContent = "Saturday";
			break;
	}
	hoursEl.textContent = String(f.getHours()).padStart(2, "0");
	let hours = f.getHours();
	if (hours >= 6 && hours <= 10) {
		containerEl.style.background =
			"url('https://images.pexels.com/photos/2871478/pexels-photo-2871478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
		containerEl.style.backgroundRepeat = "no-repeat";
		containerEl.style.backgroundSize = "100%";
	} else if (hours >= 11 && hours <= 18) {
		containerEl.style.background =
			"url('https://images.pexels.com/photos/8332569/pexels-photo-8332569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
		containerEl.style.backgroundRepeat = "no-repeat";
		containerEl.style.backgroundSize = "100%";
	} else if (hours >= 19 && hours <= 23) {
		containerEl.style.background =
			"url('https://images.pexels.com/photos/13279962/pexels-photo-13279962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
		containerEl.style.backgroundRepeat = "no-repeat";
		containerEl.style.backgroundSize = "100%";
	} else {
		containerEl.style.background =
			"url('https://images.pexels.com/photos/12869811/pexels-photo-12869811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
		containerEl.style.backgroundRepeat = "no-repeat";
		containerEl.style.backgroundSize = "100%";
	}
	minutesEl.textContent = String(f.getMinutes()).padStart(2, "0");
	secondsEl.textContent = String(f.getSeconds()).padStart(2, "0");

	setTimeout(getDate, 1000);
};

getDate();
