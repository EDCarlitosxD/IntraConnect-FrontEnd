import './index.css'
import logo from '../../assets/img/Foto_Logo.jpg'
import email from '../../assets/img/Img_Email.jpeg'
import password from '../../assets/img/Img_Contraseдa.jpeg'
export const Login = () => {


  return (
        <div className='login-container'>

          <div className='login-box'>
            
            <div className='imagen'>
              <img src={logo} alt="Perrito" />

            </div>

            <h1 className='login-title'>Login</h1>

            <form>
    


                <div className="input-image">
                  <input type="email" placeholder="Email" required  />
                  <img src={email} alt="Perrito" />
                </div>
                
                  <div className="input-image">
                  <input type="password" placeholder="Contraseña" required/>
                  <img src={password} alt="Perrito" />
                </div>
                <button type="submit" >Login</button>
            </form>


          </div>
        
        
        </div>
    )
}
