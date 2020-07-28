import React from 'react'

function ButtonLink(props) {
    console.log(props);
    return (
        <a href={props.href} className={props.className}>
            {Children}
        </a>
    )
}

export default ButtonLink