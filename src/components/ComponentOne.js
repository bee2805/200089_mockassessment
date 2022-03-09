import axios from "axios";

axios.get('https://api.spacexdata.com/v4/launches')
.then((response) => {
    console.log(response);
})
.catch((err) => {
    console.log(err);
});


const ComponentOne = () => {
    return(

        <p>
            This is Component One
        </p>

    );
}

export default ComponentOne;