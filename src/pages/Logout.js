import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '../theme/reusable'
import user from 'reducers/user'
import { LogOutPage } from 'theme/styles'

const LogOut = () => {

    const accessToken = useSelector((store) => store.user.accessToken)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onBackButtonClick = () => {
        navigate(-1)
      }

    useEffect(() => {
        if (!accessToken) {
          navigate('/')
        }
      }, [accessToken, navigate])


    return(
      <LogOutPage>
        <div className='LogOutContainer'>
          <h3>Are you sure you want to log out?</h3>
          <div className='buttonContainer'>
            <button
              type="button" onClick={() => dispatch(user.actions.logOut())}
            >
              Log out
            </button>
            <BackButton
              type="button" onClick={onBackButtonClick}
            >
              No, go back
            </BackButton>
          </div>
        </div>
      </LogOutPage>
            
    )
}

export default LogOut