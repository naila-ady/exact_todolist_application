#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//78692
//creating array to save todo list
let todoList:string[]=[];
//creating varaiable name conditions to call awhile loop
let conditions=true;
console.log(chalk.blue.bold("\n\tWelcome to TODO Application by Naila!\n"));
//all coding commented because of second editecoding
// while(conditions){
//     let addTask=await inquirer.prompt(
//         [
//             {
//                 name:"todoTask",
//                 type:"Input",
//                 message:chalk.green("Enter your new task:"),
//             }
//         ]
//     );
//     todoList.push(addTask.todoTask);
//     console.log(`${addTask.todoTask} Task added in todos list successfully.`)
//  let addMoreTask=await inquirer.prompt([
//     {
//         name:"addMore",
//         type:"confirm",
//         message:chalk.green("Do you want to add more task?"),
//         default:"false",
//     }
//  ]);
//  conditions=addMoreTask.addMore
// }
//console.log("Your updated Todo-List:" ,todoList);
//new coding for toods 

//creating varaible&making it arrow function using loop function&giving it varaible name condition
let main=async()=>{
    while (conditions){
// variable name options to define object& create differnt choices
        let options=await inquirer.prompt([         
        {
            name:"choices",
            type:"list",
            message:chalk.yellow("Select an option you want to do?"),
            choices:["Add Task","Delete Task","Update task","View TODO list","Exit"],
        }
    ]);
    if(options.choices === "Add Task"){
        await addTask()
    }
    else if(options.choices ==="Delete Task"){
        await deleteTask()
    }
    else if(options.choices ==="Update task"){
        await updateTask()
    }
    else if (options.choices ==="View TODO list"){
      await viewTask()
    }
    else if (options.choices === "Exit"){
        conditions =false;
    }
    
}
}

//creating variable addtask to call"ADDTASK"of choices array in above object&arrow function newtask to call task in it
let addTask = async () => {
    let newtask=await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:chalk.yellow("Enter your new task:"),
        
        }

    ]);
    todoList.push(newtask.task);
    console.log(`\n ${newtask.task} Task added successfully in Todod-list`);
}
//creating variable viewTask to call"VIEW TODOLIST" option of choices array in above object&arrow function newtask to call task in it
let viewTask = ()=> {
    console.log("\n Your Todo-List \n");
    todoList.forEach((task , index) =>{
        console.log(`${index +1 }:${task}`)

    })
}
//function to delete task from the list and arrow
let deleteTask =async() =>{
    await viewTask()
    let taskIndex =await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:chalk.yellow("Enter the index no you want to delete:"),

        }
    ]);
    let deleteTask =todoList.splice(taskIndex.index-1,1);
    console.log(`${deleteTask} task has been deleted from your Todo-List` );
}
let updateTask=async() =>{
    await viewTask()
let updateTask_index= await inquirer.prompt([
    {
        name:"index",
        type:"number",
        message:chalk.yellow("Enter the index no of task you want to update"),
    },
    {
        name:"new_Task",
        type:"input",
        message:chalk.yellow("Now enter your new task"),
    }

]);

todoList[updateTask_index.index-1] = updateTask_index.new_Task
console.log(`\n task at index no.${updateTask_index.index-1} updated successfully!` )
}

main();