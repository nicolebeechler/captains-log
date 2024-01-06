const React = require('react')

function Show(props){
    return (
        <div>
            <h1>{props.log.title}</h1>
            <a href='/logs'>Go Back to Index Page</a>
            <p>
                <b>{props.log.title}</b> <br/>
                {props.log.entry} <br/>
                Ship Status: {props.log.shipIsBroken ? 'Broken.' : 'Working.'} <br/>
            </p>
            <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.log.title}`}/>
            </form>
            <div>
                <a href={`/logs/${props.log._id}/edit`}><button>{`Edit this ${props.log.title}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show