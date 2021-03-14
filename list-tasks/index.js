module.exports = async function (context, req) {
    context.log('Getting all tasks');
	const { v4: uuidv4 } = require('uuid');	
	
	let userData = {
        username: "Sebastian",
        password: "12345",
        email: "juan.frasica@mail.com"
    };
	
	const tasks = [{
		"id": uuidv4(),
        "description": "Do IETI Lab 6",
        "responsible": {
            "name": userData.username,
            "email": userData.email
        },
        "status": "In Progress",
        "dueDate": "2021-21-01"
    }, {
		"id": uuidv4(),
        "description": "Do IETI Lab 7",
        "responsible": {
            "name": userData.username,
            "email": userData.email
        },
        "status": "Ready",
        "dueDate": "2021-21-01"
    }, {
		"id": uuidv4(),
        "description": "Do Project´s stuff",
        "responsible": {
            "name": userData.username,
            "email": userData.email
        },
        "status": "Completed",
        "dueDate": "2021-21-01"
    }
    ];
	
    const responseMessage = { response: tasks};

    context.res = {
        status: 201,
        body: responseMessage
    };
}