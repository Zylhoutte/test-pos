import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { admin } = useSelector((state) => state.auth)


  useEffect(() => {

    if (!admin) {
      navigate('/admin')
    }



    return () => {

    }
  }, [admin, navigate,dispatch])


  return (
    <>
      <section className='heading'>
        <h1>Welcome {admin && admin.username}</h1>
        <p>Goals Dashboard</p>
      </section>
    </>
  )
}

export default Dashboard