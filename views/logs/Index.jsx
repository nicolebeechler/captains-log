const React = require('react')

function Index (props) {
    return (
        <div>
            <h1> Captain's Log Index Page</h1>
            <a href="/logs/new">Create A New Log</a>
            <ul>
            {
                    props.logs.map((log) => {
                        return (
                            <li key={log._id}>
                                <a href={`/logs/${log._id}`}>{log.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index