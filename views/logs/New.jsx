const React = require('react')

function New (props) {
    return (
        <div>
            <h1>New Log Page</h1>
            <a href='/logs'>Go Back to Index Page</a>
            <form action="/logs" method="POST">
                Date: <input type="DateTime-local" name="date"/><br/> 
                Title: <input type="text" name="title"/><br/>
                Entry: <input type="text" name="entry" /><br/>
                Ship is Broken?: <input type="checkbox" name="shipIsBroken" /><br/>
                <input type="submit" value="Create Log" />
            </form>
        </div>
    )
}

module.exports = New