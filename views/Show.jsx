const React = require('react')

function Show(props){
    return (
        <div>
            <h1>{props.log.title}</h1>
            <a href='/logs'>Go Back to Index Page</a>
            <p>
                {props.log.title} {props.log.date} <br/>
                {props.log.entry} <br/>
                Ship Status: {props.log.shipIsBroken ? 'Good.' : 'Broken.'}
            </p>
        </div>
    )
}

module.exports = Show