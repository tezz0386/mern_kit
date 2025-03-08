import { Link, useNavigate, useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, updateUserState, getEditUser } from '../state/UserSlice';
import { useEffect } from 'react';
const UserForm = () => {
  const user = useSelector(state=>state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(()=>{
    dispatch(getEditUser(id));
  }, [dispatch, id]);

  const handleChange = (param) => (e) => {
    const { value } = e.target;
    dispatch(updateUserState({ key: param, value }));
  };

  const saveNow = (e)=>{
    e.preventDefault();
    dispatch(updateUser(user));
    navigate('/users');
  }
  
  return (
    <div className="mt-5 container">
      <form action="#" method="post" onSubmit={saveNow}>
        <div className="card">
          <div className="card card-header">
            <h1>User Addon Form</h1>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" className="form-control" value={user.name} onChange={handleChange('name')} />
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" className="form-control" value={user.email} onChange={handleChange('email')} />
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="email">Password</label>
                  <input type="text" name="password" className="form-control" value={user.password} onChange={handleChange('password')} />
                </div>
              </div>
            </div>
          </div>
          <div className="card card-footer">
                <div className='mt-2'>
                    <button type='submit' className="float-end m-2 btn btn-primary">Save</button>
                    <Link to={'/'} className="float-end m-2 btn btn-danger">Cancel</Link>
                </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
