import { useEffect } from "react";
import { fetchUsers, deleteUser } from "../state/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const UserPage = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users);
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const deleteNow=(user)=>(e)=>{
        dispatch(deleteUser(user._id));
    }
    
    return (
        <div className="mt-5 container">
            <div>
                <Link to={'/users/create'} className="float-end btn btn-primary">Add User</Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((user, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{ user.name }</td>
                                    <td>{ user.email }</td>
                                    <td>
                                        <Link to={`users/${user._id}/edit`} type="button" className="ms-1 me-1 btn btn-info btn-sm"> Edit </Link>
                                        <button onClick={deleteNow(user)} type="button" className="ms-1 me-1 btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserPage;