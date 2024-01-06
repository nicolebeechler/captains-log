const React = require('react')

function Edit (props) {
    const { title, _id, entry, shipIsBroken } = props.log
    return(
        <div>
            <h1>{title} Edit Page</h1>
            <a href='/logs'>Go back to Index Page</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={title} /><br/>
                Entry: <input type="text" name="entry" defaultValue={entry}/><br/>
                Ship Status: {shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type='checkbox' name="shipIsBroken"/>}<br/>
                <input type="submit" value="Update Log" />
            </form>
        </div>
    )
}

module.exports = Edit