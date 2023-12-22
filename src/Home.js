import './Home.css';

function MyButton(){
    return(
    <div>
        <button type="button" class="btn btn-success">Sign In</button>
    </div>
    
)
}

function UserEntry() {
    return (
    <div>
        <p class = "signin"> Sign In</p>
    <form>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3 form-check">
    </div>
    </form>
    </div>
    );
    }

export default function App(){
    return (
        <div class ="containeir"> 
            
            <UserEntry/>
            
            <MyButton/>
        </div>
    )
}
