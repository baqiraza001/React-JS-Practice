
function Logout({user}){
    console.log(user)
    return(
        <div>
            <h2>Username ${user.email}</h2>
        </div>
    )
}
export default Logout;