const React = require('react')

function Show(props){
    return (
        <div>
            <h1>{props.log.title}</h1>
            <a href='/logs'>Go Back to Index Page</a>
            <p>
                <b>{props.log.title}</b> 
                {props.log.entry} 
                The Ship is {props.log.shipIsBroken ? 'Broken.' : 'Working.'} <br/>
            </p>
        </div>
    )
}

module.exports = Show