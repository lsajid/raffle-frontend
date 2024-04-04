//Display a form to add a new raffle with name and token fields and a submit button. Show a success message upon successful raffle creation and an error message otherwise.

//Should also display a list of all raffles and when you click in one of the raffles of the list it should take the user to that raffle's page/view.
import RaffleCreateForm from "../components/RaffleCreateForm"
function Home() {
    return (
        <>
            <h1>Create Form Here</h1>
            <RaffleCreateForm/>
        </>
    )
}

export default Home