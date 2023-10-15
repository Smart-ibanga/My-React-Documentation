

difference between function and components

FUNCTIONS

const getUserInfo = (firstName, lastName, country) => {

    return $(firstName ) ${lastName} live in ${country}
}

getUserInfo('smart', 'Ibanga', 'Nigeria')

COMPONENTS

const User = (props) => {
    return(
        <div>
            <h1>
                {props.firstName}
                {props.lastName}
            </h1>
            <small>{props.country}</small>
        </div>

    )
 }

 <User firstName='Smart' , lastName='Ibanga', country='Nigeria' >