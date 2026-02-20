const MAX = 100;
let attendees = [];

function addAttendee(name, email, ticketType) {
    if (attendees.length < MAX)
        attendees.push({ name, email, ticketType });
    else
        console.log("The event is full.");
}


function isFull() {
    return attendees.length === MAX;
}


function listAttendees() {
    attendees.forEach(a =>
        console.log("=>",a.name, "|", a.email, "|", a.ticketType)
    );
}


function countByTicketType(type) {
    return attendees.filter(a => a.ticketType === type).length;
}



addAttendee("Ali", "ali@gmail.com", "General");
addAttendee("Sara", "sara@gmail.com", "VIP");

listAttendees();
console.log("VIP:", countByTicketType("VIP"));
console.log("Full:", isFull());