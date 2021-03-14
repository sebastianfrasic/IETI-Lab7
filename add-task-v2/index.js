module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
	const { v4: uuidv4 } = require('uuid');	
    const task = req.body;
	const id = uuidv4();
    // Implement the response
	const newTask = {
		"id": id,
		...task
    }
	
    const responseMessage = { response: newTask};

    context.res = {
        status: 201,
        body: responseMessage
    };
}