import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../sharedComponents/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const SignUp = () => {

    const { createUser, googleSignin } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    // const navigate = useNavigate()
    // const location=useLocation()

    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photoURL = form.photoURL.value
        console.log(name, email, password, photoURL);

        // check password length
        if (password.length < 6) {
            return alert('Password must be at least 6 characters or too long')
        }
        // check capital letter
        else if (!/[A-Z]/.test(password)) {
            return alert('Please make sure your password has at least one capital letter')
        }
        // check special character
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\|'"\-=]/.test(password)) {
            return alert('Please make sure at least one special character')
        }


        // create user with email and password
        createUser(email, password)
            .then(() => {
                const userInfo = {
                    email: email,
                    role:'user'
                }
                // console.log(userInfo);

                // send user data in server
                axiosPublic.post("/api/v1/users", userInfo)
                    .then(res => {
                        console.log(res.data);
                    })

                // navigate(location?.state?location.state:"/")
                return toast.success('Your account has been created successfully!')
            })
            .catch((error) => {
                return toast.error(error.message);
            })
    }

    // googleSignin
    const handleGoogleSignin = () => {
        googleSignin()
            .then((res) => {
                // console.log(res);

                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email,
                    role:'user'
                }

                // send user data in serverside
                axiosPublic.post("/api/v1/users", userInfo)
                    .then(result => {
                        console.log(result.data);
                    })

                // navigate(location?.state?location.state:"/")
                return toast.success('Login Successful by Google')

            })
            .catch()
    }


    return (
        <div>

            {/* Navbar */}
            <div  >
                <Navbar />
            </div>

            <div className="flex justify-center mt-20 my-10" >
                <div className="bg-[#f4f1ff] w-[310px] h-[530px] rounded-lg p-4">
                    <form onSubmit={handleSignUp} className="space-y-2 my-5" >
                        <h2 className="text-lg font-bold text-[#2a2a2a]" >
                            Register
                        </h2>
                        <p className="text-lg font-semibold text-[#272727]" >Please provide your details.</p>

                        {/* social signin */}

                        <div>
                            <button onClick={handleGoogleSignin} className="w-full border-2 border-[#e5e5e5] rounded-md py-1 bg-white flex justify-center items-center gap-2 text-[#494949] font-bold text-[14px] cursor-pointer"> <div className="text-2xl" ><FcGoogle /></div> Sign in with google</button>
                        </div>

                        {/* Horizontal Line "Or" */}
                        <div className="flex items-center relative z-10">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <h2 className="text-base text-[#2a2a2a] relative z-10 mx-2">Or</h2>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>


                        {/* name */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">User Name</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#19cb98]" type="text" name="name" />
                        </div>

                        {/* email */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">Email Address</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#19cb98]" type="email" name="email" required />
                        </div>

                        {/* password */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">Password</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#19cb98]" type="password" name="password" required />
                        </div>


                        {/* photoURL */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">PhotoURL</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#19cb98]" type="text" name="photoURL" />
                        </div>


                        {/* button */}
                        <div>
                            <input className="bg-[#19cb98] text-[#2a2a2a] font-semibold py-1 border-2 border-[#19cb98] w-full rounded-md " type="submit" value="Continue" />
                        </div>


                        {/* signup */}
                        <div className="text-center" >
                            <p className="text-[14px] text-[2a2a2a] font-semibold">Already have an account? <Link className="underline" to="/signin" >Signin</Link></p>
                        </div>

                    </form>

                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default SignUp;