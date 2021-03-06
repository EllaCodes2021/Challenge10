module.exports = manQuest => {
    // destructure page data by section
    // const {name,email,ID,officeNumber } = manQuest;
const generateEmployee = manQuest =>{
        return`<div>
        ${manQuest.name}
        ${manQuest.email}
        ${manQuest.ID}
        ${manQuest.officeNumber}

        </div>`}

    // console.log(manQuest);
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title> My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
        <body>
        <header> 
        <h1> My Team </h1>
        </header>
        <main class="container my-5">
        ${generateEmployee}
        </main>
        <footer class="container text-center py-3">
        </footer>
    </body>
    </html>
    `;
};
