import { useEffect, useState } from "react";

export default function GetMovies(){
    const [user,setUser] = useState([]);
    const [searchUser, setSearchUser] = useState('');
    const getMovies=async()=>{
        let response = await fetch("http://localhost:8081/getMovies",{method:"GET",
            headers:{"Content-Type":"application/json"},
          });
          let res = await response.json();
           console.log(res);
           setUser(res.message);
        };
         useEffect(()=>{
           getMovies();
         },[]);

        const handleSearch = (e) => {
            setSearchUser(e.target.value);
        };
        
        const filteredUsers = user.filter(user => 
            user.title.toLowerCase().includes(searchUser.toLowerCase())
        );
    
    return(
        
        <>
        
        <div>
        
           
           {/* <button onClick={getUsers}>get users</button> */}
           <input className="input-box" type="text" placeholder="search movie name" value={searchUser} onChange={handleSearch}/>
            
            { filteredUsers.length>0 ? (
                filteredUsers.map((obj,index)=>{
                    return(
                        <div className="content">
                        <div key={index}>
                          <div className="container">
                            <img className="image" src={obj.poster} alt="movie image" />
                            <div className="details">
                              <h3>Title: {obj.title}</h3>
                              <p>Plot: {obj.plot}</p>
                              <p>Release Date: {obj.releaseDate}</p>
                              <p>Rating: {obj.rating}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    )
                })
            ):(
                <p>no user found</p>
            )
            }

        </div>
        </>
    )
}