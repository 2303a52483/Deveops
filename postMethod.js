function getForm(){
    return `
    <h2>POST FORM</h2>
    <form method="POST">
    Name: <input name="name"><br>
    Email: <input name="email"><br>
    <button type="submit">Submit</button>
    </form>
    `;
}
module.exports = getForm;
